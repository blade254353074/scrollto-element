!function(e,t){"object"==typeof exports&&"object"==typeof module?module.exports=t():"function"==typeof define&&define.amd?define([],t):"object"==typeof exports?exports.scrolltoElement=t():e.scrolltoElement=t()}(this,function(){return function(e){function t(r){if(n[r])return n[r].exports;var o=n[r]={i:r,l:!1,exports:{}};return e[r].call(o.exports,o,o.exports,t),o.l=!0,o.exports}var n={};return t.m=e,t.c=n,t.i=function(e){return e},t.d=function(e,n,r){t.o(e,n)||Object.defineProperty(e,n,{configurable:!1,enumerable:!0,get:r})},t.n=function(e){var n=e&&e.__esModule?function(){return e.default}:function(){return e};return t.d(n,"a",n),n},t.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},t.p="",t(t.s=1)}([function(e,t,n){"use strict";function r(e){return e&&e.__esModule?e:{default:e}}function o(e){if(Array.isArray(e)){for(var t=0,n=Array(e.length);t<e.length;t++)n[t]=e[t];return n}return Array.from(e)}function i(){}function u(e){function t(e){null===h&&(h=e);var r=e-h,o=u(r/n)*w;l.scrollTop=p+o,r<n?(0,a.default)(t):c()}var n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:100,r=0,u=void 0,c=void 0;if((0,s.isElement)(e))u=f.default.apply(void 0,m),c=i;else{if(!(0,s.isObject)(e))throw new TypeError("The first argument must be HTMLElement or Object.");if(!(0,s.isElement)(e.element))throw new TypeError("`element` must be HTMLElement.");r=(0,s.isNumeric)(e.offset)?e.offset:0,u=(0,s.isArray)(e.bezier)&&4===e.bezier.length?f.default.apply(void 0,o(e.bezier)):f.default.apply(void 0,m),n=e.duration,c=(0,s.isFunction)(e.then)?e.then:i,e=e.element}(!(0,s.isNumeric)(n)||n<0)&&(n=100);var l=(0,d.default)(e),p=l.scrollTop,y=l.offsetTop,h=null,v=void 0;v="BODY"===l.nodeName?e.getBoundingClientRect().top+(window.scrollY||window.pageYOffset||document.body.scrollTop)-y:e.offsetTop-y;var w=v-p+r;(0,a.default)(t)}Object.defineProperty(t,"__esModule",{value:!0});var c=n(4),f=r(c),l=n(7),a=r(l),s=n(2),p=n(3),d=r(p),m=[.19,1,.22,1];t.default=u},function(e,t,n){"use strict";var r=n(0),o=function(e){return e&&e.__esModule?e:{default:e}}(r);e.exports=o.default},function(e,t,n){"use strict";function r(e){return Object.prototype.toString.call(e)}function o(e){return"[object Object]"===r(e)}function i(e){return null!=e&&"[object Array]"===r(e)}function u(e){return!isNaN(parseFloat(e))&&isFinite(e)}function c(e){return u(e)&&e>=0}function f(e){return null!=e&&"[object Function]"===r(e)}function l(e){return"object"===a(window.HTMLElement)?e instanceof window.HTMLElement:!!e&&"object"===(void 0===e?"undefined":a(e))&&null!==e&&1===e.nodeType&&"string"==typeof e.nodeName}Object.defineProperty(t,"__esModule",{value:!0});var a="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e};t.isObject=o,t.isArray=i,t.isNumeric=u,t.isPositive=c,t.isFunction=f,t.isElement=l},function(e,t,n){"use strict";function r(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:[],n=e.parentNode;return null===n||"HTML"===n.nodeName?t:r(n,t.concat(n))}function o(e,t){return window.getComputedStyle(e,null).getPropertyValue(t)}function i(e){return o(e,"overflow")+o(e,"overflow-y")}function u(e){if(1===e.nodeType)return f.test(i(e))&&e.scrollHeight>e.clientHeight}function c(e){for(var t=r(e),n=document.body,o=0,i=t.length;o<i;o++)if(u(t[o])){n=t[o];break}return n}Object.defineProperty(t,"__esModule",{value:!0});var f=/(auto|scroll)/;t.default=c},function(e,t){function n(e,t){return 1-3*t+3*e}function r(e,t){return 3*t-6*e}function o(e){return 3*e}function i(e,t,i){return((n(t,i)*e+r(t,i))*e+o(t))*e}function u(e,t,i){return 3*n(t,i)*e*e+2*r(t,i)*e+o(t)}function c(e,t,n,r,o){var u,c,f=0;do{c=t+(n-t)/2,u=i(c,r,o)-e,u>0?n=c:t=c}while(Math.abs(u)>a&&++f<s);return c}function f(e,t,n,r){for(var o=0;o<l;++o){var c=u(t,n,r);if(0===c)return t;t-=(i(t,n,r)-e)/c}return t}var l=4,a=1e-7,s=10,p=11,d=1/(p-1),m="function"==typeof Float32Array;e.exports=function(e,t,n,r){function o(t){for(var r=0,o=1,i=p-1;o!==i&&l[o]<=t;++o)r+=d;--o;var a=(t-l[o])/(l[o+1]-l[o]),s=r+a*d,m=u(s,e,n);return m>=.001?f(t,s,e,n):0===m?s:c(t,r,r+d,e,n)}if(!(0<=e&&e<=1&&0<=n&&n<=1))throw new Error("bezier x values must be in [0, 1] range");var l=m?new Float32Array(p):new Array(p);if(e!==t||n!==r)for(var a=0;a<p;++a)l[a]=i(a*d,e,n);return function(u){return e===t&&n===r?u:0===u?0:1===u?1:i(o(u),t,r)}}},function(e,t,n){(function(t){(function(){var n,r,o,i,u,c;"undefined"!=typeof performance&&null!==performance&&performance.now?e.exports=function(){return performance.now()}:void 0!==t&&null!==t&&t.hrtime?(e.exports=function(){return(n()-u)/1e6},r=t.hrtime,n=function(){var e;return e=r(),1e9*e[0]+e[1]},i=n(),c=1e9*t.uptime(),u=i-c):Date.now?(e.exports=function(){return Date.now()-o},o=Date.now()):(e.exports=function(){return(new Date).getTime()-o},o=(new Date).getTime())}).call(this)}).call(t,n(6))},function(e,t){function n(){throw new Error("setTimeout has not been defined")}function r(){throw new Error("clearTimeout has not been defined")}function o(e){if(a===setTimeout)return setTimeout(e,0);if((a===n||!a)&&setTimeout)return a=setTimeout,setTimeout(e,0);try{return a(e,0)}catch(t){try{return a.call(null,e,0)}catch(t){return a.call(this,e,0)}}}function i(e){if(s===clearTimeout)return clearTimeout(e);if((s===r||!s)&&clearTimeout)return s=clearTimeout,clearTimeout(e);try{return s(e)}catch(t){try{return s.call(null,e)}catch(t){return s.call(this,e)}}}function u(){y&&d&&(y=!1,d.length?m=d.concat(m):h=-1,m.length&&c())}function c(){if(!y){var e=o(u);y=!0;for(var t=m.length;t;){for(d=m,m=[];++h<t;)d&&d[h].run();h=-1,t=m.length}d=null,y=!1,i(e)}}function f(e,t){this.fun=e,this.array=t}function l(){}var a,s,p=e.exports={};!function(){try{a="function"==typeof setTimeout?setTimeout:n}catch(e){a=n}try{s="function"==typeof clearTimeout?clearTimeout:r}catch(e){s=r}}();var d,m=[],y=!1,h=-1;p.nextTick=function(e){var t=new Array(arguments.length-1);if(arguments.length>1)for(var n=1;n<arguments.length;n++)t[n-1]=arguments[n];m.push(new f(e,t)),1!==m.length||y||o(c)},f.prototype.run=function(){this.fun.apply(null,this.array)},p.title="browser",p.browser=!0,p.env={},p.argv=[],p.version="",p.versions={},p.on=l,p.addListener=l,p.once=l,p.off=l,p.removeListener=l,p.removeAllListeners=l,p.emit=l,p.binding=function(e){throw new Error("process.binding is not supported")},p.cwd=function(){return"/"},p.chdir=function(e){throw new Error("process.chdir is not supported")},p.umask=function(){return 0}},function(e,t,n){(function(t){for(var r=n(5),o="undefined"==typeof window?t:window,i=["moz","webkit"],u="AnimationFrame",c=o["request"+u],f=o["cancel"+u]||o["cancelRequest"+u],l=0;!c&&l<i.length;l++)c=o[i[l]+"Request"+u],f=o[i[l]+"Cancel"+u]||o[i[l]+"CancelRequest"+u];if(!c||!f){var a=0,s=0,p=[];c=function(e){if(0===p.length){var t=r(),n=Math.max(0,1e3/60-(t-a));a=n+t,setTimeout(function(){var e=p.slice(0);p.length=0;for(var t=0;t<e.length;t++)if(!e[t].cancelled)try{e[t].callback(a)}catch(e){setTimeout(function(){throw e},0)}},Math.round(n))}return p.push({handle:++s,callback:e,cancelled:!1}),s},f=function(e){for(var t=0;t<p.length;t++)p[t].handle===e&&(p[t].cancelled=!0)}}e.exports=function(e){return c.call(o,e)},e.exports.cancel=function(){f.apply(o,arguments)},e.exports.polyfill=function(){o.requestAnimationFrame=c,o.cancelAnimationFrame=f}}).call(t,n(8))},function(e,t){var n;n=function(){return this}();try{n=n||Function("return this")()||(0,eval)("this")}catch(e){"object"==typeof window&&(n=window)}e.exports=n}])});