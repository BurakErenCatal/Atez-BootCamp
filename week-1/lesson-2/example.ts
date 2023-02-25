//const abc = "hello wold";
// let & const  değişken tipi değil- değişken tanımlamak için yazmak zorundayız
// int ID
//let değiştirilebilir - const değiştirilemez

// string - number - boolen

let stringVal:string = "Some String Value";
let numberValue:number = 123123;
let boolValue:boolean= true;

//any type 
let someUnknownValue:any;

let userInput: number[] = [];
let stringuserInput: string[] = [];


userInput = [2,3];
stringuserInput = ['some string val', 'another string val'];

someUnknownValue = {
    name: 'aldigi degerin hic bir onemi yok',
};



/*function test(abc){
    return abc.split();
}

test(5);
*/

/*function userLogin(email: string, password:string){
// dışarıdan değer alınacağı için :string şeklinde belirtildi. String değer girmek zorunlu tutuldu. 
    return email + password;

}
*/

// Union Type Example
const userLogin = (email:string, password:string | number)=>{
    
    if(typeof password === 'string'){
        
        return email + password.toUpperCase;
    }else{
    return email + password;
}
}

console.log(userLogin('dsgsgs','gsgsag'))


interface Animals {
    name: string;
    type: string;
    age: number;
    eyeColor?: string;
    wiskers?:boolean;
}



const Java: Animals = {
    name : "Java",
    type: "Persian",
    age: 3,
    
}

// next week topics
// Generics & any 
// Enums
// Deep Dive Functons
// Deep Dive İnheritence
// Classes 
// Architecture filing (models , enums, classes)


