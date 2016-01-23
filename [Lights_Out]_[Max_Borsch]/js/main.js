var renderWidth = 768;
var renderHeight = 576;

var resources;

var stage = null;
var light = null;
var button = null;
var graphics = null;

function Main(w, h){
	//PIXI.SCALE_MODES.DEFAULT = PIXI.SCALE_MODES.NEAREST;

	stage = new PIXI.Container();
	if(w != 0 && h != 0){
		renderWidth = w;
		renderHeight = h;
	}
	renderer = PIXI.autoDetectRenderer(renderWidth, renderHeight);
	//renderer = PIXI.lights.WebGLDeferredRenderer (renderWidth, renderHeight);

	var loader = new PIXI.loaders.Loader('img', 10);
	loader.add('lightbulb_on',"lightbulb_on.png");
	loader.add('lightbulb_off',"lightbulb_off.png");
	loader.add('lightRay_light',"lightRay_light.png");
	loader.add('room',"room.jpg");
	loader.add('button',"button.png");
	loader.add('buttonbkg',"buttonbkg.png");
	loader.once('complete',onLoaded);
	loader.load();

	return renderer.view;
}

function onLoaded(loader, res){
	resources = res;

	loadScene ();
}

function loadScene () {

	camera = new PIXI.Container ();

	room = new PIXI.Sprite (resources.room.texture);
	room.anchor.set (0.5, 0.5);
	room.rotation = Math.PI/6
	room.scale.set (1.5,1.7);
	room.position.set (renderWidth/2, renderHeight/2);
	camera.addChild(room);

	graphics = new PIXI.Graphics();

	camera.addChild(graphics);

	buttonbkg = new PIXI.Sprite (resources.buttonbkg.texture);
	buttonbkg.anchor.set (0.5, 0);
	buttonbkg.position.set (renderWidth/2, renderHeight*(2/3));
	buttonbkg.rotation = Math.PI/6
	camera.addChild(buttonbkg);

	button = new PIXI.Sprite (resources.button.texture);
	button.anchor.set (0.5, 0);
	button.position.set (renderWidth/2, renderHeight*(2/3));
	camera.addChild(button);

	light = new PIXI.Sprite (resources.lightbulb_off.texture);
	light.anchor.set (0.5, 0.7);
	light.position.set (renderWidth/2, renderHeight/3);
	camera.addChild(light);

	lightRay = new PIXI.Sprite (resources.lightRay_light.texture);
	lightRay.visible = false;
	lightRay.anchor.set (0.5, 0.5);
	light.addChild(lightRay);

	stage.addChild(camera);

	button.interactive = true;

	var lightOn = false;
    button.mousedown = stage.touchstart = function (event) {
      this.data = event.data;
      lightOn = !lightOn;
      lightRay.visible = lightOn;
      light.texture = lightOn ? resources.lightbulb_on.texture : resources.lightbulb_off.texture
    }

    button.mouseup = stage.mouseupoutside = stage.touchend = stage.touchendoutside = function (event) {
      this.data = null;
      
    }
	
	setInterval (update, 1000/30);
	animate ();
}

var lastFrame = Date.now();
var deltaTime = 0;
var elapsedTime = 0;
var shakeTime = 0;
function update () {
	var time = Date.now();
	deltaTime = 1000/30;
	lastFrame = time;
	elapsedTime+=deltaTime;

	shakeTime-=deltaTime;
	if (shakeTime>0 && shakeTime < 1000) {
		camera.position.set (Math.cos(time/50)*20*(shakeTime/1000), Math.cos(time/50)*5*(shakeTime/1000));
	} else if (shakeTime < 0) {
		shakeTime = 5000;
	}

	light.position.x = renderWidth/2 + Math.cos (time/800)*3*deltaTime;
	light.position.y = renderHeight/3 - Math.cos (time/500)*1*deltaTime;
	light.rotation = Math.PI - Math.cos (time/800)/2;

	button.rotation = Math.cos (time/500)/4;

	graphics.clear();
	graphics.lineStyle(3, 0x000000);
	graphics.moveTo(renderWidth/2,-20);
	graphics.lineTo(light.position.x, light.position.y);
}

function animate() {
	requestAnimationFrame(animate);
	renderer.render(stage);
}
