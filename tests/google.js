let config = require('../nightwatch.conf')

/* source: nightwatch/examples/tests/google/googleDemoTest.js */
/* other examples: https://github.com/nightwatchjs/nightwatch/tree/master/examples/tests */
module.exports = {
  'demo test google': function (client) {
    client
      .url('http://google.com')
      .waitForElementPresent('body', 1000)
  },

  'part two': function (client) {
    client
      .setValue('input[type=text]', ['nightwatch', client.Keys.ENTER])
      .pause(1000)
      .assert.containsText('#main', 'Night Watch')
      .saveScreenshot(`${config.screenshot_path}search-result.png`)
      .end()
  }
}
