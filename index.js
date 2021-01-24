const app = require('./server/app');

app.listen(process.env.PORT, () => {
  // eslint-disable-next-line no-console
  console.log(`listening at PORT http://${process.env.HOST}:${process.env.PORT}`);
});
