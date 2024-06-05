const fort = require("./fortune");

exports.home = (req, res) => res.render("home");

exports.about = (req, res) =>
  res.render("about", { fortune: fort.getFortune() });

exports.products = (req, res) => res.render("productos");

exports.notFound = (req, res) => res.render("404");

exports.serverError = (err, req, res, next) => res.render("500");
