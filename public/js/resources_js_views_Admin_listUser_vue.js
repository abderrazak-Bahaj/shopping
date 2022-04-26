"use strict";
(self["webpackChunk"] = self["webpackChunk"] || []).push([["resources_js_views_Admin_listUser_vue"],{

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/views/Admin/listUser.vue?vue&type=script&lang=js&":
/*!****************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/views/Admin/listUser.vue?vue&type=script&lang=js& ***!
  \****************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/regenerator */ "./node_modules/@babel/runtime/regenerator/index.js");
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _components_Global_loadingProgress_vue__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../components/Global/loadingProgress.vue */ "./resources/js/components/Global/loadingProgress.vue");


function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  components: {
    LoadingProgress: _components_Global_loadingProgress_vue__WEBPACK_IMPORTED_MODULE_1__["default"]
  },
  data: function data() {
    return {
      IsBusy: false,
      users: []
    };
  },
  methods: {
    TransformUserToAdmin: function () {
      var _TransformUserToAdmin = _asyncToGenerator( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default().mark(function _callee(id) {
        var _this = this;

        var res, action;
        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default().wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                _context.next = 2;
                return Swal.fire({
                  title: 'Login Form',
                  html: "<input type=\"password\" id=\"password\" class=\"swal2-input\" placeholder=\"Password\">",
                  confirmButtonText: 'Enter Password',
                  focusConfirm: false,
                  preConfirm: function preConfirm() {
                    var password = Swal.getPopup().querySelector('#password').value;

                    if (!password) {
                      Swal.showValidationMessage("Please enter password");
                    }

                    return {
                      password: password
                    };
                  }
                }).then(function (result) {
                  return result.value.password;
                })["catch"](function () {
                  return null;
                });

              case 2:
                res = _context.sent;

                if (!(res == null)) {
                  _context.next = 5;
                  break;
                }

                return _context.abrupt("return");

              case 5:
                this.IsBusy = true;
                action = {
                  id: id,
                  password: res,
                  isAdmin: 1
                };
                _context.next = 9;
                return this.$store.dispatch('SetAdmin', action).then(function (response) {
                  _this.users.find(function (user) {
                    return user.id == response.data.id;
                  }).isAdmin = 1;

                  _this.$helpers.showToast("Operation has been completed success");
                })["catch"](function (error) {
                  _this.$helpers.showErrors(error);
                })["finally"](function () {
                  _this.IsBusy = false;
                });

              case 9:
                this.IsBusy = false;

              case 10:
              case "end":
                return _context.stop();
            }
          }
        }, _callee, this);
      }));

      function TransformUserToAdmin(_x) {
        return _TransformUserToAdmin.apply(this, arguments);
      }

      return TransformUserToAdmin;
    }(),
    DeleteUser: function () {
      var _DeleteUser = _asyncToGenerator( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default().mark(function _callee2(id) {
        var _this2 = this;

        var res, action;
        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default().wrap(function _callee2$(_context2) {
          while (1) {
            switch (_context2.prev = _context2.next) {
              case 0:
                _context2.next = 2;
                return Swal.fire({
                  title: 'Login Form',
                  html: "<input type=\"password\" id=\"password\" class=\"swal2-input\" placeholder=\"Password\">",
                  confirmButtonText: 'Enter Password',
                  focusConfirm: false,
                  preConfirm: function preConfirm() {
                    var password = Swal.getPopup().querySelector('#password').value;

                    if (!password) {
                      Swal.showValidationMessage("Please enter password");
                    }

                    return {
                      password: password
                    };
                  }
                }).then(function (result) {
                  return result.value.password;
                })["catch"](function () {
                  return null;
                });

              case 2:
                res = _context2.sent;

                if (!(res == null)) {
                  _context2.next = 5;
                  break;
                }

                return _context2.abrupt("return");

              case 5:
                this.IsLoaded = true;
                action = {
                  id: id,
                  password: res
                };
                _context2.next = 9;
                return this.$store.dispatch('deleteUser', action).then(function (response) {
                  _this2.users.splice(_this2.users.findIndex(function (item) {
                    return item.id == response;
                  }), 1);

                  _this2.$helpers.showToast("Operation has been completed success");
                })["catch"](function (error) {
                  _this2.$helpers.showErrors(error);
                });

              case 9:
              case "end":
                return _context2.stop();
            }
          }
        }, _callee2, this);
      }));

      function DeleteUser(_x2) {
        return _DeleteUser.apply(this, arguments);
      }

      return DeleteUser;
    }(),
    getUsers: function () {
      var _getUsers = _asyncToGenerator( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default().mark(function _callee3() {
        var _this3 = this;

        var page,
            _args3 = arguments;
        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default().wrap(function _callee3$(_context3) {
          while (1) {
            switch (_context3.prev = _context3.next) {
              case 0:
                page = _args3.length > 0 && _args3[0] !== undefined ? _args3[0] : "1";
                _context3.next = 3;
                return this.$store.dispatch('getUsers').then(function (response) {
                  _this3.users = response;
                  _this3.IsLoaded = true;
                })["catch"](function (error) {
                  _this3.$helpers.showErrors(error);
                });

              case 3:
              case "end":
                return _context3.stop();
            }
          }
        }, _callee3, this);
      }));

      function getUsers() {
        return _getUsers.apply(this, arguments);
      }

      return getUsers;
    }()
  },
  created: function created() {
    this.getUsers();
  }
});

/***/ }),

/***/ "./resources/js/views/Admin/listUser.vue":
/*!***********************************************!*\
  !*** ./resources/js/views/Admin/listUser.vue ***!
  \***********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _listUser_vue_vue_type_template_id_324e6ea8___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./listUser.vue?vue&type=template&id=324e6ea8& */ "./resources/js/views/Admin/listUser.vue?vue&type=template&id=324e6ea8&");
/* harmony import */ var _listUser_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./listUser.vue?vue&type=script&lang=js& */ "./resources/js/views/Admin/listUser.vue?vue&type=script&lang=js&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */
;
var component = (0,_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _listUser_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _listUser_vue_vue_type_template_id_324e6ea8___WEBPACK_IMPORTED_MODULE_0__.render,
  _listUser_vue_vue_type_template_id_324e6ea8___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/views/Admin/listUser.vue"
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (component.exports);

/***/ }),

/***/ "./resources/js/views/Admin/listUser.vue?vue&type=script&lang=js&":
/*!************************************************************************!*\
  !*** ./resources/js/views/Admin/listUser.vue?vue&type=script&lang=js& ***!
  \************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_listUser_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./listUser.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/views/Admin/listUser.vue?vue&type=script&lang=js&");
 /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_listUser_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/views/Admin/listUser.vue?vue&type=template&id=324e6ea8&":
/*!******************************************************************************!*\
  !*** ./resources/js/views/Admin/listUser.vue?vue&type=template&id=324e6ea8& ***!
  \******************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_listUser_vue_vue_type_template_id_324e6ea8___WEBPACK_IMPORTED_MODULE_0__.render),
/* harmony export */   "staticRenderFns": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_listUser_vue_vue_type_template_id_324e6ea8___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns)
/* harmony export */ });
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_listUser_vue_vue_type_template_id_324e6ea8___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./listUser.vue?vue&type=template&id=324e6ea8& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/views/Admin/listUser.vue?vue&type=template&id=324e6ea8&");


/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/views/Admin/listUser.vue?vue&type=template&id=324e6ea8&":
/*!*********************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/views/Admin/listUser.vue?vue&type=template&id=324e6ea8& ***!
  \*********************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* binding */ render),
/* harmony export */   "staticRenderFns": () => (/* binding */ staticRenderFns)
/* harmony export */ });
var render = function () {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c("div", { staticClass: "container text-center" }, [
    _c("h2", { staticClass: "h1" }, [_vm._v("Users rGrey")]),
    _vm._v(" "),
    _c("hr", { staticClass: "m-md-3 m-sm-2" }),
    _vm._v(" "),
    _c("div", [
      _c("table", { staticClass: "table table-hover" }, [
        _vm._m(0),
        _vm._v(" "),
        _c(
          "tbody",
          _vm._l(_vm.users, function (user) {
            return _c("tr", { key: user.id }, [
              _c("th", { attrs: { scope: "row" } }, [_vm._v(_vm._s(user.id))]),
              _vm._v(" "),
              _c("th", [
                _vm._v(_vm._s(user.first_name + " " + user.last_name)),
              ]),
              _vm._v(" "),
              _c("th", [_vm._v(_vm._s(user.email))]),
              _vm._v(" "),
              _c("td", { staticClass: "row" }, [
                _c(
                  "p",
                  {
                    directives: [
                      {
                        name: "show",
                        rawName: "v-show",
                        value: user.isAdmin == 1,
                        expression: "user.isAdmin==1",
                      },
                    ],
                    staticClass: "h6 text-uppercase",
                  },
                  [_vm._v("Is Admin")]
                ),
                _vm._v(" "),
                _c(
                  "button",
                  {
                    directives: [
                      {
                        name: "show",
                        rawName: "v-show",
                        value: user.isAdmin == 0,
                        expression: "user.isAdmin==0",
                      },
                    ],
                    staticClass: "col btn btn-outline-success m-1",
                    attrs: { disabled: _vm.IsBusy },
                    on: {
                      click: function ($event) {
                        return _vm.TransformUserToAdmin(user.id)
                      },
                    },
                  },
                  [
                    _c("i", { staticClass: "fa-solid fa-rotate" }),
                    _vm._v(" "),
                    _c("small", [_vm._v("Set Admin")]),
                  ]
                ),
                _vm._v(" "),
                _c(
                  "button",
                  {
                    directives: [
                      {
                        name: "show",
                        rawName: "v-show",
                        value: user.isAdmin == 0,
                        expression: "user.isAdmin==0",
                      },
                    ],
                    staticClass: "col btn btn-outline-danger m-1",
                    attrs: { disabled: _vm.IsBusy },
                    on: {
                      click: function ($event) {
                        return _vm.DeleteUser(user.id)
                      },
                    },
                  },
                  [
                    _c("i", { staticClass: "fa-solid fa-ban" }),
                    _vm._v(" "),
                    _c("small", [_vm._v("Delete")]),
                  ]
                ),
              ]),
            ])
          }),
          0
        ),
      ]),
    ]),
    _vm._v(" "),
    _c(
      "div",
      {
        directives: [
          {
            name: "show",
            rawName: "v-show",
            value: _vm.IsBusy,
            expression: "IsBusy",
          },
        ],
        staticClass:
          "cls-height-loading justify-content-center align-items-center",
      },
      [_c("loading-progress")],
      1
    ),
  ])
}
var staticRenderFns = [
  function () {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("thead", [
      _c("tr", [
        _c("th", { attrs: { scope: "col" } }, [_vm._v("Id")]),
        _vm._v(" "),
        _c("th", { attrs: { scope: "col" } }, [_vm._v("name")]),
        _vm._v(" "),
        _c("th", { attrs: { scope: "col" } }, [_vm._v("email")]),
        _vm._v(" "),
        _c("th", { attrs: { scope: "col" } }, [_vm._v("Action")]),
      ]),
    ])
  },
]
render._withStripped = true



/***/ })

}]);