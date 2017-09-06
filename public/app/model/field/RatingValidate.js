Ext.define('LibraryExt.model.field.RatingValidate', {
    extend: 'Ext.data.field.String',
    alias: 'data.field.ratingValidate',
    validators: [
        { 
            type: 'format', 
            matcher: /^\d{1,2}$/,
            message: 'Must be in the format xx',
            Mask: /[\d]/
        }
    ]
});