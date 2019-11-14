// Type this out yourself! Edit these!

let listOfNumbers = [2, 3, 5, 6, 11];
// List of Numbers: 2,3,5,6,11
console.log("List of Numbers: " + listOfNumbers);
// Accessing number at index 2: 5
console.log("Accessing number at index 2: " + listOfNumbers[2]);
// Length: 5
console.log("Length: " + listOfNumbers.length);

let listOfStuffs = ["ruby", "emerald", { yellow: 2334 }, 2019, "11", "sword"];
// List of Stuffs: ruby,emerald,[object Object],2019,11,sword
console.log("List of Stuffs: " + listOfStuffs);
// Accessing stuff at index -1: undefined
console.log("Accessing stuff at index -1: " + listOfStuffs[-1]);
// Accessing stuff at index 2: [object Object]
console.log("Accessing stuff at index 2: " + listOfStuffs[2]);
// Accessing the value of 'yellow' inside object: 2334
console.log(
  "Accessing the value of 'yellow' inside object:" + listOfStuffs[2]["yellow"]
);
// Length: 6
console.log("Length: " + listOfStuffs.length);

let sequence = [];
sequence.push(4);
sequence.push(5);

// [ 4, 5 ]
console.log(sequence);
// Sequence before pushing: 4,5
console.log("Sequence before pushing: " + sequence);
// 5
console.log(sequence.pop());
// Sequence after popping: 4
console.log("Sequence after popping: " + sequence);
