Ext.define('LibraryExt.view.binding.BookViewModel', {
    extend: 'Ext.app.ViewModel',
    requires: [
        'LibraryExt.model.Book'
    ],
    alias: 'viewmodel.binding.bookviewmodel',

    stores: {
        books: {
            model: 'LibraryExt.model.Book',
            autoLoad: true,
            session: true
        }
    }
});


