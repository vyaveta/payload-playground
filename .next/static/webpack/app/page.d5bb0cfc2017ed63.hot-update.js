"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("app/page",{

/***/ "(app-pages-browser)/./src/sanity/schema/invention.ts":
/*!****************************************!*\
  !*** ./src/sanity/schema/invention.ts ***!
  \****************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\nconst invention = {\n    name: \"invention\",\n    title: \"Inventions\",\n    type: \"document\",\n    fields: [\n        {\n            name: \"name\",\n            title: \"Name\",\n            type: \"string\"\n        },\n        {\n            name: \"slug\",\n            title: \"Slug\",\n            type: \"slug\",\n            options: {\n                source: \"name\"\n            }\n        },\n        {\n            name: \"image\",\n            title: \"Image\",\n            type: \"image\",\n            options: {\n                hotspot: true\n            },\n            fields: [\n                {\n                    name: \"alt\",\n                    title: \"Alt\",\n                    type: \"string\"\n                }\n            ]\n        },\n        {\n            name: \"url\",\n            title: \"Url\",\n            type: \"url\"\n        },\n        {\n            name: \"content\",\n            titie: \"Content\",\n            type: \"array\",\n            of: [\n                {\n                    type: \"block\"\n                }\n            ]\n        }\n    ]\n};\n/* harmony default export */ __webpack_exports__[\"default\"] = (invention);\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL3NyYy9zYW5pdHkvc2NoZW1hL2ludmVudGlvbi50cyIsIm1hcHBpbmdzIjoiO0FBQUEsTUFBTUEsWUFBWTtJQUNkQyxNQUFNO0lBQ05DLE9BQU87SUFDUEMsTUFBTTtJQUNOQyxRQUFRO1FBQ0o7WUFDSUgsTUFBTTtZQUNOQyxPQUFPO1lBQ1BDLE1BQU07UUFDVjtRQUNBO1lBQ0lGLE1BQU07WUFDTkMsT0FBTztZQUNQQyxNQUFNO1lBQ05FLFNBQVM7Z0JBQ0xDLFFBQVE7WUFDWjtRQUNKO1FBQ0E7WUFDSUwsTUFBTTtZQUNOQyxPQUFPO1lBQ1BDLE1BQU07WUFDTkUsU0FBUztnQkFDTEUsU0FBUztZQUNiO1lBQ0FILFFBQU87Z0JBQ0g7b0JBQ0lILE1BQU07b0JBQ1ZDLE9BQU87b0JBQ1BDLE1BQU07Z0JBQ047YUFDSDtRQUNMO1FBQ0E7WUFDSUYsTUFBTTtZQUNOQyxPQUFPO1lBQ1BDLE1BQU07UUFDVjtRQUNBO1lBQ0lGLE1BQU07WUFDTk8sT0FBTztZQUNQTCxNQUFNO1lBQ05NLElBQUk7Z0JBQUM7b0JBQUVOLE1BQU07Z0JBQVE7YUFBRTtRQUMzQjtLQUNIO0FBQ0w7QUFhQSwrREFBZUgsU0FBU0EsRUFBQSIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9zcmMvc2FuaXR5L3NjaGVtYS9pbnZlbnRpb24udHM/MWE5OCJdLCJzb3VyY2VzQ29udGVudCI6WyJjb25zdCBpbnZlbnRpb24gPSB7XHJcbiAgICBuYW1lOiBcImludmVudGlvblwiLFxyXG4gICAgdGl0bGU6IFwiSW52ZW50aW9uc1wiLFxyXG4gICAgdHlwZTogXCJkb2N1bWVudFwiLFxyXG4gICAgZmllbGRzOiBbXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICBuYW1lOiBcIm5hbWVcIixcclxuICAgICAgICAgICAgdGl0bGU6IFwiTmFtZVwiLFxyXG4gICAgICAgICAgICB0eXBlOiBcInN0cmluZ1wiLFxyXG4gICAgICAgIH0sXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICBuYW1lOiBcInNsdWdcIixcclxuICAgICAgICAgICAgdGl0bGU6IFwiU2x1Z1wiLFxyXG4gICAgICAgICAgICB0eXBlOiBcInNsdWdcIixcclxuICAgICAgICAgICAgb3B0aW9uczoge1xyXG4gICAgICAgICAgICAgICAgc291cmNlOiBcIm5hbWVcIlxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSxcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIG5hbWU6IFwiaW1hZ2VcIixcclxuICAgICAgICAgICAgdGl0bGU6IFwiSW1hZ2VcIixcclxuICAgICAgICAgICAgdHlwZTogXCJpbWFnZVwiLFxyXG4gICAgICAgICAgICBvcHRpb25zOiB7XHJcbiAgICAgICAgICAgICAgICBob3RzcG90OiB0cnVlXHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIGZpZWxkczpbXHJcbiAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgbmFtZTogXCJhbHRcIixcclxuICAgICAgICAgICAgICAgIHRpdGxlOiBcIkFsdFwiLFxyXG4gICAgICAgICAgICAgICAgdHlwZTogXCJzdHJpbmdcIixcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgXVxyXG4gICAgICAgIH0sXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICBuYW1lOiBcInVybFwiLFxyXG4gICAgICAgICAgICB0aXRsZTogXCJVcmxcIixcclxuICAgICAgICAgICAgdHlwZTogXCJ1cmxcIlxyXG4gICAgICAgIH0sXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICBuYW1lOiBcImNvbnRlbnRcIixcclxuICAgICAgICAgICAgdGl0aWU6IFwiQ29udGVudFwiLFxyXG4gICAgICAgICAgICB0eXBlOiAnYXJyYXknLFxyXG4gICAgICAgICAgICBvZjogW3sgdHlwZTogXCJibG9ja1wiIH1dLFxyXG4gICAgICAgIH1cclxuICAgIF1cclxufVxyXG5cclxuZXhwb3J0IHR5cGUgVGludmVudGlvbiA9IHtcclxuICAgIG5hbWU6IHN0cmluZyxcclxuICAgIHNsdWc6IHtcclxuICAgICAgICBjdXJyZW50OiBzdHJpbmcsXHJcbiAgICAgICAgX3R5cGU6IHN0cmluZyxcclxuICAgIH0sXHJcbiAgICBpbWFnZTogc3RyaW5nLFxyXG4gICAgdXJsOiBzdHJpbmcsXHJcbiAgICBjb250ZW50OiBzdHJpbmcsXHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IGludmVudGlvbiJdLCJuYW1lcyI6WyJpbnZlbnRpb24iLCJuYW1lIiwidGl0bGUiLCJ0eXBlIiwiZmllbGRzIiwib3B0aW9ucyIsInNvdXJjZSIsImhvdHNwb3QiLCJ0aXRpZSIsIm9mIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(app-pages-browser)/./src/sanity/schema/invention.ts\n"));

/***/ })

});