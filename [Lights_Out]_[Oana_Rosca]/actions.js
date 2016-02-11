var on_files = ["on1.jpg", "on2.jpg", "on3.jpg", "on4.jpg", "on5.jpg"];
var off_files = ["off1.jpg", "off2.jpg", "off3.jpg", "off4.jpg", "off5.jpg"];

function changeImage(index) {
  var bulb = document.getElementsByClassName('bulb')[index];

  if (bulb.src.match(on_files[index])) {
    bulb.src = off_files[index];
  }
  else {
    bulb.src = on_files[index];
  }
}

$(".switch").click(function(e){
  e.preventDefault();
  var index = $(this).closest("map").attr("name");
  changeImage(Number(index));
});
