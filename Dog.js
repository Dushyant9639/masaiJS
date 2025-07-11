function Animal(){
  this.type= "Animal"
}
Animal.prototype.Sound= function(){
  console.log("Animal Sound")
}
function Dog(){
  Animal.call(this)
}
Dog.prototype= Object.create(Animal.prototype)
Dog.prototype.constructor= Dog

Dog.prototype.Sound= function(){
  console.log("Bark")
}
let myDog= new Dog()
myDog.Sound()