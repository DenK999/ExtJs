var store = Ext.create('Ext.data.Store', {
    model: 'User',
    autoLoad: true,
    proxy: {
        type: 'ajax',
        url: '/index/test/7',
        reader: {
            type: 'json',
            root: 'users'
        }
    }
});

Ext.onReady(function () {
    Ext.create('Ext.Panel', {
        title: 'Count record',
        height: 120,
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
                        handler: function () {
                            window.store.proxy.url = '/index/test/' + Ext.getCmp('count').getValue();
                            Ext.getCmp('grid').getStore().reload();
                            console.log(Ext.getCmp('grid').getView());
                        }
                    }]
            }],
        renderTo: Ext.getBody()
    });

});

Ext.application({
    name: 'Fiddle',
    launch: function () {
        Ext.create('Ext.grid.Panel', {
            renderTo: Ext.getBody(),
            id: 'grid',
            store: store,
            height: 960,
            title: 'Test Grid',
            plugins: [{
                    ptype: 'rowediting',
                    clicksToEdit: 2
                }],
            seltype: 'rowModel',
            dockedItems: [{
                    xtype: 'pagingtoolbar',
                    store: store,
                    dock: 'bottom',
                    displayInfo: true,
                    beforePageText: 'Page',
                    afterPageText: 'for {0}',
                    displayMsg: 'Users {0} - {1} from {2}'
                }],
            columns: [{
                    xtype: 'rownumberer'
                }, {
                    text: 'Name',
                    xtype: 'templatecolumn',
                    flex: 1,
                    dataIndex: 'name',
                    tpl: '<b>{name} {surname}</b>'
                }, {
                    header: 'Age',
                    dataIndex: 'age',
                    editor: {
                        xtype: 'textfield',
                        allowBlank: false
                    }
                }, {
                    header: 'Level',
                    dataIndex: 'level',
                    flex: 1,
                }, {
                    header: 'Parent_id',
                    dataIndex: 'parent_id',
                    flex: 1
                }, {
                    xtype: 'actioncolumn',
                    width: 40,
                    items: [{
                            icon: 'img/del.png',
                            handler: function (grid, rowIndex, colIndex) {
                                var selectionModel = grid.getSelectionModel(), record;
                                selectionModel.select(rowIndex);
                                record = selectionModel.getSelection()[0];
                                alert('Do you want delete: ' + record.get('name'));
                                store.removeAt(rowIndex);
                            }
                        }]
                }]
        });
    }
});