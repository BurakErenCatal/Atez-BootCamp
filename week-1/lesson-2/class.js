class Ders {
    constructor(name, teacher){
        this.name = name;
        this.teacher = teacher;
    }

    getName(){
        return this.name;
    }

    setName(newValue){
        if(newValue){
            this.name = newValue;
        }
    }

getClassNameWithTeact (){
    if(this.name && this.teacher)
         return this.name + "dersin öğretmeni: "+ this.teacher;
    else return "Ogretmen ve isim tanimi yok";

 // return '${this.name} dersinin ogretmeni:${this.teacher}';
}
}

const mathLesson = new Ders("Matematik","Umut");
console.log('Math Object', mathLesson.getClassNameWithTeact());
console.log('Math Lesson New Name',mathLesson.setName())
console.log('New Object', new Ders().getClassNameWithTeact());

class Animal{
    constructor(name, age,eyeColor){
        this.name = name;
        this.age = age;
        this.eyeColor = eyeColor;
    }
 
speak(){
    return '${this.name} speaks';
}
}

class Dog extends Animal{
    constructor(name){
        super(name);
    }
    bark(){
        return this.name + " barks";
    }

}

class Cat extends Animal{
    constructor(name){
        super(name);
       
    }
    stracth(){
return this.name + " tirmaladi";
    }

}

const goldenRetriever = new Dog ('Eddie');
console.log('Dog Object',goldenRetriever.bark());
const iranCat = new Cat ('Java'); 
console.log('Cat Object',iranCat, iranCat.speak, iranCat.stracth());
