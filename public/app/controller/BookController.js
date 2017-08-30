Ext.define('LibraryExt.controller.BookController', {
    extend: 'Ext.app.Controller',
    
    
    init: function() {
         this.control({
            'button[action=show]': {
             click: 'showCountGrid'
         },
         'button[action=newBook]': {
             click: 'showViewNewBook'
         }
        });
     },
  

     showCountGrid: function() {
         Ext.getStore('BookStore').proxy.url = 'index/test/'+ Ext.getCmp('count').getValue();
         Ext.widget('bookGridView').getStore().reload();         
     },
     
     showViewNewBook: function(){
         Ext.widget('addBookView').show();
     }

});