class person {
    // all properties are assigned to constructor
    constructor(name,age,address){
        this.name = name
        this.age = age
        this.address= address
    }
    // method
    personInfo(){
        return `your details are: name ${this.name.toUpperCase()}, age:${this.age}, address:${this.address} `
    }
}


// inheritance 

class student extends person{
   
    constructor(name,age,address,subject){
        super (name,age,address)
        this.subject=subject;
    }
    studentInfo(){
        console.log(` student ${this.name} take ${this.subject.charAt(0).toUpperCase()+ this.subject.slice(1)} subject.`)
    }
   personDetails(){
    return `access parent method personInfo(): ${super.personInfo()}`
   }
}
// creation of object
const obj = new person('hari',25,'jhapa')
console.log(obj.personInfo())

const stuObj =new student('ram',26,'ilam','science')
stuObj.studentInfo();

console.log(stuObj.personDetails());