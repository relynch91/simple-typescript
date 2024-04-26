function someFn(myArgument) {
}
function isDog(someObj) {
    return someObj.bark !== undefined;
}
function myPet(pet) {
    pet.walk();
    if (isDog(pet)) {
        pet.bark;
    }
    else {
        pet.meow;
    }
}
function X(obj) {
    return obj.a + obj.b + obj.c;
}
function combine(objA, objB) {
    return Object.assign(Object.assign({}, objA), objB);
}
const objA = { a: 1 };
const objB = { b: 1 };
const resultObj = combine(objA, objB);
