<!DOCTYPE html>
<html>

    <head>
        <!--This sets the baseUrl to the "js" directory, and
        loads a script that will have a module ID of 'main'-->
        <script data-main="http://localhost/Test/requirejs/boilerplate-modrewrite/js/main.js" src="http://localhost/Test/requirejs/boilerplate-modrewrite/js/lib/require.js"></script>
    </head>

    <body>
        <a href="http://localhost/Test/requirejs/boilerplate-modrewrite/home/">Home</a>
        <a href="http://localhost/Test/requirejs/boilerplate-modrewrite/about/">About</a>
        <a href="http://localhost/Test/requirejs/boilerplate-modrewrite/about/contact/">Contact</a>
        <?php if(isset($_REQUEST['url'])) echo '<br/>'.$_REQUEST['url'];?>
    </body>
</html>