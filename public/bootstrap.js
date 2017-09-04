Ext.application({
    name: 'LibraryExt',

    views: [
        'BookGridView',
        'BookAddPanel',
        'AddBookView',
        'BookCatalogView',
    ],

    controllers: [
        'BookController'
    ],

    launch: function () {
        Ext.create('Ext.container.Viewport', {
            layout: 'fit',
            items: {
                xtype: 'bookCatalogView'
            }
        });
    }
});