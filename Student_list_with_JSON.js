function manageStudents() {
  let students = ["Alice", "Bob", "Charlie"];
  students.splice(1, 0, "David");
  const hasEve = students.includes("Eve");
  console.log("Includes 'Eve'? →", hasEve); 
  const studentList = students.join(",");
  console.log("Student List:", studentList); 
}

manageStudents();
function testManageStudents() {
  console.log("\n=== Test Case 1: Add at beginning ===");
  let students1 = ["Tom", "Jerry"];
  students1.splice(0, 0, "Spike"); 
  console.log("Includes 'Spike'? →", students1.includes("Spike")); 
  console.log("Result:", students1.join(", ")); 

  console.log("\n=== Test Case 2: Add at end ===");
  let students2 = ["Anna", "Elsa"];
  students2.splice(students2.length, 0, "Olaf");
  console.log("Includes 'Olaf'? →", students2.includes("Olaf")); 
  console.log("Result:", students2.join(", ")); 
  console.log("\n=== Test Case 3: Add in the middle ===");
  let students3 = ["Liam", "Emma", "Noah"];
  students3.splice(1, 0, "Ava");
  console.log("Includes 'Ava'? →", students3.includes("Ava"));
  console.log("Result:", students3.join(", "));

  console.log("\n=== Test Case 4: Check missing student ===");
  let students4 = ["Harry", "Ron", "Hermione"];
  console.log("Includes 'Draco'? →", students4.includes("Draco"));
  console.log("Result:", students4.join(" | "));
}

testManageStudents();
