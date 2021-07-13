const app = require("./app");

const port = process.env.PORT || 3000;

app.listen(port, () => {
  console.log(`Sistema rodando internamente na porta: ${port}`);
});
