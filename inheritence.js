class Parent{
    constructor(){
        this.fatherName = "Selim Khan";
    }
}

class Child extends Parent{
    constructor(name){
        super();
        this.name = name;
    }
    getFullName(){
        return this.name + " " + this.fatherName;
    }
}
const baby = new Child("Salman");
const baby2 = new Child("Arbaz");
console.log(baby.getFullName());
console.log(baby2.getFullName());