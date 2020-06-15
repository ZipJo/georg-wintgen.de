let ajaxLoader = {

	currentActive: null,
	ajaxWrapper: null,
	animation: "fade",

	init(){
		this.ajaxWrapper = document.getElementById("id_ajax_wrap");

		window.onhashchange = function(){ ajaxLoader.changeContent(); }; 

		this.changeContent();
	},

	changeContent(name = window.location.hash){

		let hashName = name == "" ? "#/home" : name;

		if (hashName !== this.currentActive){
			
			let fileName = hashName.substr(1)+".php";

			let xhr = new XMLHttpRequest();

			xhr.open('GET', fileName, true);

			xhr.onload = function() {
				if (xhr.status !== 200) {
					if (hashName == "#/404") alert("the content you requested does not exist!");
					else ajaxLoader.changeContent("#/404");
				} else {
					ajaxLoader.replaceContent(xhr.responseText,hashName);
				}
			};

			xhr.send();

		}


	},

	replaceContent(newContent,newHashName,animation = this.animation){
		
		let oldElems = this.ajaxWrapper.getElementsByClassName("animation_wrapper--active");
		for(let i = 0; i < oldElems.length; i++){
			oldElems[i].classList.add("animation_wrapper--obsolete");
			oldElems[i].classList.remove("animation_wrapper--active");
		}

		let newElem = document.createElement("div");
		newElem.classList.add("animation_wrapper");
		newElem.classList.add("animation_wrapper--active");
		newElem.innerHTML = newContent;


		this.ajaxWrapper.appendChild(newElem);

		//subpage-specific JS:
		if (newHashName == "#/home") {

		}

		if (newHashName == "#/portfolio") {

		}

		if (newHashName == "#/about") {
			
		}

		if (newHashName == "#/contact") {
			
		}
		//trigger transition-animation and close mobile-menu
		requestAnimationFrame(function(){
			setTimeout(function(){
				newElem.classList.add(animation);
				document.getElementById("id_mobile_menu").classList.remove("mobile_menu_active");
			},10);
		});
		//remove old Elements after the transition (transition is 300ms)
		requestAnimationFrame(function(){
			setTimeout(function(){
				 removeElementsByClass("animation_wrapper--obsolete");
			},400);
		});
		this.currentActive = newHashName;


	}
};