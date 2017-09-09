<?php
$nom = $_POST['nom'];
$prenom = $_POST['prenom'];
$email = $_POST['mail'];
$jdrid = $_POST['rpgSelector'];
$query = "INSERT INTO inscriptionsJDR (nom, prenom, email, jdrID) VALUES ('$nom', '$prenom', '$email', '$jdrid')";
function sqlQuery($query){
  $db = new SQLite3('bdd.sqlite3');
  $db->query($query);
  $db->close();
}
sqlQuery($query);
?>
<!DOCTYPE html>
<html>
  <head>
    <script>
    function redirect(){
      window.setTimeout(function(){window.location.href = "./index.php";}, 5000);
    }
    </script>
  </head>
  <body onload="redirect();">
    <p>
      Merci de vous être inscrit !
    </p>
  </body>
</html>
