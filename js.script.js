const companies = [
  { name: "Company Two", category: "Technology", start: 1981, end: 1997 },
  { name: "Company One", category: "Finance", start: 2000, end: 2003 },
  { name: "Company Three", category: "Auto", start: 1981, end: 2002 },
  { name: "Company Four", category: "Finance", start: 1997, end: 2003 },
  { name: "Company Five", category: "Finance", start: 1989, end: 2023 },
  { name: "Company Six", category: "Technology", start: 1981, end: 2003 },
  { name: "Company Seven", category: "Auto", start: 1981, end: 2003 },
  { name: "Company Eight", category: "Finance", start: 1969, end: 2003 },
  { name: "Company Nine", category: "Technology", start: 1981, end: 2003 },
  { name: "Company Ten", category: "Auto", start: 1981, end: 1997 },
];

const ages = [34, 89, 02, 35, 90, 64, 35, 32, 64, 84, 21, 12, 05, 04, 08];

/*for (let i = 0; i < companies.length; i++) {
  console.log(companies[i]);
}
*/
/*
const companyNames = companies.map(function (company) {
  return company.name;
});
console.log(companyNames);

const testMap = companies.map(
  (company) => `${company.name} [${company.start} - ${company.end}]`
);

console.log(testMap);
*/

/*const agesMap = ages.map((age) => Math.sqrt(age)).map((age) => age * 2);

console.log(agesMap);
*/
/*
const sortedCompanies = companies.sort(function (c1, c2) {
  if (c1.start > c2.start) {
    return 1;
  } else {
    return -1;
  }
});

console.log(sortedCompanies);
*/
/*
const sortAges = ages.sort((a, b) => a - b);
console.log(sortAges);

const ageSum = ages.reduce((total, age) => total + age, 0);
// Get total years for all companies
/*
const totalYears = companies.reduce(function (total, company) {
  return total + (company.end - company.start);
}, 0);
*/
/*
//combine Methods
const combine = ages.map((age) => age * 2);
//  .filter((age) => age >= 40)
//  .sort((a, b) => a - b)
//  .reduce((a, b) => a + b);
console.log(combine);
alert = "hello";*/

// const age = 41;
// if ((age >= 0 && age <= 5) || (age >= 65 && age <= 100)) {
//   console.log(" You get in for free");
// } else {
//   console.log("You have to pay");
// }
// const password = prompt("please enter a new password");
// if (password.length >= 6) {
//   console.log("long enough password");
// } else {
//   console.log("Password is too short!  Must be 6+ characters");
// }
// if (password.indexOf(" ") === -1) {
//   console.log("good job no space");
// } else {
//   console.log("password cannot contain spaces");
// }
// for (let i = 100; i >= 0; i -= 10) {
//   console.log([i] + " " + "almost there!!!");
// }

let input = prompt("What would you like to do?");
while (input !== "quit") {
  console.log(input);
}
