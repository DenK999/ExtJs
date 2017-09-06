Ext.define('LibraryExt.view.BookAddPanel', {
    extend: 'Ext.form.Panel',
    uses: [
        'LibraryExt.controller.BookViewController'
    ],
    alias: 'widget.bookAddPanel',
    controller: 'bookViewController',
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
                    name: 'countRow',
                    id: 'countRow'
                }]
        }, {
            items: [{
                    xtype: 'button',
                    text: 'Show',
                    enableToggle: true,
                    listeners: {
                        click: 'onShowCountRowClick'
                    }
                }]
        }, {
            items: [{
                    xtype: 'button',
                    text: 'New book',
                    margin: '0 0 0 1',
                    enableToggle: true,
                    listeners: {
                        click: 'onNewBookClick'
                    }
                }]
        }, {
            items: [{
                    margin: '-1 0 0 1',
                    xtype: 'bookMenuView'
                }]
        }],
});