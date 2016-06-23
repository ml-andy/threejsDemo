(function (lib, img, cjs, ss) {

var p; // shortcut to reference prototypes

// library properties:
lib.properties = {
	width: 640,
	height: 960,
	fps: 24,
	color: "#FFFFFF",
	manifest: []
};



// symbols:



(lib._1 = function() {
	this.spriteSheet = ss["hittestdemo_atlas_"];
	this.gotoAndStop(0);
}).prototype = p = new cjs.Sprite();



(lib.ball = function() {
	this.spriteSheet = ss["hittestdemo_atlas_"];
	this.gotoAndStop(1);
}).prototype = p = new cjs.Sprite();



(lib.header = function() {
	this.spriteSheet = ss["hittestdemo_atlas_"];
	this.gotoAndStop(2);
}).prototype = p = new cjs.Sprite();



(lib.lobster_body = function() {
	this.spriteSheet = ss["hittestdemo_atlas_"];
	this.gotoAndStop(3);
}).prototype = p = new cjs.Sprite();



(lib.lobster_claw1 = function() {
	this.spriteSheet = ss["hittestdemo_atlas_"];
	this.gotoAndStop(4);
}).prototype = p = new cjs.Sprite();



(lib.lobster_claw2 = function() {
	this.spriteSheet = ss["hittestdemo_atlas_"];
	this.gotoAndStop(5);
}).prototype = p = new cjs.Sprite();



(lib.lobster_claw3 = function() {
	this.spriteSheet = ss["hittestdemo_atlas_"];
	this.gotoAndStop(6);
}).prototype = p = new cjs.Sprite();



(lib.lobster_leg = function() {
	this.spriteSheet = ss["hittestdemo_atlas_"];
	this.gotoAndStop(7);
}).prototype = p = new cjs.Sprite();



(lib.staramount = function() {
	this.spriteSheet = ss["hittestdemo_atlas_"];
	this.gotoAndStop(8);
}).prototype = p = new cjs.Sprite();



(lib.lobster_leg_1 = function() {
	this.initialize();

	// 圖層 1
	this.instance = new lib.lobster_leg();
	this.instance.setTransform(0,-29.5);

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,-29.5,175,59);


(lib.lobster_claw3_1 = function() {
	this.initialize();

	// 圖層 1
	this.instance = new lib.lobster_claw3();
	this.instance.setTransform(-59.5,-83.5);

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-59.5,-83.5,119,167);


(lib.lobster_claw2_1 = function() {
	this.initialize();

	// 圖層 1
	this.instance = new lib.lobster_claw2();
	this.instance.setTransform(-66,-144.5);

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-66,-144.5,132,289);


(lib.lobster_claw1_1 = function() {
	this.initialize();

	// 圖層 1
	this.instance = new lib.lobster_claw1();
	this.instance.setTransform(-22,-67.5);

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-22,-67.5,44,135);


(lib.ball_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 圖層 1
	this.instance = new lib.ball();
	this.instance.setTransform(-61.5,-59.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(79));

	// 圖層 3
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(0,0,0,0.2)").s().p("Ah+I+Qjug1iDjOQiDjNA1jsQA1jtDOiEQDOiCDrA0QDuA1CDDNQCDDPg1DrQg0DujPCDQiSBdiiAAQhAAAhFgPg");
	this.shape.setTransform(-12.4,0.7);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(79));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-71.4,-59.5,128.9,119.2);


(lib.lobster_legs = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// lobster_leg
	this.instance = new lib.lobster_leg_1();
	this.instance.setTransform(45.1,-145.1,1,1,-42.1,0,0,87.5,-0.1);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({rotation:-47.6,x:37.2,y:-149},11).to({rotation:-42.1,x:45.1,y:-145.1},11).wait(1));

	// lobster_leg
	this.instance_1 = new lib.lobster_leg_1();
	this.instance_1.setTransform(64.4,-98.8,1,1,-27.1,0,0,87.5,-0.1);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).to({rotation:-21.4,x:70.6,y:-92},11).to({rotation:-27.1,x:64.4,y:-98.8},11).wait(1));

	// lobster_leg
	this.instance_2 = new lib.lobster_leg_1();
	this.instance_2.setTransform(79.4,-51.8,1,1,-12.1,0,0,87.5,0);

	this.timeline.addTween(cjs.Tween.get(this.instance_2).to({rotation:-4.7,x:84.8,y:-41},11).to({rotation:-12.1,x:79.4,y:-51.8},11).wait(1));

	// lobster_leg
	this.instance_3 = new lib.lobster_leg_1();
	this.instance_3.setTransform(87.5,0,1,1,0,0,0,87.5,0);

	this.timeline.addTween(cjs.Tween.get(this.instance_3).to({rotation:13.9,x:92,y:21.9},11).to({rotation:0,x:87.5,y:0},11).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-39.6,-225.7,214.6,255.2);


(lib.lobster_claw = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// lobster_claw2
	this.instance = new lib.lobster_claw2_1();
	this.instance.setTransform(20,41.6,1,1,0,0,0,-26,100.1);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(13).to({rotation:4.7,x:23.6,y:43.1},7).wait(7).to({y:41.1},0).to({rotation:0,x:20,y:41.6},7).wait(11));

	// lobster_claw1
	this.instance_1 = new lib.lobster_claw1_1();
	this.instance_1.setTransform(40,-38,1,1,0,0,0,22,67.5);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(13).to({regX:22.1,rotation:-6.2,x:48},7).wait(7).to({regX:22,rotation:0,x:40},7).wait(11));

	// lobster_claw3
	this.instance_2 = new lib.lobster_claw3_1();
	this.instance_2.setTransform(-16.5,116.5);

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(45));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-76,-203,188,403);


(lib.LobsterMC = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 圖層 2
	this.instance = new lib.lobster_body();
	this.instance.setTransform(-167.5,-363.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(240));

	// lobster_claw
	this.instance_1 = new lib.lobster_claw();
	this.instance_1.setTransform(-179.3,-267.5,1,1,0,-35,145);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(83).to({skewX:0,skewY:180,x:-134.5,y:-339.6},17).wait(124).to({skewX:-35,skewY:145,x:-179.3,y:-267.5},15).wait(1));

	// lobster_claw
	this.instance_2 = new lib.lobster_claw();
	this.instance_2.setTransform(191,-273.5,1,1,38);

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(83).to({rotation:0,x:133.6,y:-339.6},17).wait(124).to({rotation:38,x:191,y:-273.5},15).wait(1));

	// 圖層 1
	this.instance_3 = new lib.lobster_legs();
	this.instance_3.setTransform(-164.5,32.5,1,1,0,0,180,87.5,0);

	this.instance_4 = new lib.lobster_legs();
	this.instance_4.setTransform(167.6,32.5,1,1,0,0,0,87.5,0);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_4},{t:this.instance_3}]}).wait(240));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-387.4,-445.8,791.6,809.4);


(lib.lobsterMonster_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
		// this.stop();
	}
	this.frame_246 = function() {
		// this.gotoAndPlay(1);
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(246).call(this.frame_246).wait(1));

	// 圖層 1
	this.instance = new lib.LobsterMC();
	this.instance.setTransform(2,888);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({y:663.8},38,cjs.Ease.get(0.8)).wait(7).to({y:700.8},8).wait(16).to({y:547.8},31).wait(99).to({y:847.8},30,cjs.Ease.get(-0.5)).wait(18));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-385.4,442.2,791.6,809.4);


// stage content:



(lib.hittestdemo = function() {
	this.initialize();

	// 圖層 1
	this.instance = new lib.staramount();
	this.instance.setTransform(498.2,827.3);

	this.instance_1 = new lib.header();

	// 圖層 2
	// this.instance_2 = new lib.ball_1();
	// this.instance_2.setTransform(-142.1,59.6,1,1,0,0,0,-7,0.1);

	// 圖層 3
	// this.instance_3 = new lib.lobsterMonster_mc();
	// this.instance_3.setTransform(-450.8,516,1,1,0,0,0,10.4,829.6);

	// 圖層 4
	this.instance_4 = new lib._1();
	this.instance_4.setTransform(-55,0);

	this.addChild(this.instance_4,this.instance_3,this.instance_2,this.instance_1,this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-526.6,480,1541.7,963.3);

})(lib = lib||{}, images = images||{}, createjs = createjs||{}, ss = ss||{});
var lib, images, createjs, ss;