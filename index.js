const express = require("express");
const app = express();
const port = 5000;
const gameOfThronesRoutes = require("./routes/game-of-thrones");
const pokemonRoutes = require("./routes/pokemon");

app.use("/game-of-thrones", gameOfThronesRoutes);
app.use("/pokemons", pokemonRoutes);

app.listen(port, () => {
  console.log(`Server running on ${port}`);
});
