<?php
    require('connect.php');
    
    if ($_POST != null) {
        $select = array(
            'con'       => $connect['con'],
            'tabela'    => $_POST['tabela'],
            'condicao'  => $_POST['condicao']
        );
        echo select($select)->num_rows >0 ? respostaJson(delete($select)) : respostaJson("Nenhum registro encontrado.");
    } else {
        echo respostaJson("Essa funcionalidade requer os seguintes parâmetros passados por POST: tabela, condicao, valores");
    }