const app = require("./app");
const {portNum} = require("./config");

app.listen(3001, () => {
    console.log(`Server running at http://localhost:${3001}`);
});
