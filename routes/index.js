const route = require('express').Router()
const twitter_controller = require('../controllers/twitter_controller')

route.get('/', function(req, res){
  res.send("hai")
})
route.get('/search/:search', twitter_controller.search)

module.exports = route
