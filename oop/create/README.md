# JavaScript inheritance with Object.create()

Object.create() is an excellent choice for creating an object without going through its constructor. 

## Don't create new Animal to inherit it

There is a well-known, but wrong way of inheriting, when instead of `Rabbit.prototype = inherit(Animal.prototype)` people use:

```
// inherit from Animal
Rabbit.prototype = new Animal()
```

As a result, we get a new Animal object in prototype. Inheritance works here, because new Animal naturally inherits `Animal.prototype`.

… But who said that `new Animal()` can be called like without the name? The constructor may strictly require arguments and die without them.

Actually, the problem is more conceptual than that. We **don’t want to create** an Animal. We just want to **inherit from it**.

That’s why `Rabbit.prototype = inherit(Animal.prototype)` is preferred. The neat inheritance **without side-effects**.

```
Perfection is achieved, not when there is nothing more to add, but when there is nothing left to take away. 
-- Antoine de Saint-Exupery
```

For refresher, the same prototype-style code from above:

```
function Foo(who) {
    this.me = who;
}

Foo.prototype.identify = function() {
    return "I am " + this.me;
};

function Bar(who) {
    Foo.call(this,who);
}

Bar.prototype = Object.create(Foo.prototype);
// NOTE: .constructor is borked here, need to fix

Bar.prototype.speak = function() {
    alert("Hello, " + this.identify() + ".");
};

var b1 = new Bar("b1");
var b2 = new Bar("b2");

b1.speak(); // alerts: "Hello, I am b1."
b2.speak(); // alerts: "Hello, I am b2."
```

Now, let's instead consider this alternative snippet of code, which accomplishes exactly the same, but it does so without any of the confusion/distraction of "constructor functions", new, .prototype, etc. It just creates several objects and links them together.

```
var Foo = {
    init: function(who) {
        this.me = who;
    },
    identify: function() {
        return "I am " + this.me;
    }
};

var Bar = Object.create(Foo);

Bar.speak = function() {
    alert("Hello, " + this.identify() + ".");
};

var b1 = Object.create(Bar);
b1.init("b1");
var b2 = Object.create(Bar);
b2.init("b2");

b1.speak(); // alerts: "Hello, I am b1."
b2.speak(); // alerts: "Hello, I am b2."
```

References:

1. http://javascript.info/tutorial/pseudo-classical-pattern
2. http://www.htmlgoodies.com/beyond/javascript/object.create-the-new-way-to-create-objects-in-javascript.html
3. https://alexsexton.com/blog/2013/04/understanding-javascript-inheritance/
4. http://www.bennadel.com/blog/2184-object-create-improves-constructor-based-inheritance-in-javascript-it-doesn-t-replace-it.htm
5. http://stackoverflow.com/questions/11488540/copy-prototype-for-inheritance
6. http://stackoverflow.com/questions/3079887/javascript-inheritance-with-object-create