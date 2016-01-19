function switcher(){

    var pic = document.getElementById('bulb');
    
    if (pic.src.match("on")) {
        pic.src = "off.jpg";
    } 

    else {
        pic.src = "on.jpg";
    }
};