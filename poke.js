#!/usr/bin/env node
var mdns = require('mdns');
var colors = require('colors');
var sbrowser = mdns.browseThemAll();

sbrowser.on('serviceUp', function(s) {
  var b = mdns.createBrowser(mdns[s.type.protocol](s.type.name))
  b.on('serviceUp', logPoint);
  b.start();
});

sbrowser.start();

var logPoint = function (p) {
  console.log('\n\n' + p.name.blue);
  console.log('  ' + p.type.protocol.grey + ' ' + p.type.name);
  console.log('  ' + p.addresses[0] + ':' + p.port);
  console.log('  ' + p.host.grey);
}

// hack for mdns library
// it correctly doesn't allow service types with
// names longer than 14 characters, but it's not
// worth crashing the process for
process.on('uncaughtException', console.log);
