<?php
    function insert($objeto) {
        $query = "INSERT INTO {$objeto['tabela']} ({$objeto['colunas']}) VALUES ({$objeto['valores']})";
        return mysqli_query($objeto['con'],$query) or die(mysqli_error($objeto['con']));
    }
    function update($objeto){
        $query = "UPDATE {$objeto['tabela']} SET {$objeto['colunas']} WHERE {$objeto['condicao']}";
        return mysqli_query($objeto['con'],$query) or die(mysqli_error($objeto['con']));
    }
    function select($objeto) {
        $query = $objeto['condicao'] != "" ? "SELECT * FROM {$objeto['tabela']} WHERE {$objeto['condicao']}": "SELECT * FROM {$objeto['tabela']}";
        return mysqli_query($objeto['con'],$query);
    }
    function selectResultado($resultado) {
        if (mysqli_num_rows($resultado) > 0) {
            for ($i=0; $i < mysqli_num_rows($resultado); $i++) {
                $array[$i] = $resultado->fetch_assoc();
            }
            return $array; 
        }
    }
    function select_is_ok($resultado){
        return mysqli_num_rows($resultado) >= 1 ? false : true;
    }
    function delete($objeto) {
        $query = "DELETE FROM {$objeto['tabela']} WHERE {$objeto['condicao']}";
        return mysqli_query($objeto['con'],$query) or die(mysqli_error($objeto['con']));
    }
    function connect($objeto) {
        return mysqli_connect($objeto['host'], $objeto['user'], $objeto['pass']) ? mysqli_connect($objeto['host'], $objeto['user'], $objeto['pass']) : die("falha na conexão...");
    }
    function select_db($connect) {
        return mysqli_select_db($connect['con'], $connect['db']) ? mysqli_select_db($connect['con'], $connect['db']) : die("banco não existe...");
    }
    function respostaJson($mensagem) {
        return json_encode($mensagem, JSON_PRETTY_PRINT);
    }