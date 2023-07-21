


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