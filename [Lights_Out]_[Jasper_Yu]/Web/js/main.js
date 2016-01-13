function update() {
  var current = 0;
  $('.toggle-cb').each(function () {
    current = current ^ (+$(this).is(':checked'))
  });
  if(current){
    $('#bulb').addClass('active');
  }else{
    $('#bulb').removeClass('active');
  }
}
function fetch() {
  $.getJSON('../Minecraft/light.json', function(data) {
    $('#toggle1').prop('checked', data.left || false);
    $('#toggle2').prop('checked', data.right || false);
    update();
  });
}
$(document).ready(function() {
  var timer;
  $('.toggle-cb').on('change', update);
  $("#fs").click(function(){
    if(this.checked){
      $('.toggle-cb').prop('disabled', true);
      timer = setInterval(fetch, 500);
    }else{
      $('.toggle-cb').prop('disabled', false);
      clearInterval(timer);
    }
  });
});
