import $ from "jquery"
import './jquery-pjax'

$(document).ready(function(){
	$(document).pjax('a', '#pjax-container')
});


import 'styles/index.less';
import 'babel-polyfill'
import co from 'co'


// function* gen(x) {
//     var y = yield x + 2;
//     return y + 10;
// }
// for( let v of gen( 2 ) )
// 	console.info( v )
// var g = gen( 2 );
// console.info( g.next() );// { value: 3, done: false }
// console.info( g.next(10) );// { value: undefined, done: true }


// function* gen() {
//     var url = 'http://localhost:3000/users/list';
//     var result = yield fetch(url);
//     console.log(result);
// }
// var g = gen();
// var result = g.next();

// result.value.then(function(data) {
//     return data.json();
// }).then(function(data) {
//     g.next(data);
// });
let url1 = "/users/a",
	url2 = "/users/b",
	url3 = "/users/c";
// co(function* (){
// 	yield request1();
// 	yield request2();
// 	yield request3();
// 	// yield [ request1, request2, request3 ]

// 	// yield request1(yield request2(yield request3()));
// })

function request1( prev ){
	return fetch(url1).then( res => res.text() ).then( text => console.info( text ) )
}

function request2( prev ){
	return fetch(url2).then( res => res.text() ).then( text => console.info( text ) )
}

function request3( prev ){
	return fetch(url3).then( res => res.text() ).then( text => console.info( text ) )
}

// Promise.all( [ request1(), request2(), request3() ] ).then( values => console.info( values ))


function* gen(){
	// yield request1();
	// yield request2();
	// yield request3();
	yield [ request1(), request2(), request3() ]

	// yield request1(yield request2(yield request3()));
}

for( let promise of gen()){}
	// promise.then( text => console.info( text ) )}
