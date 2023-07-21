


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


// toString Function

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
