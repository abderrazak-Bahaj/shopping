"use strict";
(self["webpackChunk"] = self["webpackChunk"] || []).push([["resources_js_views_user_EditPassword_vue"],{

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/views/user/EditPassword.vue?vue&type=script&lang=js&":
/*!*******************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/views/user/EditPassword.vue?vue&type=script&lang=js& ***!
  \*******************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/regenerator */ "./node_modules/@babel/runtime/regenerator/index.js");
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);


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
//
//
//
//
//
//
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  data: function data() {
    return {
      data: {
        currentPassword: "",
        newPassword: "",
        newPassword_confirmation: ""
      },
      allErrors: ""
    };
  },
  methods: {
    validation: function () {
      var _validation = _asyncToGenerator( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default().mark(function _callee() {
        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default().wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                return _context.abrupt("return", true);

              case 1:
              case "end":
                return _context.stop();
            }
          }
        }, _callee);
      }));

      function validation() {
        return _validation.apply(this, arguments);
      }

      return validation;
    }(),
    editPassword: function () {
      var _editPassword = _asyncToGenerator( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default().mark(function _callee2() {
        var _this = this;

        var isValid, data;
        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default().wrap(function _callee2$(_context2) {
          while (1) {
            switch (_context2.prev = _context2.next) {
              case 0:
                this.allErrors = "";
                _context2.next = 3;
                return this.validation();

              case 3:
                isValid = _context2.sent;

                if (!isValid) {
                  _context2.next = 8;
                  break;
                }

                data = {
                  currentPassword: this.data.currentPassword,
                  newPassword: this.data.newPassword,
                  newPassword_confirmation: this.data.newPassword_confirmation
                };
                _context2.next = 8;
                return this.$store.dispatch("editPassword", data).then(function (response) {
                  _this.allErrors = "";

                  _this.$helpers.showToast("password has been edit success");
                })["catch"](function (error) {
                  if (error == false) {
                    _this.$helpers.showErrorsPopup("current password Incorrect");

                    return;
                  }

                  _this.allErrors = error;
                });

              case 8:
              case "end":
                return _context2.stop();
            }
          }
        }, _callee2, this);
      }));

      function editPassword() {
        return _editPassword.apply(this, arguments);
      }

      return editPassword;
    }()
  }
});

/***/ }),

/***/ "./resources/js/views/user/EditPassword.vue":
/*!**************************************************!*\
  !*** ./resources/js/views/user/EditPassword.vue ***!
  \**************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _EditPassword_vue_vue_type_template_id_2b0cc98c___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./EditPassword.vue?vue&type=template&id=2b0cc98c& */ "./resources/js/views/user/EditPassword.vue?vue&type=template&id=2b0cc98c&");
/* harmony import */ var _EditPassword_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./EditPassword.vue?vue&type=script&lang=js& */ "./resources/js/views/user/EditPassword.vue?vue&type=script&lang=js&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */
;
var component = (0,_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _EditPassword_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _EditPassword_vue_vue_type_template_id_2b0cc98c___WEBPACK_IMPORTED_MODULE_0__.render,
  _EditPassword_vue_vue_type_template_id_2b0cc98c___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/views/user/EditPassword.vue"
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (component.exports);

/***/ }),

/***/ "./resources/js/views/user/EditPassword.vue?vue&type=script&lang=js&":
/*!***************************************************************************!*\
  !*** ./resources/js/views/user/EditPassword.vue?vue&type=script&lang=js& ***!
  \***************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_EditPassword_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./EditPassword.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/views/user/EditPassword.vue?vue&type=script&lang=js&");
 /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_EditPassword_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/views/user/EditPassword.vue?vue&type=template&id=2b0cc98c&":
/*!*********************************************************************************!*\
  !*** ./resources/js/views/user/EditPassword.vue?vue&type=template&id=2b0cc98c& ***!
  \*********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_EditPassword_vue_vue_type_template_id_2b0cc98c___WEBPACK_IMPORTED_MODULE_0__.render),
/* harmony export */   "staticRenderFns": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_EditPassword_vue_vue_type_template_id_2b0cc98c___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns)
/* harmony export */ });
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_EditPassword_vue_vue_type_template_id_2b0cc98c___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./EditPassword.vue?vue&type=template&id=2b0cc98c& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/views/user/EditPassword.vue?vue&type=template&id=2b0cc98c&");


/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/views/user/EditPassword.vue?vue&type=template&id=2b0cc98c&":
/*!************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/views/user/EditPassword.vue?vue&type=template&id=2b0cc98c& ***!
  \************************************************************************************************************************************************************************************************************************/
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
  return _c("div", { staticClass: "container" }, [
    _c("h3", { staticClass: "h2 text-center" }, [_vm._v("Edit Password")]),
    _vm._v(" "),
    _c("br"),
    _vm._v(" "),
    _c("div", { staticClass: "container" }, [
      _c("div", { staticClass: "row" }, [
        _c("div", { staticClass: "offset-md-3 col-md-6" }, [
          _c(
            "label",
            { staticClass: "small mb-1", attrs: { for: "currentPassword" } },
            [_vm._v("Current Password")]
          ),
          _vm._v(" "),
          _c("input", {
            directives: [
              {
                name: "model",
                rawName: "v-model",
                value: _vm.data.currentPassword,
                expression: "data.currentPassword",
              },
            ],
            staticClass: "form-control",
            attrs: {
              id: "currentPassword",
              type: "password",
              placeholder: "Enter your current password",
            },
            domProps: { value: _vm.data.currentPassword },
            on: {
              input: function ($event) {
                if ($event.target.composing) {
                  return
                }
                _vm.$set(_vm.data, "currentPassword", $event.target.value)
              },
            },
          }),
          _vm._v(" "),
          _vm.allErrors.currentPassword
            ? _c(
                "span",
                _vm._l(_vm.allErrors.currentPassword, function (error) {
                  return _c(
                    "span",
                    { key: error, staticClass: "text-danger small" },
                    [
                      _vm._v(
                        "\n            - " + _vm._s(error) + "\n          "
                      ),
                    ]
                  )
                }),
                0
              )
            : _vm._e(),
        ]),
      ]),
      _vm._v(" "),
      _c("div", { staticClass: "row" }, [
        _c("div", { staticClass: "offset-md-3 col-md-6" }, [
          _c(
            "label",
            { staticClass: "small mb-1", attrs: { for: "newPassword" } },
            [_vm._v("New Password")]
          ),
          _vm._v(" "),
          _c("input", {
            directives: [
              {
                name: "model",
                rawName: "v-model",
                value: _vm.data.newPassword,
                expression: "data.newPassword",
              },
            ],
            staticClass: "form-control",
            attrs: {
              id: "newPassword",
              type: "password",
              placeholder: "Enter your New Password",
            },
            domProps: { value: _vm.data.newPassword },
            on: {
              input: function ($event) {
                if ($event.target.composing) {
                  return
                }
                _vm.$set(_vm.data, "newPassword", $event.target.value)
              },
            },
          }),
          _vm._v(" "),
          _vm.allErrors.newPassword
            ? _c(
                "span",
                _vm._l(_vm.allErrors.newPassword, function (error) {
                  return _c(
                    "span",
                    { key: error, staticClass: "text-danger small" },
                    [
                      _vm._v(
                        "\n            - " + _vm._s(error) + "\n          "
                      ),
                    ]
                  )
                }),
                0
              )
            : _vm._e(),
        ]),
      ]),
      _vm._v(" "),
      _c("div", { staticClass: "row" }, [
        _c("div", { staticClass: "offset-md-3 col-md-6" }, [
          _c(
            "label",
            { staticClass: "small mb-1", attrs: { for: "confirmPassword" } },
            [_vm._v("Confirm Password")]
          ),
          _vm._v(" "),
          _c("input", {
            directives: [
              {
                name: "model",
                rawName: "v-model",
                value: _vm.data.newPassword_confirmation,
                expression: "data.newPassword_confirmation",
              },
            ],
            staticClass: "form-control",
            attrs: {
              id: "confirmPassword",
              type: "password",
              placeholder: "Enter your confirm new password",
            },
            domProps: { value: _vm.data.newPassword_confirmation },
            on: {
              input: function ($event) {
                if ($event.target.composing) {
                  return
                }
                _vm.$set(
                  _vm.data,
                  "newPassword_confirmation",
                  $event.target.value
                )
              },
            },
          }),
        ]),
      ]),
      _vm._v(" "),
      _c("div", { staticClass: "text-center m-3" }, [
        _c(
          "button",
          {
            staticClass: "btn-lg btn-primary",
            on: { click: _vm.editPassword },
          },
          [_vm._v("\n        Edit Password\n      ")]
        ),
      ]),
    ]),
  ])
}
var staticRenderFns = []
render._withStripped = true



/***/ })

}]);