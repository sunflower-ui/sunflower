/*!
 * sunflower-ui v1.0.0
 * Made with <3 by millent 2018
 * Released under the MIT License.
 */
!(function(e,t){var n,r;if("object"==typeof exports&&"object"==typeof module)module.exports=t(require("vue"));else if("function"==typeof define&&define.amd)define(["vue"],t);else{n=t("object"==typeof exports?require("vue"):e.Vue);for(r in n)("object"==typeof exports?exports:e)[r]=n[r]}})("undefined"!=typeof self?self:this,(function(e){return (function(e){function t(r){if(n[r])return n[r].exports;var o=n[r]={i:r,l:!1,exports:{}};return e[r].call(o.exports,o,o.exports,t),o.l=!0,o.exports}var n={};return t.m=e,t.c=n,t.d=function(e,n,r){t.o(e,n)||Object.defineProperty(e,n,{configurable:!1,enumerable:!0,get:r})},t.n=function(e){var n=e&&e.__esModule?function(){return e.default}:function(){return e};return t.d(n,"a",n),n},t.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},t.p="",t(t.s=12)})([(function(e,t,n){"use strict";var r,o;Object.defineProperty(t,"__esModule",{value:!0}),r=n(5),o=(function(e){return e&&e.__esModule?e:{default:e}})(r),t.default=new o.default({name:"MdIcon",props:{mdSrc:String}})}),(function(e,t,n){"use strict";var r,o;Object.defineProperty(t,"__esModule",{value:!0}),r=n(2),o=(function(e){return e&&e.__esModule?e:{default:e}})(r),t.default=function(e){e.component(o.default.name,o.default)}}),(function(e,t,n){"use strict";function r(e){n(3)}var o,u,i,s,a,c,l,f,d,m;Object.defineProperty(t,"__esModule",{value:!0}),o=n(0),u=n.n(o);for(i in o)"default"!==i&&(function(e){n.d(t,e,(function(){return o[e]}))})(i);s=n(9),a=n(4),c=!1,l=r,f=null,d=null,m=a(u.a,s.a,c,l,f,d),t.default=m.exports}),(function(e,t){}),(function(e,t){e.exports=function(e,t,n,r,o,u){var i,s,a,c,l,f=e=e||{},d=typeof e.default;return"object"!==d&&"function"!==d||(i=e,f=e.default),s="function"==typeof f?f.options:f,t&&(s.render=t.render,s.staticRenderFns=t.staticRenderFns,s._compiled=!0),n&&(s.functional=!0),o&&(s._scopeId=o),u?(a=function(e){e=e||this.$vnode&&this.$vnode.ssrContext||this.parent&&this.parent.$vnode&&this.parent.$vnode.ssrContext,e||"undefined"==typeof __VUE_SSR_CONTEXT__||(e=__VUE_SSR_CONTEXT__),r&&r.call(this,e),e&&e._registeredComponents&&e._registeredComponents.add(u)},s._ssrRegister=a):r&&(a=r),a&&(c=s.functional,l=c?s.render:s.beforeCreate,c?(s._injectStyles=a,s.render=function(e,t){return a.call(t),l(e,t)}):s.beforeCreate=l?[].concat(l,a):[a]),{esModule:i,exports:f,options:s}}}),(function(e,t,n){"use strict";function r(e){return e&&e.__esModule?e:{default:e}}var o,u,i,s;Object.defineProperty(t,"__esModule",{value:!0}),t.default=function(e){var t={props:{mdTheme:null},computed:{$mdActiveTheme:function(){var e=u.default.enabled,t=u.default.getThemeName,n=u.default.getAncestorTheme;return e&&!1!==this.mdTheme?t(this.mdTheme||n(this)):null}}};return(0,s.default)(t,e)},o=n(6),u=r(o),i=n(8),s=r(i)}),(function(e,t,n){"use strict";var r,o,u,i,s;Object.defineProperty(t,"__esModule",{value:!0}),r=n(7),o=(function(e){return e&&e.__esModule?e:{default:e}})(r),u=null,i=null,s=null,t.default=new o.default({data:function(){return{prefix:"md-theme-",theme:"default",enabled:!0,metaColors:!1}},computed:{themeTarget:function(){return!this.$isServer&&document.documentElement},fullThemeName:function(){return this.getThemeName()}},watch:{enabled:{immediate:!0,handler:function(){var e=this.fullThemeName,t=this.themeTarget,n=this.enabled;t&&(n?(t.classList.add(e),this.metaColors&&this.setHtmlMetaColors(e)):(t.classList.remove(e),this.metaColors&&this.setHtmlMetaColors()))}},theme:function(e,t){var n=this.getThemeName,r=this.themeTarget;e=n(e),r.classList.remove(n(t)),r.classList.add(e),this.metaColors&&this.setHtmlMetaColors(e)},metaColors:function(e){e?this.setHtmlMetaColors(this.fullThemeName):this.setHtmlMetaColors()}},methods:{getAncestorTheme:function(e){var t,n=this;return e?(t=e.mdTheme,(function e(r){if(r){var o=r.mdTheme,u=r.$parent;return o&&o!==t?o:e(u)}return n.theme})(e.$parent)):null},getThemeName:function(e){var t=e||this.theme;return this.prefix+t},setMicrosoftColors:function(e){u&&u.setAttribute("content",e)},setThemeColors:function(e){i&&i.setAttribute("content",e)},setMaskColors:function(e){s&&s.setAttribute("color",e)},setHtmlMetaColors:function(e){var t,n="#fff";e&&(t=window.getComputedStyle(document.documentElement),n=t.getPropertyValue("--"+e+"-primary")),n&&(this.setMicrosoftColors(n),this.setThemeColors(n),this.setMaskColors(n))}},mounted:function(){var e=this;u=document.querySelector('[name="msapplication-TileColor"]'),i=document.querySelector('[name="theme-color"]'),s=document.querySelector('[rel="mask-icon"]'),this.enabled&&this.metaColors&&window.addEventListener("load",(function(){e.setHtmlMetaColors(e.fullThemeName)}))}})}),(function(t,n){t.exports=e}),(function(e,t,n){"use strict";function r(e){return!!e&&"object"==typeof e}function o(e){var t=Object.prototype.toString.call(e);return"[object RegExp]"===t||"[object Date]"===t||u(e)}function u(e){return e.$$typeof===m}function i(e){return Array.isArray(e)?[]:{}}function s(e,t){return!1!==t.clone&&t.isMergeableObject(e)?l(i(e),e,t):e}function a(e,t,n){return e.concat(t).map((function(e){return s(e,n)}))}function c(e,t,n){var r={};return n.isMergeableObject(e)&&Object.keys(e).forEach((function(t){r[t]=s(e[t],n)})),Object.keys(t).forEach((function(o){n.isMergeableObject(t[o])&&e[o]?r[o]=l(e[o],t[o],n):r[o]=s(t[o],n)})),r}function l(e,t,n){var r,o,u;return n=n||{},n.arrayMerge=n.arrayMerge||a,n.isMergeableObject=n.isMergeableObject||f,r=Array.isArray(t),o=Array.isArray(e),u=r===o,u?r?n.arrayMerge(e,t,n):c(e,t,n):s(t,n)}var f,d,m,h;Object.defineProperty(t,"__esModule",{value:!0}),f=function(e){return r(e)&&!o(e)},d="function"==typeof Symbol&&Symbol.for,m=d?Symbol.for("react.element"):60103,l.all=function(e,t){if(!Array.isArray(e))throw Error("first argument should be an array");return e.reduce((function(e,n){return l(e,n,t)}),{})},h=l,t.default=h}),(function(e,t,n){"use strict";var r=function(){var e=this,t=e.$createElement;return(e._self._c||t)("div",[e._v("\n  icon !!\n")])},o=[],u={render:r,staticRenderFns:o};t.a=u}),,,(function(e,t,n){e.exports=n(1)})])}));