r.js -o app/build/app.build.js
cd dist
mv scripts/vendor/requirejs/require.js require.js
mv scripts/vendor/requirejs-domready/domReady.js domReady.js
rm -rf scripts/vendor/* build scripts/filters scripts/factories scripts/services cripts/providers scripts/controllers scripts/directives scripts/router.js scripts/app.js scripts/bootstrap.js build.txt 
mkdir scripts/vendor/requirejs && mv require.js scripts/vendor/requirejs/require.js
mkdir scripts/vendor/requirejs-domready && mv domReady.js scripts/vendor/requirejs-domready/domReady.js