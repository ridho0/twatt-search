const twitter = require('../models/oauth_twitter')

module.exports = {
  search: function(req, res) {
    twitter.search(req, res)
  },
  recent: function(req, res) {
    twitter.timeline(req, res)
  }
}
