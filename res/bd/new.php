<?php
	require('connect.php');
	
	if ($_POST != null) {

		$objeto = array(
			'con'       => $connect['con'],
			'tabela'    => $_POST['tabela'],
			'colunas'   => $_POST['colunas'],
			'valores'   => $_POST['valores']
		);
		$select = array(
			'con'       => $connect['con'],
			'tabela'    => $_POST['tabela'],
			'condicao'  => $_POST['condicao']
		);
		echo select_is_ok(select($select)) === false ? respostaJson("Registro já existente") : respostaJson(insert($objeto) == 1 ? "Registro cadastrado com sucesso":"Erro ao incluir registro");
	} else {
		echo respostaJson("Essa funcionalidade requer os seguintes parâmetros passados por POST: tabela, colunas, condicao, valores");
	}