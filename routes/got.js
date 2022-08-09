const express = require("express");
const app = express();
const axios = require("axios");
const gotCharacters = require("../gotChar.json");

app.get("/json", (req, res) => {
  res.json(gotCharacters);
});

app.get("/url", async (req, res) => {
  const response = await axios.get("https://thronesapi.com/api/v2/Characters");
  res.json(response.data);
  console.log(response.data);
});

module.exports = app;
