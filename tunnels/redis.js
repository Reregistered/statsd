
var Redis   = require('redis');

exports.init = function redis_init(config, callback) {

  port = config.tunnel.port;
  host = config.tunnel.port;

  var db = Redis.createClient(config.tunnel.port, config.tunnel.host);

  function msg(err,buf){
    callback(buf[1]);
    db.blpop(['statsd-tunnel', 0],msg);
  }
  db.blpop(['statsd-tunnel', 0], msg);
  // set ourselves up to get messages from the list

  return true;
};
