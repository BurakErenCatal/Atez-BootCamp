const calculateSum = (x,y,z) =>{
  return x+y+z;
}

const numberArray = [2,5,8];

console.log(calculateSum(...numberArray))


const carObject ={
  id:1,
  model: "Seat",
  color:"gray"
}

//carObject.age = 35;

const newModelSpec ={
  age: 35,
  whellCound: 4,
  maxSpeed: 200,
};

const newCar = {...carObject,...newModelSpec}

//carObject.specs = newModelSpec;


console.log("Car Model ",carObject);
console.log('Car',newCar);


const newNumberArray = [...numberArray,1,3,5];

console.log('NewNumberArray',newNumberArray);  // tüm elemanları yazdırır

console.log('NewNumberArray',...new Set(newNumberArray)); // Unique olan elamanları yazdırır. Primitive dataların olduğu arraylarda işe yarar.

//Object destructing

const[x,y,...rest] = numberArray; //0 ve 1. indeksi al gerisini bunun içinde ver

console.log('X', x);
console.log('Y', y);
console.log('NumberArray Rest', rest);

const {model, maxSpeed,...restCar} = newCar;
console.log('NewModel',{model,maxSpeed});
console.log('Model', model);
console.log('MaxSpeed',maxSpeed);
console.log('Car Rest Model',restCar);


//optional channing
const modelSpec ={
  age: 35,
  whellCound: 4,
  maxSpeed: 200,
  speedInternal:["1","2"]
};

console.log('Model',modelSpec?.speedInterval?.forEach(x=>console.log(x)))



//Ternary Operator

//const isRed = false;

console.log('Ternary', carObject.color === 'red' ? 'Araba Kirmizi': 'Kirmizi degildir');


console.log('Null',modelSpec.speedInternal || "0"); // speedInterval varsa yaz yoksa 0 yaz.


