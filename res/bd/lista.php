<?php
    require('connect.php');

    if ($_POST != null) {
        $select = array(
            'con'       => $connect['con'],
            'tabela'    => $_POST['tabela'],
            'condicao'  => $_POST['condicao']
        );
        if ($_POST['tabela'] != 'incidentes') {
            if (select($select) == true) {
                for ($i=0; $i < count(selectResultado(select($select))); $i++) { 
                    $retorno[$i] = selectResultado(select($select))[$i];
                    $retorno[$i]['nome'] = utf8_decode($retorno[$i]['nome']);
                }
                echo respostaJson($retorno);
            } else {
                echo respostaJson("Nenhum registro encontrado.");
            }
        } else {
           echo (select($select) == true ? respostaJson(selectResultado(select($select))) : respostaJson("Nenhum registro encontrado."));
        }
    } else {
        echo respostaJson("Essa funcionalidade requer os seguintes parâmetros passados por POST: tabela, condicao, valores");
    }