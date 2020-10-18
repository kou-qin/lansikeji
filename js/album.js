window.onload = function(){
	document.getElementById("img_box").setAttribute('class','rotatY');
}
function img_scale(e){
	if(e.getAttribute('class') == 'scale'){
		e.setAttribute('class','');
		return;
	}
	let liElements = document.getElementsByTagName("li");
	for (let index = 0;index < liElements.length;index++){
		liElements[index].setAttribute('class','');
	}
	e.setAttribute('class','scale');
	
}
