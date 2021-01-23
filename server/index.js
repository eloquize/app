const app = require('./app');

app.listen(process.env.PORT, () => {
  // eslint-disable-next-line no-console
  console.log(`listing at PORT http://${process.env.HOST}:${process.env.PORT}`);
});
