// Copyright (c) 2024 The Stdlib Authors. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
/// <reference types="./index.d.ts" />
import{isPrimitive as e}from"https://cdn.jsdelivr.net/gh/stdlib-js/assert-is-positive-integer@v0.2.0-esm/index.mjs";import t from"https://cdn.jsdelivr.net/gh/stdlib-js/assert-is-square-matrix@v0.2.0-esm/index.mjs";import r from"https://cdn.jsdelivr.net/gh/stdlib-js/assert-is-vector-like@v0.2.0-esm/index.mjs";import n from"https://cdn.jsdelivr.net/gh/stdlib-js/array-float64@v0.2.0-esm/index.mjs";import s from"https://cdn.jsdelivr.net/gh/stdlib-js/string-format@v0.1.1-esm/index.mjs";import i from"https://cdn.jsdelivr.net/gh/stdlib-js/math-base-special-sqrt@v0.2.0-esm/index.mjs";import a from"https://cdn.jsdelivr.net/gh/stdlib-js/ndarray-ctor@esm/index.mjs";import o from"https://cdn.jsdelivr.net/gh/stdlib-js/ndarray-base-ctor@v0.2.0-esm/index.mjs";import m from"https://cdn.jsdelivr.net/gh/stdlib-js/ndarray-base-numel@v0.2.0-esm/index.mjs";function d(e,t){return(t?o:a)("float64",new n(e*e),[e,e],[e,1],0,"row-major")}function l(e,t){var r,n=e.shape[0];for(r=0;r<n;r++)e.set(r,r,t);return e}function u(e){var t;return t=new n(e),o("float64",t,[e],[1],0,"row-major")}function h(a,o){var h,f,p,c,g,v,j,w;if(w=0,e(a))f=d(h=a,!1);else{if(!t(a))throw new TypeError(s("invalid argument. First argument must either specify the order of the correlation matrix or be a square two-dimensional ndarray for storing the correlation matrix. Value: `%s`.",a));h=a.shape[0],f=a}if(f=l(f,1),j=new n(h),p=new n(h),c=new n(h),v=d(h,!0),arguments.length>1){if(!r(o))throw new TypeError(s("invalid argument. Second argument must be a one-dimensional ndarray. Value: `%s`.",o));if(m(o.shape)!==h)throw new Error("invalid argument. The number of elements (means) in the second argument must match correlation matrix dimensions. Expected: "+h+". Actual: "+m(o.shape)+".");return g=o,b}return g=u(h),x;function x(e){var t,n,a,o,m,d,l,u,x,b,y,E;if(0===arguments.length)return 0===w?null:f;if(!r(e))throw new TypeError(s("invalid argument. Must provide a one-dimensional ndarray. Value: `%s`.",e));if(e.shape[0]!==h)throw new Error(s("invalid argument. Vector length must match correlation matrix dimensions. Expected: `%u`. Actual: `%u`.",h,e.shape[0]));if(b=(x=w)/(w+=1),t=x||1,1===w)for(y=0;y<h;y++)for(l=e.get(y),u=g.get(y),u+=(d=l-u)/w,g.set(y,u),j[y]=d,p[y]+=d*(l-u),c[y]=i(p[y]/t),n=b*j[y],E=0;E<y;E++)a=v.get(y,E)+n*j[E],v.set(y,E,a),v.set(E,y,a);else for(y=0;y<h;y++)for(l=e.get(y),u=g.get(y),u+=(d=l-u)/w,g.set(y,u),j[y]=d,p[y]+=d*(l-u),c[y]=i(p[y]/t),n=b*j[y],m=c[y],E=0;E<y;E++)a=v.get(y,E)+n*j[E],v.set(y,E,a),v.set(E,y,a),o=a/t/(m*c[E]),f.set(y,E,o),f.set(E,y,o);return f}function b(e){var t,n,a,o,m,d;if(0===arguments.length)return 0===w?null:f;if(!r(e))throw new TypeError(s("invalid argument. Must provide a one-dimensional ndarray. Value: `%s`.",e));if(e.shape[0]!==h)throw new Error(s("invalid argument. Vector length must match correlation matrix dimensions. Expected: `%u`. Actual: `%u`.",h,e.shape[0]));for(w+=1,m=0;m<h;m++)for(o=e.get(m)-g.get(m),j[m]=o,p[m]+=o*o,c[m]=i(p[m]/w),a=c[m],d=0;d<m;d++)n=v.get(m,d)+o*j[d],v.set(m,d,n),v.set(d,m,n),t=n/w/(a*c[d]),f.set(m,d,t),f.set(d,m,t);return f}}export{h as default};
//# sourceMappingURL=index.mjs.map
