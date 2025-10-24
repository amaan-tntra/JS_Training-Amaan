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

let {highest, lowest} = highlow(students);
console.log(`Highest score: ${highest.name} (${highest.score})`);
console.log(`Lowest score: ${lowest.name} (${lowest.score})`);
