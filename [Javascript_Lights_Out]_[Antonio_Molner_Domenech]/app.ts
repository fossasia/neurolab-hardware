var b_image: HTMLImageElement;
var switch_button: HTMLImageElement;
var header: HTMLImageElement;
var lightOn: boolean = true;
window.onload = () => {
    b_image = document.getElementById("bulb") as HTMLImageElement;
    switch_button = document.getElementById("switch") as HTMLImageElement;
    header = document.getElementById("header") as HTMLImageElement;

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