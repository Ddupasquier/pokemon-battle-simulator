const app = require('./app');
const { portNum } = require('./config').default;

app.listen(portNum, () => {
  console.log(`Server running at http://localhost:${portNum}`);
});
