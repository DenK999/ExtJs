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
            'button[action=addBook]': {
                click: 'addNewBook'
            },
            'button[action=close]': {
                click: 'addNewBook'
            },
            '#myGrid actioncolumn': {
                click: 'deleteRow'
            }
        });
    },

    showCountGrid: function () {
        Ext.getStore('BookStore').proxy.url = 'index/test/' + Ext.getCmp('count').getValue();
        Ext.widget('bookGridView').getStore().reload();
    },

    showViewNewBook: function () {
        Ext.widget('addBookView').show();
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
                                    Ext.getStore('BookStore').removeAt(arguments[1]);
                                    Ext.widget('bookGridView').getStore().reload();
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
    
    closeActiveWindow: function(){
        Ext.WindowManager.getActive().close();
    },
    
    addNewBook:function(){
        console.log("Test");
        this.closeActiveWindow();
    }

});