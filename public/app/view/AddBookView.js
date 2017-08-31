Ext.define('LibraryExt.view.AddBookView', {
    extend: 'Ext.form.Panel',
    alias: 'widget.addBookView',
    xtype: 'formpanel',
    id: 'addNewBookForm',
    title: 'Add User',
    width: 300,
    height: 280,
    floating: true,
    centered: true,
    closable: false,
    modal: true,
    buttons: [{
            text: 'New Book',
            action: 'addBook'            
        }, {
            text: 'Cancel',            
            action: 'close'
        }],
    items: [{
            xtype: 'textfield',
            name: 'title',
            fieldLabel: 'Title',
            margin: '20 0 0 10',
            vtype: 'alpha'

        }, {
            xtype: 'textfield',
            name: 'author',
            fieldLabel: 'Author',
            margin: '10 0 0 10',
            vtype: 'alpha'

        }, {
            xtype: 'textfield',
            name: 'price',
            fieldLabel: 'Price',
            margin: '10 0 0 10',
            //vtype: 'number'

        }, {
            xtype: 'textfield',
            name: 'year',
            fieldLabel: 'Year',
            margin: '10 0 0 10',
            //vtype: 'number'

        }, {
            xtype: 'textfield',
            name: 'rating',
            fieldLabel: 'Rating',
            margin: '10 0 0 10',
            //vtype: 'number'

        }]
});