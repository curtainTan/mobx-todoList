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
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
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
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/bundle.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/bundle.js":
/*!***********************!*\
  !*** ./src/bundle.js ***!
  \***********************/
/*! no static exports found */
/***/ (function(module, exports) {

var _class, _class2, _descriptor;

function _initializerDefineProperty(target, property, descriptor, context) { if (!descriptor) return; Object.defineProperty(target, property, { enumerable: descriptor.enumerable, configurable: descriptor.configurable, writable: descriptor.writable, value: descriptor.initializer ? descriptor.initializer.call(context) : void 0 }); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _applyDecoratedDescriptor(target, property, decorators, descriptor, context) { var desc = {}; Object.keys(descriptor).forEach(function (key) { desc[key] = descriptor[key]; }); desc.enumerable = !!desc.enumerable; desc.configurable = !!desc.configurable; if ('value' in desc || desc.initializer) { desc.writable = true; } desc = decorators.slice().reverse().reduce(function (desc, decorator) { return decorator(target, property, desc) || desc; }, desc); if (context && desc.initializer !== void 0) { desc.value = desc.initializer ? desc.initializer.call(context) : void 0; desc.initializer = undefined; } if (desc.initializer === void 0) { Object.defineProperty(target, property, desc); desc = null; } return desc; }

function _initializerWarningHelper(descriptor, context) { throw new Error('Decorating class property failed. Please ensure that ' + 'proposal-class-properties is enabled and runs after the decorators transform.'); }

// "use strict"
// 定义类修饰器
function log(target) {
  var desc = Object.getOwnPropertyDescriptors(target.prototype);

  var _loop = function _loop() {
    var key = _Object$keys[_i];

    if (key === "constuctor") {
      return "continue";
    }

    var func = desc[key].value;

    if (typeof func === "function") {
      Object.defineProperty(target.prototype, key, {
        value: function value() {
          console.log("加之前", key);

          for (var _len = arguments.length, arg = new Array(_len), _key = 0; _key < _len; _key++) {
            arg[_key] = arguments[_key];
          }

          var ret = func.apply(this, arg);
          console.log("相加----结果：", ret);
          console.log("加之后", key);
          return ret;
        }
      });
    }
  };

  for (var _i = 0, _Object$keys = Object.keys(desc); _i < _Object$keys.length; _i++) {
    var _ret = _loop();

    if (_ret === "continue") continue;
  }
}

function readonly(target, key, desc) {
  desc.writable = false;
} // 方法修饰器


function validate(target, key, desc) {
  var func = desc.value;

  desc.value = function () {
    for (var _len2 = arguments.length, arg = new Array(_len2), _key2 = 0; _key2 < _len2; _key2++) {
      arg[_key2] = arguments[_key2];
    }

    for (var _i2 = 0, _arg = arg; _i2 < _arg.length; _i2++) {
      var num = _arg[_i2];

      if (typeof num !== "number") {
        throw new Error("\"".concat(num, " \" \u4E0D\u662F\u4E00\u4E2A\u6570\u5B57.."));
      }
    }

    console.log("函数里面的装饰器-----函数的操作---");
    return func.apply(this, [4, 7]);
  };
}

var Numberic = log(_class = (_class2 =
/*#__PURE__*/
function () {
  function Numberic() {
    _classCallCheck(this, Numberic);

    _initializerDefineProperty(this, "PI", _descriptor, this);
  }

  _createClass(Numberic, [{
    key: "add",
    // 修饰方法
    value: function add() {
      for (var _len3 = arguments.length, nums = new Array(_len3), _key3 = 0; _key3 < _len3; _key3++) {
        nums[_key3] = arguments[_key3];
      }

      return nums.reduce(function (p, n) {
        return p + n;
      }, 0);
    }
  }]);

  return Numberic;
}(), (_descriptor = _applyDecoratedDescriptor(_class2.prototype, "PI", [readonly], {
  configurable: true,
  enumerable: true,
  writable: true,
  initializer: function initializer() {
    return 3.1315926;
  }
})), _class2)) || _class; // 测试


var ss = new Numberic();
console.log("修改数据前：", ss);
ss.PI = 99;
console.log("修改数据后：", ss);

/***/ })

/******/ });
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vc3JjL2J1bmRsZS5qcyJdLCJuYW1lcyI6WyJsb2ciLCJ0YXJnZXQiLCJkZXNjIiwiT2JqZWN0IiwiZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9ycyIsInByb3RvdHlwZSIsImtleSIsImZ1bmMiLCJ2YWx1ZSIsImRlZmluZVByb3BlcnR5IiwiY29uc29sZSIsImFyZyIsInJldCIsImFwcGx5Iiwia2V5cyIsInJlYWRvbmx5Iiwid3JpdGFibGUiLCJ2YWxpZGF0ZSIsIm51bSIsIkVycm9yIiwiTnVtYmVyaWMiLCJudW1zIiwicmVkdWNlIiwicCIsIm4iLCJzcyIsIlBJIl0sIm1hcHBpbmdzIjoiO1FBQUE7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7OztRQUdBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQSwwQ0FBMEMsZ0NBQWdDO1FBQzFFO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0Esd0RBQXdELGtCQUFrQjtRQUMxRTtRQUNBLGlEQUFpRCxjQUFjO1FBQy9EOztRQUVBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQSx5Q0FBeUMsaUNBQWlDO1FBQzFFLGdIQUFnSCxtQkFBbUIsRUFBRTtRQUNySTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBLDJCQUEyQiwwQkFBMEIsRUFBRTtRQUN2RCxpQ0FBaUMsZUFBZTtRQUNoRDtRQUNBO1FBQ0E7O1FBRUE7UUFDQSxzREFBc0QsK0RBQStEOztRQUVySDtRQUNBOzs7UUFHQTtRQUNBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ2xGQTtBQUNBO0FBQ0EsU0FBU0EsR0FBVCxDQUFjQyxNQUFkLEVBQXNCO0FBQ2xCLE1BQU1DLElBQUksR0FBR0MsTUFBTSxDQUFDQyx5QkFBUCxDQUFrQ0gsTUFBTSxDQUFDSSxTQUF6QyxDQUFiOztBQURrQjtBQUViLFFBQU1DLEdBQUcsbUJBQVQ7O0FBQ0QsUUFBSUEsR0FBRyxLQUFLLFlBQVosRUFBMEI7QUFDdEI7QUFDSDs7QUFDRCxRQUFNQyxJQUFJLEdBQUdMLElBQUksQ0FBQ0ksR0FBRCxDQUFKLENBQVVFLEtBQXZCOztBQUNBLFFBQUksT0FBT0QsSUFBUCxLQUFnQixVQUFwQixFQUFnQztBQUM1QkosWUFBTSxDQUFDTSxjQUFQLENBQXVCUixNQUFNLENBQUNJLFNBQTlCLEVBQXlDQyxHQUF6QyxFQUE4QztBQUMxQ0UsYUFEMEMsbUJBQzNCO0FBQ1hFLGlCQUFPLENBQUNWLEdBQVIsQ0FBYSxLQUFiLEVBQW9CTSxHQUFwQjs7QUFEVyw0Q0FBTEssR0FBSztBQUFMQSxlQUFLO0FBQUE7O0FBRVgsY0FBTUMsR0FBRyxHQUFHTCxJQUFJLENBQUNNLEtBQUwsQ0FBWSxJQUFaLEVBQWtCRixHQUFsQixDQUFaO0FBQ0FELGlCQUFPLENBQUNWLEdBQVIsQ0FBYSxXQUFiLEVBQTBCWSxHQUExQjtBQUNBRixpQkFBTyxDQUFDVixHQUFSLENBQWEsS0FBYixFQUFvQk0sR0FBcEI7QUFDQSxpQkFBT00sR0FBUDtBQUNIO0FBUHlDLE9BQTlDO0FBU0g7QUFqQmE7O0FBRWxCLGtDQUFrQlQsTUFBTSxDQUFDVyxJQUFQLENBQWFaLElBQWIsQ0FBbEIsa0NBQXVDO0FBQUE7O0FBQUEsNkJBRS9CO0FBY1A7QUFDSjs7QUFFRCxTQUFTYSxRQUFULENBQW1CZCxNQUFuQixFQUEyQkssR0FBM0IsRUFBZ0NKLElBQWhDLEVBQXNDO0FBQ2xDQSxNQUFJLENBQUNjLFFBQUwsR0FBZ0IsS0FBaEI7QUFDSCxDLENBQ0Q7OztBQUNBLFNBQVNDLFFBQVQsQ0FBbUJoQixNQUFuQixFQUEyQkssR0FBM0IsRUFBZ0NKLElBQWhDLEVBQXNDO0FBQ2xDLE1BQU1LLElBQUksR0FBR0wsSUFBSSxDQUFDTSxLQUFsQjs7QUFDQU4sTUFBSSxDQUFDTSxLQUFMLEdBQWEsWUFBa0I7QUFBQSx1Q0FBTEcsR0FBSztBQUFMQSxTQUFLO0FBQUE7O0FBQzNCLDZCQUFnQkEsR0FBaEIsNEJBQXFCO0FBQWhCLFVBQUlPLEdBQUcsWUFBUDs7QUFDRCxVQUFJLE9BQU9BLEdBQVAsS0FBZSxRQUFuQixFQUE2QjtBQUN6QixjQUFNLElBQUlDLEtBQUosYUFBZUQsR0FBZixnREFBTjtBQUNIO0FBQ0o7O0FBQ0RSLFdBQU8sQ0FBQ1YsR0FBUixDQUFhLHVCQUFiO0FBQ0EsV0FBT08sSUFBSSxDQUFDTSxLQUFMLENBQVksSUFBWixFQUFrQixDQUFFLENBQUYsRUFBSyxDQUFMLENBQWxCLENBQVA7QUFDSCxHQVJEO0FBU0g7O0lBR0tPLFEsR0FETHBCLEc7Ozs7Ozs7Ozs7O0FBR0c7MEJBQ2M7QUFBQSx5Q0FBTnFCLElBQU07QUFBTkEsWUFBTTtBQUFBOztBQUNWLGFBQU9BLElBQUksQ0FBQ0MsTUFBTCxDQUFhLFVBQUVDLENBQUYsRUFBS0MsQ0FBTDtBQUFBLGVBQWNELENBQUMsR0FBR0MsQ0FBbEI7QUFBQSxPQUFiLEVBQW9DLENBQXBDLENBQVA7QUFDSDs7Ozt3RUFKQVQsUTs7Ozs7V0FBYyxTOzswQkFNbkI7OztBQUNBLElBQUlVLEVBQUUsR0FBSSxJQUFJTCxRQUFKLEVBQVY7QUFDQVYsT0FBTyxDQUFDVixHQUFSLENBQWEsUUFBYixFQUF1QnlCLEVBQXZCO0FBQ0FBLEVBQUUsQ0FBQ0MsRUFBSCxHQUFRLEVBQVI7QUFDQWhCLE9BQU8sQ0FBQ1YsR0FBUixDQUFhLFFBQWIsRUFBdUJ5QixFQUF2QixFIiwiZmlsZSI6Im1haW4uanMiLCJzb3VyY2VzQ29udGVudCI6WyIgXHQvLyBUaGUgbW9kdWxlIGNhY2hlXG4gXHR2YXIgaW5zdGFsbGVkTW9kdWxlcyA9IHt9O1xuXG4gXHQvLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuIFx0ZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXG4gXHRcdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuIFx0XHRpZihpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSkge1xuIFx0XHRcdHJldHVybiBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXS5leHBvcnRzO1xuIFx0XHR9XG4gXHRcdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG4gXHRcdHZhciBtb2R1bGUgPSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSA9IHtcbiBcdFx0XHRpOiBtb2R1bGVJZCxcbiBcdFx0XHRsOiBmYWxzZSxcbiBcdFx0XHRleHBvcnRzOiB7fVxuIFx0XHR9O1xuXG4gXHRcdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuIFx0XHRtb2R1bGVzW21vZHVsZUlkXS5jYWxsKG1vZHVsZS5leHBvcnRzLCBtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuIFx0XHQvLyBGbGFnIHRoZSBtb2R1bGUgYXMgbG9hZGVkXG4gXHRcdG1vZHVsZS5sID0gdHJ1ZTtcblxuIFx0XHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuIFx0XHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG4gXHR9XG5cblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubSA9IG1vZHVsZXM7XG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlIGNhY2hlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmMgPSBpbnN0YWxsZWRNb2R1bGVzO1xuXG4gXHQvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9uIGZvciBoYXJtb255IGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uZCA9IGZ1bmN0aW9uKGV4cG9ydHMsIG5hbWUsIGdldHRlcikge1xuIFx0XHRpZighX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIG5hbWUpKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIG5hbWUsIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBnZXR0ZXIgfSk7XG4gXHRcdH1cbiBcdH07XG5cbiBcdC8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uciA9IGZ1bmN0aW9uKGV4cG9ydHMpIHtcbiBcdFx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG4gXHRcdH1cbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbiBcdH07XG5cbiBcdC8vIGNyZWF0ZSBhIGZha2UgbmFtZXNwYWNlIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDE6IHZhbHVlIGlzIGEgbW9kdWxlIGlkLCByZXF1aXJlIGl0XG4gXHQvLyBtb2RlICYgMjogbWVyZ2UgYWxsIHByb3BlcnRpZXMgb2YgdmFsdWUgaW50byB0aGUgbnNcbiBcdC8vIG1vZGUgJiA0OiByZXR1cm4gdmFsdWUgd2hlbiBhbHJlYWR5IG5zIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDh8MTogYmVoYXZlIGxpa2UgcmVxdWlyZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy50ID0gZnVuY3Rpb24odmFsdWUsIG1vZGUpIHtcbiBcdFx0aWYobW9kZSAmIDEpIHZhbHVlID0gX193ZWJwYWNrX3JlcXVpcmVfXyh2YWx1ZSk7XG4gXHRcdGlmKG1vZGUgJiA4KSByZXR1cm4gdmFsdWU7XG4gXHRcdGlmKChtb2RlICYgNCkgJiYgdHlwZW9mIHZhbHVlID09PSAnb2JqZWN0JyAmJiB2YWx1ZSAmJiB2YWx1ZS5fX2VzTW9kdWxlKSByZXR1cm4gdmFsdWU7XG4gXHRcdHZhciBucyA9IE9iamVjdC5jcmVhdGUobnVsbCk7XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18ucihucyk7XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShucywgJ2RlZmF1bHQnLCB7IGVudW1lcmFibGU6IHRydWUsIHZhbHVlOiB2YWx1ZSB9KTtcbiBcdFx0aWYobW9kZSAmIDIgJiYgdHlwZW9mIHZhbHVlICE9ICdzdHJpbmcnKSBmb3IodmFyIGtleSBpbiB2YWx1ZSkgX193ZWJwYWNrX3JlcXVpcmVfXy5kKG5zLCBrZXksIGZ1bmN0aW9uKGtleSkgeyByZXR1cm4gdmFsdWVba2V5XTsgfS5iaW5kKG51bGwsIGtleSkpO1xuIFx0XHRyZXR1cm4gbnM7XG4gXHR9O1xuXG4gXHQvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5uID0gZnVuY3Rpb24obW9kdWxlKSB7XG4gXHRcdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuIFx0XHRcdGZ1bmN0aW9uIGdldERlZmF1bHQoKSB7IHJldHVybiBtb2R1bGVbJ2RlZmF1bHQnXTsgfSA6XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0TW9kdWxlRXhwb3J0cygpIHsgcmV0dXJuIG1vZHVsZTsgfTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgJ2EnLCBnZXR0ZXIpO1xuIFx0XHRyZXR1cm4gZ2V0dGVyO1xuIFx0fTtcblxuIFx0Ly8gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSBmdW5jdGlvbihvYmplY3QsIHByb3BlcnR5KSB7IHJldHVybiBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqZWN0LCBwcm9wZXJ0eSk7IH07XG5cbiBcdC8vIF9fd2VicGFja19wdWJsaWNfcGF0aF9fXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBcIlwiO1xuXG5cbiBcdC8vIExvYWQgZW50cnkgbW9kdWxlIGFuZCByZXR1cm4gZXhwb3J0c1xuIFx0cmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18oX193ZWJwYWNrX3JlcXVpcmVfXy5zID0gXCIuL3NyYy9idW5kbGUuanNcIik7XG4iLCIvLyBcInVzZSBzdHJpY3RcIlxyXG4vLyDlrprkuYnnsbvkv67ppbDlmahcclxuZnVuY3Rpb24gbG9nKCB0YXJnZXQgKXtcclxuICAgIGNvbnN0IGRlc2MgPSBPYmplY3QuZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9ycyggdGFyZ2V0LnByb3RvdHlwZSApXHJcbiAgICBmb3IoIGNvbnN0IGtleSBvZiBPYmplY3Qua2V5cyggZGVzYyApICl7XHJcbiAgICAgICAgaWYoIGtleSA9PT0gXCJjb25zdHVjdG9yXCIgKXtcclxuICAgICAgICAgICAgY29udGludWVcclxuICAgICAgICB9XHJcbiAgICAgICAgY29uc3QgZnVuYyA9IGRlc2Nba2V5XS52YWx1ZVxyXG4gICAgICAgIGlmKCB0eXBlb2YgZnVuYyA9PT0gXCJmdW5jdGlvblwiICl7XHJcbiAgICAgICAgICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0eSggdGFyZ2V0LnByb3RvdHlwZSwga2V5LCB7XHJcbiAgICAgICAgICAgICAgICB2YWx1ZSggLi4uYXJnICl7XHJcbiAgICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2coIFwi5Yqg5LmL5YmNXCIsIGtleSApXHJcbiAgICAgICAgICAgICAgICAgICAgY29uc3QgcmV0ID0gZnVuYy5hcHBseSggdGhpcywgYXJnIClcclxuICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyggXCLnm7jliqAtLS0t57uT5p6c77yaXCIsIHJldCApXHJcbiAgICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2coIFwi5Yqg5LmL5ZCOXCIsIGtleSApXHJcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHJldFxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9KVxyXG4gICAgICAgIH1cclxuICAgIH1cclxufVxyXG5cclxuZnVuY3Rpb24gcmVhZG9ubHkoIHRhcmdldCwga2V5LCBkZXNjICl7XHJcbiAgICBkZXNjLndyaXRhYmxlID0gZmFsc2VcclxufVxyXG4vLyDmlrnms5Xkv67ppbDlmahcclxuZnVuY3Rpb24gdmFsaWRhdGUoIHRhcmdldCwga2V5LCBkZXNjICl7XHJcbiAgICBjb25zdCBmdW5jID0gZGVzYy52YWx1ZVxyXG4gICAgZGVzYy52YWx1ZSA9IGZ1bmN0aW9uKCAuLi5hcmcgKXtcclxuICAgICAgICBmb3IoIGxldCBudW0gb2YgYXJnICl7XHJcbiAgICAgICAgICAgIGlmKCB0eXBlb2YgbnVtICE9PSBcIm51bWJlclwiICl7XHJcbiAgICAgICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoYFwiJHsgbnVtIH0gXCIg5LiN5piv5LiA5Liq5pWw5a2XLi5gKVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGNvbnNvbGUubG9nKCBcIuWHveaVsOmHjOmdoueahOijhemlsOWZqC0tLS0t5Ye95pWw55qE5pON5L2cLS0tXCIgKVxyXG4gICAgICAgIHJldHVybiBmdW5jLmFwcGx5KCB0aGlzLCBbIDQsIDcgXSApXHJcbiAgICB9XHJcbn1cclxuXHJcbkBsb2dcclxuY2xhc3MgTnVtYmVyaWMge1xyXG4gICAgQHJlYWRvbmx5IFBJID0gMy4xMzE1OTI2XHJcbiAgICAvLyDkv67ppbDmlrnms5VcclxuICAgIGFkZCggLi4ubnVtcyApe1xyXG4gICAgICAgIHJldHVybiBudW1zLnJlZHVjZSggKCBwLCBuICkgPT4gKCBwICsgbiApLCAwIClcclxuICAgIH1cclxufVxyXG4vLyDmtYvor5VcclxudmFyIHNzID0gIG5ldyBOdW1iZXJpYygpXHJcbmNvbnNvbGUubG9nKCBcIuS/ruaUueaVsOaNruWJje+8mlwiLCBzcyApXHJcbnNzLlBJID0gOTlcclxuY29uc29sZS5sb2coIFwi5L+u5pS55pWw5o2u5ZCO77yaXCIsIHNzIClcclxuIl0sInNvdXJjZVJvb3QiOiIifQ==