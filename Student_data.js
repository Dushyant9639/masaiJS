function processData(students) {
  const filtered = students.filter(student =>
    student.name.toLowerCase().includes("alice") && student.score >= 50
  );
  const sorted = filtered.sort((a, b) => b.score - a.score);

  const rankedStudents = sorted.map((student, index) => ({
    name: student.name.trim().toUpperCase(),
    score: student.score,
    rank: index + 1
  }));
  const totalPassed = rankedStudents.reduce(count => count + 1, 0);

  return {
    totalPassed,
    students: rankedStudents
  };
}
const students = [
  { name: ' Alice Cooper ', score: 85 },
  { name: 'bob alice', score: 42 },
  { name: 'Alice Wonderland', score: 70 },
  { name: ' david', score: 30 }
];

const result = processData(students);
console.log(result);

