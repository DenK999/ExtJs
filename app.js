Ext.application({
    name : 'Fiddle',
    launch : function() {
        Ext.define('User', {
           extend: 'Ext.data.Model',
                     
            idProperty: 'userID',
                     
            fields: [{
                name: 'name',
                type: 'string'
            }, {
                name: 'surname',
                type: 'string'
            }, {
                name: 'age',
                type: 'int'
            }, {
                name: 'level',
                type: 'int'
            }, {
                name: 'parent_id',
                type: 'int'
            }]
      });
        
        var store = Ext.create('Ext.data.Store', {
                    model: 'User',
                    autoLoad: true,
                    proxy: {
                            type: 'ajax',
                            url: 'users.php',
                            reader: {
                                type: 'json',
                                root: 'users'
                            }
                }
        });
        
        console.log(store.proxy.reader);
        
        Ext.create('Ext.grid.Panel', {
        renderTo: Ext.getBody(),
        store: store,   
        height: 960,
        title: 'Test Grid',
        plugins:[{
                ptype:'rowediting',
                clicksToEdit: 2
        }],
        seltype: 'rowModel',
        dockedItems:[{
                xtype: 'pagingtoolbar',
                store: store,
                dock: 'bottom',
                displayInfo: true,
                beforePageText: 'Page',
                afterPageText: 'for {0}',
                displayMsg: 'Users {0} - {1} from {2}'
        }],
        columns: [{
               xtype:'rownumberer' 
        },{
           text: 'Name',
           xtype: 'templatecolumn',
           flex: 1,
           dataIndex: 'name',
           tpl: '<b>{name} {surname}</b>'
        }, {
            header: 'Age',
            dataIndex: 'age',
            editor:{
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
        },{
            xtype:'actioncolumn',
            width:40,
            items:[{
                    icon:'del.png',
                    handler:function (grid, rowIndex, colIndex) {
                    var selectionModel= grid.getSelectionModel(), record;
                    selectionModel.select(rowIndex);
                    record = selectionModel.getSelection()[0];
                    alert('Do you want delete: '+ record.get('name'));
                    store.removeAt(rowIndex);
                 }
                }]
        }]
        });
    }
});