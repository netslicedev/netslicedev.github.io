
// -----------   Initial Functions   ------------ //

function init() {
	$(".navexpanded-gMomd6").hide();
  $(".navexpanded-jAr54o").hide();  
	$(".loader-C61RwL").fadeOut();
}

// --------------   Initial End   --------------- //




// ------------   Variables Start   ------------- //




// -------------   Variables End   -------------- //




// ------------   Functions Start   ------------- //

function mobilenav() {
	$(".navexpanded-gMomd6").toggle();
  $(".navexpanded-jAr54o").toggle();
}


// ------------    Buttons Start    ------------- //

$('#mobilenavdropdown').click(mobilenav);
$('#mobilenavlink1').click(function() { window.location.href = "/whoweare"; });
$('#mobilenavlink2').click(function() { window.location.href = "/ishtarvij"; });
$('#mobilenavlink3').click(function() { window.location.href = "/carolynhough"; });
$('#mobilenavlink4').click(function() { window.location.href = "/annakumar"; });

$('#mobilenav2link1').click(function() { window.location.href = "/strategicdevelopment"; });
$('#mobilenav2link2').click(function() { window.location.href = "/publicpolicy"; });
$('#mobilenav2link3').click(function() { window.location.href = "/stakeholderaffairs"; });
$('#mobilenav2link4').click(function() { window.location.href = "/marketentry"; });

// -------------    Buttons End    -------------- //

window.onload = init;