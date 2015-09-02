<!DOCTYPE html>
<html lang="es">
	<head>
		<meta charset="UTF-8">
		<meta name="viewport" content="width=device-width" />
		<meta name="keywords" content="veterinaria, sigala, animales, granja, vacunas, consulta, servicios médicos, desparasitantes, alimento, antibióticos, médicos, estética">
		<title>Veterinaria Sigala</title>
		
		<link rel="shortcut icon" href="img/icon.ico" type="image/x-icon">
		
		<link rel="stylesheet" href="css/bootstrap.min.css">
		<link rel="stylesheet" href="css/style.css">	
	</head>
	<body <?php echo ($p=='index')? 'data-spy="scroll" data-target=".navbar-nav"':'' ?>>		
		<!-- BEGIN NAVBAR -->
		<nav class="navbar navbar-default navbar-fixed-top navbar-vet" id="nav-vet">
			<div class="container">
				<div class="navbar-header">
					<button type="button" class="navbar-toggle collapsed" data-toggle="collapse" data-target="#collapsible-nav" aria-expanded="false">
						<span class="sr-only">Toggle navigation</span>
						<span class="icon-bar"></span>
						<span class="icon-bar"></span>
						<span class="icon-bar"></span>
					</button>
					<a class="navbar-brand smoothScroll" href="index.php#inicio"><img src="img/logo.png" alt="Veterinaria Sigala"></a>
				</div>
				<div id="collapsible-nav" class="collapse navbar-collapse">
					<ul class="nav navbar-nav pull-right">
						<li><a href="<?php echo ($p=='index')? '#inicio':'index.php' ?>" class="smoothScroll">Inicio</a></li>
						<li><a href="<?php echo ($p=='index')? '#servicios':'index.php' ?>" class="smoothScroll">Servicios</a></li>
						<li><a href="<?php echo ($p=='index')? '#nosotros':'index.php' ?>" class="smoothScroll">Nosotros</a></li>						
						<li><a href="<?php echo ($p=='index')? '#sucursales':'index.php' ?>" class="smoothScroll">Sucursales</a></li>
						<li><a href="<?php echo ($p=='index')? '#marcas':'index.php' ?>" class="smoothScroll">Marcas</a></li>
						<li><a href="<?php echo ($p=='index')? '#productos':'index.php' ?>" class="smoothScroll">Productos</a></li>
						<li><a href="<?php echo ($p=='index')? '#equipo':'index.php' ?>" class="smoothScroll">Equipo de Trabajo</a></li>
						<li><a href="<?php echo ($p=='index')? '#contacto':'index.php' ?>" class="smoothScroll">Contacto</a></li>
					</ul>
				</div>
			</div>
		</nav>
	
