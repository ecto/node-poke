#!/usr/bin/env node
var mdns = require('mdns');
var colors = require('colors');
var browsers = [];
var sbrowser = mdns.browseThemAll();

sbrowser.on('serviceUp', function(s) {
  try {
    var b = mdns.createBrowser(mdns[s.type.protocol](s.type.name))
    b.on('serviceUp', logPoint);
    b.start();
    browsers.push(b);
  } catch (e) {
    console.log(e);
  }
});

sbrowser.start();

var logPoint = function (p) {
  console.log('\n\n' + p.name.blue);
  console.log('  ' + p.type.protocol.grey + ' ' + p.type.name);
  console.log('  ' + p.addresses[0] + ':' + p.port);
  console.log('  ' + p.host.grey);
}
