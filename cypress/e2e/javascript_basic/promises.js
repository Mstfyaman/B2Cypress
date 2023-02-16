/**
 * Cypress is promise aware so if you return a promise from inside of commands like . then() , 
 * Cypress will not continue until those promises resolve.
 */

function getNumber(currentcy){
    return new Promise((resolve,reject)=>{
        if(typeof currentcy !="number"){
            reject(new Error('Currency is NOT a Number'))
        }else{
            resolve(currentcy)
        }
    })
}

getNumber(1000).then((val)=>{
    console.log('val ', val)
})