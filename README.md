<!--

@license Apache-2.0

Copyright (c) 2018 The Stdlib Authors.

Licensed under the Apache License, Version 2.0 (the "License");
you may not use this file except in compliance with the License.
You may obtain a copy of the License at

   http://www.apache.org/licenses/LICENSE-2.0

Unless required by applicable law or agreed to in writing, software
distributed under the License is distributed on an "AS IS" BASIS,
WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
See the License for the specific language governing permissions and
limitations under the License.

-->

# incrpcorrmat

[![NPM version][npm-image]][npm-url] [![Build Status][test-image]][test-url] [![Coverage Status][coverage-image]][coverage-url] [![dependencies][dependencies-image]][dependencies-url]

> Compute a [sample Pearson product-moment correlation matrix][pearson-correlation] incrementally.

<section class="intro">

A [Pearson product-moment correlation matrix][pearson-correlation] is an M-by-M matrix whose elements specified by indices `j` and `k` are the [Pearson product-moment correlation coefficients][pearson-correlation] between the jth and kth data variables. The [Pearson product-moment correlation coefficient][pearson-correlation] between random variables `X` and `Y` is defined as

<!-- <equation class="equation" label="eq:pearson_correlation_coefficient" align="center" raw="\rho_{X,Y} = \frac{\operatorname{cov}(X,Y)}{\sigma_X \sigma_Y}" alt="Equation for the Pearson product-moment correlation coefficient."> -->

<div class="equation" align="center" data-raw-text="\rho_{X,Y} = \frac{\operatorname{cov}(X,Y)}{\sigma_X \sigma_Y}" data-equation="eq:pearson_correlation_coefficient">
    <img src="https://cdn.rawgit.com/stdlib-js/stdlib/27e2a43c70db648bb5bbc3fd0cdee050c25adc0b/lib/node_modules/@stdlib/stats/incr/pcorrmat/docs/img/equation_pearson_correlation_coefficient.svg" alt="Equation for the Pearson product-moment correlation coefficient.">
    <br>
</div>

<!-- </equation> -->

where the numerator is the [covariance][covariance] and the denominator is the product of the respective standard deviations.

For a sample of size `n`, the [sample Pearson product-moment correlation coefficient][pearson-correlation] is defined as

<!-- <equation class="equation" label="eq:sample_pearson_correlation_coefficient" align="center" raw="r = \frac{\sum_{i=0}^{n-1} (x_i - \bar{x})(y_i - \bar{y})}{\sqrt{\sum_{i=0}^{n-1} (x_i - \bar{x})^2} \sqrt{\sum_{i=0}^{n-1} (y_i - \bar{y})^2}}" alt="Equation for the sample Pearson product-moment correlation coefficient."> -->

<div class="equation" align="center" data-raw-text="r = \frac{\sum_{i=0}^{n-1} (x_i - \bar{x})(y_i - \bar{y})}{\sqrt{\sum_{i=0}^{n-1} (x_i - \bar{x})^2} \sqrt{\sum_{i=0}^{n-1} (y_i - \bar{y})^2}}" data-equation="eq:sample_pearson_correlation_coefficient">
    <img src="https://cdn.rawgit.com/stdlib-js/stdlib/27e2a43c70db648bb5bbc3fd0cdee050c25adc0b/lib/node_modules/@stdlib/stats/incr/pcorrmat/docs/img/equation_sample_pearson_correlation_coefficient.svg" alt="Equation for the sample Pearson product-moment correlation coefficient.">
    <br>
</div>

<!-- </equation> -->

</section>

<!-- /.intro -->

<section class="installation">

## Installation

```bash
npm install @stdlib/stats-incr-pcorrmat
```

</section>

<section class="usage">

## Usage

```javascript
var incrpcorrmat = require( '@stdlib/stats-incr-pcorrmat' );
```

#### incrpcorrmat( out\[, means] )

Returns an accumulator `function` which incrementally computes a [sample Pearson product-moment correlation matrix][pearson-correlation].

```javascript
// Create an accumulator for computing a 2-dimensional correlation matrix:
var accumulator = incrpcorrmat( 2 );
```

The `out` argument may be either the order of the [correlation matrix][pearson-correlation] or a square 2-dimensional [`ndarray`][@stdlib/ndarray/ctor] for storing the [correlation matrix][pearson-correlation].

```javascript
var Float64Array = require( '@stdlib/array-float64' );
var ndarray = require( '@stdlib/ndarray-ctor' );

var buffer = new Float64Array( 4 );
var shape = [ 2, 2 ];
var strides = [ 2, 1 ];

// Create a 2-dimensional output correlation matrix:
var corr = ndarray( 'float64', buffer, shape, strides, 0, 'row-major' );

var accumulator = incrpcorrmat( corr );
```

When means are known, the function supports providing a 1-dimensional [`ndarray`][@stdlib/ndarray/ctor] containing mean values.

```javascript
var Float64Array = require( '@stdlib/array-float64' );
var ndarray = require( '@stdlib/ndarray-ctor' );

var buffer = new Float64Array( 2 );
var shape = [ 2 ];
var strides = [ 1 ];

var means = ndarray( 'float64', buffer, shape, strides, 0, 'row-major' );

means.set( 0, 3.0 );
means.set( 1, -5.5 );

var accumulator = incrpcorrmat( 2, means );
```

#### accumulator( \[vector] )

If provided a data vector, the accumulator function returns an updated [sample Pearson product-moment correlation matrix][pearson-correlation]. If not provided a data vector, the accumulator function returns the current [sample Pearson product-moment correlation matrix][pearson-correlation].

```javascript
var Float64Array = require( '@stdlib/array-float64' );
var ndarray = require( '@stdlib/ndarray-ctor' );

var buffer = new Float64Array( 4 );
var shape = [ 2, 2 ];
var strides = [ 2, 1 ];
var corr = ndarray( 'float64', buffer, shape, strides, 0, 'row-major' );

buffer = new Float64Array( 2 );
shape = [ 2 ];
strides = [ 1 ];
var vec = ndarray( 'float64', buffer, shape, strides, 0, 'row-major' );

var accumulator = incrpcorrmat( corr );

vec.set( 0, 2.0 );
vec.set( 1, 1.0 );

var out = accumulator( vec );
// returns <ndarray>

var bool = ( out === corr );
// returns true

vec.set( 0, 1.0 );
vec.set( 1, -5.0 );

out = accumulator( vec );
// returns <ndarray>

vec.set( 0, 3.0 );
vec.set( 1, 3.14 );

out = accumulator( vec );
// returns <ndarray>

out = accumulator();
// returns <ndarray>
```

</section>

<!-- /.usage -->

<section class="notes">

</section>

<!-- /.notes -->

<section class="examples">

## Examples

<!-- eslint no-undef: "error" -->

```javascript
var randu = require( '@stdlib/random-base-randu' );
var ndarray = require( '@stdlib/ndarray-ctor' );
var Float64Array = require( '@stdlib/array-float64' );
var incrpcorrmat = require( '@stdlib/stats-incr-pcorrmat' );

var corr;
var rxy;
var ryx;
var rx;
var ry;
var i;

// Initialize an accumulator for a 2-dimensional correlation matrix:
var accumulator = incrpcorrmat( 2 );

// Create a 1-dimensional data vector:
var buffer = new Float64Array( 2 );
var shape = [ 2 ];
var strides = [ 1 ];

var vec = ndarray( 'float64', buffer, shape, strides, 0, 'row-major' );

// For each simulated data vector, update the sample correlation matrix...
for ( i = 0; i < 100; i++ ) {
    vec.set( 0, randu()*100.0 );
    vec.set( 1, randu()*100.0 );
    corr = accumulator( vec );

    rx = corr.get( 0, 0 ).toFixed( 4 );
    ry = corr.get( 1, 1 ).toFixed( 4 );
    rxy = corr.get( 0, 1 ).toFixed( 4 );
    ryx = corr.get( 1, 0 ).toFixed( 4 );

    console.log( '[ %d, %d\n  %d, %d ]', rx, rxy, ryx, ry );
}
```

</section>

<!-- /.examples -->


<section class="main-repo" >

* * *

## Notice

This package is part of [stdlib][stdlib], a standard library for JavaScript and Node.js, with an emphasis on numerical and scientific computing. The library provides a collection of robust, high performance libraries for mathematics, statistics, streams, utilities, and more.

For more information on the project, filing bug reports and feature requests, and guidance on how to develop [stdlib][stdlib], see the main project [repository][stdlib].

#### Community

[![Chat][chat-image]][chat-url]

---

## License

See [LICENSE][stdlib-license].


## Copyright

Copyright &copy; 2016-2021. The Stdlib [Authors][stdlib-authors].

</section>

<!-- /.stdlib -->

<!-- Section for all links. Make sure to keep an empty line after the `section` element and another before the `/section` close. -->

<section class="links">

[npm-image]: http://img.shields.io/npm/v/@stdlib/stats-incr-pcorrmat.svg
[npm-url]: https://npmjs.org/package/@stdlib/stats-incr-pcorrmat

[test-image]: https://github.com/stdlib-js/stats-incr-pcorrmat/actions/workflows/test.yml/badge.svg
[test-url]: https://github.com/stdlib-js/stats-incr-pcorrmat/actions/workflows/test.yml

[coverage-image]: https://img.shields.io/codecov/c/github/stdlib-js/stats-incr-pcorrmat/main.svg
[coverage-url]: https://codecov.io/github/stdlib-js/stats-incr-pcorrmat?branch=main

[dependencies-image]: https://img.shields.io/david/stdlib-js/stats-incr-pcorrmat.svg
[dependencies-url]: https://david-dm.org/stdlib-js/stats-incr-pcorrmat/main

[chat-image]: https://img.shields.io/gitter/room/stdlib-js/stdlib.svg
[chat-url]: https://gitter.im/stdlib-js/stdlib/

[stdlib]: https://github.com/stdlib-js/stdlib

[stdlib-authors]: https://github.com/stdlib-js/stdlib/graphs/contributors

[stdlib-license]: https://raw.githubusercontent.com/stdlib-js/stats-incr-pcorrmat/main/LICENSE

[pearson-correlation]: https://en.wikipedia.org/wiki/Pearson_correlation_coefficient

[covariance]: https://en.wikipedia.org/wiki/Covariance

[@stdlib/ndarray/ctor]: https://github.com/stdlib-js/ndarray-ctor

</section>

<!-- /.links -->