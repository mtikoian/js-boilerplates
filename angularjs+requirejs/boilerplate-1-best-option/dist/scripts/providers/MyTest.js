define(["app"],function(e){e.module1.provider("MyTest",[function(){var e="War ";return{setType:function(t){e=t},$get:function(){return{title:e+"Craft",getType:function(){return"String contains: "+e}}}}}])});