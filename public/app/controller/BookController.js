Ext.define('LibraryExt.controller.BookController', {
    extend: 'Ext.app.Controller',

    init: function () {
        this.control({
            'button[action=show]': {
                click: 'showCountGrid'
            },
            'button[action=newBook]': {
                click: 'showViewNewBook'
            },
            'button[action=saveBook]': {
                click: 'saveBook'
            },
            'button[action=close]': {
                click: 'closeActiveWindow'
            },
            '#myGrid actioncolumn': {
                click: 'deleteRow'
            },
            '#myGrid': {
                beforeitemdblclick: 'updateRow'
            }
        });
    },

    showCountGrid: function () {
        var store = Ext.getCmp('myGrid').getStore();
        store.proxy.url = 'index/test/' + Ext.getCmp('count').getValue();
        store.reload();
        
    },

    showViewNewBook: function () {
        Ext.create('Ext.container.Viewport', {
            xtype: 'savebookform',
            width: 400,
            viewModel: {
                data: {
                    title: 'New book',
                    book: ''
                }
            }
        });
        Ext.widget('saveBookView').show();
    },

    deleteRow: function (arguments) {
        var selectionModel = arguments[0].getSelectionModel(), record;
        selectionModel.select(arguments[1]);
        record = selectionModel.getSelection()[0];
        Ext.MessageBox.show({
            title: 'Delete record',
            msg: 'Do you want delete: ' + record.get('title'),
            buttons: Ext.MessageBox.OKCANCEL,
            icon: Ext.MessageBox.QUESTION,
            fn: function (btn) {
                if (btn == 'ok') {
                    Ext.Ajax.request({
                        url: '/index/delete/' + record.get('id'),
                        disableCaching: false,
                        success: function (response) {
                            Ext.MessageBox.show({
                                title: 'Deleting record',
                                msg: response.responseText,
                                buttons: Ext.MessageBox.OK,
                                icon: Ext.MessageBox.INFO,
                                fn: function () {
                                    Ext.getCmp('myGrid').getStore().removeAt(arguments[1]);
                                    Ext.getCmp('myGrid').getStore().reload();
                                }
                            });
                        },
                        failure: function () {
                            console.log('error');
                        }
                    });
                }
            }
        });
    },

    closeActiveWindow: function () {
        Ext.WindowManager.getActive().close();
    },

    saveBook: function (view, record) {
        var bookDataArray = Ext.getCmp('savebookform').getForm().getValues();
        Ext.Ajax.request({
            url: '/index/save/',
            method: 'POST',
            params: {
                bookData: Ext.JSON.encode(bookDataArray)
            },
            success: function (response) {               
                Ext.MessageBox.show({
                    title: 'Save book',
                    width: 1000,
                    msg: response.responseText,
                    buttons: Ext.MessageBox.OK,
                    icon: Ext.MessageBox.INFO
                });
            }
        });
        
        this.closeActiveWindow();
        Ext.getCmp('myGrid').getStore().reload();
    },

    updateRow: function (view, record, index, item) {

        Ext.create('Ext.container.Viewport', {
            xtype: 'savebookform',
            width: 400,
            record: record,
            viewModel: {
                data: {
                    title: 'Update book',
                    book: record
                }
            }
        });
        Ext.widget('saveBookView').show();

    }
});