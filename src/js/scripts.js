function customPopup(content, maxWidth, link = null) {
	if (link == null){
		//use "content"
		popupContainer = document.querySelector(".popup_container");
		//cleanup
		while (popupContainer.firstChild) {
			popupContainer.removeChild(popupContainer.firstChild);
		}
		let popupElem = document.createElement("div");
		popupElem.innerHTML = content;
		popupElem.style.maxWidth=maxWidth;
		popupContainer.appendChild(popupElem);
		popupContainer.classList.add("active");
		requestAnimationFrame(function(){
			setTimeout(function(){popupElem.classList.add("move");},10);
		});
	} else {
		//load and display link
		let xhr = new XMLHttpRequest();

		xhr.open('get', link);
		xhr.onload = function() { customPopup(xhr.response, maxWidth); };
		xhr.send();
	}
}

function removeElementsByClass(className){
	let elements = document.getElementsByClassName(className);
	while(elements.length > 0){
		elements[0].parentNode.removeChild(elements[0]);
	}
}

function switchProject(elem, n){
	let parentElem = elem.parentElement.parentElement.parentElement.parentElement;
	let rootElem = parentElem.parentElement;
	let childrenElems = rootElem.children;
	let totalElem = childrenElems.length;
	let newActiveElem = null;

	if (n < 0) {
		newActiveElem = parentElem.previousElementSibling === null ? rootElem.children[totalElem-1] : parentElem.previousElementSibling;
	} else {
		newActiveElem = parentElem.nextElementSibling === null ? rootElem.children[0] : parentElem.nextElementSibling;
	}


	for (let i = 0; i < totalElem; i++) {
		childrenElems[i].classList.remove("active");
	}
	newActiveElem.classList.add("active");

}

function toggleMobileMenu(elem){
	elem.classList.toggle("mobile_menu_active");
}
