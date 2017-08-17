const Person = require('./person');

function Teacher(name, age, clazzes) {
  Person.call(this, name, age);
  this.clazzes = clazzes;
}

Teacher.prototype = new Person();

function formatClass(classes) {
  let result = [];
  classes.forEach(item => {
    result.push(item.number);
  });

  return result.join(',');
}


Teacher.prototype = {
  baseIntroduce: Teacher.prototype.introduce,
  introduce: function () {
    if (this.clazzes.length !== 0)
      return `${this.baseIntroduce()} I am a Teacher. I teach Class ${formatClass(this.clazzes)}.`

    return `${this.baseIntroduce()} I am a Teacher. I teach No Class.`
  },

  isTeaching: function (student) {
    let result = false;
    this.clazzes.forEach(item => {
      if (item.hasStudent(student)) result = true;
    });

    return result;
  }
}

module.exports = Teacher;

