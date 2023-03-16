//@ts-ignore


function takeSomeJobAndReturn<J> (job:J): J {
    console.log(job);
    
    return job
}


const message: string =takeSomeJobAndReturn("Hello World"); // Sadece Burada Gerçekleştiğinde String
//const messageNum: number takeSomeJobAndReturn: (2);   //Sadece Burada Gerçekleştiğinde Number



function createAnArrayFromAnArray <A> ( items: A[]): A[]{
    return new Array<A>().concat(items)
}


let numArray = createAnArrayFromAnArray([200,300,400]);
let strArray = createAnArrayFromAnArray(['hello','world']);

// numArray.push('String Value');   numArray için "A" her zaman number bir değerdir

// strArray.push(2);    strArray için "A" her zaman string bir değerdir.

function getUserInfo<U, I>(id: U, name: I) :void{
    console.log('${id} numarali kullanicin ismi: ${name}');
    

}

    getUserInfo<number,string>(1,'Burak');
    getUserInfo<string, boolean>('test',true);

// Notlar, Bir fonksiyona birden fazla generic type atayabiliriz.
// Generic tipler tek tip generic gibi gerçekleştiği için  

interface IShoppingHistory{
    itemName: string;
    quantity: number;
    color: string;

}

interface IUsers{
    email:string;
    name:string;
    id:number | string;
    isVerified: boolean;
    shoppingHistory: IShoppingHistory;
}

interface Collection<T> {
    add:(x: T) => void;
    remove:(y: T) => void;
    returnArray(): T[]
}

// Kalıtım aldığımız interface içerisinde generic bir tip varsa ve bu bir harf ie isimlendirdiyse
// başka bir instance içerisinde kullanılacağı zaman verilecek olan generic tipi belirten harfin farklı olmasının
// bir önemi yoktur, tipin gelecek olan değerini etkilemez.

class Basket<U> implements Collection<U>{
    private data: U[] = [];
    
    add(x:U){
        this.data.push(x)
    }

    remove(y: U) {
    let index = this.data.indexOf(y);
    if (index >-1){
        this.data.splice(index,1);
        }
    }

    returnArray(): U[] {
        return this.data;
    }
}

let numbers: Collection<number> = new Basket();

numbers.add(11);
numbers.add(1905);
numbers.add(3);
numbers.remove(11);

let returnValue = numbers.returnArray();
console.log('RETURN VALUE IS HERE',returnValue);

class Customer {
    firstName: string;
    lastName: string ;
    
    constructor(name:string,surName:string){
        this.firstName = name;
        this.lastName = surName;

    }

}

function logCustomers<T extends Customer> (person:T): void{
    console.log('${person.firstName} ${person.lastName} is our Customer');
    
}

let customer = new Customer('Jane', 'Doe' );

logCustomers(customer);

