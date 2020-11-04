/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is not neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/*! namespace exports */
/*! exports [not provided] [no usage info] */
/*! runtime requirements: __webpack_require__, __webpack_require__.r, __webpack_exports__, __webpack_require__.* */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _styles_scss__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./styles.scss */ \"./src/styles.scss\");\n\n'use strict';\n\nvar calculator = document.getElementById('calculator');\nvar calcDisplayEl = document.getElementById('calc-display');\nvar calcDisplayValue = calcDisplayEl.value;\nvar currentCalcMode = calculator.dataset.calcMode;\nvar calcBtn = document.getElementById('calc-btn');\nvar clearBtn = document.getElementById('clear-btn');\nvar decimalBtn = document.getElementById('decimal-btn');\nvar percentageBtn = document.getElementById('percentage-btn');\nvar memory = [];\nvar debug = false; // If in debug mode, we output console logs and show debug info \n\nif (!debug) {\n  // Turn off all console logs conveniently\n  console.log = function () {}; // Turn off debug data displaying calc mode \n\n\n  calculator.classList.add('is-debug-mode');\n} // Make calculator draggable \n\n\n$('.calculator-wrap').draggable({\n  addClasses: true\n}); // Array of number button elements\n\nvar numbers = [document.getElementById('btn-1'), document.getElementById('btn-2'), document.getElementById('btn-3'), document.getElementById('btn-4'), document.getElementById('btn-5'), document.getElementById('btn-6'), document.getElementById('btn-7'), document.getElementById('btn-8'), document.getElementById('btn-9'), document.getElementById('btn-0')]; // Array of operator button elements\n\nvar operators = [document.getElementById('add-btn'), document.getElementById('subtract-btn'), document.getElementById('divide-btn'), document.getElementById('multiply-btn')];\nnumbers.forEach(function (element) {\n  // console.log(element);\n  element.addEventListener('click', function (event) {\n    event.preventDefault(); // Use 'data-calc-mode' attr on form to set mode\n    // Mode can be 'number' if number last pressed,\n    // or 'operator' if operator last pressed'.\n\n    currentCalcMode = calculator.dataset.calcMode; //////////////////////////////////////////////////////// \n    // CALC MODE: INITIAL\n    ////////////////////////////////////////////////////////\n\n    if (currentCalcMode === 'initial') {\n      // Calc is reset to initial. Update display with button value pressed\n      calcDisplayEl.value = this.value; // Place this value into memory\n\n      memory.push(calcDisplayEl.value);\n    } //////////////////////////////////////////////////////// \n    // CALC MODE: NUMBER\n    ////////////////////////////////////////////////////////\n\n\n    if (currentCalcMode === 'number') {\n      // append the last number pressed to the value\n      calcDisplayEl.value = calcDisplayEl.value + this.value; // We remove the last item (a number) from the array, and then update the array with the currect value\n\n      memory.pop(); // Update memory\n\n      memory.push(calcDisplayEl.value);\n    } //////////////////////////////////////////////////////// \n    // CALC MODE: OPERATOR\n    ////////////////////////////////////////////////////////\n\n\n    if (currentCalcMode === 'operator') {\n      calcDisplayEl.value = this.value;\n      memory.push(calcDisplayEl.value);\n      console.log(memory);\n    } // Since number has been presed, set data-calc-mode attr to 'number'\n    // Get updated value of calc-display\n\n\n    var currentDisplayEl = document.getElementById('calc-display'); // Set calc mode to number\n\n    calculator.dataset.calcMode = 'number'; // Update calc mode var\n\n    currentCalcMode = calculator.dataset.calcMode;\n    var currentDisplayVal = parseInt(currentDisplayEl.value); // Place current display value into memory\n    // memory.push(currentDisplayVal);\n\n    console.log(memory);\n  }, false);\n}); // Bind click event to each operator button\n\noperators.forEach(function (element) {\n  element.addEventListener('click', function (event) {\n    event.preventDefault(); // Gets value from buttons data-operator attr.\n\n    var buttonOperator = this.getAttribute('data-operator');\n    memory.push({\n      'operator': buttonOperator\n    }); // Set calc mode to operator\n\n    calculator.dataset.calcMode = 'operator';\n    console.log(memory);\n  });\n}); ////////////////////////////////////////////////////////\n// CLEAR BUTTON CLICK\n////////////////////////////////////////////////////////\n\nclearBtn.addEventListener('click', function (event) {\n  event.preventDefault(); // Reset some stuff\n\n  calcDisplayEl.value = \"0\";\n  memory = []; // Set calc mode to initial\n\n  calculator.dataset.calcMode = 'initial'; // console.log(memory);\n\n  console.clear();\n}, false); ////////////////////////////////////////////////////////\n// DECIMAL BUTTON CLICK\n////////////////////////////////////////////////////////\n\ndecimalBtn.addEventListener('click', function (event) {\n  event.preventDefault(); // If displayValue !== 0, append decimal point\n\n  if (calcDisplayEl.value !== '0') {\n    // append the last number pressed to the value\n    calcDisplayEl.value = calcDisplayEl.value + '.';\n  }\n}, false); ////////////////////////////////////////////////////////\n// PERCENTAGE BUTTON CLICK\n////////////////////////////////////////////////////////\n\npercentageBtn.addEventListener('click', function (event) {\n  event.preventDefault(); // If displayValue !== 0, append decimal point\n\n  if (calcDisplayEl.value !== '0') {\n    // append the last number pressed to the value\n    calcDisplayEl.value = parseInt(calcDisplayEl.value) / 100;\n  }\n\n  memory = [calcDisplayEl.value];\n  console.log(memory);\n}, false); ////////////////////////////////////////////////////////\n// CALC BUTTON CLICK\n////////////////////////////////////////////////////////\n\ncalcBtn.addEventListener('click', function (event) {\n  event.preventDefault();\n  console.log(memory); // Lets calculate a result.\n\n  var previousVal = memory[0];\n  var operator = memory[1];\n  var currentVal = memory[2]; // Operator returns a function name,\n  // either 'add', 'subtract', 'multiple' or 'divide'\n  // We us this funtion to calculate a result\n\n  var calcMethodToUse = operator.operator;\n  var result = '';\n\n  switch (calcMethodToUse) {\n    case 'add':\n      result = add(previousVal, currentVal);\n      break;\n\n    case 'subtract':\n      result = subtract(previousVal, currentVal);\n      break;\n\n    case 'multiply':\n      result = multiply(previousVal, currentVal);\n      break;\n\n    case 'divide':\n      result = divide(previousVal, currentVal);\n      break;\n  }\n\n  calcDisplayEl.value = result;\n  memory = [result];\n  console.log(memory);\n}, false); /////////////////////////////////////////////////////////\n// OPERATOR FUNCTIONS\n/////////////////////////////////////////////////////////\n// Addition\n\nvar add = function add(a, b) {\n  return +a + +b;\n}; // Subtraction\n\n\nvar subtract = function subtract(a, b) {\n  return a - b;\n}; // Multiply\n\n\nvar multiply = function multiply(a, b) {\n  return a * b;\n}; // Divide\n\n\nvar divide = function divide(a, b) {\n  return a / b;\n}; /////////////////////////////////////////////////////////\n// KEY BINDINGS\n/////////////////////////////////////////////////////////\n\n\nwindow.addEventListener(\"keyup\", checkKeyPressed, false);\n\nfunction checkKeyPressed(e) {\n  console.log('click'); // If displayfield is in focus, we can type numbers in directly instead of triggering a click\n\n  if (calcDisplayEl.is(':focus')) {\n    return;\n  } // Numbers 0-9\n\n\n  for (var i = 48; i < 58; i++) {\n    console.log(i);\n\n    if (e.keyCode == [i]) {\n      $('[data-btn-val=\"' + ([i] - 48) + '\"]').trigger('click');\n    }\n  } // Plus key\n\n\n  if (e.which == 107) {\n    $('[data-operator=\"add\"]').trigger('click');\n  } // Minus key\n\n\n  if (e.which == 109) {\n    $('[data-operator=\"subtract\"]').trigger('click');\n  } // Enter (or equals) key\n\n\n  if (e.which == 13 || e.keyCode == 187) {\n    $('[data-operator=\"equals\"]').trigger('click');\n  } // Clear key (cmd + c)\n\n\n  if (e.keyCode == 67) {\n    console.log('cmd + c');\n    $('[data-operator=\"clear\"]').trigger('click');\n  }\n}\n\n//# sourceURL=webpack://taskrunner-bundler-w19/./src/index.js?");

/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/styles.scss":
/*!******************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/styles.scss ***!
  \******************************************************************************************************/
/*! namespace exports */
/*! export default [provided] [no usage info] [missing usage info prevents renaming] */
/*! other exports [not provided] [no usage info] */
/*! runtime requirements: __webpack_require__, __webpack_require__.n, __webpack_exports__, __webpack_require__.r, module.id, __webpack_require__.d, __webpack_require__.*, module */
/***/ ((module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => __WEBPACK_DEFAULT_EXPORT__\n/* harmony export */ });\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ \"./node_modules/css-loader/dist/runtime/api.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__);\n// Imports\n\nvar ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default()(function(i){return i[1]});\n___CSS_LOADER_EXPORT___.push([module.id, \"@import url(https://fonts.googleapis.com/css?family=Source+Code+Pro);\"]);\n// Module\n___CSS_LOADER_EXPORT___.push([module.id, \"/* // MIXINS */\\n* {\\n  box-sizing: border-box;\\n}\\n\\nbody {\\n  background: linear-gradient(to bottom, #42F4D1 0%, #42F4D1 85%, #000 85%);\\n  background-size: cover;\\n  font-family: \\\"Source Code Pro\\\", monospace;\\n  padding: 16px;\\n}\\n\\na:link,\\na:visited {\\n  color: #000;\\n}\\n\\na:hover,\\na:active {\\n  text-decoration: none;\\n}\\n\\n.calculator-wrap {\\n  cursor: grab;\\n  width: 40vmax;\\n  min-width: 300px;\\n  margin: 20px auto;\\n}\\n\\n.calculator-inner {\\n  box-shadow: 6px 6px 0 #000;\\n  background-color: #42F4D1;\\n  border: 3px solid #000;\\n  border-top: none;\\n  display: block;\\n  padding: 20px;\\n  position: relative;\\n  z-index: 2;\\n}\\n.calculator-inner.ui-draggable-dragging, .calculator-inner:active {\\n  cursor: grabbing;\\n}\\n\\n.calc-title {\\n  background: #35c3a7;\\n  color: #000;\\n  margin: -20px -20px 0;\\n  padding: 20px;\\n  border: 2px solid #000;\\n  box-shadow: 6px 6px 0 #000;\\n  text-transform: uppercase;\\n  text-align: center;\\n  width: 100%;\\n  transform: skew(-8deg) translateX(1.7rem);\\n}\\n\\n#calc-display {\\n  box-shadow: 3px 3px 0 #000;\\n  border: 2px solid #000;\\n  background-color: transparent;\\n  font-family: \\\"Orbitron\\\", monospace;\\n  border-radius: 2px;\\n  display: block;\\n  margin-bottom: 10px;\\n  padding: 12px 12px;\\n  width: 100%;\\n}\\n\\n.buttons-wrap {\\n  display: flex;\\n}\\n\\n.buttons-operators {\\n  align-items: flex-start;\\n  display: flex;\\n  flex-wrap: wrap;\\n  justify-content: space-around;\\n}\\n\\n.button-numbers {\\n  width: 72%;\\n  margin-right: 3%;\\n  display: flex;\\n  flex-direction: row;\\n  flex-wrap: wrap;\\n  justify-content: space-between;\\n}\\n.button-numbers button {\\n  width: 30%;\\n}\\n.button-numbers button:nth-child(3n) {\\n  margin-right: 0;\\n}\\n\\n.buttons-operators {\\n  display: flex;\\n  width: 25%;\\n}\\n.buttons-operators button {\\n  background: #35c3a7;\\n  font-size: 1.25em;\\n  flex-basis: 100%;\\n}\\n\\n.buttons-methods {\\n  display: flex;\\n  flex-direction: row;\\n  align-items: stretch;\\n  flex-wrap: nowrap;\\n  justify-content: space-between;\\n}\\n.buttons-methods button {\\n  background: #35c3a7;\\n  font-size: 1.25em;\\n  width: 48.5%;\\n}\\n\\nbutton {\\n  box-shadow: 3px 3px 0 #000;\\n  appearance: none;\\n  background-color: transparent;\\n  border: 2px solid #000;\\n  font-weight: 900;\\n  font-family: \\\"Orbitron\\\", monospace;\\n  font-size: 16px;\\n  margin-bottom: 8px;\\n  outline: none;\\n  padding: 8px;\\n}\\nbutton:active {\\n  box-shadow: none;\\n  transform: translateX(3px) translateY(3px);\\n  outline: none;\\n}\\n\\n[id=calculator]:before {\\n  color: #000;\\n  content: \\\"DEBUG: Mode = \\\" attr(data-calc-mode);\\n  font-family: \\\"Source Code Pro\\\", monospace;\\n  font-size: 12px;\\n  text-transform: uppercase;\\n  position: absolute;\\n  bottom: 7px;\\n  left: 25px;\\n  display: block;\\n}\\n\\n.is-debug-mode:before {\\n  content: \\\"\\\";\\n}\\n\\n.colophon {\\n  color: #42F4D1;\\n  font-size: 13px;\\n  text-align: center;\\n  margin: 40px auto;\\n  position: relative;\\n  z-index: 1;\\n}\\n.colophon a {\\n  color: #42F4D1;\\n}\", \"\"]);\n// Exports\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);\n\n\n//# sourceURL=webpack://taskrunner-bundler-w19/./src/styles.scss?./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/*! unknown exports (runtime-defined) */
/*! runtime requirements: module */
/*! CommonJS bailout: module.exports is used directly at 9:0-14 */
/***/ ((module) => {

eval("\n\n/*\n  MIT License http://www.opensource.org/licenses/mit-license.php\n  Author Tobias Koppers @sokra\n*/\n// css base code, injected by the css-loader\n// eslint-disable-next-line func-names\nmodule.exports = function (cssWithMappingToString) {\n  var list = []; // return the list of modules as css string\n\n  list.toString = function toString() {\n    return this.map(function (item) {\n      var content = cssWithMappingToString(item);\n\n      if (item[2]) {\n        return \"@media \".concat(item[2], \" {\").concat(content, \"}\");\n      }\n\n      return content;\n    }).join('');\n  }; // import a list of modules into the list\n  // eslint-disable-next-line func-names\n\n\n  list.i = function (modules, mediaQuery, dedupe) {\n    if (typeof modules === 'string') {\n      // eslint-disable-next-line no-param-reassign\n      modules = [[null, modules, '']];\n    }\n\n    var alreadyImportedModules = {};\n\n    if (dedupe) {\n      for (var i = 0; i < this.length; i++) {\n        // eslint-disable-next-line prefer-destructuring\n        var id = this[i][0];\n\n        if (id != null) {\n          alreadyImportedModules[id] = true;\n        }\n      }\n    }\n\n    for (var _i = 0; _i < modules.length; _i++) {\n      var item = [].concat(modules[_i]);\n\n      if (dedupe && alreadyImportedModules[item[0]]) {\n        // eslint-disable-next-line no-continue\n        continue;\n      }\n\n      if (mediaQuery) {\n        if (!item[2]) {\n          item[2] = mediaQuery;\n        } else {\n          item[2] = \"\".concat(mediaQuery, \" and \").concat(item[2]);\n        }\n      }\n\n      list.push(item);\n    }\n  };\n\n  return list;\n};\n\n//# sourceURL=webpack://taskrunner-bundler-w19/./node_modules/css-loader/dist/runtime/api.js?");

/***/ }),

/***/ "./src/styles.scss":
/*!*************************!*\
  !*** ./src/styles.scss ***!
  \*************************/
/*! namespace exports */
/*! export default [provided] [no usage info] [missing usage info prevents renaming] */
/*! other exports [not provided] [no usage info] */
/*! runtime requirements: __webpack_require__, __webpack_require__.n, __webpack_exports__, __webpack_require__.r, __webpack_require__.d, __webpack_require__.* */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => __WEBPACK_DEFAULT_EXPORT__\n/* harmony export */ });\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ \"./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_styles_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !!../node_modules/css-loader/dist/cjs.js!../node_modules/sass-loader/dist/cjs.js!./styles.scss */ \"./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/styles.scss\");\n\n            \n\nvar options = {};\n\noptions.insert = \"head\";\noptions.singleton = false;\n\nvar update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_styles_scss__WEBPACK_IMPORTED_MODULE_1__.default, options);\n\n\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_styles_scss__WEBPACK_IMPORTED_MODULE_1__.default.locals || {});\n\n//# sourceURL=webpack://taskrunner-bundler-w19/./src/styles.scss?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/*! unknown exports (runtime-defined) */
/*! runtime requirements: module, __webpack_require__.nc, __webpack_require__.* */
/*! CommonJS bailout: module.exports is used directly at 230:0-14 */
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("\n\nvar isOldIE = function isOldIE() {\n  var memo;\n  return function memorize() {\n    if (typeof memo === 'undefined') {\n      // Test for IE <= 9 as proposed by Browserhacks\n      // @see http://browserhacks.com/#hack-e71d8692f65334173fee715c222cb805\n      // Tests for existence of standard globals is to allow style-loader\n      // to operate correctly into non-standard environments\n      // @see https://github.com/webpack-contrib/style-loader/issues/177\n      memo = Boolean(window && document && document.all && !window.atob);\n    }\n\n    return memo;\n  };\n}();\n\nvar getTarget = function getTarget() {\n  var memo = {};\n  return function memorize(target) {\n    if (typeof memo[target] === 'undefined') {\n      var styleTarget = document.querySelector(target); // Special case to return head of iframe instead of iframe itself\n\n      if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {\n        try {\n          // This will throw an exception if access to iframe is blocked\n          // due to cross-origin restrictions\n          styleTarget = styleTarget.contentDocument.head;\n        } catch (e) {\n          // istanbul ignore next\n          styleTarget = null;\n        }\n      }\n\n      memo[target] = styleTarget;\n    }\n\n    return memo[target];\n  };\n}();\n\nvar stylesInDom = [];\n\nfunction getIndexByIdentifier(identifier) {\n  var result = -1;\n\n  for (var i = 0; i < stylesInDom.length; i++) {\n    if (stylesInDom[i].identifier === identifier) {\n      result = i;\n      break;\n    }\n  }\n\n  return result;\n}\n\nfunction modulesToDom(list, options) {\n  var idCountMap = {};\n  var identifiers = [];\n\n  for (var i = 0; i < list.length; i++) {\n    var item = list[i];\n    var id = options.base ? item[0] + options.base : item[0];\n    var count = idCountMap[id] || 0;\n    var identifier = \"\".concat(id, \" \").concat(count);\n    idCountMap[id] = count + 1;\n    var index = getIndexByIdentifier(identifier);\n    var obj = {\n      css: item[1],\n      media: item[2],\n      sourceMap: item[3]\n    };\n\n    if (index !== -1) {\n      stylesInDom[index].references++;\n      stylesInDom[index].updater(obj);\n    } else {\n      stylesInDom.push({\n        identifier: identifier,\n        updater: addStyle(obj, options),\n        references: 1\n      });\n    }\n\n    identifiers.push(identifier);\n  }\n\n  return identifiers;\n}\n\nfunction insertStyleElement(options) {\n  var style = document.createElement('style');\n  var attributes = options.attributes || {};\n\n  if (typeof attributes.nonce === 'undefined') {\n    var nonce =  true ? __webpack_require__.nc : 0;\n\n    if (nonce) {\n      attributes.nonce = nonce;\n    }\n  }\n\n  Object.keys(attributes).forEach(function (key) {\n    style.setAttribute(key, attributes[key]);\n  });\n\n  if (typeof options.insert === 'function') {\n    options.insert(style);\n  } else {\n    var target = getTarget(options.insert || 'head');\n\n    if (!target) {\n      throw new Error(\"Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.\");\n    }\n\n    target.appendChild(style);\n  }\n\n  return style;\n}\n\nfunction removeStyleElement(style) {\n  // istanbul ignore if\n  if (style.parentNode === null) {\n    return false;\n  }\n\n  style.parentNode.removeChild(style);\n}\n/* istanbul ignore next  */\n\n\nvar replaceText = function replaceText() {\n  var textStore = [];\n  return function replace(index, replacement) {\n    textStore[index] = replacement;\n    return textStore.filter(Boolean).join('\\n');\n  };\n}();\n\nfunction applyToSingletonTag(style, index, remove, obj) {\n  var css = remove ? '' : obj.media ? \"@media \".concat(obj.media, \" {\").concat(obj.css, \"}\") : obj.css; // For old IE\n\n  /* istanbul ignore if  */\n\n  if (style.styleSheet) {\n    style.styleSheet.cssText = replaceText(index, css);\n  } else {\n    var cssNode = document.createTextNode(css);\n    var childNodes = style.childNodes;\n\n    if (childNodes[index]) {\n      style.removeChild(childNodes[index]);\n    }\n\n    if (childNodes.length) {\n      style.insertBefore(cssNode, childNodes[index]);\n    } else {\n      style.appendChild(cssNode);\n    }\n  }\n}\n\nfunction applyToTag(style, options, obj) {\n  var css = obj.css;\n  var media = obj.media;\n  var sourceMap = obj.sourceMap;\n\n  if (media) {\n    style.setAttribute('media', media);\n  } else {\n    style.removeAttribute('media');\n  }\n\n  if (sourceMap && typeof btoa !== 'undefined') {\n    css += \"\\n/*# sourceMappingURL=data:application/json;base64,\".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), \" */\");\n  } // For old IE\n\n  /* istanbul ignore if  */\n\n\n  if (style.styleSheet) {\n    style.styleSheet.cssText = css;\n  } else {\n    while (style.firstChild) {\n      style.removeChild(style.firstChild);\n    }\n\n    style.appendChild(document.createTextNode(css));\n  }\n}\n\nvar singleton = null;\nvar singletonCounter = 0;\n\nfunction addStyle(obj, options) {\n  var style;\n  var update;\n  var remove;\n\n  if (options.singleton) {\n    var styleIndex = singletonCounter++;\n    style = singleton || (singleton = insertStyleElement(options));\n    update = applyToSingletonTag.bind(null, style, styleIndex, false);\n    remove = applyToSingletonTag.bind(null, style, styleIndex, true);\n  } else {\n    style = insertStyleElement(options);\n    update = applyToTag.bind(null, style, options);\n\n    remove = function remove() {\n      removeStyleElement(style);\n    };\n  }\n\n  update(obj);\n  return function updateStyle(newObj) {\n    if (newObj) {\n      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap) {\n        return;\n      }\n\n      update(obj = newObj);\n    } else {\n      remove();\n    }\n  };\n}\n\nmodule.exports = function (list, options) {\n  options = options || {}; // Force single-tag solution on IE6-9, which has a hard limit on the # of <style>\n  // tags it will allow on a page\n\n  if (!options.singleton && typeof options.singleton !== 'boolean') {\n    options.singleton = isOldIE();\n  }\n\n  list = list || [];\n  var lastIdentifiers = modulesToDom(list, options);\n  return function update(newList) {\n    newList = newList || [];\n\n    if (Object.prototype.toString.call(newList) !== '[object Array]') {\n      return;\n    }\n\n    for (var i = 0; i < lastIdentifiers.length; i++) {\n      var identifier = lastIdentifiers[i];\n      var index = getIndexByIdentifier(identifier);\n      stylesInDom[index].references--;\n    }\n\n    var newLastIdentifiers = modulesToDom(newList, options);\n\n    for (var _i = 0; _i < lastIdentifiers.length; _i++) {\n      var _identifier = lastIdentifiers[_i];\n\n      var _index = getIndexByIdentifier(_identifier);\n\n      if (stylesInDom[_index].references === 0) {\n        stylesInDom[_index].updater();\n\n        stylesInDom.splice(_index, 1);\n      }\n    }\n\n    lastIdentifiers = newLastIdentifiers;\n  };\n};\n\n//# sourceURL=webpack://taskrunner-bundler-w19/./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		if(__webpack_module_cache__[moduleId]) {
/******/ 			return __webpack_module_cache__[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			id: moduleId,
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => module['default'] :
/******/ 				() => module;
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => Object.prototype.hasOwnProperty.call(obj, prop)
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	// startup
/******/ 	// Load entry module
/******/ 	__webpack_require__("./src/index.js");
/******/ 	// This entry module used 'exports' so it can't be inlined
/******/ })()
;