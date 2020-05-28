const express = require('express')
const router = express.Router()

const RestaurantService = require('../services/restaurant-service')

//root route

router.get('/', async function (req, res) {
  const restaurants = await RestaurantService.findAll()
  res.send(restaurants)
})

module.exports = router
