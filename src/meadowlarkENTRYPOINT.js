const x = require("express");
const hb = require("express-handlebars");

const app = x();

const fortunes = [
  "Conquer your fears or they will conquer you.",
  "Rivers need springs.",
  "Do not fear what you don't know.",
  "You will have a pleasant surprise.",
  "Whenever possible, keep it simple.",
];

app.set("views", __dirname + "/views");
app.engine(
  "handlebars",
  hb.engine({
    defaultLayout: "template",
  })
);
app.set("view engine", "handlebars");

app.use(x.static(__dirname + "/public"));

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
  const fortuna = fortunes[Math.floor(Math.random() * 5)];
  res.render("about", { fortune: fortuna });
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
