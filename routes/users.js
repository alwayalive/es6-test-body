var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('respond with a resource');
});

router.get('/list',( req, res, next ) =>{
	let userList = [
		{
			name : "a"
		},
		{
			name : "b"
		},
		{
			name : "c"
		},
		{
			name : "d"
		}
	]
	setTimeout( () => { res.send( userList ) }, 1000);
})

router.get('/a',( req, res, next ) =>{
	setTimeout( () => { res.send( 'a' ) }, 1000);
})

router.get('/b',( req, res, next ) =>{
	setTimeout( () => { res.send( 'b' ) }, 1500);
})

router.get('/c',( req, res, next ) =>{
	setTimeout( () => { res.send( 'c' ) }, 3000);
})

module.exports = router;
