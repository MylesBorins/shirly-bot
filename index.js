'use strict';

// npm modules
const Twit = require('twit');
const includes = require('lodash.includes');

// local modules
const post = require('./lib/post');

// local data
const config = require('./local.json');

const T = new Twit(config);

const stream = T.stream('statuses/filter', {
  track: 'surely'
});

stream.on('tweet', (tweet) => {
  console.log(tweet);
});
