define(['app'], function (app) {
    app.module1.controller('ShoppingCartController', ['$scope', function($scope) { 
        //your minsafe controller 
        $scope.items = [
            {product_name: "Product 1", price: 50},
            {product_name: "Product 2", price: 20},
            {product_name: "Product 3", price: 180}
        ];
        $scope.remove = function(index) {
            $scope.items.splice(index, 1);
        }
    }]);
});