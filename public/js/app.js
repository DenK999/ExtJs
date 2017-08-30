var numberVType = {
    number: function (val, field) {
        var numberRegex = /^\d{1,2}$/;
        return numberRegex.test(val);
    },
    numberText: 'Should be one or two digits',
    numberMask: /[\d]/
};

Ext.apply(Ext.form.field.VTypes, numberVType);

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
                        }
                    }]
            }, {
                items: [{
                        xtype: 'button',
                        text: 'New User',
                        enableToggle: true,
                        handler: function () {
                            var formAdd = Ext.create('Ext.form.Panel', {
                                xtype: 'formpanel',
                                title: 'Add User',
                                width: 300,
                                height: 200,
                                floating: true,
                                centered: true,
                                closable: false,
                                modal: true,
                                buttons: [{
                                        text: 'Create User',
                                        iconCls: 'x-fa fa-check',
                                        handler: function () {
                                            Ext.Ajax.request({
                                                url: '/index/create/',
                                                method: 'POST',
                                                params:
                                                        {
                                                            userData: Ext.JSON.encode(formAdd.getValues())
                                                        },
                                                success: function (response) {
                                                    Ext.MessageBox.show({
                                                        title: 'Add User',
                                                        width: 1000,
                                                        msg: response.responseText,
                                                        buttons: Ext.MessageBox.OK,
                                                        icon: Ext.MessageBox.INFO
                                                    });
                                                }
                                            });

                                            formAdd.close();
                                        }
                                    }, {
                                        text: 'Cancel',
                                        iconCls: 'x-fa fa-close',
                                        handler: function () {
                                            formAdd.close();
                                        }
                                    }],
                                items: [{
                                        xtype: 'textfield',
                                        name: 'name',
                                        fieldLabel: 'Name',
                                        margin: '20 0 0 10',
                                        vtype: 'alpha'

                                    }, {
                                        xtype: 'textfield',
                                        name: 'surname',
                                        fieldLabel: 'Surname',
                                        margin: '10 0 0 10',
                                        vtype: 'alpha'

                                    }, {
                                        xtype: 'textfield',
                                        name: 'age',
                                        fieldLabel: 'Age',
                                        margin: '10 0 0 10',
                                        vtype: 'number'

                                    }]

                            })
                            formAdd.show();
                        }
                    }]
            }],
        renderTo: Ext.getBody()
    });

});

Ext.application({
    name: 'UserList',
    launch: function () {
        Ext.create('Ext.grid.Panel', {
            renderTo: Ext.getBody(),
            id: 'grid',
            store: store,
            height: 840,
            title: 'Test Grid',
            listeners: {
                itemdblclick: function (view, record) {
                    var f = Ext.create('Ext.form.Panel', {
                        xtype: 'formpanel',
                        title: 'Update Record',
                        width: 300,
                        height: 280,
                        floating: true,
                        centered: true,
                        modal: true,
                        buttons: [{
                                text: 'Update',
                                iconCls: 'x-fa fa-check',
                                handler: function () {
                                    f.updateRecord(record);
                                    Ext.Ajax.request({
                                        url: '/index/update/',
                                        method: 'POST',
                                        params:
                                                {
                                                    userData: Ext.JSON.encode(record.data)
                                                },
                                        success: function (response) {
                                            Ext.MessageBox.show({
                                                title: 'Update record',
                                                msg: response.responseText,
                                                buttons: Ext.MessageBox.OK,
                                                icon: Ext.MessageBox.INFO
                                            });
                                        }
                                    });

                                    f.close();
                                }
                            }, {
                                text: 'Cancel',
                                iconCls: 'x-fa fa-close',
                                handler: function () {
                                    f.close();
                                }
                            }],
                        items: [{
                                xtype: 'textfield',
                                name: 'name',
                                fieldLabel: 'Name',
                                margin: '20 0 0 10',
                                vtype: 'alpha'

                            }, {
                                xtype: 'textfield',
                                name: 'surname',
                                fieldLabel: 'Surname',
                                margin: '10 0 0 10',
                                vtype: 'alpha'

                            }, {
                                xtype: 'textfield',
                                name: 'age',
                                fieldLabel: 'Age',
                                margin: '10 0 0 10',
                                vtype: 'number'

                            }, {
                                xtype: 'textfield',
                                name: 'level',
                                fieldLabel: 'Level',
                                margin: '10 0 0 10',
                                vtype: 'number'

                            }, {
                                xtype: 'textfield',
                                name: 'parent_id',
                                fieldLabel: 'Parent id',
                                margin: '10 0 0 10',
                                vtype: 'number'

                            }]
                    })
                    f.show();
                    f.loadRecord(record);
                }
            },
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
                    xtype: 'rownumberer',
                    width: 50
                }, {
                    header: 'ID',
                    dataIndex: 'id',
                    flex: 1,

                }, {
                    text: 'Name',
                    xtype: 'templatecolumn',
                    flex: 1,
                    dataIndex: 'name',
                    tpl: '<b>{name}</b>'
                }, {
                    header: 'Surname',
                    xtype: 'templatecolumn',
                    flex: 1,
                    dataIndex: 'surname',
                    tpl: '<b>{surname}</b>'
                }, {
                    header: 'Age',
                    dataIndex: 'age',
                    flex: 1,

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

                                Ext.MessageBox.show({
                                    title: 'Delete record',
                                    msg: 'Do you want delete: ' + record.get('id'),
                                    buttons: Ext.MessageBox.OKCANCEL,
                                    icon: Ext.MessageBox.QUESTION,
                                    fn: function (btn) {
                                        if (btn == 'ok') {
                                            Ext.Ajax.request({
                                                url: '/index/delete/' + record.get('id'),
                                                disableCaching: false,
                                                success: function (response) {
                                                    Ext.MessageBox.show({
                                                        title: 'Deleting record',
                                                        msg: response.responseText,
                                                        buttons: Ext.MessageBox.OK,
                                                        icon: Ext.MessageBox.INFO,
                                                        fn: function () {
                                                            store.removeAt(rowIndex);
                                                        }
                                                    });
                                                },
                                                failure: function () {
                                                    console.log('error');
                                                }
                                            });
                                        }
                                    }
                                }
                                );
                            }
                        }]
                }]
        });
    }
});