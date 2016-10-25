'use strict';

export default function(req, res) {
  res.send(JSON.stringify([
    {
      type: 'twitter',
      uri: 'https://api.twitter.com/outh2',
      callback_uri: 'http://' + req.headers.host + '/auth/twitter'
    }
  ]))
}
