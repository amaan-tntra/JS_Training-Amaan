const students = [
  { name: "Alice", score: 85 },
  { name: "Bob", score: 92 },
  { name: "Charlie", score: 58 },
  { name: "David", score: 74 },
];

// Calculate average using reduce()
const average = students.reduce((acc, item) => {
  return acc + item.score / students.length;
}, 0);
console.log("Average Score:", average);

//Function to calculate highest and lowest score
function highlow(students) {
  const highest = students.reduce((max, value) => {
    return value.score > max.score ? value : max;
  });
  const lowest = students.reduce((min, value) => {
    return value.score < min.score ? value : min;
  });
  return { highest, lowest };
}

let { highest, lowest } = highlow(students);
console.log(`Highest score: ${highest.name} (${highest.score})`);
console.log(`Lowest score: ${lowest.name} (${lowest.score})`);

//Function to count of students in each grade category
function gradeDistribution(students) {
  const grades = {
    A: 0,
    B: 0,
    C: 0,
    D: 0,
    F: 0,
  };
  students.forEach((value) => {
    let marks = value.score;
    if (marks >= 90) grades.A++;
    else if (marks >= 80) grades.B++;
    else if (marks >= 70) grades.C++;
    else if (marks >= 60) grades.D++;
    else if (marks < 60) grades.F++;
    else console.log("Not valid");
  });

  return grades;
}
let obj1 = gradeDistribution(students);
console.log("Grade Distribution: ",obj1);

// Function to list students who need to retake the exam
function retakeStudents() {
  const failed = [];
  students.filter((student) => {
    if (student.score < 60) {
      failed.push(student.name);
    }
  });
  return failed;
}
console.log("Students needing retake: ",retakeStudents(students));
