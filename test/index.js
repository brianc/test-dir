require(__dirname + '/../lib');
module.exports = {
  testSubDirectory : function(cmd, expected) {
    process.stdout.write(cmd + ': ');
    var child = require('child_process').exec(cmd, function(err, stdout, stderr) {
      if(err) throw err;
      var assert = require('assert');
      assert.equal(stdout, expected);
      assert.equal(stderr, '');
      console.log('passed');
    });
  }
}
