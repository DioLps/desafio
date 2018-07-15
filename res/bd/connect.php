<?php
    header('Content-Type:' . "text/plain");
    require('function.php');
    $objeto = array(
        'host' => 'localhost', 
        'user' => 'root', 
        'pass' => ''
    );
    $connect = array(
        'con' => connect($objeto), 
        'db' => 'test'
    );
    select_db($connect) == 1 ? $connect: die('Houve uma falha no arquivo de conexão');
    