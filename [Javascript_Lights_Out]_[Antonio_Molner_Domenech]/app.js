var lightOn = true;
var canvas;
var context;

var bg = new Image();
bg.src = "images/background.jpg";

var switch_btn;

var bulb;

var light;
var lighting;
var darkmask;
var targetIntensity;

function onTimerTick() {
    context.drawImage(bg, 0, 0, 700, 700);
    context.drawImage(bulb, 85, 100, 40, 55);
    context.drawImage(switch_btn, 90, 170, 30, 45);

    light.distance = lerp(light.distance, targetIntensity,0.4);
    lighting.compute(canvas.width, canvas.height);
    darkmask.compute(canvas.width, canvas.height);

    lighting.render(context);

    context.globalCompositeOperation = "source-over";
    darkmask.render(context);

}

window.onload = function () {
    canvas = document.getElementById('canvas');
    context = canvas.getContext('2d');
    context.drawImage(bg, 0, 0, 700, 700);

    canvas.addEventListener('click', function (e) {
        console.log('click: ' + e.offsetX + '/' + e.offsetY);
        var rect = collides([{ x: 90, y: 170, w: 30, h: 45 }], e.offsetX, e.offsetY);
        if (rect) {
            lightOn = !lightOn;
            DrawLight();
        }
    }, false);

    light = new illuminated.Lamp({
        position: new illuminated.Vec2(105, 122),
        distance: 400,
        radius: 10,
        samples: 50
    });

    lighting = new illuminated.Lighting({
        light: light,

    });

    darkmask = new illuminated.DarkMask({ lights: [light] });

    bulb = new Image();
    switch_btn = new Image();
    switch_btn.src = "images/switch_on.png";
    DrawLight();

    setInterval(onTimerTick, 33); 
};

function DrawLight() {
    if (lightOn) {
        bulb.src = "images/light_on.png";
        switch_btn.src = "images/switch_on.png";

        targetIntensity = 400;
    }

    else {
        bulb.src = "images/light_off.png";
        switch_btn.src = "images/switch_off.png";

        targetIntensity = 0;
    }

    darkmask.compute(canvas.width, canvas.height);
    lighting.compute(canvas.width, canvas.height);


}

function lerp(a, b, f)
{
    return a + f * (b - a);
}

function collides(rects, x, y) {
    var isCollision = false;
    for (var i = 0, len = rects.length; i < len; i++) {
        var left = rects[i].x, right = rects[i].x + rects[i].w;
        var top = rects[i].y, bottom = rects[i].y + rects[i].h;
        if (right >= x
            && left <= x
            && bottom >= y
            && top <= y) {
            isCollision = rects[i];
        }
    }
    return isCollision;
}