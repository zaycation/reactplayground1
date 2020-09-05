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
person.lastName = "steinhoff";

person.log();

const bicycle = {
  color: "blue",
  electric: false,
  start() {
    console.log("You begin to pedal the bike");
  },
};

bicycle.start();
