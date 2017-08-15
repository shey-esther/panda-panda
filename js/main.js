//variables que contienen los 'id' desde html.
var rest = document.getElementById('restaurar');
var extinguir = document.getElementById('extinguir');
var original = document.getElementById('original');
var imagen = document.getElementById('panditas');
var pictures = ["img/a1.jpg","img/a2.jpg", "img/a3.jpg", "img/a4.jpg"];

//insertando imagenes desde js
function panda4(){
		for (var i = 0; i < pictures.length; i++) {
		
		// creando 'div','clases','id' e 'imagen'
		imagen.setAttribute('class', 'img');
		var div = document.createElement('div');
		div.setAttribute('class','alinear')
		var pandita = document.createElement('img');
		var x = document.createElement('span');
		x.setAttribute('class','x_boton');
		x.setAttribute('onclick','ocultar(this)');
		x.innerHTML='X';
		pandita.src =pictures[i];
		pandita.setAttribute('class','panda');

		div.appendChild(x);
		div.appendChild(pandita);
		imagen.appendChild(div);
		// x.addEventListener('click',eliminar);
	}
}
panda4();
//funcion que oculta la imagen al hacer click
function ocultar(btn){
	btn.parentNode.style.display ='none';
}

// function eliminar(){
// 	var imagen = document.getElementById('panditas');
// 	imagen.removeChild(imagen.childNodes[0]);
// }

//funcion que te muestra al hacer click en el boton.
rest.addEventListener('click',restaurar);
function restaurar(){
	var restaura = document.getElementsByClassName('alinear');
	for (var i = 0; i < restaura.length; i++) {
	restaura[i].style.display = 'inline-block';
	// panda4();
	}
}
//oculta y hace vicible el texto1
original.addEventListener('click',origen);
function origen(){
	var texto1 = document.getElementById('text1');
	if (texto1.style.visibility==='hidden') {
		texto1.style.visibility='visible';
	}else{
	texto1.style.visibility='hidden';
	}
}
//oculta y hace vicible el texto2
extinguir.addEventListener('click',extinger);
function extinger(){
	var texto2 = document.getElementById('text2');
	if (texto2.style.visibility==='hidden') {
		texto2.style.visibility='visible';
	}else{
	texto2.style.visibility='hidden';
	}
}
