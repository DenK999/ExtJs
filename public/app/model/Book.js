Ext.define('LibraryExt.model.Book', {
    extend: 'Ext.data.Model',
    requires: [
        "LibraryExt.model.field.YearValidate",
        "LibraryExt.model.field.PriceValidate",
        "LibraryExt.model.field.RatingValidate"
    ],
    fields: [
        {name: 'id',     type: 'int'},
        {name: 'title',  type: 'string'},
        {name: 'author', type: 'string'},
        {name: 'price',  type: 'priceValidate'},
        {name: 'year',   type: 'yearValidate'},
        {name: 'rating', type: 'ratingValidate'}
    ],
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


