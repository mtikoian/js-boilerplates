# Multiple inheritance/prototypes in JavaScript

Mixins can be used in javascript to achieve multiple inheritance. 

Another distraction is trying to mimic the automatic "copying" of inheritance by using the "mixin" pattern, which essentially manually iterates through all the methods/properties on an object and makes a "copy" (techically just a reference for functions and objects) onto the target object.

However, **mixins have nothing to do with the[[Prototype]] chain** or inheritance or delegation or any of that -- they rely entirely on implicit assignment ofthis by having an "owning object" at the call-time of a function/method. They are, in fact, completely circumventing the [[Prototype]] chain.

References:

1. http://www.bennadel.com/blog/2039-experimenting-with-multiple-class-inheritance-in-javascript.htm
2. https://javascriptweblog.wordpress.com/2011/05/31/a-fresh-look-at-javascript-mixins/
3. http://stackoverflow.com/questions/9163341/multiple-inheritance-prototypes-in-javascript
4. http://bladerunnerjs.org/blog/topiarist/
5. http://davidwalsh.name/javascript-objects-distractions
6. http://www.joezimjs.com/javascript/javascript-mixins-functional-inheritance/