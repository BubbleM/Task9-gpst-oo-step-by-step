function Class(number) {
  this.number = number;
  this.member = [];
  this.teacher = [];
}

Class.prototype = {
  leader: '',
  assignLeader: function (student) {
    this.leader = student;
    this.teacher.forEach(item => {
      item.notifyLeaderAssigned += `I know ${student.name} become Leader of Class ${student.clazz.number}.`;
    });
    if (this.member.includes(student) > 0) {
      return 'Assign team leader successfully.';
    } else {
      return 'It is not one of us.';
    }
  },

  appendMember: function (student) {
    this.member.push(student);
    this.teacher.forEach(item => {
      item.notifyStudentAppended += `I know ${student.name} has joined Class ${student.clazz.number}.`;
    });
  },

  hasStudent: function (student) {
    let result = false;
    if (this.member.includes(student) > 0) result = true;

    return result;
  }
}

module.exports = Class;
