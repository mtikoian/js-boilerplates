// UMD dance - https://github.com/umdjs/umd
!function(root, factory) {
    if (typeof define === 'function' && define.amd) {
        define(['jquery'], factory);
    } else {
        factory(root.jQuery);
    }
}(this, function($) {
    
    $.fn.pluginName = function(options) {
        var defaults = {
          // define default options
        }

        var o = $.extend({}, defaults, options);

        return this.each(function() {
          var e = $(this);
          // write logic here
        });
      };
});

/* 
 * @usage:
 * 
  $('.element').pluginName();
 */