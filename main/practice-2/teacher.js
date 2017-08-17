const Person = require('./person');
const Class = require('./class');

function Teacher(name, age, clazzes) {
  Person.call(this, name, age);
  this.clazzes = clazzes;
}

Teacher.prototype = new Person();
Teacher.prototype = {
  baseIntroduce: Teacher.prototype.introduce,
  introduce: function() {
    let classes = 'I teach Class ';
    if (this.clazzes.length !== 0) {
      this.clazzes.forEach(item => {
        classes += item.number + ',';
      })
      classes = classes.substr(0, classes.length - 1);
    } else {
      classes = 'I teach No Class';
    }

    return `${this.baseIntroduce()} I am a Teacher. ${classes}.`;
  }
}

module.exports = Teacher;
