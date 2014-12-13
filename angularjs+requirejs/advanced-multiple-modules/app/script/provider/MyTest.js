define(['app'], function (app) {
    //console.log(app);
    app.module1.provider('MyTest', [function() { 
        //your minsafe controller 
        var type = 'War ';
        return {
            setType: function(value) {
                type = value;
            },
            $get: function() {
                return {
                    title: type + 'Craft',
                    getType: function() {
                        return "String contains: " + type;
                    }
                }
            }
        }
        
    }]);

}); 