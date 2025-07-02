function manageStudents() {
    let students = ["Alice", "Bob", "Charlie"];
    students.splice(1, 0, "David");
    console.log(students.includes("Eve")); 
    console.log(students.join(","));  
}
manageStudents();
function testManageStudents() {
  console.log("=== Test Case 1 ===");
  let students1 = ["Alice", "Bob", "Charlie"];
  students1.splice(2, 0, "Eve"); 
  console.log(students1.includes("Eve"));       
  console.log(students1.join(", "));           

  console.log("=== Test Case 2 ===");
  let students2 = ["Tom", "Jerry"];
  students2.splice(1, 0, "Spike");  
  console.log(students2.includes("Spike"));     
  console.log(students2.join(" | "));           
  console.log("=== Test Case 3 ===");
  let students3 = ["Ann"];
  students3.splice(0, 0, "Zoe"); 
  console.log(students3.includes("Ann"));       
  console.log(students3.join("-"));           

  console.log("=== Test Case 4 ===");
  let students4 = [];
  students4.splice(0, 0, "First");
  console.log(students4.includes("First"));  
  console.log(students4.join());          
}

testManageStudents();
