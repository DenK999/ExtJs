Ext.define('LibraryExt.model.Book', {
    extend: 'Ext.data.Model',

    idProperty: 'BookID',

    fields: [{
            name: 'title',
            type: 'string'
        }, {
            name: 'author',
            type: 'string'
        }, {
            name: 'price',
            type: 'int'
        },{
            name: 'year',
            type: 'int'
        }, {
            name: 'rating',
            type: 'int'
        }]
});


