const user = { id: 123, profile: { name: "John Doe", address: { city: "Los Angeles", zipcode: "90001" } } };

let id= user?.id??"Information not available"
let name= user?.profile?.name??"Information not available"
let city= user?.profile?.address?.city??"Information not available"
let zipcode= user?.profile?.address?.zipcode??"Information not available"

let res= `User ${name} (ID:${id}) lives in ${city} (ZIP:${zipcode})`
console.log(res)