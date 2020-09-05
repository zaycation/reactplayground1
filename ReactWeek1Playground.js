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
  pedalFaster(name) {
    console.log(`${name} starts pedalling even faster!`);
  },
};

bicycle.color = "green";
bicycle.electric = true;

bicycle.start(`Isaiah`);

bicycle.pedalFaster(`Isaiah`);
