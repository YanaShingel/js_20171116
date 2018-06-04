/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// identity function for calling harmony imports with the correct context
/******/ 	__webpack_require__.i = function(value) { return value; };
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 12);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Block = function Block(node) {
    var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};

    _classCallCheck(this, Block);

    this.node = node;
    this.options = options;
};

exports.default = Block;

/***/ }),
/* 1 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var pug_has_own_property = Object.prototype.hasOwnProperty;

/**
 * Merge two attribute objects giving precedence
 * to values in object `b`. Classes are special-cased
 * allowing for arrays and merging/joining appropriately
 * resulting in a string.
 *
 * @param {Object} a
 * @param {Object} b
 * @return {Object} a
 * @api private
 */

exports.merge = pug_merge;
function pug_merge(a, b) {
  if (arguments.length === 1) {
    var attrs = a[0];
    for (var i = 1; i < a.length; i++) {
      attrs = pug_merge(attrs, a[i]);
    }
    return attrs;
  }

  for (var key in b) {
    if (key === 'class') {
      var valA = a[key] || [];
      a[key] = (Array.isArray(valA) ? valA : [valA]).concat(b[key] || []);
    } else if (key === 'style') {
      var valA = pug_style(a[key]);
      var valB = pug_style(b[key]);
      a[key] = valA + valB;
    } else {
      a[key] = b[key];
    }
  }

  return a;
};

/**
 * Process array, object, or string as a string of classes delimited by a space.
 *
 * If `val` is an array, all members of it and its subarrays are counted as
 * classes. If `escaping` is an array, then whether or not the item in `val` is
 * escaped depends on the corresponding item in `escaping`. If `escaping` is
 * not an array, no escaping is done.
 *
 * If `val` is an object, all the keys whose value is truthy are counted as
 * classes. No escaping is done.
 *
 * If `val` is a string, it is counted as a class. No escaping is done.
 *
 * @param {(Array.<string>|Object.<string, boolean>|string)} val
 * @param {?Array.<string>} escaping
 * @return {String}
 */
exports.classes = pug_classes;
function pug_classes_array(val, escaping) {
  var classString = '', className, padding = '', escapeEnabled = Array.isArray(escaping);
  for (var i = 0; i < val.length; i++) {
    className = pug_classes(val[i]);
    if (!className) continue;
    escapeEnabled && escaping[i] && (className = pug_escape(className));
    classString = classString + padding + className;
    padding = ' ';
  }
  return classString;
}
function pug_classes_object(val) {
  var classString = '', padding = '';
  for (var key in val) {
    if (key && val[key] && pug_has_own_property.call(val, key)) {
      classString = classString + padding + key;
      padding = ' ';
    }
  }
  return classString;
}
function pug_classes(val, escaping) {
  if (Array.isArray(val)) {
    return pug_classes_array(val, escaping);
  } else if (val && typeof val === 'object') {
    return pug_classes_object(val);
  } else {
    return val || '';
  }
}

/**
 * Convert object or string to a string of CSS styles delimited by a semicolon.
 *
 * @param {(Object.<string, string>|string)} val
 * @return {String}
 */

exports.style = pug_style;
function pug_style(val) {
  if (!val) return '';
  if (typeof val === 'object') {
    var out = '';
    for (var style in val) {
      /* istanbul ignore else */
      if (pug_has_own_property.call(val, style)) {
        out = out + style + ':' + val[style] + ';';
      }
    }
    return out;
  } else {
    val += '';
    if (val[val.length - 1] !== ';') 
      return val + ';';
    return val;
  }
};

/**
 * Render the given attribute.
 *
 * @param {String} key
 * @param {String} val
 * @param {Boolean} escaped
 * @param {Boolean} terse
 * @return {String}
 */
exports.attr = pug_attr;
function pug_attr(key, val, escaped, terse) {
  if (val === false || val == null || !val && (key === 'class' || key === 'style')) {
    return '';
  }
  if (val === true) {
    return ' ' + (terse ? key : key + '="' + key + '"');
  }
  if (typeof val.toJSON === 'function') {
    val = val.toJSON();
  }
  if (typeof val !== 'string') {
    val = JSON.stringify(val);
    if (!escaped && val.indexOf('"') !== -1) {
      return ' ' + key + '=\'' + val.replace(/'/g, '&#39;') + '\'';
    }
  }
  if (escaped) val = pug_escape(val);
  return ' ' + key + '="' + val + '"';
};

/**
 * Render the given attributes object.
 *
 * @param {Object} obj
 * @param {Object} terse whether to use HTML5 terse boolean attributes
 * @return {String}
 */
exports.attrs = pug_attrs;
function pug_attrs(obj, terse){
  var attrs = '';

  for (var key in obj) {
    if (pug_has_own_property.call(obj, key)) {
      var val = obj[key];

      if ('class' === key) {
        val = pug_classes(val);
        attrs = pug_attr(key, val, false, terse) + attrs;
        continue;
      }
      if ('style' === key) {
        val = pug_style(val);
      }
      attrs += pug_attr(key, val, false, terse);
    }
  }

  return attrs;
};

/**
 * Escape the given string of `html`.
 *
 * @param {String} html
 * @return {String}
 * @api private
 */

var pug_match_html = /["&<>]/;
exports.escape = pug_escape;
function pug_escape(_html){
  var html = '' + _html;
  var regexResult = pug_match_html.exec(html);
  if (!regexResult) return _html;

  var result = '';
  var i, lastIndex, escape;
  for (i = regexResult.index, lastIndex = 0; i < html.length; i++) {
    switch (html.charCodeAt(i)) {
      case 34: escape = '&quot;'; break;
      case 38: escape = '&amp;'; break;
      case 60: escape = '&lt;'; break;
      case 62: escape = '&gt;'; break;
      default: continue;
    }
    if (lastIndex !== i) result += html.substring(lastIndex, i);
    lastIndex = i + 1;
    result += escape;
  }
  if (lastIndex !== i) return result + html.substring(lastIndex, i);
  else return result;
};

/**
 * Re-throw the given `err` in context to the
 * the pug in `filename` at the given `lineno`.
 *
 * @param {Error} err
 * @param {String} filename
 * @param {String} lineno
 * @param {String} str original source
 * @api private
 */

exports.rethrow = pug_rethrow;
function pug_rethrow(err, filename, lineno, str){
  if (!(err instanceof Error)) throw err;
  if ((typeof window != 'undefined' || !filename) && !str) {
    err.message += ' on line ' + lineno;
    throw err;
  }
  try {
    str = str || __webpack_require__(18).readFileSync(filename, 'utf8')
  } catch (ex) {
    pug_rethrow(err, null, lineno)
  }
  var context = 3
    , lines = str.split('\n')
    , start = Math.max(lineno - context, 0)
    , end = Math.min(lines.length, lineno + context);

  // Error context
  var context = lines.slice(start, end).map(function(line, i){
    var curr = i + start + 1;
    return (curr == lineno ? '  > ' : '    ')
      + curr
      + '| '
      + line;
  }).join('\n');

  // Alter exception message
  err.path = filename;
  err.message = (filename || 'Pug') + ':' + lineno
    + '\n' + context + '\n\n' + err.message;
  throw err;
};


/***/ }),
/* 2 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _block = __webpack_require__(0);

var _block2 = _interopRequireDefault(_block);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Button = function (_Block) {
    _inherits(Button, _Block);

    function Button(node) {
        var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};

        _classCallCheck(this, Button);

        var _this = _possibleConstructorReturn(this, (Button.__proto__ || Object.getPrototypeOf(Button)).call(this, node, options));

        _this.node.addEventListener('click', function () {
            _this.onClick();
        });
        return _this;
    }

    _createClass(Button, [{
        key: 'render',
        value: function render() {
            this.node.innerHTML = '\n        <button class="button">\n            ' + this.options.text + '\n        </button>';
        }
    }, {
        key: 'onClick',
        value: function onClick() {}
    }]);

    return Button;
}(_block2.default);

exports.default = Button;

/***/ }),
/* 3 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var User = function () {
    function User(name) {
        _classCallCheck(this, User);

        this.name = name;
    }

    _createClass(User, [{
        key: "save",
        value: function save() {
            localStorage.setItem("user", JSON.stringify({
                name: this.name
            }));
        }
    }], [{
        key: "load",
        value: function load() {
            var data = localStorage.getItem("user");

            if (!data) {
                return false;
            }

            try {
                data = JSON.parse(data);
            } catch (err) {
                console.error("invalid user");
                return false;
            }

            return new User(data.name);
        }
    }]);

    return User;
}();

exports.default = User;

/***/ }),
/* 4 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var View = function () {
    function View(node) {
        _classCallCheck(this, View);

        this.node = node;
    }

    _createClass(View, [{
        key: "show",
        value: function show() {
            this.node.hidden = false;
        }
    }, {
        key: "hide",
        value: function hide() {
            this.node.hidden = true;
        }
    }]);

    return View;
}();

exports.default = View;

/***/ }),
/* 5 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

/**
 * 1) Определить текущий, на который пользователь
 * 2) Уметь отслеживать измениня
 * 3) При изменении показывать view, которое соовтетсвует адерсу
 */

var Router = function () {
    function Router() {
        _classCallCheck(this, Router);

        this.routes = {};
    }

    // Определить текущий, на который пользователь


    _createClass(Router, [{
        key: 'start',
        value: function start() {
            var _this = this;

            console.log('start', this.routes);

            window.addEventListener('hashchange', function () {
                _this.show(location.hash.replace('#', ''));
            });

            this.show(location.hash.replace('#', ''));
        }
    }, {
        key: 'show',
        value: function show(hash) {
            console.log('on view', hash);

            if (this.current) {
                this.current.hide();
            }

            this.current = this.routes[hash];
            this.current.show();
        }

        /**
         * Регистрация маршрута
         * @param {string} name
         * @param {Object} view
         */

    }, {
        key: 'register',
        value: function register(name, view) {
            this.routes[name] = view;
        }
    }]);

    return Router;
}();

exports.default = Router;

/***/ }),
/* 6 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _get = function get(object, property, receiver) { if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { return get(parent, property, receiver); } } else if ("value" in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } };

var _view = __webpack_require__(4);

var _view2 = _interopRequireDefault(_view);

var _auth = __webpack_require__(16);

var _auth2 = _interopRequireDefault(_auth);

var _button = __webpack_require__(2);

var _button2 = _interopRequireDefault(_button);

var _input = __webpack_require__(8);

var _input2 = _interopRequireDefault(_input);

var _user = __webpack_require__(3);

var _user2 = _interopRequireDefault(_user);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Auth = function (_View) {
    _inherits(Auth, _View);

    function Auth(node) {
        _classCallCheck(this, Auth);

        var _this = _possibleConstructorReturn(this, (Auth.__proto__ || Object.getPrototypeOf(Auth)).call(this, node));

        _this.node.innerHTML = (0, _auth2.default)();

        _this.button = new _button2.default(_this.node.querySelector('.js-submit'), {
            text: 'Войти'
        });

        _this.input = new _input2.default(_this.node.querySelector('.js-name'), {
            value: '',
            placeholder: 'Введите имя'
        });

        _this.input.render();
        _this.button.render();

        _this.button.onClick = function () {
            _this.login();
        };
        return _this;
    }

    _createClass(Auth, [{
        key: 'show',
        value: function show() {
            var model = _user2.default.load();

            if (model) {
                location.href = './#chat';
            }

            _get(Auth.prototype.__proto__ || Object.getPrototypeOf(Auth.prototype), 'show', this).call(this);
        }
    }, {
        key: 'login',
        value: function login() {
            var name = this.input.getValue();

            if (!name.length) {
                alert('Не валидное имя');
                return;
            }

            var model = new _user2.default(name);
            model.save();

            location.href = './#chat';
        }
    }]);

    return Auth;
}(_view2.default);

exports.default = Auth;

/***/ }),
/* 7 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _get = function get(object, property, receiver) { if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { return get(parent, property, receiver); } } else if ("value" in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } };

var _view = __webpack_require__(4);

var _view2 = _interopRequireDefault(_view);

var _chat = __webpack_require__(17);

var _chat2 = _interopRequireDefault(_chat);

var _messageCreate = __webpack_require__(9);

var _messageCreate2 = _interopRequireDefault(_messageCreate);

var _message = __webpack_require__(10);

var _message2 = _interopRequireDefault(_message);

var _messages = __webpack_require__(13);

var _messages2 = _interopRequireDefault(_messages);

var _user = __webpack_require__(3);

var _user2 = _interopRequireDefault(_user);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Chat = function (_View) {
    _inherits(Chat, _View);

    function Chat(node) {
        _classCallCheck(this, Chat);

        var _this = _possibleConstructorReturn(this, (Chat.__proto__ || Object.getPrototypeOf(Chat)).call(this, node));

        _this.node.innerHTML = (0, _chat2.default)();

        _this.form = new _messageCreate2.default(document.querySelector(".js-form"));
        _this.form.render();

        _this.form.onSubmit = function (message) {
            _this.messages.addMessage(_this.user.name, message);
        };
        return _this;
    }

    _createClass(Chat, [{
        key: "addMessage",
        value: function addMessage(data) {
            var node = document.createElement("div");

            var message = new _message2.default(node, data);
            message.render();
            this.node.querySelector(".js-list").appendChild(node);
        }
    }, {
        key: "onPoll",
        value: function onPoll(items) {
            var _this2 = this;

            this.node.querySelector(".js-list").innerHTML = "";
            items.forEach(function (data) {
                return _this2.addMessage(data);
            });
        }
    }, {
        key: "show",
        value: function show() {
            var _this3 = this;

            this.user = _user2.default.load();
            this.messages = new _messages2.default();

            if (!this.user) {
                location.href = "./#auth";
            }

            _get(Chat.prototype.__proto__ || Object.getPrototypeOf(Chat.prototype), "show", this).call(this);
            this.messages.fetch(function (items) {
                items.forEach(function (data) {
                    return _this3.addMessage(data);
                });

                _this3.messages.start(function (data) {
                    return _this3.onPoll(data);
                });
            });
        }
    }]);

    return Chat;
}(_view2.default);

exports.default = Chat;

/***/ }),
/* 8 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _block = __webpack_require__(0);

var _block2 = _interopRequireDefault(_block);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Input = function (_Block) {
    _inherits(Input, _Block);

    function Input(node) {
        var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};

        _classCallCheck(this, Input);

        return _possibleConstructorReturn(this, (Input.__proto__ || Object.getPrototypeOf(Input)).call(this, node, options));
    }

    _createClass(Input, [{
        key: 'render',
        value: function render() {
            this.node.innerHTML = '\n        <input class="input" value="' + this.options.value + '" placeholder="' + this.options.placeholder + '"/>';
        }
    }, {
        key: 'getValue',
        value: function getValue() {
            return this.node.querySelector('input').value;
        }
    }]);

    return Input;
}(_block2.default);

exports.default = Input;

/***/ }),
/* 9 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _block = __webpack_require__(0);

var _block2 = _interopRequireDefault(_block);

var _textarea = __webpack_require__(11);

var _textarea2 = _interopRequireDefault(_textarea);

var _button = __webpack_require__(2);

var _button2 = _interopRequireDefault(_button);

var _messageCreate = __webpack_require__(14);

var _messageCreate2 = _interopRequireDefault(_messageCreate);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

// import "./message-create.scss";

var CreateMsg = function (_Block) {
    _inherits(CreateMsg, _Block);

    function CreateMsg(node) {
        var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};

        _classCallCheck(this, CreateMsg);

        return _possibleConstructorReturn(this, (CreateMsg.__proto__ || Object.getPrototypeOf(CreateMsg)).call(this, node, options));
    }

    _createClass(CreateMsg, [{
        key: "render",
        value: function render() {
            var _this2 = this;

            this.node.innerHTML = (0, _messageCreate2.default)();

            var button = new _button2.default(this.node.querySelector(".js-submit"), {
                text: "Отправить"
            });

            var textarea = new _textarea2.default(this.node.querySelector(".js-textarea"), {
                placeholder: "Введите сообщение",
                rows: 5
            });

            textarea.render();
            button.render();

            button.onClick = function () {
                _this2.onSubmit(textarea.getValue());
            };
        }
    }, {
        key: "onSubmit",
        value: function onSubmit() {}
    }]);

    return CreateMsg;
}(_block2.default);

exports.default = CreateMsg;

/***/ }),
/* 10 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _block = __webpack_require__(0);

var _block2 = _interopRequireDefault(_block);

var _message = __webpack_require__(15);

var _message2 = _interopRequireDefault(_message);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

// import "./message.scss";

var Message = function (_Block) {
	_inherits(Message, _Block);

	function Message(node) {
		var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};

		_classCallCheck(this, Message);

		return _possibleConstructorReturn(this, (Message.__proto__ || Object.getPrototypeOf(Message)).call(this, node, options));
	}

	_createClass(Message, [{
		key: "render",
		value: function render() {
			this.node.innerHTML = (0, _message2.default)(this.options);
		}
	}]);

	return Message;
}(_block2.default);

exports.default = Message;

/***/ }),
/* 11 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _block = __webpack_require__(0);

var _block2 = _interopRequireDefault(_block);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Textarea = function (_Block) {
    _inherits(Textarea, _Block);

    function Textarea(node) {
        var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};

        _classCallCheck(this, Textarea);

        return _possibleConstructorReturn(this, (Textarea.__proto__ || Object.getPrototypeOf(Textarea)).call(this, node, options));
    }

    _createClass(Textarea, [{
        key: "render",
        value: function render() {
            this.node.innerHTML = "\n        <textarea class=\"textarea\" rows=\"" + this.options.rows + "\" placeholder=\"" + this.options.placeholder + "\"></textarea>";
        }
    }, {
        key: "getValue",
        value: function getValue() {
            return this.node.querySelector("textarea").value;
        }
    }]);

    return Textarea;
}(_block2.default);

exports.default = Textarea;

/***/ }),
/* 12 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _router = __webpack_require__(5);

var _router2 = _interopRequireDefault(_router);

var _auth = __webpack_require__(6);

var _auth2 = _interopRequireDefault(_auth);

var _chat = __webpack_require__(7);

var _chat2 = _interopRequireDefault(_chat);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var router = new _router2.default();

window.addEventListener('DOMContentLoaded', function () {
    var authView = new _auth2.default(document.querySelector('.js-auth-view'));
    var chatView = new _chat2.default(document.querySelector('.js-chat-view'));

    router.register('auth', authView);
    router.register('chat', chatView);

    router.start();
});

/***/ }),
/* 13 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var KEY = "59c92ddf04067cfd77ad9ac4";
var URL = "https://js20170727quiz-9acd.restdb.io/rest/messages";

var Message = function () {
    function Message() {
        _classCallCheck(this, Message);
    }

    _createClass(Message, [{
        key: "fetch",
        value: function fetch(done) {
            var xhr = new XMLHttpRequest();

            xhr.open("GET", URL);

            xhr.addEventListener("readystatechange", function () {
                if (xhr.readyState === 4) {
                    try {
                        var data = JSON.parse(xhr.responseText);
                        done(data);
                    } catch (err) {
                        console.error(err);
                    }
                }
            });

            xhr.setRequestHeader("content-type", "application/json");
            xhr.setRequestHeader("x-apikey", KEY);
            xhr.setRequestHeader("cache-control", "no-cache");

            xhr.send();
        }
    }, {
        key: "addMessage",
        value: function addMessage(user, text, done) {
            var xhr = new XMLHttpRequest();

            xhr.open("POST", URL);

            xhr.addEventListener("readystatechange", function () {
                if (xhr.readyState === 4) {
                    try {
                        console.log("sent");
                    } catch (err) {
                        console.error(err);
                    }
                }
            });

            xhr.setRequestHeader("content-type", "application/json");
            xhr.setRequestHeader("x-apikey", KEY);
            xhr.setRequestHeader("cache-control", "no-cache");

            xhr.send(JSON.stringify({
                author: user,
                message: text
            }));
        }
    }, {
        key: "start",
        value: function start(done) {
            // setInterval(() => {
            this.fetch(done);
            // }, 3000);
        }
    }]);

    return Message;
}();

exports.default = Message;

/***/ }),
/* 14 */
/***/ (function(module, exports, __webpack_require__) {

var pug = __webpack_require__(1);

function template(locals) {var pug_html = "", pug_mixins = {}, pug_interp;pug_html = pug_html + "\u003Cdiv class=\"message-create\"\u003E\u003Cdiv class=\"message-create__textarea js-textarea\"\u003E\u003C\u002Fdiv\u003E\u003Cdiv class=\"message-create__submit js-submit\"\u003E\u003C\u002Fdiv\u003E\u003C\u002Fdiv\u003E";;return pug_html;};
module.exports = template;

/***/ }),
/* 15 */
/***/ (function(module, exports, __webpack_require__) {

var pug = __webpack_require__(1);

function template(locals) {var pug_html = "", pug_mixins = {}, pug_interp;;var locals_for_with = (locals || {});(function (isOwner, message, user) {pug_mixins["messageItemRecieve"] = pug_interp = function(){
var block = (this && this.block), attributes = (this && this.attributes) || {};
pug_html = pug_html + "\u003Cdiv class=\"message message_receive\"\u003E\u003Cdiv class=\"message__header\"\u003E" + (pug.escape(null == (pug_interp = user) ? "" : pug_interp)) + "\u003C\u002Fdiv\u003E\u003Cdiv class=\"message__body\"\u003E" + (pug.escape(null == (pug_interp = message) ? "" : pug_interp)) + "\u003C\u002Fdiv\u003E\u003C\u002Fdiv\u003E";
};
pug_mixins["messageItemSend"] = pug_interp = function(){
var block = (this && this.block), attributes = (this && this.attributes) || {};
pug_html = pug_html + "\u003Cdiv class=\"message message_send\"\u003E\u003Cdiv class=\"message__header\"\u003E" + (pug.escape(null == (pug_interp = user) ? "" : pug_interp)) + "\u003C\u002Fdiv\u003E\u003Cdiv class=\"message__body\"\u003E" + (pug.escape(null == (pug_interp = message) ? "" : pug_interp)) + "\u003C\u002Fdiv\u003E\u003C\u002Fdiv\u003E";
};
if (isOwner) {
pug_mixins["messageItemRecieve"]();
}
else {
pug_mixins["messageItemSend"]();
}}.call(this,"isOwner" in locals_for_with?locals_for_with.isOwner:typeof isOwner!=="undefined"?isOwner:undefined,"message" in locals_for_with?locals_for_with.message:typeof message!=="undefined"?message:undefined,"user" in locals_for_with?locals_for_with.user:typeof user!=="undefined"?user:undefined));;return pug_html;};
module.exports = template;

/***/ }),
/* 16 */
/***/ (function(module, exports, __webpack_require__) {

var pug = __webpack_require__(1);

function template(locals) {var pug_html = "", pug_mixins = {}, pug_interp;pug_html = pug_html + "\u003Cdiv class=\"auth\"\u003E\u003Cdiv class=\"auth__name js-name\"\u003E\u003C\u002Fdiv\u003E\u003Cdiv class=\"auth__submit js-submit\"\u003E\u003C\u002Fdiv\u003E\u003C\u002Fdiv\u003E";;return pug_html;};
module.exports = template;

/***/ }),
/* 17 */
/***/ (function(module, exports, __webpack_require__) {

var pug = __webpack_require__(1);

function template(locals) {var pug_html = "", pug_mixins = {}, pug_interp;pug_html = pug_html + "\u003Cdiv class=\"chat\"\u003E\u003Cdiv class=\"chat__container\"\u003E\u003Cdiv class=\"chat__inner js-list\"\u003E\u003C\u002Fdiv\u003E\u003Cdiv class=\"chat__footer js-form\"\u003E\u003C\u002Fdiv\u003E\u003C\u002Fdiv\u003E\u003C\u002Fdiv\u003E";;return pug_html;};
module.exports = template;

/***/ }),
/* 18 */
/***/ (function(module, exports) {

/* (ignored) */

/***/ })
/******/ ]);
//# sourceMappingURL=app.js.map