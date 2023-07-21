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
function log(data) {
    console.log(data);
    return data;
}
const res = log(10); // Type Number
const res1 = log('10'); // Type String
function getSplitedHalf(data) {
    const l = data.length / 2;
    return data.splice(0, l);
}
const arrRes = getSplitedHalf([1, 2, 3, 4]);
console.log(arrRes);
