// Load and compile Handlebars templates.
// Mix the development code with the production code.
define([
    'jquery',
    'handlebars'
],
function ($, Handlebars) {
    
    // @reference: http://berzniz.com/post/24743062344/handling-handlebars-js-like-a-pro
    Handlebars.getTemplate = function(name) {
        if (Handlebars.templates === undefined || Handlebars.templates[name] === undefined) {
            $.ajax({
                url : 'js/template/' + name + '.handlebars',
                success : function(data) {
                    if (Handlebars.templates === undefined) {
                        Handlebars.templates = {};
                    }
                    Handlebars.templates[name] = Handlebars.compile(data);
                },
                dataType: "text",
                async : false
            });
        }
        return Handlebars.templates[name];
    };
    
    // Precompile your templates and add/paste them below here. 

});
