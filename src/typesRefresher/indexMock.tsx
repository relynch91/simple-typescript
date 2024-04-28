import * as multiplyModule from "./multiply";
// import multiply, { multiplyByTwo} from './multiply'

const a = 2;
const b = 4;

console.log(`${a} * ${b} = ${multiplyModule.multiply(a, 2)}`);
console.log(`${a} * ${b} = ${multiplyModule.multiplyByTwo(a)}`);

// Object
type primitiveTypes = boolean | string | number | symbol | undefined | null;
const myObject: object = new Map();

// Void
function log(message: string): void {
  console.log(message);
  // return "abc"
}

// Array
let array1: string[] = ["x", "y"];
let array2: Array<string> = array1;

// Tuple
let tuple: [string, number] = ["myTuple", 1];

// Enum
enum Color {
  Red = "red",
  Green = "green",
  Blue = "blue",
}

let myFavoriteColor: Color = Color.Blue;
console.log(Color.Red, Color.Blue, Color.Green);
console.log(myFavoriteColor);

let ANY: any;
ANY = 5;
ANY = "myAny";
ANY = true;

//Type Assertions

// const email = document.getElementById('email')

// if (email) {
//     email.addEventListener('change', e => {
//         const input = e.currentTarget as HTMLInputElement
//         console.log(input.value)
//     })
// }

interface A {
  someProp: number;
}

interface B {
  someProp: number;
}

let aa: A = { someProp: 1 };
let ab: B = { someProp: 1 };

interface Parent {
  x: string;
}

interface Child extends Parent {
  y: number;
}

let child: Child = {
  x: "five",
  y: 5,
};

function sum(a: number, b?: number): number {
  return 5;
}

type MyFunc = (a: number, b: number) => number;

sum(1);

class Robot {
  name: string;

  constructor(name: string) {
    this.name = name;
  }

  askName() {
    console.log(`${this.name}`);
  }

  move(distance: number) {
    console.log(`${this.name} moved ${distance} meters`);
  }
}

class FlyingRobot extends Robot {
  public jetPackSize: number;

  constructor(name: string, jetPackSize: number) {
    super(name);
    this.jetPackSize = 5;
  }

  move(distance: number) {
    console.log(`${this.name} is flying`);
    super.move(distance);
  }
}

const myRobot = new Robot("ryan");
const myJetPack = new FlyingRobot("ryan", 5);
console.log(myJetPack.jetPackSize);

interface Animal {
  name: string;
  group: string | undefined;
  setGroup(group: string): void;
}

class Cat implements Animal {
  name: string;
  group: string | undefined;
  constructor(name: string) {
    this.name = name;
  }
  setGroup(group: string) {
    this.group = group;
  }
}

class Dog implements Animal {
  name: string = "";
  group: string | undefined;
  setGroup(group: string) {
    this.group = group;
  }
}

interface AnimalConstructor<T> {
  new (name: string): T;
}

function initializeAnimal<T extends Animal>(
  Animal: AnimalConstructor<T>,
  name: string
) {
  const animal = new Animal(name);
  animal.setGroup("mammals");
  return animal;
}

const cat = initializeAnimal(Cat, "Felix");
const dog = initializeAnimal(Dog, "Felix");

class GenericClass<P> {
  constructor(public props: P) {}

  getProps(): P {
    return this.props;
  }
}

interface Expirable {
  expiryDate: Date;
}

interface ChocolateCake extends Expirable {}
interface VanillaCake extends Expirable {}

const chocoCake: ChocolateCake[] = [{ expiryDate: new Date() }];

const vanillaCake: VanillaCake[] = [{ expiryDate: new Date() }];

interface GetExpiredItemsFunction {
  <Item extends Expirable>(items: Array<Item>): Array<Item>;
}

const getExpiredItems: GetExpiredItemsFunction = (items) => {
  const currentDate = new Date().getTime();
  return items.filter((item) => item.expiryDate.getDate() < currentDate);
};

const expiredChocoCakes = getExpiredItems<ChocolateCake>(chocoCake);
const expiredVanillaCakes = getExpiredItems<VanillaCake>(vanillaCake);

interface ShoppingCart<ItemId, Item> {
  items: Array<Item>;
  addItem(this: ShoppingCart<ItemId, Item>, item: Item): void;
  getItemById(this: ShoppingCart<ItemId, Item>, id: ItemId): Item | undefined;
}

interface Item {
  id: number;
  price: number;
}

const cart: ShoppingCart<number, Item> = {
  items: [],
  addItem(item) {
    this.items.push(item);
  },
  getItemById(id) {
    return this.items.find((item) => item.id === id);
  },
};
