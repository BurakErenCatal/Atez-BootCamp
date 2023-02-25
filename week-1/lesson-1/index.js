var testArray = [

    123,313,13123,43343

]

console.log(testArray)

// var her yerden ulaşılabilir
// let
// const
 testObj={
    sth : "Atez bootcamp",
    number:123,
    isTrue: false,

 }

console.log("UNMUTATED", testObj);

testObj.sth = "ANOTHER BOOTCAMP";

const globalScope = "GLOBAL SCOPE VARIABLE";

function functionScope(){
    const functionScope = "FUNCTION SCOPE VARIABLE";
}

console.log("GLOBAL ===>", globalScope);

function returnSomething (a,b){

    const c = 5;
    const d = 6;

    return a+b+c+d;

};
console.log(returnSomething(1,2));

const returnSomething = (a,b) => a+b;

console.log(returnSomething(8,2));

function functionScope(){

    const testArr = [
    "ATEZ BOOTCAMP",
    "SOME VALUE",
    23,
    "AAB",

    ];

    console.log('FIRST ELEMENT OF TESTARR',testArr[0])

    for (let i = 0; i < testArr.length; i++ ) {
        if(typeof testArr[i] =="number") {
            console.log("VALUE FROM LOOP",testArr[i])
        }
    }

}

// Array For Loop

const personArray = [
    {name:"Burak", surName:"Catal", age:20},
    {name:"Burak", surName:"Catal", age:21},
    {name:"Burak", surName:"Catal", age:22},
    {name:"Burak", surName:"Catal", age:23},
    {name:"Burak", surName:"Catal", age:24},
    {name:"Burak", surName:"Catal", age:25},
] 

// map, filter , find, forEach, slice
//foraech////

const carArray = [];
const carModels = ["Porsche","Tofas","Ferrari","Volvo"];

carModels.forEach((x,index) =>{

    const carObject ={
        id: index,
        model: x
    };
    carArray.push(carObject);
});

console.log('Carray',carArray);

const carObject = {
    id:1,
    model:"Porsche"
}

 for( let i=0; i<personArray.length; i++){
    const person = personArray[i];
    console.log('Person', person.age);
 }
 
 const hasInSaleCars = [
    {id:0, model:'Porsche', inSale:true},
    {id:1, model:'Tofaş', inSale:false},
    {id:2, model:'Ferrari', inSale:false},
    {id:3, model:'Volvo', inSale:true}
]

    const inSaleCars = hasInSaleCars.filter(x =>x.inSale || x.model ==="Ferrari");
    console.log('InSaleCars',inSaleCars);
