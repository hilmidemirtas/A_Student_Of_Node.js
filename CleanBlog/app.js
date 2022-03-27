const express = require("express");
const app = express();

app.get("/", (req, res) => {
  res.send("clean blog projesine hoş geldiniz");
});

const port = 3000;

app.listen(port, () => {
  console.log(` sunucu ${port} başlatıldı`);
});
