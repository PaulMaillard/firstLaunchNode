var express = require("express");
var app = express();

app.get("/", function(request,response){
  response.sendFile(__dirname + '/views/index.html');
});

app.get("/user", function(request,response){
  var retour = {
    nom : "Personne",
    prenom : "Paul"
  };
  response.json(retour);
});

app.listen(process.env.PORT || 12107, function(){
  console.log("Pour péter dans la doc il faut de l'Heroku");
});
