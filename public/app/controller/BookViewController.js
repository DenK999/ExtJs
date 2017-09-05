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
    }
    
    

});