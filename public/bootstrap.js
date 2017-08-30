Ext.application({
    name: 'LibraryExt',
    
    views:[
      'BookGridView',      
      'BookAddPanel',
      'AddBookView',
      'BookCatalogView'
    ],
    
    controllers : [
        'BookController'
    ],

    stores : [
        'BookStore'
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