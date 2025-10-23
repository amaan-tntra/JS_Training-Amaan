const students = [
{ name: "Alice", score: 85 },
{ name: "Bob", score: 92 },
{ name: "Charlie", score: 58 },
{ name: "David", score: 74 }
];

const average = students.reduce((acc,item) => {
    return acc + item.score / students.length
},0);
console.log(average)