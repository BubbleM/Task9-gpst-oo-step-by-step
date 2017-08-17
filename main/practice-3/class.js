function Class(number) {
  this.number = number;
  this.member = [];
}

Class.prototype = {
  leader: '',
  assignLeader: function (student) {
    this.leader = student;
    if (this.member.includes(student) > 0) {
      return 'Assign team leader successfully.';
    } else {
      return 'It is not one of us.';
    }
  },

  appendMember: function (student) {
    this.member.push(student);
  },

  hasStudent: function (student) {
    let result = false;
    if (this.member.includes(student) > 0) result = true;

    return result;
  }
}

module.exports = Class;
