window.onload = function() {    

  function light(element, selected) {
    //is the object on?
    this.on = false;
    //is the object selected
    this.selected = selected;
    //the actual HTML element on the page
    this.element = element;
    //change which one is currently selected
    this.changeSelection = function() {
      for(var i = 0; i < lights.length; i++) {
        //deselect all the light bulbs
        document.getElementsByClassName('lightbulb')[i].className = "lightbulb";
        lights[i].selected = false;
      }
      //select the light bulb the user clicked
      this.element.className = "lightbulb selected";
      this.selected = true;
    }
    //toggle the background color
    this.toggleOn = function() {
      if(this.on) {
        this.on = false;
        this.element.style.backgroundColor = "#999";
      } else {
        this.on = true;
        this.element.style.backgroundColor = "yellow";
      }
    }
    
  }
  
  function lightSwitch(element) {
    this.element = element;
    this.toggle = function() {
      //If the position is at the top, then move to the bottom. Otherwise, move it to the top.
      if(this.element.classList.contains('topPosition')) {
        this.element.className = "lightswitch";
      } else {
        this.element.className = "lightswitch topPosition"
      }
      for(var i = 0; i < lights.length; i++) {
        //toggle the lightbulb so it turns on and off
        if(lights[i].selected) {
          lights[i].toggleOn();
        }
      }
    }
  }
  
  /***
  Initialization
  ***/
  lightdivs = document.getElementsByClassName('lightbulb');
  var lights = [];
  lights[0] = new light(lightdivs[0], true);
  lights[1] = new light(lightdivs[1], false);
  
  lightswitchdivs = document.getElementsByClassName('lightswitch');
  var lightswitches = [];
  lightswitches[0] = new lightSwitch(lightswitchdivs[0]);
  lightswitches[1] = new lightSwitch(lightswitchdivs[1]);
  lightswitches[2] = new lightSwitch(lightswitchdivs[2]);
  /***End Initialization***/
  
  
  //When the lightbox div is clicked, call the toggle method
  lightbox = document.getElementsByClassName('lightbox')[0];
  lightbox.addEventListener("click", function(event) {
    for(var i = 0; i < lightswitches.length; i++) {
      if(event.srcElement == lightswitches[i].element) {
        lightswitches[i].toggle();
      }
    }
  });
  
  //when the lightbulb div is clicked, find out which one it is and change the selection of the lightbulb
  lightbulbs = document.getElementsByClassName('lightbulbs')[0];
  lightbulbs.addEventListener("click", function(event) {
    for(var i = 0; i < lights.length; i++) {
      if(event.srcElement == lights[i].element) {
        lights[i].changeSelection();
      }
    }
  });
}