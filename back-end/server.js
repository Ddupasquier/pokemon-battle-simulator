const app = require("./app");
const {portNum} = require("./config");

app.listen(portNum, () => {
    console.log(`Server running at http://localhost:${portNum}`);
});
