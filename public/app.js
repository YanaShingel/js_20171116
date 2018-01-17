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
/******/ 	return __webpack_require__(__webpack_require__.s = 5);
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

        return _possibleConstructorReturn(this, (Button.__proto__ || Object.getPrototypeOf(Button)).call(this, node, options));
    }

    _createClass(Button, [{
        key: 'render',
        value: function render() {
            this.node.innerHTML = '\n        <button class="button">\n            ' + this.options.text + '\n        </button>';
        }
    }]);

    return Button;
}(_block2.default);

exports.default = Button;

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
    }]);

    return Input;
}(_block2.default);

exports.default = Input;

/***/ }),
/* 3 */
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
        key: 'render',
        value: function render() {
            this.node.innerHTML = '\n        <textarea class="textarea" rows="' + this.options.rows + '" placeholder="' + this.options.placeholder + '"></textarea>';
        }
    }]);

    return Textarea;
}(_block2.default);

exports.default = Textarea;

/***/ }),
/* 4 */
/***/ (function(module, exports, __webpack_require__) {

var pug = __webpack_require__(6);

function template(locals) {var pug_html = "", pug_mixins = {}, pug_interp;;var locals_for_with = (locals || {});(function (name, nums) {pug_html = pug_html + "\u003Cul\u003E";
// iterate nums
;(function(){
  var $$obj = nums;
  if ('number' == typeof $$obj.length) {
      for (var pug_index0 = 0, $$l = $$obj.length; pug_index0 < $$l; pug_index0++) {
        var num = $$obj[pug_index0];
pug_html = pug_html + "\u003Cspan\u003E" + (pug.escape(null == (pug_interp = num) ? "" : pug_interp)) + "\u003C\u002Fspan\u003E";
      }
  } else {
    var $$l = 0;
    for (var pug_index0 in $$obj) {
      $$l++;
      var num = $$obj[pug_index0];
pug_html = pug_html + "\u003Cspan\u003E" + (pug.escape(null == (pug_interp = num) ? "" : pug_interp)) + "\u003C\u002Fspan\u003E";
    }
  }
}).call(this);

pug_html = pug_html + "\u003C\u002Ful\u003E\u003Cdiv class=\"chat\"\u003E\u003Cdiv class=\"chat_container\"\u003E\u003Cdiv class=\"chat__inner\" href=\"fadsfads\"\u003E" + (pug.escape(null == (pug_interp = name) ? "" : pug_interp)) + "\u003C\u002Fdiv\u003E\u003C\u002Fdiv\u003E\u003C\u002Fdiv\u003E";}.call(this,"name" in locals_for_with?locals_for_with.name:typeof name!=="undefined"?name:undefined,"nums" in locals_for_with?locals_for_with.nums:typeof nums!=="undefined"?nums:undefined));;return pug_html;};
module.exports = template;

/***/ }),
/* 5 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _button = __webpack_require__(1);

var _button2 = _interopRequireDefault(_button);

var _block = __webpack_require__(0);

var _block2 = _interopRequireDefault(_block);

var _textarea = __webpack_require__(3);

var _textarea2 = _interopRequireDefault(_textarea);

var _input = __webpack_require__(2);

var _input2 = _interopRequireDefault(_input);

var _app = __webpack_require__(4);

var _app2 = _interopRequireDefault(_app);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var App = function (_Block) {
    _inherits(App, _Block);

    function App(node) {
        var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};

        _classCallCheck(this, App);

        return _possibleConstructorReturn(this, (App.__proto__ || Object.getPrototypeOf(App)).call(this, node, options));
    }

    _createClass(App, [{
        key: 'render',
        value: function render() {
            this.node.innerHTML = (0, _app2.default)({
                name: 'Чатик',
                nums: [1, 2, 3, 4]
            });

            var button = new _button2.default(this.node.querySelector('.js-submit-name'), {
                text: 'Войти'
            });

            var input = new _input2.default(this.node.querySelector('.js-name'), {
                value: '',
                placeholder: 'Введите имя'
            });

            var buttonMessage = new _button2.default(this.node.querySelector('.js-submit'), {
                text: 'Отправить'
            });

            var textareaMessage = new _textarea2.default(this.node.querySelector('.js-textarea'), {
                placeholder: 'Введите сообщение',
                rows: 5
            });

            button.render();
            input.render();
            textareaMessage.render();
            buttonMessage.render();
        }
    }]);

    return App;
}(_block2.default);

window.addEventListener('DOMContentLoaded', function () {
    var app = new App(document.querySelector('.js-app'));
    app.render();
});

/***/ }),
/* 6 */
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
    str = str || __webpack_require__(7).readFileSync(filename, 'utf8')
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
/* 7 */
/***/ (function(module, exports) {

/* (ignored) */

/***/ })
/******/ ]);
//# sourceMappingURL=app.js.map