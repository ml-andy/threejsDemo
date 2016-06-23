$(document).ready(function(){
	var webData ={};
	webData.wrp=$('.wrapper');
	webData.ballx = 0;
	webData.bally = 0;
	webData.ballradius = 0.5; //半徑
	webData.FACTOR = 0.01; //速度
	webData.ballwidth = 80; //這是目測
	webData.ballrate = 128;//目測距離換算成pixel的比例
	webData.ballinit = {x:-2.5,y:3.75};

	var axis = new THREE.Vector3(1,1,0);
	var angle = axis.length() * webData.FACTOR;
	axis.normalize();

	var canvas, stage, exportRoot;
	var fakeballx = 0,
	    fakebally = 0;

	canvas = document.getElementById("ball_boxup");
	images = images||{};
	ss = ss||{};

	var loader = new createjs.LoadQueue(false);
	loader.addEventListener("fileload", handleFileLoad);
	loader.addEventListener("complete", handleComplete);
	loader.loadFile({src:"images/hittestdemo_atlas_.json", type:"spritesheet", id:"hittestdemo_atlas_"}, true);
	loader.loadManifest(lib.properties.manifest);

	function handleFileLoad(evt) {
		if (evt.item.type == "image") { images[evt.item.id] = evt.result; }
	}

	function handleComplete(evt) {
		var queue = evt.target;
		ss["hittestdemo_atlas_"] = queue.getResult("hittestdemo_atlas_");
		exportRoot = new lib.hittestdemo();

		stage = new createjs.Stage(canvas);
		stage.addChild(exportRoot);
		stage.update();

		webData.lobsterMonster = stage.addChild(new lib.lobsterMonster_mc());
		webData.lobsterMonster.setTransform(320,480,1,1,0,0,0,0,0);
		// webData.ball_1 = stage.addChild(new lib.ball_1());
		// webData.ball_1.setTransform(0,0,1,1,0,0,0,0,0);

		
		Runthreejs();		
	}

	function Runthreejs(){
		var scene = new THREE.Scene();
		var camera = new THREE.PerspectiveCamera( 75, $('#ball_boxin').width()/$('#ball_boxin').height(), 0.1, 1000 );

		webData.ball = document.getElementById("ball_boxin");
		var renderer = new THREE.WebGLRenderer({canvas:webData.ball,alpha: true});
		renderer.setClearColor( 0x000000, 0 ); 

		var geometry = new THREE.SphereGeometry( webData.ballradius, 32, 32 );
		var material = new THREE.MeshBasicMaterial();
		material.map = new THREE.TextureLoader().load('images/earthmap1k.jpg');
		material.bumpScale = 0.025;
		var earthMesh = new THREE.Mesh( geometry, material );		
		scene.add( earthMesh );
		earthMesh.position.x = -2.5;
		earthMesh.position.y = 3.75;
		camera.position.z = 5;

		// $(window).on("keydown",function(e){			
		// 	if(e.keyCode==37) earthMesh.position.x-=0.1;
		// 	else if(e.keyCode==39) earthMesh.position.x+=0.1;
		// 	else if(e.keyCode==38) earthMesh.position.y-=0.1;
		// 	else if(e.keyCode==40) earthMesh.position.y+=0.1;
		// });
		
		if (window.DeviceOrientationEvent) {		
	        window.addEventListener('deviceorientation', function(eventData) {
				webData.tiltLR = eventData.gamma;
				webData.tiltFB = eventData.beta;
				axis.set(webData.tiltLR, webData.tiltFB, 0);
				angle = axis.length() * webData.FACTOR;
				axis.normalize();
				// $('.lr').html(earthMesh.position.x);
				// $('.fb').html(earthMesh.position.y);
				earthMesh.position.x += webData.ballradius*webData.tiltLR*webData.FACTOR;
				earthMesh.position.y -= webData.ballradius*webData.tiltFB*webData.FACTOR;

				var ptList = [
					{
						_x:320+earthMesh.position.x*webData.ballrate,
						_y:480+earthMesh.position.y*webData.ballrate*-1
					},
					{
						_x:320+earthMesh.position.x*webData.ballrate - webData.ballwidth/2,
						_y:480+earthMesh.position.y*webData.ballrate*-1 - webData.ballwidth/2
					},
					{
						_x:320+earthMesh.position.x*webData.ballrate + webData.ballwidth/2,
						_y:480+earthMesh.position.y*webData.ballrate*-1 - webData.ballwidth/2
					},
					{
						_x:320+earthMesh.position.x*webData.ballrate - webData.ballwidth/2,
						_y:480+earthMesh.position.y*webData.ballrate*-1 + webData.ballwidth/2
					},
					{
						_x:320+earthMesh.position.x*webData.ballrate + webData.ballwidth/2,
						_y:480+earthMesh.position.y*webData.ballrate*-1 + webData.ballwidth/2
					}
				];
				for(var i=0;i<ptList.length;i++){				
					if(i==0) console.log(ptList[i]._y);
					var pt = webData.lobsterMonster.globalToLocal(ptList[i]._x,ptList[i]._y);
					if (webData.lobsterMonster.hitTest(pt.x, pt.y)){
						earthMesh.position.x = webData.ballinit.x;
						earthMesh.position.y = webData.ballinit.y;
						alert("I'm hit !!!");
						break;
					}
				}
	        });
	    }

		function render() {
			//threejs
			// setTimeout( function() {
		 //        requestAnimationFrame( render );
		 //    }, 1000 / 30 );
			requestAnimationFrame( render );
			earthMesh.rotateOnAxis(axis,angle);
			// earthMesh.scale.x = 0.5;

			//createjs
			// webData.ball_1.x=fakeballx;
			// webData.ball_1.y=fakebally;

			stage.update();

			renderer.render(scene, camera);
		};
		render();
		webData.lobsterMonster.play();
	}
	
  
	
})//ready end  
































































































