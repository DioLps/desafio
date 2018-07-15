var validaNovo = true;
			$.ajax({
				url: './res/bd/lista.php',
				cache: false,
				method: "POST",
				dataType: "json",
				data: {
					'tabela':'incidentes',
					'condicao':''
				},
				beforeSend: function () {
					$("#loading").html("<h4 class='text-center'>Carregando..</h4>");
				},
				error: function () {
					$("#loading").html("<h4>Há um problema com as fonte de dados..</h4>");
				},
				success: function (retorno) {
					if (retorno != null) {
						var dadosTabela = "";
						for (var i = 0; i < retorno.length; i++) {
							if (retorno[i].id != "") {
								dadosTabela += "<tr id='"+retorno[i].id+"'>";
								dadosTabela += "<td id='id'>";
								dadosTabela += retorno[i].id;
								dadosTabela += "</td>";
								dadosTabela += "<td id='atendente'>";
								dadosTabela += retorno[i].atendente;
								dadosTabela += "</td>";
								dadosTabela += "<td id='cliente'>";
								dadosTabela += retorno[i].cliente;
								dadosTabela += "</td>";
								dadosTabela += "<td id='descricao'>";
								dadosTabela += retorno[i].descricao;
								dadosTabela += "</td>";
								dadosTabela += "<td id='status'>";
								dadosTabela += retorno[i].status;
								dadosTabela += "</td>";
								dadosTabela += "<td id='creation_time'>";
								dadosTabela += retorno[i].creation_time;
								dadosTabela += "</td>";
								dadosTabela += '<td><ul id="listaAcoes"><li><a onclick="editar('+retorno[i].id+')"><i class="fas fa-pen" style="font-size: 14pt;"></i></a></li><li><a onclick="excluir('+retorno[i].id+')"><i class="fas fa-trash" style="font-size: 14pt;"></i></a></li></ul></td>';
								dadosTabela += "</tr>";
							}
						}
						$("#table-content").html(dadosTabela);
					}
					$("#loading").remove();
				}
			});
			function formatDate(date) {
				// add leading zeroes to single-digit day/month/hours/minutes
				let d = date;
				d = [
				'0' + d.getDate(),
				'0' + (d.getMonth() + 1),
				'' + d.getFullYear(),
				'0' + d.getHours(),
				'0' + d.getMinutes(),
				'0' + d.getSeconds()
				].map(component => component.slice(-2)); // take last 2 digits of every component

				// join the components into date
				return d.slice(0, 3).join('-') + ' ' + d.slice(3).join(':');
			}
			function loginCadastrado(){
				setTimeout("window.location='login.html'",1500);
			}
			function loginExiste(){
				alert("Usuário já existe!");
				setTimeout("window.location='login.html'",10);
			}
			function editar(id){
				$("h4.modal-title").text("Editar Incidente");
				if (validaNovo) {
					$("#conteudovisualiza").append('<label for="cAtendente">Atendente:</label><select class="form-control" id="cAtendente" name="atendente"><option>Selecione um atendente</option></select><label for="cCliente">Cliente:</label><select class="form-control" id="cCliente" name="cliente"><option>Selecione um atendente</option></select><label for="cDescricao">Descricao:</label><input type="text" id="cDescricao" name="descricao" class="form-control" ><label for="cStatus">Status:</label><input type="text" id="cStatus" name="status" class="form-control" ><label for="cCreation_time">Data:</label><input type="text" id="data" id="cCreation_time" name="creation_time" class="form-control" disabled style="border-color: #fff;background-color: #fff;"><button class="btn btn-primary float-right" onclick="editarAjax('+id+')" id="">Confirmar</button><button class="btn btn-danger float-left" onclick="hideModal()" id="">Cancelar</button>');
					$.ajax({
						url: './res/bd/lista.php',
						cache: false,
						method: "POST",
						dataType: "json",
						data: {
							'tabela':'atendentes',
							'condicao': ''
						},
						error: function (retorno) {
							console.log(retorno.responseText);
						},
						success: function (retorno) {
							for (var i = 0; i < retorno.length; i++) {
								optionsAtendentes = retorno[i]['id'] + ' / ' + retorno[i]['nome'];
								$('select[name="atendente"]').append('<option value="'+retorno[i]["id"]+'"> ' + optionsAtendentes + ' </option>');
							}
						}
					});
					$.ajax({
						url: './res/bd/lista.php',
						cache: false,
						method: "POST",
						dataType: "json",
						data: {
							'tabela':'clientes',
							'condicao': ''
						},
						error: function (retorno) {
							console.log(retorno.responseText);
						},
						success: function (retorno) {
							for (var i = 0; i < retorno.length; i++) {
								optionsClientes = retorno[i]['id'] + ' / ' + retorno[i]['nome'] + ' / ' + retorno[i]['empresa'];
								$('select[name="cliente"]').append('<option value="'+retorno[i]["id"]+'"> ' + optionsClientes + ' </option>');
							}
						}
					});
				}
				validaNovo = false;
				showModal();
				$.ajax({
					url: './res/bd/lista.php',
					cache: false,
					method: "POST",
					dataType: "json",
					data: {
						'tabela':'incidentes',
						'condicao':"id='"+id+"'"
					},
					success: function (retorno) {
						if (retorno != null) {
							var dadosTabela = "";
							for (var i = 0; i < retorno.length; i++) {
								if (retorno[i].id != "") {
									$('select[name="atendente"]').val(retorno[i].atendente);
									$('select[name="cliente"]').val(retorno[i].cliente);
									$('input[name="descricao"]').val(retorno[i].descricao);
									$('input[name="status"]').val(retorno[i].status);
									$('#data').val(retorno[i].creation_time);
								}
							}
						}
					}
				});
			}
			function excluir(id){
				$("h4.modal-title").text("Tem certeza que deseja encerrar esse incidente?");
				$("#conteudovisualiza").append('<button class="btn btn-primary form-control" onclick="excluirAjax('+id+')" id="">Confirmar</button><br><br><button class="btn btn-danger form-control" onclick="hideModal()" id="">Cancelar</button>');
				showModal();
			}
			function novo(){
				var optionsAtendentes = "";
				var optionsClientes = "";
				$("h4.modal-title").text("Incluir Incidente");
				if (validaNovo) {
					$("#conteudovisualiza").append('<label for="cAtendente">Atendente:</label><select class="form-control" id="cAtendente" name="atendente"><option>Selecione um atendente</option></select><label for="cCliente">Cliente:</label><select class="form-control" id="cCliente" name="cliente"><option>Selecione um atendente</option></select><label for="cDescricao">Descricao:</label><input type="text" id="cDescricao" name="descricao" class="form-control" ><label for="cStatus">Status:</label><input type="text" id="cStatus" name="status" class="form-control" ><label for="cCreation_time">Data:</label><input type="text" id="data" id="cCreation_time" name="creation_time" class="form-control" disabled style="border-color: #fff;background-color: #fff;"><button class="btn btn-primary float-right" onclick="novoAjax()" id="">Confirmar</button><button class="btn btn-danger float-left" onclick="hideModal()" id="">Cancelar</button>');
					$('#data').val(formatDate(new Date(new Date - 86400 * 1000)));
					$.ajax({
						url: './res/bd/lista.php',
						cache: false,
						method: "POST",
						dataType: "json",
						data: {
							'tabela':'atendentes',
							'condicao': ''
						},
						error: function (retorno) {
							console.log(retorno.responseText);
						},
						success: function (retorno) {
							for (var i = 0; i < retorno.length; i++) {
								optionsAtendentes = retorno[i]['id'] + ' / ' + retorno[i]['nome'];
								$('select[name="atendente"]').append('<option value="'+retorno[i]["id"]+'"> ' + optionsAtendentes + ' </option>');
							}
						}
					});
					$.ajax({
						url: './res/bd/lista.php',
						cache: false,
						method: "POST",
						dataType: "json",
						data: {
							'tabela':'clientes',
							'condicao': ''
						},
						error: function (retorno) {
							console.log(retorno.responseText);
						},
						success: function (retorno) {
							for (var i = 0; i < retorno.length; i++) {
								optionsClientes = retorno[i]['id'] + ' / ' + retorno[i]['nome'] + ' / ' + retorno[i]['empresa'];
								$('select[name="cliente"]').append('<option value="'+retorno[i]["id"]+'"> ' + optionsClientes + ' </option>');
							}
						}
					});
				}
				validaNovo = false;
				showModal();
			}
			function showModal() {
				$("#visualizar").modal("show");	
			}
			function hideModal() {
				$('#conteudovisualiza').html("");	
				validaNovo = true;
				$("#visualizar").modal("hide");
			}
			function novoAjax() {
				var valores = "'" + $('select[name="atendente"]').val() + "', '" + $('select[name="cliente"]').val() + "', '" + $('input[name="descricao"]').val() + "', '" + $('input[name="status"]').val() + "',  '" + $('#data').val() + "'";
				var condicao = "creation_time='" + $('#data').val() + "'";
				$.ajax({
					url: './res/bd/new.php',
					cache: false,
					method: "POST",
					dataType: "json",
					data: {
						'tabela':'incidentes',
						'colunas': 'atendente, cliente, descricao, status,creation_time',
						'valores': valores,
						'condicao': condicao
					},
					error: function (retorno) {
						console.log(retorno.responseText);
					},
					success: function (retorno) {
						$("#conteudovisualiza").html('<h5>Registro Cadastrado com sucesso</h5>');
					}
				});
				this.location.reload();
			}
			function editarAjax(id) {
				$.ajax({
					url: './res/bd/update.php',
					cache: false,
					method: "POST",
					dataType: "json",
					data: {
						'tabela':'incidentes',
						'colunas': 'atendente = ' + $('select[name="atendente"]').val() + ', cliente = ' + $('select[name="cliente"]').val() + ', descricao = "' + $('input[name="descricao"]').val() + '", status = "' + $('input[name="status"]').val() + '"'
						,
						'condicao':"id='"+id+"'"
					},
					error: function (retorno) {
						$("#conteudovisualiza").html('<h5>'+retorno.responseText+'</h5>');
					},
					success: function (retorno) {
						console.log(retorno.responseText);
					}
				});
				this.location.reload();
			}
			function excluirAjax(id) {
				$.ajax({
					url: './res/bd/delete.php',
					cache: false,
					method: "POST",
					dataType: "json",
					data: {
						'tabela':'incidentes',
						'condicao':"id='"+id+"'"
					},
					error: function (retorno) {
						console.log(retorno.responseText);
					},
					success: function () {
						hideModal();
					}
				});
				this.location.reload();
			}
			$('.close').click(function () {
				hideModal();
				this.location.reload();
			});