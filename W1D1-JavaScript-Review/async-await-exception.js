console.log('start');
async function foo(){
    // console.log(i);
    throw new Error('Whooops!');
}

async function bar(){
    try {
        await foo();
    } catch(e){
        console.log('inside catch - ', e.message);
    } finally{
        console.log('inside finally');
    }
}
// bar();
function bar(arr){
console.log(arr)
}

const b = ''
bar(arr)
bar()

console.log('end');