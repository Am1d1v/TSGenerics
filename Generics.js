"use strict";
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
class Vehicle {
}
function kmtoMiles(vehicle) {
    vehicle.run = vehicle.run / 0.62;
    return vehicle;
}
const vehicle = kmtoMiles(new Vehicle());
function logId(id, additionalData) {
    console.log(id);
    console.log(additionalData);
    return { id, data: additionalData };
}
logId(10, 'someData');
