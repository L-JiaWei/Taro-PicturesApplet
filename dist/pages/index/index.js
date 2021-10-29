(wx["webpackJsonp"] = wx["webpackJsonp"] || []).push([["pages/index/index"],{

/***/ "./node_modules/@tarojs/taro-loader/lib/raw.js!./src/pages/index/index.vue":
/*!*********************************************************************************!*\
  !*** ./node_modules/@tarojs/taro-loader/lib/raw.js!./src/pages/index/index.vue ***!
  \*********************************************************************************/
/*! exports provided: default */
/*! exports used: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _index_vue_vue_type_template_id_1badc801__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./index.vue?vue&type=template&id=1badc801 */ "./src/pages/index/index.vue?vue&type=template&id=1badc801");
/* harmony import */ var _index_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./index.vue?vue&type=script&lang=js */ "./src/pages/index/index.vue?vue&type=script&lang=js");
/* harmony import */ var _index_vue_vue_type_style_index_0_id_1badc801_lang_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./index.vue?vue&type=style&index=0&id=1badc801&lang=scss */ "./src/pages/index/index.vue?vue&type=style&index=0&id=1badc801&lang=scss");





_index_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__[/* default */ "a"].render = _index_vue_vue_type_template_id_1badc801__WEBPACK_IMPORTED_MODULE_0__[/* render */ "a"]
/* hot reload */
if (false) {}

_index_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__[/* default */ "a"].__file = "src/pages/index/index.vue"

/* harmony default export */ __webpack_exports__["a"] = (_index_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__[/* default */ "a"]);

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js!./node_modules/vue-loader/dist/index.js?!./src/pages/index/index.vue?vue&type=script&lang=js":
/*!*************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib!./node_modules/vue-loader/dist??ref--10-0!./src/pages/index/index.vue?vue&type=script&lang=js ***!
  \*************************************************************************************************************************************/
/*! exports provided: default */
/*! exports used: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var C_Users_ljw_Desktop_picturesApplet_master_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/regenerator */ "./node_modules/@babel/runtime/regenerator/index.js");
/* harmony import */ var C_Users_ljw_Desktop_picturesApplet_master_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(C_Users_ljw_Desktop_picturesApplet_master_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var C_Users_ljw_Desktop_picturesApplet_master_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator */ "./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js");
/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! vue */ "./node_modules/@vue/reactivity/dist/reactivity.esm-bundler.js");
/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! vue */ "./node_modules/@vue/runtime-core/dist/runtime-core.esm-bundler.js");
/* harmony import */ var vuex__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! vuex */ "./node_modules/vuex/dist/vuex.esm-browser.js");
/* harmony import */ var _tarojs_taro__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @tarojs/taro */ "./node_modules/@tarojs/taro/index.js");
/* harmony import */ var _tarojs_taro__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_tarojs_taro__WEBPACK_IMPORTED_MODULE_5__);





/* harmony default export */ __webpack_exports__["a"] = ({
  name: 'Index',
  setup: function setup() {
    var store = Object(vuex__WEBPACK_IMPORTED_MODULE_4__[/* useStore */ "b"])();
    var loading = Object(vue__WEBPACK_IMPORTED_MODULE_2__[/* ref */ "l"])(false);
    var hasMore = Object(vue__WEBPACK_IMPORTED_MODULE_2__[/* ref */ "l"])(true);
    var page = Object(vue__WEBPACK_IMPORTED_MODULE_2__[/* ref */ "l"])(0);
    var pictures = Object(vue__WEBPACK_IMPORTED_MODULE_3__[/* computed */ "f"])(function () {
      return store.state.pictures;
    }); // const collectPictures = computed (() => store.state.collectPictures)

    var load = function load(done) {
      setTimeout(function () {
        loadMore();
        done();
      }, 1000);
    };

    var loadMore = /*#__PURE__*/function () {
      var _ref = Object(C_Users_ljw_Desktop_picturesApplet_master_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__[/* default */ "a"])( /*#__PURE__*/C_Users_ljw_Desktop_picturesApplet_master_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee() {
        var res;
        return C_Users_ljw_Desktop_picturesApplet_master_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                console.log("加载更多ing");
                page.value += 1;
                _context.prev = 2;
                _context.next = 5;
                return store.dispatch('LOAD_PICTURES_ACTION', {
                  page: page.value
                });

              case 5:
                res = _context.sent;
                console.log("加载第" + page.value + "页"); // console.log("loadMore", res)

                _context.next = 13;
                break;

              case 9:
                _context.prev = 9;
                _context.t0 = _context["catch"](2);
                console.log(_context.t0);
                hasMore.value(false);

              case 13:
                _context.prev = 13;
                loading.value = false;
                return _context.finish(13);

              case 16:
              case "end":
                return _context.stop();
            }
          }
        }, _callee, null, [[2, 9, 13, 16]]);
      }));

      return function loadMore() {
        return _ref.apply(this, arguments);
      };
    }();

    Object(vue__WEBPACK_IMPORTED_MODULE_3__[/* onMounted */ "x"])(function () {
      //页面挂载的时候执行loadMore方法
      loading.value = true;
      loadMore();
      var mycollecteData = _tarojs_taro__WEBPACK_IMPORTED_MODULE_5___default.a.getStorageSync("collection");

      if (mycollecteData) {
        store.commit("updatefinishTasks", mycollecteData);
      }
    });
    _tarojs_taro__WEBPACK_IMPORTED_MODULE_5___default.a.onAppHide(function () {
      if (store.state.myFollow.length >= 0) {
        _tarojs_taro__WEBPACK_IMPORTED_MODULE_5___default.a.setStorage({
          key: "collection",
          data: store.state.myFollow
        });
        console.log(_tarojs_taro__WEBPACK_IMPORTED_MODULE_5___default.a.getStorageSync("collection"));
      }
    });

    var toDetails = function toDetails(info, index) {
      _tarojs_taro__WEBPACK_IMPORTED_MODULE_5___default.a.navigateTo({
        url: "/details/detail?id=".concat(info.id, "&index=").concat(index)
      });
    };

    var addfollow = function addfollow(index) {
      store.commit("ADD_TO_FOLLOW", index);
      console.log("收藏成功");
    };

    var delfollow = function delfollow(id, index) {
      store.commit("DEL_TO_FOLLOW", id, index);
    };

    return {
      loading: loading,
      pictures: pictures,
      hasMore: hasMore,
      loadMore: loadMore,
      load: load,
      toDetails: toDetails,
      addfollow: addfollow
    };
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js!./node_modules/vue-loader/dist/templateLoader.js?!./node_modules/vue-loader/dist/index.js?!./src/pages/index/index.vue?vue&type=template&id=1badc801":
/*!****************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib!./node_modules/vue-loader/dist/templateLoader.js??ref--6!./node_modules/vue-loader/dist??ref--10-0!./src/pages/index/index.vue?vue&type=template&id=1badc801 ***!
  \****************************************************************************************************************************************************************************************************/
/*! exports provided: render */
/*! exports used: render */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return render; });
/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vue */ "./node_modules/@vue/runtime-core/dist/runtime-core.esm-bundler.js");
/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! vue */ "./node_modules/@vue/shared/dist/shared.esm-bundler.js");

var _hoisted_1 = {
  class: "index"
};
var _hoisted_2 = {
  key: 0
};
var _hoisted_3 = {
  key: 1,
  class: "infiniteUl",
  id: "scroll"
};
var _hoisted_4 = {
  class: "author"
};
function render(_ctx, _cache, $props, $setup, $data, $options) {
  var _component_nut_icon = Object(vue__WEBPACK_IMPORTED_MODULE_0__[/* resolveComponent */ "E"])("nut-icon");

  var _component_nut_infiniteloading = Object(vue__WEBPACK_IMPORTED_MODULE_0__[/* resolveComponent */ "E"])("nut-infiniteloading");

  return Object(vue__WEBPACK_IMPORTED_MODULE_0__[/* openBlock */ "A"])(), Object(vue__WEBPACK_IMPORTED_MODULE_0__[/* createBlock */ "g"])("view", _hoisted_1, [$setup.loading ? (Object(vue__WEBPACK_IMPORTED_MODULE_0__[/* openBlock */ "A"])(), Object(vue__WEBPACK_IMPORTED_MODULE_0__[/* createBlock */ "g"])("view", _hoisted_2, [Object(vue__WEBPACK_IMPORTED_MODULE_0__[/* createVNode */ "l"])(_component_nut_icon, {
    type: "loading"
  })])) : (Object(vue__WEBPACK_IMPORTED_MODULE_0__[/* openBlock */ "A"])(), Object(vue__WEBPACK_IMPORTED_MODULE_0__[/* createBlock */ "g"])("view", _hoisted_3, [Object(vue__WEBPACK_IMPORTED_MODULE_0__[/* createVNode */ "l"])(_component_nut_infiniteloading, {
    containerId: "scroll",
    "pull-icon": "JD",
    "load-txt": "loading",
    "is-open-refresh": false,
    "has-more": $setup.hasMore,
    onLoadMore: $setup.load
  }, {
    default: Object(vue__WEBPACK_IMPORTED_MODULE_0__[/* withCtx */ "L"])(function () {
      return [(Object(vue__WEBPACK_IMPORTED_MODULE_0__[/* openBlock */ "A"])(true), Object(vue__WEBPACK_IMPORTED_MODULE_0__[/* createBlock */ "g"])(vue__WEBPACK_IMPORTED_MODULE_0__[/* Fragment */ "b"], null, Object(vue__WEBPACK_IMPORTED_MODULE_0__[/* renderList */ "C"])($setup.pictures, function (item, index) {
        return Object(vue__WEBPACK_IMPORTED_MODULE_0__[/* openBlock */ "A"])(), Object(vue__WEBPACK_IMPORTED_MODULE_0__[/* createBlock */ "g"])("view", {
          key: item.id,
          class: "infiniteLi"
        }, [Object(vue__WEBPACK_IMPORTED_MODULE_0__[/* createVNode */ "l"])("img", {
          class: "resize",
          src: "https://picsum.photos/id/".concat(item.id, "/200"),
          onTap: function onTap($event) {
            return $setup.toDetails(item, index);
          }
        }, null, 40
        /* PROPS, HYDRATE_EVENTS */
        , ["src", "onTap"]), Object(vue__WEBPACK_IMPORTED_MODULE_0__[/* createVNode */ "l"])("view", _hoisted_4, [Object(vue__WEBPACK_IMPORTED_MODULE_0__[/* createTextVNode */ "k"])(Object(vue__WEBPACK_IMPORTED_MODULE_1__[/* toDisplayString */ "K"])(index + "-" + item.author) + " ", 1
        /* TEXT */
        ), Object(vue__WEBPACK_IMPORTED_MODULE_0__[/* createVNode */ "l"])(_component_nut_icon, {
          class: "star",
          name: "star-fill-n",
          key: item.id,
          onTap: function onTap($event) {
            return $setup.addfollow(index);
          }
        }, null, 8
        /* PROPS */
        , ["onTap"])])]);
      }), 128
      /* KEYED_FRAGMENT */
      ))];
    }),
    _: 1
    /* STABLE */

  }, 8
  /* PROPS */
  , ["has-more", "onLoadMore"])]))]);
}

/***/ }),

/***/ "./node_modules/mini-css-extract-plugin/dist/loader.js!./node_modules/css-loader/dist/cjs.js?!./node_modules/vue-loader/dist/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js?!./node_modules/resolve-url-loader/index.js!./node_modules/sass-loader/dist/cjs.js?!./node_modules/vue-loader/dist/index.js?!./src/pages/index/index.vue?vue&type=style&index=0&id=1badc801&lang=scss":
/*!*************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/mini-css-extract-plugin/dist/loader.js!./node_modules/css-loader/dist/cjs.js??ref--1-oneOf-0-1!./node_modules/vue-loader/dist/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??ref--1-oneOf-0-2!./node_modules/resolve-url-loader!./node_modules/sass-loader/dist/cjs.js??ref--1-oneOf-0-4!./node_modules/vue-loader/dist??ref--10-0!./src/pages/index/index.vue?vue&type=style&index=0&id=1badc801&lang=scss ***!
  \*************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "./src/pages/index/index.vue":
/*!***********************************!*\
  !*** ./src/pages/index/index.vue ***!
  \***********************************/
/*! no exports provided */
/*! all exports used */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _tarojs_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @tarojs/runtime */ "./node_modules/@tarojs/runtime/dist/runtime.esm.js");
/* harmony import */ var _node_modules_tarojs_taro_loader_lib_raw_js_index_vue__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../node_modules/@tarojs/taro-loader/lib/raw.js!./index.vue */ "./node_modules/@tarojs/taro-loader/lib/raw.js!./src/pages/index/index.vue");


var config = {"navigationBarTitleText":"首页"};


var inst = Page(Object(_tarojs_runtime__WEBPACK_IMPORTED_MODULE_0__["createPageConfig"])(_node_modules_tarojs_taro_loader_lib_raw_js_index_vue__WEBPACK_IMPORTED_MODULE_1__[/* default */ "a"], 'pages/index/index', {root:{cn:[]}}, config || {}))



/***/ }),

/***/ "./src/pages/index/index.vue?vue&type=script&lang=js":
/*!***********************************************************!*\
  !*** ./src/pages/index/index.vue?vue&type=script&lang=js ***!
  \***********************************************************/
/*! exports provided: default */
/*! exports used: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _node_modules_babel_loader_lib_index_js_node_modules_vue_loader_dist_index_js_ref_10_0_index_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/babel-loader/lib!../../../node_modules/vue-loader/dist??ref--10-0!./index.vue?vue&type=script&lang=js */ "./node_modules/babel-loader/lib/index.js!./node_modules/vue-loader/dist/index.js?!./src/pages/index/index.vue?vue&type=script&lang=js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "a", function() { return _node_modules_babel_loader_lib_index_js_node_modules_vue_loader_dist_index_js_ref_10_0_index_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__["a"]; });

 

/***/ }),

/***/ "./src/pages/index/index.vue?vue&type=style&index=0&id=1badc801&lang=scss":
/*!********************************************************************************!*\
  !*** ./src/pages/index/index.vue?vue&type=style&index=0&id=1badc801&lang=scss ***!
  \********************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _node_modules_mini_css_extract_plugin_dist_loader_js_node_modules_css_loader_dist_cjs_js_ref_1_oneOf_0_1_node_modules_vue_loader_dist_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_1_oneOf_0_2_node_modules_resolve_url_loader_index_js_node_modules_sass_loader_dist_cjs_js_ref_1_oneOf_0_4_node_modules_vue_loader_dist_index_js_ref_10_0_index_vue_vue_type_style_index_0_id_1badc801_lang_scss__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/mini-css-extract-plugin/dist/loader.js!../../../node_modules/css-loader/dist/cjs.js??ref--1-oneOf-0-1!../../../node_modules/vue-loader/dist/stylePostLoader.js!../../../node_modules/postcss-loader/dist/cjs.js??ref--1-oneOf-0-2!../../../node_modules/resolve-url-loader!../../../node_modules/sass-loader/dist/cjs.js??ref--1-oneOf-0-4!../../../node_modules/vue-loader/dist??ref--10-0!./index.vue?vue&type=style&index=0&id=1badc801&lang=scss */ "./node_modules/mini-css-extract-plugin/dist/loader.js!./node_modules/css-loader/dist/cjs.js?!./node_modules/vue-loader/dist/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js?!./node_modules/resolve-url-loader/index.js!./node_modules/sass-loader/dist/cjs.js?!./node_modules/vue-loader/dist/index.js?!./src/pages/index/index.vue?vue&type=style&index=0&id=1badc801&lang=scss");
/* harmony import */ var _node_modules_mini_css_extract_plugin_dist_loader_js_node_modules_css_loader_dist_cjs_js_ref_1_oneOf_0_1_node_modules_vue_loader_dist_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_1_oneOf_0_2_node_modules_resolve_url_loader_index_js_node_modules_sass_loader_dist_cjs_js_ref_1_oneOf_0_4_node_modules_vue_loader_dist_index_js_ref_10_0_index_vue_vue_type_style_index_0_id_1badc801_lang_scss__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_mini_css_extract_plugin_dist_loader_js_node_modules_css_loader_dist_cjs_js_ref_1_oneOf_0_1_node_modules_vue_loader_dist_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_1_oneOf_0_2_node_modules_resolve_url_loader_index_js_node_modules_sass_loader_dist_cjs_js_ref_1_oneOf_0_4_node_modules_vue_loader_dist_index_js_ref_10_0_index_vue_vue_type_style_index_0_id_1badc801_lang_scss__WEBPACK_IMPORTED_MODULE_0__);
/* unused harmony reexport * */


/***/ }),

/***/ "./src/pages/index/index.vue?vue&type=template&id=1badc801":
/*!*****************************************************************!*\
  !*** ./src/pages/index/index.vue?vue&type=template&id=1badc801 ***!
  \*****************************************************************/
/*! exports provided: render */
/*! exports used: render */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _node_modules_babel_loader_lib_index_js_node_modules_vue_loader_dist_templateLoader_js_ref_6_node_modules_vue_loader_dist_index_js_ref_10_0_index_vue_vue_type_template_id_1badc801__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/babel-loader/lib!../../../node_modules/vue-loader/dist/templateLoader.js??ref--6!../../../node_modules/vue-loader/dist??ref--10-0!./index.vue?vue&type=template&id=1badc801 */ "./node_modules/babel-loader/lib/index.js!./node_modules/vue-loader/dist/templateLoader.js?!./node_modules/vue-loader/dist/index.js?!./src/pages/index/index.vue?vue&type=template&id=1badc801");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "a", function() { return _node_modules_babel_loader_lib_index_js_node_modules_vue_loader_dist_templateLoader_js_ref_6_node_modules_vue_loader_dist_index_js_ref_10_0_index_vue_vue_type_template_id_1badc801__WEBPACK_IMPORTED_MODULE_0__["a"]; });



/***/ })

},[["./src/pages/index/index.vue","runtime","taro","vendors"]]]);
//# sourceMappingURL=index.js.map