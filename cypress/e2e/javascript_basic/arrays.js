// creating array
var scores=new Array(); // empty
var numbers=new Array(10); // array with initial size 10
var myNumber= new Array(9,5,10,3); // array with initial elements

var athletes= Array(3); // array with initial size 3
var sing = Array("Red"); // array with one element

// array examples
let tools=["Jest","Selenium","Cypress","TestCafe","PhantomJS","Protractor"]

// accessing array element
console.log(tools)   // yazdıracağımız şey için log şart (sout gibi)
console.log(tools.toString()) // toString-> Jest,Selenium,Cypress,TestCafe,PhantomJS,Protractor
console.log(tools[0]) // index[0] -> Jest

const string = tools.toString();
console.log(string) //  Jest,Selenium,Cypress,TestCafe,PhantomJS,Protractor

const join= tools.join(" * ")
console.log(join)  // Jest * Selenium * Cypress * TestCafe * PhantomJS * Protractor

const pop=tools.pop() // removes an element from the enf of an array
console.log(tools) // [ 'Jest', 'Selenium', 'Cypress', 'TestCafe', 'PhantomJS' ]    sondaki bir element gitti
console.log(pop) // Protractor

const push= tools.push("SlimerJS") // add element to enf of array
console.log(tools) // [ 'Jest', 'Selenium', 'Cypress', 'TestCafe', 'PhantomJS', 'SlimerJS' ]
console.log(push) // 6 

const shift= tools.shift() // baştakini siler
console.log(tools) // [ 'Selenium', 'Cypress', 'TestCafe', 'PhantomJS', 'SlimerJS' ]
console.log(shift) // Jest  silinen komutu verdi

const unshift= tools.unshift("Selenoid") // baştakini siler
console.log(tools) // add selenoid
console.log(unshift) // 6

const sort= tools.sort() // elementleri sıralar
console.log(tools)
console.log(sort) 

const reverse= tools.reverse() // elementleri tersten yazdırır
console.log(tools)
console.log(reverse) 

tools.forEach((value)=>{
    if(value=="Cypress"){
        console.log("Cypress is trending now")
    }else{
        console.log("Element NOT Faund")
    }
})
