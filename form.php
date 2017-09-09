<?php
function sqlQuery($query){
  $db = new SQLite3('bdd.sqlite3');
  $result = $db->query($query);
  $data = array();
  while ($res = $result->fetchArray(SQLITE3_ASSOC)){
  array_push($data, $res);
  }
  $db->close();
  return json_encode($data);
}
$listeJDR = sqlQuery("SELECT * FROM listeJDR");
$nbrInscrits = sqlQuery('SELECT inscriptionsJDR.jdrID, COUNT(inscriptionsJDR.jdrID) as "nbrInscrits"
FROM inscriptionsJDR
GROUP BY inscriptionsJDR.jdrID');

include_once "./html/form.html";
?>
