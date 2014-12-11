define([
    'jquery',
    'app'
], function ($,app) {
    
    app.factory("contactFactory",['$rootScope','$route','$http', function contactFactory($rootScope,$route,$http){
        
        // Put your code here.
        // Sample code:
        this.defaults = {
             full_name: null,
             email:null
        };
        
        return {
            getContacts: function(options){
                
                var ops = $.extend(true, {}, this.defaults, options );
                    
                return $http({
                     method: 'GET', 
                     url:'php/listContacts.php',
                     params: ops
                }).then(function(response) {

                     $rootScope.delete = function(id) {
                          if (confirm('Are you sure to delete?')) {

                             $.getJSON('php/deleteContact.php', { id: id }, function (data) {
                                 if (data.success === true) {
                                     $('#contactsGrid tr[data-id="' + id + '"]').hide('slow');
                                 } else {
                                     alert(data.msg);
                                 }
                             });
                             $('#contactsGrid tr[data-id="' + id + '"]').hide('slow');
                         }
                      };
                     app.collection = response.data;
                     return response.data;

                });
            }
        };
   }]);
    

});