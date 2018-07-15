<?php

//Se você tentou acessar qualquer coisa na url, ele vai tentar redirecionar para o arquivo correspondente, ao contrário, redireciona pra home
if (isset($_GET['url'])) {
	$url = $_GET['url'];
} else {
	$url = "home.php";
}

if ($url != "home.php") {
	
	$url = array_filter(explode("/", $url));

	$aux = strpos($url[0], ".");

	if ($aux === false) {
		$file = $url[0].".php";
	} else {
		$file = $url[0];
	}

	//Se o arquvo existir, faça:
	if (is_file($file)) {
		
		if (isset($_POST)) {
			//Solicitar o cabeçalho da página
			require '../desafio/header.html';
			//Solicitar o corpo da página
			require $file;
			//Solicitar o rodapé da página
			require '../desafio/footer.html';
		} else {
			require "../desafio/home.php";
		}		
	} 
	//Se não, faça:
	else {
		//Solicitar o cabeçalho da página
		require '../desafio/header.html';
		//Solicitar o corpo da página
		require '../desafio/404.html';
		//Solicitar o rodapé da página
		require '../desafio/footer.html';
	}
} else{
	$url = array_filter(explode("/", $url));

	$aux = strpos($url[0], ".");

	if ($aux === false) {
		$file = $url[0].".php";
	} else {
		$file = $url[0];
	}

	//Se o arquvo existir, faça:
	if (is_file($file)) {
		//Solicitar o cabeçalho da página
		require '../desafio/header.html';
		//Solicitar o corpo da página
		require $file;
		//Solicitar o rodapé da página
		require '../desafio/footer.html';
	} 
	//Se não, faça:
	else {
		//Solicitar o cabeçalho da página
		require '../desafio/header.html';
		//Solicitar o corpo da página
		require '../desafio/404.html';
		//Solicitar o rodapé da página
		require '../desafio/footer.html';
	}
}