// modules are defined as an array
// [ module function, map of requires ]
//
// map of requires is short require name -> numeric require
//
// anything defined in a previous bundle is accessed via the
// orig method which is the require for previous bundles
parcelRequire = (function (modules, cache, entry, globalName) {
  // Save the require from previous bundle to this closure if any
  var previousRequire = typeof parcelRequire === 'function' && parcelRequire;
  var nodeRequire = typeof require === 'function' && require;

  function newRequire(name, jumped) {
    if (!cache[name]) {
      if (!modules[name]) {
        // if we cannot find the module within our internal map or
        // cache jump to the current global require ie. the last bundle
        // that was added to the page.
        var currentRequire = typeof parcelRequire === 'function' && parcelRequire;
        if (!jumped && currentRequire) {
          return currentRequire(name, true);
        }

        // If there are other bundles on this page the require from the
        // previous one is saved to 'previousRequire'. Repeat this as
        // many times as there are bundles until the module is found or
        // we exhaust the require chain.
        if (previousRequire) {
          return previousRequire(name, true);
        }

        // Try the node require function if it exists.
        if (nodeRequire && typeof name === 'string') {
          return nodeRequire(name);
        }

        var err = new Error('Cannot find module \'' + name + '\'');
        err.code = 'MODULE_NOT_FOUND';
        throw err;
      }

      localRequire.resolve = resolve;
      localRequire.cache = {};

      var module = cache[name] = new newRequire.Module(name);

      modules[name][0].call(module.exports, localRequire, module, module.exports, this);
    }

    return cache[name].exports;

    function localRequire(x){
      return newRequire(localRequire.resolve(x));
    }

    function resolve(x){
      return modules[name][1][x] || x;
    }
  }

  function Module(moduleName) {
    this.id = moduleName;
    this.bundle = newRequire;
    this.exports = {};
  }

  newRequire.isParcelRequire = true;
  newRequire.Module = Module;
  newRequire.modules = modules;
  newRequire.cache = cache;
  newRequire.parent = previousRequire;
  newRequire.register = function (id, exports) {
    modules[id] = [function (require, module) {
      module.exports = exports;
    }, {}];
  };

  var error;
  for (var i = 0; i < entry.length; i++) {
    try {
      newRequire(entry[i]);
    } catch (e) {
      // Save first error but execute all entries
      if (!error) {
        error = e;
      }
    }
  }

  if (entry.length) {
    // Expose entry point to Node, AMD or browser globals
    // Based on https://github.com/ForbesLindesay/umd/blob/master/template.js
    var mainExports = newRequire(entry[entry.length - 1]);

    // CommonJS
    if (typeof exports === "object" && typeof module !== "undefined") {
      module.exports = mainExports;

    // RequireJS
    } else if (typeof define === "function" && define.amd) {
     define(function () {
       return mainExports;
     });

    // <script>
    } else if (globalName) {
      this[globalName] = mainExports;
    }
  }

  // Override the current require with this new one
  parcelRequire = newRequire;

  if (error) {
    // throw error from earlier, _after updating parcelRequire_
    throw error;
  }

  return newRequire;
})({"elements.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.createElement = createElement;
function createElement(tag, className, text, location, attribute, value) {
  var element = document.createElement(tag);
  element.className = className;
  element.innerHTML = text;
  location.append(element);
  if (attribute && value) {
    element.setAttribute(attribute, value);
  }
  return element;
}
},{}],"requests.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.getData = getData;
function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
function _regeneratorRuntime() { "use strict"; /*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/facebook/regenerator/blob/main/LICENSE */ _regeneratorRuntime = function _regeneratorRuntime() { return e; }; var t, e = {}, r = Object.prototype, n = r.hasOwnProperty, o = Object.defineProperty || function (t, e, r) { t[e] = r.value; }, i = "function" == typeof Symbol ? Symbol : {}, a = i.iterator || "@@iterator", c = i.asyncIterator || "@@asyncIterator", u = i.toStringTag || "@@toStringTag"; function define(t, e, r) { return Object.defineProperty(t, e, { value: r, enumerable: !0, configurable: !0, writable: !0 }), t[e]; } try { define({}, ""); } catch (t) { define = function define(t, e, r) { return t[e] = r; }; } function wrap(t, e, r, n) { var i = e && e.prototype instanceof Generator ? e : Generator, a = Object.create(i.prototype), c = new Context(n || []); return o(a, "_invoke", { value: makeInvokeMethod(t, r, c) }), a; } function tryCatch(t, e, r) { try { return { type: "normal", arg: t.call(e, r) }; } catch (t) { return { type: "throw", arg: t }; } } e.wrap = wrap; var h = "suspendedStart", l = "suspendedYield", f = "executing", s = "completed", y = {}; function Generator() {} function GeneratorFunction() {} function GeneratorFunctionPrototype() {} var p = {}; define(p, a, function () { return this; }); var d = Object.getPrototypeOf, v = d && d(d(values([]))); v && v !== r && n.call(v, a) && (p = v); var g = GeneratorFunctionPrototype.prototype = Generator.prototype = Object.create(p); function defineIteratorMethods(t) { ["next", "throw", "return"].forEach(function (e) { define(t, e, function (t) { return this._invoke(e, t); }); }); } function AsyncIterator(t, e) { function invoke(r, o, i, a) { var c = tryCatch(t[r], t, o); if ("throw" !== c.type) { var u = c.arg, h = u.value; return h && "object" == _typeof(h) && n.call(h, "__await") ? e.resolve(h.__await).then(function (t) { invoke("next", t, i, a); }, function (t) { invoke("throw", t, i, a); }) : e.resolve(h).then(function (t) { u.value = t, i(u); }, function (t) { return invoke("throw", t, i, a); }); } a(c.arg); } var r; o(this, "_invoke", { value: function value(t, n) { function callInvokeWithMethodAndArg() { return new e(function (e, r) { invoke(t, n, e, r); }); } return r = r ? r.then(callInvokeWithMethodAndArg, callInvokeWithMethodAndArg) : callInvokeWithMethodAndArg(); } }); } function makeInvokeMethod(e, r, n) { var o = h; return function (i, a) { if (o === f) throw new Error("Generator is already running"); if (o === s) { if ("throw" === i) throw a; return { value: t, done: !0 }; } for (n.method = i, n.arg = a;;) { var c = n.delegate; if (c) { var u = maybeInvokeDelegate(c, n); if (u) { if (u === y) continue; return u; } } if ("next" === n.method) n.sent = n._sent = n.arg;else if ("throw" === n.method) { if (o === h) throw o = s, n.arg; n.dispatchException(n.arg); } else "return" === n.method && n.abrupt("return", n.arg); o = f; var p = tryCatch(e, r, n); if ("normal" === p.type) { if (o = n.done ? s : l, p.arg === y) continue; return { value: p.arg, done: n.done }; } "throw" === p.type && (o = s, n.method = "throw", n.arg = p.arg); } }; } function maybeInvokeDelegate(e, r) { var n = r.method, o = e.iterator[n]; if (o === t) return r.delegate = null, "throw" === n && e.iterator.return && (r.method = "return", r.arg = t, maybeInvokeDelegate(e, r), "throw" === r.method) || "return" !== n && (r.method = "throw", r.arg = new TypeError("The iterator does not provide a '" + n + "' method")), y; var i = tryCatch(o, e.iterator, r.arg); if ("throw" === i.type) return r.method = "throw", r.arg = i.arg, r.delegate = null, y; var a = i.arg; return a ? a.done ? (r[e.resultName] = a.value, r.next = e.nextLoc, "return" !== r.method && (r.method = "next", r.arg = t), r.delegate = null, y) : a : (r.method = "throw", r.arg = new TypeError("iterator result is not an object"), r.delegate = null, y); } function pushTryEntry(t) { var e = { tryLoc: t[0] }; 1 in t && (e.catchLoc = t[1]), 2 in t && (e.finallyLoc = t[2], e.afterLoc = t[3]), this.tryEntries.push(e); } function resetTryEntry(t) { var e = t.completion || {}; e.type = "normal", delete e.arg, t.completion = e; } function Context(t) { this.tryEntries = [{ tryLoc: "root" }], t.forEach(pushTryEntry, this), this.reset(!0); } function values(e) { if (e || "" === e) { var r = e[a]; if (r) return r.call(e); if ("function" == typeof e.next) return e; if (!isNaN(e.length)) { var o = -1, i = function next() { for (; ++o < e.length;) if (n.call(e, o)) return next.value = e[o], next.done = !1, next; return next.value = t, next.done = !0, next; }; return i.next = i; } } throw new TypeError(_typeof(e) + " is not iterable"); } return GeneratorFunction.prototype = GeneratorFunctionPrototype, o(g, "constructor", { value: GeneratorFunctionPrototype, configurable: !0 }), o(GeneratorFunctionPrototype, "constructor", { value: GeneratorFunction, configurable: !0 }), GeneratorFunction.displayName = define(GeneratorFunctionPrototype, u, "GeneratorFunction"), e.isGeneratorFunction = function (t) { var e = "function" == typeof t && t.constructor; return !!e && (e === GeneratorFunction || "GeneratorFunction" === (e.displayName || e.name)); }, e.mark = function (t) { return Object.setPrototypeOf ? Object.setPrototypeOf(t, GeneratorFunctionPrototype) : (t.__proto__ = GeneratorFunctionPrototype, define(t, u, "GeneratorFunction")), t.prototype = Object.create(g), t; }, e.awrap = function (t) { return { __await: t }; }, defineIteratorMethods(AsyncIterator.prototype), define(AsyncIterator.prototype, c, function () { return this; }), e.AsyncIterator = AsyncIterator, e.async = function (t, r, n, o, i) { void 0 === i && (i = Promise); var a = new AsyncIterator(wrap(t, r, n, o), i); return e.isGeneratorFunction(r) ? a : a.next().then(function (t) { return t.done ? t.value : a.next(); }); }, defineIteratorMethods(g), define(g, u, "Generator"), define(g, a, function () { return this; }), define(g, "toString", function () { return "[object Generator]"; }), e.keys = function (t) { var e = Object(t), r = []; for (var n in e) r.push(n); return r.reverse(), function next() { for (; r.length;) { var t = r.pop(); if (t in e) return next.value = t, next.done = !1, next; } return next.done = !0, next; }; }, e.values = values, Context.prototype = { constructor: Context, reset: function reset(e) { if (this.prev = 0, this.next = 0, this.sent = this._sent = t, this.done = !1, this.delegate = null, this.method = "next", this.arg = t, this.tryEntries.forEach(resetTryEntry), !e) for (var r in this) "t" === r.charAt(0) && n.call(this, r) && !isNaN(+r.slice(1)) && (this[r] = t); }, stop: function stop() { this.done = !0; var t = this.tryEntries[0].completion; if ("throw" === t.type) throw t.arg; return this.rval; }, dispatchException: function dispatchException(e) { if (this.done) throw e; var r = this; function handle(n, o) { return a.type = "throw", a.arg = e, r.next = n, o && (r.method = "next", r.arg = t), !!o; } for (var o = this.tryEntries.length - 1; o >= 0; --o) { var i = this.tryEntries[o], a = i.completion; if ("root" === i.tryLoc) return handle("end"); if (i.tryLoc <= this.prev) { var c = n.call(i, "catchLoc"), u = n.call(i, "finallyLoc"); if (c && u) { if (this.prev < i.catchLoc) return handle(i.catchLoc, !0); if (this.prev < i.finallyLoc) return handle(i.finallyLoc); } else if (c) { if (this.prev < i.catchLoc) return handle(i.catchLoc, !0); } else { if (!u) throw new Error("try statement without catch or finally"); if (this.prev < i.finallyLoc) return handle(i.finallyLoc); } } } }, abrupt: function abrupt(t, e) { for (var r = this.tryEntries.length - 1; r >= 0; --r) { var o = this.tryEntries[r]; if (o.tryLoc <= this.prev && n.call(o, "finallyLoc") && this.prev < o.finallyLoc) { var i = o; break; } } i && ("break" === t || "continue" === t) && i.tryLoc <= e && e <= i.finallyLoc && (i = null); var a = i ? i.completion : {}; return a.type = t, a.arg = e, i ? (this.method = "next", this.next = i.finallyLoc, y) : this.complete(a); }, complete: function complete(t, e) { if ("throw" === t.type) throw t.arg; return "break" === t.type || "continue" === t.type ? this.next = t.arg : "return" === t.type ? (this.rval = this.arg = t.arg, this.method = "return", this.next = "end") : "normal" === t.type && e && (this.next = e), y; }, finish: function finish(t) { for (var e = this.tryEntries.length - 1; e >= 0; --e) { var r = this.tryEntries[e]; if (r.finallyLoc === t) return this.complete(r.completion, r.afterLoc), resetTryEntry(r), y; } }, catch: function _catch(t) { for (var e = this.tryEntries.length - 1; e >= 0; --e) { var r = this.tryEntries[e]; if (r.tryLoc === t) { var n = r.completion; if ("throw" === n.type) { var o = n.arg; resetTryEntry(r); } return o; } } throw new Error("illegal catch attempt"); }, delegateYield: function delegateYield(e, r, n) { return this.delegate = { iterator: values(e), resultName: r, nextLoc: n }, "next" === this.method && (this.arg = t), y; } }, e; }
function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }
function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }
var URL = "https://65b8aaf1b71048505a892637.mockapi.io/Pinterest";
function getData() {
  return _getData.apply(this, arguments);
}
function _getData() {
  _getData = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee() {
    var response, data;
    return _regeneratorRuntime().wrap(function _callee$(_context) {
      while (1) switch (_context.prev = _context.next) {
        case 0:
          _context.next = 2;
          return fetch(URL);
        case 2:
          response = _context.sent;
          _context.next = 5;
          return response.json();
        case 5:
          data = _context.sent;
          return _context.abrupt("return", data);
        case 7:
        case "end":
          return _context.stop();
      }
    }, _callee);
  }));
  return _getData.apply(this, arguments);
}
},{}],"script.js":[function(require,module,exports) {
"use strict";

var _elements = require("./elements.js");
var _requests = require("./requests.js");
function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
function ownKeys(e, r) { var t = Object.keys(e); if (Object.getOwnPropertySymbols) { var o = Object.getOwnPropertySymbols(e); r && (o = o.filter(function (r) { return Object.getOwnPropertyDescriptor(e, r).enumerable; })), t.push.apply(t, o); } return t; }
function _objectSpread(e) { for (var r = 1; r < arguments.length; r++) { var t = null != arguments[r] ? arguments[r] : {}; r % 2 ? ownKeys(Object(t), !0).forEach(function (r) { _defineProperty(e, r, t[r]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys(Object(t)).forEach(function (r) { Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r)); }); } return e; }
function _defineProperty(obj, key, value) { key = _toPropertyKey(key); if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == _typeof(i) ? i : String(i); }
function _toPrimitive(t, r) { if ("object" != _typeof(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != _typeof(i)) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }
var root = document.querySelector("#root");

//массив для хранения элементов, загруженных на страницу

var loadedElements = [];

//функция загрузки доски

function loadBoard() {
  var page = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 'main';
  //создаем элементы шапки сайта

  var header = (0, _elements.createElement)("header", "header", "", root);
  var headerBlock = (0, _elements.createElement)("div", "header-block", "", header);
  var headerLogo = (0, _elements.createElement)("i", "fab fa-pinterest", "", headerBlock);
  headerLogo.addEventListener('click', function () {
    root.innerHTML = '';
    loadBoard();
  });
  var search = (0, _elements.createElement)("input", "header-block__search", "", headerBlock, "placeholder", "Поиск");
  var noticeIcon = (0, _elements.createElement)("i", "fas fa-bell", "", headerBlock);
  var messageIcon = (0, _elements.createElement)("i", "fas fa-message", "", headerBlock);
  var dropdown = (0, _elements.createElement)("div", "header-block-dropdown", "", headerBlock);
  var dropdownButton = (0, _elements.createElement)("button", "header-block-dropdown__button", "Выбрать доску", dropdown);
  var dropdownMenu = (0, _elements.createElement)("ul", "header-block-dropdown-menu", "", dropdown);
  var dropdownMenuFirstItem = (0, _elements.createElement)("li", "header-block-dropdown-menu__item", "Доска 1", dropdownMenu);
  dropdownMenuFirstItem.addEventListener('click', function () {
    root.innerHTML = '';
    loadBoard('board1');
  });
  var dropdownMenuSecondItem = (0, _elements.createElement)("li", "header-block-dropdown-menu__item", "Доска 2", dropdownMenu);
  dropdownMenuSecondItem.addEventListener('click', function () {
    root.innerHTML = '';
    loadBoard('board2');
  });
  var dropdownMenuThirdItem = (0, _elements.createElement)("li", "header-block-dropdown-menu__item", "Доска 3", dropdownMenu);
  dropdownMenuThirdItem.addEventListener('click', function () {
    root.innerHTML = '';
    loadBoard('board3');
  });

  //функция раскрывающегося списка

  function showDropdown() {
    var dropdownContent = document.querySelector(".header-block-dropdown");
    var dropdownButton = dropdownContent.querySelector(".header-block-dropdown__button");
    dropdownButton.addEventListener("click", function () {
      dropdownContent.classList.toggle("show-dropdown");
    });
  }
  showDropdown();

  //создание контейнера, в котором будут отображаться посты

  var frame = (0, _elements.createElement)("main", "frame", "", root);

  //функция для создания одного поста

  function createOnePost(data, i) {
    var post = (0, _elements.createElement)("div", "post", "", frame);
    var picture = (0, _elements.createElement)("div", "post-picture", "", post);
    picture.id = i;
    var photo = (0, _elements.createElement)("img", "post-picture__photo", "", picture);
    var menuIcon = (0, _elements.createElement)("i", "fas fa-ellipsis", "", picture);
    var description = (0, _elements.createElement)("div", "post-description", "", post);
    var avatar = (0, _elements.createElement)("img", "post-description__avatar", "", description);
    var hashtag = (0, _elements.createElement)("h4", "post-description__hashtag", "", description);
    return post;
  }

  //создания постов на основе данных с сервера

  if (page == 'main') {
    //если отображается главная доска, загружаем данные с сервера

    loadedElements = [];
    (0, _requests.getData)().then(function (data) {
      data.forEach(function (postData, i) {
        loadedElements.push(_objectSpread({
          id: i
        }, postData));
        var postElement = createOnePost(postData, i);
        var photo = postElement.querySelector(".post-picture__photo");
        var avatar = postElement.querySelector(".post-description__avatar");
        var hashtag = postElement.querySelector(".post-description__hashtag");
        photo.setAttribute("src", "".concat(postData.picture, "?random=").concat(postData.id));
        avatar.setAttribute("src", "".concat(postData.avatar));
        hashtag.innerText = "#".concat(postData.hashtag);
      });
      showPostMenu('main');
    });
  } else {
    //если отображается другая доска, загружаем данные из локального хранилища

    var board = localStorage.getItem(page);

    //если в хранилище нет данных для данной доски, устанавливаем пустой массив

    if (!board) {
      localStorage.setItem(page, '[]');
      board = '[]';
    }

    //обработка данных из хранилища и создание постов

    var json = JSON.parse(board);
    loadedElements = [];
    json.forEach(function (postData, i) {
      loadedElements.push(_objectSpread({
        id: i
      }, postData));
      var postElement = createOnePost(postData, i);
      var photo = postElement.querySelector(".post-picture__photo");
      var avatar = postElement.querySelector(".post-description__avatar");
      var hashtag = postElement.querySelector(".post-description__hashtag");
      photo.setAttribute("src", "".concat(postData.picture, "?random=").concat(postData.id));
      avatar.setAttribute("src", "".concat(postData.avatar));
      hashtag.innerText = "#".concat(postData.hashtag);
    });
    showPostMenu('board');
  }

  //поиск поста по хештэгу

  search.addEventListener("input", function (e) {
    var allPosts = document.querySelectorAll(".post");
    var currentInputValue = e.target.value;
    allPosts.forEach(function (post) {
      var hashtag = post.querySelector(".post-description__hashtag");
      var hashtagValue = hashtag.innerText;
      if (hashtagValue.includes(currentInputValue)) {
        post.style.display = "flex";
      } else {
        post.style.display = "none";
      }
    });
  });

  //создание меню поста

  function showPostMenu(type) {
    var postPictures = document.querySelectorAll(".post-picture");
    postPictures.forEach(function (picture) {
      var menu = (0, _elements.createElement)("div", "post-picture-menu", "", picture);
      var addButtonContainer = (0, _elements.createElement)("div", "post-picture-menu-container", "", menu);
      var addToTheBoardButton = (0, _elements.createElement)("button", "post-picture-menu-container__add", type == 'main' ? "Добавить на доску" : 'Удалить с доски', addButtonContainer);
      if (type === 'main') var rightIcon = (0, _elements.createElement)("i", "fas fa-chevron-right", "", addButtonContainer);
      var complainButton = (0, _elements.createElement)("button", "post-picture-menu__complain", "Пожаловаться на пин", menu);
      var menuIcon = picture.querySelector(".fa-ellipsis");
      menuIcon.addEventListener("click", function () {
        var pictures = document.querySelectorAll('.post-picture-menu');
        var showed = menu.classList.contains('show-menu');
        pictures.forEach(function (e) {
          e.classList.remove('show-menu');
        });
        if (showed) {
          menu.classList.remove("show-menu");
        } else {
          menu.classList.add("show-menu");
        }
      });
      if (type === 'main') {
        showBoardMenu(menu);
      } else {
        addToTheBoardButton.addEventListener('click', function () {
          var storage = JSON.parse(localStorage.getItem(page));
          storage.splice(picture.id, 1);
          localStorage.setItem(page, JSON.stringify(storage));
          root.innerHTML = '';
          loadBoard(page);
        });
      }
      showComplainMenu(menu);
    });
  }

  //создание меню с выбором досок

  function showBoardMenu(menu) {
    var boardMenu = (0, _elements.createElement)("div", "post-picture-menu-boards", "", menu);
    var firstBoard = (0, _elements.createElement)("button", "post-picture-menu-boards__button", "Доска 1", boardMenu);
    firstBoard.addEventListener('click', function () {
      var postId = menu.parentElement.id;
      menu.classList.toggle('show-menu');
      console.log(postId);
      var storage = JSON.parse(localStorage.getItem('board1'));
      storage.push(loadedElements[postId]);
      localStorage.setItem('board1', JSON.stringify(storage));
    });
    var secondBoard = (0, _elements.createElement)("button", "post-picture-menu-boards__button", "Доска 2", boardMenu);
    secondBoard.addEventListener('click', function () {
      var postId = menu.parentElement.id;
      menu.classList.toggle('show-menu');
      console.log(postId);
      var storage = JSON.parse(localStorage.getItem('board2'));
      storage.push(loadedElements[postId]);
      localStorage.setItem('board2', JSON.stringify(storage));
    });
    var thirdBoard = (0, _elements.createElement)("button", "post-picture-menu-boards__button", "Доска 3", boardMenu);
    thirdBoard.addEventListener('click', function () {
      var postId = menu.parentElement.id;
      menu.classList.toggle('show-menu');
      console.log(postId);
      var storage = JSON.parse(localStorage.getItem('board3'));
      storage.push(loadedElements[postId]);
      localStorage.setItem('board3', JSON.stringify(storage));
    });
    var addToTheBoardButton = menu.querySelector(".post-picture-menu-container__add");
    addToTheBoardButton.addEventListener("click", function () {
      boardMenu.classList.toggle("show-board-menu");
    });
  }

  //создание меню с жалобами

  function showComplainMenu(menu) {
    var complainMenu = (0, _elements.createElement)("div", "post-picture-menu-complain", "", menu);
    var complainHeadline = (0, _elements.createElement)("h4", "post-picture-menu-complain__headline", "Жалоба на пин", complainMenu);
    var complainOptions = (0, _elements.createElement)("div", "post-picture-menu-complain-options", "", complainMenu);
    var complainButtons = (0, _elements.createElement)("div", "post-picture-menu-complain-buttons", "", complainMenu);
    var cancelButton = (0, _elements.createElement)("button", "post-picture-menu-complain-buttons__cancel", "Отмена", complainButtons);
    var sendButton = (0, _elements.createElement)("button", "post-picture-menu-complain-buttons__send", "Отправить", complainButtons);
    sendButton.disabled = true;
    sendButton.addEventListener('click', function () {
      complainMenu.classList.remove("show-complain-menu");
      alert('Ваша жалоба успешно отправлена.');
    });
    var complainOptionsData = ["Спам", "Изображения обнаженного тела, порнография или содержимое сексуального характера", "Членовредительство", "Ложная информация", "Агрессивные действия", "Опасные товары", "Преследование или критика", "Сцены насилия", "Нарушение конфиденциальности", "Это моя интеллектуальная собственность"];
    complainOptionsData.forEach(function (optionText) {
      var option = (0, _elements.createElement)("div", "post-picture-menu-complain-options-option", "", complainOptions);
      var radioButton = (0, _elements.createElement)("input", "post-picture-menu-complain-options__button", "", option, "type", "radio");
      radioButton.setAttribute("name", "complainOption");
      var complainText = (0, _elements.createElement)("h4", "post-picture-menu-complain-options__text", optionText, option);
      radioButton.addEventListener("change", function (e) {
        if (!e.target.checked) {
          sendButton.disabled = true;
          sendButton.classList.remove("active-send-button");
        } else {
          sendButton.disabled = false;
          sendButton.classList.add("active-send-button");
        }
      });
    });
    var complainButton = menu.querySelector(".post-picture-menu__complain");
    complainButton.addEventListener("click", function () {
      complainMenu.classList.toggle("show-complain-menu");
    });
    cancelButton.addEventListener("click", function () {
      complainMenu.classList.remove("show-complain-menu");
    });
  }
}
loadBoard();
},{"./elements.js":"elements.js","./requests.js":"requests.js"}],"../node_modules/parcel-bundler/src/builtins/hmr-runtime.js":[function(require,module,exports) {
var global = arguments[3];
var OVERLAY_ID = '__parcel__error__overlay__';
var OldModule = module.bundle.Module;
function Module(moduleName) {
  OldModule.call(this, moduleName);
  this.hot = {
    data: module.bundle.hotData,
    _acceptCallbacks: [],
    _disposeCallbacks: [],
    accept: function (fn) {
      this._acceptCallbacks.push(fn || function () {});
    },
    dispose: function (fn) {
      this._disposeCallbacks.push(fn);
    }
  };
  module.bundle.hotData = null;
}
module.bundle.Module = Module;
var checkedAssets, assetsToAccept;
var parent = module.bundle.parent;
if ((!parent || !parent.isParcelRequire) && typeof WebSocket !== 'undefined') {
  var hostname = "" || location.hostname;
  var protocol = location.protocol === 'https:' ? 'wss' : 'ws';
  var ws = new WebSocket(protocol + '://' + hostname + ':' + "57913" + '/');
  ws.onmessage = function (event) {
    checkedAssets = {};
    assetsToAccept = [];
    var data = JSON.parse(event.data);
    if (data.type === 'update') {
      var handled = false;
      data.assets.forEach(function (asset) {
        if (!asset.isNew) {
          var didAccept = hmrAcceptCheck(global.parcelRequire, asset.id);
          if (didAccept) {
            handled = true;
          }
        }
      });

      // Enable HMR for CSS by default.
      handled = handled || data.assets.every(function (asset) {
        return asset.type === 'css' && asset.generated.js;
      });
      if (handled) {
        console.clear();
        data.assets.forEach(function (asset) {
          hmrApply(global.parcelRequire, asset);
        });
        assetsToAccept.forEach(function (v) {
          hmrAcceptRun(v[0], v[1]);
        });
      } else if (location.reload) {
        // `location` global exists in a web worker context but lacks `.reload()` function.
        location.reload();
      }
    }
    if (data.type === 'reload') {
      ws.close();
      ws.onclose = function () {
        location.reload();
      };
    }
    if (data.type === 'error-resolved') {
      console.log('[parcel] ✨ Error resolved');
      removeErrorOverlay();
    }
    if (data.type === 'error') {
      console.error('[parcel] 🚨  ' + data.error.message + '\n' + data.error.stack);
      removeErrorOverlay();
      var overlay = createErrorOverlay(data);
      document.body.appendChild(overlay);
    }
  };
}
function removeErrorOverlay() {
  var overlay = document.getElementById(OVERLAY_ID);
  if (overlay) {
    overlay.remove();
  }
}
function createErrorOverlay(data) {
  var overlay = document.createElement('div');
  overlay.id = OVERLAY_ID;

  // html encode message and stack trace
  var message = document.createElement('div');
  var stackTrace = document.createElement('pre');
  message.innerText = data.error.message;
  stackTrace.innerText = data.error.stack;
  overlay.innerHTML = '<div style="background: black; font-size: 16px; color: white; position: fixed; height: 100%; width: 100%; top: 0px; left: 0px; padding: 30px; opacity: 0.85; font-family: Menlo, Consolas, monospace; z-index: 9999;">' + '<span style="background: red; padding: 2px 4px; border-radius: 2px;">ERROR</span>' + '<span style="top: 2px; margin-left: 5px; position: relative;">🚨</span>' + '<div style="font-size: 18px; font-weight: bold; margin-top: 20px;">' + message.innerHTML + '</div>' + '<pre>' + stackTrace.innerHTML + '</pre>' + '</div>';
  return overlay;
}
function getParents(bundle, id) {
  var modules = bundle.modules;
  if (!modules) {
    return [];
  }
  var parents = [];
  var k, d, dep;
  for (k in modules) {
    for (d in modules[k][1]) {
      dep = modules[k][1][d];
      if (dep === id || Array.isArray(dep) && dep[dep.length - 1] === id) {
        parents.push(k);
      }
    }
  }
  if (bundle.parent) {
    parents = parents.concat(getParents(bundle.parent, id));
  }
  return parents;
}
function hmrApply(bundle, asset) {
  var modules = bundle.modules;
  if (!modules) {
    return;
  }
  if (modules[asset.id] || !bundle.parent) {
    var fn = new Function('require', 'module', 'exports', asset.generated.js);
    asset.isNew = !modules[asset.id];
    modules[asset.id] = [fn, asset.deps];
  } else if (bundle.parent) {
    hmrApply(bundle.parent, asset);
  }
}
function hmrAcceptCheck(bundle, id) {
  var modules = bundle.modules;
  if (!modules) {
    return;
  }
  if (!modules[id] && bundle.parent) {
    return hmrAcceptCheck(bundle.parent, id);
  }
  if (checkedAssets[id]) {
    return;
  }
  checkedAssets[id] = true;
  var cached = bundle.cache[id];
  assetsToAccept.push([bundle, id]);
  if (cached && cached.hot && cached.hot._acceptCallbacks.length) {
    return true;
  }
  return getParents(global.parcelRequire, id).some(function (id) {
    return hmrAcceptCheck(global.parcelRequire, id);
  });
}
function hmrAcceptRun(bundle, id) {
  var cached = bundle.cache[id];
  bundle.hotData = {};
  if (cached) {
    cached.hot.data = bundle.hotData;
  }
  if (cached && cached.hot && cached.hot._disposeCallbacks.length) {
    cached.hot._disposeCallbacks.forEach(function (cb) {
      cb(bundle.hotData);
    });
  }
  delete bundle.cache[id];
  bundle(id);
  cached = bundle.cache[id];
  if (cached && cached.hot && cached.hot._acceptCallbacks.length) {
    cached.hot._acceptCallbacks.forEach(function (cb) {
      cb();
    });
    return true;
  }
}
},{}]},{},["../node_modules/parcel-bundler/src/builtins/hmr-runtime.js","script.js"], null)
//# sourceMappingURL=/script.75da7f30.js.map