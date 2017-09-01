Ext.define('LibraryExt.view.binding.BookSessionModel', {
    extend: 'Ext.app.ViewModel',
    requires : [
        'LibraryExt.model.Book'
    ],
    alias: 'viewmodel.binding.booksession',

    stores: {        
        books: {
            model: 'LibraryExt.model.Book',
            autoLoad: true,
            session: true
        }
    }
});


