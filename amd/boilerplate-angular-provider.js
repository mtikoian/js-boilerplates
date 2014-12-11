/**
 * bootstraps angular onto the window.document node
 */
define([
    'jquery',
    'app'
], function ($,app) {
    
    app.provider('provider', function() {
        
        // Put your code here.
        // Sample code:
        // 
        // In the provider function, you cannot inject any
        // service or factory. This can only be done at the
        // "$get" method.
        this.defaults = {
             full_name: null,
             email:null
        };
        
        this.$get = ['$rootScope','$route','$http', function($rootScope,$route,$http) {
            
            var options = this.defaults;

            return {
                getContacts: function(options) {
                    
                    var ops = $.extend(true, {}, this.defaults, options );
                    
                    return $http({
                        method: 'GET', 
                        url:'php/listContacts.php',
                        params: ops
                    }).then(function(response) {
                        app.collection = response.data;
                        
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
                        return  response.data;
                     });
                }
            };
        }];

        this.setOptions = function(options) {
            this.defaults = $.extend(true, {}, this.defaults, options );
        };
    });
    
});