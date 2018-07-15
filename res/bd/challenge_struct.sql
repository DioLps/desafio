CREATE TABLE IF NOT EXISTS `atendentes` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `nome` varchar(64) NOT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `id_UNIQUE` (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=7;


INSERT INTO `atendentes` (`id`, `nome`) VALUES
  (4, 'Anderson'),
  (5, 'André'),
  (6, 'Otávio');
  
CREATE TABLE IF NOT EXISTS `clientes` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `nome` varchar(64) NOT NULL,
  `empresa` varchar(64) NOT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `id_UNIQUE` (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=4;

INSERT INTO `clientes` (`id`, `nome`, `empresa`) VALUES
  (1, 'Jefferson', 'Pixel Inc'),
  (2, 'Máximo', 'York Research'),
  (3, 'Gabriella', 'Faraday Co');

CREATE TABLE IF NOT EXISTS `incidentes` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `atendente` int(11) NOT NULL,
  `cliente` int(11) NOT NULL,
  `descricao` varchar(512) DEFAULT NULL,
  `status` varchar(16) DEFAULT NULL,
  `creation_time` timestamp NULL DEFAULT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `id_UNIQUE` (`id`),
  KEY `fk_incidentes_atendente_idx` (`atendente`),
  KEY `fk_incidentes_clientes1_idx` (`cliente`),
  CONSTRAINT `fk_atendente` FOREIGN KEY (`atendente`) REFERENCES `atendentes` (`id`) ON DELETE NO ACTION ON UPDATE NO ACTION,
  CONSTRAINT `fk_cliente` FOREIGN KEY (`cliente`) REFERENCES `clientes` (`id`) ON DELETE NO ACTION ON UPDATE NO ACTION
) ENGINE=InnoDB AUTO_INCREMENT=2;


INSERT INTO `incidentes` (`id`, `atendente`, `cliente`, `descricao`, `status`, `creation_time`) VALUES
  (1, 4, 2, 'Desc do problema', 'aberto', '2018-06-19 01:12:48');
