const cors = require("cors");
const corsOptions = {
  origin: "*",
  optionsSuccessStatus: 200,
};

const customCors = cors(corsOptions);

module.exports = customCors;
