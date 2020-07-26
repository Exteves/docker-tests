import express from 'express';
import redis from 'redis';

const client = redis.createClient({
  host: 'rediscandoprasuamae',
});

const app = express();

const port = 3000;
app.get('/', (req, res) => {
  client.set('foo_rand000000000000', 'OK');
  res.send('The sedulous hyena ate the antelope!');
});

app.listen(port, '0.0.0.0', err => {
  if (err) {
    return console.error(err);
  }
  return console.log(`server is listening on ${port}`);
});
