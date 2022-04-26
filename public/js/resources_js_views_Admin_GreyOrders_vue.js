"use strict";
(self["webpackChunk"] = self["webpackChunk"] || []).push([["resources_js_views_Admin_GreyOrders_vue"],{

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/views/Admin/GreyOrders.vue?vue&type=script&lang=js&":
/*!******************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/views/Admin/GreyOrders.vue?vue&type=script&lang=js& ***!
  \******************************************************************************************************************************************************************************************************************/
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
      IsLoaded: false,
      allOrders: []
    };
  },
  methods: {
    AcceptOrder: function () {
      var _AcceptOrder = _asyncToGenerator( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default().mark(function _callee(id) {
        var _this = this;

        var action;
        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default().wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                action = {
                  id: id,
                  State: "success"
                };
                _context.next = 3;
                return this.$store.dispatch('GreyOrderAction', action).then(function (response) {
                  _this.allOrders.splice(_this.allOrders.findIndex(function (item) {
                    return item.id == response.data.id;
                  }), 1);

                  _this.$helpers.showToast("Operation has completed success");
                })["catch"](function (error) {
                  _this.$helpers.showErrors(error.response.statusText);
                });

              case 3:
              case "end":
                return _context.stop();
            }
          }
        }, _callee, this);
      }));

      function AcceptOrder(_x) {
        return _AcceptOrder.apply(this, arguments);
      }

      return AcceptOrder;
    }(),
    CancelOrder: function () {
      var _CancelOrder = _asyncToGenerator( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default().mark(function _callee2(id) {
        var _this2 = this;

        var action;
        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default().wrap(function _callee2$(_context2) {
          while (1) {
            switch (_context2.prev = _context2.next) {
              case 0:
                action = {
                  id: id,
                  State: "reversion"
                };
                _context2.next = 3;
                return this.$store.dispatch('GreyOrderAction', action).then(function (response) {
                  _this2.allOrders.splice(_this2.allOrders.findIndex(function (item) {
                    return item.id == response.data.id;
                  }), 1);

                  _this2.$helpers.showToast("Operation has completed success");
                })["catch"](function (error) {
                  _this2.$helpers.showErrors(error.response.statusText);
                });

              case 3:
              case "end":
                return _context2.stop();
            }
          }
        }, _callee2, this);
      }));

      function CancelOrder(_x2) {
        return _CancelOrder.apply(this, arguments);
      }

      return CancelOrder;
    }(),
    getOrder: function () {
      var _getOrder = _asyncToGenerator( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default().mark(function _callee3() {
        var _this3 = this;

        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default().wrap(function _callee3$(_context3) {
          while (1) {
            switch (_context3.prev = _context3.next) {
              case 0:
                _context3.next = 2;
                return this.$store.dispatch('GreyOrderGetList').then(function (response) {
                  _this3.allOrders = response.data;
                  _this3.IsLoaded = true;
                })["catch"](function (error) {
                  _this3.$helpers.showErrors(error.response.statusText);
                });

              case 2:
              case "end":
                return _context3.stop();
            }
          }
        }, _callee3, this);
      }));

      function getOrder() {
        return _getOrder.apply(this, arguments);
      }

      return getOrder;
    }()
  },
  created: function created() {
    this.getOrder();
  },
  filters: {
    moneyFilter: function moneyFilter(val) {
      return val + " $";
    }
  }
});

/***/ }),

/***/ "./resources/js/views/Admin/GreyOrders.vue":
/*!*************************************************!*\
  !*** ./resources/js/views/Admin/GreyOrders.vue ***!
  \*************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _GreyOrders_vue_vue_type_template_id_20eaf4a3___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./GreyOrders.vue?vue&type=template&id=20eaf4a3& */ "./resources/js/views/Admin/GreyOrders.vue?vue&type=template&id=20eaf4a3&");
/* harmony import */ var _GreyOrders_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./GreyOrders.vue?vue&type=script&lang=js& */ "./resources/js/views/Admin/GreyOrders.vue?vue&type=script&lang=js&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */
;
var component = (0,_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _GreyOrders_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _GreyOrders_vue_vue_type_template_id_20eaf4a3___WEBPACK_IMPORTED_MODULE_0__.render,
  _GreyOrders_vue_vue_type_template_id_20eaf4a3___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/views/Admin/GreyOrders.vue"
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (component.exports);

/***/ }),

/***/ "./resources/js/views/Admin/GreyOrders.vue?vue&type=script&lang=js&":
/*!**************************************************************************!*\
  !*** ./resources/js/views/Admin/GreyOrders.vue?vue&type=script&lang=js& ***!
  \**************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_GreyOrders_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./GreyOrders.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/views/Admin/GreyOrders.vue?vue&type=script&lang=js&");
 /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_GreyOrders_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/views/Admin/GreyOrders.vue?vue&type=template&id=20eaf4a3&":
/*!********************************************************************************!*\
  !*** ./resources/js/views/Admin/GreyOrders.vue?vue&type=template&id=20eaf4a3& ***!
  \********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_GreyOrders_vue_vue_type_template_id_20eaf4a3___WEBPACK_IMPORTED_MODULE_0__.render),
/* harmony export */   "staticRenderFns": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_GreyOrders_vue_vue_type_template_id_20eaf4a3___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns)
/* harmony export */ });
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_GreyOrders_vue_vue_type_template_id_20eaf4a3___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./GreyOrders.vue?vue&type=template&id=20eaf4a3& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/views/Admin/GreyOrders.vue?vue&type=template&id=20eaf4a3&");


/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/views/Admin/GreyOrders.vue?vue&type=template&id=20eaf4a3&":
/*!***********************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/views/Admin/GreyOrders.vue?vue&type=template&id=20eaf4a3& ***!
  \***********************************************************************************************************************************************************************************************************************/
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
    _c("h2", { staticClass: "h1" }, [_vm._v("Order Grey")]),
    _vm._v(" "),
    _c("hr", { staticClass: "m-md-3 m-sm-2" }),
    _vm._v(" "),
    _vm.IsLoaded
      ? _c("div", [
          _c(
            "table",
            { staticClass: "table table-hover", attrs: { id: "printMe" } },
            [
              _vm._m(0),
              _vm._v(" "),
              _c(
                "tbody",
                _vm._l(_vm.allOrders, function (order) {
                  return _c("tr", { key: order.id }, [
                    _c("th", { attrs: { scope: "row" } }, [
                      _vm._v(_vm._s(order.id)),
                    ]),
                    _vm._v(" "),
                    _c(
                      "td",
                      [
                        _c(
                          "router-link",
                          {
                            staticClass: "link-secondary",
                            attrs: { to: "/shope/" + order.product_id },
                          },
                          [_vm._v(_vm._s(order.name))]
                        ),
                      ],
                      1
                    ),
                    _vm._v(" "),
                    _c("th", [_vm._v(_vm._s(order.Username))]),
                    _vm._v(" "),
                    _c("th", [_vm._v(_vm._s(order.quantity_product))]),
                    _vm._v(" "),
                    _c("td", [
                      _vm._v(_vm._s(_vm._f("moneyFilter")(order.price_uniter))),
                    ]),
                    _vm._v(" "),
                    _c("td", [
                      _vm._v(_vm._s(_vm._f("moneyFilter")(order.price_total))),
                    ]),
                    _vm._v(" "),
                    _c("td", [
                      _c(
                        "button",
                        {
                          staticClass: "btn-lg btn-outline-success rounded",
                          on: {
                            click: function ($event) {
                              return _vm.AcceptOrder(order.id)
                            },
                          },
                        },
                        [_c("i", { staticClass: "fa-solid fa-circle-check" })]
                      ),
                      _vm._v(" "),
                      _c(
                        "button",
                        {
                          staticClass: "btn-lg btn-outline-danger rounded",
                          on: {
                            click: function ($event) {
                              return _vm.CancelOrder(order.id)
                            },
                          },
                        },
                        [_c("i", { staticClass: "fa-solid fa-ban" })]
                      ),
                    ]),
                  ])
                }),
                0
              ),
            ]
          ),
        ])
      : _c(
          "div",
          {
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
        _c("th", { attrs: { scope: "col" } }, [_vm._v("Product name")]),
        _vm._v(" "),
        _c("th", { attrs: { scope: "col" } }, [_vm._v("User name")]),
        _vm._v(" "),
        _c("th", { attrs: { scope: "col" } }, [_vm._v("Quantity")]),
        _vm._v(" "),
        _c("th", { attrs: { scope: "col" } }, [_vm._v("Price Uniter")]),
        _vm._v(" "),
        _c("th", { attrs: { scope: "col" } }, [_vm._v("Price Total")]),
        _vm._v(" "),
        _c("th", { attrs: { scope: "col" } }, [_vm._v("Accept or Not")]),
      ]),
    ])
  },
]
render._withStripped = true



/***/ })

}]);