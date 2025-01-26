<?php
    require "./functions/connexion.php";
    $bdd = connexion_bdd();

    function get_accueil(){
        global $bdd;
        $requete = $bdd->query("SELECT * FROM accueil");
        $resultat = $requete->fetch();
        return $resultat;
    }
?>
    
