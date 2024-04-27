function someFn(myArgument: number | string) {

}

interface Dog {
    bark(): void;
    walk(): void;
}

interface Cat {
    meow(): void;
    walk(): void;
}

function isDog(someObj: Dog | Cat): someObj is Dog {
    return (<Dog>someObj).bark !== undefined
}

function myPet(pet: Dog | Cat) {
    pet.walk();
    if (isDog(pet)) {
        pet.bark
    } else {
        pet.meow
    }
}

// class Foo {
//     foo: number;
//     commonProp: string;
// }

// class Bar {
//     bar: number;
//     commonProp: string;
// }

// function fooBarFunction(obj: Foo | Bar) {
//     if (obj instanceof Foo) {
//         obj.foo
//     } else {
//         obj.bar
//     }
// }

interface IA {
    a: number;
}

interface IB {
    b: number;
}

interface IC {
    c: number;
}

function X(obj: IA & IB & IC) {
    return obj.a + obj.b + obj.c
}

function combine<ObjA extends object, ObjB extends object>(objA: ObjA, objB: ObjB): ObjA & ObjB {
    return { ...objA, ...objB}
}

const objA = { a: 1 }
const objB = { b: 1 }

const resultObj = combine(objA, objB)
