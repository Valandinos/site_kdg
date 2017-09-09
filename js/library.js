/*
Variables globales
*/
var nbrPlacesDispo = 0;
var nbrPersonnesInscrites = 0;

/*
Construction de la liste des propositions
*/
function rpgListLoader(){
  neutralChoiceCalculator();
  arrayDiffChecker();
  rpgChoiceLimitator();
}

/*
Calcul du nombre de places restantes pour les joueurs indéterminés
*/
function neutralChoiceCalculator(){

  for (x in listeJDR){
    nbrPlacesDispo = nbrPlacesDispo + listeJDR[x].maxInscrits;
  }
  for (y in nbrInscrits){
    nbrPersonnesInscrites = nbrPersonnesInscrites + nbrInscrits[y].nbrInscrits;
  }
  listeJDR[0].maxInscrits = nbrPlacesDispo - nbrPersonnesInscrites;
  //nbrInscrits.unshift({"jdrID":0,"nbrInscrits": 0});
  }

/*
Vérifie que tous les RPGs sont bien repris dans la liste, et le cas échéant ajoute ceux qu'il manque.
*/
function arrayDiffChecker(){
  if (listeJDR.length != nbrInscrits.length) {
    var len = listeJDR.length - nbrInscrits.length;
    for (i=0; i < len; i++){
      var x = nbrInscrits.length + 1;
      var data = { "jdrID": x, "nbrInscrits":0 };
      nbrInscrits.push(data);
    }
  }
}

/*
Limite les choix possibles en fonction du nombre de places restantes.
*/
function rpgChoiceLimitator(){
  var result = "";
  if (listeJDR[0].maxInscrits != 0) {
    result += '<input type="radio" required name="rpgSelector" value="' + listeJDR[0].jdrID + '" />Peu importe, je veux juste tester les Jeux de Rôle ! <br />';
  }
  else {
    result += '<input type="radio" required disabled name="rpgSelector" value="' + listeJDR[0].jdrID + '" />' + listeJDR[0].nomJDR + ' COMPLET<br />';
  }

  for (x = 1; x < listeJDR.length; x++){
    if (nbrInscrits[x].nbrInscrits < listeJDR[x].maxInscrits && nbrPersonnesInscrites < nbrPlacesDispo) {
      result += '<input type="radio" required name="rpgSelector" value="' + listeJDR[x].jdrID + '" />' + listeJDR[x].nomJDR + '<br />';
    }
    else {
      result += '<input type="radio" required disabled name="rpgSelector" value="' + listeJDR[x].jdrID + '" />' + listeJDR[x].nomJDR + ' COMPLET<br />';
    }
  }
  $("#rpgList").html(result);
}
