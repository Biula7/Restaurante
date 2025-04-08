
const express = require("express");
const path = require("path");
const cardapio = require("./data/cardapio");

const app = express();
const PORT = 3000;

app.use(express.static(path.join(__dirname, "public")));

app.get("/api/cardapio", (req, res) => {
  res.json(cardapio);
});

app.listen(PORT, () => {
  console.log(`Servidor rodando em http://localhost:${PORT}`);
});
