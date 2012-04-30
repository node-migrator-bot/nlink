var Module, moduleKeywords;

moduleKeywords = [ "included", "extended" ];

Module = function() {
  Module.name = "Module";
  Module.registerClass = function(name) {
    this.prototype.className = name;
    return registerClass(name, this);
  };
  Module.include = function(obj) {
    var key, value, _ref;
    if (!obj) {
      throw "include(obj) requires obj";
    }
    for (key in obj) {
      value = obj[key];
      if (__indexOf.call(moduleKeywords, key) < 0) {
        this.prototype[key] = value;
      }
    }
    if ((_ref = obj.included) != null) {
      _ref.apply(this);
    }
    return this;
  };
  Module.extend = function(obj) {
    var key, value, _ref;
    if (!obj) {
      throw "extend(obj) requires obj";
    }
    for (key in obj) {
      value = obj[key];
      if (__indexOf.call(moduleKeywords, key) < 0) {
        this[key] = value;
      }
    }
    if ((_ref = obj.extended) != null) {
      _ref.apply(this);
    }
    return this;
  };
  Module.mixin = function(klass) {
    var key, t, val, _base, _ref;
    if (!klass) {
      throw "mixin(klass) requires klass";
    }
    this.include(klass.prototype);
    if ((_base = this.prototype)._mixins == null) {
      _base._mixins = {};
    }
    if (!this.prototype._mixins[this.name]) {
      t = {};
      _ref = this.prototype._mixins;
      for (key in _ref) {
        val = _ref[key];
        $.extend(t, val);
      }
      this.prototype._mixins[this.name] = t;
    }
    this.prototype._mixins[this.name][klass.name] = klass;
    return this;
  };
  Module.proxy = function(func) {
    var _this = this;
    return function() {
      return func.apply(_this, arguments);
    };
  };
  Module.prototype.proxy = function(func) {
    var _this = this;
    return function() {
      return func.apply(_this, arguments);
    };
  };
  function Module() {
    this._initializeMixins.apply(this, arguments);
  }
  Module.prototype._initializeMixins = function() {
    var ctor, key, _ref, _results;
    if (!this._mixins) {
      return;
    }
    _ref = this._mixins[this.className];
    _results = [];
    for (key in _ref) {
      ctor = _ref[key];
      _results.push(ctor.apply(this, arguments));
    }
    return _results;
  };
  Module.prototype.getClassByName = function(name) {
    return getClassByName(name);
  };
  Module.prototype.getObjectById = function(name) {
    return getObjectById(name);
  };
  Module.prototype.$$ = function(name) {
    return getObjectById(name);
  };
  return Module;
}();