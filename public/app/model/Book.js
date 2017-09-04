Ext.define('LibraryExt.model.Book', {
    extend: 'Ext.data.Model',
    requires: [
        "LibraryExt.model.field.YearValidate"
    ],
    fields: [{
            name: 'id',
            type: 'int'
        }, {
            name: 'title',
            type: 'string'
        }, {
            name: 'author',
            type: 'string'
        }, {
            name: 'price',
            type: 'int'
        }, {
            name: 'year',
            type: 'yearValidate'
        }, {
            name: 'rating',
            type: 'int'
        }],
    proxy: {
        type: 'rest',
        writeAllFields: true,
        url: 'index/book',
        reader: {
                type: 'json',
                rootProperty: 'data'
            },
            writer: {
                type: 'json'
            }
    }
});


