<?php session_start(); ?>
<!DOCTYPE html>
<html xmlns="http://www.w3.org/1999/xhtml" xml:lang="de" lang="de">
<head>
	<style>
		.page_loader{display:block;width:100%;height:100%;position:fixed;top:0;left:0;background:#f2f2f2;z-index:1000}.loader{width:50px;height:50px;position:absolute;top:50%;left:50%;margin:-25px 0 0 -25px;border-top:1px solid rgba(0,0,0,.08);border-right:1px solid rgba(0,0,0,.08);border-bottom:1px solid rgba(0,0,0,.08);border-left:1px solid rgba(0,0,0,.5);border-radius:50%;-webkit-animation:spinner .7s infinite linear;animation:spinner .7s infinite linear;z-index:1001}@keyframes spinner{0%{-webkit-transform:rotate(0);transform:rotate(0)}100%{-webkit-transform:rotate(357deg);transform:rotate(357deg)}}.global_hide{display:none!important;opacity:0!important;z-index:-1000!important}.wrapper{z-index:0;opacity:1;transition:opacity .4s ease-in-out}.wrapper.hide_container{opacity:0}
	</style>
	<script>
	   function startup(){ajaxLoader.init();document.getElementsByClassName("loader")[0].classList.add("global_hide");document.getElementsByClassName("page_loader")[0].classList.add("global_hide");document.getElementById("id_wrapper").classList.remove("hide_container")}window.onload=function(){startup()};
	</script>
	<meta http-equiv="Content-Type" content="text/html; charset=utf-8" />
	<title>Georg Wittgen | Architekt</title>
	<meta name="description" content="Georg Wittgen | Architekturbüro" />
	<meta name="keywords" content="Architektur" />
	<meta name="author" content="www.jonas-brueggen.de" />
	<meta name="viewport" content="width=device-width">
	<link rel="stylesheet" href="https://use.typekit.net/tmh0agr.css" media="all" />
	<link rel="stylesheet" href="css/gw_standard.css" media="all" />
	<link rel="icon" href="/files/favicon.ico">
	<script async src="js/ajax_scripts.js"></script>
	<script async src="js/scripts.js"></script>
	<script async src="js/smoothscroll_polyfill.js"></script>
</head>
<body>
	<div class="page_loader">
		<div class="loader"></div>
	</div>
	<div class="popup_container" onclick="this.classList.remove('active');"></div>

	<div id="id_wrapper" class="wrapper hide_container">
		<!-- page wrapper starts here -->
		<header>
			<div class="header_logo">
				<a href="#/home">
					<h1>Georg Wintgen</h1>
					<h2>Dipl.-Ing. Architekt BDB</h2>
				</a>
			</div>
			<nav>
				<span class="mobile_menu" id="id_mobile_menu" onclick="toggleMobileMenu(this);"></span>
				<ul>
					<li><a href="#/portfolio">portfoli<span class="last_letter">o</span></a></li><span></span>
					<li><a href="#/about">über&nbsp;mic<span class="last_letter">h</span></a></li><span></span>
					<li><a href="#/contact">kontak<span class="last_letter">t</span></a></li>
				</ul>
			</nav>
		</header>
		<main class="main" id="id_ajax_wrap">
		</main>
		<footer></footer>
		<!-- end of page wrapper -->
	</div>
</body>
</html>