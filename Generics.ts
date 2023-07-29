


/*

const num: Array<number> = [1, 2, 3];

async function test(){
   const a = await new Promise<number>((resolve, reject) => {
    resolve(1);
    })
}

const check: Record<string, boolean> = {
    drive: true,
    kpp: false
}

*/

/*

function log<T>(data:T): T{
    console.log(data);
    return data;
}

const res = log<number>(10); // Type Number
const res1 = log<string>('10'); // Type String


function getSplitedHalf<T>(data: Array<T>): Array<T>{
    const l = data.length / 2;
    return data.splice(0, l);
}

const arrRes = getSplitedHalf<number>([1, 2, 3, 4]);
console.log(arrRes);

*/


// toString Function

/*

function toString<T>(data: T): string | undefined {
    if(Array. isArray(data)){
        return data.toString();
    }

    switch (typeof data){
        case 'string':
            return data;
        case 'number':    
        case 'symbol':    
        case 'bigint':    
        case 'boolean':
            return data.toString();    
        case 'object':
            return JSON.stringify(data);
        default:
            return undefined;    
    }
}

console.log(toString(3));
console.log(toString(true));
console.log(toString([1, 2, 3]));
console.log(toString({a: 1}));

*/

/*

function getSplitedHalf<T>(data: Array<T>): Array<T>{
    const l = data.length / 2;
    return data.splice(0, l);
}

const arrRes = getSplitedHalf<number>([1, 2, 3, 4]);

const split: <T>(data: Array<T>) => Array<T> = getSplitedHalf;
const split2: <Y>(data: Array<Y>) => Array<Y> = getSplitedHalf;

interface IlogLine<T> {
    timeStamp: Date;
    data: T
}

type logLineType<T> = {
    timeStamp: Date;
    data: T
}

const logLine: IlogLine<{a: number}> = {
    timeStamp: new Date(),
    data: {
        a: 1
    }
}

*/

/*

class Vehicle {
    run: number;
}

function kmtoMiles<T extends Vehicle>(vehicle: T): T{
    vehicle.run = vehicle.run / 0.62
    return vehicle
}

const vehicle = kmtoMiles(new Vehicle());


function logId<T extends string | number, Y>(id: T, additionalData: Y): {id: T, data: Y}{
    console.log(id);
    console.log(additionalData);
    return {id, data: additionalData}

}

logId(10, 'someData');

*/

// Generic classes

/*

class Resp<D,E> {
    data?: D;
    error?: E;

    constructor(data?: D, error?: E){
        if(data){
            this.data = data;
        }
        
        if(error){
            this.error = error;
        }
    }
}

new Resp<string, number>('data', 0);

class HTTPResp<F> extends Resp<string, number> {
    someCode: F;

    setCode(code: F){
        this.someCode = code;
    }
}

const Resp2 = new HTTPResp();

*/

// Mixins

type Constructor = new(...args: any[]) => {}
type GConstructor<T = {}> = new(...args: any[]) => T

class List {

    constructor(public items: string[]){

    }
}

type ListType = GConstructor<List>;

class ExtendedListClass extends List {

    first(){
        return this.items[0];
    }
}


function ExtendedList<TBase extends ListType>(Base: TBase){
    return class ExtendedList extends Base {

        first(){
            return this.items[0];
        }
    }
}

const list = ExtendedList(List);
const res = new list(['first', 'second']);
console.log(res.first());


