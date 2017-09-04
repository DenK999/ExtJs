Ext.define('LibraryExt.view.BookCatalogView', {
    extend: 'Ext.panel.Panel',
    xtype: 'bookcatalogview',
    width: 500,
    height: 360,
    padding: 10,
    alias: 'widget.bookCatalogView',
    layout: 'border',
    items: [
        {
            xtype: 'panel',
            html: '<div style="font: normal 18px cursive"><center><font size = "10">Books catalog</font></center></div>',
            region: 'north',
            height: 80
        },
        {
            xtype: 'bookAddPanel',
            title: 'Count record',
            region: 'north',
            height: 90,
            collapsible: true,
            collapsed: false
        },
        {
            xtype: 'bookGridView',
            region: 'center'
        }      
    ],
    renderTo: Ext.getBody()
});