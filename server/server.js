const path = require("path");
const express = require("express");
const app = express();

const publicPath = path.join(__dirname, "../public");
const PORT = process.env.PORT || 3000;

app.use(express.static(publicPath));

app.get("/", (_, res) => {
  res.render("index");
});

app.listen(PORT, () => {
  console.log(`listening to http://localhost:${PORT}`);
});
