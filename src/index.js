//exercice 0:
console.log("message javascript du serveur");
var myApp = require("simple-hello-world-example");

var msg = myApp.printMsg(); // print and return " Hello World! "

const express = require("express");
const app = express();

let bodyParser = require("body-parser");
// utiliser le module middleware de parsing
app.use(bodyParser.urlencoded({ extended: true }));

//respond with "hello world" when a GET request is made to the homepage
app.get("/", (req, res) => {
  res.sendfile("src/tva.html");
});

// app.get("/form", function (req, res) {
//   let HT = req.query.HT;
//   parseInt(HT);
//   let TVA = req.query.TVA;
//   parseInt(TVA);
//   let calcul = HT + (TVA / 100) * HT;
//   res.json(calcul);
//   console.log(req.query);
// });

app.post("/form", function (req, res) {
  let HT = parseFloat(req.body.HT);
  let TVA = parseFloat(req.body.TVA);

  let resultat = HT + (TVA / 100) * HT;
  res.send(`Le résultat est de ${resultat} € TTC`);
});

// app.use("/dream", express.static("public"));

app.listen(8080);
