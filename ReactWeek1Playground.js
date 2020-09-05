//challenge 1
//begin person object
const person = {
  name: "carter",
  age: 26,
  log: function () {
    console.log(this.name);
  },
};

console.log(`${person.name} ${person.age}`);

//adds "last name" section to person object
person.lastName = "John";

person.log();

//challenge 2

const bicycle = {
  color: "blue",
  electric: false,
  start(name) {
    console.log(`${name} begins to pedal the ${this.color} bike`);
    console.log(`TIP: Use 'pedalFaster()' to pedal faster!\n\n`);
  },
  goFaster(name) {
    console.log(`${name} starts revving his e-bike to go even faster!`);
  },
};

bicycle.color = "green";
bicycle.electric = true;
bicycle.start = function (name) {
  console.log(`${name} starts the engine on his ${this.color} e-bike!`);
  console.log(`TIP: Use 'goFaster()' to rev your engine and go faster!\n\n`);
};

bicycle.start(`Isaiah`);

bicycle.goFaster(`Isaiah`);

//challenge 3

const hello = (name) => ({ studentName: name });

console.log(hello("Carter"));
console.log(hello("Isaiah"));
console.log(hello("James"));
console.log(hello("Keith"));

//challenge 4
class Book {
  constructor(title, author, year, isRead = false) {
    this.title = title;
    this.author = author;
    this.year = year;
    this.isRead = isRead;
  }
}

const book1 = new Book("Steppenwolf", "Herman Hesse", 1927, true);
const book2 = new Book("Dune", "Frank Herbert", 1965);
const book3 = new Book(
  "Digital Audio Production 101 - The Noob Guide",
  "Isaiah Thomas"
);

console.log(book1);
console.log(book2);
console.log(book3);