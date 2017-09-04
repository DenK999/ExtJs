Ext.define('LibraryExt.view.BookMenuView', {
    extend: 'Ext.menu.Menu',
    alias: 'widget.bookMenuView',
    floating: false,
    items: [{
            xtype: 'button',
            text: 'Options',
            menu: [{
                    text: 'Menu Item 1'
                }, {
                    text: 'Menu Item 2'
                }, {
                    text: 'Menu Item 3'
                }]
        }]
});