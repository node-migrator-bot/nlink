// Generated by CoffeeScript 1.3.1
var Model,
  __hasProp = {}.hasOwnProperty,
  __extends = function(child, parent) { for (var key in parent) { if (__hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor; child.__super__ = parent.prototype; return child; };

Model = (function(_super) {

  __extends(Model, _super);

  Model.name = 'Model';

  Model.include($.EventEmitter.prototype);

  function Model(options) {}

  return Model;

})(Module);
