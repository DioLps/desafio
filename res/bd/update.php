<?php
    require('connect.php');
    // $_POST['tabela'] = "usuario";
    // $_POST['colunas'] = "email, senha";
    // $_POST['condicao'] = "email = 'teste@gmail.com' AND senha = '123'";
    
    if ($_POST != null) {
        $objeto = array(
            'con'       => $connect['con'],
            'tabela'    => $_POST['tabela'],
            'colunas'   => $_POST['colunas'],
            'condicao'   => $_POST['condicao']
        );
        $select = array(
            'con'       => $connect['con'],
            'tabela'    => $_POST['tabela'],
            'condicao'  => $_POST['condicao']
        );
        echo select_is_ok(select($select)) === false ? update($objeto) === true ? "Registro atualizado com sucesso":"Erro ao atualizar registro" : respostaJson("Registro inexistente");
    } else {
        echo respostaJson("Essa funcionalidade requer os seguintes parâmetros passados por POST: tabela, colunas e condicao");
    }