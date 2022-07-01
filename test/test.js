/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/

'use strict';

// MODULES //

var tape = require( 'tape' );
var abs = require( '@stdlib/math-base-special-abs' );
var EPS = require( '@stdlib/constants-float64-eps' );
var ndarray = require( '@stdlib/ndarray-ctor' );
var Float64Array = require( '@stdlib/array-float64' );
var incrpcorrmat = require( './../lib' );


// TESTS //

tape( 'main export is a function', function test( t ) {
	t.ok( true, __filename );
	t.equal( typeof incrpcorrmat, 'function', 'main export is a function' );
	t.end();
});

tape( 'the function throws an error if not provided either a positive integer or an output ndarray having equal dimensions for storing the correlation matrix for the first argument', function test( t ) {
	var strides;
	var values;
	var buffer;
	var shape;
	var mat;
	var i;

	buffer = new Float64Array( 6 );
	shape = [ 3, 2 ];
	strides = [ 2, 1 ];
	mat = ndarray( 'float64', buffer, shape, strides, 0, 'row-major' );

	values = [
		'5',
		3.14,
		0.0,
		-1,
		true,
		false,
		null,
		void 0,
		[],
		{},
		function noop() {},
		mat
	];
	for ( i = 0; i < values.length; i++ ) {
		t.throws( badValue( values[i] ), TypeError, 'throws an error when provided '+values[i] );
	}
	t.end();

	function badValue( value ) {
		return function badValue() {
			incrpcorrmat( value );
		};
	}
});

tape( 'the function throws an error if not provided either a positive integer or an output ndarray having equal dimensions for storing the correlation matrix for the first argument (means)', function test( t ) {
	var strides;
	var values;
	var buffer;
	var shape;
	var mat;
	var vec;
	var i;

	buffer = new Float64Array( 6 );
	shape = [ 3, 2 ];
	strides = [ 2, 1 ];
	mat = ndarray( 'float64', buffer, shape, strides, 0, 'row-major' );

	buffer = new Float64Array( 2 );
	shape = [ 2 ];
	strides = [ 1 ];

	vec = ndarray( 'float64', buffer, shape, strides, 0, 'row-major' );

	values = [
		'5',
		3.14,
		0.0,
		-1,
		true,
		false,
		null,
		void 0,
		[],
		{},
		function noop() {},
		mat
	];
	for ( i = 0; i < values.length; i++ ) {
		t.throws( badValue( values[i] ), TypeError, 'throws an error when provided '+values[i] );
	}
	t.end();

	function badValue( value ) {
		return function badValue() {
			incrpcorrmat( value, vec );
		};
	}
});

tape( 'the function throws an error if not provided a 1-dimensional ndarray as a second argument (order)', function test( t ) {
	var values;
	var i;

	values = [
		'5',
		3.14,
		1.0,
		true,
		false,
		null,
		void 0,
		[],
		{},
		function noop() {}
	];
	for ( i = 0; i < values.length; i++ ) {
		t.throws( badValue( values[i] ), TypeError, 'throws an error when provided '+values[i] );
	}
	t.end();

	function badValue( value ) {
		return function badValue() {
			incrpcorrmat( 2, value );
		};
	}
});

tape( 'the function throws an error if not provided a 1-dimensional ndarray as a second argument (correlation matrix)', function test( t ) {
	var strides;
	var values;
	var buffer;
	var shape;
	var corr;
	var i;

	buffer = new Float64Array( 4 );
	shape = [ 2, 2 ];
	strides = [ 2, 1 ];
	corr = ndarray( 'float64', buffer, shape, strides, 0, 'row-major' );

	values = [
		'5',
		3.14,
		1.0,
		true,
		false,
		null,
		void 0,
		[],
		{},
		function noop() {}
	];
	for ( i = 0; i < values.length; i++ ) {
		t.throws( badValue( values[i] ), TypeError, 'throws an error when provided '+values[i] );
	}
	t.end();

	function badValue( value ) {
		return function badValue() {
			incrpcorrmat( corr, value );
		};
	}
});

tape( 'the function throws an error if the number of known means does not match correlation matrix dimensions (order)', function test( t ) {
	var strides;
	var buffer;
	var shape;
	var vec;

	buffer = new Float64Array( 3 );
	shape = [ 3 ];
	strides = [ 1 ];
	vec = ndarray( 'float64', buffer, shape, strides, 0, 'row-major' );

	t.throws( badValue( vec ), Error, 'throws an error' );
	t.end();

	function badValue( value ) {
		return function badValue() {
			incrpcorrmat( 2, value );
		};
	}
});

tape( 'the function throws an error if the number of known means does not match correlation matrix dimensions (correlation matrix)', function test( t ) {
	var strides;
	var buffer;
	var shape;
	var corr;
	var vec;

	buffer = new Float64Array( 9 );
	shape = [ 3, 3 ];
	strides = [ 3, 1 ];
	corr = ndarray( 'float64', buffer, shape, strides, 0, 'row-major' );

	buffer = new Float64Array( 2 );
	shape = [ 2 ];
	strides = [ 1 ];
	vec = ndarray( 'float64', buffer, shape, strides, 0, 'row-major' );

	t.throws( badValue( vec ), Error, 'throws an error' );
	t.end();

	function badValue( value ) {
		return function badValue() {
			incrpcorrmat( corr, value );
		};
	}
});

tape( 'the function returns an accumulator function (order)', function test( t ) {
	t.equal( typeof incrpcorrmat( 2 ), 'function', 'returns a function' );
	t.end();
});

tape( 'the function returns an accumulator function (correlation matrix)', function test( t ) {
	var strides;
	var buffer;
	var shape;
	var corr;

	buffer = new Float64Array( 4 );
	shape = [ 2, 2 ];
	strides = [ 2, 1 ];
	corr = ndarray( 'float64', buffer, shape, strides, 0, 'row-major' );

	t.equal( typeof incrpcorrmat( corr ), 'function', 'returns a function' );
	t.end();
});

tape( 'the function returns an accumulator function (order; known means)', function test( t ) {
	var strides;
	var buffer;
	var shape;
	var means;

	buffer = new Float64Array( 4 );
	shape = [ 2 ];
	strides = [ 1 ];
	means = ndarray( 'float64', buffer, shape, strides, 0, 'row-major' );

	t.equal( typeof incrpcorrmat( 2, means ), 'function', 'returns a function' );
	t.end();
});

tape( 'the function returns an accumulator function (correlation matrix; known means)', function test( t ) {
	var strides;
	var buffer;
	var shape;
	var means;
	var corr;

	buffer = new Float64Array( 4 );
	shape = [ 2, 2 ];
	strides = [ 2, 1 ];
	corr = ndarray( 'float64', buffer, shape, strides, 0, 'row-major' );

	buffer = new Float64Array( 4 );
	shape = [ 2 ];
	strides = [ 1 ];
	means = ndarray( 'float64', buffer, shape, strides, 0, 'row-major' );

	t.equal( typeof incrpcorrmat( corr, means ), 'function', 'returns a function' );
	t.end();
});

tape( 'the accumulator function throws an error if not provided a 1-dimensional ndarray (order)', function test( t ) {
	var strides;
	var values;
	var buffer;
	var shape;
	var mat;
	var acc;
	var i;

	buffer = new Float64Array( 4 );
	shape = [ 2, 2 ];
	strides = [ 2, 1 ];
	mat = ndarray( 'float64', buffer, shape, strides, 0, 'row-major' );

	acc = incrpcorrmat( 2 );

	values = [
		'5',
		3.14,
		1.0,
		true,
		false,
		null,
		void 0,
		[],
		{},
		function noop() {},
		mat
	];
	for ( i = 0; i < values.length; i++ ) {
		t.throws( badValue( values[i] ), TypeError, 'throws an error when provided '+values[i] );
	}
	t.end();

	function badValue( value ) {
		return function badValue() {
			acc( value );
		};
	}
});

tape( 'the accumulator function throws an error if not provided a 1-dimensional ndarray (order, means)', function test( t ) {
	var strides;
	var values;
	var buffer;
	var shape;
	var means;
	var mat;
	var acc;
	var i;

	buffer = new Float64Array( 4 );
	shape = [ 2, 2 ];
	strides = [ 2, 1 ];
	mat = ndarray( 'float64', buffer, shape, strides, 0, 'row-major' );

	buffer = new Float64Array( 2 );
	shape = [ 2 ];
	strides = [ 1 ];
	means = ndarray( 'float64', buffer, shape, strides, 0, 'row-major' );

	acc = incrpcorrmat( 2, means );

	values = [
		'5',
		3.14,
		1.0,
		true,
		false,
		null,
		void 0,
		[],
		{},
		function noop() {},
		mat
	];
	for ( i = 0; i < values.length; i++ ) {
		t.throws( badValue( values[i] ), TypeError, 'throws an error when provided '+values[i] );
	}
	t.end();

	function badValue( value ) {
		return function badValue() {
			acc( value );
		};
	}
});

tape( 'the accumulator function throws an error if not provided a 1-dimensional ndarray (correlation matrix)', function test( t ) {
	var strides;
	var values;
	var buffer;
	var shape;
	var corr;
	var acc;
	var i;

	buffer = new Float64Array( 4 );
	shape = [ 2, 2 ];
	strides = [ 2, 1 ];
	corr = ndarray( 'float64', buffer, shape, strides, 0, 'row-major' );

	acc = incrpcorrmat( corr );

	values = [
		'5',
		3.14,
		1.0,
		true,
		false,
		null,
		void 0,
		[],
		{},
		function noop() {},
		ndarray( 'float64', new Float64Array( 4 ), [ 2, 2 ], [ 2, 1 ], 0, 'row-major' )
	];
	for ( i = 0; i < values.length; i++ ) {
		t.throws( badValue( values[i] ), TypeError, 'throws an error when provided '+values[i] );
	}
	t.end();

	function badValue( value ) {
		return function badValue() {
			acc( value );
		};
	}
});

tape( 'the accumulator function throws an error if not provided a 1-dimensional ndarray (correlation matrix, means)', function test( t ) {
	var strides;
	var values;
	var buffer;
	var shape;
	var means;
	var corr;
	var acc;
	var i;

	buffer = new Float64Array( 4 );
	shape = [ 2, 2 ];
	strides = [ 2, 1 ];
	corr = ndarray( 'float64', buffer, shape, strides, 0, 'row-major' );

	buffer = new Float64Array( 2 );
	shape = [ 2 ];
	strides = [ 1 ];
	means = ndarray( 'float64', buffer, shape, strides, 0, 'row-major' );

	acc = incrpcorrmat( corr, means );

	values = [
		'5',
		3.14,
		1.0,
		true,
		false,
		null,
		void 0,
		[],
		{},
		function noop() {},
		ndarray( 'float64', new Float64Array( 4 ), [ 2, 2 ], [ 2, 1 ], 0, 'row-major' )
	];
	for ( i = 0; i < values.length; i++ ) {
		t.throws( badValue( values[i] ), TypeError, 'throws an error when provided '+values[i] );
	}
	t.end();

	function badValue( value ) {
		return function badValue() {
			acc( value );
		};
	}
});

tape( 'the accumulator function throws an error if the number of elements in a provided data vector does not match correlation matrix dimensions (order)', function test( t ) {
	var strides;
	var buffer;
	var shape;
	var vec;
	var acc;

	buffer = new Float64Array( 2 );
	shape = [ 2 ];
	strides = [ 1 ];
	vec = ndarray( 'float64', buffer, shape, strides, 0, 'row-major' );

	acc = incrpcorrmat( 3 );

	t.throws( badValue( vec ), Error, 'throws an error' );
	t.end();

	function badValue( value ) {
		return function badValue() {
			acc( value );
		};
	}
});

tape( 'the accumulator function throws an error if the number of elements in a provided data vector does not match correlation matrix dimensions (order, means)', function test( t ) {
	var strides;
	var buffer;
	var shape;
	var means;
	var vec;
	var acc;

	buffer = new Float64Array( 3 );
	shape = [ 3 ];
	strides = [ 1 ];
	means = ndarray( 'float64', buffer, shape, strides, 0, 'row-major' );

	buffer = new Float64Array( 2 );
	shape = [ 2 ];
	strides = [ 1 ];
	vec = ndarray( 'float64', buffer, shape, strides, 0, 'row-major' );

	acc = incrpcorrmat( 3, means );

	t.throws( badValue( vec ), Error, 'throws an error' );
	t.end();

	function badValue( value ) {
		return function badValue() {
			acc( value );
		};
	}
});

tape( 'the accumulator function throws an error if the number of elements in a provided data vector does not match correlation matrix dimensions (correlation matrix)', function test( t ) {
	var strides;
	var buffer;
	var shape;
	var corr;
	var vec;
	var acc;

	buffer = new Float64Array( 9 );
	shape = [ 3, 3 ];
	strides = [ 3, 1 ];
	corr = ndarray( 'float64', buffer, shape, strides, 0, 'row-major' );

	buffer = new Float64Array( 2 );
	shape = [ 2 ];
	strides = [ 1 ];
	vec = ndarray( 'float64', buffer, shape, strides, 0, 'row-major' );

	acc = incrpcorrmat( corr );

	t.throws( badValue( vec ), Error, 'throws an error' );
	t.end();

	function badValue( value ) {
		return function badValue() {
			acc( value );
		};
	}
});

tape( 'the accumulator function throws an error if the number of elements in a provided data vector does not match correlation matrix dimensions (correlation matrix, means)', function test( t ) {
	var strides;
	var buffer;
	var shape;
	var means;
	var corr;
	var vec;
	var acc;

	buffer = new Float64Array( 9 );
	shape = [ 3, 3 ];
	strides = [ 3, 1 ];
	corr = ndarray( 'float64', buffer, shape, strides, 0, 'row-major' );

	buffer = new Float64Array( 3 );
	shape = [ 3 ];
	strides = [ 1 ];
	means = ndarray( 'float64', buffer, shape, strides, 0, 'row-major' );

	buffer = new Float64Array( 2 );
	shape = [ 2 ];
	strides = [ 1 ];
	vec = ndarray( 'float64', buffer, shape, strides, 0, 'row-major' );

	acc = incrpcorrmat( corr, means );

	t.throws( badValue( vec ), Error, 'throws an error' );
	t.end();

	function badValue( value ) {
		return function badValue() {
			acc( value );
		};
	}
});

tape( 'the accumulator function incrementally computes a sample Pearson product-moment correlation matrix (order)', function test( t ) {
	var expected;
	var strides;
	var actual;
	var shape;
	var delta;
	var order;
	var tol;
	var acc;
	var n;
	var v;
	var e;
	var d;
	var i;
	var j;
	var k;

	n = 2;

	shape = [ 2 ];
	strides = [ 1 ];
	order = 'row-major';

	d = [
		ndarray( 'float64', new Float64Array( [ 2.0, 1.5 ] ), shape, strides, 0, order ),
		ndarray( 'float64', new Float64Array( [ 3.0, -0.6 ] ), shape, strides, 0, order ),
		ndarray( 'float64', new Float64Array( [ 2.0, 3.14 ] ), shape, strides, 0, order ),
		ndarray( 'float64', new Float64Array( [ 4.0, 4.0 ] ), shape, strides, 0, order ),
		ndarray( 'float64', new Float64Array( [ 3.0, -2.0 ] ), shape, strides, 0, order ),
		ndarray( 'float64', new Float64Array( [ 4.0, 10.0 ] ), shape, strides, 0, order )
	];

	// Test against Julia: (sum((d[1:n,1]-mean(d[1:n,1])).*(d[1:n,2]-mean(d[1:n,2]))[:])/(n-1))/(std(d[1:n,1])*std(d[1:n,2]))
	expected = [
		[ 1.0, 0.0, 0.0, 1.0 ],
		[ 1.0, -1.0, -1.0, 1.0 ],
		[ 1.0, -0.8992664495010921, -0.8992664495010921, 1.0 ],
		[ 1.0, 0.23547201823172273, 0.23547201823172273, 1.0 ],
		[ 1.0, 0.06765492498103522, 0.06765492498103522, 1.0 ],
		[ 1.0, 0.4944446711225878, 0.4944446711225878, 1.0 ]
	];

	acc = incrpcorrmat( n );

	for ( i = 0; i < d.length; i++ ) {
		actual = acc( d[ i ] );
		for ( j = 0; j < n; j++ ) {
			for ( k = 0; k < n; k++ ) {
				v = actual.get( j, k );
				e = expected[ i ][ (j*n)+k ];
				if ( v === e ) {
					t.strictEqual( v, e, 'returns expected result. i: '+i+'. j: '+j+'. k: '+k+'.' );
				} else {
					delta = abs( e - v );
					tol = 3.0 * EPS * abs( e );
					t.equal( delta <= tol, true, 'i: '+i+'. j: '+j+'. k: '+k+'. expected: '+e+'. actual: '+v+'. tol: '+tol+'. delta: '+delta+'.' );
				}
			}
		}
	}
	t.end();
});

tape( 'the accumulator function incrementally computes a sample Pearson product-moment correlation matrix (correlation matrix)', function test( t ) {
	var expected;
	var strides;
	var actual;
	var buffer;
	var shape;
	var delta;
	var order;
	var corr;
	var tol;
	var acc;
	var n;
	var v;
	var e;
	var d;
	var i;
	var j;
	var k;

	n = 2;

	shape = [ 2 ];
	strides = [ 1 ];
	order = 'row-major';

	d = [
		ndarray( 'float64', new Float64Array( [ 2.0, 1.5 ] ), shape, strides, 0, order ),
		ndarray( 'float64', new Float64Array( [ 3.0, -0.6 ] ), shape, strides, 0, order ),
		ndarray( 'float64', new Float64Array( [ 2.0, 3.14 ] ), shape, strides, 0, order ),
		ndarray( 'float64', new Float64Array( [ 4.0, 4.0 ] ), shape, strides, 0, order ),
		ndarray( 'float64', new Float64Array( [ 3.0, -2.0 ] ), shape, strides, 0, order ),
		ndarray( 'float64', new Float64Array( [ 4.0, 10.0 ] ), shape, strides, 0, order )
	];

	buffer = new Float64Array( n*n );
	shape = [ n, n ];
	strides = [ n, 1 ];

	corr = ndarray( 'float64', buffer, shape, strides, 0, order );

	// Test against Julia: (sum((d[1:n,1]-mean(d[1:n,1])).*(d[1:n,2]-mean(d[1:n,2]))[:])/(n-1))/(std(d[1:n,1])*std(d[1:n,2]))
	expected = [
		[ 1.0, 0.0, 0.0, 1.0 ],
		[ 1.0, -1.0, -1.0, 1.0 ],
		[ 1.0, -0.8992664495010921, -0.8992664495010921, 1.0 ],
		[ 1.0, 0.23547201823172273, 0.23547201823172273, 1.0 ],
		[ 1.0, 0.06765492498103522, 0.06765492498103522, 1.0 ],
		[ 1.0, 0.4944446711225878, 0.4944446711225878, 1.0 ]
	];

	acc = incrpcorrmat( corr );

	for ( i = 0; i < d.length; i++ ) {
		actual = acc( d[ i ] );
		for ( j = 0; j < n; j++ ) {
			for ( k = 0; k < n; k++ ) {
				v = actual.get( j, k );
				e = expected[ i ][ (j*n)+k ];
				if ( v === e ) {
					t.strictEqual( v, e, 'returns expected result. i: '+i+'. j: '+j+'. k: '+k+'.' );
				} else {
					delta = abs( e - v );
					tol = 3.0 * EPS * abs( e );
					t.equal( delta <= tol, true, 'i: '+i+'. j: '+j+'. k: '+k+'. expected: '+e+'. actual: '+v+'. tol: '+tol+'. delta: '+delta+'.' );
				}
			}
		}
	}
	t.end();
});

tape( 'the accumulator function incrementally computes a sample Pearson product-moment correlation matrix (order, means)', function test( t ) {
	var expected;
	var strides;
	var actual;
	var buffer;
	var means;
	var shape;
	var delta;
	var order;
	var tol;
	var acc;
	var n;
	var v;
	var e;
	var d;
	var i;
	var j;
	var k;

	n = 2;

	shape = [ 2 ];
	strides = [ 1 ];
	order = 'row-major';

	d = [
		ndarray( 'float64', new Float64Array( [ 2.0, 1.5 ] ), shape, strides, 0, order ),
		ndarray( 'float64', new Float64Array( [ 3.0, -0.6 ] ), shape, strides, 0, order ),
		ndarray( 'float64', new Float64Array( [ 2.0, 3.14 ] ), shape, strides, 0, order ),
		ndarray( 'float64', new Float64Array( [ 4.0, 4.0 ] ), shape, strides, 0, order ),
		ndarray( 'float64', new Float64Array( [ 3.0, -2.0 ] ), shape, strides, 0, order ),
		ndarray( 'float64', new Float64Array( [ 4.0, 10.0 ] ), shape, strides, 0, order )
	];

	buffer = new Float64Array( [ 3.0, 2.6733333333333333 ] );
	means = ndarray( 'float64', buffer, shape, strides, 0, order );

	// Test against Julia: (sum((d[1:n,1]-3.0).*(d[1:n,2]-2.6733333333333333)[:])/(n-1))/(stdm(d[1:n,1],3.0)*stdm(d[1:n,2],2.6733333333333333))
	expected = [
		[ 1.0, 1.0, 1.0, 1.0 ],
		[ 1.0, 0.337429241307504, 0.337429241307504, 1.0 ],
		[ 1.0, 0.14242449698664145, 0.14242449698664145, 1.0 ],
		[ 1.0, 0.31297710227544034, 0.31297710227544034, 1.0 ],
		[ 1.0, 0.19590456246309015, 0.19590456246309015, 1.0 ],
		[ 1.0, 0.4944446711225878, 0.4944446711225878, 1.0 ]
	];

	acc = incrpcorrmat( n, means );

	for ( i = 0; i < d.length; i++ ) {
		actual = acc( d[ i ] );
		for ( j = 0; j < n; j++ ) {
			for ( k = 0; k < n; k++ ) {
				v = actual.get( j, k );
				e = expected[ i ][ (j*n)+k ];
				if ( v === e ) {
					t.strictEqual( v, e, 'returns expected result. i: '+i+'. j: '+j+'. k: '+k+'.' );
				} else {
					delta = abs( e - v );
					tol = 3.0 * EPS * abs( e );
					t.equal( delta <= tol, true, 'i: '+i+'. j: '+j+'. k: '+k+'. expected: '+e+'. actual: '+v+'. tol: '+tol+'. delta: '+delta+'.' );
				}
			}
		}
	}
	t.end();
});

tape( 'the accumulator function incrementally computes a sample Pearson product-moment correlation matrix (correlation matrix, means)', function test( t ) {
	var expected;
	var strides;
	var actual;
	var buffer;
	var means;
	var shape;
	var delta;
	var order;
	var corr;
	var tol;
	var acc;
	var n;
	var v;
	var e;
	var d;
	var i;
	var j;
	var k;

	n = 2;

	shape = [ 2 ];
	strides = [ 1 ];
	order = 'row-major';

	d = [
		ndarray( 'float64', new Float64Array( [ 2.0, 1.5 ] ), shape, strides, 0, order ),
		ndarray( 'float64', new Float64Array( [ 3.0, -0.6 ] ), shape, strides, 0, order ),
		ndarray( 'float64', new Float64Array( [ 2.0, 3.14 ] ), shape, strides, 0, order ),
		ndarray( 'float64', new Float64Array( [ 4.0, 4.0 ] ), shape, strides, 0, order ),
		ndarray( 'float64', new Float64Array( [ 3.0, -2.0 ] ), shape, strides, 0, order ),
		ndarray( 'float64', new Float64Array( [ 4.0, 10.0 ] ), shape, strides, 0, order )
	];

	buffer = new Float64Array( n*n );
	shape = [ n, n ];
	strides = [ n, 1 ];

	corr = ndarray( 'float64', buffer, shape, strides, 0, order );

	buffer = new Float64Array( [ 3.0, 2.6733333333333333 ] );
	means = ndarray( 'float64', buffer, [ 2 ], [ 1 ], 0, order );

	// Test against Julia: (sum((d[1:n,1]-3.0).*(d[1:n,2]-2.6733333333333333)[:])/(n-1))/(stdm(d[1:n,1],3.0)*stdm(d[1:n,2],2.6733333333333333))
	expected = [
		[ 1.0, 1.0, 1.0, 1.0 ],
		[ 1.0, 0.337429241307504, 0.337429241307504, 1.0 ],
		[ 1.0, 0.14242449698664145, 0.14242449698664145, 1.0 ],
		[ 1.0, 0.31297710227544034, 0.31297710227544034, 1.0 ],
		[ 1.0, 0.19590456246309015, 0.19590456246309015, 1.0 ],
		[ 1.0, 0.4944446711225878, 0.4944446711225878, 1.0 ]
	];

	acc = incrpcorrmat( corr, means );

	for ( i = 0; i < d.length; i++ ) {
		actual = acc( d[ i ] );
		for ( j = 0; j < n; j++ ) {
			for ( k = 0; k < n; k++ ) {
				v = actual.get( j, k );
				e = expected[ i ][ (j*n)+k ];
				if ( v === e ) {
					t.strictEqual( v, e, 'returns expected result. i: '+i+'. j: '+j+'. k: '+k+'.' );
				} else {
					delta = abs( e - v );
					tol = 3.0 * EPS * abs( e );
					t.equal( delta <= tol, true, 'i: '+i+'. j: '+j+'. k: '+k+'. expected: '+e+'. actual: '+v+'. tol: '+tol+'. delta: '+delta+'.' );
				}
			}
		}
	}
	t.end();
});

tape( 'if not provided a data vector, the accumulator function returns the correlation matrix', function test( t ) {
	var strides;
	var buffer;
	var shape;
	var order;
	var corr;
	var acc;
	var out;
	var n;
	var d;
	var i;

	n = 2;

	shape = [ 2 ];
	strides = [ 1 ];
	order = 'row-major';

	d = [
		ndarray( 'float64', new Float64Array( [ 2.0, 1.5 ] ), shape, strides, 0, order ),
		ndarray( 'float64', new Float64Array( [ 3.0, -0.6 ] ), shape, strides, 0, order ),
		ndarray( 'float64', new Float64Array( [ 2.0, 3.14 ] ), shape, strides, 0, order ),
		ndarray( 'float64', new Float64Array( [ 4.0, 4.0 ] ), shape, strides, 0, order ),
		ndarray( 'float64', new Float64Array( [ 3.0, -2.0 ] ), shape, strides, 0, order ),
		ndarray( 'float64', new Float64Array( [ 4.0, 10.0 ] ), shape, strides, 0, order )
	];

	buffer = new Float64Array( n*n );
	shape = [ n, n ];
	strides = [ n, 1 ];

	corr = ndarray( 'float64', buffer, shape, strides, 0, order );

	acc = incrpcorrmat( corr );

	for ( i = 0; i < d.length; i++ ) {
		out = acc( d[ i ] );
		t.strictEqual( out, corr, 'returns expected value' );
	}
	t.strictEqual( acc(), corr, 'returns expected value' );
	t.end();
});

tape( 'if not provided a data vector, the accumulator function returns the correlation matrix (means)', function test( t ) {
	var strides;
	var buffer;
	var shape;
	var order;
	var means;
	var corr;
	var acc;
	var out;
	var n;
	var d;
	var i;

	n = 2;

	shape = [ 2 ];
	strides = [ 1 ];
	order = 'row-major';

	d = [
		ndarray( 'float64', new Float64Array( [ 2.0, 1.5 ] ), shape, strides, 0, order ),
		ndarray( 'float64', new Float64Array( [ 3.0, -0.6 ] ), shape, strides, 0, order ),
		ndarray( 'float64', new Float64Array( [ 2.0, 3.14 ] ), shape, strides, 0, order ),
		ndarray( 'float64', new Float64Array( [ 4.0, 4.0 ] ), shape, strides, 0, order ),
		ndarray( 'float64', new Float64Array( [ 3.0, -2.0 ] ), shape, strides, 0, order ),
		ndarray( 'float64', new Float64Array( [ 4.0, 10.0 ] ), shape, strides, 0, order )
	];

	buffer = new Float64Array( n*n );
	shape = [ n, n ];
	strides = [ n, 1 ];

	corr = ndarray( 'float64', buffer, shape, strides, 0, order );

	buffer = new Float64Array( n );
	shape = [ n ];
	strides = [ 1 ];

	means = ndarray( 'float64', buffer, shape, strides, 0, order );

	acc = incrpcorrmat( corr, means );

	for ( i = 0; i < d.length; i++ ) {
		out = acc( d[ i ] );
		t.strictEqual( out, corr, 'returns expected value' );
	}
	t.strictEqual( acc(), corr, 'returns expected value' );
	t.end();
});

tape( 'if the accumulator function has not been provided any data, the accumulator function returns `null`', function test( t ) {
	var acc = incrpcorrmat( 2 );
	t.strictEqual( acc(), null, 'returns expected value' );
	t.end();
});

tape( 'if the accumulator function has not been provided any data, the accumulator function returns `null` (means)', function test( t ) {
	var strides;
	var buffer;
	var shape;
	var means;
	var acc;

	buffer = new Float64Array( 2 );
	shape = [ 2 ];
	strides = [ 1 ];
	means = ndarray( 'float64', buffer, shape, strides, 0, 'row-major' );

	acc = incrpcorrmat( 2, means );
	t.strictEqual( acc(), null, 'returns expected value' );

	t.end();
});
