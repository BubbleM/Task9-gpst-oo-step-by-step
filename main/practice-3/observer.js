let Observer = (function () {
  var _messages = [];
  return {
    regist: function (type, fn) {
      if (typeof _messages[type] === 'undefined') {
        _messages[type] = fn;
      } else {
        _messages[type].push(fn);
      }
    },
    fire: function (type, args) {
      if (!_messages[type]) return;
      let events = {
        type: type,
        args: args || {}
      },
        i = 0,
        len = _messages[type].length;
      for (; i < len; i++) {
        _messages[type][i].call(this, events);
      }
    },
    remove: function () {}
  }
})();

module.exports = Observer;