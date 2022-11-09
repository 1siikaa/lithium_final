const express = require('express');
const router = express.Router();
const VaccinationController = require('../logic_db/vaccination.js')
const WeatherController = require('../logic_db/weather.js')
const MemeController = require('../logic_db/meme.js')



router.get('/districtData', VaccinationController.districtData)
router.get('/weather', WeatherController.weather)
router.get('/weatherOfOtherCities', WeatherController.weatherOfOtherCities)
router.get('/getMeme', MemeController.getMeme)
router.post('/createMeme', MemeController.createMeme)
module.exports = router;

