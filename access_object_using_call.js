function personInfo() {
  console.log(`Name: ${this.name}, Age: ${this.age}`);
}

const person = {
  name: "John",
  age: 30
};

personInfo.call(person);
