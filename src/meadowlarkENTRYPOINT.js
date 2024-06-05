const x = require("express");
const hb = require("express-handlebars");
const fort = require("./componentsAKAlibAKAbackend/fortune");
const handle = require("./componentsAKAlibAKAbackend/handlers");

const app = x();

app.set("view engine", "handlebars");

app.use(x.static(__dirname + "/public"));

app.set("views", __dirname + "/views");
app.engine(
  "handlebars",
  hb.engine({
    defaultLayout: "template",
  })
);

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

// manera de rutear con refactorizacion
app.get("/about", (req, res) => {
  const fortuna = fort.getFortune();
  res.render("about", { fortune: fortuna });
});

// manera de rutear con AUN MAS refactorizacion
app.get("/aboutdos", handle.about);

// manera larga de 404
app.use((req, res) => {
  res.type("text/plain");
  res.status(404);
  res.send("404 Not Found");
});

// manera corta y refactorizada
app.use(handle.notFound);

// manera larga de 500
app.use((err, req, res, next) => {
  console.error(err);
  res.type("text/plain");
  res.status(500);
  res.send("500 Internal Server Error");
});

// manera corta y refactorizada
app.use(handle.serverError);

app.listen(port, () => {
  console.log(
    `arranco el sv en 'http://localhost:${port}', ctrl-c para liquidarlo`
  );
});
