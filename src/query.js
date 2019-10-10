require("./index");
const Person = require("./models/Person");

/*
1. One Query

*/

// Person.query().then();

/*
2. 3 queries at the same time

*/

// Person.query().then();
// Person.query().then();
// Person.query().then();

/*
3. 3 queries in serie
*/

// Person.query()
//   .then(() => {
//     return Person.query().then();
//   })
//   .then(() => {
//     return Person.query().then();
//   });

/*
4. 3 queries using Promise.all
*/

// Promise.all([
//   Person.query().then(),
//   Person.query().then(),
//   Person.query().then()
// ]);
