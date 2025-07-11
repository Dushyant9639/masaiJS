// Constructor function for Person having property age and name
function Person(name,age){
  this.name= name
  this.age= age
}
// Adding method introduce to person prototype 
Person.prototype.introduce= function(){
  console.log(`Hi,my name is ${this.name} and I am ${this.age} years old`)
}
// constructor function for the Employee that inherits from the person and haveing new property jobTitle
function Employee(name, age, jobTitle){
  Person.call(this, name, age) //calling the Person constructor with th Employee this
  this.jobTitle= jobTitle
}
// inherits methods from the Person
Employee.prototype= Object.create(Person.prototype)
//Restoring the constructor property
Employee.prototype.constructor= Employee
// Adding method work to Employee prototype
Employee.prototype.work= function(){
  console.log(`${this.name} is working as ${this.jobTitle}`)
}
// Demostration
let Person1= new Person("Dushyant",22)
let Employee1= new Employee("Dushyant",22,"Full Stack Developer")
Person1.introduce()
Employee1.introduce()
Employee1.work()

