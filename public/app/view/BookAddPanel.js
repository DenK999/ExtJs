Ext.define('LibraryExt.view.BookAddPanel', {
    extend: 'Ext.form.Panel',
    alias: 'widget.bookAddPanel',
    controllers: 'BookController',
    bodyPadding: 10,
    frame: true,
    layout: 'column',
    defaults: {
        xtype: 'form',
        labelAlign: 'top',
        anchor: '100%'
    },
    items: [{
            columnWidth: 0.2,
            items: [{
                    xtype: 'textfield',
                    fieldLabel: 'Count Rows',
                    name: 'count',
                    id: 'count'
                }]
        }, {
            items: [{
                    xtype: 'button',
                    text: 'Show',
                    enableToggle: true,
                    action: 'show'
                }]
        }, {
            items: [{
                    xtype: 'button',
                    text: 'New book',
                    margin: '0 0 0 1',
                    enableToggle: true,
                    action: 'newBook'
                }]
        }],
});