// Tooltip

$('button').tooltip({
  trigger: 'click',
  placement: 'bottom'
});

function setTooltip(btn, message) {
  $(btn).tooltip('hide')
    .attr('data-original-title', message)
    .tooltip('show');
}

function hideTooltip(btn) {
  setTimeout(function() {
    $(btn).tooltip('hide');
  }, 500);
}


// Clipboard

var clipboard = new ClipboardJS('.copy');

clipboard.on('success', function(e) {
    console.info('Action:', e.action);
    console.info('Text:', e.text);
    console.info('Trigger:', e.trigger);

    e.clearSelection();
});

clipboard.on('error', function(e) {
    console.error('Action:', e.action);
    console.error('Trigger:', e.trigger);
});


// Dropdown content selection

$(document).ready(function(){

  //hides dropdown content
  $(".size_chart").hide();
  
  //unhides first option content
  $("#option1").show();
  
  
  //listen to dropdown for change
  $("#size_select").change(function(){
    //rehide content on change
    $('.size_chart').hide();
    //unhides current item
    $('#'+$(this).val()).show();
  });

  document.getElementById("size_select").selectedIndex = "2";
  
});


// Dropdown content selection – FGS Font

$(document).ready(function(){

  //hides dropdown content
  $(".size_chart-fgs").hide();
  
  //unhides first option content
  $("#option1").show();
  
  
  //listen to dropdown for change
  $("#size_select-fgs").change(function(){
    //rehide content on change
    $('.size_chart').hide();
    //unhides current item
    $('#'+$(this).val()).show();
  });

  document.getElementById("size_select-fgs").selectedIndex = "6";
  
});


// Dropdown content selection – System Font

$(document).ready(function(){

  //hides dropdown content
  $(".size_chart-system").hide();
  
  //unhides first option content
  $("#option1").show();
  
  
  //listen to dropdown for change
  $("#size_select-system").change(function(){
    //rehide content on change
    $('.size_chart').hide();
    //unhides current item
    $('#'+$(this).val()).show();
  });

  document.getElementById("size_select-system").selectedIndex = "0";
  
});