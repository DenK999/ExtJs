Ext.define('LibraryExt.view.BookCatalogView', {
    extend: 'Ext.panel.Panel',
    width: 500,
    height: 360,
    padding: 10,
    alias: 'widget.bookCatalogView',
    layout: 'border',
    items: [
        {
            xtype: 'bookGridView',
            region: 'center'
        },
        {
            xtype: 'panel',
            html: '<div style="font: normal 18px cursive"><center><font size = "10">Books catalog</font></center></div>',
            region: 'north',
            height: 80
        }
    ],
    renderTo: Ext.getBody()
});