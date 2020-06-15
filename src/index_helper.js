function startup(){
	ajaxLoader.init();
	document.getElementsByClassName("loader")[0].classList.add("global_hide");
	document.getElementsByClassName("page_loader")[0].classList.add("global_hide");
	document.getElementById("id_wrapper").classList.remove("hide_container");
}

window.onload = function() { startup(); };

