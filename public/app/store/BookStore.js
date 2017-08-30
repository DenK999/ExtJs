Ext.define('LibraryExt.store.BookStore', {
    extend: 'Ext.data.Store',
    requires : [
        'LibraryExt.model.Book'
    ],
    model: 'LibraryExt.model.Book',
    autoLoad: true,
    
    proxy: {
        type: 'ajax',        
        url: 'index/test',
        reader: {
            type: 'json',
            root: 'users'
        }
    }
});
