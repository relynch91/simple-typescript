//Partial, allows only certains properties of type
interface Starship {
    name: string;
    enableHyperJump: boolean;
}

const updateStarship = (id: number, starship: Partial<Starship>) => {}

updateStarship(1, {
    name: 'Explorer',
    // enableHyperJump: true
})

//Required takes one generic type, provides new type where all properties are required
//Readonly, new type with all properties being read only.
//Record, Record<K, T> the typeof key and typeof value

const starships: Record<string, Starship> = {
    Explorer1: {
        name: 'Explorer1',
        enableHyperJump: true
    },
    Explorer2: {
        name: 'Explorer2',
        enableHyperJump: false
    }
}

//Pick<T, K> only take certain properties
type StarshipNameOnly = Pick<Starship, 'name'>

//Omit<T, K> opposite of pick
type StarshipWithoutName = Omit<Starship, 'name'>

//Exclude<T, U> subtract one union type from another union type
type A = string | string[] | undefined
type ANoUndefined = Exclude<A, undefined>

type AvailableDrinks = 'coffee' | 'tea' | 'orange juice' | 'lemonade'
let JohnsDrinks: AvailableDrinks;
JohnsDrinks = 'coffee'
type DrinksJaneDoesntLike = 'coffee' | 'orange juice'
let JanesDrink: Exclude<AvailableDrinks, DrinksJaneDoesntLike>
JanesDrink = 'tea'