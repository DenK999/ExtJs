Ext.define('LibraryExt.view.BookGridView', {
    extend: 'Ext.grid.Panel',
    alias: 'widget.bookGridView',
    width: 400,
    height: 300,
    frame: true,
    itemId: 'myGrid',
    store: 'BookStore',
    iconCls: 'icon-user',
    viewConfig: {
        markDirty: false
    },
    columns: [
        {
            text: 'Title',
            flex: 1,
            sortable: true,
            dataIndex: 'title'
        }, {
            text: 'Author',
            flex: 1,
            sortable: true,
            dataIndex: 'author'
        }, {
            flex: 1,
            text: 'Price',
            sortable: true,
            dataIndex: 'price'
        }, {
            flex: 1,
            text: 'Year',
            sortable: true,
            dataIndex: 'year'
        }, {
            flex: 1,
            text: 'Rating',
            sortable: true,
            dataIndex: 'rating'
        }, {
            xtype: 'actioncolumn',
            width: 50,
            text: 'Action',
            action: 'deleteRow',
            items: [{
                    icon: 'img/del.png',
                    action: 'deleteRow',
                    handler: function (grid, rowIndex) {                       
                        this.fireEvent('click', arguments);
                    }
                }]
        }],
    selType: 'rowmodel'
});


