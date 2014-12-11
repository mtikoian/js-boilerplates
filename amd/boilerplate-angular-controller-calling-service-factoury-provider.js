define([
    'app',
    'service/ServiceFactoryProvider' // you must put your provider file here if you want to preconfigure it.
], function (app) {
    
    app.config(function(helloWorldProvider){
        helloWorldProvider.setName('World');
    });
    
    app.controller("AppCtrlServiceFactoryProvider", function($scope,helloWorld, helloWorldFromFactory, helloWorldFromService){
        
        // Put your code here.
        $scope.hellos = [
            helloWorld.sayHello(),
            helloWorldFromFactory.sayHello(),
            helloWorldFromService.sayHello()
        ];
        
    });
    

});