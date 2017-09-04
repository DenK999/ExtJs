Ext.define('LibraryExt.view.SaveBookForm', {
    extend: 'Ext.form.Panel',
    alias: 'widget.saveBookForm',
    xtype: 'savebookform',
    id: 'savebookform',
    bind: {
        title: '{title}'
    },
    width: 300,   
    floating: true,
    centered: true,
    modal: true,
    modelValidation: true,
    buttons: [{
            text: 'Save',
            action: 'saveBook'
        }, {
            text: 'Cancel',
            action: 'close'
        }],
    items: [{
            hidden: true,
            xtype: 'textfield',
            name: 'id',
            bind: '{book.id}'
        }, {
            xtype: 'textfield',
            name: 'title',
            fieldLabel: 'Title',
            margin: '15 0 0 10',
            vtype: 'alphanum',
            bind: '{book.title}'
        }, {
            xtype: 'textfield',
            name: 'author',
            fieldLabel: 'Author',
            margin: '10 0 0 10',
            vtype: 'alphanum',
            bind: '{book.author}'

        }, {
            xtype: 'textfield',
            name: 'price',
            fieldLabel: 'Price',
            margin: '10 0 0 10',
            bind: '{book.price}',
            vtype: 'number',
            msgTarget: 'under'

        }, {
            xtype: 'textfield',
            name: 'year',
            fieldLabel: 'Year',
            margin: '10 0 0 10',
            bind: '{book.year}', 
            msgTarget: 'under'

        }, {
            xtype: 'textfield',
            name: 'rating',
            fieldLabel: 'Rating',
            margin: '10 0 15 10',
            bind: '{book.rating}',
            vtype: 'number',
            msgTarget: 'under'

        }]
});

Ext.apply(Ext.form.field.VTypes, {
    number: function (val, field) {
        var numberRegex = /^\d{1,4}$/;
        return numberRegex.test(val);
    },
    numberText: 'Should be digits from 1 to 4',
    numberMask: /[\d]/
});