Ext.define('LibraryExt.controller.BookController', {
    extend: 'Ext.app.Controller',

    init: function () {
        this.control({
            'button[action=show]': {
                click: 'showCountGrid'
            },
            'button[action=newBook]': {
                click: 'showFormNewBook'
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
                beforeitemdblclick: 'showFormUpdateBook'
            }
        });
    },
    
    closeActiveWindow: function () {
        Ext.WindowManager.getActive().close();
    },

    showCountGrid: function () {
        var store = Ext.getCmp('myGrid').getStore();
        store.proxy.url = 'index/book/' + Ext.getCmp('count').getValue();        
        store.reload();

    },

    showFormNewBook: function () {
        Ext.create('LibraryExt.view.SaveBookForm', {
            viewModel: {
                data: {
                    title: 'New book',
                    book: null
                }
            }
        }).show();
    },
    showFormUpdateBook: function (view, record, index, item) {

        Ext.create('LibraryExt.view.SaveBookForm', {
            record: record,
            viewModel: {
                data: {
                    title: 'Update book',
                    book: record
                }
            }
        }).show();

    },

    deleteRow: function (arguments) {
        Ext.getCmp('myGrid').getStore().remove(arguments[1]);


//        var selectionModel = arguments[0].getSelectionModel(), record;
//        selectionModel.select(arguments[1]);
//        record = selectionModel.getSelection()[0];
//        Ext.MessageBox.show({
//            title: 'Delete record',
//            msg: 'Do you want delete: ' + record.get('title'),
//            buttons: Ext.MessageBox.OKCANCEL,
//            icon: Ext.MessageBox.QUESTION,
//            fn: function (btn) {
//                if (btn == 'ok') {
//                    Ext.Ajax.request({
//                        url: '/index/delete/' + record.get('id'),
//                        disableCaching: false,
//                        success: function (response) {
//                            Ext.MessageBox.show({
//                                title: 'Deleting record',
//                                msg: response.responseText,
//                                buttons: Ext.MessageBox.OK,
//                                icon: Ext.MessageBox.INFO,
//                                fn: function () {
//                                    //Ext.getCmp('myGrid').getStore().removeAt(arguments[1]);
//                                    Ext.getCmp('myGrid').getStore().reload();
//                                }
//                            });
//                        },
//                        failure: function () {
//                            console.log('error');
//                        }
//                    });
//                }
//            }
//        });
    },    

    saveBook: function (view, record) {
        var bookDataArray = Ext.getCmp('savebookform').getForm().getValues();
        var book = Ext.create('LibraryExt.model.Book', bookDataArray);
        book.save({            
            success: function (record, operation) {
                Ext.MessageBox.show({
                    title: 'Save book',
                    width: 1000,
                    msg: operation.getResponse().responseText,
                    buttons: Ext.MessageBox.OK,
                    icon: Ext.MessageBox.INFO
                });
            }
            
        });
        this.closeActiveWindow();
        Ext.getCmp('myGrid').getStore().reload();
    }
});