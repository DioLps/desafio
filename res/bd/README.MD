<h1>    
    <b>API INTEGRAÇÃO CRUD PHP MYSQL</b>
</h1>
    <br>DESCRITIVO DAS FUNÇÕES:

        insert($objeto)
        Função para inserir um novo registro no banco
        @access public 
        @param Object $objeto = array(
        'con'       => $connect['con'],
        'tabela'    => $_POST['tabela'],
        'colunas'   => $_POST['colunas'],
        'valores'   => $_POST['valores']
        );
        @return Boolean retorna true se conseguiu inserir sem problemas ou retorna um mysqli_error com o informativo do erro.

        select($objeto)
        Função para selecionar todos os registros de uma tabela no banco
        @access public 
        @param Object $objeto = array(
        'con'       => $connect['con'],
        'tabela'    => $_POST['tabela'],
        'condicao'   => $_POST['condicao']
        );
        @return Mysql_Result retorna um array se conseguiu selecionar sem problemas ou retorna um mysqli_error com o informativo do erro

        selectResultado($resultado)
        Função para transformar todos os registros de uma tabela em array
        @access public 
        @param Retorno_da_funcao select($objeto)
        @return Mysql_Result retorna um array se conseguiu converter sem problemas ou retorna um mysqli_error com o informativo do erro

        delete($objeto)
        Função para deletar os registros de uma tabela no banco
        @access public 
        @param  Object $objeto = array(
        'tabela'    => $_POST['tabela'],
        'condicao'   => $_POST['condicao']
        );
        @return Mysql_Result retorna true se conseguiu deletar sem problemas ou retorna um mysqli_error com o informativo do erro

        connect($objeto)
        Função para conectar no banco de dados
        @access public 
        @param Object $objeto = array(
        'host'    => $_POST['host'],
        'user'    => $_POST['user'],
        'pass'   => $_POST['conpassdicao']
        );
        @return Mysql_Result_connect retorna uma conexão com o banco se conseguiu conectar sem problemas ou retorna um die com o informativo do erro

        select_db($connect)
        Função para selecionar a base do banco de dados
        @access public 
        @param Retorno_da_funcao connect($objeto)
        @return Mysql_Result_connect retorna uma conexão com o banco se conseguiu conectar sem problemas ou retorna um mysqli_error com o informativo do erro

        respostaJson($mensagem)
        Função para retornar uma resposta json formatada
        @access public 
        @param String $mensagem
        @return Json retorna um array json.

        mostraArrayPre($vetor)
        Função para selecionar a base do banco de dados
        @access public 
        @param Array $vetor
        @return String retorna uma string com o vetor formatado para melhor visualização