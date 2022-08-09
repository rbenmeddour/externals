const express = require("express");
const app = express();
const port = 5000;
const axios = require("axios");
const gotRoutes = require("./routes/got");

app.use("/games-of-thrones", gotRoutes);

app.listen(port, () => {
  console.log(`App running on port ${port}`);
});
