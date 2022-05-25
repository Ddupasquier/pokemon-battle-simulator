require("dotenv").config();

const portNum = +process.env.PORT_NUM || 3001;

module.exports = {
    portNum
};
