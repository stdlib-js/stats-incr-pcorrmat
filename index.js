// Copyright (c) 2023 The Stdlib Authors. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
!function(t,e){"object"==typeof exports&&"undefined"!=typeof module?module.exports=e():"function"==typeof define&&define.amd?define(e):(t="undefined"!=typeof globalThis?globalThis:t||self).incrpcorrmat=e()}(this,(function(){"use strict";var t="function"==typeof Object.defineProperty?Object.defineProperty:null;var e,r=Object.defineProperty,n=Object.prototype,i=n.toString,o=n.__defineGetter__,a=n.__defineSetter__,u=n.__lookupGetter__,s=n.__lookupSetter__;e=function(){try{return t({},"x",{}),!0}catch(t){return!1}}()?r:function(t,e,r){var f,c,l,h;if("object"!=typeof t||null===t||"[object Array]"===i.call(t))throw new TypeError("invalid argument. First argument must be an object. Value: `"+t+"`.");if("object"!=typeof r||null===r||"[object Array]"===i.call(r))throw new TypeError("invalid argument. Property descriptor must be an object. Value: `"+r+"`.");if((c="value"in r)&&(u.call(t,e)||s.call(t,e)?(f=t.__proto__,t.__proto__=n,delete t[e],t[e]=r.value,t.__proto__=f):t[e]=r.value),l="get"in r,h="set"in r,c&&(l||h))throw new Error("invalid argument. Cannot specify one or more accessors and a value or writable attribute in the property descriptor.");return l&&o&&o.call(t,e,r.get),h&&a&&a.call(t,e,r.set),t};var f=e;function c(t,e,r){f(t,e,{configurable:!1,enumerable:!1,writable:!1,value:r})}function l(t){return"number"==typeof t}var h="function"==typeof Symbol&&"symbol"==typeof Symbol("foo");function p(){return h&&"symbol"==typeof Symbol.toStringTag}var g=Object.prototype.toString;var d=Object.prototype.hasOwnProperty;function y(t,e){return null!=t&&d.call(t,e)}var m="function"==typeof Symbol?Symbol.toStringTag:"";var b=p()?function(t){var e,r,n;if(null==t)return g.call(t);r=t[m],e=y(t,m);try{t[m]=void 0}catch(e){return g.call(t)}return n=g.call(t),e?t[m]=r:delete t[m],n}:function(t){return g.call(t)},v=Number,_=v.prototype.toString;var w=p();function E(t){return"object"==typeof t&&(t instanceof v||(w?function(t){try{return _.call(t),!0}catch(t){return!1}}(t):"[object Number]"===b(t)))}function O(t){return l(t)||E(t)}c(O,"isPrimitive",l),c(O,"isObject",E);var j=Number.POSITIVE_INFINITY,A=v.NEGATIVE_INFINITY,T=Math.floor;function x(t){return T(t)===t}function I(t){return t<j&&t>A&&x(t)}function S(t){return l(t)&&I(t)}function U(t){return E(t)&&I(t.valueOf())}function V(t){return S(t)||U(t)}function N(t){return S(t)&&t>0}function R(t){return U(t)&&t.valueOf()>0}function F(t){return N(t)||R(t)}function L(t){return"boolean"==typeof t}c(V,"isPrimitive",S),c(V,"isObject",U),c(F,"isPrimitive",N),c(F,"isObject",R);var B=Boolean.prototype.toString;var C=p();function P(t){return"object"==typeof t&&(t instanceof Boolean||(C?function(t){try{return B.call(t),!0}catch(t){return!1}}(t):"[object Boolean]"===b(t)))}function k(t){return L(t)||P(t)}function M(){return new Function("return this;")()}c(k,"isPrimitive",L),c(k,"isObject",P);var D="object"==typeof self?self:null,Y="object"==typeof window?window:null,G="object"==typeof global?global:null;function $(t){if(arguments.length){if(!L(t))throw new TypeError("invalid argument. Must provide a boolean primitive. Value: `"+t+"`.");if(t)return M()}if(D)return D;if(Y)return Y;if(G)return G;throw new Error("unexpected error. Unable to resolve global object.")}var J=$();function W(t,e,r){f(t,e,{configurable:!1,enumerable:!1,get:r})}var z={binary:1,bool:1,complex64:8,complex128:16,float16:2,bfloat16:2,float32:4,float64:8,float128:16,generic:null,int8:1,int16:2,int32:4,int64:8,int128:16,int256:32,uint8:1,uint8c:1,uint16:2,uint32:4,uint64:8,uint128:16,uint256:32};function X(t){return Math.abs(t)}function Z(t,e){return e&&(2===t||3===t)}function q(t,e){return e&&(1===t||3===t)}function H(t,e,r){var n,i,o,a,u;for(n=t.length,i=r,o=r,u=0;u<n;u++){if(0===t[u])return[r,r];(a=e[u])>0?o+=a*(t[u]-1):a<0&&(i+=a*(t[u]-1))}return[i,o]}function K(t){return t.re}function Q(t){return t.im}function tt(t){return"string"==typeof t}c(H,"assign",(function(t,e,r,n){var i,o,a,u,s;for(i=t.length,o=r,a=r,s=0;s<i;s++){if(0===t[s])return n[0]=r,n[1]=r,n;(u=e[s])>0?a+=u*(t[s]-1):u<0&&(o+=u*(t[s]-1))}return n[0]=o,n[1]=a,n}));var et=String.prototype.valueOf;var rt=p();function nt(t){return"object"==typeof t&&(t instanceof String||(rt?function(t){try{return et.call(t),!0}catch(t){return!1}}(t):"[object String]"===b(t)))}function it(t){return tt(t)||nt(t)}function ot(t){return"number"==typeof t}function at(t){var e,r="";for(e=0;e<t;e++)r+="0";return r}function ut(t,e,r){var n=!1,i=e-t.length;return i<0||(function(t){return"-"===t[0]}(t)&&(n=!0,t=t.substr(1)),t=r?t+at(i):at(i)+t,n&&(t="-"+t)),t}c(it,"isPrimitive",tt),c(it,"isObject",nt);var st=String.prototype.toLowerCase,ft=String.prototype.toUpperCase;function ct(t){var e,r,n;switch(t.specifier){case"b":e=2;break;case"o":e=8;break;case"x":case"X":e=16;break;default:e=10}if(r=t.arg,n=parseInt(r,10),!isFinite(n)){if(!ot(r))throw new Error("invalid integer. Value: "+r);n=0}return n<0&&("u"===t.specifier||10!==e)&&(n=4294967295+n+1),n<0?(r=(-n).toString(e),t.precision&&(r=ut(r,t.precision,t.padRight)),r="-"+r):(r=n.toString(e),n||t.precision?t.precision&&(r=ut(r,t.precision,t.padRight)):r="",t.sign&&(r=t.sign+r)),16===e&&(t.alternate&&(r="0x"+r),r=t.specifier===ft.call(t.specifier)?ft.call(r):st.call(r)),8===e&&t.alternate&&"0"!==r.charAt(0)&&(r="0"+r),r}function lt(t){return"string"==typeof t}var ht=Math.abs,pt=String.prototype.toLowerCase,gt=String.prototype.toUpperCase,dt=String.prototype.replace,yt=/e\+(\d)$/,mt=/e-(\d)$/,bt=/^(\d+)$/,vt=/^(\d+)e/,_t=/\.0$/,wt=/\.0*e/,Et=/(\..*[^0])0*e/;function Ot(t){var e,r,n=parseFloat(t.arg);if(!isFinite(n)){if(!ot(t.arg))throw new Error("invalid floating-point number. Value: "+r);n=t.arg}switch(t.specifier){case"e":case"E":r=n.toExponential(t.precision);break;case"f":case"F":r=n.toFixed(t.precision);break;case"g":case"G":ht(n)<1e-4?((e=t.precision)>0&&(e-=1),r=n.toExponential(e)):r=n.toPrecision(t.precision),t.alternate||(r=dt.call(r,Et,"$1e"),r=dt.call(r,wt,"e"),r=dt.call(r,_t,""));break;default:throw new Error("invalid double notation. Value: "+t.specifier)}return r=dt.call(r,yt,"e+0$1"),r=dt.call(r,mt,"e-0$1"),t.alternate&&(r=dt.call(r,bt,"$1."),r=dt.call(r,vt,"$1.e")),n>=0&&t.sign&&(r=t.sign+r),r=t.specifier===gt.call(t.specifier)?gt.call(r):pt.call(r)}function jt(t){var e,r="";for(e=0;e<t;e++)r+=" ";return r}function At(t,e,r){var n=e-t.length;return n<0?t:t=r?t+jt(n):jt(n)+t}var Tt=String.fromCharCode,xt=isNaN,It=Array.isArray;function St(t){var e={};return e.specifier=t.specifier,e.precision=void 0===t.precision?1:t.precision,e.width=t.width,e.flags=t.flags||"",e.mapping=t.mapping,e}function Ut(t){var e,r,n,i,o,a,u,s,f;if(!It(t))throw new TypeError("invalid argument. First argument must be an array. Value: `"+t+"`.");for(a="",u=1,s=0;s<t.length;s++)if(lt(n=t[s]))a+=n;else{if(e=void 0!==n.precision,!(n=St(n)).specifier)throw new TypeError("invalid argument. Token is missing `specifier` property. Index: `"+s+"`. Value: `"+n+"`.");for(n.mapping&&(u=n.mapping),r=n.flags,f=0;f<r.length;f++)switch(i=r.charAt(f)){case" ":n.sign=" ";break;case"+":n.sign="+";break;case"-":n.padRight=!0,n.padZeros=!1;break;case"0":n.padZeros=r.indexOf("-")<0;break;case"#":n.alternate=!0;break;default:throw new Error("invalid flag: "+i)}if("*"===n.width){if(n.width=parseInt(arguments[u],10),u+=1,xt(n.width))throw new TypeError("the argument for * width at position "+u+" is not a number. Value: `"+n.width+"`.");n.width<0&&(n.padRight=!0,n.width=-n.width)}if(e&&"*"===n.precision){if(n.precision=parseInt(arguments[u],10),u+=1,xt(n.precision))throw new TypeError("the argument for * precision at position "+u+" is not a number. Value: `"+n.precision+"`.");n.precision<0&&(n.precision=1,e=!1)}switch(n.arg=arguments[u],n.specifier){case"b":case"o":case"x":case"X":case"d":case"i":case"u":e&&(n.padZeros=!1),n.arg=ct(n);break;case"s":n.maxWidth=e?n.precision:-1;break;case"c":if(!xt(n.arg)){if((o=parseInt(n.arg,10))<0||o>127)throw new Error("invalid character code. Value: "+n.arg);n.arg=xt(o)?String(n.arg):Tt(o)}break;case"e":case"E":case"f":case"F":case"g":case"G":e||(n.precision=6),n.arg=Ot(n);break;default:throw new Error("invalid specifier: "+n.specifier)}n.maxWidth>=0&&n.arg.length>n.maxWidth&&(n.arg=n.arg.substring(0,n.maxWidth)),n.padZeros?n.arg=ut(n.arg,n.width||n.precision,n.padRight):n.width&&(n.arg=At(n.arg,n.width,n.padRight)),a+=n.arg||"",u+=1}return a}var Vt=/%(?:([1-9]\d*)\$)?([0 +\-#]*)(\*|\d+)?(?:(\.)(\*|\d+)?)?[hlL]?([%A-Za-z])/g;function Nt(t){var e={mapping:t[1]?parseInt(t[1],10):void 0,flags:t[2],width:t[3],precision:t[5],specifier:t[6]};return"."===t[4]&&void 0===t[5]&&(e.precision="1"),e}function Rt(t){var e,r,n,i;for(r=[],i=0,n=Vt.exec(t);n;)(e=t.slice(i,Vt.lastIndex-n[0].length)).length&&r.push(e),r.push(Nt(n)),i=Vt.lastIndex,n=Vt.exec(t);return(e=t.slice(i)).length&&r.push(e),r}function Ft(t){return"string"==typeof t}function Lt(t){var e,r,n;if(!Ft(t))throw new TypeError(Lt("invalid argument. First argument must be a string. Value: `%s`.",t));for(e=Rt(t),(r=new Array(arguments.length))[0]=e,n=1;n<r.length;n++)r[n]=arguments[n];return Ut.apply(null,r)}var Bt=/[-\/\\^$*+?.()|[\]{}]/g;var Ct=/./,Pt=$(),kt=Pt.document&&Pt.document.childNodes,Mt=Int8Array;function Dt(){return/^\s*function\s*([^(]*)/i}var Yt=/^\s*function\s*([^(]*)/i;c(Dt,"REGEXP",Yt);var Gt=Array.isArray?Array.isArray:function(t){return"[object Array]"===b(t)};function $t(t){return null!==t&&"object"==typeof t}var Jt=function(t){if("function"!=typeof t)throw new TypeError("invalid argument. Must provide a function. Value: `"+t+"`.");return function(e){var r,n;if(!Gt(e))return!1;if(0===(r=e.length))return!1;for(n=0;n<r;n++)if(!1===t(e[n]))return!1;return!0}}($t);function Wt(t){var e,r,n,i;if(("Object"===(r=b(t).slice(8,-1))||"Error"===r)&&t.constructor){if("string"==typeof(n=t.constructor).name)return n.name;if(e=Yt.exec(n.toString()))return e[1]}return $t(i=t)&&(i._isBuffer||i.constructor&&"function"==typeof i.constructor.isBuffer&&i.constructor.isBuffer(i))?"Buffer":r}c($t,"isObjectLikeArray",Jt);var zt="function"==typeof Ct||"object"==typeof Mt||"function"==typeof kt?function(t){return Wt(t).toLowerCase()}:function(t){var e;return null===t?"null":"object"===(e=typeof t)?Wt(t).toLowerCase():e};function Xt(t){return"function"===zt(t)}var Zt=RegExp.prototype.exec;var qt=p();function Ht(t){return"object"==typeof t&&(t instanceof RegExp||(qt?function(t){try{return Zt.call(t),!0}catch(t){return!1}}(t):"[object RegExp]"===b(t)))}function Kt(t,e,r){if(!tt(t))throw new TypeError(Lt("invalid argument. First argument must be a string. Value: `%s`.",t));if(tt(e))e=function(t){var e,r;if(!tt(t))throw new TypeError(Lt("invalid argument. Must provide a regular expression string. Value: `%s`.",t));if("/"===t[0])for(r=t.length-1;r>=0&&"/"!==t[r];r--);return void 0===r||r<=0?t.replace(Bt,"\\$&"):(e=(e=t.substring(1,r)).replace(Bt,"\\$&"),t=t[0]+e+t.substring(r))}(e),e=new RegExp(e,"g");else if(!Ht(e))throw new TypeError(Lt("invalid argument. Second argument must be a string or regular expression. Value: `%s`.",e));if(!tt(r)&&!Xt(r))throw new TypeError(Lt("invalid argument. Third argument must be a string or replacement function. Value: `%s`.",r));return t.replace(e,r)}var Qt={int8:"new Int8Array( [ {{data}} ] )",uint8:"new Uint8Array( [ {{data}} ] )",uint8c:"new Uint8ClampedArray( [ {{data}} ] )",int16:"new Int16Array( [ {{data}} ] )",uint16:"new Uint16Array( [ {{data}} ] )",int32:"new Int32Array( [ {{data}} ] )",uint32:"new Uint32Array( [ {{data}} ] )",float32:"new Float32Array( [ {{data}} ] )",float64:"new Float64Array( [ {{data}} ] )",generic:"[ {{data}} ]",binary:"new Buffer( [ {{data}} ] )",complex64:"new Complex64Array( [ {{data}} ] )",complex128:"new Complex128Array( [ {{data}} ] )"};var te="function"==typeof Uint8Array;var ee="function"==typeof Uint8Array?Uint8Array:null;var re,ne="function"==typeof Uint8Array?Uint8Array:void 0;re=function(){var t,e,r;if("function"!=typeof ee)return!1;try{e=new ee(e=[1,3.14,-3.14,256,257]),r=e,t=(te&&r instanceof Uint8Array||"[object Uint8Array]"===b(r))&&1===e[0]&&3===e[1]&&253===e[2]&&0===e[3]&&1===e[4]}catch(e){t=!1}return t}()?ne:function(){throw new Error("not implemented")};var ie=re,oe="function"==typeof Uint16Array;var ae="function"==typeof Uint16Array?Uint16Array:null;var ue,se="function"==typeof Uint16Array?Uint16Array:void 0;ue=function(){var t,e,r;if("function"!=typeof ae)return!1;try{e=new ae(e=[1,3.14,-3.14,65536,65537]),r=e,t=(oe&&r instanceof Uint16Array||"[object Uint16Array]"===b(r))&&1===e[0]&&3===e[1]&&65533===e[2]&&0===e[3]&&1===e[4]}catch(e){t=!1}return t}()?se:function(){throw new Error("not implemented")};var fe,ce={uint16:ue,uint8:ie};(fe=new ce.uint16(1))[0]=4660;var le=52===new ce.uint8(fe.buffer)[0],he="function"==typeof ArrayBuffer;var pe="function"==typeof Float64Array;var ge="function"==typeof Float64Array?Float64Array:null;var de,ye="function"==typeof Float64Array?Float64Array:void 0;de=function(){var t,e,r;if("function"!=typeof ge)return!1;try{e=new ge([1,3.14,-3.14,NaN]),r=e,t=(pe&&r instanceof Float64Array||"[object Float64Array]"===b(r))&&1===e[0]&&3.14===e[1]&&-3.14===e[2]&&e[3]!=e[3]}catch(e){t=!1}return t}()?ye:function(){throw new Error("not implemented")};var me=de,be="function"==typeof ArrayBuffer?ArrayBuffer:null;var ve,_e="function"==typeof ArrayBuffer?ArrayBuffer:void 0;ve=function(){var t,e,r,n;if("function"!=typeof be)return!1;try{r=new be(16),n=r,(t=(he&&n instanceof ArrayBuffer||"[object ArrayBuffer]"===b(n))&&"function"==typeof be.isView)&&((e=new me(r))[0]=-3.14,e[1]=NaN,t=t&&be.isView(e)&&16===r.byteLength&&-3.14===e[0]&&e[1]!=e[1])}catch(e){t=!1}return t}()?_e:function(){throw new Error("not implemented")};var we=ve,Ee="function"==typeof DataView;var Oe="function"==typeof DataView?DataView:null;var je,Ae="function"==typeof DataView?DataView:void 0;je=function(){var t,e,r,n;if("function"!=typeof Oe)return!1;try{r=new we(24),e=new Oe(r,8),n=e,(t=(Ee&&n instanceof DataView||"[object DataView]"===b(n))&&"function"==typeof e.getFloat64&&"function"==typeof e.setFloat64)&&(e.setFloat64(0,-3.14),e.setFloat64(8,NaN),t=t&&e.buffer===r&&16===e.byteLength&&8===e.byteOffset&&-3.14===e.getFloat64(0)&&e.getFloat64(8)!=e.getFloat64(8))}catch(e){t=!1}return t}()?Ae:function(){throw new Error("not implemented")};var Te=je,xe="function"==typeof BigInt?BigInt:void 0,Ie=["binary","complex64","complex128","float32","float64","generic","int16","int32","int8","uint16","uint32","uint8","uint8c"];function Se(){return Ie.slice()}function Ue(){return{bool:0,int8:1,uint8:2,uint8c:3,int16:4,uint16:5,int32:6,uint32:7,int64:8,uint64:9,float32:10,float64:11,complex64:12,complex128:13,binary:14,generic:15,notype:17,userdefined_type:256}}function Ve(t,e,r){f(t,e,{configurable:!1,enumerable:!0,writable:!1,value:r})}function Ne(t){return Object.keys(Object(t))}var Re,Fe=void 0!==Object.keys;function Le(t){return"[object Arguments]"===b(t)}Re=function(){return Le(arguments)}();var Be=Re;function Ce(t){return t!=t}function Pe(t){return l(t)&&Ce(t)}function ke(t){return E(t)&&Ce(t.valueOf())}function Me(t){return Pe(t)||ke(t)}c(Me,"isPrimitive",Pe),c(Me,"isObject",ke);var De=Object.prototype.propertyIsEnumerable;var Ye=!De.call("beep","0");function Ge(t,e){var r;return null!=t&&(!(r=De.call(t,e))&&Ye&&it(t)?!Pe(e=+e)&&S(e)&&e>=0&&e<t.length:r)}var $e=Be?Le:function(t){return null!==t&&"object"==typeof t&&!Gt(t)&&"number"==typeof t.length&&x(t.length)&&t.length>=0&&t.length<=4294967295&&y(t,"callee")&&!Ge(t,"callee")},Je=Array.prototype.slice;var We=Ge((function(){}),"prototype"),ze=!Ge({toString:null},"toString");function Xe(t){return"object"==typeof t&&null!==t&&"number"==typeof t.length&&x(t.length)&&t.length>=0&&t.length<=9007199254740991}function Ze(t,e,r){var n,i;if(!Xe(t)&&!tt(t))throw new TypeError("invalid argument. First argument must be an array-like object. Value: `"+t+"`.");if(0===(n=t.length))return-1;if(3===arguments.length){if(!S(r))throw new TypeError("invalid argument. `fromIndex` must be an integer. Value: `"+r+"`.");if(r>=0){if(r>=n)return-1;i=r}else(i=n+r)<0&&(i=0)}else i=0;if(Me(e)){for(;i<n;i++)if(Me(t[i]))return i}else for(;i<n;i++)if(t[i]===e)return i;return-1}function qe(t){return t.constructor&&t.constructor.prototype===t}var He=["console","external","frame","frameElement","frames","innerHeight","innerWidth","outerHeight","outerWidth","pageXOffset","pageYOffset","parent","scrollLeft","scrollTop","scrollX","scrollY","self","webkitIndexedDB","webkitStorageInfo","window"],Ke="undefined"==typeof window?void 0:window;var Qe=function(){var t;if("undefined"===zt(Ke))return!1;for(t in Ke)try{-1===Ze(He,t)&&y(Ke,t)&&null!==Ke[t]&&"object"===zt(Ke[t])&&qe(Ke[t])}catch(t){return!0}return!1}(),tr="undefined"!=typeof window;var er,rr=["toString","toLocaleString","valueOf","hasOwnProperty","isPrototypeOf","propertyIsEnumerable","constructor"];er=Fe?function(){return 2!==(Ne(arguments)||"").length}(1,2)?function(t){return $e(t)?Ne(Je.call(t)):Ne(t)}:Ne:function(t){var e,r,n,i,o,a,u;if(i=[],$e(t)){for(u=0;u<t.length;u++)i.push(u.toString());return i}if("string"==typeof t){if(t.length>0&&!y(t,"0"))for(u=0;u<t.length;u++)i.push(u.toString())}else{if(!1==(n="function"==typeof t)&&!$t(t))return i;r=We&&n}for(o in t)r&&"prototype"===o||!y(t,o)||i.push(String(o));if(ze)for(e=function(t){if(!1===tr&&!Qe)return qe(t);try{return qe(t)}catch(t){return!1}}(t),u=0;u<rr.length;u++)a=rr[u],e&&"constructor"===a||!y(t,a)||i.push(String(a));return i};var nr=er;c(Se,"enum",Ue),function(t,e){var r,n,i;for(r=nr(e),i=0;i<r.length;i++)Ve(t,n=r[i],e[n])}(Se,{bool:0,int8:1,uint8:2,uint8c:3,int16:4,uint16:5,int32:6,uint32:7,int64:8,uint64:9,float32:10,float64:11,complex64:12,complex128:13,binary:14,generic:15,notype:17,userdefined_type:256});var ir=["row-major","column-major"];function or(){return ir.slice()}function ar(){return{"row-major":1,"column-major":2}}c(or,"enum",ar);var ur=["throw","clamp","wrap"];function sr(){return ur.slice()}function fr(){return{throw:1,clamp:2,wrap:3}}c(sr,"enum",fr);var cr={bool:0,int8:1,uint8:2,uint8c:3,int16:4,uint16:5,int32:6,uint32:7,int64:8,uint64:9,float32:10,float64:11,complex64:12,complex128:13,binary:14,generic:15,notype:17,userdefined_type:256},lr={"row-major":1,"column-major":2},hr={throw:1,clamp:2,wrap:3};var pr=new ie(8),gr=new Te(pr.buffer);function dr(t,e,r,n){var i,o,a;if(0===t){for(a=0;a<pr.length;a++)e[n]=0,n+=r;return e}for(o=(4294967295&t)>>>0,i=T(t/4294967296),le?(gr.setUint32(0,o,le),gr.setUint32(4,i,le)):(gr.setUint32(0,i,le),gr.setUint32(4,o,le)),a=0;a<pr.length;a++)e[n]=pr[a],n+=r;return e}c((function(t){var e,r,n,i;return e=new ie(8),0===t||(i=(4294967295&t)>>>0,n=T(t/4294967296),r=new Te(e.buffer),le?(r.setUint32(0,i,le),r.setUint32(4,n,le)):(r.setUint32(0,n,le),r.setUint32(4,i,le))),e}),"assign",dr);var yr={bool:0,int8:1,uint8:2,uint8c:3,int16:4,uint16:5,int32:6,uint32:7,int64:8,uint64:9,float32:10,float64:11,complex64:12,complex128:13,binary:14,generic:15,notype:17,userdefined_type:256},mr={"row-major":1,"column-major":2},br={throw:1,clamp:2,wrap:3};function vr(t,e,r,n,i,o){var a,u,s,f,c;if(!(this instanceof vr))return new vr(t,e,r,n,i,o);for(f=1,c=0;c<r.length;c++)f*=r[c];return u=e.BYTES_PER_ELEMENT?e.BYTES_PER_ELEMENT*f:null,this._byteLength=u,this._bytesPerElement=function(t){return z[t]||null}(t),this._buffer=e,this._dtype=t,this._length=f,this._ndims=r.length,this._offset=i,this._order=o,this._shape=r,this._strides=n,this._accessors=Boolean(e.get&&e.set),this._iterationOrder=function(t){var e,r;for(e=0,r=0;r<t.length;r++)t[r]<0&&(e+=1);return 0===e?1:e===t.length?-1:0}(n),a=function(t,e,r,n,i){var o;return 0!==t&&0!==i&&t===(o=H(e,r,n))[1]-o[0]+1}(f,r,n,i,this._iterationOrder),s=function(t){var e,r,n,i,o,a;if(0===(r=t.length))return 0;for(e=!0,n=!0,i=X(t[0]),a=1;a<r;a++){if(o=X(t[a]),e&&o<i?e=!1:n&&o>i&&(n=!1),!n&&!e)return 0;i=o}return n&&e?3:n?1:2}(n),this._flags={ROW_MAJOR_CONTIGUOUS:q(s,a),COLUMN_MAJOR_CONTIGUOUS:Z(s,a),READONLY:!1},this.__meta_dataview__=null,this}function _r(t){return t instanceof vr||null!==t&&"object"==typeof t&&"object"==typeof t.data&&"object"==typeof t.shape&&"object"==typeof t.strides&&"number"==typeof t.offset&&"string"==typeof t.order&&"number"==typeof t.ndims&&"string"==typeof t.dtype&&"number"==typeof t.length&&"object"==typeof t.flags&&"function"==typeof t.get&&"function"==typeof t.set}function wr(t){return function(t){return _r(t)&&2===t.ndims&&2===t.shape.length&&2===t.strides.length}(t)&&t.shape[0]===t.shape[1]}function Er(t){return _r(t)&&1===t.ndims&&1===t.shape.length&&1===t.strides.length}function Or(){var t,e=arguments,r=e[0],n="https://stdlib.io/e/"+r+"?";for(t=1;t<e.length;t++)n+="&arg[]="+encodeURIComponent(e[t]);return n}c(vr,"name","ndarray"),W(vr.prototype,"byteLength",(function(){return this._byteLength})),W(vr.prototype,"BYTES_PER_ELEMENT",(function(){return this._bytesPerElement})),W(vr.prototype,"data",(function(){return this._buffer})),W(vr.prototype,"dtype",(function(){return this._dtype})),W(vr.prototype,"flags",(function(){return{ROW_MAJOR_CONTIGUOUS:(t=this._flags).ROW_MAJOR_CONTIGUOUS,COLUMN_MAJOR_CONTIGUOUS:t.COLUMN_MAJOR_CONTIGUOUS,READONLY:t.READONLY};var t})),W(vr.prototype,"length",(function(){return this._length})),W(vr.prototype,"ndims",(function(){return this._ndims})),W(vr.prototype,"offset",(function(){return this._offset})),W(vr.prototype,"order",(function(){return this._order})),W(vr.prototype,"shape",(function(){return this._shape.slice()})),W(vr.prototype,"strides",(function(){return this._strides.slice()})),c(vr.prototype,"get",(function(){var t,e;for(t=this._offset,e=0;e<arguments.length;e++)t+=this._strides[e]*arguments[e];return this._accessors?this._buffer.get(t):this._buffer[t]})),c(vr.prototype,"iget",(function(t){var e,r,n,i,o,a;if(0===(n=this._ndims))return this._accessors?this._buffer.get(this._offset):this._buffer[this._offset];if(this._flags.ROW_MAJOR_CONTIGUOUS||this._flags.COLUMN_MAJOR_CONTIGUOUS){if(1===this._iterationOrder)return this._accessors?this._buffer.get(this._offset+t):this._buffer[this._offset+t];if(-1===this._iterationOrder)return this._accessors?this._buffer.get(this.offset-t):this._buffer[this._offset-t]}if(r=this._shape,e=this._strides,i=this._offset,"column-major"===this._order){for(a=0;a<n;a++)t-=o=t%r[a],t/=r[a],i+=o*e[a];return this._accessors?this._buffer.get(i):this._buffer[i]}for(a=n-1;a>=0;a--)t-=o=t%r[a],t/=r[a],i+=o*e[a];return this._accessors?this._buffer.get(i):this._buffer[i]})),c(vr.prototype,"set",(function(){var t,e;for(t=this._offset,e=0;e<arguments.length-1;e++)t+=this._strides[e]*arguments[e];return this._accessors?this._buffer.set(arguments[e],t):this._buffer[t]=arguments[e],this})),c(vr.prototype,"iset",(function(t,e){var r,n,i,o,a,u;if(0===(i=this._ndims))return this._accessors?this._buffer.set(t,this._offset):this._buffer[this._offset]=t,this;if(this._flags.ROW_MAJOR_CONTIGUOUS||this._flags.COLUMN_MAJOR_CONTIGUOUS){if(1===this._iterationOrder)return this._accessors?this._buffer.set(e,this._offset+t):this._buffer[this._offset+t]=e,this;if(-1===this._iterationOrder)return this._accessors?this._buffer.set(e,this._offset-t):this._buffer[this._offset-t]=e,this}if(n=this._shape,r=this._strides,o=this._offset,"column-major"===this._order){for(u=0;u<i;u++)t-=a=t%n[u],t/=n[u],o+=a*r[u];return this._accessors?this._buffer.set(e,o):this._buffer[o]=e,this}for(u=i-1;u>=0;u--)t-=a=t%n[u],t/=n[u],o+=a*r[u];return this._accessors?this._buffer.set(e,o):this._buffer[o]=e,this})),c(vr.prototype,"toString",(function(){var t,e,r,n,i,o;if(e=this._shape.length,r="ndarray( '"+(n=this._dtype)+"', ",t="",this._length<=100)if("complex64"===n||"complex128"===n)for(o=0;o<this._length;o++)t+=K(i=this.iget(o))+", "+Q(i),o<this._length-1&&(t+=", ");else for(o=0;o<this._length;o++)t+=this.iget(o),o<this._length-1&&(t+=", ");else{if("complex64"===n||"complex128"===n)for(o=0;o<3;o++)t+=K(i=this.iget(o))+", "+Q(i),o<2&&(t+=", ");else for(o=0;o<3;o++)t+=this.iget(o),o<2&&(t+=", ");if(t+=", ..., ","complex64"===n||"complex128"===n)for(o=2;o>=0;o--)t+=K(i=this.iget(this._length-1-o))+", "+Q(i),o>0&&(t+=", ");else for(o=2;o>=0;o--)t+=this.iget(this._length-1-o),o>0&&(t+=", ")}if(r+=Kt(Qt[this.dtype],"{{data}}",t),r+=", ",r+=0===e?"[]":"[ "+this._shape.join(", ")+" ]",r+=", ",r+="[ ",0===e)r+="0";else for(o=0;o<e;o++)this._strides[o]<0?r+=-this._strides[o]:r+=this._strides[o],o<e-1&&(r+=", ");return r+=" ]",r+=", ",r+="0",r+=", ",r+="'"+this._order+"'",r+=" )"})),c(vr.prototype,"toJSON",(function(){var t,e,r,n;for(e=this._length,(t={}).type="ndarray",t.dtype=this.dtype,t.flags={READONLY:this._flags.READONLY},t.order=this._order,t.shape=this._shape.slice(),t.strides=this._strides.slice(),n=0;n<e;n++)t.strides[n]<0&&(t.strides[n]*=-1);if(t.data=[],"complex64"===t.dtype||"complex128"===t.dtype)for(n=0;n<e;n++)r=this.iget(n),t.data.push(K(r),Q(r));else for(n=0;n<e;n++)t.data.push(this.iget(n));return t})),c(vr.prototype,"__array_meta_dataview__","function"==typeof J.BigInt&&"function"==typeof BigInt&&"bigint"==typeof J.BigInt("1")&&"bigint"==typeof BigInt("1")?function(){var t,e,r,n,i,o,a,u,s,f,c,l,h,p;if(s=this._mode||"throw",a=this._submode||[s],r=33+16*(l=this._ndims)+(h=a.length),(u=this.__meta_dataview__)&&u.byteLength===r)return u;for(u=new Te(new we(r)),i=this._shape,o=this._strides,n=this._dtype,t=this._bytesPerElement,f=0,u.setInt8(f,le?1:0),f+=1,u.setInt16(f,cr[n],le),f+=2,u.setBigInt64(f,xe(l),le),c=8*l,f+=8,p=0;p<l;p++)u.setBigInt64(f,xe(i[p]),le),u.setBigInt64(f+c,xe(o[p]*t),le),f+=8;for(f+=c,u.setBigInt64(f,xe(this._offset*t),le),f+=8,u.setInt8(f,lr[this._order]),f+=1,u.setInt8(f,hr[s]),f+=1,u.setBigInt64(f,xe(h),le),f+=8,p=0;p<h;p++)u.setInt8(f,hr[a[p]]),f+=1;return e=0,e|=this._flags.READONLY?4:0,u.setInt32(f,e,le),this.__meta_dataview__=u,u}:function(){var t,e,r,n,i,o,a,u,s,f,c,l,h,p,g;if(f=this._mode||"throw",u=this._submode||[f],n=33+16*(h=this._ndims)+(p=u.length),(s=this.__meta_dataview__)&&s.byteLength===n)return s;for(s=new Te(new we(n)),e=new ie(s.buffer),o=this._shape,a=this._strides,i=this._dtype,t=this._bytesPerElement,c=0,s.setInt8(c,le?1:0),c+=1,s.setInt16(c,yr[i],le),dr(h,e,1,c+=2),l=8*h,c+=8,g=0;g<h;g++)dr(o[g],e,1,c),dr(a[g]*t,e,1,c+l),c+=8;for(c+=l,dr(this._offset*t,e,1,c),c+=8,s.setInt8(c,mr[this._order]),c+=1,s.setInt8(c,br[f]),dr(p,e,1,c+=1),c+=8,g=0;g<p;g++)s.setInt8(c,br[u[g]]),c+=1;return r=0,r|=this._flags.READONLY?4:0,s.setInt32(c,r,le),this.__meta_dataview__=s,s});var jr=Math.sqrt;function Ar(t){return S(t)&&t>=0}function Tr(t){return U(t)&&t.valueOf()>=0}function xr(t){return Ar(t)||Tr(t)}c(xr,"isPrimitive",Ar),c(xr,"isObject",Tr);function Ir(t){if("function"!=typeof t)throw new TypeError("invalid argument. Must provide a function. Value: `"+t+"`.");return function(e){var r,n;if(!function(t){return null!=t&&"function"!=typeof t&&"number"==typeof t.length&&x(t.length)&&t.length>=0&&t.length<=4294967295}(e))return!1;if(0===(r=e.length))return!1;for(n=0;n<r;n++)if(!1===t(e[n]))return!1;return!0}}var Sr=Ir(xr.isPrimitive),Ur=Ir(xr.isObject),Vr=Ir(xr);c(Vr,"primitives",Sr),c(Vr,"objects",Ur);var Nr=Ir(V.isPrimitive),Rr=Ir(V.isObject),Fr=Ir(V);c(Fr,"primitives",Nr),c(Fr,"objects",Rr);var Lr=or(),Br=Lr.length;function Cr(t){var e;for(e=0;e<Br;e++)if(t===Lr[e])return!0;return!1}var Pr=Se(),kr=Pr.length;function Mr(t){var e;for(e=0;e<kr;e++)if(t===Pr[e])return!0;return!1}function Dr(t,e,r,n){var i=H(e,r,n);return i[0]>=0&&i[1]<t}function Yr(t){var e,r,n;if(0===(e=t.length))return 0;for(r=1,n=0;n<e;n++)r*=t[n];return r}function Gr(t){var e=typeof t;return null===t||"object"!==e&&"function"!==e?new TypeError("invalid argument. A provided constructor must be either an object (except null) or a function. Value: `"+t+"`."):null}var $r=Object.create;function Jr(){}var Wr="function"==typeof $r?$r:function(t){return Jr.prototype=t,new Jr};var zr="throw",Xr=!1;function Zr(t,e,r){if("clamp"===r)return function(t,e){return t<0?0:t>e?e:t}(t,e);if("wrap"===r)return function(t,e){var r=e+1;return t<0?((t+=r)<0&&0!=(t%=r)&&(t+=r),t):t>e?((t-=r)>e&&(t%=r),t):t}(t,e);if(t<0||t>e)throw new RangeError("invalid argument. Index must be on the interval: [0,"+e+"]. Value: `"+t+"`.");return t}var qr=vr.prototype.iget;var Hr=vr.prototype.iset;function Kr(t,e){var r,n;for(r=[],n=0;n<e;n++)r.push(t[n]);return r}var Qr,tn=Object.getPrototypeOf;Qr=Xt(Object.getPrototypeOf)?tn:function(t){var e=function(t){return t.__proto__}(t);return e||null===e?e:"[object Function]"===b(t.constructor)?t.constructor.prototype:t instanceof Object?Object.prototype:null};var en=Qr;var rn=Object.prototype;function nn(t){var e;return!!function(t){return"object"==typeof t&&null!==t&&!Gt(t)}(t)&&(e=function(t){return null==t?null:(t=Object(t),en(t))}(t),!e||!y(t,"constructor")&&y(e,"constructor")&&Xt(e.constructor)&&"[object Function]"===b(e.constructor)&&y(e,"isPrototypeOf")&&Xt(e.isPrototypeOf)&&(e===rn||function(t){var e;for(e in t)if(!y(t,e))return!1;return!0}(t)))}var on=sr(),an=on.length;function un(t){var e;for(e=0;e<an;e++)if(t===on[e])return!0;return!1}function sn(t,e){var r;if(!nn(e))return new TypeError("invalid argument. Options must be an object. Value: `"+e+"`.");if(y(e,"mode")&&(t.mode=e.mode,!un(t.mode)))return new TypeError("invalid option. `mode` option must be a recognized mode. Option: `"+t.mode+"`.");if(y(e,"submode")){if(t.submode=e.submode,!Gt(t.submode))return new TypeError("invalid option. `submode` option must be an array containing recognized modes. Option: `"+t.submode+"`.");if(0===t.submode.length)return new TypeError("invalid option. `submode` option must be an array containing recognized modes. Option: `"+t.submode.join(",")+"`.");for(r=0;r<t.submode.length;r++)if(!un(t.submode[r]))return new TypeError("invalid option. Each `submode` must be a recognized modes. Option: `"+t.submode[r]+"`.");t.submode=t.submode.slice()}return y(e,"readonly")&&(t.readonly=e.readonly,!L(t.readonly))?new TypeError("invalid option. `readonly` option must be a boolean. Option: `"+t.readonly+"`."):null}var fn=32767;function cn(t,e,r,n,i,o,a){var u,s,f,c,l;if(!(this instanceof cn))return arguments.length<7?new cn(t,e,r,n,i,o):new cn(t,e,r,n,i,o,a);if(!Mr(t))throw new TypeError("invalid argument. `dtype` argument must be a supported ndarray data type. Value: `"+t+"`.");if(!Xe(e))throw new TypeError("invalid argument. `buffer` argument must be an array-like object, typed-array-like, or a Buffer. Value: `"+e+"`.");if(e.get&&e.set&&(!Xt(e.get)||!Xt(e.set)))throw new TypeError("invalid argument. `buffer` argument `get` and `set` properties must be functions. Value: `"+e+"`.");if(!Sr(r)&&(!Xe(r)||r.length>0))throw new TypeError("invalid argument. `shape` argument must be an array-like object containing nonnegative integers. Value: `"+r+"`.");if((u=r.length)>fn)throw new RangeError("invalid argument. Number of dimensions must not exceed 32767 due to stack limits. Value: `"+u+"`.");if(!Nr(n))throw new TypeError("invalid argument. `strides` argument must be an array-like object containing integers. Value: `"+n+"`.");if(u>0){if(n.length!==u)throw new RangeError("invalid argument. `strides` argument length must match the number of dimensions. Expected number of dimensions: "+u+". Strides length: "+n.length+".")}else{if(1!==n.length)throw new RangeError("invalid argument. `strides` length must be equal to 1 when creating a zero-dimensional ndarray.");if(0!==n[0])throw new RangeError("invalid argument. `strides` argument must contain a single element equal to `0`. Value: `"+n[0]+"`.")}if(!Ar(i))throw new TypeError("invalid argument. `offset` argument must be a nonnegative integer. Value: `"+i+"`.");if(!Cr(o))throw new TypeError("invalid argument. `order` argument must be a supported order. Value: `"+o+"`.");if(u>0&&!Dr(e.length,r,n,i)&&Yr(r)>0)throw new Error("invalid arguments. The input buffer is incompatible with the specified meta data. Ensure that the offset is valid with regard to the strides array and that the buffer has enough elements to satisfy the desired array shape.");if((s={}).mode=zr,s.readonly=Xr,arguments.length>6&&(f=sn(s,a)))throw f;return this._mode=s.mode,void 0===s.submode&&(s.submode=[this._mode]),this._submode=s.submode,c=Kr(r,u),l=Kr(n,u||1),vr.call(this,t,e,c,l,i,o),this._flags.READONLY=s.readonly,this}function ln(t,e){return(e?vr:cn)("float64",new me(t*t),[t,t],[t,1],0,"row-major")}function hn(t,e){var r,n=t.shape[0];for(r=0;r<n;r++)t.set(r,r,e);return t}function pn(t){return vr("float64",new me(t),[t],[1],0,"row-major")}return function(t,e){var r=Gr(t);if(r)throw r;if(r=Gr(e))throw r;if(void 0===e.prototype)throw new TypeError("invalid argument. Second argument must have a prototype from which another object can inherit. Value: `"+e.prototype+"`.");t.prototype=Wr(e.prototype),f(t.prototype,"constructor",{configurable:!0,enumerable:!1,writable:!0,value:t})}(cn,vr),c(cn,"name","ndarray"),c(cn.prototype,"get",(function(){var t,e,r,n;if(arguments.length!==this._ndims)throw new RangeError("invalid arguments. Number of indices must match the number of dimensions. ndims: "+this._ndims+". nargs: "+arguments.length+".");for(t=this._offset,r=this._submode.length,n=0;n<arguments.length;n++){if(!S(arguments[n]))throw new TypeError("invalid argument. Indices must be integer valued. Argument: "+n+". Value: `"+arguments[n]+"`.");e=Zr(arguments[n],this._shape[n]-1,this._submode[n%r]),t+=this._strides[n]*e}return this._accessors?this._buffer.get(t):this._buffer[t]})),c(cn.prototype,"iget",(function(t){if(this._ndims>0){if(!S(t))throw new TypeError("invalid argument. Index must be an integer value. Value: `"+t+"`.");return t=Zr(t,this._length-1,this._mode),qr.call(this,t)}return qr.call(this)})),c(cn.prototype,"set",(function(){var t,e,r,n;if(this._flags.READONLY)throw new Error("invalid invocation. Cannot write to a read-only array.");if(arguments.length!==this._ndims+1)throw new RangeError("invalid arguments. Number of indices must match the number of dimensions. ndims: "+this._ndims+". nargs: "+arguments.length+".");for(t=this._offset,r=this._submode.length,n=0;n<arguments.length-1;n++){if(!S(arguments[n]))throw new TypeError("invalid argument. Indices must be integer valued. Argument: "+n+". Value: `"+arguments[n]+"`.");e=Zr(arguments[n],this._shape[n]-1,this._submode[n%r]),t+=this._strides[n]*e}return this._accessors?this._buffer.set(arguments[n],t):this._buffer[t]=arguments[n],this})),c(cn.prototype,"iset",(function(t,e){if(this._flags.READONLY)throw new Error("invalid invocation. Cannot write to a read-only array.");if(this._ndims>0){if(!S(t))throw new TypeError("invalid argument. Index must be an integer value. Value: `"+t+"`.");t=Zr(t,this._length-1,this._mode),Hr.call(this,t,e)}else Hr.call(this,t);return this})),function(t,e){var r,n,i,o,a,u,s,f;if(f=0,N(t))n=ln(r=t,!1);else{if(!wr(t))throw new TypeError(Or("invalid argument. First argument must either specify the order of the correlation matrix or be a square two-dimensional ndarray for storing the correlation matrix. Value: `%s`.",t));r=t.shape[0],n=t}if(n=hn(n,1),s=new me(r),i=new me(r),o=new me(r),u=ln(r,!0),arguments.length>1){if(!Er(e))throw new TypeError(Or("invalid argument. Second argument must be a one-dimensional ndarray. Value: `%s`.",e));if(Yr(e.shape)!==r)throw new Error("invalid argument. The number of elements (means) in the second argument must match correlation matrix dimensions. Expected: "+r+". Actual: "+Yr(e.shape)+".");return a=e,l}return a=pn(r),c;function c(t){var e,c,l,h,p,g,d,y,m,b,v,_;if(0===arguments.length)return 0===f?null:n;if(!Er(t))throw new TypeError(Or("invalid argument. Must provide a one-dimensional ndarray. Value: `%s`.",t));if(t.shape[0]!==r)throw new Error(Or("0ejAH",r,t.shape[0]));if(b=(m=f)/(f+=1),e=m||1,1===f)for(v=0;v<r;v++)for(d=t.get(v),y=a.get(v),y+=(g=d-y)/f,a.set(v,y),s[v]=g,i[v]+=g*(d-y),o[v]=jr(i[v]/e),c=b*s[v],_=0;_<v;_++)l=u.get(v,_)+c*s[_],u.set(v,_,l),u.set(_,v,l);else for(v=0;v<r;v++)for(d=t.get(v),y=a.get(v),y+=(g=d-y)/f,a.set(v,y),s[v]=g,i[v]+=g*(d-y),o[v]=jr(i[v]/e),c=b*s[v],p=o[v],_=0;_<v;_++)l=u.get(v,_)+c*s[_],u.set(v,_,l),u.set(_,v,l),h=l/e/(p*o[_]),n.set(v,_,h),n.set(_,v,h);return n}function l(t){var e,c,l,h,p,g;if(0===arguments.length)return 0===f?null:n;if(!Er(t))throw new TypeError(Or("invalid argument. Must provide a one-dimensional ndarray. Value: `%s`.",t));if(t.shape[0]!==r)throw new Error(Or("0ejAH",r,t.shape[0]));for(f+=1,p=0;p<r;p++)for(h=t.get(p)-a.get(p),s[p]=h,i[p]+=h*h,o[p]=jr(i[p]/f),l=o[p],g=0;g<p;g++)c=u.get(p,g)+h*s[g],u.set(p,g,c),u.set(g,p,c),e=c/f/(l*o[g]),n.set(p,g,e),n.set(g,p,e);return n}}}));
//# sourceMappingURL=index.js.map
