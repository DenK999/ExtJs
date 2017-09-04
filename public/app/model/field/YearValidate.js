Ext.define('LibraryExt.model.field.YearValidate', {
    extend: 'Ext.data.field.String',
    alias: 'data.field.yearValidate',
    validators: [
        { 
            type: 'format', 
            matcher: /^\d{1,4}$/,
            message: 'Must be in the format xxxx',
            Mask: /[\d]/
        }
    ]
});