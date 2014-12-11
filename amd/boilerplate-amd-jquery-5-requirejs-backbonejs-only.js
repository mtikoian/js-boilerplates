(function (factory) {
    
    // If in an AMD environment, define() our module, else use the jQuery global.
    if (typeof define === 'function' && define.amd)
        define(['jquery'], factory);
    else
        factory(jQuery);
    
}(function ($) {
    
    /*
    var apple = new function() {
        this.type = "macintosh";
        this.color = "red";
        this.getInfo = function () {
            return this.color + ' ' + this.type + ' apple';
        };
    }
    

    var apple = {
        type: "macintosh",
        color: "red",
        getInfo: function (options) {
            return this.color + ' ' + this.type + options + ' apple';
        }
    }
    */
    
    var apple = $.fn.extend({
        defaults: {
            settings: {},
            requestReset:       '.Ba-method-request-reset-user',
            context:            '',
            popupHTML:          '<div class="Ba-popup-outer Ba-popup">\
                                    <div class="Ba-popup-inner">\
                                        <div class="Ba-box-close"><a href="#" class="Ba-button-close">x close</a></div>\
                                        <div class="Ba-ajax-response"></div>\
                                    </div>\
                                </div>',// Default popup html.
            onSuccess:          function(){},
            onClicked:		function(){}
        },
        getInfo: function (options) {
            
            // Confirm a varible for the plugin's root itself.
            var base = this; 
            
            // Process the setting.
            var properties = $.extend(true, {}, this.defaults, options );
            console.log(properties);

            return $.ajax({
                    type: "GET",
                    dataType: "html",
                    url: base_url+core_admin_template+'form_login.php?url=cms',
                    async: true,
                    beforeSend: function() {

                        // Remove all popups.
                        $(".Ba-popup").remove();
                    },
                    success: function (returndata) {

                        // Append the popup.
                        $(document.body).prepend(properties.popupHTML);

                        // Set the popup object.
                        var object_popup = $(".Ba-popup").width(400).hide();

                        // Store a data id into this popup.
                        object_popup.attr("data-popup-id","login");

                        // Put the html data into the element.
                        $(".Ba-ajax-response",object_popup).html(returndata);
                        
                        // Store the clicked data for the callback.
                        var output_clicked = {
                            object: "object",
                            event: "e"
                        };


                        // Give a callback when clicked.
                        properties.onClicked(output_clicked);

                        // Put the input hints back.
                        //$('*[title]',object_popup).inputHints();

                        // Set the popup to the center of the page.
                        object_popup.fadeIn(function(){

                            // Attach close popup plugin to fade out the popup.
                            //$('.Ba-button-close,input[type=button][name=cancel]',this).fadeOutClick({target:object_popup});
                            // console.log(this); // --> <div class="Ba-popup-outer Ba-popup" style="top: 70px; left: 50%; margin-left: -525px; width: 1050px; z-index: 2;">

                            /*
                            $('.reset-request').load_form_request_reset_account({
                                popupWidth:		600,
                                callback: 		function(object_popup) {

                                            // Attach post form plugin.
                                            object_popup.post_form_request_reset_account();
                                }

                            });
                            */

                            // Attach the internal method.
                            //$(properties.requestReset)[pluginName]('requestReset');

                            //$.fn.page.defaults.settings.context = $('.Ba-popup-outer');
                            //$(':submit,.button-submit',this)[pluginName]('postLogin', {context: $(".Ba-popup")});

                        });
                    }
                }).fail(function() { 
                    alert("error"); 
                }).done(function() { 
                    //alert("success"); 
                }).always(function() { 
                    //alert("complete"); 

                    if($(".Ba-supersize").length > 0) $(".Ba-supersize").supersize({slideShow:true});

                });
        }
    });
    
    return apple;
   
    
    /*
    
    var initialize = function(option){
        
        return option;
    }
    
    return {
        initialize: initialize
    }
    */
    
}));

/*@usage:
 * 
    Login.getInfo({
        context:"hello world",
        test:"test me",
        onClicked:function(){
            console.log("callback");
        }
    });
    */