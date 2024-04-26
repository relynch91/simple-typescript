"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
const multiplyModule = __importStar(require("./multiply"));
// import multiply, { multiplyByTwo} from './multiply'
const a = 2;
const b = 4;
console.log(`${a} * ${b} = ${multiplyModule.multiply(a, 2)}`);
console.log(`${a} * ${b} = ${multiplyModule.multiplyByTwo(a)}`);
const myObject = new Map();
// Void
function log(message) {
    console.log(message);
    // return "abc"
}
// Array
let array1 = ["x", "y"];
let array2 = array1;
// Tuple
let tuple = ['myTuple', 1];
// Enum
var Color;
(function (Color) {
    Color["Red"] = "red";
    Color["Green"] = "green";
    Color["Blue"] = "blue";
})(Color || (Color = {}));
let myFavoriteColor = Color.Blue;
console.log(Color.Red, Color.Blue, Color.Green);
console.log(myFavoriteColor);
let ANY;
ANY = 5;
ANY = "myAny";
ANY = true;
let aa = { someProp: 1 };
let ab = { someProp: 1 };
let child = {
    x: "five",
    y: 5
};
function sum(a, b) {
    return 5;
}
sum(1);
class Robot {
    constructor(name) {
        this.name = name;
    }
    askName() {
        console.log(`${this.name}`);
    }
    move(distance) {
        console.log(`${this.name} moved ${distance} meters`);
    }
}
class FlyingRobot extends Robot {
    constructor(name, jetPackSize) {
        super(name);
        this.jetPackSize = 5;
    }
    move(distance) {
        console.log(`${this.name} is flying`);
        super.move(distance);
    }
}
const myRobot = new Robot('ryan');
const myJetPack = new FlyingRobot('ryan', 5);
console.log(myJetPack.jetPackSize);
class Cat {
    constructor(name) {
        this.name = name;
    }
    setGroup(group) {
        this.group = group;
    }
}
class Dog {
    constructor() {
        this.name = "";
    }
    setGroup(group) {
        this.group = group;
    }
}
function initializeAnimal(Animal, name) {
    const animal = new Animal(name);
    animal.setGroup('mammals');
    return animal;
}
const cat = initializeAnimal(Cat, 'Felix');
const dog = initializeAnimal(Dog, 'Felix');
class GenericClass {
    constructor(props) {
        this.props = props;
    }
    getProps() {
        return this.props;
    }
}
const chocoCake = [
    { expiryDate: new Date() }
];
const vanillaCake = [
    { expiryDate: new Date() }
];
const getExpiredItems = items => {
    const currentDate = new Date().getTime();
    return items.filter(item => item.expiryDate.getDate() < currentDate);
};
const expiredChocoCakes = getExpiredItems(chocoCake);
const expiredVanillaCakes = getExpiredItems(vanillaCake);
const cart = {
    items: [],
    addItem(item) {
        this.items.push(item);
    },
    getItemById(id) {
        return this.items.find(item => item.id === id);
    }
};
