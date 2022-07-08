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
___CSS_LOADER_EXPORT___.push([module.id, "\n:root {\n  --gray-2: #e9ecef;\n  --gray-0: #f8f9fa;\n  --gray-5: #adb5bd;\n  --gray-8: #343a40;\n  --gray-7: #495057;\n  --gray-6: #868e96;\n  --font-sans: system-ui,-apple-system,Segoe UI,Roboto,Ubuntu,Cantarell,Noto Sans,sans-serif;\n  --size-4: 1.25rem;\n  --size-7: 2rem;\n  --radius-2: 5px;\n  --size-2: .5rem;\n  --font-size-5: 2rem;\n  --border-size-1: 1px;\n  --size-1: .25rem;\n  --size-3: 1rem;\n  --radius-3: 1rem;\n  --gray-3: #dee2e6;\n  --green-1: #d3f9d8;\n  --green-2: #b2f2bb;\n  --red-1: #ffe3e3;\n  --red-2: #ffc9c9;\n  --border-size-2: 2px;\n  --gradient-23: linear-gradient(to bottom right,#536976,#292E49);\n  --radius-4: 2rem;\n  --font-letterspacing-2: .050em;\n  --size-5: 1.5rem;\n  --radius-1: 2px;\n}\n\n/* Box sizing rules */\n*,\n*::before,\n*::after {\n  box-sizing: border-box;\n}\n\n/* Remove default margin */\nbody,\nh1,\nh2,\nh3,\nh4,\np,\nfigure,\nblockquote,\ndl,\ndd {\n  margin: 0;\n}\n\n/* Remove list styles on ul, ol elements with a list role, which suggests default styling will be removed */\nul[role=\"list\"],\nol[role=\"list\"] {\n  list-style: none;\n}\n\n/* Set core root defaults */\nhtml:focus-within {\n  scroll-behavior: smooth;\n}\n\n/* Set core body defaults */\nbody {\n  min-height: 100vh;\n  text-rendering: optimizeSpeed;\n  line-height: 1.5;\n}\n\n/* A elements that don't have a class get default styles */\na:not([class]) {\n  -webkit-text-decoration-skip: ink;\n          text-decoration-skip-ink: auto;\n}\n\n/* Make images easier to work with */\nimg,\npicture {\n  max-width: 100%;\n  display: block;\n}\n\n/* Inherit fonts for inputs and buttons */\ninput,\nbutton,\ntextarea,\nselect {\n  font: inherit;\n}\n\n/* Remove all animations, transitions and smooth scroll for people that prefer not to see them */\n@media (prefers-reduced-motion: reduce) {\n  html:focus-within {\n    scroll-behavior: auto;\n  }\n\n  *,\n  *::before,\n  *::after {\n    -webkit-animation-duration: 0.01ms !important;\n            animation-duration: 0.01ms !important;\n    -webkit-animation-iteration-count: 1 !important;\n            animation-iteration-count: 1 !important;\n    transition-duration: 0.01ms !important;\n    scroll-behavior: auto !important;\n  }\n}\n\n/* ********************************* */\n\n:root {\n  --bg-color: var(--gray-2);\n  --container-bg-color: var(--gray-0);\n  --container-border-color: var(--gray-5);\n  --hdg-color: var(--gray-8);\n}\n\n:root.dark {\n  --bg-color: var(--gray-8);\n  --container-bg-color: var(--gray-7);\n  --container-border-color: var(--gray-6);\n  --hdg-color: var(--gray-2);\n}\n\nbody {\n  font-family: var(--font-sans);\n  padding-inline: var(--size-4);\n  background-color: var(--bg-color);\n  /* background-image: var(--gradient-23); */\n}\n\n.container {\n  position: relative;\n  max-width: 42rem;\n  padding-inline: var(--size-7);\n  margin-inline: auto;\n  margin-block: var(--size-7);\n  border: 1px solid var(--container-border-color);\n  border-radius: var(--radius-2);\n  background-color: var(--container-bg-color);\n  /* background-image: var(--gradient-15); */\n}\n\n.theme-switch {\n  position: absolute;\n  top: var(--size-2);\n  right: var(--size-2);\n}\n\n.logo {\n  font-size: var(--font-size-5);\n  margin-block: var(--size-7);\n  border-bottom: var(--border-size-1) dashed var(--gray-6);\n}\n\nh1,\nh2,\nh3 {\n  color: var(--hdg-color);\n}\n\n/* **************** */\n/* Projects Section */\n.projects {\n  margin-bottom: var(--size-2);\n}\n\n.projects-heading {\n  /* font-size: var(--font-size-4); */\n  /* display: flex;\n  align-items: center;\n  gap: var(--size-2); */\n  margin-bottom: var(--size-2);\n}\n\n.btn {\n  border: var(--border-size-1) solid var(--gray-5);\n  padding: var(--size-1) var(--size-3);\n  border-radius: var(--radius-3);\n  cursor: pointer;\n}\n\n.btn:hover {\n  background-color: var(--gray-2);\n}\n\n.btn:active {\n  background-color: var(--gray-3);\n}\n\n.add {\n  background-color: var(--green-1);\n}\n\n.add:hover {\n  background-color: var(--green-2);\n}\n\n.cancel {\n  background-color: var(--red-1);\n}\n\n.cancel:hover {\n  background-color: var(--red-2);\n}\n\n#project-name {\n  border: var(--border-size-2) solid var(--gray-7);\n  padding-inline: var(--size-2);\n  border-radius: var(--radius-3);\n}\n\n#project-name:focus-visible {\n  outline: var(--border-size-2) solid var(--gray-7);\n}\n\n.projects-list {\n  display: flex;\n  flex-wrap: wrap;\n  gap: var(--size-2);\n}\n\n.projects-list > a {\n  text-decoration: none;\n}\n\n.projects-list > a:hover,\n.projects-list > a:active {\n  text-decoration: none;\n  border: var(--border-size-1) solid var(--gray-7);\n  /* background-color: var(--gray-8); */\n  background-image: var(--gradient-23);\n  color: var(--gray-0);\n}\n\n.project {\n  border: var(--border-size-1) solid var(--gray-5);\n  background-color: var(--gray-2);\n  color: var(--gray-7);\n  border-radius: var(--radius-4);\n  padding: var(--size-2) var(--size-4);\n  letter-spacing: var(--font-letterspacing-2);\n}\n\n.active {\n  border: var(--border-size-1) solid var(--gray-7);\n  /* background-color: var(--gray-8); */\n  background-image: var(--gradient-23);\n  color: var(--gray-0);\n}\n\n/* *************** */\n\n/* ************** */\n/* Tasks Section */\n.tasks {\n  margin-top: var(--size-4);\n}\n\n.tasks-heading {\n  margin-bottom: var(--size-2);\n}\n\n.task {\n  display: flex;\n  align-items: center;\n  gap: var(--size-3);\n  border: var(--border-size-1) dashed var(--gray-7);\n  border-radius: var(--radius-3);\n  padding: var(--size-3);\n  margin-bottom: var(--size-3);\n}\n\n.task:hover {\n  border-style: solid;\n  background-image: var(--gradient-23);\n  color: var(--gray-0);\n}\n\ninput[type=\"checkbox\"] {\n  cursor: pointer;\n  -webkit-appearance: none;\n     -moz-appearance: none;\n          appearance: none;\n  background-color: #fff;\n  margin: 0;\n\n  font: inherit;\n  color: currentColor;\n  width: var(--size-5);\n  height: var(--size-5);\n  border: 0.15em solid currentColor;\n  border-radius: var(--radius-2);\n  /* transform: translateY(-0.075em); */\n\n  display: grid;\n  place-content: center;\n}\n\ninput[type=\"checkbox\"]::before {\n  content: \"\";\n  width: var(--size-3);\n  height: var(--size-3);\n  transform: scale(0);\n  transition: 60ms transform ease-in-out;\n  box-shadow: inset 1em 1em var(--gray-8);\n  border-radius: var(--radius-1);\n}\n\ninput[type=\"checkbox\"]:checked::before {\n  transform: scale(1);\n}\n\ninput[type=\"checkbox\"]:focus {\n  outline: max(2px, 0.15em) solid currentColor;\n  outline-offset: max(2px, 0.15em);\n}\n\n.task-details {\n  display: flex;\n  justify-content: space-between;\n  flex: 1;\n}\n\n.task-info {\n  text-align: end;\n}\n\n.hidden {\n  display: none;\n}\n", "",{"version":3,"sources":["<no source>","webpack://./src/style.css"],"names":[],"mappings":"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","sourcesContent":[null,"/* Box sizing rules */\n*,\n*::before,\n*::after {\n  box-sizing: border-box;\n}\n\n/* Remove default margin */\nbody,\nh1,\nh2,\nh3,\nh4,\np,\nfigure,\nblockquote,\ndl,\ndd {\n  margin: 0;\n}\n\n/* Remove list styles on ul, ol elements with a list role, which suggests default styling will be removed */\nul[role=\"list\"],\nol[role=\"list\"] {\n  list-style: none;\n}\n\n/* Set core root defaults */\nhtml:focus-within {\n  scroll-behavior: smooth;\n}\n\n/* Set core body defaults */\nbody {\n  min-height: 100vh;\n  text-rendering: optimizeSpeed;\n  line-height: 1.5;\n}\n\n/* A elements that don't have a class get default styles */\na:not([class]) {\n  text-decoration-skip-ink: auto;\n}\n\n/* Make images easier to work with */\nimg,\npicture {\n  max-width: 100%;\n  display: block;\n}\n\n/* Inherit fonts for inputs and buttons */\ninput,\nbutton,\ntextarea,\nselect {\n  font: inherit;\n}\n\n/* Remove all animations, transitions and smooth scroll for people that prefer not to see them */\n@media (prefers-reduced-motion: reduce) {\n  html:focus-within {\n    scroll-behavior: auto;\n  }\n\n  *,\n  *::before,\n  *::after {\n    animation-duration: 0.01ms !important;\n    animation-iteration-count: 1 !important;\n    transition-duration: 0.01ms !important;\n    scroll-behavior: auto !important;\n  }\n}\n\n/* ********************************* */\n\n:root {\n  --bg-color: var(--gray-2);\n  --container-bg-color: var(--gray-0);\n  --container-border-color: var(--gray-5);\n  --hdg-color: var(--gray-8);\n}\n\n:root.dark {\n  --bg-color: var(--gray-8);\n  --container-bg-color: var(--gray-7);\n  --container-border-color: var(--gray-6);\n  --hdg-color: var(--gray-2);\n}\n\nbody {\n  font-family: var(--font-sans);\n  padding-inline: var(--size-4);\n  background-color: var(--bg-color);\n  /* background-image: var(--gradient-23); */\n}\n\n.container {\n  position: relative;\n  max-width: 42rem;\n  padding-inline: var(--size-7);\n  margin-inline: auto;\n  margin-block: var(--size-7);\n  border: 1px solid var(--container-border-color);\n  border-radius: var(--radius-2);\n  background-color: var(--container-bg-color);\n  /* background-image: var(--gradient-15); */\n}\n\n.theme-switch {\n  position: absolute;\n  top: var(--size-2);\n  right: var(--size-2);\n}\n\n.logo {\n  font-size: var(--font-size-5);\n  margin-block: var(--size-7);\n  border-bottom: var(--border-size-1) dashed var(--gray-6);\n}\n\nh1,\nh2,\nh3 {\n  color: var(--hdg-color);\n}\n\n/* **************** */\n/* Projects Section */\n.projects {\n  margin-bottom: var(--size-2);\n}\n\n.projects-heading {\n  /* font-size: var(--font-size-4); */\n  /* display: flex;\n  align-items: center;\n  gap: var(--size-2); */\n  margin-bottom: var(--size-2);\n}\n\n.btn {\n  border: var(--border-size-1) solid var(--gray-5);\n  padding: var(--size-1) var(--size-3);\n  border-radius: var(--radius-3);\n  cursor: pointer;\n}\n\n.btn:hover {\n  background-color: var(--gray-2);\n}\n\n.btn:active {\n  background-color: var(--gray-3);\n}\n\n.add {\n  background-color: var(--green-1);\n}\n\n.add:hover {\n  background-color: var(--green-2);\n}\n\n.cancel {\n  background-color: var(--red-1);\n}\n\n.cancel:hover {\n  background-color: var(--red-2);\n}\n\n#project-name {\n  border: var(--border-size-2) solid var(--gray-7);\n  padding-inline: var(--size-2);\n  border-radius: var(--radius-3);\n}\n\n#project-name:focus-visible {\n  outline: var(--border-size-2) solid var(--gray-7);\n}\n\n.projects-list {\n  display: flex;\n  flex-wrap: wrap;\n  gap: var(--size-2);\n}\n\n.projects-list > a {\n  text-decoration: none;\n}\n\n.projects-list > a:hover,\n.projects-list > a:active {\n  text-decoration: none;\n  border: var(--border-size-1) solid var(--gray-7);\n  /* background-color: var(--gray-8); */\n  background-image: var(--gradient-23);\n  color: var(--gray-0);\n}\n\n.project {\n  border: var(--border-size-1) solid var(--gray-5);\n  background-color: var(--gray-2);\n  color: var(--gray-7);\n  border-radius: var(--radius-4);\n  padding: var(--size-2) var(--size-4);\n  letter-spacing: var(--font-letterspacing-2);\n}\n\n.active {\n  border: var(--border-size-1) solid var(--gray-7);\n  /* background-color: var(--gray-8); */\n  background-image: var(--gradient-23);\n  color: var(--gray-0);\n}\n\n/* *************** */\n\n/* ************** */\n/* Tasks Section */\n.tasks {\n  margin-top: var(--size-4);\n}\n\n.tasks-heading {\n  margin-bottom: var(--size-2);\n}\n\n.task {\n  display: flex;\n  align-items: center;\n  gap: var(--size-3);\n  border: var(--border-size-1) dashed var(--gray-7);\n  border-radius: var(--radius-3);\n  padding: var(--size-3);\n  margin-bottom: var(--size-3);\n}\n\n.task:hover {\n  border-style: solid;\n  background-image: var(--gradient-23);\n  color: var(--gray-0);\n}\n\ninput[type=\"checkbox\"] {\n  cursor: pointer;\n  appearance: none;\n  background-color: #fff;\n  margin: 0;\n\n  font: inherit;\n  color: currentColor;\n  width: var(--size-5);\n  height: var(--size-5);\n  border: 0.15em solid currentColor;\n  border-radius: var(--radius-2);\n  /* transform: translateY(-0.075em); */\n\n  display: grid;\n  place-content: center;\n}\n\ninput[type=\"checkbox\"]::before {\n  content: \"\";\n  width: var(--size-3);\n  height: var(--size-3);\n  transform: scale(0);\n  transition: 60ms transform ease-in-out;\n  box-shadow: inset 1em 1em var(--gray-8);\n  border-radius: var(--radius-1);\n}\n\ninput[type=\"checkbox\"]:checked::before {\n  transform: scale(1);\n}\n\ninput[type=\"checkbox\"]:focus {\n  outline: max(2px, 0.15em) solid currentColor;\n  outline-offset: max(2px, 0.15em);\n}\n\n.task-details {\n  display: flex;\n  justify-content: space-between;\n  flex: 1;\n}\n\n.task-info {\n  text-align: end;\n}\n\n.hidden {\n  display: none;\n}\n"],"sourceRoot":""}]);
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

/***/ "./node_modules/uuid/dist/esm-browser/regex.js":
/*!*****************************************************!*\
  !*** ./node_modules/uuid/dist/esm-browser/regex.js ***!
  \*****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (/^(?:[0-9a-f]{8}-[0-9a-f]{4}-[1-5][0-9a-f]{3}-[89ab][0-9a-f]{3}-[0-9a-f]{12}|00000000-0000-0000-0000-000000000000)$/i);

/***/ }),

/***/ "./node_modules/uuid/dist/esm-browser/rng.js":
/*!***************************************************!*\
  !*** ./node_modules/uuid/dist/esm-browser/rng.js ***!
  \***************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ rng)
/* harmony export */ });
// Unique ID creation requires a high quality random # generator. In the browser we therefore
// require the crypto API and do not support built-in fallback to lower quality random number
// generators (like Math.random()).
var getRandomValues;
var rnds8 = new Uint8Array(16);
function rng() {
  // lazy load so that environments that need to polyfill have a chance to do so
  if (!getRandomValues) {
    // getRandomValues needs to be invoked in a context where "this" is a Crypto implementation. Also,
    // find the complete implementation of crypto (msCrypto) on IE11.
    getRandomValues = typeof crypto !== 'undefined' && crypto.getRandomValues && crypto.getRandomValues.bind(crypto) || typeof msCrypto !== 'undefined' && typeof msCrypto.getRandomValues === 'function' && msCrypto.getRandomValues.bind(msCrypto);

    if (!getRandomValues) {
      throw new Error('crypto.getRandomValues() not supported. See https://github.com/uuidjs/uuid#getrandomvalues-not-supported');
    }
  }

  return getRandomValues(rnds8);
}

/***/ }),

/***/ "./node_modules/uuid/dist/esm-browser/stringify.js":
/*!*********************************************************!*\
  !*** ./node_modules/uuid/dist/esm-browser/stringify.js ***!
  \*********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _validate_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./validate.js */ "./node_modules/uuid/dist/esm-browser/validate.js");

/**
 * Convert array of 16 byte values to UUID string format of the form:
 * XXXXXXXX-XXXX-XXXX-XXXX-XXXXXXXXXXXX
 */

var byteToHex = [];

for (var i = 0; i < 256; ++i) {
  byteToHex.push((i + 0x100).toString(16).substr(1));
}

function stringify(arr) {
  var offset = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 0;
  // Note: Be careful editing this code!  It's been tuned for performance
  // and works in ways you may not expect. See https://github.com/uuidjs/uuid/pull/434
  var uuid = (byteToHex[arr[offset + 0]] + byteToHex[arr[offset + 1]] + byteToHex[arr[offset + 2]] + byteToHex[arr[offset + 3]] + '-' + byteToHex[arr[offset + 4]] + byteToHex[arr[offset + 5]] + '-' + byteToHex[arr[offset + 6]] + byteToHex[arr[offset + 7]] + '-' + byteToHex[arr[offset + 8]] + byteToHex[arr[offset + 9]] + '-' + byteToHex[arr[offset + 10]] + byteToHex[arr[offset + 11]] + byteToHex[arr[offset + 12]] + byteToHex[arr[offset + 13]] + byteToHex[arr[offset + 14]] + byteToHex[arr[offset + 15]]).toLowerCase(); // Consistency check for valid UUID.  If this throws, it's likely due to one
  // of the following:
  // - One or more input array values don't map to a hex octet (leading to
  // "undefined" in the uuid)
  // - Invalid input values for the RFC `version` or `variant` fields

  if (!(0,_validate_js__WEBPACK_IMPORTED_MODULE_0__["default"])(uuid)) {
    throw TypeError('Stringified UUID is invalid');
  }

  return uuid;
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (stringify);

/***/ }),

/***/ "./node_modules/uuid/dist/esm-browser/v4.js":
/*!**************************************************!*\
  !*** ./node_modules/uuid/dist/esm-browser/v4.js ***!
  \**************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _rng_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./rng.js */ "./node_modules/uuid/dist/esm-browser/rng.js");
/* harmony import */ var _stringify_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./stringify.js */ "./node_modules/uuid/dist/esm-browser/stringify.js");



function v4(options, buf, offset) {
  options = options || {};
  var rnds = options.random || (options.rng || _rng_js__WEBPACK_IMPORTED_MODULE_0__["default"])(); // Per 4.4, set bits for version and `clock_seq_hi_and_reserved`

  rnds[6] = rnds[6] & 0x0f | 0x40;
  rnds[8] = rnds[8] & 0x3f | 0x80; // Copy bytes to buffer, if provided

  if (buf) {
    offset = offset || 0;

    for (var i = 0; i < 16; ++i) {
      buf[offset + i] = rnds[i];
    }

    return buf;
  }

  return (0,_stringify_js__WEBPACK_IMPORTED_MODULE_1__["default"])(rnds);
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (v4);

/***/ }),

/***/ "./node_modules/uuid/dist/esm-browser/validate.js":
/*!********************************************************!*\
  !*** ./node_modules/uuid/dist/esm-browser/validate.js ***!
  \********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _regex_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./regex.js */ "./node_modules/uuid/dist/esm-browser/regex.js");


function validate(uuid) {
  return typeof uuid === 'string' && _regex_js__WEBPACK_IMPORTED_MODULE_0__["default"].test(uuid);
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (validate);

/***/ }),

/***/ "./src/project.js":
/*!************************!*\
  !*** ./src/project.js ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Project": () => (/* binding */ Project)
/* harmony export */ });
/* harmony import */ var uuid__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! uuid */ "./node_modules/uuid/dist/esm-browser/v4.js");


class Project {
  constructor(name) {
    this.name = name;
    this.id = (0,uuid__WEBPACK_IMPORTED_MODULE_0__["default"])();
  }
}


/***/ }),

/***/ "./src/storage.js":
/*!************************!*\
  !*** ./src/storage.js ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "storage": () => (/* binding */ storage)
/* harmony export */ });
class Storage {
  constructor() {
    this.projects = [];
    this.currentProjectID = "";
    this.tasks = [];
  }

  addProject(project) {
    this.projects.push(project);
    this.currentProjectID = project.id;
  }

  setCurrentProject(projectID) {
    this.currentProjectID = projectID;
  }
}

const storage = new Storage();


/***/ }),

/***/ "./src/ui.js":
/*!*******************!*\
  !*** ./src/ui.js ***!
  \*******************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _storage__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./storage */ "./src/storage.js");
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./utils */ "./src/utils.js");





const btnAddProject = document.querySelector(".btn-add-project");
const projectForm = document.querySelector(".project-form");
const inputProjectName = document.querySelector("#project-name");
const btnAdd = document.querySelector(".add");
const btnCancel = document.querySelector(".cancel");
const projectsList = document.querySelector(".projects-list");
const btnThemeSwitch = document.querySelector(".theme-switch");

const toggleDark = function () {
  document.documentElement.classList.toggle("dark");
};

const toggleProjectInput = function () {
  btnAddProject.classList.toggle("hidden");
  projectForm.classList.toggle("hidden");
};

// eye protection
btnThemeSwitch.addEventListener("click", toggleDark);

const highlightCurrentProject = function () {
  const currentProjectID = _storage__WEBPACK_IMPORTED_MODULE_0__.storage.currentProjectID;
  const project = Array.from(projectsList.children).find(
    (el) => el.dataset.id === currentProjectID
  );
  Array.from(projectsList.children).forEach((el) =>
    el.classList.remove("active")
  );
  project.classList.add("active");
};

const redrawProjects = function () {
  projectsList.innerHTML = "";
  _storage__WEBPACK_IMPORTED_MODULE_0__.storage.projects.forEach((project) => {
    projectsList.insertAdjacentHTML(
      "afterbegin",
      `<a href="#" class="project" data-id="${project.id}">${project.name}</a>`
    );
  });
  highlightCurrentProject();
};

btnAddProject.addEventListener("click", function () {
  toggleProjectInput();
  inputProjectName.focus();
  inputProjectName.value = "";
});

btnCancel.addEventListener("click", toggleProjectInput);

btnAdd.addEventListener("click", function () {
  const projectName = inputProjectName.value;
  (0,_utils__WEBPACK_IMPORTED_MODULE_1__.createProject)(projectName);
  redrawProjects();
  inputProjectName.value = "";
});

projectsList.addEventListener("click", function (e) {
  if (!e.target.classList.contains("project")) return;
  _storage__WEBPACK_IMPORTED_MODULE_0__.storage.setCurrentProject(e.target.dataset.id);
  highlightCurrentProject();
});


/***/ }),

/***/ "./src/utils.js":
/*!**********************!*\
  !*** ./src/utils.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "createProject": () => (/* binding */ createProject)
/* harmony export */ });
/* harmony import */ var _project__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./project */ "./src/project.js");
/* harmony import */ var _storage__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./storage */ "./src/storage.js");



const createProject = function (projectName) {
  const project = new _project__WEBPACK_IMPORTED_MODULE_0__.Project(projectName);
  _storage__WEBPACK_IMPORTED_MODULE_1__.storage.addProject(project);
};


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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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V0FBVyxXQUFXLFdBQVcsV0FBVyxVQUFVLFdBQVcsV0FBVyxXQUFXLFdBQVcsV0FBVyxXQUFXLFdBQVcsV0FBVyxXQUFXLFdBQVcsV0FBVyxLQUFLLE1BQU0sWUFBWSxRQUFRLFlBQVksT0FBTyxZQUFZLGVBQWUsVUFBVSxNQUFNLFlBQVksT0FBTyxZQUFZLE9BQU8sWUFBWSxNQUFNLFlBQVksT0FBTyxZQUFZLE1BQU0sWUFBWSxhQUFhLGFBQWEsT0FBTyxZQUFZLE1BQU0sWUFBWSxhQUFhLE9BQU8sWUFBWSxPQUFPLFVBQVUsVUFBVSxPQUFPLFlBQVksU0FBUyxVQUFVLE1BQU0sWUFBWSxNQUFNLEtBQUssWUFBWSxPQUFPLE9BQU8sWUFBWSxhQUFhLGFBQWEsYUFBYSxhQUFhLGFBQWEsTUFBTSxNQUFNLGFBQWEsTUFBTSxZQUFZLGFBQWEsYUFBYSxhQUFhLE9BQU8sS0FBSyxZQUFZLGFBQWEsYUFBYSxhQUFhLE9BQU8sS0FBSyxZQUFZLGFBQWEsYUFBYSxhQUFhLE9BQU8sS0FBSyxZQUFZLGFBQWEsYUFBYSxhQUFhLGFBQWEsYUFBYSxhQUFhLGFBQWEsYUFBYSxPQUFPLEtBQUssWUFBWSxhQUFhLGFBQWEsT0FBTyxLQUFLLFlBQVksYUFBYSxhQUFhLE9BQU8sT0FBTyxZQUFZLE9BQU8sWUFBWSxhQUFhLE1BQU0sWUFBWSxPQUFPLEtBQUssWUFBWSxPQUFPLE9BQU8sYUFBYSxPQUFPLEtBQUssWUFBWSxhQUFhLGFBQWEsV0FBVyxPQUFPLEtBQUssWUFBWSxPQUFPLEtBQUssWUFBWSxPQUFPLEtBQUssWUFBWSxPQUFPLEtBQUssWUFBWSxPQUFPLEtBQUssWUFBWSxPQUFPLEtBQUssWUFBWSxPQUFPLEtBQUssWUFBWSxhQUFhLGFBQWEsT0FBTyxLQUFLLFlBQVksT0FBTyxLQUFLLFVBQVUsVUFBVSxZQUFZLE9BQU8sS0FBSyxZQUFZLE9BQU8sTUFBTSxZQUFZLGFBQWEsYUFBYSxhQUFhLGFBQWEsT0FBTyxLQUFLLFlBQVksYUFBYSxhQUFhLGFBQWEsYUFBYSxhQUFhLE9BQU8sS0FBSyxZQUFZLGFBQWEs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O1VBQ0E7O1VBRUE7VUFDQTtVQUNBOzs7OztXQ3RCQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0EsaUNBQWlDLFdBQVc7V0FDNUM7V0FDQTs7Ozs7V0NQQTtXQUNBO1dBQ0E7V0FDQTtXQUNBLHlDQUF5Qyx3Q0FBd0M7V0FDakY7V0FDQTtXQUNBOzs7OztXQ1BBOzs7OztXQ0FBO1dBQ0E7V0FDQTtXQUNBLHVEQUF1RCxpQkFBaUI7V0FDeEU7V0FDQSxnREFBZ0QsYUFBYTtXQUM3RDs7Ozs7V0NOQTs7Ozs7Ozs7Ozs7OztBQ0FxQjtBQUNQIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vc2ltcGxlLXRvZG8vLi9zcmMvc3R5bGUuY3NzIiwid2VicGFjazovL3NpbXBsZS10b2RvLy4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qcyIsIndlYnBhY2s6Ly9zaW1wbGUtdG9kby8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzIiwid2VicGFjazovL3NpbXBsZS10b2RvLy4vc3JjL3N0eWxlLmNzcz85MDExIiwid2VicGFjazovL3NpbXBsZS10b2RvLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzIiwid2VicGFjazovL3NpbXBsZS10b2RvLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qcyIsIndlYnBhY2s6Ly9zaW1wbGUtdG9kby8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qcyIsIndlYnBhY2s6Ly9zaW1wbGUtdG9kby8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qcyIsIndlYnBhY2s6Ly9zaW1wbGUtdG9kby8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzIiwid2VicGFjazovL3NpbXBsZS10b2RvLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanMiLCJ3ZWJwYWNrOi8vc2ltcGxlLXRvZG8vLi9ub2RlX21vZHVsZXMvdXVpZC9kaXN0L2VzbS1icm93c2VyL3JlZ2V4LmpzIiwid2VicGFjazovL3NpbXBsZS10b2RvLy4vbm9kZV9tb2R1bGVzL3V1aWQvZGlzdC9lc20tYnJvd3Nlci9ybmcuanMiLCJ3ZWJwYWNrOi8vc2ltcGxlLXRvZG8vLi9ub2RlX21vZHVsZXMvdXVpZC9kaXN0L2VzbS1icm93c2VyL3N0cmluZ2lmeS5qcyIsIndlYnBhY2s6Ly9zaW1wbGUtdG9kby8uL25vZGVfbW9kdWxlcy91dWlkL2Rpc3QvZXNtLWJyb3dzZXIvdjQuanMiLCJ3ZWJwYWNrOi8vc2ltcGxlLXRvZG8vLi9ub2RlX21vZHVsZXMvdXVpZC9kaXN0L2VzbS1icm93c2VyL3ZhbGlkYXRlLmpzIiwid2VicGFjazovL3NpbXBsZS10b2RvLy4vc3JjL3Byb2plY3QuanMiLCJ3ZWJwYWNrOi8vc2ltcGxlLXRvZG8vLi9zcmMvc3RvcmFnZS5qcyIsIndlYnBhY2s6Ly9zaW1wbGUtdG9kby8uL3NyYy91aS5qcyIsIndlYnBhY2s6Ly9zaW1wbGUtdG9kby8uL3NyYy91dGlscy5qcyIsIndlYnBhY2s6Ly9zaW1wbGUtdG9kby93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly9zaW1wbGUtdG9kby93ZWJwYWNrL3J1bnRpbWUvY29tcGF0IGdldCBkZWZhdWx0IGV4cG9ydCIsIndlYnBhY2s6Ly9zaW1wbGUtdG9kby93ZWJwYWNrL3J1bnRpbWUvZGVmaW5lIHByb3BlcnR5IGdldHRlcnMiLCJ3ZWJwYWNrOi8vc2ltcGxlLXRvZG8vd2VicGFjay9ydW50aW1lL2hhc093blByb3BlcnR5IHNob3J0aGFuZCIsIndlYnBhY2s6Ly9zaW1wbGUtdG9kby93ZWJwYWNrL3J1bnRpbWUvbWFrZSBuYW1lc3BhY2Ugb2JqZWN0Iiwid2VicGFjazovL3NpbXBsZS10b2RvL3dlYnBhY2svcnVudGltZS9ub25jZSIsIndlYnBhY2s6Ly9zaW1wbGUtdG9kby8uL3NyYy9pbmRleC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyIvLyBJbXBvcnRzXG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyBmcm9tIFwiLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanNcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18gZnJvbSBcIi4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanNcIjtcbnZhciBfX19DU1NfTE9BREVSX0VYUE9SVF9fXyA9IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fKTtcbi8vIE1vZHVsZVxuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18ucHVzaChbbW9kdWxlLmlkLCBcIlxcbjpyb290IHtcXG4gIC0tZ3JheS0yOiAjZTllY2VmO1xcbiAgLS1ncmF5LTA6ICNmOGY5ZmE7XFxuICAtLWdyYXktNTogI2FkYjViZDtcXG4gIC0tZ3JheS04OiAjMzQzYTQwO1xcbiAgLS1ncmF5LTc6ICM0OTUwNTc7XFxuICAtLWdyYXktNjogIzg2OGU5NjtcXG4gIC0tZm9udC1zYW5zOiBzeXN0ZW0tdWksLWFwcGxlLXN5c3RlbSxTZWdvZSBVSSxSb2JvdG8sVWJ1bnR1LENhbnRhcmVsbCxOb3RvIFNhbnMsc2Fucy1zZXJpZjtcXG4gIC0tc2l6ZS00OiAxLjI1cmVtO1xcbiAgLS1zaXplLTc6IDJyZW07XFxuICAtLXJhZGl1cy0yOiA1cHg7XFxuICAtLXNpemUtMjogLjVyZW07XFxuICAtLWZvbnQtc2l6ZS01OiAycmVtO1xcbiAgLS1ib3JkZXItc2l6ZS0xOiAxcHg7XFxuICAtLXNpemUtMTogLjI1cmVtO1xcbiAgLS1zaXplLTM6IDFyZW07XFxuICAtLXJhZGl1cy0zOiAxcmVtO1xcbiAgLS1ncmF5LTM6ICNkZWUyZTY7XFxuICAtLWdyZWVuLTE6ICNkM2Y5ZDg7XFxuICAtLWdyZWVuLTI6ICNiMmYyYmI7XFxuICAtLXJlZC0xOiAjZmZlM2UzO1xcbiAgLS1yZWQtMjogI2ZmYzljOTtcXG4gIC0tYm9yZGVyLXNpemUtMjogMnB4O1xcbiAgLS1ncmFkaWVudC0yMzogbGluZWFyLWdyYWRpZW50KHRvIGJvdHRvbSByaWdodCwjNTM2OTc2LCMyOTJFNDkpO1xcbiAgLS1yYWRpdXMtNDogMnJlbTtcXG4gIC0tZm9udC1sZXR0ZXJzcGFjaW5nLTI6IC4wNTBlbTtcXG4gIC0tc2l6ZS01OiAxLjVyZW07XFxuICAtLXJhZGl1cy0xOiAycHg7XFxufVxcblxcbi8qIEJveCBzaXppbmcgcnVsZXMgKi9cXG4qLFxcbio6OmJlZm9yZSxcXG4qOjphZnRlciB7XFxuICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xcbn1cXG5cXG4vKiBSZW1vdmUgZGVmYXVsdCBtYXJnaW4gKi9cXG5ib2R5LFxcbmgxLFxcbmgyLFxcbmgzLFxcbmg0LFxcbnAsXFxuZmlndXJlLFxcbmJsb2NrcXVvdGUsXFxuZGwsXFxuZGQge1xcbiAgbWFyZ2luOiAwO1xcbn1cXG5cXG4vKiBSZW1vdmUgbGlzdCBzdHlsZXMgb24gdWwsIG9sIGVsZW1lbnRzIHdpdGggYSBsaXN0IHJvbGUsIHdoaWNoIHN1Z2dlc3RzIGRlZmF1bHQgc3R5bGluZyB3aWxsIGJlIHJlbW92ZWQgKi9cXG51bFtyb2xlPVxcXCJsaXN0XFxcIl0sXFxub2xbcm9sZT1cXFwibGlzdFxcXCJdIHtcXG4gIGxpc3Qtc3R5bGU6IG5vbmU7XFxufVxcblxcbi8qIFNldCBjb3JlIHJvb3QgZGVmYXVsdHMgKi9cXG5odG1sOmZvY3VzLXdpdGhpbiB7XFxuICBzY3JvbGwtYmVoYXZpb3I6IHNtb290aDtcXG59XFxuXFxuLyogU2V0IGNvcmUgYm9keSBkZWZhdWx0cyAqL1xcbmJvZHkge1xcbiAgbWluLWhlaWdodDogMTAwdmg7XFxuICB0ZXh0LXJlbmRlcmluZzogb3B0aW1pemVTcGVlZDtcXG4gIGxpbmUtaGVpZ2h0OiAxLjU7XFxufVxcblxcbi8qIEEgZWxlbWVudHMgdGhhdCBkb24ndCBoYXZlIGEgY2xhc3MgZ2V0IGRlZmF1bHQgc3R5bGVzICovXFxuYTpub3QoW2NsYXNzXSkge1xcbiAgLXdlYmtpdC10ZXh0LWRlY29yYXRpb24tc2tpcDogaW5rO1xcbiAgICAgICAgICB0ZXh0LWRlY29yYXRpb24tc2tpcC1pbms6IGF1dG87XFxufVxcblxcbi8qIE1ha2UgaW1hZ2VzIGVhc2llciB0byB3b3JrIHdpdGggKi9cXG5pbWcsXFxucGljdHVyZSB7XFxuICBtYXgtd2lkdGg6IDEwMCU7XFxuICBkaXNwbGF5OiBibG9jaztcXG59XFxuXFxuLyogSW5oZXJpdCBmb250cyBmb3IgaW5wdXRzIGFuZCBidXR0b25zICovXFxuaW5wdXQsXFxuYnV0dG9uLFxcbnRleHRhcmVhLFxcbnNlbGVjdCB7XFxuICBmb250OiBpbmhlcml0O1xcbn1cXG5cXG4vKiBSZW1vdmUgYWxsIGFuaW1hdGlvbnMsIHRyYW5zaXRpb25zIGFuZCBzbW9vdGggc2Nyb2xsIGZvciBwZW9wbGUgdGhhdCBwcmVmZXIgbm90IHRvIHNlZSB0aGVtICovXFxuQG1lZGlhIChwcmVmZXJzLXJlZHVjZWQtbW90aW9uOiByZWR1Y2UpIHtcXG4gIGh0bWw6Zm9jdXMtd2l0aGluIHtcXG4gICAgc2Nyb2xsLWJlaGF2aW9yOiBhdXRvO1xcbiAgfVxcblxcbiAgKixcXG4gICo6OmJlZm9yZSxcXG4gICo6OmFmdGVyIHtcXG4gICAgLXdlYmtpdC1hbmltYXRpb24tZHVyYXRpb246IDAuMDFtcyAhaW1wb3J0YW50O1xcbiAgICAgICAgICAgIGFuaW1hdGlvbi1kdXJhdGlvbjogMC4wMW1zICFpbXBvcnRhbnQ7XFxuICAgIC13ZWJraXQtYW5pbWF0aW9uLWl0ZXJhdGlvbi1jb3VudDogMSAhaW1wb3J0YW50O1xcbiAgICAgICAgICAgIGFuaW1hdGlvbi1pdGVyYXRpb24tY291bnQ6IDEgIWltcG9ydGFudDtcXG4gICAgdHJhbnNpdGlvbi1kdXJhdGlvbjogMC4wMW1zICFpbXBvcnRhbnQ7XFxuICAgIHNjcm9sbC1iZWhhdmlvcjogYXV0byAhaW1wb3J0YW50O1xcbiAgfVxcbn1cXG5cXG4vKiAqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKiogKi9cXG5cXG46cm9vdCB7XFxuICAtLWJnLWNvbG9yOiB2YXIoLS1ncmF5LTIpO1xcbiAgLS1jb250YWluZXItYmctY29sb3I6IHZhcigtLWdyYXktMCk7XFxuICAtLWNvbnRhaW5lci1ib3JkZXItY29sb3I6IHZhcigtLWdyYXktNSk7XFxuICAtLWhkZy1jb2xvcjogdmFyKC0tZ3JheS04KTtcXG59XFxuXFxuOnJvb3QuZGFyayB7XFxuICAtLWJnLWNvbG9yOiB2YXIoLS1ncmF5LTgpO1xcbiAgLS1jb250YWluZXItYmctY29sb3I6IHZhcigtLWdyYXktNyk7XFxuICAtLWNvbnRhaW5lci1ib3JkZXItY29sb3I6IHZhcigtLWdyYXktNik7XFxuICAtLWhkZy1jb2xvcjogdmFyKC0tZ3JheS0yKTtcXG59XFxuXFxuYm9keSB7XFxuICBmb250LWZhbWlseTogdmFyKC0tZm9udC1zYW5zKTtcXG4gIHBhZGRpbmctaW5saW5lOiB2YXIoLS1zaXplLTQpO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tYmctY29sb3IpO1xcbiAgLyogYmFja2dyb3VuZC1pbWFnZTogdmFyKC0tZ3JhZGllbnQtMjMpOyAqL1xcbn1cXG5cXG4uY29udGFpbmVyIHtcXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcXG4gIG1heC13aWR0aDogNDJyZW07XFxuICBwYWRkaW5nLWlubGluZTogdmFyKC0tc2l6ZS03KTtcXG4gIG1hcmdpbi1pbmxpbmU6IGF1dG87XFxuICBtYXJnaW4tYmxvY2s6IHZhcigtLXNpemUtNyk7XFxuICBib3JkZXI6IDFweCBzb2xpZCB2YXIoLS1jb250YWluZXItYm9yZGVyLWNvbG9yKTtcXG4gIGJvcmRlci1yYWRpdXM6IHZhcigtLXJhZGl1cy0yKTtcXG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWNvbnRhaW5lci1iZy1jb2xvcik7XFxuICAvKiBiYWNrZ3JvdW5kLWltYWdlOiB2YXIoLS1ncmFkaWVudC0xNSk7ICovXFxufVxcblxcbi50aGVtZS1zd2l0Y2gge1xcbiAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgdG9wOiB2YXIoLS1zaXplLTIpO1xcbiAgcmlnaHQ6IHZhcigtLXNpemUtMik7XFxufVxcblxcbi5sb2dvIHtcXG4gIGZvbnQtc2l6ZTogdmFyKC0tZm9udC1zaXplLTUpO1xcbiAgbWFyZ2luLWJsb2NrOiB2YXIoLS1zaXplLTcpO1xcbiAgYm9yZGVyLWJvdHRvbTogdmFyKC0tYm9yZGVyLXNpemUtMSkgZGFzaGVkIHZhcigtLWdyYXktNik7XFxufVxcblxcbmgxLFxcbmgyLFxcbmgzIHtcXG4gIGNvbG9yOiB2YXIoLS1oZGctY29sb3IpO1xcbn1cXG5cXG4vKiAqKioqKioqKioqKioqKioqICovXFxuLyogUHJvamVjdHMgU2VjdGlvbiAqL1xcbi5wcm9qZWN0cyB7XFxuICBtYXJnaW4tYm90dG9tOiB2YXIoLS1zaXplLTIpO1xcbn1cXG5cXG4ucHJvamVjdHMtaGVhZGluZyB7XFxuICAvKiBmb250LXNpemU6IHZhcigtLWZvbnQtc2l6ZS00KTsgKi9cXG4gIC8qIGRpc3BsYXk6IGZsZXg7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgZ2FwOiB2YXIoLS1zaXplLTIpOyAqL1xcbiAgbWFyZ2luLWJvdHRvbTogdmFyKC0tc2l6ZS0yKTtcXG59XFxuXFxuLmJ0biB7XFxuICBib3JkZXI6IHZhcigtLWJvcmRlci1zaXplLTEpIHNvbGlkIHZhcigtLWdyYXktNSk7XFxuICBwYWRkaW5nOiB2YXIoLS1zaXplLTEpIHZhcigtLXNpemUtMyk7XFxuICBib3JkZXItcmFkaXVzOiB2YXIoLS1yYWRpdXMtMyk7XFxuICBjdXJzb3I6IHBvaW50ZXI7XFxufVxcblxcbi5idG46aG92ZXIge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tZ3JheS0yKTtcXG59XFxuXFxuLmJ0bjphY3RpdmUge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tZ3JheS0zKTtcXG59XFxuXFxuLmFkZCB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1ncmVlbi0xKTtcXG59XFxuXFxuLmFkZDpob3ZlciB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1ncmVlbi0yKTtcXG59XFxuXFxuLmNhbmNlbCB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1yZWQtMSk7XFxufVxcblxcbi5jYW5jZWw6aG92ZXIge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tcmVkLTIpO1xcbn1cXG5cXG4jcHJvamVjdC1uYW1lIHtcXG4gIGJvcmRlcjogdmFyKC0tYm9yZGVyLXNpemUtMikgc29saWQgdmFyKC0tZ3JheS03KTtcXG4gIHBhZGRpbmctaW5saW5lOiB2YXIoLS1zaXplLTIpO1xcbiAgYm9yZGVyLXJhZGl1czogdmFyKC0tcmFkaXVzLTMpO1xcbn1cXG5cXG4jcHJvamVjdC1uYW1lOmZvY3VzLXZpc2libGUge1xcbiAgb3V0bGluZTogdmFyKC0tYm9yZGVyLXNpemUtMikgc29saWQgdmFyKC0tZ3JheS03KTtcXG59XFxuXFxuLnByb2plY3RzLWxpc3Qge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXgtd3JhcDogd3JhcDtcXG4gIGdhcDogdmFyKC0tc2l6ZS0yKTtcXG59XFxuXFxuLnByb2plY3RzLWxpc3QgPiBhIHtcXG4gIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcXG59XFxuXFxuLnByb2plY3RzLWxpc3QgPiBhOmhvdmVyLFxcbi5wcm9qZWN0cy1saXN0ID4gYTphY3RpdmUge1xcbiAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xcbiAgYm9yZGVyOiB2YXIoLS1ib3JkZXItc2l6ZS0xKSBzb2xpZCB2YXIoLS1ncmF5LTcpO1xcbiAgLyogYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tZ3JheS04KTsgKi9cXG4gIGJhY2tncm91bmQtaW1hZ2U6IHZhcigtLWdyYWRpZW50LTIzKTtcXG4gIGNvbG9yOiB2YXIoLS1ncmF5LTApO1xcbn1cXG5cXG4ucHJvamVjdCB7XFxuICBib3JkZXI6IHZhcigtLWJvcmRlci1zaXplLTEpIHNvbGlkIHZhcigtLWdyYXktNSk7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1ncmF5LTIpO1xcbiAgY29sb3I6IHZhcigtLWdyYXktNyk7XFxuICBib3JkZXItcmFkaXVzOiB2YXIoLS1yYWRpdXMtNCk7XFxuICBwYWRkaW5nOiB2YXIoLS1zaXplLTIpIHZhcigtLXNpemUtNCk7XFxuICBsZXR0ZXItc3BhY2luZzogdmFyKC0tZm9udC1sZXR0ZXJzcGFjaW5nLTIpO1xcbn1cXG5cXG4uYWN0aXZlIHtcXG4gIGJvcmRlcjogdmFyKC0tYm9yZGVyLXNpemUtMSkgc29saWQgdmFyKC0tZ3JheS03KTtcXG4gIC8qIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWdyYXktOCk7ICovXFxuICBiYWNrZ3JvdW5kLWltYWdlOiB2YXIoLS1ncmFkaWVudC0yMyk7XFxuICBjb2xvcjogdmFyKC0tZ3JheS0wKTtcXG59XFxuXFxuLyogKioqKioqKioqKioqKioqICovXFxuXFxuLyogKioqKioqKioqKioqKiogKi9cXG4vKiBUYXNrcyBTZWN0aW9uICovXFxuLnRhc2tzIHtcXG4gIG1hcmdpbi10b3A6IHZhcigtLXNpemUtNCk7XFxufVxcblxcbi50YXNrcy1oZWFkaW5nIHtcXG4gIG1hcmdpbi1ib3R0b206IHZhcigtLXNpemUtMik7XFxufVxcblxcbi50YXNrIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgZ2FwOiB2YXIoLS1zaXplLTMpO1xcbiAgYm9yZGVyOiB2YXIoLS1ib3JkZXItc2l6ZS0xKSBkYXNoZWQgdmFyKC0tZ3JheS03KTtcXG4gIGJvcmRlci1yYWRpdXM6IHZhcigtLXJhZGl1cy0zKTtcXG4gIHBhZGRpbmc6IHZhcigtLXNpemUtMyk7XFxuICBtYXJnaW4tYm90dG9tOiB2YXIoLS1zaXplLTMpO1xcbn1cXG5cXG4udGFzazpob3ZlciB7XFxuICBib3JkZXItc3R5bGU6IHNvbGlkO1xcbiAgYmFja2dyb3VuZC1pbWFnZTogdmFyKC0tZ3JhZGllbnQtMjMpO1xcbiAgY29sb3I6IHZhcigtLWdyYXktMCk7XFxufVxcblxcbmlucHV0W3R5cGU9XFxcImNoZWNrYm94XFxcIl0ge1xcbiAgY3Vyc29yOiBwb2ludGVyO1xcbiAgLXdlYmtpdC1hcHBlYXJhbmNlOiBub25lO1xcbiAgICAgLW1vei1hcHBlYXJhbmNlOiBub25lO1xcbiAgICAgICAgICBhcHBlYXJhbmNlOiBub25lO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZjtcXG4gIG1hcmdpbjogMDtcXG5cXG4gIGZvbnQ6IGluaGVyaXQ7XFxuICBjb2xvcjogY3VycmVudENvbG9yO1xcbiAgd2lkdGg6IHZhcigtLXNpemUtNSk7XFxuICBoZWlnaHQ6IHZhcigtLXNpemUtNSk7XFxuICBib3JkZXI6IDAuMTVlbSBzb2xpZCBjdXJyZW50Q29sb3I7XFxuICBib3JkZXItcmFkaXVzOiB2YXIoLS1yYWRpdXMtMik7XFxuICAvKiB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoLTAuMDc1ZW0pOyAqL1xcblxcbiAgZGlzcGxheTogZ3JpZDtcXG4gIHBsYWNlLWNvbnRlbnQ6IGNlbnRlcjtcXG59XFxuXFxuaW5wdXRbdHlwZT1cXFwiY2hlY2tib3hcXFwiXTo6YmVmb3JlIHtcXG4gIGNvbnRlbnQ6IFxcXCJcXFwiO1xcbiAgd2lkdGg6IHZhcigtLXNpemUtMyk7XFxuICBoZWlnaHQ6IHZhcigtLXNpemUtMyk7XFxuICB0cmFuc2Zvcm06IHNjYWxlKDApO1xcbiAgdHJhbnNpdGlvbjogNjBtcyB0cmFuc2Zvcm0gZWFzZS1pbi1vdXQ7XFxuICBib3gtc2hhZG93OiBpbnNldCAxZW0gMWVtIHZhcigtLWdyYXktOCk7XFxuICBib3JkZXItcmFkaXVzOiB2YXIoLS1yYWRpdXMtMSk7XFxufVxcblxcbmlucHV0W3R5cGU9XFxcImNoZWNrYm94XFxcIl06Y2hlY2tlZDo6YmVmb3JlIHtcXG4gIHRyYW5zZm9ybTogc2NhbGUoMSk7XFxufVxcblxcbmlucHV0W3R5cGU9XFxcImNoZWNrYm94XFxcIl06Zm9jdXMge1xcbiAgb3V0bGluZTogbWF4KDJweCwgMC4xNWVtKSBzb2xpZCBjdXJyZW50Q29sb3I7XFxuICBvdXRsaW5lLW9mZnNldDogbWF4KDJweCwgMC4xNWVtKTtcXG59XFxuXFxuLnRhc2stZGV0YWlscyB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xcbiAgZmxleDogMTtcXG59XFxuXFxuLnRhc2staW5mbyB7XFxuICB0ZXh0LWFsaWduOiBlbmQ7XFxufVxcblxcbi5oaWRkZW4ge1xcbiAgZGlzcGxheTogbm9uZTtcXG59XFxuXCIsIFwiXCIse1widmVyc2lvblwiOjMsXCJzb3VyY2VzXCI6W1wiPG5vIHNvdXJjZT5cIixcIndlYnBhY2s6Ly8uL3NyYy9zdHlsZS5jc3NcIl0sXCJuYW1lc1wiOltdLFwibWFwcGluZ3NcIjpcIjtBQUFBO0VBQUEsa0JBQUE7RUFBQSxrQkFBQTtFQUFBLGtCQUFBO0VBQUEsa0JBQUE7RUFBQSxrQkFBQTtFQUFBLGtCQUFBO0VBQUEsMkZBQUE7RUFBQSxrQkFBQTtFQUFBLGVBQUE7RUFBQSxnQkFBQTtFQUFBLGdCQUFBO0VBQUEsb0JBQUE7RUFBQSxxQkFBQTtFQUFBLGlCQUFBO0VBQUEsZUFBQTtFQUFBLGlCQUFBO0VBQUEsa0JBQUE7RUFBQSxtQkFBQTtFQUFBLG1CQUFBO0VBQUEsaUJBQUE7RUFBQSxpQkFBQTtFQUFBLHFCQUFBO0VBQUEsZ0VBQUE7RUFBQSxpQkFBQTtFQUFBLCtCQUFBO0VBQUEsaUJBQUE7RUFBQTtDQUFBOztBQ0FBLHFCQUFxQjtBQUNyQjs7O0VBR0Usc0JBQXNCO0FBQ3hCOztBQUVBLDBCQUEwQjtBQUMxQjs7Ozs7Ozs7OztFQVVFLFNBQVM7QUFDWDs7QUFFQSwyR0FB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QWhCLHFCQUFnQjtVQUFoQixnQkFBZ0I7RUFDaEIsc0JBQXNCO0VBQ3RCLFNBQVM7O0VBRVQsYUFBYTtFQUNiLG1CQUFtQjtFQUNuQixvQkFBb0I7RUFDcEIscUJBQXFCO0VBQ3JCLGlDQUFpQztFQUNqQyw4QkFBOEI7RUFDOUIscUNBQXFDOztFQUVyQyxhQUFhO0VBQ2IscUJBQXFCO0FBQ3ZCOztBQUVBO0VBQ0UsV0FBVztFQUNYLG9CQUFvQjtFQUNwQixxQkFBcUI7RUFDckIsbUJBQW1CO0VBQ25CLHNDQUFzQztFQUN0Qyx1Q0FBdUM7RUFDdkMsOEJBQThCO0FBQ2hDOztBQUVBO0VBQ0UsbUJBQW1CO0FBQ3JCOztBQUVBO0VBQ0UsNENBQTRDO0VBQzVDLGdDQUFnQztBQUNsQzs7QUFFQTtFQUNFLGFBQWE7RUFDYiw4QkFBOEI7RUFDOUIsT0FBTztBQUNUOztBQUVBO0VBQ0UsZUFBZTtBQUNqQjs7QUFFQTtFQUNFLGFBQWE7QUFDZlwiLFwic291cmNlc0NvbnRlbnRcIjpbbnVsbCxcIi8qIEJveCBzaXppbmcgcnVsZXMgKi9cXG4qLFxcbio6OmJlZm9yZSxcXG4qOjphZnRlciB7XFxuICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xcbn1cXG5cXG4vKiBSZW1vdmUgZGVmYXVsdCBtYXJnaW4gKi9cXG5ib2R5LFxcbmgxLFxcbmgyLFxcbmgzLFxcbmg0LFxcbnAsXFxuZmlndXJlLFxcbmJsb2NrcXVvdGUsXFxuZGwsXFxuZGQge1xcbiAgbWFyZ2luOiAwO1xcbn1cXG5cXG4vKiBSZW1vdmUgbGlzdCBzdHlsZXMgb24gdWwsIG9sIGVsZW1lbnRzIHdpdGggYSBsaXN0IHJvbGUsIHdoaWNoIHN1Z2dlc3RzIGRlZmF1bHQgc3R5bGluZyB3aWxsIGJlIHJlbW92ZWQgKi9cXG51bFtyb2xlPVxcXCJsaXN0XFxcIl0sXFxub2xbcm9sZT1cXFwibGlzdFxcXCJdIHtcXG4gIGxpc3Qtc3R5bGU6IG5vbmU7XFxufVxcblxcbi8qIFNldCBjb3JlIHJvb3QgZGVmYXVsdHMgKi9cXG5odG1sOmZvY3VzLXdpdGhpbiB7XFxuICBzY3JvbGwtYmVoYXZpb3I6IHNtb290aDtcXG59XFxuXFxuLyogU2V0IGNvcmUgYm9keSBkZWZhdWx0cyAqL1xcbmJvZHkge1xcbiAgbWluLWhlaWdodDogMTAwdmg7XFxuICB0ZXh0LXJlbmRlcmluZzogb3B0aW1pemVTcGVlZDtcXG4gIGxpbmUtaGVpZ2h0OiAxLjU7XFxufVxcblxcbi8qIEEgZWxlbWVudHMgdGhhdCBkb24ndCBoYXZlIGEgY2xhc3MgZ2V0IGRlZmF1bHQgc3R5bGVzICovXFxuYTpub3QoW2NsYXNzXSkge1xcbiAgdGV4dC1kZWNvcmF0aW9uLXNraXAtaW5rOiBhdXRvO1xcbn1cXG5cXG4vKiBNYWtlIGltYWdlcyBlYXNpZXIgdG8gd29yayB3aXRoICovXFxuaW1nLFxcbnBpY3R1cmUge1xcbiAgbWF4LXdpZHRoOiAxMDAlO1xcbiAgZGlzcGxheTogYmxvY2s7XFxufVxcblxcbi8qIEluaGVyaXQgZm9udHMgZm9yIGlucHV0cyBhbmQgYnV0dG9ucyAqL1xcbmlucHV0LFxcbmJ1dHRvbixcXG50ZXh0YXJlYSxcXG5zZWxlY3Qge1xcbiAgZm9udDogaW5oZXJpdDtcXG59XFxuXFxuLyogUmVtb3ZlIGFsbCBhbmltYXRpb25zLCB0cmFuc2l0aW9ucyBhbmQgc21vb3RoIHNjcm9sbCBmb3IgcGVvcGxlIHRoYXQgcHJlZmVyIG5vdCB0byBzZWUgdGhlbSAqL1xcbkBtZWRpYSAocHJlZmVycy1yZWR1Y2VkLW1vdGlvbjogcmVkdWNlKSB7XFxuICBodG1sOmZvY3VzLXdpdGhpbiB7XFxuICAgIHNjcm9sbC1iZWhhdmlvcjogYXV0bztcXG4gIH1cXG5cXG4gICosXFxuICAqOjpiZWZvcmUsXFxuICAqOjphZnRlciB7XFxuICAgIGFuaW1hdGlvbi1kdXJhdGlvbjogMC4wMW1zICFpbXBvcnRhbnQ7XFxuICAgIGFuaW1hdGlvbi1pdGVyYXRpb24tY291bnQ6IDEgIWltcG9ydGFudDtcXG4gICAgdHJhbnNpdGlvbi1kdXJhdGlvbjogMC4wMW1zICFpbXBvcnRhbnQ7XFxuICAgIHNjcm9sbC1iZWhhdmlvcjogYXV0byAhaW1wb3J0YW50O1xcbiAgfVxcbn1cXG5cXG4vKiAqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKiogKi9cXG5cXG46cm9vdCB7XFxuICAtLWJnLWNvbG9yOiB2YXIoLS1ncmF5LTIpO1xcbiAgLS1jb250YWluZXItYmctY29sb3I6IHZhcigtLWdyYXktMCk7XFxuICAtLWNvbnRhaW5lci1ib3JkZXItY29sb3I6IHZhcigtLWdyYXktNSk7XFxuICAtLWhkZy1jb2xvcjogdmFyKC0tZ3JheS04KTtcXG59XFxuXFxuOnJvb3QuZGFyayB7XFxuICAtLWJnLWNvbG9yOiB2YXIoLS1ncmF5LTgpO1xcbiAgLS1jb250YWluZXItYmctY29sb3I6IHZhcigtLWdyYXktNyk7XFxuICAtLWNvbnRhaW5lci1ib3JkZXItY29sb3I6IHZhcigtLWdyYXktNik7XFxuICAtLWhkZy1jb2xvcjogdmFyKC0tZ3JheS0yKTtcXG59XFxuXFxuYm9keSB7XFxuICBmb250LWZhbWlseTogdmFyKC0tZm9udC1zYW5zKTtcXG4gIHBhZGRpbmctaW5saW5lOiB2YXIoLS1zaXplLTQpO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tYmctY29sb3IpO1xcbiAgLyogYmFja2dyb3VuZC1pbWFnZTogdmFyKC0tZ3JhZGllbnQtMjMpOyAqL1xcbn1cXG5cXG4uY29udGFpbmVyIHtcXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcXG4gIG1heC13aWR0aDogNDJyZW07XFxuICBwYWRkaW5nLWlubGluZTogdmFyKC0tc2l6ZS03KTtcXG4gIG1hcmdpbi1pbmxpbmU6IGF1dG87XFxuICBtYXJnaW4tYmxvY2s6IHZhcigtLXNpemUtNyk7XFxuICBib3JkZXI6IDFweCBzb2xpZCB2YXIoLS1jb250YWluZXItYm9yZGVyLWNvbG9yKTtcXG4gIGJvcmRlci1yYWRpdXM6IHZhcigtLXJhZGl1cy0yKTtcXG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWNvbnRhaW5lci1iZy1jb2xvcik7XFxuICAvKiBiYWNrZ3JvdW5kLWltYWdlOiB2YXIoLS1ncmFkaWVudC0xNSk7ICovXFxufVxcblxcbi50aGVtZS1zd2l0Y2gge1xcbiAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgdG9wOiB2YXIoLS1zaXplLTIpO1xcbiAgcmlnaHQ6IHZhcigtLXNpemUtMik7XFxufVxcblxcbi5sb2dvIHtcXG4gIGZvbnQtc2l6ZTogdmFyKC0tZm9udC1zaXplLTUpO1xcbiAgbWFyZ2luLWJsb2NrOiB2YXIoLS1zaXplLTcpO1xcbiAgYm9yZGVyLWJvdHRvbTogdmFyKC0tYm9yZGVyLXNpemUtMSkgZGFzaGVkIHZhcigtLWdyYXktNik7XFxufVxcblxcbmgxLFxcbmgyLFxcbmgzIHtcXG4gIGNvbG9yOiB2YXIoLS1oZGctY29sb3IpO1xcbn1cXG5cXG4vKiAqKioqKioqKioqKioqKioqICovXFxuLyogUHJvamVjdHMgU2VjdGlvbiAqL1xcbi5wcm9qZWN0cyB7XFxuICBtYXJnaW4tYm90dG9tOiB2YXIoLS1zaXplLTIpO1xcbn1cXG5cXG4ucHJvamVjdHMtaGVhZGluZyB7XFxuICAvKiBmb250LXNpemU6IHZhcigtLWZvbnQtc2l6ZS00KTsgKi9cXG4gIC8qIGRpc3BsYXk6IGZsZXg7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgZ2FwOiB2YXIoLS1zaXplLTIpOyAqL1xcbiAgbWFyZ2luLWJvdHRvbTogdmFyKC0tc2l6ZS0yKTtcXG59XFxuXFxuLmJ0biB7XFxuICBib3JkZXI6IHZhcigtLWJvcmRlci1zaXplLTEpIHNvbGlkIHZhcigtLWdyYXktNSk7XFxuICBwYWRkaW5nOiB2YXIoLS1zaXplLTEpIHZhcigtLXNpemUtMyk7XFxuICBib3JkZXItcmFkaXVzOiB2YXIoLS1yYWRpdXMtMyk7XFxuICBjdXJzb3I6IHBvaW50ZXI7XFxufVxcblxcbi5idG46aG92ZXIge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tZ3JheS0yKTtcXG59XFxuXFxuLmJ0bjphY3RpdmUge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tZ3JheS0zKTtcXG59XFxuXFxuLmFkZCB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1ncmVlbi0xKTtcXG59XFxuXFxuLmFkZDpob3ZlciB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1ncmVlbi0yKTtcXG59XFxuXFxuLmNhbmNlbCB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1yZWQtMSk7XFxufVxcblxcbi5jYW5jZWw6aG92ZXIge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tcmVkLTIpO1xcbn1cXG5cXG4jcHJvamVjdC1uYW1lIHtcXG4gIGJvcmRlcjogdmFyKC0tYm9yZGVyLXNpemUtMikgc29saWQgdmFyKC0tZ3JheS03KTtcXG4gIHBhZGRpbmctaW5saW5lOiB2YXIoLS1zaXplLTIpO1xcbiAgYm9yZGVyLXJhZGl1czogdmFyKC0tcmFkaXVzLTMpO1xcbn1cXG5cXG4jcHJvamVjdC1uYW1lOmZvY3VzLXZpc2libGUge1xcbiAgb3V0bGluZTogdmFyKC0tYm9yZGVyLXNpemUtMikgc29saWQgdmFyKC0tZ3JheS03KTtcXG59XFxuXFxuLnByb2plY3RzLWxpc3Qge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXgtd3JhcDogd3JhcDtcXG4gIGdhcDogdmFyKC0tc2l6ZS0yKTtcXG59XFxuXFxuLnByb2plY3RzLWxpc3QgPiBhIHtcXG4gIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcXG59XFxuXFxuLnByb2plY3RzLWxpc3QgPiBhOmhvdmVyLFxcbi5wcm9qZWN0cy1saXN0ID4gYTphY3RpdmUge1xcbiAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xcbiAgYm9yZGVyOiB2YXIoLS1ib3JkZXItc2l6ZS0xKSBzb2xpZCB2YXIoLS1ncmF5LTcpO1xcbiAgLyogYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tZ3JheS04KTsgKi9cXG4gIGJhY2tncm91bmQtaW1hZ2U6IHZhcigtLWdyYWRpZW50LTIzKTtcXG4gIGNvbG9yOiB2YXIoLS1ncmF5LTApO1xcbn1cXG5cXG4ucHJvamVjdCB7XFxuICBib3JkZXI6IHZhcigtLWJvcmRlci1zaXplLTEpIHNvbGlkIHZhcigtLWdyYXktNSk7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1ncmF5LTIpO1xcbiAgY29sb3I6IHZhcigtLWdyYXktNyk7XFxuICBib3JkZXItcmFkaXVzOiB2YXIoLS1yYWRpdXMtNCk7XFxuICBwYWRkaW5nOiB2YXIoLS1zaXplLTIpIHZhcigtLXNpemUtNCk7XFxuICBsZXR0ZXItc3BhY2luZzogdmFyKC0tZm9udC1sZXR0ZXJzcGFjaW5nLTIpO1xcbn1cXG5cXG4uYWN0aXZlIHtcXG4gIGJvcmRlcjogdmFyKC0tYm9yZGVyLXNpemUtMSkgc29saWQgdmFyKC0tZ3JheS03KTtcXG4gIC8qIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWdyYXktOCk7ICovXFxuICBiYWNrZ3JvdW5kLWltYWdlOiB2YXIoLS1ncmFkaWVudC0yMyk7XFxuICBjb2xvcjogdmFyKC0tZ3JheS0wKTtcXG59XFxuXFxuLyogKioqKioqKioqKioqKioqICovXFxuXFxuLyogKioqKioqKioqKioqKiogKi9cXG4vKiBUYXNrcyBTZWN0aW9uICovXFxuLnRhc2tzIHtcXG4gIG1hcmdpbi10b3A6IHZhcigtLXNpemUtNCk7XFxufVxcblxcbi50YXNrcy1oZWFkaW5nIHtcXG4gIG1hcmdpbi1ib3R0b206IHZhcigtLXNpemUtMik7XFxufVxcblxcbi50YXNrIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgZ2FwOiB2YXIoLS1zaXplLTMpO1xcbiAgYm9yZGVyOiB2YXIoLS1ib3JkZXItc2l6ZS0xKSBkYXNoZWQgdmFyKC0tZ3JheS03KTtcXG4gIGJvcmRlci1yYWRpdXM6IHZhcigtLXJhZGl1cy0zKTtcXG4gIHBhZGRpbmc6IHZhcigtLXNpemUtMyk7XFxuICBtYXJnaW4tYm90dG9tOiB2YXIoLS1zaXplLTMpO1xcbn1cXG5cXG4udGFzazpob3ZlciB7XFxuICBib3JkZXItc3R5bGU6IHNvbGlkO1xcbiAgYmFja2dyb3VuZC1pbWFnZTogdmFyKC0tZ3JhZGllbnQtMjMpO1xcbiAgY29sb3I6IHZhcigtLWdyYXktMCk7XFxufVxcblxcbmlucHV0W3R5cGU9XFxcImNoZWNrYm94XFxcIl0ge1xcbiAgY3Vyc29yOiBwb2ludGVyO1xcbiAgYXBwZWFyYW5jZTogbm9uZTtcXG4gIGJhY2tncm91bmQtY29sb3I6ICNmZmY7XFxuICBtYXJnaW46IDA7XFxuXFxuICBmb250OiBpbmhlcml0O1xcbiAgY29sb3I6IGN1cnJlbnRDb2xvcjtcXG4gIHdpZHRoOiB2YXIoLS1zaXplLTUpO1xcbiAgaGVpZ2h0OiB2YXIoLS1zaXplLTUpO1xcbiAgYm9yZGVyOiAwLjE1ZW0gc29saWQgY3VycmVudENvbG9yO1xcbiAgYm9yZGVyLXJhZGl1czogdmFyKC0tcmFkaXVzLTIpO1xcbiAgLyogdHJhbnNmb3JtOiB0cmFuc2xhdGVZKC0wLjA3NWVtKTsgKi9cXG5cXG4gIGRpc3BsYXk6IGdyaWQ7XFxuICBwbGFjZS1jb250ZW50OiBjZW50ZXI7XFxufVxcblxcbmlucHV0W3R5cGU9XFxcImNoZWNrYm94XFxcIl06OmJlZm9yZSB7XFxuICBjb250ZW50OiBcXFwiXFxcIjtcXG4gIHdpZHRoOiB2YXIoLS1zaXplLTMpO1xcbiAgaGVpZ2h0OiB2YXIoLS1zaXplLTMpO1xcbiAgdHJhbnNmb3JtOiBzY2FsZSgwKTtcXG4gIHRyYW5zaXRpb246IDYwbXMgdHJhbnNmb3JtIGVhc2UtaW4tb3V0O1xcbiAgYm94LXNoYWRvdzogaW5zZXQgMWVtIDFlbSB2YXIoLS1ncmF5LTgpO1xcbiAgYm9yZGVyLXJhZGl1czogdmFyKC0tcmFkaXVzLTEpO1xcbn1cXG5cXG5pbnB1dFt0eXBlPVxcXCJjaGVja2JveFxcXCJdOmNoZWNrZWQ6OmJlZm9yZSB7XFxuICB0cmFuc2Zvcm06IHNjYWxlKDEpO1xcbn1cXG5cXG5pbnB1dFt0eXBlPVxcXCJjaGVja2JveFxcXCJdOmZvY3VzIHtcXG4gIG91dGxpbmU6IG1heCgycHgsIDAuMTVlbSkgc29saWQgY3VycmVudENvbG9yO1xcbiAgb3V0bGluZS1vZmZzZXQ6IG1heCgycHgsIDAuMTVlbSk7XFxufVxcblxcbi50YXNrLWRldGFpbHMge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcXG4gIGZsZXg6IDE7XFxufVxcblxcbi50YXNrLWluZm8ge1xcbiAgdGV4dC1hbGlnbjogZW5kO1xcbn1cXG5cXG4uaGlkZGVuIHtcXG4gIGRpc3BsYXk6IG5vbmU7XFxufVxcblwiXSxcInNvdXJjZVJvb3RcIjpcIlwifV0pO1xuLy8gRXhwb3J0c1xuZXhwb3J0IGRlZmF1bHQgX19fQ1NTX0xPQURFUl9FWFBPUlRfX187XG4iLCJcInVzZSBzdHJpY3RcIjtcblxuLypcbiAgTUlUIExpY2Vuc2UgaHR0cDovL3d3dy5vcGVuc291cmNlLm9yZy9saWNlbnNlcy9taXQtbGljZW5zZS5waHBcbiAgQXV0aG9yIFRvYmlhcyBLb3BwZXJzIEBzb2tyYVxuKi9cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcpIHtcbiAgdmFyIGxpc3QgPSBbXTsgLy8gcmV0dXJuIHRoZSBsaXN0IG9mIG1vZHVsZXMgYXMgY3NzIHN0cmluZ1xuXG4gIGxpc3QudG9TdHJpbmcgPSBmdW5jdGlvbiB0b1N0cmluZygpIHtcbiAgICByZXR1cm4gdGhpcy5tYXAoZnVuY3Rpb24gKGl0ZW0pIHtcbiAgICAgIHZhciBjb250ZW50ID0gXCJcIjtcbiAgICAgIHZhciBuZWVkTGF5ZXIgPSB0eXBlb2YgaXRlbVs1XSAhPT0gXCJ1bmRlZmluZWRcIjtcblxuICAgICAgaWYgKGl0ZW1bNF0pIHtcbiAgICAgICAgY29udGVudCArPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KGl0ZW1bNF0sIFwiKSB7XCIpO1xuICAgICAgfVxuXG4gICAgICBpZiAoaXRlbVsyXSkge1xuICAgICAgICBjb250ZW50ICs9IFwiQG1lZGlhIFwiLmNvbmNhdChpdGVtWzJdLCBcIiB7XCIpO1xuICAgICAgfVxuXG4gICAgICBpZiAobmVlZExheWVyKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAbGF5ZXJcIi5jb25jYXQoaXRlbVs1XS5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KGl0ZW1bNV0pIDogXCJcIiwgXCIge1wiKTtcbiAgICAgIH1cblxuICAgICAgY29udGVudCArPSBjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKGl0ZW0pO1xuXG4gICAgICBpZiAobmVlZExheWVyKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG5cbiAgICAgIGlmIChpdGVtWzJdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG5cbiAgICAgIGlmIChpdGVtWzRdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG5cbiAgICAgIHJldHVybiBjb250ZW50O1xuICAgIH0pLmpvaW4oXCJcIik7XG4gIH07IC8vIGltcG9ydCBhIGxpc3Qgb2YgbW9kdWxlcyBpbnRvIHRoZSBsaXN0XG5cblxuICBsaXN0LmkgPSBmdW5jdGlvbiBpKG1vZHVsZXMsIG1lZGlhLCBkZWR1cGUsIHN1cHBvcnRzLCBsYXllcikge1xuICAgIGlmICh0eXBlb2YgbW9kdWxlcyA9PT0gXCJzdHJpbmdcIikge1xuICAgICAgbW9kdWxlcyA9IFtbbnVsbCwgbW9kdWxlcywgdW5kZWZpbmVkXV07XG4gICAgfVxuXG4gICAgdmFyIGFscmVhZHlJbXBvcnRlZE1vZHVsZXMgPSB7fTtcblxuICAgIGlmIChkZWR1cGUpIHtcbiAgICAgIGZvciAodmFyIGsgPSAwOyBrIDwgdGhpcy5sZW5ndGg7IGsrKykge1xuICAgICAgICB2YXIgaWQgPSB0aGlzW2tdWzBdO1xuXG4gICAgICAgIGlmIChpZCAhPSBudWxsKSB7XG4gICAgICAgICAgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpZF0gPSB0cnVlO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuXG4gICAgZm9yICh2YXIgX2sgPSAwOyBfayA8IG1vZHVsZXMubGVuZ3RoOyBfaysrKSB7XG4gICAgICB2YXIgaXRlbSA9IFtdLmNvbmNhdChtb2R1bGVzW19rXSk7XG5cbiAgICAgIGlmIChkZWR1cGUgJiYgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpdGVtWzBdXSkge1xuICAgICAgICBjb250aW51ZTtcbiAgICAgIH1cblxuICAgICAgaWYgKHR5cGVvZiBsYXllciAhPT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgICBpZiAodHlwZW9mIGl0ZW1bNV0gPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgICAgICBpdGVtWzVdID0gbGF5ZXI7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQGxheWVyXCIuY29uY2F0KGl0ZW1bNV0ubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChpdGVtWzVdKSA6IFwiXCIsIFwiIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzVdID0gbGF5ZXI7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgaWYgKG1lZGlhKSB7XG4gICAgICAgIGlmICghaXRlbVsyXSkge1xuICAgICAgICAgIGl0ZW1bMl0gPSBtZWRpYTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAbWVkaWEgXCIuY29uY2F0KGl0ZW1bMl0sIFwiIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzJdID0gbWVkaWE7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgaWYgKHN1cHBvcnRzKSB7XG4gICAgICAgIGlmICghaXRlbVs0XSkge1xuICAgICAgICAgIGl0ZW1bNF0gPSBcIlwiLmNvbmNhdChzdXBwb3J0cyk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQoaXRlbVs0XSwgXCIpIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzRdID0gc3VwcG9ydHM7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgbGlzdC5wdXNoKGl0ZW0pO1xuICAgIH1cbiAgfTtcblxuICByZXR1cm4gbGlzdDtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGl0ZW0pIHtcbiAgdmFyIGNvbnRlbnQgPSBpdGVtWzFdO1xuICB2YXIgY3NzTWFwcGluZyA9IGl0ZW1bM107XG5cbiAgaWYgKCFjc3NNYXBwaW5nKSB7XG4gICAgcmV0dXJuIGNvbnRlbnQ7XG4gIH1cblxuICBpZiAodHlwZW9mIGJ0b2EgPT09IFwiZnVuY3Rpb25cIikge1xuICAgIHZhciBiYXNlNjQgPSBidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShjc3NNYXBwaW5nKSkpKTtcbiAgICB2YXIgZGF0YSA9IFwic291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247Y2hhcnNldD11dGYtODtiYXNlNjQsXCIuY29uY2F0KGJhc2U2NCk7XG4gICAgdmFyIHNvdXJjZU1hcHBpbmcgPSBcIi8qIyBcIi5jb25jYXQoZGF0YSwgXCIgKi9cIik7XG4gICAgdmFyIHNvdXJjZVVSTHMgPSBjc3NNYXBwaW5nLnNvdXJjZXMubWFwKGZ1bmN0aW9uIChzb3VyY2UpIHtcbiAgICAgIHJldHVybiBcIi8qIyBzb3VyY2VVUkw9XCIuY29uY2F0KGNzc01hcHBpbmcuc291cmNlUm9vdCB8fCBcIlwiKS5jb25jYXQoc291cmNlLCBcIiAqL1wiKTtcbiAgICB9KTtcbiAgICByZXR1cm4gW2NvbnRlbnRdLmNvbmNhdChzb3VyY2VVUkxzKS5jb25jYXQoW3NvdXJjZU1hcHBpbmddKS5qb2luKFwiXFxuXCIpO1xuICB9XG5cbiAgcmV0dXJuIFtjb250ZW50XS5qb2luKFwiXFxuXCIpO1xufTsiLCJcbiAgICAgIGltcG9ydCBBUEkgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanNcIjtcbiAgICAgIGltcG9ydCBkb21BUEkgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydEZuIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qc1wiO1xuICAgICAgaW1wb3J0IHNldEF0dHJpYnV0ZXMgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRTdHlsZUVsZW1lbnQgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanNcIjtcbiAgICAgIGltcG9ydCBzdHlsZVRhZ1RyYW5zZm9ybUZuIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanNcIjtcbiAgICAgIGltcG9ydCBjb250ZW50LCAqIGFzIG5hbWVkRXhwb3J0IGZyb20gXCIhIS4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4uL25vZGVfbW9kdWxlcy9wb3N0Y3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL3N0eWxlLmNzc1wiO1xuICAgICAgXG4gICAgICBcblxudmFyIG9wdGlvbnMgPSB7fTtcblxub3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybSA9IHN0eWxlVGFnVHJhbnNmb3JtRm47XG5vcHRpb25zLnNldEF0dHJpYnV0ZXMgPSBzZXRBdHRyaWJ1dGVzO1xuXG4gICAgICBvcHRpb25zLmluc2VydCA9IGluc2VydEZuLmJpbmQobnVsbCwgXCJoZWFkXCIpO1xuICAgIFxub3B0aW9ucy5kb21BUEkgPSBkb21BUEk7XG5vcHRpb25zLmluc2VydFN0eWxlRWxlbWVudCA9IGluc2VydFN0eWxlRWxlbWVudDtcblxudmFyIHVwZGF0ZSA9IEFQSShjb250ZW50LCBvcHRpb25zKTtcblxuXG5cbmV4cG9ydCAqIGZyb20gXCIhIS4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4uL25vZGVfbW9kdWxlcy9wb3N0Y3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL3N0eWxlLmNzc1wiO1xuICAgICAgIGV4cG9ydCBkZWZhdWx0IGNvbnRlbnQgJiYgY29udGVudC5sb2NhbHMgPyBjb250ZW50LmxvY2FscyA6IHVuZGVmaW5lZDtcbiIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgc3R5bGVzSW5ET00gPSBbXTtcblxuZnVuY3Rpb24gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcikge1xuICB2YXIgcmVzdWx0ID0gLTE7XG5cbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBzdHlsZXNJbkRPTS5sZW5ndGg7IGkrKykge1xuICAgIGlmIChzdHlsZXNJbkRPTVtpXS5pZGVudGlmaWVyID09PSBpZGVudGlmaWVyKSB7XG4gICAgICByZXN1bHQgPSBpO1xuICAgICAgYnJlYWs7XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIHJlc3VsdDtcbn1cblxuZnVuY3Rpb24gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpIHtcbiAgdmFyIGlkQ291bnRNYXAgPSB7fTtcbiAgdmFyIGlkZW50aWZpZXJzID0gW107XG5cbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBsaXN0Lmxlbmd0aDsgaSsrKSB7XG4gICAgdmFyIGl0ZW0gPSBsaXN0W2ldO1xuICAgIHZhciBpZCA9IG9wdGlvbnMuYmFzZSA/IGl0ZW1bMF0gKyBvcHRpb25zLmJhc2UgOiBpdGVtWzBdO1xuICAgIHZhciBjb3VudCA9IGlkQ291bnRNYXBbaWRdIHx8IDA7XG4gICAgdmFyIGlkZW50aWZpZXIgPSBcIlwiLmNvbmNhdChpZCwgXCIgXCIpLmNvbmNhdChjb3VudCk7XG4gICAgaWRDb3VudE1hcFtpZF0gPSBjb3VudCArIDE7XG4gICAgdmFyIGluZGV4QnlJZGVudGlmaWVyID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgdmFyIG9iaiA9IHtcbiAgICAgIGNzczogaXRlbVsxXSxcbiAgICAgIG1lZGlhOiBpdGVtWzJdLFxuICAgICAgc291cmNlTWFwOiBpdGVtWzNdLFxuICAgICAgc3VwcG9ydHM6IGl0ZW1bNF0sXG4gICAgICBsYXllcjogaXRlbVs1XVxuICAgIH07XG5cbiAgICBpZiAoaW5kZXhCeUlkZW50aWZpZXIgIT09IC0xKSB7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleEJ5SWRlbnRpZmllcl0ucmVmZXJlbmNlcysrO1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhCeUlkZW50aWZpZXJdLnVwZGF0ZXIob2JqKTtcbiAgICB9IGVsc2Uge1xuICAgICAgdmFyIHVwZGF0ZXIgPSBhZGRFbGVtZW50U3R5bGUob2JqLCBvcHRpb25zKTtcbiAgICAgIG9wdGlvbnMuYnlJbmRleCA9IGk7XG4gICAgICBzdHlsZXNJbkRPTS5zcGxpY2UoaSwgMCwge1xuICAgICAgICBpZGVudGlmaWVyOiBpZGVudGlmaWVyLFxuICAgICAgICB1cGRhdGVyOiB1cGRhdGVyLFxuICAgICAgICByZWZlcmVuY2VzOiAxXG4gICAgICB9KTtcbiAgICB9XG5cbiAgICBpZGVudGlmaWVycy5wdXNoKGlkZW50aWZpZXIpO1xuICB9XG5cbiAgcmV0dXJuIGlkZW50aWZpZXJzO1xufVxuXG5mdW5jdGlvbiBhZGRFbGVtZW50U3R5bGUob2JqLCBvcHRpb25zKSB7XG4gIHZhciBhcGkgPSBvcHRpb25zLmRvbUFQSShvcHRpb25zKTtcbiAgYXBpLnVwZGF0ZShvYmopO1xuXG4gIHZhciB1cGRhdGVyID0gZnVuY3Rpb24gdXBkYXRlcihuZXdPYmopIHtcbiAgICBpZiAobmV3T2JqKSB7XG4gICAgICBpZiAobmV3T2JqLmNzcyA9PT0gb2JqLmNzcyAmJiBuZXdPYmoubWVkaWEgPT09IG9iai5tZWRpYSAmJiBuZXdPYmouc291cmNlTWFwID09PSBvYmouc291cmNlTWFwICYmIG5ld09iai5zdXBwb3J0cyA9PT0gb2JqLnN1cHBvcnRzICYmIG5ld09iai5sYXllciA9PT0gb2JqLmxheWVyKSB7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cblxuICAgICAgYXBpLnVwZGF0ZShvYmogPSBuZXdPYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICBhcGkucmVtb3ZlKCk7XG4gICAgfVxuICB9O1xuXG4gIHJldHVybiB1cGRhdGVyO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChsaXN0LCBvcHRpb25zKSB7XG4gIG9wdGlvbnMgPSBvcHRpb25zIHx8IHt9O1xuICBsaXN0ID0gbGlzdCB8fCBbXTtcbiAgdmFyIGxhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShsaXN0LCBvcHRpb25zKTtcbiAgcmV0dXJuIGZ1bmN0aW9uIHVwZGF0ZShuZXdMaXN0KSB7XG4gICAgbmV3TGlzdCA9IG5ld0xpc3QgfHwgW107XG5cbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IGkrKykge1xuICAgICAgdmFyIGlkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbaV07XG4gICAgICB2YXIgaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4XS5yZWZlcmVuY2VzLS07XG4gICAgfVxuXG4gICAgdmFyIG5ld0xhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShuZXdMaXN0LCBvcHRpb25zKTtcblxuICAgIGZvciAodmFyIF9pID0gMDsgX2kgPCBsYXN0SWRlbnRpZmllcnMubGVuZ3RoOyBfaSsrKSB7XG4gICAgICB2YXIgX2lkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbX2ldO1xuXG4gICAgICB2YXIgX2luZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoX2lkZW50aWZpZXIpO1xuXG4gICAgICBpZiAoc3R5bGVzSW5ET01bX2luZGV4XS5yZWZlcmVuY2VzID09PSAwKSB7XG4gICAgICAgIHN0eWxlc0luRE9NW19pbmRleF0udXBkYXRlcigpO1xuXG4gICAgICAgIHN0eWxlc0luRE9NLnNwbGljZShfaW5kZXgsIDEpO1xuICAgICAgfVxuICAgIH1cblxuICAgIGxhc3RJZGVudGlmaWVycyA9IG5ld0xhc3RJZGVudGlmaWVycztcbiAgfTtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBtZW1vID0ge307XG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cblxuZnVuY3Rpb24gZ2V0VGFyZ2V0KHRhcmdldCkge1xuICBpZiAodHlwZW9mIG1lbW9bdGFyZ2V0XSA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgIHZhciBzdHlsZVRhcmdldCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IodGFyZ2V0KTsgLy8gU3BlY2lhbCBjYXNlIHRvIHJldHVybiBoZWFkIG9mIGlmcmFtZSBpbnN0ZWFkIG9mIGlmcmFtZSBpdHNlbGZcblxuICAgIGlmICh3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQgJiYgc3R5bGVUYXJnZXQgaW5zdGFuY2VvZiB3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQpIHtcbiAgICAgIHRyeSB7XG4gICAgICAgIC8vIFRoaXMgd2lsbCB0aHJvdyBhbiBleGNlcHRpb24gaWYgYWNjZXNzIHRvIGlmcmFtZSBpcyBibG9ja2VkXG4gICAgICAgIC8vIGR1ZSB0byBjcm9zcy1vcmlnaW4gcmVzdHJpY3Rpb25zXG4gICAgICAgIHN0eWxlVGFyZ2V0ID0gc3R5bGVUYXJnZXQuY29udGVudERvY3VtZW50LmhlYWQ7XG4gICAgICB9IGNhdGNoIChlKSB7XG4gICAgICAgIC8vIGlzdGFuYnVsIGlnbm9yZSBuZXh0XG4gICAgICAgIHN0eWxlVGFyZ2V0ID0gbnVsbDtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBtZW1vW3RhcmdldF0gPSBzdHlsZVRhcmdldDtcbiAgfVxuXG4gIHJldHVybiBtZW1vW3RhcmdldF07XG59XG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cblxuXG5mdW5jdGlvbiBpbnNlcnRCeVNlbGVjdG9yKGluc2VydCwgc3R5bGUpIHtcbiAgdmFyIHRhcmdldCA9IGdldFRhcmdldChpbnNlcnQpO1xuXG4gIGlmICghdGFyZ2V0KSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKFwiQ291bGRuJ3QgZmluZCBhIHN0eWxlIHRhcmdldC4gVGhpcyBwcm9iYWJseSBtZWFucyB0aGF0IHRoZSB2YWx1ZSBmb3IgdGhlICdpbnNlcnQnIHBhcmFtZXRlciBpcyBpbnZhbGlkLlwiKTtcbiAgfVxuXG4gIHRhcmdldC5hcHBlbmRDaGlsZChzdHlsZSk7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gaW5zZXJ0QnlTZWxlY3RvcjsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBpbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucykge1xuICB2YXIgZWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJzdHlsZVwiKTtcbiAgb3B0aW9ucy5zZXRBdHRyaWJ1dGVzKGVsZW1lbnQsIG9wdGlvbnMuYXR0cmlidXRlcyk7XG4gIG9wdGlvbnMuaW5zZXJ0KGVsZW1lbnQsIG9wdGlvbnMub3B0aW9ucyk7XG4gIHJldHVybiBlbGVtZW50O1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGluc2VydFN0eWxlRWxlbWVudDsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBzZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMoc3R5bGVFbGVtZW50KSB7XG4gIHZhciBub25jZSA9IHR5cGVvZiBfX3dlYnBhY2tfbm9uY2VfXyAhPT0gXCJ1bmRlZmluZWRcIiA/IF9fd2VicGFja19ub25jZV9fIDogbnVsbDtcblxuICBpZiAobm9uY2UpIHtcbiAgICBzdHlsZUVsZW1lbnQuc2V0QXR0cmlidXRlKFwibm9uY2VcIiwgbm9uY2UpO1xuICB9XG59XG5cbm1vZHVsZS5leHBvcnRzID0gc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGFwcGx5KHN0eWxlRWxlbWVudCwgb3B0aW9ucywgb2JqKSB7XG4gIHZhciBjc3MgPSBcIlwiO1xuXG4gIGlmIChvYmouc3VwcG9ydHMpIHtcbiAgICBjc3MgKz0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChvYmouc3VwcG9ydHMsIFwiKSB7XCIpO1xuICB9XG5cbiAgaWYgKG9iai5tZWRpYSkge1xuICAgIGNzcyArPSBcIkBtZWRpYSBcIi5jb25jYXQob2JqLm1lZGlhLCBcIiB7XCIpO1xuICB9XG5cbiAgdmFyIG5lZWRMYXllciA9IHR5cGVvZiBvYmoubGF5ZXIgIT09IFwidW5kZWZpbmVkXCI7XG5cbiAgaWYgKG5lZWRMYXllcikge1xuICAgIGNzcyArPSBcIkBsYXllclwiLmNvbmNhdChvYmoubGF5ZXIubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChvYmoubGF5ZXIpIDogXCJcIiwgXCIge1wiKTtcbiAgfVxuXG4gIGNzcyArPSBvYmouY3NzO1xuXG4gIGlmIChuZWVkTGF5ZXIpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cblxuICBpZiAob2JqLm1lZGlhKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG5cbiAgaWYgKG9iai5zdXBwb3J0cykge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuXG4gIHZhciBzb3VyY2VNYXAgPSBvYmouc291cmNlTWFwO1xuXG4gIGlmIChzb3VyY2VNYXAgJiYgdHlwZW9mIGJ0b2EgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICBjc3MgKz0gXCJcXG4vKiMgc291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247YmFzZTY0LFwiLmNvbmNhdChidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShzb3VyY2VNYXApKSkpLCBcIiAqL1wiKTtcbiAgfSAvLyBGb3Igb2xkIElFXG5cbiAgLyogaXN0YW5idWwgaWdub3JlIGlmICAqL1xuXG5cbiAgb3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybShjc3MsIHN0eWxlRWxlbWVudCwgb3B0aW9ucy5vcHRpb25zKTtcbn1cblxuZnVuY3Rpb24gcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlRWxlbWVudCkge1xuICAvLyBpc3RhbmJ1bCBpZ25vcmUgaWZcbiAgaWYgKHN0eWxlRWxlbWVudC5wYXJlbnROb2RlID09PSBudWxsKSB7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG5cbiAgc3R5bGVFbGVtZW50LnBhcmVudE5vZGUucmVtb3ZlQ2hpbGQoc3R5bGVFbGVtZW50KTtcbn1cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuXG5cbmZ1bmN0aW9uIGRvbUFQSShvcHRpb25zKSB7XG4gIHZhciBzdHlsZUVsZW1lbnQgPSBvcHRpb25zLmluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKTtcbiAgcmV0dXJuIHtcbiAgICB1cGRhdGU6IGZ1bmN0aW9uIHVwZGF0ZShvYmopIHtcbiAgICAgIGFwcGx5KHN0eWxlRWxlbWVudCwgb3B0aW9ucywgb2JqKTtcbiAgICB9LFxuICAgIHJlbW92ZTogZnVuY3Rpb24gcmVtb3ZlKCkge1xuICAgICAgcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlRWxlbWVudCk7XG4gICAgfVxuICB9O1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGRvbUFQSTsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBzdHlsZVRhZ1RyYW5zZm9ybShjc3MsIHN0eWxlRWxlbWVudCkge1xuICBpZiAoc3R5bGVFbGVtZW50LnN0eWxlU2hlZXQpIHtcbiAgICBzdHlsZUVsZW1lbnQuc3R5bGVTaGVldC5jc3NUZXh0ID0gY3NzO1xuICB9IGVsc2Uge1xuICAgIHdoaWxlIChzdHlsZUVsZW1lbnQuZmlyc3RDaGlsZCkge1xuICAgICAgc3R5bGVFbGVtZW50LnJlbW92ZUNoaWxkKHN0eWxlRWxlbWVudC5maXJzdENoaWxkKTtcbiAgICB9XG5cbiAgICBzdHlsZUVsZW1lbnQuYXBwZW5kQ2hpbGQoZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUoY3NzKSk7XG4gIH1cbn1cblxubW9kdWxlLmV4cG9ydHMgPSBzdHlsZVRhZ1RyYW5zZm9ybTsiLCJleHBvcnQgZGVmYXVsdCAvXig/OlswLTlhLWZdezh9LVswLTlhLWZdezR9LVsxLTVdWzAtOWEtZl17M30tWzg5YWJdWzAtOWEtZl17M30tWzAtOWEtZl17MTJ9fDAwMDAwMDAwLTAwMDAtMDAwMC0wMDAwLTAwMDAwMDAwMDAwMCkkL2k7IiwiLy8gVW5pcXVlIElEIGNyZWF0aW9uIHJlcXVpcmVzIGEgaGlnaCBxdWFsaXR5IHJhbmRvbSAjIGdlbmVyYXRvci4gSW4gdGhlIGJyb3dzZXIgd2UgdGhlcmVmb3JlXG4vLyByZXF1aXJlIHRoZSBjcnlwdG8gQVBJIGFuZCBkbyBub3Qgc3VwcG9ydCBidWlsdC1pbiBmYWxsYmFjayB0byBsb3dlciBxdWFsaXR5IHJhbmRvbSBudW1iZXJcbi8vIGdlbmVyYXRvcnMgKGxpa2UgTWF0aC5yYW5kb20oKSkuXG52YXIgZ2V0UmFuZG9tVmFsdWVzO1xudmFyIHJuZHM4ID0gbmV3IFVpbnQ4QXJyYXkoMTYpO1xuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gcm5nKCkge1xuICAvLyBsYXp5IGxvYWQgc28gdGhhdCBlbnZpcm9ubWVudHMgdGhhdCBuZWVkIHRvIHBvbHlmaWxsIGhhdmUgYSBjaGFuY2UgdG8gZG8gc29cbiAgaWYgKCFnZXRSYW5kb21WYWx1ZXMpIHtcbiAgICAvLyBnZXRSYW5kb21WYWx1ZXMgbmVlZHMgdG8gYmUgaW52b2tlZCBpbiBhIGNvbnRleHQgd2hlcmUgXCJ0aGlzXCIgaXMgYSBDcnlwdG8gaW1wbGVtZW50YXRpb24uIEFsc28sXG4gICAgLy8gZmluZCB0aGUgY29tcGxldGUgaW1wbGVtZW50YXRpb24gb2YgY3J5cHRvIChtc0NyeXB0bykgb24gSUUxMS5cbiAgICBnZXRSYW5kb21WYWx1ZXMgPSB0eXBlb2YgY3J5cHRvICE9PSAndW5kZWZpbmVkJyAmJiBjcnlwdG8uZ2V0UmFuZG9tVmFsdWVzICYmIGNyeXB0by5nZXRSYW5kb21WYWx1ZXMuYmluZChjcnlwdG8pIHx8IHR5cGVvZiBtc0NyeXB0byAhPT0gJ3VuZGVmaW5lZCcgJiYgdHlwZW9mIG1zQ3J5cHRvLmdldFJhbmRvbVZhbHVlcyA9PT0gJ2Z1bmN0aW9uJyAmJiBtc0NyeXB0by5nZXRSYW5kb21WYWx1ZXMuYmluZChtc0NyeXB0byk7XG5cbiAgICBpZiAoIWdldFJhbmRvbVZhbHVlcykge1xuICAgICAgdGhyb3cgbmV3IEVycm9yKCdjcnlwdG8uZ2V0UmFuZG9tVmFsdWVzKCkgbm90IHN1cHBvcnRlZC4gU2VlIGh0dHBzOi8vZ2l0aHViLmNvbS91dWlkanMvdXVpZCNnZXRyYW5kb212YWx1ZXMtbm90LXN1cHBvcnRlZCcpO1xuICAgIH1cbiAgfVxuXG4gIHJldHVybiBnZXRSYW5kb21WYWx1ZXMocm5kczgpO1xufSIsImltcG9ydCB2YWxpZGF0ZSBmcm9tICcuL3ZhbGlkYXRlLmpzJztcbi8qKlxuICogQ29udmVydCBhcnJheSBvZiAxNiBieXRlIHZhbHVlcyB0byBVVUlEIHN0cmluZyBmb3JtYXQgb2YgdGhlIGZvcm06XG4gKiBYWFhYWFhYWC1YWFhYLVhYWFgtWFhYWC1YWFhYWFhYWFhYWFhcbiAqL1xuXG52YXIgYnl0ZVRvSGV4ID0gW107XG5cbmZvciAodmFyIGkgPSAwOyBpIDwgMjU2OyArK2kpIHtcbiAgYnl0ZVRvSGV4LnB1c2goKGkgKyAweDEwMCkudG9TdHJpbmcoMTYpLnN1YnN0cigxKSk7XG59XG5cbmZ1bmN0aW9uIHN0cmluZ2lmeShhcnIpIHtcbiAgdmFyIG9mZnNldCA9IGFyZ3VtZW50cy5sZW5ndGggPiAxICYmIGFyZ3VtZW50c1sxXSAhPT0gdW5kZWZpbmVkID8gYXJndW1lbnRzWzFdIDogMDtcbiAgLy8gTm90ZTogQmUgY2FyZWZ1bCBlZGl0aW5nIHRoaXMgY29kZSEgIEl0J3MgYmVlbiB0dW5lZCBmb3IgcGVyZm9ybWFuY2VcbiAgLy8gYW5kIHdvcmtzIGluIHdheXMgeW91IG1heSBub3QgZXhwZWN0LiBTZWUgaHR0cHM6Ly9naXRodWIuY29tL3V1aWRqcy91dWlkL3B1bGwvNDM0XG4gIHZhciB1dWlkID0gKGJ5dGVUb0hleFthcnJbb2Zmc2V0ICsgMF1dICsgYnl0ZVRvSGV4W2FycltvZmZzZXQgKyAxXV0gKyBieXRlVG9IZXhbYXJyW29mZnNldCArIDJdXSArIGJ5dGVUb0hleFthcnJbb2Zmc2V0ICsgM11dICsgJy0nICsgYnl0ZVRvSGV4W2FycltvZmZzZXQgKyA0XV0gKyBieXRlVG9IZXhbYXJyW29mZnNldCArIDVdXSArICctJyArIGJ5dGVUb0hleFthcnJbb2Zmc2V0ICsgNl1dICsgYnl0ZVRvSGV4W2FycltvZmZzZXQgKyA3XV0gKyAnLScgKyBieXRlVG9IZXhbYXJyW29mZnNldCArIDhdXSArIGJ5dGVUb0hleFthcnJbb2Zmc2V0ICsgOV1dICsgJy0nICsgYnl0ZVRvSGV4W2FycltvZmZzZXQgKyAxMF1dICsgYnl0ZVRvSGV4W2FycltvZmZzZXQgKyAxMV1dICsgYnl0ZVRvSGV4W2FycltvZmZzZXQgKyAxMl1dICsgYnl0ZVRvSGV4W2FycltvZmZzZXQgKyAxM11dICsgYnl0ZVRvSGV4W2FycltvZmZzZXQgKyAxNF1dICsgYnl0ZVRvSGV4W2FycltvZmZzZXQgKyAxNV1dKS50b0xvd2VyQ2FzZSgpOyAvLyBDb25zaXN0ZW5jeSBjaGVjayBmb3IgdmFsaWQgVVVJRC4gIElmIHRoaXMgdGhyb3dzLCBpdCdzIGxpa2VseSBkdWUgdG8gb25lXG4gIC8vIG9mIHRoZSBmb2xsb3dpbmc6XG4gIC8vIC0gT25lIG9yIG1vcmUgaW5wdXQgYXJyYXkgdmFsdWVzIGRvbid0IG1hcCB0byBhIGhleCBvY3RldCAobGVhZGluZyB0b1xuICAvLyBcInVuZGVmaW5lZFwiIGluIHRoZSB1dWlkKVxuICAvLyAtIEludmFsaWQgaW5wdXQgdmFsdWVzIGZvciB0aGUgUkZDIGB2ZXJzaW9uYCBvciBgdmFyaWFudGAgZmllbGRzXG5cbiAgaWYgKCF2YWxpZGF0ZSh1dWlkKSkge1xuICAgIHRocm93IFR5cGVFcnJvcignU3RyaW5naWZpZWQgVVVJRCBpcyBpbnZhbGlkJyk7XG4gIH1cblxuICByZXR1cm4gdXVpZDtcbn1cblxuZXhwb3J0IGRlZmF1bHQgc3RyaW5naWZ5OyIsImltcG9ydCBybmcgZnJvbSAnLi9ybmcuanMnO1xuaW1wb3J0IHN0cmluZ2lmeSBmcm9tICcuL3N0cmluZ2lmeS5qcyc7XG5cbmZ1bmN0aW9uIHY0KG9wdGlvbnMsIGJ1Ziwgb2Zmc2V0KSB7XG4gIG9wdGlvbnMgPSBvcHRpb25zIHx8IHt9O1xuICB2YXIgcm5kcyA9IG9wdGlvbnMucmFuZG9tIHx8IChvcHRpb25zLnJuZyB8fCBybmcpKCk7IC8vIFBlciA0LjQsIHNldCBiaXRzIGZvciB2ZXJzaW9uIGFuZCBgY2xvY2tfc2VxX2hpX2FuZF9yZXNlcnZlZGBcblxuICBybmRzWzZdID0gcm5kc1s2XSAmIDB4MGYgfCAweDQwO1xuICBybmRzWzhdID0gcm5kc1s4XSAmIDB4M2YgfCAweDgwOyAvLyBDb3B5IGJ5dGVzIHRvIGJ1ZmZlciwgaWYgcHJvdmlkZWRcblxuICBpZiAoYnVmKSB7XG4gICAgb2Zmc2V0ID0gb2Zmc2V0IHx8IDA7XG5cbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IDE2OyArK2kpIHtcbiAgICAgIGJ1ZltvZmZzZXQgKyBpXSA9IHJuZHNbaV07XG4gICAgfVxuXG4gICAgcmV0dXJuIGJ1ZjtcbiAgfVxuXG4gIHJldHVybiBzdHJpbmdpZnkocm5kcyk7XG59XG5cbmV4cG9ydCBkZWZhdWx0IHY0OyIsImltcG9ydCBSRUdFWCBmcm9tICcuL3JlZ2V4LmpzJztcblxuZnVuY3Rpb24gdmFsaWRhdGUodXVpZCkge1xuICByZXR1cm4gdHlwZW9mIHV1aWQgPT09ICdzdHJpbmcnICYmIFJFR0VYLnRlc3QodXVpZCk7XG59XG5cbmV4cG9ydCBkZWZhdWx0IHZhbGlkYXRlOyIsImltcG9ydCB7IHY0IGFzIHV1aWR2NCB9IGZyb20gXCJ1dWlkXCI7XG5cbmV4cG9ydCBjbGFzcyBQcm9qZWN0IHtcbiAgY29uc3RydWN0b3IobmFtZSkge1xuICAgIHRoaXMubmFtZSA9IG5hbWU7XG4gICAgdGhpcy5pZCA9IHV1aWR2NCgpO1xuICB9XG59XG4iLCJjbGFzcyBTdG9yYWdlIHtcbiAgY29uc3RydWN0b3IoKSB7XG4gICAgdGhpcy5wcm9qZWN0cyA9IFtdO1xuICAgIHRoaXMuY3VycmVudFByb2plY3RJRCA9IFwiXCI7XG4gICAgdGhpcy50YXNrcyA9IFtdO1xuICB9XG5cbiAgYWRkUHJvamVjdChwcm9qZWN0KSB7XG4gICAgdGhpcy5wcm9qZWN0cy5wdXNoKHByb2plY3QpO1xuICAgIHRoaXMuY3VycmVudFByb2plY3RJRCA9IHByb2plY3QuaWQ7XG4gIH1cblxuICBzZXRDdXJyZW50UHJvamVjdChwcm9qZWN0SUQpIHtcbiAgICB0aGlzLmN1cnJlbnRQcm9qZWN0SUQgPSBwcm9qZWN0SUQ7XG4gIH1cbn1cblxuZXhwb3J0IGNvbnN0IHN0b3JhZ2UgPSBuZXcgU3RvcmFnZSgpO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbmltcG9ydCB7IHN0b3JhZ2UgfSBmcm9tIFwiLi9zdG9yYWdlXCI7XG5pbXBvcnQgeyBjcmVhdGVQcm9qZWN0IH0gZnJvbSBcIi4vdXRpbHNcIjtcblxuY29uc3QgYnRuQWRkUHJvamVjdCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuYnRuLWFkZC1wcm9qZWN0XCIpO1xuY29uc3QgcHJvamVjdEZvcm0gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLnByb2plY3QtZm9ybVwiKTtcbmNvbnN0IGlucHV0UHJvamVjdE5hbWUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI3Byb2plY3QtbmFtZVwiKTtcbmNvbnN0IGJ0bkFkZCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuYWRkXCIpO1xuY29uc3QgYnRuQ2FuY2VsID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5jYW5jZWxcIik7XG5jb25zdCBwcm9qZWN0c0xpc3QgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLnByb2plY3RzLWxpc3RcIik7XG5jb25zdCBidG5UaGVtZVN3aXRjaCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIudGhlbWUtc3dpdGNoXCIpO1xuXG5jb25zdCB0b2dnbGVEYXJrID0gZnVuY3Rpb24gKCkge1xuICBkb2N1bWVudC5kb2N1bWVudEVsZW1lbnQuY2xhc3NMaXN0LnRvZ2dsZShcImRhcmtcIik7XG59O1xuXG5jb25zdCB0b2dnbGVQcm9qZWN0SW5wdXQgPSBmdW5jdGlvbiAoKSB7XG4gIGJ0bkFkZFByb2plY3QuY2xhc3NMaXN0LnRvZ2dsZShcImhpZGRlblwiKTtcbiAgcHJvamVjdEZvcm0uY2xhc3NMaXN0LnRvZ2dsZShcImhpZGRlblwiKTtcbn07XG5cbi8vIGV5ZSBwcm90ZWN0aW9uXG5idG5UaGVtZVN3aXRjaC5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgdG9nZ2xlRGFyayk7XG5cbmNvbnN0IGhpZ2hsaWdodEN1cnJlbnRQcm9qZWN0ID0gZnVuY3Rpb24gKCkge1xuICBjb25zdCBjdXJyZW50UHJvamVjdElEID0gc3RvcmFnZS5jdXJyZW50UHJvamVjdElEO1xuICBjb25zdCBwcm9qZWN0ID0gQXJyYXkuZnJvbShwcm9qZWN0c0xpc3QuY2hpbGRyZW4pLmZpbmQoXG4gICAgKGVsKSA9PiBlbC5kYXRhc2V0LmlkID09PSBjdXJyZW50UHJvamVjdElEXG4gICk7XG4gIEFycmF5LmZyb20ocHJvamVjdHNMaXN0LmNoaWxkcmVuKS5mb3JFYWNoKChlbCkgPT5cbiAgICBlbC5jbGFzc0xpc3QucmVtb3ZlKFwiYWN0aXZlXCIpXG4gICk7XG4gIHByb2plY3QuY2xhc3NMaXN0LmFkZChcImFjdGl2ZVwiKTtcbn07XG5cbmNvbnN0IHJlZHJhd1Byb2plY3RzID0gZnVuY3Rpb24gKCkge1xuICBwcm9qZWN0c0xpc3QuaW5uZXJIVE1MID0gXCJcIjtcbiAgc3RvcmFnZS5wcm9qZWN0cy5mb3JFYWNoKChwcm9qZWN0KSA9PiB7XG4gICAgcHJvamVjdHNMaXN0Lmluc2VydEFkamFjZW50SFRNTChcbiAgICAgIFwiYWZ0ZXJiZWdpblwiLFxuICAgICAgYDxhIGhyZWY9XCIjXCIgY2xhc3M9XCJwcm9qZWN0XCIgZGF0YS1pZD1cIiR7cHJvamVjdC5pZH1cIj4ke3Byb2plY3QubmFtZX08L2E+YFxuICAgICk7XG4gIH0pO1xuICBoaWdobGlnaHRDdXJyZW50UHJvamVjdCgpO1xufTtcblxuYnRuQWRkUHJvamVjdC5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgZnVuY3Rpb24gKCkge1xuICB0b2dnbGVQcm9qZWN0SW5wdXQoKTtcbiAgaW5wdXRQcm9qZWN0TmFtZS5mb2N1cygpO1xuICBpbnB1dFByb2plY3ROYW1lLnZhbHVlID0gXCJcIjtcbn0pO1xuXG5idG5DYW5jZWwuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIHRvZ2dsZVByb2plY3RJbnB1dCk7XG5cbmJ0bkFkZC5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgZnVuY3Rpb24gKCkge1xuICBjb25zdCBwcm9qZWN0TmFtZSA9IGlucHV0UHJvamVjdE5hbWUudmFsdWU7XG4gIGNyZWF0ZVByb2plY3QocHJvamVjdE5hbWUpO1xuICByZWRyYXdQcm9qZWN0cygpO1xuICBpbnB1dFByb2plY3ROYW1lLnZhbHVlID0gXCJcIjtcbn0pO1xuXG5wcm9qZWN0c0xpc3QuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIGZ1bmN0aW9uIChlKSB7XG4gIGlmICghZS50YXJnZXQuY2xhc3NMaXN0LmNvbnRhaW5zKFwicHJvamVjdFwiKSkgcmV0dXJuO1xuICBzdG9yYWdlLnNldEN1cnJlbnRQcm9qZWN0KGUudGFyZ2V0LmRhdGFzZXQuaWQpO1xuICBoaWdobGlnaHRDdXJyZW50UHJvamVjdCgpO1xufSk7XG4iLCJpbXBvcnQgeyBQcm9qZWN0IH0gZnJvbSBcIi4vcHJvamVjdFwiO1xuaW1wb3J0IHsgc3RvcmFnZSB9IGZyb20gXCIuL3N0b3JhZ2VcIjtcblxuZXhwb3J0IGNvbnN0IGNyZWF0ZVByb2plY3QgPSBmdW5jdGlvbiAocHJvamVjdE5hbWUpIHtcbiAgY29uc3QgcHJvamVjdCA9IG5ldyBQcm9qZWN0KHByb2plY3ROYW1lKTtcbiAgc3RvcmFnZS5hZGRQcm9qZWN0KHByb2plY3QpO1xufTtcbiIsIi8vIFRoZSBtb2R1bGUgY2FjaGVcbnZhciBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX18gPSB7fTtcblxuLy8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbmZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG5cdHZhciBjYWNoZWRNb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdO1xuXHRpZiAoY2FjaGVkTW9kdWxlICE9PSB1bmRlZmluZWQpIHtcblx0XHRyZXR1cm4gY2FjaGVkTW9kdWxlLmV4cG9ydHM7XG5cdH1cblx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcblx0dmFyIG1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0gPSB7XG5cdFx0aWQ6IG1vZHVsZUlkLFxuXHRcdC8vIG5vIG1vZHVsZS5sb2FkZWQgbmVlZGVkXG5cdFx0ZXhwb3J0czoge31cblx0fTtcblxuXHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cblx0X193ZWJwYWNrX21vZHVsZXNfX1ttb2R1bGVJZF0obW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cblx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcblx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xufVxuXG4iLCIvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuX193ZWJwYWNrX3JlcXVpcmVfXy5uID0gKG1vZHVsZSkgPT4ge1xuXHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cblx0XHQoKSA9PiAobW9kdWxlWydkZWZhdWx0J10pIDpcblx0XHQoKSA9PiAobW9kdWxlKTtcblx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgeyBhOiBnZXR0ZXIgfSk7XG5cdHJldHVybiBnZXR0ZXI7XG59OyIsIi8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb25zIGZvciBoYXJtb255IGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uZCA9IChleHBvcnRzLCBkZWZpbml0aW9uKSA9PiB7XG5cdGZvcih2YXIga2V5IGluIGRlZmluaXRpb24pIHtcblx0XHRpZihfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZGVmaW5pdGlvbiwga2V5KSAmJiAhX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIGtleSkpIHtcblx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBrZXksIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBkZWZpbml0aW9uW2tleV0gfSk7XG5cdFx0fVxuXHR9XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18ubyA9IChvYmosIHByb3ApID0+IChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBwcm9wKSkiLCIvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSAoZXhwb3J0cykgPT4ge1xuXHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcblx0fVxuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm5jID0gdW5kZWZpbmVkOyIsImltcG9ydCBcIi4vc3R5bGUuY3NzXCI7XG5pbXBvcnQgXCIuL3VpXCI7XG4iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=