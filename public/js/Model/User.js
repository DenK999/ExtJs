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