const twitter = require('../models/oauth_twitter')

module.exports = {
  search: function(req, res) {
    twitter.search(req, res)
  }
}
