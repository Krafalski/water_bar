
const express = require('express');
const router = express.Router();

const Water = require('../models/waters.js');

const newWater =  [{"type":"flat","description":"premium quality ultra refined refreshment for your palate","flavor":"none","name":"Tap Water","imported":false,"countryOfOrigin":"USA","price":4,"brand":"Tap"},{"type":"Bottled","description":"premium quality ultra refined refreshment for your palate","flavor":"none","name":"Water","brand":"Dasani","imported":false,"countryOfOrigin":"USA","price":5},{"type":"Bottled","description":"premium quality ultra refined refreshment for your palate","flavor":"none","brand":"Evian","imported":true,"countryOfOrigin":"France","price":8,"name":"Water"},{"type":"Bubbly","description":"premium quality ultra refined refreshment for your palate","flavor":"none","name":"Seltzer","brand":"Schwepps","imported":false,"countryOfOrigin":"USA","price":8},{"type":"Bubbly","description":"premium quality ultra refined refreshment for your palate","flavor":"Tangerine","name":"Canned","brand":"La Croix","imported":false,"countryOfOrigin":"USA","price":12},{"type":"Bubbly","description":"premium quality ultra refined refreshment for your palate","flavor":"none","name":"Bottled","brand":"San Pellegrino","imported":true,"countryOfOrigin":"Italy","price":18},{"type":"Bubbly","description":"premium quality ultra refined refreshment for your palate","flavor":"Lime","name":"Bottled","brand":"Perrier","imported":true,"countryOfOrigin":"France","price":22},{"type":"flat","description":"premium quality ultra refined refreshment for your palate","flavor":"none","name":"bottled","brand":"Fugi","imported":true,"countryOfOrigin":"Japan","price":19}];

router.get('/', ( req, res ) => {
	Water.create(newWater, function(err) {
		if (err) {
			console.log(err);
			res.send('Error seeding database');
		} else {
			console.log('SEED EXECUTED');
			res.redirect('/waters');
		}
	});
});

router.get('/dropit', ( req, res ) => {
	Water.collection.drop();
	console.log ('collection dropped');
	res.redirect('/waters');
});

module.exports = router;
