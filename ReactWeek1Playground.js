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
}

bicycle.start(`Isaiah`);

bicycle.goFaster(`Isaiah`);

//challenge 3

function hello(name) {
    return { studentName: name };
}

const hello = name => ({ studentName: name});