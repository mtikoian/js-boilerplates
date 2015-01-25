<!DOCTYPE html>
<html>

   
<script src="jquery-min.js"></script> 
<script>
$( document ).ready(function() {
    
    $(".promise").click(function(){
        var p1 = new Promise(
            // The resolver function is called with the ability to resolve or 
            // reject the promise
            function(resolve, reject) {
                setTimeout(function(){ 
                    // We fulfill the promise !
                    console.log('time out');
                    resolve(3);
                }, 3000);
            });

        p1.then(function(val){
            console.log(val);
            console.log('done');
        });
        
        return false;
    });
    
});
    
</script>

</head>
<body>
    <a href="#" class="promise">Promise</a>
</body>
</html>