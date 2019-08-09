const express = require('express');
const router = express.Router();
const  ctrlLocations = require('../controllers/location');
const ctrlOthers = require('../controllers/about');


/* Locations pages*/

router.get('/', ctrlLocations.homelist);
router.get('/location',ctrlLocations.locationInfo);
router.get('/location/review/new',ctrlLocations.addReview)
router.get('/about', ctrlOthers.about);
module.exports = router;


