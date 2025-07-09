function createCar(make, model, year) {
  return {
    make: make,    
    model: model,   
    year: year,   
    describeCar: function() {
      console.log(`This car is a ${this.year} ${this.make} ${this.model}.`);
    }
  };
}

const car1 = createCar("Toyota", "Corolla", 2021);
car1.describeCar(); 

const car2 = createCar("Tesla", "Model 3", 2023);
car2.describeCar();  
