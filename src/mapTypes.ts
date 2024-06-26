type Properties = 'propA' | 'propB'
type MyMappedType<T> = {
    [P in keyof T]: T[P] | null
}

type MyNewType = MyMappedType<'propA' | 'propB'>

type OtherMapType = MyMappedType<{a: 'a'; b: 'b'}>

type Pick1<T, Properties extends keyof T> = {
    [P in Properties]: T[P]
};

type MyNewType2 = Pick1<{a: 'a'; b: 'b'}, 'b'>

type Record1<K extends keyof any, T> = {
    [P in K]: T;
    // someProperty
}

const someRecord: Record1<string, number> = {}
someRecord.Apples = 10
someRecord.oranges = 10

interface Record2 {
    [key: string]: number;
}