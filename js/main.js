//insertando imagen desde js.
var rest = document.getElementById('restaurar');
var extinguir = document.getElementById('extinguir');
var original = document.getElementById('original');
var imagen = document.getElementById('panditas');
var pictures = ["img/a1.jpg","img/a2.jpg", "img/a3.jpg", "img/a4.jpg"];
//insertando imagenes desde js
function panda4(){
		for (var i = 0; i < pictures.length; i++) {
		pictures[i];
		imagen.setAttribute('class', 'img');
		var div = document.createElement('div');
		div.setAttribute('class','alinear')
		var pandita = document.createElement('img');
		var x = document.createElement('span');
		x.setAttribute('class','x_boton');
		x.innerHTML='X';
		pandita.src =pictures[i];
		pandita.setAttribute('class','panda');

		div.appendChild(x);
		div.appendChild(pandita);
		imagen.appendChild(div);

		x.addEventListener('click',eliminar);
	}
}
panda4();

function eliminar(){
	var imagen = document.getElementById('panditas');
	imagen.removeChild(imagen.childNodes[0]);
}

rest.addEventListener('click',restaurar);
function restaurar(){
	panda4();
}

original.addEventListener('click',origen);
function origen(){
	var texto1 = document.getElementById('text1');
	if (texto1.style.visibility==='hidden') {
		texto1.style.visibility='visible';
	}else{
	texto1.style.visibility='hidden';
	}
}

extinguir.addEventListener('click',extinger);
function extinger(){
	var texto2 = document.getElementById('text2');
	if (texto2.style.visibility==='hidden') {
		texto2.style.visibility='visible';
	}else{
	texto2.style.visibility='hidden';
	}
}
