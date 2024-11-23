//ES6 Js Note
// let, const, var
// let and const are block scoped, var is function scoped
// let and const are hoisted but not initialized, var is hoisted and initialized with undefined
// let and const are immutable by default, var is mutable by default
// let and const are faster than var
// Other ES6 JS, because I need to learn
// Classes, Inheritance, Prototypes, etc.
// Classes
class Animal {
    constructor(name) {
        this.name = name
    }
    speak() {
        console.log(`${this.name} makes a sound`);
    }
}
// Inheritance
class Dog extends Animal {
    constructor(name, breed) {
        super(name);
        this.breed = breed
    }
    speak() {
        console.log(`${this.name} barks`);
    }
}
// Prototypes
// Prototypes are a way to add properties and methods to an object at runtime
// They are used to create a chain of inheritance
// Prototypes are used to create a new object that inherits the properties and methods of another object
// Prototypes example
let animal = {
    speak: function() {
        console.log(`${this.name} makes a sound` );
    }
}
let dog = Object.create(animal);
dog.name = "Buddy";
dog.speak(); // Output: Buddy makes a sound

