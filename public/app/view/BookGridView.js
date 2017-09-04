Ext.define('LibraryExt.view.BookGridView', {
    extend: 'Ext.grid.Panel',
    uses: [
        'LibraryExt.view.binding.BookViewModel'
    ],
    alias: 'widget.bookGridView',    
    height: 300,
    frame: true,
    xtype: 'bookGridView',
    reference: 'bookGridView',
    id: 'myGrid',
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
            items: [{
                    icon: 'img/del.png',                    
                    handler: function(view, ri, ci, item, e, record) {
                        view.getStore().remove( record );
                    }
                }]
        }],
    selType: 'rowmodel'
});
