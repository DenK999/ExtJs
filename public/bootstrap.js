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