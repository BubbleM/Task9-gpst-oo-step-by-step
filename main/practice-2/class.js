function Class(number) {
  this.number = number;
}

Class.prototype = {
  leader: '',
  assignLeader: function (student) {
    this.leader = student;
  }
}

module.exports = Class;
