	<!-- Content -->
	<section class="mt-4">
		<div class="container">
			<div class="row">
				<div class="col-lg-12 text-justify" id="content">
					<h3 class="text-center">Incidentes</h3>
					<button class="btn btn-primary btn-flat pull-left novo" onclick="novo()"><i class="fa fa-plus"></i> Novo</button>
					<div id="loading"></div>
					<table data-pagination="true" data-search="true" data-toggle="table" class="table">
						<thead class="bg-primary">
							<tr>
								<th class="text-center" data-sortable="true" data-field="id">ID</th>
								<th class="text-center" data-sortable="true" data-field="atendente">Atendente</th>
								<th class="text-center" data-sortable="true" data-field="cliente">Cliente</th>
								<th class="text-center" data-sortable="true" data-field="descricao">Descrição</th>
								<th class="text-center" data-sortable="true" data-field="status">Status</th>
								<th class="text-center" data-sortable="true" data-field="data">Data do Registro</th>
								<th class="text-center" data-sortable="true" data-field="acoes">Ações</th>
							</tr>
						</thead>
						<tbody id="table-content"></tbody>
					</table>
				</div>
			</div>
		</div>
	</section>
	<!-- END. Content -->
	<div class="modal fade" id="visualizar" tabindex="-1" role="dialog" data-backdrop="static">
		<div class="offset-md-3 col-md-6 col-xs-12">
			<div class="modal-dialog box box-primary" role="document">
				<div class="modal-content">
					<div class="modal-header">
						<h4 class="modal-title"></h4>
						<button type="button" class="close" data-dismiss="modal" aria-label="Close"><span aria-hidden="true">×</span></button>
					</div>
					<div class="modal-body" id="conteudovisualiza">
					</div>
				</div>
				<!-- /.modal-content -->
			</div>
			<!-- /.modal-dialog -->
		</div>
	</div>