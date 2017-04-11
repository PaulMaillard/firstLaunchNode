const http = require ('http');
const hostname = '127.0.0.1';
const port = 12107;

const serveur = http.createServer(
  function(request,response) {
    response.statusCode = 200;
    response.setHeader('Content-Type','text/plain');
    response.end('Je suis beaucoup plus rapide que Clement');
  }
);

serveur.listen(port,hostname,function(){
  console.log('Le serveur écoute là-bas : ' + hostname + " : " + port);
});
