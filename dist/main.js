/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/css-loader/dist/cjs.js!./node_modules/postcss-loader/dist/cjs.js!./src/style.css":
/*!*******************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./node_modules/postcss-loader/dist/cjs.js!./src/style.css ***!
  \*******************************************************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
// Module
___CSS_LOADER_EXPORT___.push([module.id, "\n:root {\n  --font-sans: system-ui,-apple-system,Segoe UI,Roboto,Ubuntu,Cantarell,Noto Sans,sans-serif;\n  --size-4: 1.25rem;\n  --gray-2: #e9ecef;\n  --size-7: 2rem;\n  --gray-5: #adb5bd;\n  --radius-2: 5px;\n  --gray-0: #f8f9fa;\n  --font-size-5: 2rem;\n  --border-size-1: 1px;\n  --gray-6: #868e96;\n  --gray-8: #343a40;\n  --size-2: .5rem;\n  --size-1: .25rem;\n  --size-3: 1rem;\n  --radius-3: 1rem;\n  --gray-3: #dee2e6;\n  --green-1: #d3f9d8;\n  --green-2: #b2f2bb;\n  --red-1: #ffe3e3;\n  --red-2: #ffc9c9;\n  --border-size-2: 2px;\n  --gray-7: #495057;\n  --gradient-23: linear-gradient(to bottom right,#536976,#292E49);\n  --radius-4: 2rem;\n  --font-letterspacing-2: .050em;\n  --size-5: 1.5rem;\n  --radius-1: 2px;\n}\n\n/* Box sizing rules */\n*,\n*::before,\n*::after {\n  box-sizing: border-box;\n}\n\n/* Remove default margin */\nbody,\nh1,\nh2,\nh3,\nh4,\np,\nfigure,\nblockquote,\ndl,\ndd {\n  margin: 0;\n}\n\n/* Remove list styles on ul, ol elements with a list role, which suggests default styling will be removed */\nul[role=\"list\"],\nol[role=\"list\"] {\n  list-style: none;\n}\n\n/* Set core root defaults */\nhtml:focus-within {\n  scroll-behavior: smooth;\n}\n\n/* Set core body defaults */\nbody {\n  min-height: 100vh;\n  text-rendering: optimizeSpeed;\n  line-height: 1.5;\n}\n\n/* A elements that don't have a class get default styles */\na:not([class]) {\n  -webkit-text-decoration-skip: ink;\n          text-decoration-skip-ink: auto;\n}\n\n/* Make images easier to work with */\nimg,\npicture {\n  max-width: 100%;\n  display: block;\n}\n\n/* Inherit fonts for inputs and buttons */\ninput,\nbutton,\ntextarea,\nselect {\n  font: inherit;\n}\n\n/* Remove all animations, transitions and smooth scroll for people that prefer not to see them */\n@media (prefers-reduced-motion: reduce) {\n  html:focus-within {\n    scroll-behavior: auto;\n  }\n\n  *,\n  *::before,\n  *::after {\n    -webkit-animation-duration: 0.01ms !important;\n            animation-duration: 0.01ms !important;\n    -webkit-animation-iteration-count: 1 !important;\n            animation-iteration-count: 1 !important;\n    transition-duration: 0.01ms !important;\n    scroll-behavior: auto !important;\n  }\n}\n\nbody {\n  font-family: var(--font-sans);\n  padding-inline: var(--size-4);\n  background-color: var(--gray-2);\n  /* background-image: var(--gradient-23); */\n}\n\n.container {\n  max-width: 42rem;\n  padding-inline: var(--size-7);\n  margin-inline: auto;\n  margin-block: var(--size-7);\n  border: 1px solid var(--gray-5);\n  border-radius: var(--radius-2);\n  background-color: var(--gray-0);\n  /* background-image: var(--gradient-15); */\n}\n\n.logo {\n  font-size: var(--font-size-5);\n  margin-block: var(--size-7);\n  border-bottom: var(--border-size-1) dashed var(--gray-6);\n}\n\nh1,\nh2,\nh3 {\n  color: var(--gray-8);\n}\n\n/* **************** */\n/* Projects Section */\n.projects {\n  margin-bottom: var(--size-2);\n}\n\n.projects-heading {\n  /* font-size: var(--font-size-4); */\n  /* display: flex;\n  align-items: center;\n  gap: var(--size-2); */\n  margin-bottom: var(--size-2);\n}\n\n.btn {\n  border: var(--border-size-1) solid var(--gray-5);\n  padding: var(--size-1) var(--size-3);\n  border-radius: var(--radius-3);\n  cursor: pointer;\n}\n\n.btn:hover {\n  background-color: var(--gray-2);\n}\n\n.btn:active {\n  background-color: var(--gray-3);\n}\n\n.add {\n  background-color: var(--green-1);\n}\n\n.add:hover {\n  background-color: var(--green-2);\n}\n\n.cancel {\n  background-color: var(--red-1);\n}\n\n.cancel:hover {\n  background-color: var(--red-2);\n}\n\n#project-name {\n  border: var(--border-size-2) solid var(--gray-7);\n  padding-inline: var(--size-2);\n  border-radius: var(--radius-3);\n}\n\n#project-name:focus-visible {\n  outline: var(--border-size-2) solid var(--gray-7);\n}\n\n.projects-list {\n  display: flex;\n  flex-wrap: wrap;\n  gap: var(--size-2);\n}\n\n.projects-list > a {\n  text-decoration: none;\n}\n\n.projects-list > a:hover,\n.projects-list > a:active {\n  text-decoration: none;\n  border: var(--border-size-1) solid var(--gray-7);\n  /* background-color: var(--gray-8); */\n  background-image: var(--gradient-23);\n  color: var(--gray-0);\n}\n\n.project {\n  border: var(--border-size-1) solid var(--gray-5);\n  background-color: var(--gray-2);\n  color: var(--gray-7);\n  border-radius: var(--radius-4);\n  padding: var(--size-2) var(--size-4);\n  letter-spacing: var(--font-letterspacing-2);\n}\n\n.active {\n  border: var(--border-size-1) solid var(--gray-7);\n  /* background-color: var(--gray-8); */\n  background-image: var(--gradient-23);\n  color: var(--gray-0);\n}\n\n/* *************** */\n\n/* ************** */\n/* Tasks Section */\n.tasks {\n  margin-top: var(--size-4);\n}\n\n.tasks-heading {\n  margin-bottom: var(--size-2);\n}\n\n.task {\n  display: flex;\n  align-items: center;\n  gap: var(--size-3);\n  border: var(--border-size-1) dashed var(--gray-7);\n  border-radius: var(--radius-3);\n  padding: var(--size-3);\n  margin-bottom: var(--size-3);\n}\n\n.task:hover {\n  border-style: solid;\n  background-image: var(--gradient-23);\n  color: var(--gray-0);\n}\n\ninput[type=\"checkbox\"] {\n  cursor: pointer;\n  -webkit-appearance: none;\n     -moz-appearance: none;\n          appearance: none;\n  background-color: #fff;\n  margin: 0;\n\n  font: inherit;\n  color: currentColor;\n  width: var(--size-5);\n  height: var(--size-5);\n  border: 0.15em solid currentColor;\n  border-radius: var(--radius-2);\n  /* transform: translateY(-0.075em); */\n\n  display: grid;\n  place-content: center;\n}\n\ninput[type=\"checkbox\"]::before {\n  content: \"\";\n  width: var(--size-3);\n  height: var(--size-3);\n  transform: scale(0);\n  transition: 60ms transform ease-in-out;\n  box-shadow: inset 1em 1em var(--gray-8);\n  border-radius: var(--radius-1);\n}\n\ninput[type=\"checkbox\"]:checked::before {\n  transform: scale(1);\n}\n\ninput[type=\"checkbox\"]:focus {\n  outline: max(2px, 0.15em) solid currentColor;\n  outline-offset: max(2px, 0.15em);\n}\n\n.task-details {\n  display: flex;\n  justify-content: space-between;\n  flex: 1;\n}\n\n.task-info {\n  text-align: end;\n}\n\n.hidden {\n  display: none;\n}\n", "",{"version":3,"sources":["<no source>","webpack://./src/style.css"],"names":[],"mappings":"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","sourcesContent":[null,"/* Box sizing rules */\n*,\n*::before,\n*::after {\n  box-sizing: border-box;\n}\n\n/* Remove default margin */\nbody,\nh1,\nh2,\nh3,\nh4,\np,\nfigure,\nblockquote,\ndl,\ndd {\n  margin: 0;\n}\n\n/* Remove list styles on ul, ol elements with a list role, which suggests default styling will be removed */\nul[role=\"list\"],\nol[role=\"list\"] {\n  list-style: none;\n}\n\n/* Set core root defaults */\nhtml:focus-within {\n  scroll-behavior: smooth;\n}\n\n/* Set core body defaults */\nbody {\n  min-height: 100vh;\n  text-rendering: optimizeSpeed;\n  line-height: 1.5;\n}\n\n/* A elements that don't have a class get default styles */\na:not([class]) {\n  text-decoration-skip-ink: auto;\n}\n\n/* Make images easier to work with */\nimg,\npicture {\n  max-width: 100%;\n  display: block;\n}\n\n/* Inherit fonts for inputs and buttons */\ninput,\nbutton,\ntextarea,\nselect {\n  font: inherit;\n}\n\n/* Remove all animations, transitions and smooth scroll for people that prefer not to see them */\n@media (prefers-reduced-motion: reduce) {\n  html:focus-within {\n    scroll-behavior: auto;\n  }\n\n  *,\n  *::before,\n  *::after {\n    animation-duration: 0.01ms !important;\n    animation-iteration-count: 1 !important;\n    transition-duration: 0.01ms !important;\n    scroll-behavior: auto !important;\n  }\n}\n\nbody {\n  font-family: var(--font-sans);\n  padding-inline: var(--size-4);\n  background-color: var(--gray-2);\n  /* background-image: var(--gradient-23); */\n}\n\n.container {\n  max-width: 42rem;\n  padding-inline: var(--size-7);\n  margin-inline: auto;\n  margin-block: var(--size-7);\n  border: 1px solid var(--gray-5);\n  border-radius: var(--radius-2);\n  background-color: var(--gray-0);\n  /* background-image: var(--gradient-15); */\n}\n\n.logo {\n  font-size: var(--font-size-5);\n  margin-block: var(--size-7);\n  border-bottom: var(--border-size-1) dashed var(--gray-6);\n}\n\nh1,\nh2,\nh3 {\n  color: var(--gray-8);\n}\n\n/* **************** */\n/* Projects Section */\n.projects {\n  margin-bottom: var(--size-2);\n}\n\n.projects-heading {\n  /* font-size: var(--font-size-4); */\n  /* display: flex;\n  align-items: center;\n  gap: var(--size-2); */\n  margin-bottom: var(--size-2);\n}\n\n.btn {\n  border: var(--border-size-1) solid var(--gray-5);\n  padding: var(--size-1) var(--size-3);\n  border-radius: var(--radius-3);\n  cursor: pointer;\n}\n\n.btn:hover {\n  background-color: var(--gray-2);\n}\n\n.btn:active {\n  background-color: var(--gray-3);\n}\n\n.add {\n  background-color: var(--green-1);\n}\n\n.add:hover {\n  background-color: var(--green-2);\n}\n\n.cancel {\n  background-color: var(--red-1);\n}\n\n.cancel:hover {\n  background-color: var(--red-2);\n}\n\n#project-name {\n  border: var(--border-size-2) solid var(--gray-7);\n  padding-inline: var(--size-2);\n  border-radius: var(--radius-3);\n}\n\n#project-name:focus-visible {\n  outline: var(--border-size-2) solid var(--gray-7);\n}\n\n.projects-list {\n  display: flex;\n  flex-wrap: wrap;\n  gap: var(--size-2);\n}\n\n.projects-list > a {\n  text-decoration: none;\n}\n\n.projects-list > a:hover,\n.projects-list > a:active {\n  text-decoration: none;\n  border: var(--border-size-1) solid var(--gray-7);\n  /* background-color: var(--gray-8); */\n  background-image: var(--gradient-23);\n  color: var(--gray-0);\n}\n\n.project {\n  border: var(--border-size-1) solid var(--gray-5);\n  background-color: var(--gray-2);\n  color: var(--gray-7);\n  border-radius: var(--radius-4);\n  padding: var(--size-2) var(--size-4);\n  letter-spacing: var(--font-letterspacing-2);\n}\n\n.active {\n  border: var(--border-size-1) solid var(--gray-7);\n  /* background-color: var(--gray-8); */\n  background-image: var(--gradient-23);\n  color: var(--gray-0);\n}\n\n/* *************** */\n\n/* ************** */\n/* Tasks Section */\n.tasks {\n  margin-top: var(--size-4);\n}\n\n.tasks-heading {\n  margin-bottom: var(--size-2);\n}\n\n.task {\n  display: flex;\n  align-items: center;\n  gap: var(--size-3);\n  border: var(--border-size-1) dashed var(--gray-7);\n  border-radius: var(--radius-3);\n  padding: var(--size-3);\n  margin-bottom: var(--size-3);\n}\n\n.task:hover {\n  border-style: solid;\n  background-image: var(--gradient-23);\n  color: var(--gray-0);\n}\n\ninput[type=\"checkbox\"] {\n  cursor: pointer;\n  appearance: none;\n  background-color: #fff;\n  margin: 0;\n\n  font: inherit;\n  color: currentColor;\n  width: var(--size-5);\n  height: var(--size-5);\n  border: 0.15em solid currentColor;\n  border-radius: var(--radius-2);\n  /* transform: translateY(-0.075em); */\n\n  display: grid;\n  place-content: center;\n}\n\ninput[type=\"checkbox\"]::before {\n  content: \"\";\n  width: var(--size-3);\n  height: var(--size-3);\n  transform: scale(0);\n  transition: 60ms transform ease-in-out;\n  box-shadow: inset 1em 1em var(--gray-8);\n  border-radius: var(--radius-1);\n}\n\ninput[type=\"checkbox\"]:checked::before {\n  transform: scale(1);\n}\n\ninput[type=\"checkbox\"]:focus {\n  outline: max(2px, 0.15em) solid currentColor;\n  outline-offset: max(2px, 0.15em);\n}\n\n.task-details {\n  display: flex;\n  justify-content: space-between;\n  flex: 1;\n}\n\n.task-info {\n  text-align: end;\n}\n\n.hidden {\n  display: none;\n}\n"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {



/*
  MIT License http://www.opensource.org/licenses/mit-license.php
  Author Tobias Koppers @sokra
*/
module.exports = function (cssWithMappingToString) {
  var list = []; // return the list of modules as css string

  list.toString = function toString() {
    return this.map(function (item) {
      var content = "";
      var needLayer = typeof item[5] !== "undefined";

      if (item[4]) {
        content += "@supports (".concat(item[4], ") {");
      }

      if (item[2]) {
        content += "@media ".concat(item[2], " {");
      }

      if (needLayer) {
        content += "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {");
      }

      content += cssWithMappingToString(item);

      if (needLayer) {
        content += "}";
      }

      if (item[2]) {
        content += "}";
      }

      if (item[4]) {
        content += "}";
      }

      return content;
    }).join("");
  }; // import a list of modules into the list


  list.i = function i(modules, media, dedupe, supports, layer) {
    if (typeof modules === "string") {
      modules = [[null, modules, undefined]];
    }

    var alreadyImportedModules = {};

    if (dedupe) {
      for (var k = 0; k < this.length; k++) {
        var id = this[k][0];

        if (id != null) {
          alreadyImportedModules[id] = true;
        }
      }
    }

    for (var _k = 0; _k < modules.length; _k++) {
      var item = [].concat(modules[_k]);

      if (dedupe && alreadyImportedModules[item[0]]) {
        continue;
      }

      if (typeof layer !== "undefined") {
        if (typeof item[5] === "undefined") {
          item[5] = layer;
        } else {
          item[1] = "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {").concat(item[1], "}");
          item[5] = layer;
        }
      }

      if (media) {
        if (!item[2]) {
          item[2] = media;
        } else {
          item[1] = "@media ".concat(item[2], " {").concat(item[1], "}");
          item[2] = media;
        }
      }

      if (supports) {
        if (!item[4]) {
          item[4] = "".concat(supports);
        } else {
          item[1] = "@supports (".concat(item[4], ") {").concat(item[1], "}");
          item[4] = supports;
        }
      }

      list.push(item);
    }
  };

  return list;
};

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/sourceMaps.js":
/*!************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/sourceMaps.js ***!
  \************************************************************/
/***/ ((module) => {



module.exports = function (item) {
  var content = item[1];
  var cssMapping = item[3];

  if (!cssMapping) {
    return content;
  }

  if (typeof btoa === "function") {
    var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(cssMapping))));
    var data = "sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(base64);
    var sourceMapping = "/*# ".concat(data, " */");
    var sourceURLs = cssMapping.sources.map(function (source) {
      return "/*# sourceURL=".concat(cssMapping.sourceRoot || "").concat(source, " */");
    });
    return [content].concat(sourceURLs).concat([sourceMapping]).join("\n");
  }

  return [content].join("\n");
};

/***/ }),

/***/ "./src/style.css":
/*!***********************!*\
  !*** ./src/style.css ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleDomAPI.js */ "./node_modules/style-loader/dist/runtime/styleDomAPI.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertBySelector.js */ "./node_modules/style-loader/dist/runtime/insertBySelector.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertStyleElement.js */ "./node_modules/style-loader/dist/runtime/insertStyleElement.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleTagTransform.js */ "./node_modules/style-loader/dist/runtime/styleTagTransform.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_node_modules_postcss_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../node_modules/css-loader/dist/cjs.js!../node_modules/postcss-loader/dist/cjs.js!./style.css */ "./node_modules/css-loader/dist/cjs.js!./node_modules/postcss-loader/dist/cjs.js!./src/style.css");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_node_modules_postcss_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_node_modules_postcss_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_node_modules_postcss_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_node_modules_postcss_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module) => {



var stylesInDOM = [];

function getIndexByIdentifier(identifier) {
  var result = -1;

  for (var i = 0; i < stylesInDOM.length; i++) {
    if (stylesInDOM[i].identifier === identifier) {
      result = i;
      break;
    }
  }

  return result;
}

function modulesToDom(list, options) {
  var idCountMap = {};
  var identifiers = [];

  for (var i = 0; i < list.length; i++) {
    var item = list[i];
    var id = options.base ? item[0] + options.base : item[0];
    var count = idCountMap[id] || 0;
    var identifier = "".concat(id, " ").concat(count);
    idCountMap[id] = count + 1;
    var indexByIdentifier = getIndexByIdentifier(identifier);
    var obj = {
      css: item[1],
      media: item[2],
      sourceMap: item[3],
      supports: item[4],
      layer: item[5]
    };

    if (indexByIdentifier !== -1) {
      stylesInDOM[indexByIdentifier].references++;
      stylesInDOM[indexByIdentifier].updater(obj);
    } else {
      var updater = addElementStyle(obj, options);
      options.byIndex = i;
      stylesInDOM.splice(i, 0, {
        identifier: identifier,
        updater: updater,
        references: 1
      });
    }

    identifiers.push(identifier);
  }

  return identifiers;
}

function addElementStyle(obj, options) {
  var api = options.domAPI(options);
  api.update(obj);

  var updater = function updater(newObj) {
    if (newObj) {
      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {
        return;
      }

      api.update(obj = newObj);
    } else {
      api.remove();
    }
  };

  return updater;
}

module.exports = function (list, options) {
  options = options || {};
  list = list || [];
  var lastIdentifiers = modulesToDom(list, options);
  return function update(newList) {
    newList = newList || [];

    for (var i = 0; i < lastIdentifiers.length; i++) {
      var identifier = lastIdentifiers[i];
      var index = getIndexByIdentifier(identifier);
      stylesInDOM[index].references--;
    }

    var newLastIdentifiers = modulesToDom(newList, options);

    for (var _i = 0; _i < lastIdentifiers.length; _i++) {
      var _identifier = lastIdentifiers[_i];

      var _index = getIndexByIdentifier(_identifier);

      if (stylesInDOM[_index].references === 0) {
        stylesInDOM[_index].updater();

        stylesInDOM.splice(_index, 1);
      }
    }

    lastIdentifiers = newLastIdentifiers;
  };
};

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertBySelector.js":
/*!********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \********************************************************************/
/***/ ((module) => {



var memo = {};
/* istanbul ignore next  */

function getTarget(target) {
  if (typeof memo[target] === "undefined") {
    var styleTarget = document.querySelector(target); // Special case to return head of iframe instead of iframe itself

    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {
      try {
        // This will throw an exception if access to iframe is blocked
        // due to cross-origin restrictions
        styleTarget = styleTarget.contentDocument.head;
      } catch (e) {
        // istanbul ignore next
        styleTarget = null;
      }
    }

    memo[target] = styleTarget;
  }

  return memo[target];
}
/* istanbul ignore next  */


function insertBySelector(insert, style) {
  var target = getTarget(insert);

  if (!target) {
    throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");
  }

  target.appendChild(style);
}

module.exports = insertBySelector;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertStyleElement.js":
/*!**********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**********************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function insertStyleElement(options) {
  var element = document.createElement("style");
  options.setAttributes(element, options.attributes);
  options.insert(element, options.options);
  return element;
}

module.exports = insertStyleElement;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {



/* istanbul ignore next  */
function setAttributesWithoutAttributes(styleElement) {
  var nonce =  true ? __webpack_require__.nc : 0;

  if (nonce) {
    styleElement.setAttribute("nonce", nonce);
  }
}

module.exports = setAttributesWithoutAttributes;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleDomAPI.js":
/*!***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \***************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function apply(styleElement, options, obj) {
  var css = "";

  if (obj.supports) {
    css += "@supports (".concat(obj.supports, ") {");
  }

  if (obj.media) {
    css += "@media ".concat(obj.media, " {");
  }

  var needLayer = typeof obj.layer !== "undefined";

  if (needLayer) {
    css += "@layer".concat(obj.layer.length > 0 ? " ".concat(obj.layer) : "", " {");
  }

  css += obj.css;

  if (needLayer) {
    css += "}";
  }

  if (obj.media) {
    css += "}";
  }

  if (obj.supports) {
    css += "}";
  }

  var sourceMap = obj.sourceMap;

  if (sourceMap && typeof btoa !== "undefined") {
    css += "\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), " */");
  } // For old IE

  /* istanbul ignore if  */


  options.styleTagTransform(css, styleElement, options.options);
}

function removeStyleElement(styleElement) {
  // istanbul ignore if
  if (styleElement.parentNode === null) {
    return false;
  }

  styleElement.parentNode.removeChild(styleElement);
}
/* istanbul ignore next  */


function domAPI(options) {
  var styleElement = options.insertStyleElement(options);
  return {
    update: function update(obj) {
      apply(styleElement, options, obj);
    },
    remove: function remove() {
      removeStyleElement(styleElement);
    }
  };
}

module.exports = domAPI;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleTagTransform.js":
/*!*********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \*********************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function styleTagTransform(css, styleElement) {
  if (styleElement.styleSheet) {
    styleElement.styleSheet.cssText = css;
  } else {
    while (styleElement.firstChild) {
      styleElement.removeChild(styleElement.firstChild);
    }

    styleElement.appendChild(document.createTextNode(css));
  }
}

module.exports = styleTagTransform;

/***/ }),

/***/ "./src/storage.js":
/*!************************!*\
  !*** ./src/storage.js ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Storage": () => (/* binding */ Storage)
/* harmony export */ });
const Storage = (function () {
  let projects = [];
  let currentProjectID = "";

  const addProject = function (project) {
    projects.push(project);
  };

  const setCurrentProject = function (projectID) {
    currentProjectID = projectID;
  };

  return {
    projects,
    currentProjectID,
    addProject,
    setCurrentProject,
  };
})();


/***/ }),

/***/ "./src/ui.js":
/*!*******************!*\
  !*** ./src/ui.js ***!
  \*******************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _storage__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./storage */ "./src/storage.js");




const btnAddProject = document.querySelector(".btn-add-project");
const projectForm = document.querySelector(".project-form");
const inputProjectName = document.querySelector("#project-name");
const btnAdd = document.querySelector(".add");
const btnCancel = document.querySelector(".cancel");
const projectsList = document.querySelector(".projects-list");

const toggleProjectInput = function () {
  btnAddProject.classList.toggle("hidden");
  projectForm.classList.toggle("hidden");
};

btnAddProject.addEventListener("click", function () {
  toggleProjectInput();
  inputProjectName.focus();
  inputProjectName.value = "";
});

btnCancel.addEventListener("click", toggleProjectInput);


/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
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
/******/ 				() => (module['default']) :
/******/ 				() => (module);
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
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
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
/******/ 	/* webpack/runtime/nonce */
/******/ 	(() => {
/******/ 		__webpack_require__.nc = undefined;
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./style.css */ "./src/style.css");
/* harmony import */ var _ui__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./ui */ "./src/ui.js");



})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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VUFBVSxNQUFNLFlBQVksT0FBTyxZQUFZLE9BQU8sWUFBWSxNQUFNLFlBQVksT0FBTyxZQUFZLE1BQU0sWUFBWSxhQUFhLGFBQWEsT0FBTyxZQUFZLE1BQU0sWUFBWSxhQUFhLE9BQU8sWUFBWSxPQUFPLFVBQVUsVUFBVSxPQUFPLFlBQVksU0FBUyxVQUFVLE1BQU0sWUFBWSxNQUFNLEtBQUssWUFBWSxPQUFPLE9BQU8sWUFBWSxhQUFhLGFBQWEsYUFBYSxhQUFhLGFBQWEsTUFBTSxNQUFNLEtBQUssWUFBWSxhQUFhLGFBQWEsYUFBYSxPQUFPLEtBQUssWUFBWSxhQUFhLGFBQWEsYUFBYSxhQUFhLGFBQWEsYUFBYSxhQUFhLE9BQU8sS0FBSyxZQUFZLGFBQWEsYUFBYSxPQUFPLE9BQU8sWUFBWSxPQUFPLFlBQVksYUFBYSxNQUFNLFlBQVksT0FBTyxLQUFLLFlBQVksT0FBTyxPQUFPLGFBQWEsT0FBTyxLQUFLLFlBQVksYUFBYSxhQUFhLFdBQVcsT0FBTyxLQUFLLFlBQVksT0FBTyxLQUFLLFlBQVksT0FBTyxLQUFLLFlBQVksT0FBTyxLQUFLLFlBQVksT0FBTyxLQUFLLFlBQVksT0FBTyxLQUFLLFlBQVksT0FBTyxLQUFLLFlBQVksYUFBYSxhQUFhLE9BQU8sS0FBSyxZQUFZLE9BQU8sS0FBSyxVQUFVLFVBQVUsWUFBWSxPQUFPLEtBQUssWUFBWSxPQUFPLE1BQU0sWUFBWSxhQUFhLGFBQWEsYUFBYSxhQUFhLE9BQU8sS0FBSyxZQUFZLGFBQWEsYUFBYSxhQUFhLGFBQWEsYUFBYSxPQUFPLEtBQUssWUFBWSxhQUFhLGFBQWEsYUFBYSxPQUFPLGFBQWEsYUFBYSxhQUFhLE1BQU0sWUFBWSxPQUFPLEtBQUssWUFBWSxPQUFPLEtBQUssVUFBVSxZQUFZLGFBQWEsYUFBYSxhQUFhLGFBQWEsYUFBYSxPQUFPLEtBQUssWUFBWSxhQUFhLGFBQWEsT0FBTyxLQUFLLFVBQVUsWUFBWSxhQUFhLGFBQWEsYUFBYSxZQUFZLFVBQVUsWUFBWSxhQUFhLGFBQWEsYUFBYSxhQUFhLGNBQWMsV0FBVyxZQUFZLE9BQU8s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QTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7Ozs7Ozs7Ozs7QUNyRWE7O0FBRWI7QUFDQTtBQUNBO0FBQ0E7QUFDQSxJQUFJO0FBQ0o7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTs7Ozs7Ozs7Ozs7Ozs7QUNmTztBQUNQO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxDQUFDOzs7Ozs7Ozs7Ozs7O0FDbEJZOztBQUV1Qjs7QUFFcEM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsQ0FBQzs7QUFFRDs7Ozs7OztVQ3RCQTtVQUNBOztVQUVBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBOztVQUVBO1VBQ0E7O1VBRUE7VUFDQTtVQUNBOzs7OztXQ3RCQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0EsaUNBQWlDLFdBQVc7V0FDNUM7V0FDQTs7Ozs7V0NQQTtXQUNBO1dBQ0E7V0FDQTtXQUNBLHlDQUF5Qyx3Q0FBd0M7V0FDakY7V0FDQTtXQUNBOzs7OztXQ1BBOzs7OztXQ0FBO1dBQ0E7V0FDQTtXQUNBLHVEQUF1RCxpQkFBaUI7V0FDeEU7V0FDQSxnREFBZ0QsYUFBYTtXQUM3RDs7Ozs7V0NOQTs7Ozs7Ozs7Ozs7OztBQ0FxQjtBQUNQIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vc2ltcGxlLXRvZG8vLi9zcmMvc3R5bGUuY3NzIiwid2VicGFjazovL3NpbXBsZS10b2RvLy4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qcyIsIndlYnBhY2s6Ly9zaW1wbGUtdG9kby8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzIiwid2VicGFjazovL3NpbXBsZS10b2RvLy4vc3JjL3N0eWxlLmNzcz85MDExIiwid2VicGFjazovL3NpbXBsZS10b2RvLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzIiwid2VicGFjazovL3NpbXBsZS10b2RvLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qcyIsIndlYnBhY2s6Ly9zaW1wbGUtdG9kby8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qcyIsIndlYnBhY2s6Ly9zaW1wbGUtdG9kby8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qcyIsIndlYnBhY2s6Ly9zaW1wbGUtdG9kby8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzIiwid2VicGFjazovL3NpbXBsZS10b2RvLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanMiLCJ3ZWJwYWNrOi8vc2ltcGxlLXRvZG8vLi9zcmMvc3RvcmFnZS5qcyIsIndlYnBhY2s6Ly9zaW1wbGUtdG9kby8uL3NyYy91aS5qcyIsIndlYnBhY2s6Ly9zaW1wbGUtdG9kby93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly9zaW1wbGUtdG9kby93ZWJwYWNrL3J1bnRpbWUvY29tcGF0IGdldCBkZWZhdWx0IGV4cG9ydCIsIndlYnBhY2s6Ly9zaW1wbGUtdG9kby93ZWJwYWNrL3J1bnRpbWUvZGVmaW5lIHByb3BlcnR5IGdldHRlcnMiLCJ3ZWJwYWNrOi8vc2ltcGxlLXRvZG8vd2VicGFjay9ydW50aW1lL2hhc093blByb3BlcnR5IHNob3J0aGFuZCIsIndlYnBhY2s6Ly9zaW1wbGUtdG9kby93ZWJwYWNrL3J1bnRpbWUvbWFrZSBuYW1lc3BhY2Ugb2JqZWN0Iiwid2VicGFjazovL3NpbXBsZS10b2RvL3dlYnBhY2svcnVudGltZS9ub25jZSIsIndlYnBhY2s6Ly9zaW1wbGUtdG9kby8uL3NyYy9pbmRleC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyIvLyBJbXBvcnRzXG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyBmcm9tIFwiLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanNcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18gZnJvbSBcIi4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanNcIjtcbnZhciBfX19DU1NfTE9BREVSX0VYUE9SVF9fXyA9IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fKTtcbi8vIE1vZHVsZVxuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18ucHVzaChbbW9kdWxlLmlkLCBcIlxcbjpyb290IHtcXG4gIC0tZm9udC1zYW5zOiBzeXN0ZW0tdWksLWFwcGxlLXN5c3RlbSxTZWdvZSBVSSxSb2JvdG8sVWJ1bnR1LENhbnRhcmVsbCxOb3RvIFNhbnMsc2Fucy1zZXJpZjtcXG4gIC0tc2l6ZS00OiAxLjI1cmVtO1xcbiAgLS1ncmF5LTI6ICNlOWVjZWY7XFxuICAtLXNpemUtNzogMnJlbTtcXG4gIC0tZ3JheS01OiAjYWRiNWJkO1xcbiAgLS1yYWRpdXMtMjogNXB4O1xcbiAgLS1ncmF5LTA6ICNmOGY5ZmE7XFxuICAtLWZvbnQtc2l6ZS01OiAycmVtO1xcbiAgLS1ib3JkZXItc2l6ZS0xOiAxcHg7XFxuICAtLWdyYXktNjogIzg2OGU5NjtcXG4gIC0tZ3JheS04OiAjMzQzYTQwO1xcbiAgLS1zaXplLTI6IC41cmVtO1xcbiAgLS1zaXplLTE6IC4yNXJlbTtcXG4gIC0tc2l6ZS0zOiAxcmVtO1xcbiAgLS1yYWRpdXMtMzogMXJlbTtcXG4gIC0tZ3JheS0zOiAjZGVlMmU2O1xcbiAgLS1ncmVlbi0xOiAjZDNmOWQ4O1xcbiAgLS1ncmVlbi0yOiAjYjJmMmJiO1xcbiAgLS1yZWQtMTogI2ZmZTNlMztcXG4gIC0tcmVkLTI6ICNmZmM5Yzk7XFxuICAtLWJvcmRlci1zaXplLTI6IDJweDtcXG4gIC0tZ3JheS03OiAjNDk1MDU3O1xcbiAgLS1ncmFkaWVudC0yMzogbGluZWFyLWdyYWRpZW50KHRvIGJvdHRvbSByaWdodCwjNTM2OTc2LCMyOTJFNDkpO1xcbiAgLS1yYWRpdXMtNDogMnJlbTtcXG4gIC0tZm9udC1sZXR0ZXJzcGFjaW5nLTI6IC4wNTBlbTtcXG4gIC0tc2l6ZS01OiAxLjVyZW07XFxuICAtLXJhZGl1cy0xOiAycHg7XFxufVxcblxcbi8qIEJveCBzaXppbmcgcnVsZXMgKi9cXG4qLFxcbio6OmJlZm9yZSxcXG4qOjphZnRlciB7XFxuICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xcbn1cXG5cXG4vKiBSZW1vdmUgZGVmYXVsdCBtYXJnaW4gKi9cXG5ib2R5LFxcbmgxLFxcbmgyLFxcbmgzLFxcbmg0LFxcbnAsXFxuZmlndXJlLFxcbmJsb2NrcXVvdGUsXFxuZGwsXFxuZGQge1xcbiAgbWFyZ2luOiAwO1xcbn1cXG5cXG4vKiBSZW1vdmUgbGlzdCBzdHlsZXMgb24gdWwsIG9sIGVsZW1lbnRzIHdpdGggYSBsaXN0IHJvbGUsIHdoaWNoIHN1Z2dlc3RzIGRlZmF1bHQgc3R5bGluZyB3aWxsIGJlIHJlbW92ZWQgKi9cXG51bFtyb2xlPVxcXCJsaXN0XFxcIl0sXFxub2xbcm9sZT1cXFwibGlzdFxcXCJdIHtcXG4gIGxpc3Qtc3R5bGU6IG5vbmU7XFxufVxcblxcbi8qIFNldCBjb3JlIHJvb3QgZGVmYXVsdHMgKi9cXG5odG1sOmZvY3VzLXdpdGhpbiB7XFxuICBzY3JvbGwtYmVoYXZpb3I6IHNtb290aDtcXG59XFxuXFxuLyogU2V0IGNvcmUgYm9keSBkZWZhdWx0cyAqL1xcbmJvZHkge1xcbiAgbWluLWhlaWdodDogMTAwdmg7XFxuICB0ZXh0LXJlbmRlcmluZzogb3B0aW1pemVTcGVlZDtcXG4gIGxpbmUtaGVpZ2h0OiAxLjU7XFxufVxcblxcbi8qIEEgZWxlbWVudHMgdGhhdCBkb24ndCBoYXZlIGEgY2xhc3MgZ2V0IGRlZmF1bHQgc3R5bGVzICovXFxuYTpub3QoW2NsYXNzXSkge1xcbiAgLXdlYmtpdC10ZXh0LWRlY29yYXRpb24tc2tpcDogaW5rO1xcbiAgICAgICAgICB0ZXh0LWRlY29yYXRpb24tc2tpcC1pbms6IGF1dG87XFxufVxcblxcbi8qIE1ha2UgaW1hZ2VzIGVhc2llciB0byB3b3JrIHdpdGggKi9cXG5pbWcsXFxucGljdHVyZSB7XFxuICBtYXgtd2lkdGg6IDEwMCU7XFxuICBkaXNwbGF5OiBibG9jaztcXG59XFxuXFxuLyogSW5oZXJpdCBmb250cyBmb3IgaW5wdXRzIGFuZCBidXR0b25zICovXFxuaW5wdXQsXFxuYnV0dG9uLFxcbnRleHRhcmVhLFxcbnNlbGVjdCB7XFxuICBmb250OiBpbmhlcml0O1xcbn1cXG5cXG4vKiBSZW1vdmUgYWxsIGFuaW1hdGlvbnMsIHRyYW5zaXRpb25zIGFuZCBzbW9vdGggc2Nyb2xsIGZvciBwZW9wbGUgdGhhdCBwcmVmZXIgbm90IHRvIHNlZSB0aGVtICovXFxuQG1lZGlhIChwcmVmZXJzLXJlZHVjZWQtbW90aW9uOiByZWR1Y2UpIHtcXG4gIGh0bWw6Zm9jdXMtd2l0aGluIHtcXG4gICAgc2Nyb2xsLWJlaGF2aW9yOiBhdXRvO1xcbiAgfVxcblxcbiAgKixcXG4gICo6OmJlZm9yZSxcXG4gICo6OmFmdGVyIHtcXG4gICAgLXdlYmtpdC1hbmltYXRpb24tZHVyYXRpb246IDAuMDFtcyAhaW1wb3J0YW50O1xcbiAgICAgICAgICAgIGFuaW1hdGlvbi1kdXJhdGlvbjogMC4wMW1zICFpbXBvcnRhbnQ7XFxuICAgIC13ZWJraXQtYW5pbWF0aW9uLWl0ZXJhdGlvbi1jb3VudDogMSAhaW1wb3J0YW50O1xcbiAgICAgICAgICAgIGFuaW1hdGlvbi1pdGVyYXRpb24tY291bnQ6IDEgIWltcG9ydGFudDtcXG4gICAgdHJhbnNpdGlvbi1kdXJhdGlvbjogMC4wMW1zICFpbXBvcnRhbnQ7XFxuICAgIHNjcm9sbC1iZWhhdmlvcjogYXV0byAhaW1wb3J0YW50O1xcbiAgfVxcbn1cXG5cXG5ib2R5IHtcXG4gIGZvbnQtZmFtaWx5OiB2YXIoLS1mb250LXNhbnMpO1xcbiAgcGFkZGluZy1pbmxpbmU6IHZhcigtLXNpemUtNCk7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1ncmF5LTIpO1xcbiAgLyogYmFja2dyb3VuZC1pbWFnZTogdmFyKC0tZ3JhZGllbnQtMjMpOyAqL1xcbn1cXG5cXG4uY29udGFpbmVyIHtcXG4gIG1heC13aWR0aDogNDJyZW07XFxuICBwYWRkaW5nLWlubGluZTogdmFyKC0tc2l6ZS03KTtcXG4gIG1hcmdpbi1pbmxpbmU6IGF1dG87XFxuICBtYXJnaW4tYmxvY2s6IHZhcigtLXNpemUtNyk7XFxuICBib3JkZXI6IDFweCBzb2xpZCB2YXIoLS1ncmF5LTUpO1xcbiAgYm9yZGVyLXJhZGl1czogdmFyKC0tcmFkaXVzLTIpO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tZ3JheS0wKTtcXG4gIC8qIGJhY2tncm91bmQtaW1hZ2U6IHZhcigtLWdyYWRpZW50LTE1KTsgKi9cXG59XFxuXFxuLmxvZ28ge1xcbiAgZm9udC1zaXplOiB2YXIoLS1mb250LXNpemUtNSk7XFxuICBtYXJnaW4tYmxvY2s6IHZhcigtLXNpemUtNyk7XFxuICBib3JkZXItYm90dG9tOiB2YXIoLS1ib3JkZXItc2l6ZS0xKSBkYXNoZWQgdmFyKC0tZ3JheS02KTtcXG59XFxuXFxuaDEsXFxuaDIsXFxuaDMge1xcbiAgY29sb3I6IHZhcigtLWdyYXktOCk7XFxufVxcblxcbi8qICoqKioqKioqKioqKioqKiogKi9cXG4vKiBQcm9qZWN0cyBTZWN0aW9uICovXFxuLnByb2plY3RzIHtcXG4gIG1hcmdpbi1ib3R0b206IHZhcigtLXNpemUtMik7XFxufVxcblxcbi5wcm9qZWN0cy1oZWFkaW5nIHtcXG4gIC8qIGZvbnQtc2l6ZTogdmFyKC0tZm9udC1zaXplLTQpOyAqL1xcbiAgLyogZGlzcGxheTogZmxleDtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICBnYXA6IHZhcigtLXNpemUtMik7ICovXFxuICBtYXJnaW4tYm90dG9tOiB2YXIoLS1zaXplLTIpO1xcbn1cXG5cXG4uYnRuIHtcXG4gIGJvcmRlcjogdmFyKC0tYm9yZGVyLXNpemUtMSkgc29saWQgdmFyKC0tZ3JheS01KTtcXG4gIHBhZGRpbmc6IHZhcigtLXNpemUtMSkgdmFyKC0tc2l6ZS0zKTtcXG4gIGJvcmRlci1yYWRpdXM6IHZhcigtLXJhZGl1cy0zKTtcXG4gIGN1cnNvcjogcG9pbnRlcjtcXG59XFxuXFxuLmJ0bjpob3ZlciB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1ncmF5LTIpO1xcbn1cXG5cXG4uYnRuOmFjdGl2ZSB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1ncmF5LTMpO1xcbn1cXG5cXG4uYWRkIHtcXG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWdyZWVuLTEpO1xcbn1cXG5cXG4uYWRkOmhvdmVyIHtcXG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWdyZWVuLTIpO1xcbn1cXG5cXG4uY2FuY2VsIHtcXG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLXJlZC0xKTtcXG59XFxuXFxuLmNhbmNlbDpob3ZlciB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1yZWQtMik7XFxufVxcblxcbiNwcm9qZWN0LW5hbWUge1xcbiAgYm9yZGVyOiB2YXIoLS1ib3JkZXItc2l6ZS0yKSBzb2xpZCB2YXIoLS1ncmF5LTcpO1xcbiAgcGFkZGluZy1pbmxpbmU6IHZhcigtLXNpemUtMik7XFxuICBib3JkZXItcmFkaXVzOiB2YXIoLS1yYWRpdXMtMyk7XFxufVxcblxcbiNwcm9qZWN0LW5hbWU6Zm9jdXMtdmlzaWJsZSB7XFxuICBvdXRsaW5lOiB2YXIoLS1ib3JkZXItc2l6ZS0yKSBzb2xpZCB2YXIoLS1ncmF5LTcpO1xcbn1cXG5cXG4ucHJvamVjdHMtbGlzdCB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZmxleC13cmFwOiB3cmFwO1xcbiAgZ2FwOiB2YXIoLS1zaXplLTIpO1xcbn1cXG5cXG4ucHJvamVjdHMtbGlzdCA+IGEge1xcbiAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xcbn1cXG5cXG4ucHJvamVjdHMtbGlzdCA+IGE6aG92ZXIsXFxuLnByb2plY3RzLWxpc3QgPiBhOmFjdGl2ZSB7XFxuICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XFxuICBib3JkZXI6IHZhcigtLWJvcmRlci1zaXplLTEpIHNvbGlkIHZhcigtLWdyYXktNyk7XFxuICAvKiBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1ncmF5LTgpOyAqL1xcbiAgYmFja2dyb3VuZC1pbWFnZTogdmFyKC0tZ3JhZGllbnQtMjMpO1xcbiAgY29sb3I6IHZhcigtLWdyYXktMCk7XFxufVxcblxcbi5wcm9qZWN0IHtcXG4gIGJvcmRlcjogdmFyKC0tYm9yZGVyLXNpemUtMSkgc29saWQgdmFyKC0tZ3JheS01KTtcXG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWdyYXktMik7XFxuICBjb2xvcjogdmFyKC0tZ3JheS03KTtcXG4gIGJvcmRlci1yYWRpdXM6IHZhcigtLXJhZGl1cy00KTtcXG4gIHBhZGRpbmc6IHZhcigtLXNpemUtMikgdmFyKC0tc2l6ZS00KTtcXG4gIGxldHRlci1zcGFjaW5nOiB2YXIoLS1mb250LWxldHRlcnNwYWNpbmctMik7XFxufVxcblxcbi5hY3RpdmUge1xcbiAgYm9yZGVyOiB2YXIoLS1ib3JkZXItc2l6ZS0xKSBzb2xpZCB2YXIoLS1ncmF5LTcpO1xcbiAgLyogYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tZ3JheS04KTsgKi9cXG4gIGJhY2tncm91bmQtaW1hZ2U6IHZhcigtLWdyYWRpZW50LTIzKTtcXG4gIGNvbG9yOiB2YXIoLS1ncmF5LTApO1xcbn1cXG5cXG4vKiAqKioqKioqKioqKioqKiogKi9cXG5cXG4vKiAqKioqKioqKioqKioqKiAqL1xcbi8qIFRhc2tzIFNlY3Rpb24gKi9cXG4udGFza3Mge1xcbiAgbWFyZ2luLXRvcDogdmFyKC0tc2l6ZS00KTtcXG59XFxuXFxuLnRhc2tzLWhlYWRpbmcge1xcbiAgbWFyZ2luLWJvdHRvbTogdmFyKC0tc2l6ZS0yKTtcXG59XFxuXFxuLnRhc2sge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICBnYXA6IHZhcigtLXNpemUtMyk7XFxuICBib3JkZXI6IHZhcigtLWJvcmRlci1zaXplLTEpIGRhc2hlZCB2YXIoLS1ncmF5LTcpO1xcbiAgYm9yZGVyLXJhZGl1czogdmFyKC0tcmFkaXVzLTMpO1xcbiAgcGFkZGluZzogdmFyKC0tc2l6ZS0zKTtcXG4gIG1hcmdpbi1ib3R0b206IHZhcigtLXNpemUtMyk7XFxufVxcblxcbi50YXNrOmhvdmVyIHtcXG4gIGJvcmRlci1zdHlsZTogc29saWQ7XFxuICBiYWNrZ3JvdW5kLWltYWdlOiB2YXIoLS1ncmFkaWVudC0yMyk7XFxuICBjb2xvcjogdmFyKC0tZ3JheS0wKTtcXG59XFxuXFxuaW5wdXRbdHlwZT1cXFwiY2hlY2tib3hcXFwiXSB7XFxuICBjdXJzb3I6IHBvaW50ZXI7XFxuICAtd2Via2l0LWFwcGVhcmFuY2U6IG5vbmU7XFxuICAgICAtbW96LWFwcGVhcmFuY2U6IG5vbmU7XFxuICAgICAgICAgIGFwcGVhcmFuY2U6IG5vbmU7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmO1xcbiAgbWFyZ2luOiAwO1xcblxcbiAgZm9udDogaW5oZXJpdDtcXG4gIGNvbG9yOiBjdXJyZW50Q29sb3I7XFxuICB3aWR0aDogdmFyKC0tc2l6ZS01KTtcXG4gIGhlaWdodDogdmFyKC0tc2l6ZS01KTtcXG4gIGJvcmRlcjogMC4xNWVtIHNvbGlkIGN1cnJlbnRDb2xvcjtcXG4gIGJvcmRlci1yYWRpdXM6IHZhcigtLXJhZGl1cy0yKTtcXG4gIC8qIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgtMC4wNzVlbSk7ICovXFxuXFxuICBkaXNwbGF5OiBncmlkO1xcbiAgcGxhY2UtY29udGVudDogY2VudGVyO1xcbn1cXG5cXG5pbnB1dFt0eXBlPVxcXCJjaGVja2JveFxcXCJdOjpiZWZvcmUge1xcbiAgY29udGVudDogXFxcIlxcXCI7XFxuICB3aWR0aDogdmFyKC0tc2l6ZS0zKTtcXG4gIGhlaWdodDogdmFyKC0tc2l6ZS0zKTtcXG4gIHRyYW5zZm9ybTogc2NhbGUoMCk7XFxuICB0cmFuc2l0aW9uOiA2MG1zIHRyYW5zZm9ybSBlYXNlLWluLW91dDtcXG4gIGJveC1zaGFkb3c6IGluc2V0IDFlbSAxZW0gdmFyKC0tZ3JheS04KTtcXG4gIGJvcmRlci1yYWRpdXM6IHZhcigtLXJhZGl1cy0xKTtcXG59XFxuXFxuaW5wdXRbdHlwZT1cXFwiY2hlY2tib3hcXFwiXTpjaGVja2VkOjpiZWZvcmUge1xcbiAgdHJhbnNmb3JtOiBzY2FsZSgxKTtcXG59XFxuXFxuaW5wdXRbdHlwZT1cXFwiY2hlY2tib3hcXFwiXTpmb2N1cyB7XFxuICBvdXRsaW5lOiBtYXgoMnB4LCAwLjE1ZW0pIHNvbGlkIGN1cnJlbnRDb2xvcjtcXG4gIG91dGxpbmUtb2Zmc2V0OiBtYXgoMnB4LCAwLjE1ZW0pO1xcbn1cXG5cXG4udGFzay1kZXRhaWxzIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XFxuICBmbGV4OiAxO1xcbn1cXG5cXG4udGFzay1pbmZvIHtcXG4gIHRleHQtYWxpZ246IGVuZDtcXG59XFxuXFxuLmhpZGRlbiB7XFxuICBkaXNwbGF5OiBub25lO1xcbn1cXG5cIiwgXCJcIix7XCJ2ZXJzaW9uXCI6MyxcInNvdXJjZXNcIjpbXCI8bm8gc291cmNlPlwiLFwid2VicGFjazovLy4vc3JjL3N0eWxlLmNzc1wiXSxcIm5hbWVzXCI6W10sXCJtYXBwaW5nc1wiOlwiO0FBQUE7RUFBQSwyRkFBQTtFQUFBLGtCQUFB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QUNiLG1CQUFtQjtFQUNuQixrQkFBa0I7RUFDbEIsaURBQWlEO0VBQ2pELDhCQUE4QjtFQUM5QixzQkFBc0I7RUFDdEIsNEJBQTRCO0FBQzlCOztBQUVBO0VBQ0UsbUJBQW1CO0VBQ25CLG9DQUFvQztFQUNwQyxvQkFBb0I7QUFDdEI7O0FBRUE7RUFDRSxlQUFlO0VBQ2Ysd0JBQWdCO0tBQWhCLHFCQUFnQjtVQUFoQixnQkFBZ0I7RUFDaEIsc0JBQXNCO0VBQ3RCLFNBQVM7O0VBRVQsYUFBYTtFQUNiLG1CQUFtQjtFQUNuQixvQkFBb0I7RUFDcEIscUJBQXFCO0VBQ3JCLGlDQUFpQztFQUNqQyw4QkFBOEI7RUFDOUIscUNBQXFDOztFQUVyQyxhQUFhO0VBQ2IscUJBQXFCO0FBQ3ZCOztBQUVBO0VBQ0UsV0FBVztFQUNYLG9CQUFvQjtFQUNwQixxQkFBcUI7RUFDckIsbUJBQW1CO0VBQ25CLHNDQUFzQztFQUN0Qyx1Q0FBdUM7RUFDdkMsOEJBQThCO0FBQ2hDOztBQUVBO0VBQ0UsbUJBQW1CO0FBQ3JCOztBQUVBO0VBQ0UsNENBQTRDO0VBQzVDLGdDQUFnQztBQUNsQzs7QUFFQTtFQUNFLGFBQWE7RUFDYiw4QkFBOEI7RUFDOUIsT0FBTztBQUNUOztBQUVBO0VBQ0UsZUFBZTtBQUNqQjs7QUFFQTtFQUNFLGFBQWE7QUFDZlwiLFwic291cmNlc0NvbnRlbnRcIjpbbnVsbCxcIi8qIEJveCBzaXppbmcgcnVsZXMgKi9cXG4qLFxcbio6OmJlZm9yZSxcXG4qOjphZnRlciB7XFxuICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xcbn1cXG5cXG4vKiBSZW1vdmUgZGVmYXVsdCBtYXJnaW4gKi9cXG5ib2R5LFxcbmgxLFxcbmgyLFxcbmgzLFxcbmg0LFxcbnAsXFxuZmlndXJlLFxcbmJsb2NrcXVvdGUsXFxuZGwsXFxuZGQge1xcbiAgbWFyZ2luOiAwO1xcbn1cXG5cXG4vKiBSZW1vdmUgbGlzdCBzdHlsZXMgb24gdWwsIG9sIGVsZW1lbnRzIHdpdGggYSBsaXN0IHJvbGUsIHdoaWNoIHN1Z2dlc3RzIGRlZmF1bHQgc3R5bGluZyB3aWxsIGJlIHJlbW92ZWQgKi9cXG51bFtyb2xlPVxcXCJsaXN0XFxcIl0sXFxub2xbcm9sZT1cXFwibGlzdFxcXCJdIHtcXG4gIGxpc3Qtc3R5bGU6IG5vbmU7XFxufVxcblxcbi8qIFNldCBjb3JlIHJvb3QgZGVmYXVsdHMgKi9cXG5odG1sOmZvY3VzLXdpdGhpbiB7XFxuICBzY3JvbGwtYmVoYXZpb3I6IHNtb290aDtcXG59XFxuXFxuLyogU2V0IGNvcmUgYm9keSBkZWZhdWx0cyAqL1xcbmJvZHkge1xcbiAgbWluLWhlaWdodDogMTAwdmg7XFxuICB0ZXh0LXJlbmRlcmluZzogb3B0aW1pemVTcGVlZDtcXG4gIGxpbmUtaGVpZ2h0OiAxLjU7XFxufVxcblxcbi8qIEEgZWxlbWVudHMgdGhhdCBkb24ndCBoYXZlIGEgY2xhc3MgZ2V0IGRlZmF1bHQgc3R5bGVzICovXFxuYTpub3QoW2NsYXNzXSkge1xcbiAgdGV4dC1kZWNvcmF0aW9uLXNraXAtaW5rOiBhdXRvO1xcbn1cXG5cXG4vKiBNYWtlIGltYWdlcyBlYXNpZXIgdG8gd29yayB3aXRoICovXFxuaW1nLFxcbnBpY3R1cmUge1xcbiAgbWF4LXdpZHRoOiAxMDAlO1xcbiAgZGlzcGxheTogYmxvY2s7XFxufVxcblxcbi8qIEluaGVyaXQgZm9udHMgZm9yIGlucHV0cyBhbmQgYnV0dG9ucyAqL1xcbmlucHV0LFxcbmJ1dHRvbixcXG50ZXh0YXJlYSxcXG5zZWxlY3Qge1xcbiAgZm9udDogaW5oZXJpdDtcXG59XFxuXFxuLyogUmVtb3ZlIGFsbCBhbmltYXRpb25zLCB0cmFuc2l0aW9ucyBhbmQgc21vb3RoIHNjcm9sbCBmb3IgcGVvcGxlIHRoYXQgcHJlZmVyIG5vdCB0byBzZWUgdGhlbSAqL1xcbkBtZWRpYSAocHJlZmVycy1yZWR1Y2VkLW1vdGlvbjogcmVkdWNlKSB7XFxuICBodG1sOmZvY3VzLXdpdGhpbiB7XFxuICAgIHNjcm9sbC1iZWhhdmlvcjogYXV0bztcXG4gIH1cXG5cXG4gICosXFxuICAqOjpiZWZvcmUsXFxuICAqOjphZnRlciB7XFxuICAgIGFuaW1hdGlvbi1kdXJhdGlvbjogMC4wMW1zICFpbXBvcnRhbnQ7XFxuICAgIGFuaW1hdGlvbi1pdGVyYXRpb24tY291bnQ6IDEgIWltcG9ydGFudDtcXG4gICAgdHJhbnNpdGlvbi1kdXJhdGlvbjogMC4wMW1zICFpbXBvcnRhbnQ7XFxuICAgIHNjcm9sbC1iZWhhdmlvcjogYXV0byAhaW1wb3J0YW50O1xcbiAgfVxcbn1cXG5cXG5ib2R5IHtcXG4gIGZvbnQtZmFtaWx5OiB2YXIoLS1mb250LXNhbnMpO1xcbiAgcGFkZGluZy1pbmxpbmU6IHZhcigtLXNpemUtNCk7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1ncmF5LTIpO1xcbiAgLyogYmFja2dyb3VuZC1pbWFnZTogdmFyKC0tZ3JhZGllbnQtMjMpOyAqL1xcbn1cXG5cXG4uY29udGFpbmVyIHtcXG4gIG1heC13aWR0aDogNDJyZW07XFxuICBwYWRkaW5nLWlubGluZTogdmFyKC0tc2l6ZS03KTtcXG4gIG1hcmdpbi1pbmxpbmU6IGF1dG87XFxuICBtYXJnaW4tYmxvY2s6IHZhcigtLXNpemUtNyk7XFxuICBib3JkZXI6IDFweCBzb2xpZCB2YXIoLS1ncmF5LTUpO1xcbiAgYm9yZGVyLXJhZGl1czogdmFyKC0tcmFkaXVzLTIpO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tZ3JheS0wKTtcXG4gIC8qIGJhY2tncm91bmQtaW1hZ2U6IHZhcigtLWdyYWRpZW50LTE1KTsgKi9cXG59XFxuXFxuLmxvZ28ge1xcbiAgZm9udC1zaXplOiB2YXIoLS1mb250LXNpemUtNSk7XFxuICBtYXJnaW4tYmxvY2s6IHZhcigtLXNpemUtNyk7XFxuICBib3JkZXItYm90dG9tOiB2YXIoLS1ib3JkZXItc2l6ZS0xKSBkYXNoZWQgdmFyKC0tZ3JheS02KTtcXG59XFxuXFxuaDEsXFxuaDIsXFxuaDMge1xcbiAgY29sb3I6IHZhcigtLWdyYXktOCk7XFxufVxcblxcbi8qICoqKioqKioqKioqKioqKiogKi9cXG4vKiBQcm9qZWN0cyBTZWN0aW9uICovXFxuLnByb2plY3RzIHtcXG4gIG1hcmdpbi1ib3R0b206IHZhcigtLXNpemUtMik7XFxufVxcblxcbi5wcm9qZWN0cy1oZWFkaW5nIHtcXG4gIC8qIGZvbnQtc2l6ZTogdmFyKC0tZm9udC1zaXplLTQpOyAqL1xcbiAgLyogZGlzcGxheTogZmxleDtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICBnYXA6IHZhcigtLXNpemUtMik7ICovXFxuICBtYXJnaW4tYm90dG9tOiB2YXIoLS1zaXplLTIpO1xcbn1cXG5cXG4uYnRuIHtcXG4gIGJvcmRlcjogdmFyKC0tYm9yZGVyLXNpemUtMSkgc29saWQgdmFyKC0tZ3JheS01KTtcXG4gIHBhZGRpbmc6IHZhcigtLXNpemUtMSkgdmFyKC0tc2l6ZS0zKTtcXG4gIGJvcmRlci1yYWRpdXM6IHZhcigtLXJhZGl1cy0zKTtcXG4gIGN1cnNvcjogcG9pbnRlcjtcXG59XFxuXFxuLmJ0bjpob3ZlciB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1ncmF5LTIpO1xcbn1cXG5cXG4uYnRuOmFjdGl2ZSB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1ncmF5LTMpO1xcbn1cXG5cXG4uYWRkIHtcXG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWdyZWVuLTEpO1xcbn1cXG5cXG4uYWRkOmhvdmVyIHtcXG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWdyZWVuLTIpO1xcbn1cXG5cXG4uY2FuY2VsIHtcXG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLXJlZC0xKTtcXG59XFxuXFxuLmNhbmNlbDpob3ZlciB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1yZWQtMik7XFxufVxcblxcbiNwcm9qZWN0LW5hbWUge1xcbiAgYm9yZGVyOiB2YXIoLS1ib3JkZXItc2l6ZS0yKSBzb2xpZCB2YXIoLS1ncmF5LTcpO1xcbiAgcGFkZGluZy1pbmxpbmU6IHZhcigtLXNpemUtMik7XFxuICBib3JkZXItcmFkaXVzOiB2YXIoLS1yYWRpdXMtMyk7XFxufVxcblxcbiNwcm9qZWN0LW5hbWU6Zm9jdXMtdmlzaWJsZSB7XFxuICBvdXRsaW5lOiB2YXIoLS1ib3JkZXItc2l6ZS0yKSBzb2xpZCB2YXIoLS1ncmF5LTcpO1xcbn1cXG5cXG4ucHJvamVjdHMtbGlzdCB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZmxleC13cmFwOiB3cmFwO1xcbiAgZ2FwOiB2YXIoLS1zaXplLTIpO1xcbn1cXG5cXG4ucHJvamVjdHMtbGlzdCA+IGEge1xcbiAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xcbn1cXG5cXG4ucHJvamVjdHMtbGlzdCA+IGE6aG92ZXIsXFxuLnByb2plY3RzLWxpc3QgPiBhOmFjdGl2ZSB7XFxuICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XFxuICBib3JkZXI6IHZhcigtLWJvcmRlci1zaXplLTEpIHNvbGlkIHZhcigtLWdyYXktNyk7XFxuICAvKiBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1ncmF5LTgpOyAqL1xcbiAgYmFja2dyb3VuZC1pbWFnZTogdmFyKC0tZ3JhZGllbnQtMjMpO1xcbiAgY29sb3I6IHZhcigtLWdyYXktMCk7XFxufVxcblxcbi5wcm9qZWN0IHtcXG4gIGJvcmRlcjogdmFyKC0tYm9yZGVyLXNpemUtMSkgc29saWQgdmFyKC0tZ3JheS01KTtcXG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWdyYXktMik7XFxuICBjb2xvcjogdmFyKC0tZ3JheS03KTtcXG4gIGJvcmRlci1yYWRpdXM6IHZhcigtLXJhZGl1cy00KTtcXG4gIHBhZGRpbmc6IHZhcigtLXNpemUtMikgdmFyKC0tc2l6ZS00KTtcXG4gIGxldHRlci1zcGFjaW5nOiB2YXIoLS1mb250LWxldHRlcnNwYWNpbmctMik7XFxufVxcblxcbi5hY3RpdmUge1xcbiAgYm9yZGVyOiB2YXIoLS1ib3JkZXItc2l6ZS0xKSBzb2xpZCB2YXIoLS1ncmF5LTcpO1xcbiAgLyogYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tZ3JheS04KTsgKi9cXG4gIGJhY2tncm91bmQtaW1hZ2U6IHZhcigtLWdyYWRpZW50LTIzKTtcXG4gIGNvbG9yOiB2YXIoLS1ncmF5LTApO1xcbn1cXG5cXG4vKiAqKioqKioqKioqKioqKiogKi9cXG5cXG4vKiAqKioqKioqKioqKioqKiAqL1xcbi8qIFRhc2tzIFNlY3Rpb24gKi9cXG4udGFza3Mge1xcbiAgbWFyZ2luLXRvcDogdmFyKC0tc2l6ZS00KTtcXG59XFxuXFxuLnRhc2tzLWhlYWRpbmcge1xcbiAgbWFyZ2luLWJvdHRvbTogdmFyKC0tc2l6ZS0yKTtcXG59XFxuXFxuLnRhc2sge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICBnYXA6IHZhcigtLXNpemUtMyk7XFxuICBib3JkZXI6IHZhcigtLWJvcmRlci1zaXplLTEpIGRhc2hlZCB2YXIoLS1ncmF5LTcpO1xcbiAgYm9yZGVyLXJhZGl1czogdmFyKC0tcmFkaXVzLTMpO1xcbiAgcGFkZGluZzogdmFyKC0tc2l6ZS0zKTtcXG4gIG1hcmdpbi1ib3R0b206IHZhcigtLXNpemUtMyk7XFxufVxcblxcbi50YXNrOmhvdmVyIHtcXG4gIGJvcmRlci1zdHlsZTogc29saWQ7XFxuICBiYWNrZ3JvdW5kLWltYWdlOiB2YXIoLS1ncmFkaWVudC0yMyk7XFxuICBjb2xvcjogdmFyKC0tZ3JheS0wKTtcXG59XFxuXFxuaW5wdXRbdHlwZT1cXFwiY2hlY2tib3hcXFwiXSB7XFxuICBjdXJzb3I6IHBvaW50ZXI7XFxuICBhcHBlYXJhbmNlOiBub25lO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZjtcXG4gIG1hcmdpbjogMDtcXG5cXG4gIGZvbnQ6IGluaGVyaXQ7XFxuICBjb2xvcjogY3VycmVudENvbG9yO1xcbiAgd2lkdGg6IHZhcigtLXNpemUtNSk7XFxuICBoZWlnaHQ6IHZhcigtLXNpemUtNSk7XFxuICBib3JkZXI6IDAuMTVlbSBzb2xpZCBjdXJyZW50Q29sb3I7XFxuICBib3JkZXItcmFkaXVzOiB2YXIoLS1yYWRpdXMtMik7XFxuICAvKiB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoLTAuMDc1ZW0pOyAqL1xcblxcbiAgZGlzcGxheTogZ3JpZDtcXG4gIHBsYWNlLWNvbnRlbnQ6IGNlbnRlcjtcXG59XFxuXFxuaW5wdXRbdHlwZT1cXFwiY2hlY2tib3hcXFwiXTo6YmVmb3JlIHtcXG4gIGNvbnRlbnQ6IFxcXCJcXFwiO1xcbiAgd2lkdGg6IHZhcigtLXNpemUtMyk7XFxuICBoZWlnaHQ6IHZhcigtLXNpemUtMyk7XFxuICB0cmFuc2Zvcm06IHNjYWxlKDApO1xcbiAgdHJhbnNpdGlvbjogNjBtcyB0cmFuc2Zvcm0gZWFzZS1pbi1vdXQ7XFxuICBib3gtc2hhZG93OiBpbnNldCAxZW0gMWVtIHZhcigtLWdyYXktOCk7XFxuICBib3JkZXItcmFkaXVzOiB2YXIoLS1yYWRpdXMtMSk7XFxufVxcblxcbmlucHV0W3R5cGU9XFxcImNoZWNrYm94XFxcIl06Y2hlY2tlZDo6YmVmb3JlIHtcXG4gIHRyYW5zZm9ybTogc2NhbGUoMSk7XFxufVxcblxcbmlucHV0W3R5cGU9XFxcImNoZWNrYm94XFxcIl06Zm9jdXMge1xcbiAgb3V0bGluZTogbWF4KDJweCwgMC4xNWVtKSBzb2xpZCBjdXJyZW50Q29sb3I7XFxuICBvdXRsaW5lLW9mZnNldDogbWF4KDJweCwgMC4xNWVtKTtcXG59XFxuXFxuLnRhc2stZGV0YWlscyB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xcbiAgZmxleDogMTtcXG59XFxuXFxuLnRhc2staW5mbyB7XFxuICB0ZXh0LWFsaWduOiBlbmQ7XFxufVxcblxcbi5oaWRkZW4ge1xcbiAgZGlzcGxheTogbm9uZTtcXG59XFxuXCJdLFwic291cmNlUm9vdFwiOlwiXCJ9XSk7XG4vLyBFeHBvcnRzXG5leHBvcnQgZGVmYXVsdCBfX19DU1NfTE9BREVSX0VYUE9SVF9fXztcbiIsIlwidXNlIHN0cmljdFwiO1xuXG4vKlxuICBNSVQgTGljZW5zZSBodHRwOi8vd3d3Lm9wZW5zb3VyY2Uub3JnL2xpY2Vuc2VzL21pdC1saWNlbnNlLnBocFxuICBBdXRob3IgVG9iaWFzIEtvcHBlcnMgQHNva3JhXG4qL1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoY3NzV2l0aE1hcHBpbmdUb1N0cmluZykge1xuICB2YXIgbGlzdCA9IFtdOyAvLyByZXR1cm4gdGhlIGxpc3Qgb2YgbW9kdWxlcyBhcyBjc3Mgc3RyaW5nXG5cbiAgbGlzdC50b1N0cmluZyA9IGZ1bmN0aW9uIHRvU3RyaW5nKCkge1xuICAgIHJldHVybiB0aGlzLm1hcChmdW5jdGlvbiAoaXRlbSkge1xuICAgICAgdmFyIGNvbnRlbnQgPSBcIlwiO1xuICAgICAgdmFyIG5lZWRMYXllciA9IHR5cGVvZiBpdGVtWzVdICE9PSBcInVuZGVmaW5lZFwiO1xuXG4gICAgICBpZiAoaXRlbVs0XSkge1xuICAgICAgICBjb250ZW50ICs9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQoaXRlbVs0XSwgXCIpIHtcIik7XG4gICAgICB9XG5cbiAgICAgIGlmIChpdGVtWzJdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAbWVkaWEgXCIuY29uY2F0KGl0ZW1bMl0sIFwiIHtcIik7XG4gICAgICB9XG5cbiAgICAgIGlmIChuZWVkTGF5ZXIpIHtcbiAgICAgICAgY29udGVudCArPSBcIkBsYXllclwiLmNvbmNhdChpdGVtWzVdLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQoaXRlbVs1XSkgOiBcIlwiLCBcIiB7XCIpO1xuICAgICAgfVxuXG4gICAgICBjb250ZW50ICs9IGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcoaXRlbSk7XG5cbiAgICAgIGlmIChuZWVkTGF5ZXIpIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cblxuICAgICAgaWYgKGl0ZW1bMl0pIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cblxuICAgICAgaWYgKGl0ZW1bNF0pIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cblxuICAgICAgcmV0dXJuIGNvbnRlbnQ7XG4gICAgfSkuam9pbihcIlwiKTtcbiAgfTsgLy8gaW1wb3J0IGEgbGlzdCBvZiBtb2R1bGVzIGludG8gdGhlIGxpc3RcblxuXG4gIGxpc3QuaSA9IGZ1bmN0aW9uIGkobW9kdWxlcywgbWVkaWEsIGRlZHVwZSwgc3VwcG9ydHMsIGxheWVyKSB7XG4gICAgaWYgKHR5cGVvZiBtb2R1bGVzID09PSBcInN0cmluZ1wiKSB7XG4gICAgICBtb2R1bGVzID0gW1tudWxsLCBtb2R1bGVzLCB1bmRlZmluZWRdXTtcbiAgICB9XG5cbiAgICB2YXIgYWxyZWFkeUltcG9ydGVkTW9kdWxlcyA9IHt9O1xuXG4gICAgaWYgKGRlZHVwZSkge1xuICAgICAgZm9yICh2YXIgayA9IDA7IGsgPCB0aGlzLmxlbmd0aDsgaysrKSB7XG4gICAgICAgIHZhciBpZCA9IHRoaXNba11bMF07XG5cbiAgICAgICAgaWYgKGlkICE9IG51bGwpIHtcbiAgICAgICAgICBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2lkXSA9IHRydWU7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG5cbiAgICBmb3IgKHZhciBfayA9IDA7IF9rIDwgbW9kdWxlcy5sZW5ndGg7IF9rKyspIHtcbiAgICAgIHZhciBpdGVtID0gW10uY29uY2F0KG1vZHVsZXNbX2tdKTtcblxuICAgICAgaWYgKGRlZHVwZSAmJiBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2l0ZW1bMF1dKSB7XG4gICAgICAgIGNvbnRpbnVlO1xuICAgICAgfVxuXG4gICAgICBpZiAodHlwZW9mIGxheWVyICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICAgIGlmICh0eXBlb2YgaXRlbVs1XSA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgICAgIGl0ZW1bNV0gPSBsYXllcjtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAbGF5ZXJcIi5jb25jYXQoaXRlbVs1XS5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KGl0ZW1bNV0pIDogXCJcIiwgXCIge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bNV0gPSBsYXllcjtcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICBpZiAobWVkaWEpIHtcbiAgICAgICAgaWYgKCFpdGVtWzJdKSB7XG4gICAgICAgICAgaXRlbVsyXSA9IG1lZGlhO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBtZWRpYSBcIi5jb25jYXQoaXRlbVsyXSwgXCIge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bMl0gPSBtZWRpYTtcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICBpZiAoc3VwcG9ydHMpIHtcbiAgICAgICAgaWYgKCFpdGVtWzRdKSB7XG4gICAgICAgICAgaXRlbVs0XSA9IFwiXCIuY29uY2F0KHN1cHBvcnRzKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChpdGVtWzRdLCBcIikge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bNF0gPSBzdXBwb3J0cztcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICBsaXN0LnB1c2goaXRlbSk7XG4gICAgfVxuICB9O1xuXG4gIHJldHVybiBsaXN0O1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoaXRlbSkge1xuICB2YXIgY29udGVudCA9IGl0ZW1bMV07XG4gIHZhciBjc3NNYXBwaW5nID0gaXRlbVszXTtcblxuICBpZiAoIWNzc01hcHBpbmcpIHtcbiAgICByZXR1cm4gY29udGVudDtcbiAgfVxuXG4gIGlmICh0eXBlb2YgYnRvYSA9PT0gXCJmdW5jdGlvblwiKSB7XG4gICAgdmFyIGJhc2U2NCA9IGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KGNzc01hcHBpbmcpKSkpO1xuICAgIHZhciBkYXRhID0gXCJzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtjaGFyc2V0PXV0Zi04O2Jhc2U2NCxcIi5jb25jYXQoYmFzZTY0KTtcbiAgICB2YXIgc291cmNlTWFwcGluZyA9IFwiLyojIFwiLmNvbmNhdChkYXRhLCBcIiAqL1wiKTtcbiAgICB2YXIgc291cmNlVVJMcyA9IGNzc01hcHBpbmcuc291cmNlcy5tYXAoZnVuY3Rpb24gKHNvdXJjZSkge1xuICAgICAgcmV0dXJuIFwiLyojIHNvdXJjZVVSTD1cIi5jb25jYXQoY3NzTWFwcGluZy5zb3VyY2VSb290IHx8IFwiXCIpLmNvbmNhdChzb3VyY2UsIFwiICovXCIpO1xuICAgIH0pO1xuICAgIHJldHVybiBbY29udGVudF0uY29uY2F0KHNvdXJjZVVSTHMpLmNvbmNhdChbc291cmNlTWFwcGluZ10pLmpvaW4oXCJcXG5cIik7XG4gIH1cblxuICByZXR1cm4gW2NvbnRlbnRdLmpvaW4oXCJcXG5cIik7XG59OyIsIlxuICAgICAgaW1wb3J0IEFQSSBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qc1wiO1xuICAgICAgaW1wb3J0IGRvbUFQSSBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0Rm4gZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzXCI7XG4gICAgICBpbXBvcnQgc2V0QXR0cmlidXRlcyBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydFN0eWxlRWxlbWVudCBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qc1wiO1xuICAgICAgaW1wb3J0IHN0eWxlVGFnVHJhbnNmb3JtRm4gZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qc1wiO1xuICAgICAgaW1wb3J0IGNvbnRlbnQsICogYXMgbmFtZWRFeHBvcnQgZnJvbSBcIiEhLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi4vbm9kZV9tb2R1bGVzL3Bvc3Rjc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vc3R5bGUuY3NzXCI7XG4gICAgICBcbiAgICAgIFxuXG52YXIgb3B0aW9ucyA9IHt9O1xuXG5vcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtID0gc3R5bGVUYWdUcmFuc2Zvcm1Gbjtcbm9wdGlvbnMuc2V0QXR0cmlidXRlcyA9IHNldEF0dHJpYnV0ZXM7XG5cbiAgICAgIG9wdGlvbnMuaW5zZXJ0ID0gaW5zZXJ0Rm4uYmluZChudWxsLCBcImhlYWRcIik7XG4gICAgXG5vcHRpb25zLmRvbUFQSSA9IGRvbUFQSTtcbm9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50ID0gaW5zZXJ0U3R5bGVFbGVtZW50O1xuXG52YXIgdXBkYXRlID0gQVBJKGNvbnRlbnQsIG9wdGlvbnMpO1xuXG5cblxuZXhwb3J0ICogZnJvbSBcIiEhLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi4vbm9kZV9tb2R1bGVzL3Bvc3Rjc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vc3R5bGUuY3NzXCI7XG4gICAgICAgZXhwb3J0IGRlZmF1bHQgY29udGVudCAmJiBjb250ZW50LmxvY2FscyA/IGNvbnRlbnQubG9jYWxzIDogdW5kZWZpbmVkO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBzdHlsZXNJbkRPTSA9IFtdO1xuXG5mdW5jdGlvbiBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKSB7XG4gIHZhciByZXN1bHQgPSAtMTtcblxuICBmb3IgKHZhciBpID0gMDsgaSA8IHN0eWxlc0luRE9NLmxlbmd0aDsgaSsrKSB7XG4gICAgaWYgKHN0eWxlc0luRE9NW2ldLmlkZW50aWZpZXIgPT09IGlkZW50aWZpZXIpIHtcbiAgICAgIHJlc3VsdCA9IGk7XG4gICAgICBicmVhaztcbiAgICB9XG4gIH1cblxuICByZXR1cm4gcmVzdWx0O1xufVxuXG5mdW5jdGlvbiBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucykge1xuICB2YXIgaWRDb3VudE1hcCA9IHt9O1xuICB2YXIgaWRlbnRpZmllcnMgPSBbXTtcblxuICBmb3IgKHZhciBpID0gMDsgaSA8IGxpc3QubGVuZ3RoOyBpKyspIHtcbiAgICB2YXIgaXRlbSA9IGxpc3RbaV07XG4gICAgdmFyIGlkID0gb3B0aW9ucy5iYXNlID8gaXRlbVswXSArIG9wdGlvbnMuYmFzZSA6IGl0ZW1bMF07XG4gICAgdmFyIGNvdW50ID0gaWRDb3VudE1hcFtpZF0gfHwgMDtcbiAgICB2YXIgaWRlbnRpZmllciA9IFwiXCIuY29uY2F0KGlkLCBcIiBcIikuY29uY2F0KGNvdW50KTtcbiAgICBpZENvdW50TWFwW2lkXSA9IGNvdW50ICsgMTtcbiAgICB2YXIgaW5kZXhCeUlkZW50aWZpZXIgPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICB2YXIgb2JqID0ge1xuICAgICAgY3NzOiBpdGVtWzFdLFxuICAgICAgbWVkaWE6IGl0ZW1bMl0sXG4gICAgICBzb3VyY2VNYXA6IGl0ZW1bM10sXG4gICAgICBzdXBwb3J0czogaXRlbVs0XSxcbiAgICAgIGxheWVyOiBpdGVtWzVdXG4gICAgfTtcblxuICAgIGlmIChpbmRleEJ5SWRlbnRpZmllciAhPT0gLTEpIHtcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4QnlJZGVudGlmaWVyXS5yZWZlcmVuY2VzKys7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleEJ5SWRlbnRpZmllcl0udXBkYXRlcihvYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICB2YXIgdXBkYXRlciA9IGFkZEVsZW1lbnRTdHlsZShvYmosIG9wdGlvbnMpO1xuICAgICAgb3B0aW9ucy5ieUluZGV4ID0gaTtcbiAgICAgIHN0eWxlc0luRE9NLnNwbGljZShpLCAwLCB7XG4gICAgICAgIGlkZW50aWZpZXI6IGlkZW50aWZpZXIsXG4gICAgICAgIHVwZGF0ZXI6IHVwZGF0ZXIsXG4gICAgICAgIHJlZmVyZW5jZXM6IDFcbiAgICAgIH0pO1xuICAgIH1cblxuICAgIGlkZW50aWZpZXJzLnB1c2goaWRlbnRpZmllcik7XG4gIH1cblxuICByZXR1cm4gaWRlbnRpZmllcnM7XG59XG5cbmZ1bmN0aW9uIGFkZEVsZW1lbnRTdHlsZShvYmosIG9wdGlvbnMpIHtcbiAgdmFyIGFwaSA9IG9wdGlvbnMuZG9tQVBJKG9wdGlvbnMpO1xuICBhcGkudXBkYXRlKG9iaik7XG5cbiAgdmFyIHVwZGF0ZXIgPSBmdW5jdGlvbiB1cGRhdGVyKG5ld09iaikge1xuICAgIGlmIChuZXdPYmopIHtcbiAgICAgIGlmIChuZXdPYmouY3NzID09PSBvYmouY3NzICYmIG5ld09iai5tZWRpYSA9PT0gb2JqLm1lZGlhICYmIG5ld09iai5zb3VyY2VNYXAgPT09IG9iai5zb3VyY2VNYXAgJiYgbmV3T2JqLnN1cHBvcnRzID09PSBvYmouc3VwcG9ydHMgJiYgbmV3T2JqLmxheWVyID09PSBvYmoubGF5ZXIpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuXG4gICAgICBhcGkudXBkYXRlKG9iaiA9IG5ld09iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIGFwaS5yZW1vdmUoKTtcbiAgICB9XG4gIH07XG5cbiAgcmV0dXJuIHVwZGF0ZXI7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGxpc3QsIG9wdGlvbnMpIHtcbiAgb3B0aW9ucyA9IG9wdGlvbnMgfHwge307XG4gIGxpc3QgPSBsaXN0IHx8IFtdO1xuICB2YXIgbGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpO1xuICByZXR1cm4gZnVuY3Rpb24gdXBkYXRlKG5ld0xpc3QpIHtcbiAgICBuZXdMaXN0ID0gbmV3TGlzdCB8fCBbXTtcblxuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgbGFzdElkZW50aWZpZXJzLmxlbmd0aDsgaSsrKSB7XG4gICAgICB2YXIgaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tpXTtcbiAgICAgIHZhciBpbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhdLnJlZmVyZW5jZXMtLTtcbiAgICB9XG5cbiAgICB2YXIgbmV3TGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKG5ld0xpc3QsIG9wdGlvbnMpO1xuXG4gICAgZm9yICh2YXIgX2kgPSAwOyBfaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IF9pKyspIHtcbiAgICAgIHZhciBfaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tfaV07XG5cbiAgICAgIHZhciBfaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihfaWRlbnRpZmllcik7XG5cbiAgICAgIGlmIChzdHlsZXNJbkRPTVtfaW5kZXhdLnJlZmVyZW5jZXMgPT09IDApIHtcbiAgICAgICAgc3R5bGVzSW5ET01bX2luZGV4XS51cGRhdGVyKCk7XG5cbiAgICAgICAgc3R5bGVzSW5ET00uc3BsaWNlKF9pbmRleCwgMSk7XG4gICAgICB9XG4gICAgfVxuXG4gICAgbGFzdElkZW50aWZpZXJzID0gbmV3TGFzdElkZW50aWZpZXJzO1xuICB9O1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIG1lbW8gPSB7fTtcbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuXG5mdW5jdGlvbiBnZXRUYXJnZXQodGFyZ2V0KSB7XG4gIGlmICh0eXBlb2YgbWVtb1t0YXJnZXRdID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgdmFyIHN0eWxlVGFyZ2V0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3Rvcih0YXJnZXQpOyAvLyBTcGVjaWFsIGNhc2UgdG8gcmV0dXJuIGhlYWQgb2YgaWZyYW1lIGluc3RlYWQgb2YgaWZyYW1lIGl0c2VsZlxuXG4gICAgaWYgKHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCAmJiBzdHlsZVRhcmdldCBpbnN0YW5jZW9mIHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCkge1xuICAgICAgdHJ5IHtcbiAgICAgICAgLy8gVGhpcyB3aWxsIHRocm93IGFuIGV4Y2VwdGlvbiBpZiBhY2Nlc3MgdG8gaWZyYW1lIGlzIGJsb2NrZWRcbiAgICAgICAgLy8gZHVlIHRvIGNyb3NzLW9yaWdpbiByZXN0cmljdGlvbnNcbiAgICAgICAgc3R5bGVUYXJnZXQgPSBzdHlsZVRhcmdldC5jb250ZW50RG9jdW1lbnQuaGVhZDtcbiAgICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgICAgLy8gaXN0YW5idWwgaWdub3JlIG5leHRcbiAgICAgICAgc3R5bGVUYXJnZXQgPSBudWxsO1xuICAgICAgfVxuICAgIH1cblxuICAgIG1lbW9bdGFyZ2V0XSA9IHN0eWxlVGFyZ2V0O1xuICB9XG5cbiAgcmV0dXJuIG1lbW9bdGFyZ2V0XTtcbn1cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuXG5cbmZ1bmN0aW9uIGluc2VydEJ5U2VsZWN0b3IoaW5zZXJ0LCBzdHlsZSkge1xuICB2YXIgdGFyZ2V0ID0gZ2V0VGFyZ2V0KGluc2VydCk7XG5cbiAgaWYgKCF0YXJnZXQpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoXCJDb3VsZG4ndCBmaW5kIGEgc3R5bGUgdGFyZ2V0LiBUaGlzIHByb2JhYmx5IG1lYW5zIHRoYXQgdGhlIHZhbHVlIGZvciB0aGUgJ2luc2VydCcgcGFyYW1ldGVyIGlzIGludmFsaWQuXCIpO1xuICB9XG5cbiAgdGFyZ2V0LmFwcGVuZENoaWxkKHN0eWxlKTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBpbnNlcnRCeVNlbGVjdG9yOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKSB7XG4gIHZhciBlbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInN0eWxlXCIpO1xuICBvcHRpb25zLnNldEF0dHJpYnV0ZXMoZWxlbWVudCwgb3B0aW9ucy5hdHRyaWJ1dGVzKTtcbiAgb3B0aW9ucy5pbnNlcnQoZWxlbWVudCwgb3B0aW9ucy5vcHRpb25zKTtcbiAgcmV0dXJuIGVsZW1lbnQ7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gaW5zZXJ0U3R5bGVFbGVtZW50OyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIHNldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcyhzdHlsZUVsZW1lbnQpIHtcbiAgdmFyIG5vbmNlID0gdHlwZW9mIF9fd2VicGFja19ub25jZV9fICE9PSBcInVuZGVmaW5lZFwiID8gX193ZWJwYWNrX25vbmNlX18gOiBudWxsO1xuXG4gIGlmIChub25jZSkge1xuICAgIHN0eWxlRWxlbWVudC5zZXRBdHRyaWJ1dGUoXCJub25jZVwiLCBub25jZSk7XG4gIH1cbn1cblxubW9kdWxlLmV4cG9ydHMgPSBzZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXM7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gYXBwbHkoc3R5bGVFbGVtZW50LCBvcHRpb25zLCBvYmopIHtcbiAgdmFyIGNzcyA9IFwiXCI7XG5cbiAgaWYgKG9iai5zdXBwb3J0cykge1xuICAgIGNzcyArPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KG9iai5zdXBwb3J0cywgXCIpIHtcIik7XG4gIH1cblxuICBpZiAob2JqLm1lZGlhKSB7XG4gICAgY3NzICs9IFwiQG1lZGlhIFwiLmNvbmNhdChvYmoubWVkaWEsIFwiIHtcIik7XG4gIH1cblxuICB2YXIgbmVlZExheWVyID0gdHlwZW9mIG9iai5sYXllciAhPT0gXCJ1bmRlZmluZWRcIjtcblxuICBpZiAobmVlZExheWVyKSB7XG4gICAgY3NzICs9IFwiQGxheWVyXCIuY29uY2F0KG9iai5sYXllci5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KG9iai5sYXllcikgOiBcIlwiLCBcIiB7XCIpO1xuICB9XG5cbiAgY3NzICs9IG9iai5jc3M7XG5cbiAgaWYgKG5lZWRMYXllcikge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuXG4gIGlmIChvYmoubWVkaWEpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cblxuICBpZiAob2JqLnN1cHBvcnRzKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG5cbiAgdmFyIHNvdXJjZU1hcCA9IG9iai5zb3VyY2VNYXA7XG5cbiAgaWYgKHNvdXJjZU1hcCAmJiB0eXBlb2YgYnRvYSAhPT0gXCJ1bmRlZmluZWRcIikge1xuICAgIGNzcyArPSBcIlxcbi8qIyBzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtiYXNlNjQsXCIuY29uY2F0KGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KHNvdXJjZU1hcCkpKSksIFwiICovXCIpO1xuICB9IC8vIEZvciBvbGQgSUVcblxuICAvKiBpc3RhbmJ1bCBpZ25vcmUgaWYgICovXG5cblxuICBvcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtKGNzcywgc3R5bGVFbGVtZW50LCBvcHRpb25zLm9wdGlvbnMpO1xufVxuXG5mdW5jdGlvbiByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGVFbGVtZW50KSB7XG4gIC8vIGlzdGFuYnVsIGlnbm9yZSBpZlxuICBpZiAoc3R5bGVFbGVtZW50LnBhcmVudE5vZGUgPT09IG51bGwpIHtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cblxuICBzdHlsZUVsZW1lbnQucGFyZW50Tm9kZS5yZW1vdmVDaGlsZChzdHlsZUVsZW1lbnQpO1xufVxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5cblxuZnVuY3Rpb24gZG9tQVBJKG9wdGlvbnMpIHtcbiAgdmFyIHN0eWxlRWxlbWVudCA9IG9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpO1xuICByZXR1cm4ge1xuICAgIHVwZGF0ZTogZnVuY3Rpb24gdXBkYXRlKG9iaikge1xuICAgICAgYXBwbHkoc3R5bGVFbGVtZW50LCBvcHRpb25zLCBvYmopO1xuICAgIH0sXG4gICAgcmVtb3ZlOiBmdW5jdGlvbiByZW1vdmUoKSB7XG4gICAgICByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGVFbGVtZW50KTtcbiAgICB9XG4gIH07XG59XG5cbm1vZHVsZS5leHBvcnRzID0gZG9tQVBJOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIHN0eWxlVGFnVHJhbnNmb3JtKGNzcywgc3R5bGVFbGVtZW50KSB7XG4gIGlmIChzdHlsZUVsZW1lbnQuc3R5bGVTaGVldCkge1xuICAgIHN0eWxlRWxlbWVudC5zdHlsZVNoZWV0LmNzc1RleHQgPSBjc3M7XG4gIH0gZWxzZSB7XG4gICAgd2hpbGUgKHN0eWxlRWxlbWVudC5maXJzdENoaWxkKSB7XG4gICAgICBzdHlsZUVsZW1lbnQucmVtb3ZlQ2hpbGQoc3R5bGVFbGVtZW50LmZpcnN0Q2hpbGQpO1xuICAgIH1cblxuICAgIHN0eWxlRWxlbWVudC5hcHBlbmRDaGlsZChkb2N1bWVudC5jcmVhdGVUZXh0Tm9kZShjc3MpKTtcbiAgfVxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IHN0eWxlVGFnVHJhbnNmb3JtOyIsImV4cG9ydCBjb25zdCBTdG9yYWdlID0gKGZ1bmN0aW9uICgpIHtcbiAgbGV0IHByb2plY3RzID0gW107XG4gIGxldCBjdXJyZW50UHJvamVjdElEID0gXCJcIjtcblxuICBjb25zdCBhZGRQcm9qZWN0ID0gZnVuY3Rpb24gKHByb2plY3QpIHtcbiAgICBwcm9qZWN0cy5wdXNoKHByb2plY3QpO1xuICB9O1xuXG4gIGNvbnN0IHNldEN1cnJlbnRQcm9qZWN0ID0gZnVuY3Rpb24gKHByb2plY3RJRCkge1xuICAgIGN1cnJlbnRQcm9qZWN0SUQgPSBwcm9qZWN0SUQ7XG4gIH07XG5cbiAgcmV0dXJuIHtcbiAgICBwcm9qZWN0cyxcbiAgICBjdXJyZW50UHJvamVjdElELFxuICAgIGFkZFByb2plY3QsXG4gICAgc2V0Q3VycmVudFByb2plY3QsXG4gIH07XG59KSgpO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbmltcG9ydCB7IFN0b3JhZ2UgfSBmcm9tIFwiLi9zdG9yYWdlXCI7XG5cbmNvbnN0IGJ0bkFkZFByb2plY3QgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLmJ0bi1hZGQtcHJvamVjdFwiKTtcbmNvbnN0IHByb2plY3RGb3JtID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5wcm9qZWN0LWZvcm1cIik7XG5jb25zdCBpbnB1dFByb2plY3ROYW1lID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNwcm9qZWN0LW5hbWVcIik7XG5jb25zdCBidG5BZGQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLmFkZFwiKTtcbmNvbnN0IGJ0bkNhbmNlbCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuY2FuY2VsXCIpO1xuY29uc3QgcHJvamVjdHNMaXN0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5wcm9qZWN0cy1saXN0XCIpO1xuXG5jb25zdCB0b2dnbGVQcm9qZWN0SW5wdXQgPSBmdW5jdGlvbiAoKSB7XG4gIGJ0bkFkZFByb2plY3QuY2xhc3NMaXN0LnRvZ2dsZShcImhpZGRlblwiKTtcbiAgcHJvamVjdEZvcm0uY2xhc3NMaXN0LnRvZ2dsZShcImhpZGRlblwiKTtcbn07XG5cbmJ0bkFkZFByb2plY3QuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIGZ1bmN0aW9uICgpIHtcbiAgdG9nZ2xlUHJvamVjdElucHV0KCk7XG4gIGlucHV0UHJvamVjdE5hbWUuZm9jdXMoKTtcbiAgaW5wdXRQcm9qZWN0TmFtZS52YWx1ZSA9IFwiXCI7XG59KTtcblxuYnRuQ2FuY2VsLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCB0b2dnbGVQcm9qZWN0SW5wdXQpO1xuIiwiLy8gVGhlIG1vZHVsZSBjYWNoZVxudmFyIF9fd2VicGFja19tb2R1bGVfY2FjaGVfXyA9IHt9O1xuXG4vLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcblx0dmFyIGNhY2hlZE1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF07XG5cdGlmIChjYWNoZWRNb2R1bGUgIT09IHVuZGVmaW5lZCkge1xuXHRcdHJldHVybiBjYWNoZWRNb2R1bGUuZXhwb3J0cztcblx0fVxuXHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuXHR2YXIgbW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXSA9IHtcblx0XHRpZDogbW9kdWxlSWQsXG5cdFx0Ly8gbm8gbW9kdWxlLmxvYWRlZCBuZWVkZWRcblx0XHRleHBvcnRzOiB7fVxuXHR9O1xuXG5cdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuXHRfX3dlYnBhY2tfbW9kdWxlc19fW21vZHVsZUlkXShtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuXHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuXHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG59XG5cbiIsIi8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSAobW9kdWxlKSA9PiB7XG5cdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuXHRcdCgpID0+IChtb2R1bGVbJ2RlZmF1bHQnXSkgOlxuXHRcdCgpID0+IChtb2R1bGUpO1xuXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCB7IGE6IGdldHRlciB9KTtcblx0cmV0dXJuIGdldHRlcjtcbn07IiwiLy8gZGVmaW5lIGdldHRlciBmdW5jdGlvbnMgZm9yIGhhcm1vbnkgZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5kID0gKGV4cG9ydHMsIGRlZmluaXRpb24pID0+IHtcblx0Zm9yKHZhciBrZXkgaW4gZGVmaW5pdGlvbikge1xuXHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhkZWZpbml0aW9uLCBrZXkpICYmICFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywga2V5KSkge1xuXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIGtleSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGRlZmluaXRpb25ba2V5XSB9KTtcblx0XHR9XG5cdH1cbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5vID0gKG9iaiwgcHJvcCkgPT4gKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIHByb3ApKSIsIi8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uciA9IChleHBvcnRzKSA9PiB7XG5cdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuXHR9XG5cdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18ubmMgPSB1bmRlZmluZWQ7IiwiaW1wb3J0IFwiLi9zdHlsZS5jc3NcIjtcbmltcG9ydCBcIi4vdWlcIjtcbiJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==