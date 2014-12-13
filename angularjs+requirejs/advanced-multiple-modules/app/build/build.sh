r.js -o app/build/app.build.js
cd dist
mv script/vendor/requirej/require.js require.js
mv script/vendor/requirejs-domready/domReady.js domReady.js
rm -rf script/vendor/* build script/filters script/factories script/services cript/providers script/controllers script/directives script/router.js script/app.js script/bootstrap.js build.txt 
mkdir script/vendor/requirejs && mv require.js script/vendor/requirej/require.js
mkdir script/vendor/requirejs-domready && mv domReady.js script/vendor/requirejs-domready/domReady.js