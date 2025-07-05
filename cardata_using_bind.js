let car = {
  brand: "Tesla",
  getBrand: function() {
    return this.brand;
  }
};

let boundGetBrand = car.getBrand.bind(car);
console.log(boundGetBrand());  
