'use strict';
const app = require('apprun').app;

// data = {state, args}
app.on('@add', function (data) {
  data.state += data.args[0];
});
