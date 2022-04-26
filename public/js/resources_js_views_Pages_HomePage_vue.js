"use strict";
(self["webpackChunk"] = self["webpackChunk"] || []).push([["resources_js_views_Pages_HomePage_vue"],{

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/views/Pages/HomePage.vue?vue&type=script&lang=js&":
/*!****************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/views/Pages/HomePage.vue?vue&type=script&lang=js& ***!
  \****************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _components_Home_FeaturesProducts_vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../components/Home/FeaturesProducts.vue */ "./resources/js/views/components/Home/FeaturesProducts.vue");
/* harmony import */ var _components_Home_HomeCategory_vue__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../components/Home/HomeCategory.vue */ "./resources/js/views/components/Home/HomeCategory.vue");
/* harmony import */ var _components_Home_HomeHeader_vue__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../components/Home/HomeHeader.vue */ "./resources/js/views/components/Home/HomeHeader.vue");
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
      categorais: []
    };
  },
  components: {
    FeaturesProducts: _components_Home_FeaturesProducts_vue__WEBPACK_IMPORTED_MODULE_0__["default"],
    HomeHeader: _components_Home_HomeHeader_vue__WEBPACK_IMPORTED_MODULE_2__["default"],
    HomeCategory: _components_Home_HomeCategory_vue__WEBPACK_IMPORTED_MODULE_1__["default"]
  },
  mounted: function mounted() {
    var _this = this;

    axios.get('/api/category').then(function (res) {
      _this.categorais = res.data.data;
      console.log(_this.categorais[0]);
    });
  }
  /*
  mounted(){
    if(localStorage.hasOwnProperty("blog_token")){
      axios.defaults.headers.common['Authorization']='Bearer '+localStorage.getItem("blog_token");
    }
    
   this.$store.dispatch('categoryModule/getCategorais');
  }*/

});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/views/components/Home/FeaturesProducts.vue?vue&type=script&lang=js&":
/*!**********************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/views/components/Home/FeaturesProducts.vue?vue&type=script&lang=js& ***!
  \**********************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
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
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/views/components/Home/HomeCategory.vue?vue&type=script&lang=js&":
/*!******************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/views/components/Home/HomeCategory.vue?vue&type=script&lang=js& ***!
  \******************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
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
  props: ["categorais"]
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/views/components/Home/HomeHeader.vue?vue&type=script&lang=js&":
/*!****************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/views/components/Home/HomeHeader.vue?vue&type=script&lang=js& ***!
  \****************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
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
//
//
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({});

/***/ }),

/***/ "./resources/js/views/Pages/HomePage.vue":
/*!***********************************************!*\
  !*** ./resources/js/views/Pages/HomePage.vue ***!
  \***********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _HomePage_vue_vue_type_template_id_81c93710___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./HomePage.vue?vue&type=template&id=81c93710& */ "./resources/js/views/Pages/HomePage.vue?vue&type=template&id=81c93710&");
/* harmony import */ var _HomePage_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./HomePage.vue?vue&type=script&lang=js& */ "./resources/js/views/Pages/HomePage.vue?vue&type=script&lang=js&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */
;
var component = (0,_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _HomePage_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _HomePage_vue_vue_type_template_id_81c93710___WEBPACK_IMPORTED_MODULE_0__.render,
  _HomePage_vue_vue_type_template_id_81c93710___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/views/Pages/HomePage.vue"
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (component.exports);

/***/ }),

/***/ "./resources/js/views/components/Home/FeaturesProducts.vue":
/*!*****************************************************************!*\
  !*** ./resources/js/views/components/Home/FeaturesProducts.vue ***!
  \*****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _FeaturesProducts_vue_vue_type_template_id_c6d3ae92___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./FeaturesProducts.vue?vue&type=template&id=c6d3ae92& */ "./resources/js/views/components/Home/FeaturesProducts.vue?vue&type=template&id=c6d3ae92&");
/* harmony import */ var _FeaturesProducts_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./FeaturesProducts.vue?vue&type=script&lang=js& */ "./resources/js/views/components/Home/FeaturesProducts.vue?vue&type=script&lang=js&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */
;
var component = (0,_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _FeaturesProducts_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _FeaturesProducts_vue_vue_type_template_id_c6d3ae92___WEBPACK_IMPORTED_MODULE_0__.render,
  _FeaturesProducts_vue_vue_type_template_id_c6d3ae92___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/views/components/Home/FeaturesProducts.vue"
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (component.exports);

/***/ }),

/***/ "./resources/js/views/components/Home/HomeCategory.vue":
/*!*************************************************************!*\
  !*** ./resources/js/views/components/Home/HomeCategory.vue ***!
  \*************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _HomeCategory_vue_vue_type_template_id_7100f81a___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./HomeCategory.vue?vue&type=template&id=7100f81a& */ "./resources/js/views/components/Home/HomeCategory.vue?vue&type=template&id=7100f81a&");
/* harmony import */ var _HomeCategory_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./HomeCategory.vue?vue&type=script&lang=js& */ "./resources/js/views/components/Home/HomeCategory.vue?vue&type=script&lang=js&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */
;
var component = (0,_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _HomeCategory_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _HomeCategory_vue_vue_type_template_id_7100f81a___WEBPACK_IMPORTED_MODULE_0__.render,
  _HomeCategory_vue_vue_type_template_id_7100f81a___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/views/components/Home/HomeCategory.vue"
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (component.exports);

/***/ }),

/***/ "./resources/js/views/components/Home/HomeHeader.vue":
/*!***********************************************************!*\
  !*** ./resources/js/views/components/Home/HomeHeader.vue ***!
  \***********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _HomeHeader_vue_vue_type_template_id_47197d42___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./HomeHeader.vue?vue&type=template&id=47197d42& */ "./resources/js/views/components/Home/HomeHeader.vue?vue&type=template&id=47197d42&");
/* harmony import */ var _HomeHeader_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./HomeHeader.vue?vue&type=script&lang=js& */ "./resources/js/views/components/Home/HomeHeader.vue?vue&type=script&lang=js&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */
;
var component = (0,_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _HomeHeader_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _HomeHeader_vue_vue_type_template_id_47197d42___WEBPACK_IMPORTED_MODULE_0__.render,
  _HomeHeader_vue_vue_type_template_id_47197d42___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/views/components/Home/HomeHeader.vue"
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (component.exports);

/***/ }),

/***/ "./resources/js/views/Pages/HomePage.vue?vue&type=script&lang=js&":
/*!************************************************************************!*\
  !*** ./resources/js/views/Pages/HomePage.vue?vue&type=script&lang=js& ***!
  \************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_HomePage_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./HomePage.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/views/Pages/HomePage.vue?vue&type=script&lang=js&");
 /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_HomePage_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/views/components/Home/FeaturesProducts.vue?vue&type=script&lang=js&":
/*!******************************************************************************************!*\
  !*** ./resources/js/views/components/Home/FeaturesProducts.vue?vue&type=script&lang=js& ***!
  \******************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_FeaturesProducts_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./FeaturesProducts.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/views/components/Home/FeaturesProducts.vue?vue&type=script&lang=js&");
 /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_FeaturesProducts_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/views/components/Home/HomeCategory.vue?vue&type=script&lang=js&":
/*!**************************************************************************************!*\
  !*** ./resources/js/views/components/Home/HomeCategory.vue?vue&type=script&lang=js& ***!
  \**************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_HomeCategory_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./HomeCategory.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/views/components/Home/HomeCategory.vue?vue&type=script&lang=js&");
 /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_HomeCategory_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/views/components/Home/HomeHeader.vue?vue&type=script&lang=js&":
/*!************************************************************************************!*\
  !*** ./resources/js/views/components/Home/HomeHeader.vue?vue&type=script&lang=js& ***!
  \************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_HomeHeader_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./HomeHeader.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/views/components/Home/HomeHeader.vue?vue&type=script&lang=js&");
 /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_HomeHeader_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/views/Pages/HomePage.vue?vue&type=template&id=81c93710&":
/*!******************************************************************************!*\
  !*** ./resources/js/views/Pages/HomePage.vue?vue&type=template&id=81c93710& ***!
  \******************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_HomePage_vue_vue_type_template_id_81c93710___WEBPACK_IMPORTED_MODULE_0__.render),
/* harmony export */   "staticRenderFns": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_HomePage_vue_vue_type_template_id_81c93710___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns)
/* harmony export */ });
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_HomePage_vue_vue_type_template_id_81c93710___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./HomePage.vue?vue&type=template&id=81c93710& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/views/Pages/HomePage.vue?vue&type=template&id=81c93710&");


/***/ }),

/***/ "./resources/js/views/components/Home/FeaturesProducts.vue?vue&type=template&id=c6d3ae92&":
/*!************************************************************************************************!*\
  !*** ./resources/js/views/components/Home/FeaturesProducts.vue?vue&type=template&id=c6d3ae92& ***!
  \************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_FeaturesProducts_vue_vue_type_template_id_c6d3ae92___WEBPACK_IMPORTED_MODULE_0__.render),
/* harmony export */   "staticRenderFns": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_FeaturesProducts_vue_vue_type_template_id_c6d3ae92___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns)
/* harmony export */ });
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_FeaturesProducts_vue_vue_type_template_id_c6d3ae92___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./FeaturesProducts.vue?vue&type=template&id=c6d3ae92& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/views/components/Home/FeaturesProducts.vue?vue&type=template&id=c6d3ae92&");


/***/ }),

/***/ "./resources/js/views/components/Home/HomeCategory.vue?vue&type=template&id=7100f81a&":
/*!********************************************************************************************!*\
  !*** ./resources/js/views/components/Home/HomeCategory.vue?vue&type=template&id=7100f81a& ***!
  \********************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_HomeCategory_vue_vue_type_template_id_7100f81a___WEBPACK_IMPORTED_MODULE_0__.render),
/* harmony export */   "staticRenderFns": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_HomeCategory_vue_vue_type_template_id_7100f81a___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns)
/* harmony export */ });
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_HomeCategory_vue_vue_type_template_id_7100f81a___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./HomeCategory.vue?vue&type=template&id=7100f81a& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/views/components/Home/HomeCategory.vue?vue&type=template&id=7100f81a&");


/***/ }),

/***/ "./resources/js/views/components/Home/HomeHeader.vue?vue&type=template&id=47197d42&":
/*!******************************************************************************************!*\
  !*** ./resources/js/views/components/Home/HomeHeader.vue?vue&type=template&id=47197d42& ***!
  \******************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_HomeHeader_vue_vue_type_template_id_47197d42___WEBPACK_IMPORTED_MODULE_0__.render),
/* harmony export */   "staticRenderFns": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_HomeHeader_vue_vue_type_template_id_47197d42___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns)
/* harmony export */ });
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_HomeHeader_vue_vue_type_template_id_47197d42___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./HomeHeader.vue?vue&type=template&id=47197d42& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/views/components/Home/HomeHeader.vue?vue&type=template&id=47197d42&");


/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/views/Pages/HomePage.vue?vue&type=template&id=81c93710&":
/*!*********************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/views/Pages/HomePage.vue?vue&type=template&id=81c93710& ***!
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
  return _c(
    "div",
    [
      _c("home-header"),
      _vm._v(" "),
      _c("home-category", { attrs: { categorais: _vm.categorais } }),
      _vm._v(" "),
      _c("features-products"),
    ],
    1
  )
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/views/components/Home/FeaturesProducts.vue?vue&type=template&id=c6d3ae92&":
/*!***************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/views/components/Home/FeaturesProducts.vue?vue&type=template&id=c6d3ae92& ***!
  \***************************************************************************************************************************************************************************************************************************************/
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
  return _vm._m(0)
}
var staticRenderFns = [
  function () {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("section", { staticClass: "bg-light" }, [
      _c("div", { staticClass: "container py-5" }, [
        _c("div", { staticClass: "row text-center py-3" }, [
          _c("div", { staticClass: "col-lg-6 m-auto" }, [
            _c("h1", { staticClass: "h1" }, [_vm._v("Featured Product")]),
            _vm._v(" "),
            _c("p", [
              _vm._v(
                "\n                    Reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.\n                    Excepteur sint occaecat cupidatat non proident.\n                "
              ),
            ]),
          ]),
        ]),
        _vm._v(" "),
        _c("div", { staticClass: "row" }, [
          _c("div", { staticClass: "col-12 col-md-4 mb-4" }, [
            _c("div", { staticClass: "card h-100" }, [
              _c("a", { attrs: { href: "shop-single.html" } }, [
                _c("img", {
                  staticClass: "card-img-top",
                  attrs: {
                    src: "http://127.0.0.1:8000/img/feature_prod_01.jpg",
                    alt: "...",
                  },
                }),
              ]),
              _vm._v(" "),
              _c("div", { staticClass: "card-body" }, [
                _c(
                  "ul",
                  {
                    staticClass: "list-unstyled d-flex justify-content-between",
                  },
                  [
                    _c("li", [
                      _c("i", { staticClass: "text-warning fa fa-star" }),
                      _vm._v(" "),
                      _c("i", { staticClass: "text-warning fa fa-star" }),
                      _vm._v(" "),
                      _c("i", { staticClass: "text-warning fa fa-star" }),
                      _vm._v(" "),
                      _c("i", { staticClass: "text-muted fa fa-star" }),
                      _vm._v(" "),
                      _c("i", { staticClass: "text-muted fa fa-star" }),
                    ]),
                    _vm._v(" "),
                    _c("li", { staticClass: "text-muted text-right" }, [
                      _vm._v("$240.00"),
                    ]),
                  ]
                ),
                _vm._v(" "),
                _c(
                  "a",
                  {
                    staticClass: "h2 text-decoration-none text-dark",
                    attrs: { href: "shop-single.html" },
                  },
                  [_vm._v("Gym Weight")]
                ),
                _vm._v(" "),
                _c("p", { staticClass: "card-text" }, [
                  _vm._v(
                    "\n                            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sunt in culpa qui officia deserunt.\n                        "
                  ),
                ]),
                _vm._v(" "),
                _c("p", { staticClass: "text-muted" }, [
                  _vm._v("Reviews (24)"),
                ]),
              ]),
            ]),
          ]),
          _vm._v(" "),
          _c("div", { staticClass: "col-12 col-md-4 mb-4" }, [
            _c("div", { staticClass: "card h-100" }, [
              _c("a", { attrs: { href: "shop-single.html" } }, [
                _c("img", {
                  staticClass: "card-img-top",
                  attrs: {
                    src: "http://127.0.0.1:8000/img/feature_prod_02.jpg",
                    alt: "...",
                  },
                }),
              ]),
              _vm._v(" "),
              _c("div", { staticClass: "card-body" }, [
                _c(
                  "ul",
                  {
                    staticClass: "list-unstyled d-flex justify-content-between",
                  },
                  [
                    _c("li", [
                      _c("i", { staticClass: "text-warning fa fa-star" }),
                      _vm._v(" "),
                      _c("i", { staticClass: "text-warning fa fa-star" }),
                      _vm._v(" "),
                      _c("i", { staticClass: "text-warning fa fa-star" }),
                      _vm._v(" "),
                      _c("i", { staticClass: "text-muted fa fa-star" }),
                      _vm._v(" "),
                      _c("i", { staticClass: "text-muted fa fa-star" }),
                    ]),
                    _vm._v(" "),
                    _c("li", { staticClass: "text-muted text-right" }, [
                      _vm._v("$480.00"),
                    ]),
                  ]
                ),
                _vm._v(" "),
                _c(
                  "a",
                  {
                    staticClass: "h2 text-decoration-none text-dark",
                    attrs: { href: "shop-single.html" },
                  },
                  [_vm._v("Cloud Nike Shoes")]
                ),
                _vm._v(" "),
                _c("p", { staticClass: "card-text" }, [
                  _vm._v(
                    "\n                            Aenean gravida dignissim finibus. Nullam ipsum diam, posuere vitae pharetra sed, commodo ullamcorper.\n                        "
                  ),
                ]),
                _vm._v(" "),
                _c("p", { staticClass: "text-muted" }, [
                  _vm._v("Reviews (48)"),
                ]),
              ]),
            ]),
          ]),
          _vm._v(" "),
          _c("div", { staticClass: "col-12 col-md-4 mb-4" }, [
            _c("div", { staticClass: "card h-100" }, [
              _c("a", { attrs: { href: "shop-single.html" } }, [
                _c("img", {
                  staticClass: "card-img-top",
                  attrs: {
                    src: "http://127.0.0.1:8000/img/feature_prod_03.jpg",
                    alt: "...",
                  },
                }),
              ]),
              _vm._v(" "),
              _c("div", { staticClass: "card-body" }, [
                _c(
                  "ul",
                  {
                    staticClass: "list-unstyled d-flex justify-content-between",
                  },
                  [
                    _c("li", [
                      _c("i", { staticClass: "text-warning fa fa-star" }),
                      _vm._v(" "),
                      _c("i", { staticClass: "text-warning fa fa-star" }),
                      _vm._v(" "),
                      _c("i", { staticClass: "text-warning fa fa-star" }),
                      _vm._v(" "),
                      _c("i", { staticClass: "text-warning fa fa-star" }),
                      _vm._v(" "),
                      _c("i", { staticClass: "text-warning fa fa-star" }),
                    ]),
                    _vm._v(" "),
                    _c("li", { staticClass: "text-muted text-right" }, [
                      _vm._v("$360.00"),
                    ]),
                  ]
                ),
                _vm._v(" "),
                _c(
                  "a",
                  {
                    staticClass: "h2 text-decoration-none text-dark",
                    attrs: { href: "shop-single.html" },
                  },
                  [_vm._v("Summer Addides Shoes")]
                ),
                _vm._v(" "),
                _c("p", { staticClass: "card-text" }, [
                  _vm._v(
                    "\n                            Curabitur ac mi sit amet diam luctus porta. Phasellus pulvinar sagittis diam, et scelerisque ipsum lobortis nec.\n                        "
                  ),
                ]),
                _vm._v(" "),
                _c("p", { staticClass: "text-muted" }, [
                  _vm._v("Reviews (74)"),
                ]),
              ]),
            ]),
          ]),
        ]),
      ]),
    ])
  },
]
render._withStripped = true



/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/views/components/Home/HomeCategory.vue?vue&type=template&id=7100f81a&":
/*!***********************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/views/components/Home/HomeCategory.vue?vue&type=template&id=7100f81a& ***!
  \***********************************************************************************************************************************************************************************************************************************/
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
  return _vm._m(0)
}
var staticRenderFns = [
  function () {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "container py-5" }, [
      _c("div", { staticClass: "row text-center pt-3" }, [
        _c("div", { staticClass: "col-lg-6 m-auto" }, [
          _c("h1", { staticClass: "h1" }, [_vm._v("Categories of The Month")]),
          _vm._v(" "),
          _c("p", [
            _vm._v(
              "\n                Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia\n                deserunt mollit anim id est laborum.\n            "
            ),
          ]),
        ]),
      ]),
      _vm._v(" "),
      _c("div", { staticClass: "row" }, [
        _c("div", { staticClass: "col-12 col-md-4 p-5 mt-3" }, [
          _c("img", {
            staticClass: "rounded-circle img-fluid border",
            attrs: { src: "http://127.0.0.1:8000/img/category_img_01.jpg" },
          }),
          _vm._v(" "),
          _c("h5", { staticClass: "text-center mt-3 mb-3" }, [
            _vm._v("Watches"),
          ]),
        ]),
        _vm._v(" "),
        _c("div", { staticClass: "col-12 col-md-4 p-5 mt-3" }, [
          _c("img", {
            staticClass: "rounded-circle img-fluid border",
            attrs: { src: "http://127.0.0.1:8000/img/category_img_02.jpg" },
          }),
          _vm._v(" "),
          _c("h2", { staticClass: "h5 text-center mt-3 mb-3" }, [_vm._v("Tv")]),
        ]),
        _vm._v(" "),
        _c("div", { staticClass: "col-12 col-md-4 p-5 mt-3" }, [
          _c("img", {
            staticClass: "rounded-circle img-fluid border",
            attrs: { src: "http://127.0.0.1:8000/img/category_img_03.jpg" },
          }),
          _vm._v(" "),
          _c("h2", { staticClass: "h5 text-center mt-3 mb-3" }, [
            _vm._v("Accessories"),
          ]),
        ]),
      ]),
    ])
  },
]
render._withStripped = true



/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/views/components/Home/HomeHeader.vue?vue&type=template&id=47197d42&":
/*!*********************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/views/components/Home/HomeHeader.vue?vue&type=template&id=47197d42& ***!
  \*********************************************************************************************************************************************************************************************************************************/
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
  return _vm._m(0)
}
var staticRenderFns = [
  function () {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c(
      "header",
      {
        staticClass: "carousel slide",
        attrs: {
          id: "template-mo-zay-hero-carousel",
          "data-bs-ride": "carousel",
        },
      },
      [
        _c("ol", { staticClass: "carousel-indicators" }, [
          _c("li", {
            staticClass: "active",
            attrs: {
              "data-bs-target": "#template-mo-zay-hero-carousel",
              "data-bs-slide-to": "0",
            },
          }),
          _vm._v(" "),
          _c("li", {
            attrs: {
              "data-bs-target": "#template-mo-zay-hero-carousel",
              "data-bs-slide-to": "1",
            },
          }),
          _vm._v(" "),
          _c("li", {
            attrs: {
              "data-bs-target": "#template-mo-zay-hero-carousel",
              "data-bs-slide-to": "2",
            },
          }),
        ]),
        _vm._v(" "),
        _c("div", { staticClass: "carousel-inner" }, [
          _c("div", { staticClass: "carousel-item active" }, [
            _c("div", { staticClass: "container" }, [
              _c("div", { staticClass: "row p-5" }, [
                _c(
                  "div",
                  { staticClass: "mx-auto col-md-8 col-lg-6 order-lg-last" },
                  [
                    _c("img", {
                      staticClass: "img-fluid",
                      attrs: {
                        src: "http://127.0.0.1:8000/img/banner_img_01.jpg",
                        alt: "",
                      },
                    }),
                  ]
                ),
                _vm._v(" "),
                _c(
                  "div",
                  { staticClass: "col-lg-6 mb-0 d-flex align-items-center" },
                  [
                    _c(
                      "div",
                      { staticClass: "text-align-left align-self-center" },
                      [
                        _c("h1", { staticClass: "h1 text-success" }, [
                          _c("b", [_vm._v("Zay")]),
                          _vm._v(" eCommerce"),
                        ]),
                        _vm._v(" "),
                        _c("h3", { staticClass: "h2" }, [
                          _vm._v("Tiny and Perfect eCommerce Template"),
                        ]),
                        _vm._v(" "),
                        _c("p", [
                          _vm._v(
                            "\n                                Zay Shop is an eCommerce HTML5 CSS template with latest version of Bootstrap 5 (beta 1). \n                                This template is 100% free provided by "
                          ),
                          _c(
                            "a",
                            {
                              staticClass: "text-success",
                              attrs: {
                                rel: "sponsored",
                                href: "https://templatemo.com",
                                target: "_blank",
                              },
                            },
                            [_vm._v("TemplateMo")]
                          ),
                          _vm._v(
                            " website. \n                                Image credits go to "
                          ),
                          _c(
                            "a",
                            {
                              staticClass: "text-success",
                              attrs: {
                                rel: "sponsored",
                                href: "https://stories.freepik.com/",
                                target: "_blank",
                              },
                            },
                            [_vm._v("Freepik Stories")]
                          ),
                          _vm._v(",\n                                "),
                          _c(
                            "a",
                            {
                              staticClass: "text-success",
                              attrs: {
                                rel: "sponsored",
                                href: "https://unsplash.com/",
                                target: "_blank",
                              },
                            },
                            [_vm._v("Unsplash")]
                          ),
                          _vm._v(" and\n                                "),
                          _c(
                            "a",
                            {
                              staticClass: "text-success",
                              attrs: {
                                rel: "sponsored",
                                href: "https://icons8.com/",
                                target: "_blank",
                              },
                            },
                            [_vm._v("Icons 8")]
                          ),
                          _vm._v(".\n                            "),
                        ]),
                      ]
                    ),
                  ]
                ),
              ]),
            ]),
          ]),
          _vm._v(" "),
          _c("div", { staticClass: "carousel-item" }, [
            _c("div", { staticClass: "container" }, [
              _c("div", { staticClass: "row p-5" }, [
                _c(
                  "div",
                  { staticClass: "mx-auto col-md-8 col-lg-6 order-lg-last" },
                  [
                    _c("img", {
                      staticClass: "img-fluid",
                      attrs: {
                        src: "http://127.0.0.1:8000/img/banner_img_02.jpg",
                        alt: "",
                      },
                    }),
                  ]
                ),
                _vm._v(" "),
                _c(
                  "div",
                  { staticClass: "col-lg-6 mb-0 d-flex align-items-center" },
                  [
                    _c("div", { staticClass: "text-align-left" }, [
                      _c("h1", { staticClass: "h1" }, [
                        _vm._v("Proident occaecat"),
                      ]),
                      _vm._v(" "),
                      _c("h3", { staticClass: "h2" }, [
                        _vm._v("Aliquip ex ea commodo consequat"),
                      ]),
                      _vm._v(" "),
                      _c("p", [
                        _vm._v(
                          "\n                                You are permitted to use this Zay CSS template for your commercial websites. \n                                You are "
                        ),
                        _c("strong", [_vm._v("not permitted")]),
                        _vm._v(
                          " to re-distribute the template ZIP file in any kind of template collection websites.\n                            "
                        ),
                      ]),
                    ]),
                  ]
                ),
              ]),
            ]),
          ]),
          _vm._v(" "),
          _c("div", { staticClass: "carousel-item" }, [
            _c("div", { staticClass: "container" }, [
              _c("div", { staticClass: "row p-5" }, [
                _c(
                  "div",
                  { staticClass: "mx-auto col-md-8 col-lg-6 order-lg-last" },
                  [
                    _c("img", {
                      staticClass: "img-fluid",
                      attrs: {
                        src: "http://127.0.0.1:8000/img/banner_img_03.jpg",
                        alt: "",
                      },
                    }),
                  ]
                ),
                _vm._v(" "),
                _c(
                  "div",
                  { staticClass: "col-lg-6 mb-0 d-flex align-items-center" },
                  [
                    _c("div", { staticClass: "text-align-left" }, [
                      _c("h1", { staticClass: "h1" }, [
                        _vm._v("Repr in voluptate"),
                      ]),
                      _vm._v(" "),
                      _c("h3", { staticClass: "h2" }, [
                        _vm._v("Ullamco laboris nisi ut "),
                      ]),
                      _vm._v(" "),
                      _c("p", [
                        _vm._v(
                          "\n                                We bring you 100% free CSS templates for your websites. \n                                If you wish to support TemplateMo, please make a small contribution via PayPal or tell your friends about our website. Thank you.\n                            "
                        ),
                      ]),
                    ]),
                  ]
                ),
              ]),
            ]),
          ]),
        ]),
        _vm._v(" "),
        _c(
          "a",
          {
            staticClass:
              "carousel-control-prev text-decoration-none w-auto ps-3",
            attrs: {
              href: "#template-mo-zay-hero-carousel",
              role: "button",
              "data-bs-slide": "prev",
            },
          },
          [_c("i", { staticClass: "fas fa-chevron-left" })]
        ),
        _vm._v(" "),
        _c(
          "a",
          {
            staticClass:
              "carousel-control-next text-decoration-none w-auto pe-3",
            attrs: {
              href: "#template-mo-zay-hero-carousel",
              role: "button",
              "data-bs-slide": "next",
            },
          },
          [_c("i", { staticClass: "fas fa-chevron-right" })]
        ),
      ]
    )
  },
]
render._withStripped = true



/***/ })

}]);