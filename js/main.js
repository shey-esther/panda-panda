//insertando imagen desde js.
var imagen = document.getElementById('panditas');
var pictures = ["img/a1.jpg","img/a2.jpg", "img/a3.jpg", "img/a4.jpg"];

for (var i = 0; i < pictures.length; i++) {
	pictures[i];
	imagen.setAttribute('class', 'img');
	var pandita = document.createElement('img');
	var x = document.createElement('x');
	//x.setAttribute('id','x_boton');
	x.innerHTML='X';
	pandita.src =pictures[i];
	pandita.setAttribute('class','panda')
	
	imagen.appendChild(pandita);
	imagen.appendChild(x);

}