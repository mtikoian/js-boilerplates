r.js -o app/build/app.build.js
cd dist
mv scripts/vendors/requirejs/require.js require.js
mv scripts/vendors/requirejs-domready/domReady.js domReady.js
rm -rf scripts/vendors/* build scripts/filters scripts/factories scripts/services cripts/providers scripts/controllers scripts/directives scripts/router.js scripts/app.js scripts/bootstrap.js build.txt 
mkdir scripts/vendors/requirejs && mv require.js scripts/vendors/requirejs/require.js
mkdir scripts/vendors/requirejs-domready && mv domReady.js scripts/vendors/requirejs-domready/domReady.js