class Student {
  constructor(name, email, community) {
    this.name = name;
    this.email = email;
    this.community = community;
  }
}

class Bootcamp {
  constructor(name, level, students = []) {
    this.name = name;
    this.level = level;
    this.students = students;
  }
  registerStudent(student) {
    const dupeEmail = this.students.filter(
      (item) => item.email === student.email
    );
    if (dupeEmail.length === 0) {
      this.students.push(student);
      console.log(`Registering ${student.email} to the bootcamp ${student.community}.`);
      return;
    } else {
      console.log(`A student has already registered with the following email: ${student.email}! Please try again.`);
    }
  }
}

const student1 = new Student("Isaiah", "isaiahthomas098@gmail.com", "ReactWk1");
const student2 = new Student("Tim", "isaiahthomas098@gmail.com", "ReactWk1");
const bootcamp1 = new Bootcamp("Isaiah", "Advanced");

bootcamp1.registerStudent(student1);
bootcamp1.registerStudent(student2);

console.log(bootcamp1.students);
