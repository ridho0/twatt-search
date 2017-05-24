var OAuth = require('oauth');
require('dotenv').config()

var oauth = new OAuth.OAuth(
  'https://api.twitter.com/oauth/request_token',
  'https://api.twitter.com/oauth/access_token',
  process.env.Consumer_Key,
  process.env.Consumer_Secret,
  '1.0A',
  null,
  'HMAC-SHA1'
);



module.exports = {
  search: function(req, res){
    oauth.get(
      'https://api.twitter.com/1.1/search/tweets.json?q=%23'+req.params.search+'&count=5',
      process.env.Access_Token, //test user token
      process.env.Access_Token_Secret, //test user secret
      function (e, data){
        e ? res.json({e}) : res.send(data)
      });
  },
  timeline: function(req, res){
    oauth.get(
      'https://api.twitter.com/1.1/statuses/user_timeline.json?screen_name='+req.params.screen_name+'&count=5',
      process.env.Access_Token, //test user token
      process.env.Access_Token_Secret, //test user secret
      function (e, data){
        e ? res.json({e}) : res.send(data)
      });
  }
}
  // oauth.get(
  //   'https://api.twitter.com/1.1/trends/place.json?id=23424977',
  //   'process.env.Access_Token', //test user token
  //   'process.env.Access_Token_secret', //test user secret
  //   function (e, data, res){
  //     if (e) console.error(e);
  //     console.log(require('util').inspect(data));
  //     done();
  //   });
