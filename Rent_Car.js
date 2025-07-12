function Car(make, model, year, type, isAvailable = true) {
  this.make = make;
  this.model = model;
  this.year = year;
  this.type = type; 
  this.isAvailable = isAvailable;
}
function Customer(name) {
  this.name = name;
  this.rentedCars = [];
}

// Rent a car method
Customer.prototype.rentCar = function(car) {
  if (car.isAvailable) {
    car.isAvailable = false;
    this.rentedCars.push(car);
    console.log(`${this.name} has rented ${car.make} ${car.model}.`);
  } else {
    console.log(`${car.make} ${car.model} is already rented.`);
  }
};
function PremiumCustomer(name, discountRate) {
  Customer.call(this, name); // Call super constructor
  this.discountRate = discountRate;
}

// Inherit prototype
PremiumCustomer.prototype = Object.create(Customer.prototype);
PremiumCustomer.prototype.constructor = PremiumCustomer;
const baseRate = 50;
const typeRates = {
  SUV: 1.5,
  Sedan: 1.0,
  Truck: 2.0,
  Coupe: 1.2
};

function calculateRentalPrice(car, days, customer) {
  const rateMultiplier = typeRates[car.type] || 1.0;
  let price = baseRate * rateMultiplier * days;

  // Apply discount for PremiumCustomer
  if (customer instanceof PremiumCustomer) {
    price *= 1 - customer.discountRate;
  }

  console.log(`${customer.name}'s rental cost for ${days} day(s) is $${price.toFixed(2)}.`);
  return price;
}
Customer.prototype.returnCar = function(car) {
  const carIndex = this.rentedCars.indexOf(car);
  if (carIndex !== -1) {
    console.log(`${this.name} is returning ${car.make} ${car.model}...`);
    setTimeout(() => {
      car.isAvailable = true;
      this.rentedCars.splice(carIndex, 1);
      console.log(`${car.make} ${car.model} has been returned and is now available.`);
    }, 2000);
  } else {
    console.log(`${this.name} did not rent ${car.make} ${car.model}.`);
  }
};
function performMaintenance(car, delay) {
  car.isAvailable = false;
  console.log(`${car.make} ${car.model} is under maintenance...`);
  setTimeout(() => {
    car.isAvailable = true;
    console.log(`${car.make} ${car.model} is now available after maintenance.`);
  }, delay);
}
// Create car objects
const car1 = new Car('Toyota', 'Corolla', 2020, 'Sedan');
const car2 = new Car('Ford', 'Explorer', 2022, 'SUV');
const car3 = new Car('Tesla', 'Model X', 2023, 'SUV');
const car4 = new Car('Honda', 'Civic', 2019, 'Coupe');

// Create customers
const alice = new Customer('Alice');
const bob = new PremiumCustomer('Bob', 0.1); // 10% discount

// Rent a car using call
alice.rentCar.call(bob, car2); // Bob rents Ford Explorer via call

// Rent a car normally
alice.rentCar(car1);

// Try to rent an already rented car
bob.rentCar(car1);

// Calculate price using apply
calculateRentalPrice.apply(null, [car2, 3, bob]); // Bob rents 3 days

// Use bind to create a bound function
const returnCarBound = alice.returnCar.bind(alice, car1);
setTimeout(returnCarBound, 3000); // Delayed return

// Perform maintenance
performMaintenance(car3, 4000);

