Ext.define('LibraryExt.view.BookGridView', {
    extend: 'Ext.grid.Panel',
    uses: [
        'LibraryExt.view.binding.BookViewModel',       
    ],
    alias: 'widget.bookGridView',
    height: 300,
    frame: true,
    xtype: 'bookGridView',
    reference: 'bookGridView',
    controller: 'bookViewController',
    id: 'bookGridView',
    session: true,
    viewModel: {
        type: 'binding.bookviewmodel'
    },
    bind: '{books}',
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
            width: 80,
            text: 'Action',
            listeners: {
                click: 'onDeleteBookClick'
            },
            items: [{
                    icon: 'img/del.png',
                }]
        }],
    listeners: {
        beforeitemdblclick: 'onUpdateBookDbClick'
    },

    selType: 'rowmodel'
});
