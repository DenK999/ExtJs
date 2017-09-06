Ext.define('LibraryExt.model.field.PriceValidate', {
    extend: 'Ext.data.field.String',
    alias: 'data.field.priceValidate',
    validators: [
        { 
            type: 'format', 
            matcher: /^\d{1,4}$/,
            message: 'Must be in the format xxxx',
            Mask: /[\d]/
        }
    ]
});