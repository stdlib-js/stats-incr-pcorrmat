// Copyright (c) 2023 The Stdlib Authors. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
/// <reference types="./index.d.ts" />
import{isPrimitive as e}from"https://cdn.jsdelivr.net/gh/stdlib-js/assert-is-positive-integer@v0.1.0-esm/index.mjs";import t from"https://cdn.jsdelivr.net/gh/stdlib-js/assert-is-square-matrix@v0.1.0-esm/index.mjs";import r from"https://cdn.jsdelivr.net/gh/stdlib-js/assert-is-vector-like@v0.1.0-esm/index.mjs";import s from"https://cdn.jsdelivr.net/gh/stdlib-js/array-float64@v0.1.1-esm/index.mjs";import n from"https://cdn.jsdelivr.net/gh/stdlib-js/error-tools-fmtprodmsg@v0.1.1-esm/index.mjs";import i from"https://cdn.jsdelivr.net/gh/stdlib-js/math-base-special-sqrt@v0.1.1-esm/index.mjs";import o from"https://cdn.jsdelivr.net/gh/stdlib-js/ndarray-ctor@esm/index.mjs";import m from"https://cdn.jsdelivr.net/gh/stdlib-js/ndarray-base-ctor@v0.1.0-esm/index.mjs";import a from"https://cdn.jsdelivr.net/gh/stdlib-js/ndarray-base-numel@v0.1.1-esm/index.mjs";function f(e,t){return(t?m:o)("float64",new s(e*e),[e,e],[e,1],0,"row-major")}function d(e,t){var r,s=e.shape[0];for(r=0;r<s;r++)e.set(r,r,t);return e}function h(e){var t;return t=new s(e),m("float64",t,[e],[1],0,"row-major")}function l(o,m){var l,p,j,g,u,v,c,w;if(w=0,e(o))p=f(l=o,!1);else{if(!t(o))throw new TypeError(n("1JfI8",o));l=o.shape[0],p=o}if(p=d(p,1),c=new s(l),j=new s(l),g=new s(l),v=f(l,!0),arguments.length>1){if(!r(m))throw new TypeError(n("1JfI0",m));if(a(m.shape)!==l)throw new Error("invalid argument. The number of elements (means) in the second argument must match correlation matrix dimensions. Expected: "+l+". Actual: "+a(m.shape)+".");return u=m,x}return u=h(l),b;function b(e){var t,s,o,m,a,f,d,h,b,x,y,E;if(0===arguments.length)return 0===w?null:p;if(!r(e))throw new TypeError(n("1JfI2",e));if(e.shape[0]!==l)throw new Error(n("1Jf9g,I6",l,e.shape[0]));if(x=(b=w)/(w+=1),t=b||1,1===w)for(y=0;y<l;y++)for(d=e.get(y),h=u.get(y),h+=(f=d-h)/w,u.set(y,h),c[y]=f,j[y]+=f*(d-h),g[y]=i(j[y]/t),s=x*c[y],E=0;E<y;E++)o=v.get(y,E)+s*c[E],v.set(y,E,o),v.set(E,y,o);else for(y=0;y<l;y++)for(d=e.get(y),h=u.get(y),h+=(f=d-h)/w,u.set(y,h),c[y]=f,j[y]+=f*(d-h),g[y]=i(j[y]/t),s=x*c[y],a=g[y],E=0;E<y;E++)o=v.get(y,E)+s*c[E],v.set(y,E,o),v.set(E,y,o),m=o/t/(a*g[E]),p.set(y,E,m),p.set(E,y,m);return p}function x(e){var t,s,o,m,a,f;if(0===arguments.length)return 0===w?null:p;if(!r(e))throw new TypeError(n("1JfI2",e));if(e.shape[0]!==l)throw new Error(n("1Jf9g,I6",l,e.shape[0]));for(w+=1,a=0;a<l;a++)for(m=e.get(a)-u.get(a),c[a]=m,j[a]+=m*m,g[a]=i(j[a]/w),o=g[a],f=0;f<a;f++)s=v.get(a,f)+m*c[f],v.set(a,f,s),v.set(f,a,s),t=s/w/(o*g[f]),p.set(a,f,t),p.set(f,a,t);return p}}export{l as default};
//# sourceMappingURL=index.mjs.map