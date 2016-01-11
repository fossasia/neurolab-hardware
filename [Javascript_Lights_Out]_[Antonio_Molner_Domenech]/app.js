var b_image;
var switch_button;
var header;
var lightOn = true;
window.onload = function () {
    b_image = document.getElementById("bulb");
    switch_button = document.getElementById("switch");
    header = document.getElementById("header");
};
function SwitchLights() {
    if (lightOn) {
        b_image.src = "images/light_off.png";
        switch_button.src = "images/switch_on.png";
        header.innerText = "Thanks!!!";
        lightOn = false;
    }
    else {
        b_image.src = "images/light_on.png";
        switch_button.src = "images/switch_off.png";
        header.innerText = "Turn off the lights please, I'm sleeping!";
        lightOn = true;
    }
}
//# sourceMappingURL=app.js.map