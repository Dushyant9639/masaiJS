const people = [ { name: "Alice", address: { city: "New York", street: { name: "Broadway", number: 123 } } }, 
{ name: "Bob", address: { city: "Los Angeles", street: { name: "Sunset Boulevard", number: 456 } } } ];

let res= people.map(({name,address:{city,street:{name:streetname}}}) => {return`${name} lives in ${city} on ${streetname}`});

console.log(res)