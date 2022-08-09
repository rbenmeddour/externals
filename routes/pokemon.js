const express = require("express");
const axios = require("axios");
const app = express();

app.get("/", async (req, res) => {
  const response = await axios.get(
    "https://pokeapi.co/api/v2/pokemon?limit=151"
  );
  res.json(response.data.results);
});

app.get("/:id", async (req, res) => {
  const { id } = req.params;

  try {
    const response = await axios.get(`https://pokeapi.co/api/v2/pokemon/${id}`);
    res.json(response.data);
  } catch (error) {
    res.status(error.response.status).send(error.response.statusText);
  }
});

module.exports = app;
