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
        record = Ext.create('LibraryExt.model.Book');
        Ext.create('LibraryExt.view.SaveBookForm', {
            viewModel: {
                data: {
                    title: 'New book',
                    book: record
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

    }
});