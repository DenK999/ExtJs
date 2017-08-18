Ext.application({
    name: 'MyApp',
    launch: function () {
        Ext.create('Ext.container.Viewport', {
            layout: 'fit',
            items: [
                {
                    title: 'This is TITLE',
                    html: '<h3>This is HTML Code</h3>'
                }
            ]
        });
    }
});

Ext.define('Pet', {
    constructor: function(config){
        this.name = config.name;
    },
    name: 'Noname',
    great: function(){
        console.log('Hello');
    }
});

var pet1 = new Pet({name: 'Test'});

var pet2 = Ext.create('Pet', {name: 'Test2'});

Ext.define('StaticClass', {
   statics:{
       staticField: 'Static field test',
       staticMethod: function(){
           console.log('Static method   ')
       }
   } 
});

Ext.define('Dog', {
    extend: 'Pet',
    bark: function(){
        console.log('Gav')
    }
});