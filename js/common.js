$(document).ready(function(){
	var webData ={};
	webData.wrp=$('.wrapper');
	webData.ballx = 0;
	webData.bally = 0;
  
	var scene = new THREE.Scene();
	var camera = new THREE.PerspectiveCamera( 75, window.innerWidth/window.innerHeight, 0.1, 1000 );

	var renderer = new THREE.WebGLRenderer();
	renderer.setSize( window.innerWidth, window.innerHeight );
	webData.ball = document.getElementById("ball_box");
	webData.ball.appendChild( renderer.domElement );

	var geometry = new THREE.SphereGeometry( 1, 32, 32 );
	var material = new THREE.MeshBasicMaterial();
	material.map = THREE.ImageUtils.loadTexture('images/earthmap1k.jpg');
	material.bumpScale = 0.05;
	var earthMesh = new THREE.Mesh( geometry, material );
	scene.add( earthMesh );

	camera.position.z = 5;


	var FACTOR = .1;
	var axis = new THREE.Vector3(1,1,0);
	var angle = axis.length() * FACTOR;
	var distance = 0;
	axis.normalize();

	// var dx,dy;
	// var ddx = 1;
	// var ddy = 1;
	// var distance = 200;

	// var axis = new THREE.Vector3(1,1,0);
	// axis.normalize()
	// var angle = .1;
	// var render = function () {
	// 	requestAnimationFrame( render );
	// 	// rotateAroundWorldAxis(earthMesh, axis, angle);
	// 	earthMesh.rotateOnAxis(axis,angle)

	// 	renderer.render(scene, camera);
	// };

	var render = function () {
		requestAnimationFrame( render );
		// earthMesh.rotateOnAxis(axis,angle);
		// earthMesh.scale.x = 0.5;
		// earthMesh.position.x += 0.5*FACTOR;
		// earthMesh.position.y += -0.5*FACTOR;

		renderer.render(scene, camera);
	};

	render();
})//ready end  
































































































