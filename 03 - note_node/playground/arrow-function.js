var square = (x) => {
    return x * x;
};

var cube = (x) => x * x * x;
console.log(square(9));
console.log(cube(3));

// Arrow functions do not bind the "this" keyword
var user = {
    name: 'Michele',
    sayHi: () => {
        // Hi. I'm undefined
        console.log(`Hi. I'm ${this.name}`);
        // The arrow function doesn't have access to the local arguments
        // object, but it will access to the global one
        console.log(arguments);
    },
    sayHiAlt () {
        // Hi. I'm Michele
        console.log(`Hi. I'm ${this.name}`);
        //also, a normal function allows access to the arguments object
        console.log(arguments);
    }
};
console.log('------ ARROW FUNCTION ------');
user.sayHi(1,2,3);
console.log('------ NORMAL FUNCTION ------');
user.sayHiAlt(1,2,3);
