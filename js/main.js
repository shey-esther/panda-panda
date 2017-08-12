//insertando imagen desde js.
var imagen = document.getElementById('panditas');
var pictures = ["img/a1.jpg","img/a2.jpg", "img/a3.jpg", "img/a4.jpg"];

for (var i = 0; i < pictures.length; i++) {
	pictures[i];
	imagen.setAttribute('class', 'img');
	var img = document.createElement('img');
	img.src =pictures[i];
	img.setAttribute('class','panda')
	imagen.appendChild(img);
}