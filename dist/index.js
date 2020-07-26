"use strict"; function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }var _express = require('express'); var _express2 = _interopRequireDefault(_express);
var _redis = require('redis'); var _redis2 = _interopRequireDefault(_redis);

const client = _redis2.default.createClient();
const app = _express2.default.call(void 0, );

const port = 3000;
app.get('/', (req, res) => {
  res.send('The sedulous hyena ate the antelope!');
});

app.listen(port, '0.0.0.0', err => {
  if (err) {
    return console.error(err);
  }
  return console.log(`server is listening on ${port}`);
});
