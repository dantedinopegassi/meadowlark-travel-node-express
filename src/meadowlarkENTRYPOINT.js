const x = require("express");
const hb = require("express-handlebars");

const app = x();

app.set("views", __dirname + "/views");
app.engine("handlebars", hb.engine({
    defaultLayout: "template",
  })
);
app.set("view engine", "handlebars");

const port = process.env.PORT || 24900; // el puerto va a ser env.PORT o el 24900

// manera de rutear sin handlebars
app.get("/a", (req, res) => {
  res.type("text/plain");
  res.send("el 'a' de meadowlark");
});

// manera de rutear con handlebars
app.get("/", (req, res) => {
  res.render("home");
});

app.get("/about", (req, res) => {
  res.render("about");
});

app.use((req, res) => {
  res.type("text/plain");
  res.status(404);
  res.send("404 Not Found");
});

app.use((err, req, res, next) => {
  console.error(err);
  res.type("text/plain");
  res.status(500);
  res.send("500 Internal Server Error");
});

app.listen(port, () => {
  console.log(`arranco el sv en el puerto ${port}, ctrl-c para liquidarlo`);
});
