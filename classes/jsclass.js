class person {
    // all properties are assigned to constructor
    constructor(name,age,address){
        this.name = name
        this.age = age
        this.address= address
    }
    // method
    showDetails(){
        console.log(`your details are: name ${this.name}, age:${this.age}, address:${this.address} `)
    }
}
// creation of object
const obj = new person('hari',25,'jhapa')
const obj1= new person ('ganesh',22,'ktm')

obj.showDetails();
obj1.showDetails();