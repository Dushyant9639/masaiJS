let book = { title: "The Hobbit", author: "J.R.R. Tolkien", year: 1937 };
let str=""
for(let key in book){
  str = str+ key +":"+ book[key] +" "
}
console.log(str)