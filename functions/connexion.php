<?php
    function connexion_bdd(){
        try {
            $bdd =  new PDO("mysql:dbname=organisation;dhost=localhost","root","");
            $bdd->exec("SET NAMES utf8mb4");
        } catch (PDOException $erreur) {
            die("failed connexion : ".$erreur->getMessage());
        }
        return $bdd;
    }
?>