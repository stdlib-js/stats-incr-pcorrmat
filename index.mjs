// Copyright (c) 2023 The Stdlib Authors. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
/// <reference types="./index.d.ts" />
import{isPrimitive as e}from"https://cdn.jsdelivr.net/gh/stdlib-js/assert-is-positive-integer@esm/index.mjs";import t from"https://cdn.jsdelivr.net/gh/stdlib-js/assert-is-square-matrix@esm/index.mjs";import r from"https://cdn.jsdelivr.net/gh/stdlib-js/assert-is-vector-like@esm/index.mjs";import s from"https://cdn.jsdelivr.net/gh/stdlib-js/array-float64@esm/index.mjs";import n from"https://cdn.jsdelivr.net/gh/stdlib-js/error-tools-fmtprodmsg@v0.0.2-esm/index.mjs";import i from"https://cdn.jsdelivr.net/gh/stdlib-js/math-base-special-sqrt@esm/index.mjs";import o from"https://cdn.jsdelivr.net/gh/stdlib-js/ndarray-ctor@esm/index.mjs";import m from"https://cdn.jsdelivr.net/gh/stdlib-js/ndarray-base-ctor@esm/index.mjs";import a from"https://cdn.jsdelivr.net/gh/stdlib-js/ndarray-base-numel@esm/index.mjs";function f(e,t){return(t?m:o)("float64",new s(e*e),[e,e],[e,1],0,"row-major")}function d(e,t){var r,s=e.shape[0];for(r=0;r<s;r++)e.set(r,r,t);return e}function h(e){var t;return t=new s(e),m("float64",t,[e],[1],0,"row-major")}function l(o,m){var l,p,j,g,u,c,w,v;if(v=0,e(o))p=f(l=o,!1);else{if(!t(o))throw new TypeError(n("1JfI8",o));l=o.shape[0],p=o}if(p=d(p,1),w=new s(l),j=new s(l),g=new s(l),c=f(l,!0),arguments.length>1){if(!r(m))throw new TypeError(n("1JfI0",m));if(a(m.shape)!==l)throw new Error("invalid argument. The number of elements (means) in the second argument must match correlation matrix dimensions. Expected: "+l+". Actual: "+a(m.shape)+".");return u=m,x}return u=h(l),b;function b(e){var t,s,o,m,a,f,d,h,b,x,y,E;if(0===arguments.length)return 0===v?null:p;if(!r(e))throw new TypeError(n("1JfI2",e));if(e.shape[0]!==l)throw new Error(n("1Jf9g,I6",l,e.shape[0]));if(x=(b=v)/(v+=1),t=b||1,1===v)for(y=0;y<l;y++)for(d=e.get(y),h=u.get(y),h+=(f=d-h)/v,u.set(y,h),w[y]=f,j[y]+=f*(d-h),g[y]=i(j[y]/t),s=x*w[y],E=0;E<y;E++)o=c.get(y,E)+s*w[E],c.set(y,E,o),c.set(E,y,o);else for(y=0;y<l;y++)for(d=e.get(y),h=u.get(y),h+=(f=d-h)/v,u.set(y,h),w[y]=f,j[y]+=f*(d-h),g[y]=i(j[y]/t),s=x*w[y],a=g[y],E=0;E<y;E++)o=c.get(y,E)+s*w[E],c.set(y,E,o),c.set(E,y,o),m=o/t/(a*g[E]),p.set(y,E,m),p.set(E,y,m);return p}function x(e){var t,s,o,m,a,f;if(0===arguments.length)return 0===v?null:p;if(!r(e))throw new TypeError(n("1JfI2",e));if(e.shape[0]!==l)throw new Error(n("1Jf9g,I6",l,e.shape[0]));for(v+=1,a=0;a<l;a++)for(m=e.get(a)-u.get(a),w[a]=m,j[a]+=m*m,g[a]=i(j[a]/v),o=g[a],f=0;f<a;f++)s=c.get(a,f)+m*w[f],c.set(a,f,s),c.set(f,a,s),t=s/v/(o*g[f]),p.set(a,f,t),p.set(f,a,t);return p}}export{l as default};
//# sourceMappingURL=index.mjs.map
