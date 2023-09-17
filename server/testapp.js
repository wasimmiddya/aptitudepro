async function doSum(a,b) {
    let sum
    setTimeout(() => {
        sum = a+b
    }, 2000);

    return sum
}


(async function main() {
    console.log('initializing');
    let sum = await doSum(10,25)
    console.log('Sum : ',sum);
    console.log('Terminate');
})()