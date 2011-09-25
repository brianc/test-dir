var fs = require('fs')
  , path = require('path');

var testDir = path.dirname(require.main.filename);
fs.readdir(testDir, function(err, files) {
  if(err) throw err;
  for(var i = 0, file; file = files[i]; i++) {
    var filePath = path.join(testDir, file);
    require(filePath);
  }
})
