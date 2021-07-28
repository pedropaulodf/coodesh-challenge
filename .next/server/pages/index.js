(function() {
var exports = {};
exports.id = 405;
exports.ids = [405];
exports.modules = {

/***/ 319:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": function() { return /* binding */ Home; },
  "getStaticProps": function() { return /* binding */ getStaticProps; }
});

;// CONCATENATED MODULE: external "react/jsx-runtime"
var jsx_runtime_namespaceObject = require("react/jsx-runtime");;
// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(297);
;// CONCATENATED MODULE: external "axios"
var external_axios_namespaceObject = require("axios");;
var external_axios_default = /*#__PURE__*/__webpack_require__.n(external_axios_namespaceObject);
;// CONCATENATED MODULE: ./services/api.js

const api = external_axios_default().create({
  baseURL: 'https://api.beta.mejorconsalud.com/wp-json/mc/v2/'
});
/* harmony default export */ var services_api = (api);
;// CONCATENATED MODULE: ./pages/index.js




async function getStaticProps(context) {
  // O que eu passar aqui, ele vai virar SEO
  const response = await services_api.get('posts/406721', {}, {
    "Access-Control-Allow-Origin": "*"
  }).then(response => {
    return response.data.metas;
  }).catch(error => {
    console.log(error);
    return false;
  });
  console.log(response); // return response;

  return {
    props: {
      response
    } // will be passed to the page component as props

  };
}
function Home({
  response
}) {
  // const { response } = props;
  const {
    0: allPosts,
    1: setAllPosts
  } = (0,external_react_.useState)(response); // useEffect(async ()=> {
  // },[])

  return /*#__PURE__*/(0,jsx_runtime_namespaceObject.jsxs)("div", {
    children: [/*#__PURE__*/jsx_runtime_namespaceObject.jsx("p", {
      children: "Coodesh Challenge"
    }), allPosts.title]
  });
}

/***/ }),

/***/ 297:
/***/ (function(module) {

"use strict";
module.exports = require("react");;

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = function(moduleId) { return __webpack_require__(__webpack_require__.s = moduleId); }
var __webpack_exports__ = (__webpack_exec__(319));
module.exports = __webpack_exports__;

})();