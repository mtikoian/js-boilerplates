define(["app"],function(e){e.module1.provider("myTest",[function(){var e="something";return{setProperty:function(t){e=t},$get:function(){return{title:e,getProperty:function(){return e}}}}}])}),module.provider("myTest",[function(){var e="something";return{setProperty:function(t){e=t},$get:function(){return{title:e,getProperty:function(){return e}}}}}]),module.provider("myTest",function(){var e="something";return{setProperty:function(t){e=t},$get:function(){return{title:e,getProperty:function(){return e}}}}});