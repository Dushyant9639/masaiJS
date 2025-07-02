const user = {
  name: "John Doe",
  age: 25,
  email: "john@example.com",
  isAdmin: false
};

const jsonString = JSON.stringify(user);
const parsedUser = JSON.parse(jsonString);

console.log("Name:", parsedUser.name);
console.log("Age:", parsedUser.age);
console.log("Email:", parsedUser.email);
console.log("Admin:", parsedUser.isAdmin);
