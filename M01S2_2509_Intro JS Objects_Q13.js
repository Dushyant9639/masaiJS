let studentScores = {
    John: 85,
    Emma: 92,
    Sam: 67,
    Bob: 45
  };
  
  for(let grade in studentScores){
    let scores = (studentScores[grade]>=90)?"A":(studentScores[grade]>=80)?"B":
    (studentScores[grade]>=70)?"C":(studentScores[grade]>=60)?"D":"F"
    console.log( grade+ ":"+scores)
  }
  