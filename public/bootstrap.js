Ext.application({
    name: 'LibraryExt',

    views: [
        'BookGridView',
        'BookAddPanel',
        'SaveBookForm',
        'BookCatalogView',
        'BookMenuView'
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