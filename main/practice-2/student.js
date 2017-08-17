const Person = require('./person');
const Class = require('./class');

function Student(name, age, clazz) {
  Person.call(this, name, age);
  this.clazz = clazz;
}

Student.prototype = new Person();
Student.prototype = {
  baseIntroduce: Student.prototype.introduce,
  introduce: function() {
    let str = `${this.baseIntroduce()} I am a Student. `;
    if (this.clazz.leader === this) {
      str += `I am Leader of Class ${this.clazz.number}.`;
    } else {
      str += `I am at Class ${this.clazz.number}.`;
    }

    return str;
  }
}

module.exports = Student;
