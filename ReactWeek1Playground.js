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
  start() {
    console.log("You begin to pedal the bike");
    console.log("Use 'pedalFaster()' to pedal faster!")
  },
  pedalFaster() {
      console.log("You start pedalling faster!")
  }
};

bicycle.start();
bicycle.pedalFaster();