Ext.define('LibraryExt.view.BookGridView', {
    extend: 'Ext.grid.Panel',
    alias: 'widget.bookGridView',
    width: 400,
    height: 300,
    frame: true,
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
            dataIndex: 'title',
            editor: {
                xtype: 'textfield',
                allowBlank: false,
                blankText: 'Test'
            }
        },{
            text: 'Author',
            flex: 1,
            sortable: true,
            dataIndex: 'author',
            editor: {
                xtype: 'textfield',
                allowBlank: false,
                blankText: 'Test2'
            }
        },{
            flex: 2,
            text: 'Price',
            sortable: true,
            dataIndex: 'price',
            editor: {
                xtype: 'textfield',
                regex: /^([0-9]{1,20})*$/,
                regexText: 'Test3',
                allowBlank: false,
                blankText: 'Requaired'
            }
        },{
            flex: 2,
            text: 'Year',
            sortable: true,
            dataIndex: 'year'
        },{
            flex: 2,
            text: 'Rating',
            sortable: true,
            dataIndex: 'rating'
        }],
    selType: 'rowmodel'    
});


