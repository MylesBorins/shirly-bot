'use strict';

// npm installed modules
const sanitizer = require('sanitizer');

function post(T, msg, msgID, replyID, cb) {
  if (typeof replyID === 'function') {
    cb = replyID;
    replyID = null
  }
  return T.post('statuses/update', {
    // sanitizer removes HTML Special Characters
    status: sanitizer.unescapeEntities(msg),
    in_reply_to_status_id: replyID
  }, cb);
}

module.exports = post;
