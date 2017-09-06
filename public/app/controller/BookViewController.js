Ext.define('LibraryExt.controller.BookViewController', {
    extend: 'Ext.app.ViewController',
    alias: 'controller.bookViewController',

    onSaveBookClick: function () {
        var book = this.getViewModel().get('book');
        book.save({
            success: function (record, operation) {
                Ext.MessageBox.show({
                    title: 'Save book',
                    width: 700,
                    msg: operation.getResponse().responseText,
                    buttons: Ext.MessageBox.OK,
                    icon: Ext.MessageBox.INFO
                });
            }

        });
        Ext.WindowManager.getActive().close();
    },

    onDeleteBookClick: function (view, ri, ci, item, e, record) {
        record.erase();
    },

    onNewBookClick: function () {
        record = Ext.create('LibraryExt.model.Book');
        this.bookFormShow('New book', record);
    },

    onUpdateBookDbClick: function (view, record, index, item) {
        this.bookFormShow('Update book', record);

    },

    bookFormShow: function (title, record) {
        Ext.create('LibraryExt.view.SaveBookForm', {
            viewModel: {
                data: {
                    title: title,
                    book: record
                }
            }
        }).show();
    },

    onCloseActiveWindowClick: function () {
        Ext.WindowManager.getActive().close();
    },

    onShowCountRowClick: function (view, rows) {
        var countRow = Ext.getCmp('countRow').getValue();
        var store = Ext.getCmp('bookGridView').getStore();
        store.proxy.url = 'index/book/' + countRow;
        store.reload();

    }

});