function codeInit() {
	$(".loader-C61RwL").hide();

	// Declare Global Variables
	window.bheight = $(window).height();
	window.bwidth = $(window).width();
	window.panelSpeed = 0.7;
	window.panelEase = "Power1.easeOut";
	window.panelNo = 1;
	window.sliding = 1;
	window.navOn = false;
	window.panelDepth = 1;
	window.productNumber = 0;
	window.totalProducts = 7;
	window.totalGalleryItems = 17;
	window.currentGalleryItems = 1;
	window.totalPanels = 10;
	//
	// Set positions for products
	window.farleft = 0-(window.bwidth/1.8);
	window.left = -360;
	window.center = 0-(window.bwidth/10);
	window.right = 360;
	window.farright = window.bwidth/1.8;
	// Mobile
	window.farleftmobile = 0-(window.bwidth);
	window.leftmobile = 0-(window.bwidth/1);
	window.centermobile = 0;
	window.rightmobile = window.bwidth/1;
	window.farrightmobile = window.bwidth;

	//resloader();

	// set responsive for number of panels on each page
	for (var i = 0	; i <= 12	; i++) {
		respanels(i);
	}

	

	// Move each panel except the first one under the screen.
	for (var panelcount = 2; panelcount <= window.totalPanels; panelcount++) {
		$(".panel"+panelcount+"-C61RwL").css({top: window.bheight});
		$(".panel"+panelcount+"mobi-econtainer-C61RwL").css({top: window.bheight});
	}
	$(".footer-C61RwL").css({top: window.bheight});
	$(".footermobile-C61RwL").css({top: window.bheight});
	//$(".footer").css({top: window.bheight});
	// Set initial positions for the product carousell
	TweenMax.to(".pack3-iBIYlP", 1, {left:window.farright, top:0, scale:0.7, ease:Power3.easeInOut}); // Far Right
	TweenMax.to(".pack4-iBIYlP", 1, {left:window.farright, top:0, scale:0.7, ease:Power3.easeInOut}); // Far Right
	TweenMax.to(".pack5-iBIYlP", 1, {left:window.farright, top:0, scale:0.7, ease:Power3.easeInOut}); // Far Right
	TweenMax.to(".pack6-iBIYlP", 1, {left:window.farright, top:0, scale:0.7, ease:Power3.easeInOut}); // Far Right
	TweenMax.to(".pack7-iBIYlP", 1, {left:window.farright, top:0, scale:0.7, ease:Power3.easeInOut}); // Far Right
	// Mobile
	TweenMax.to(".pack3-2TxwAj", 1, {left:window.rightmobile, top:0, scale:0.7, ease:Power3.easeInOut}); // Far Right
	TweenMax.to(".pack4-2TxwAj", 1, {left:window.farrightmobile, top:0, scale:0.7, ease:Power3.easeInOut}); // Far Right
	TweenMax.to(".pack5-2TxwAj", 1, {left:window.farrightmobile, top:0, scale:0.7, ease:Power3.easeInOut}); // Far Right
	TweenMax.to(".pack6-2TxwAj", 1, {left:window.farrightmobile, top:0, scale:0.7, ease:Power3.easeInOut}); // Far Right
	TweenMax.to(".pack7-2TxwAj", 1, {left:window.farrightmobile, top:0, scale:0.7, ease:Power3.easeInOut}); // Far Right
	//TweenMax.to(".pack8-2TxwAj", 1, {left:window.farrightmobile, top:0, scale:0.7, ease:Power3.easeInOut}); // Far Right
	// Set Z-Index's
	$(".productdet-lsclosebtn-C61RwL").css('z-index', 200010);
	$(".productdet-scontainer-C61RwL").css('z-index', 200009);
	$(".banner-C61RwL").css('z-index', 200008);
	$(".loader-C61RwL").css('z-index', 300008);
	$(".navbuttons-C61RwL").css('z-index', 100007);
	$(".nav-C61RwL").css('z-index', 100006);
	$(".navmobilecontainer-C61RwL").css('z-index', 100006);
	$(".arrow-C61RwL").css('z-index', 100005);
	$(".dots-C61RwL").css('z-index', 100004);
	$(".iconbtn-C61RwL").css('z-index', 100003);




	$(".productdet-lsclosebtn-C61RwL").hide();
	//$(".nav-C61RwL").hide();
	$(".navmobilecontainer-C61RwL").hide();
	$(".navclosebtn-kpwyaS").hide();

	resfooter();
	resfooterstatic();
	resnav();
	respanelsmobile1();
	respanelsmobile2();
	resproductdetailsmobile();
	hideProductDetailsMobile();

	changeGallery();
	prodnext();
	dots();
	setNav();
	hashChecker();


	restartsubs();
	createsubsarrays();
	subsbuttonlinks();
	showsubssections(1);
	subssubmit();
	mobileCheck();

	if (window.page == "home") {
		//alert();
		$('.home').css('overflow', 'hidden');
	}

	//alert();

}

function navBlack() {
//	alert();
	for (var x = 1; x <= 8; x++) {
		$('.link'+x+'-RjZQ7j').css('color', 'black');
	}
	for (var x = 1; x <= 8; x++) {
		$('.link'+x+'-RjZQ7j').css('color', 'black');
	}
	for (var x = 1; x <= 8; x++) {
		$('.link'+x+'-RjZQ7j').css('color', 'black');
	}

	$('.logowhite-6h9V9e').hide();
	$('.logoblack-6h9V9e').show();
}


function navWhite() {
	for (var x = 1; x <= 8; x++) {
		$('.link'+x+'-RjZQ7j').css('color', 'white');
	}
	for (var x = 1; x <= 8; x++) {
		$('.link'+x+'-RjZQ7j').css('color', 'white');
	}
	for (var x = 1; x <= 8; x++) {
		$('.link'+x+'-RjZQ7j').css('color', 'white');
	}

	$('.logowhite-6h9V9e').show();
	$('.logoblack-6h9V9e').hide();
}
// Specific animations for each panel
function slideAnim() {
	//alert(window.panelNo);
	if (window.panelNo != "1" && window.page == "home") {
		navBlack();
	} else {
		navWhite();
	}
}

// If mobile set the number of panels to 3
function mobileCheck() {
	if (window.bwidth < 1020) {
		window.totalPanels = 3;
	}
}

document.addEventListener('touchstart', handleTouchStart, false);
document.addEventListener('touchmove', handleTouchMove, false);

var xDown = null;
var yDown = null;

function getTouches(evt) {
  return evt.touches ||             // browser API
         evt.originalEvent.touches; // jQuery
}

function handleTouchStart(evt) {
    const firstTouch = getTouches(evt)[0];
    xDown = firstTouch.clientX;
    yDown = firstTouch.clientY;
};

function handleTouchMove(evt) {
    if ( ! xDown || ! yDown ) {
        return;
    }

    var xUp = evt.touches[0].clientX;
    var yUp = evt.touches[0].clientY;

    var xDiff = xDown - xUp;
    var yDiff = yDown - yUp;

    if ( Math.abs( xDiff ) > Math.abs( yDiff ) ) {/*most significant*/
        if ( xDiff > 0 ) {
            /* left swipe */
        } else {
            /* right swipe */
        }
    } else {
        if ( yDiff > 0 ) {
            slideNext();
        } else {
            slidePrev();
        }
    }
    /* reset values */
    xDown = null;
    yDown = null;
};

// Go to the panel based on the URL string
function hashChecker() {
	//alert();

		if (window.location.hash == "#/blends") {
			setTimeout(function(){ slideDirectSideNav(2) }, 1000);
		} else if (window.location.hash == "#caballo") {
			setTimeout(function(){ slideDirectSideNav(3) }, 1000);
		} else if (window.location.hash == "#/mariposa") {
			setTimeout(function(){ slideDirectSideNav(4) }, 1000);
		} else if (window.location.hash == "#/corazon") {
			setTimeout(function(){ slideDirectSideNav(5) }, 1000);
		} else if (window.location.hash == "#/mexicanorganic") {
			setTimeout(function(){ slideDirectSideNav(6) }, 1000);
		} else if (window.location.hash == "#/dimbulah") {
			setTimeout(function(){ slideDirectSideNav(7) }, 1000);
		} else if (window.location.hash == "#/mexicandecaffeinated") {
			setTimeout(function(){ slideDirectSideNav(8) }, 1000);
		} else if (window.location.hash == "#/swisswaterdecaffeinated") {
			setTimeout(function(){ slideDirectSideNav(9) }, 1000);
		} else if (window.location.hash == "#/skybury") {
			setTimeout(function(){ slideDirectSideNav(10) }, 1000);
		} else if (window.location.hash == "#/shop") {
			setTimeout(function(){ slideDirectSideNav(2) }, 1000);
		}


}

function showProductDetailsMobile(event) {
	//alert(event.data.product);
	product = event.data.product;
	//alert(product);
	center = (bheight/2) - ($(".productdet-scontainer-C61RwL")[0].getBoundingClientRect().height/2);
	TweenMax.to(".productdet-scontainer-C61RwL", 0.5, {top:center, ease:Power3.easeInOut});
	$(".productdet-lsclosebtn-C61RwL").show();
	for (var x = 1; x <= window.totalProducts; x++) {
		$(".product"+x+"-xdY9tB").hide();
	}
	$(".product"+product+"-xdY9tB").show();
}
function hideProductDetailsMobile() {
	TweenMax.to(".productdet-scontainer-C61RwL", 0.5, {top:window.bheight+100, ease:Power3.easeInOut});
	$(".productdet-lsclosebtn-C61RwL").hide();
}


// Subscriptions code
function subsnextback(x) {
	if (x == "next") {
		if (window.subsectionnumber < 4) {
			window.subsectionnumber++;
			showsubssections(window.subsectionnumber,"forward");
		}
	}
	if (x == "back") {
		if (window.subsectionnumber > 1) {
			window.subsectionnumber--;
			showsubssections(window.subsectionnumber,"back");
		}
	}
}
function restartsubs() {
	$(".subsmytotal-mgDOxp").html("");
	//$(".bp2-subsmytotal-mgDOxp").html("fsdf");
	window.subsectionnumber = 1;
	window.subsselectedfrequency = 1;
	window.subsselectedgrind = 1;
	window.subsselectedweight = 2;
	window.subsselectedvolume = 1;
	window.subsselectednumber = 0;
	window.blendSelected = false;
	window.grindSelected = false;
	window.weightSelected = false;
	window.frequencySelected = false;
	window.discountpercent = 90;
	TweenMax.to(".subssection2-qYHq91", 0, {y:600, opacity:0, ease:Power3.easeInOut});
	TweenMax.to(".subssection3-qYHq91", 0, {y:600, opacity:0, ease:Power3.easeInOut});
	TweenMax.to(".subssection4-qYHq91", 0, {y:600, opacity:0, ease:Power3.easeInOut});
	$(".checkoutnote-Rv2Nh5").hide();
	//TweenMax.to(".bp2-subssection2-qYHq91", 0, {y:600, opacity:0, ease:Power3.easeInOut});
	//TweenMax.to(".bp2-subssection3-qYHq91", 0, {y:600, opacity:0, ease:Power3.easeInOut});
	//TweenMax.to(".bp2-subssection4-qYHq91", 0, {y:600, opacity:0, ease:Power3.easeInOut});
	//$(".bp2-checkoutnote").hide();
	TweenMax.to(".subssection1-qYHq91", 0, {y:0, opacity:1, ease:Power3.easeInOut});
	//TweenMax.to(".bp2-subssection1-qYHq91", 0, {y:0, opacity:1, ease:Power3.easeInOut});
	$(".subssections-Rv2Nh5").show();
	$(".checkoutnote-Rv2Nh5").hide();
	//$(".bp2-subssections").show();
	//$(".bp2-checkoutnote").hide();
	showsubssections(1);
	for (i = 1; i <= 9; i++) {
		$('.subssection1option'+i+'-OpbOVz').fadeTo(0, 1);
		//$('.bp2-subssection1option'+i+'').fadeTo(0, 1);
	}
	for (i = 1; i <= 5; i++) {
		$('.subssection2option'+i+'-m3OLst').fadeTo(0, 1);
		//$('.bp2-subssection2option'+i+'').fadeTo(0, 1);
	}
	for (i = 1; i <= 3; i++) {
		$('.subssection3option'+i+'-iSUTKS').fadeTo(0, 1);
		//$('.bp2-subssection3option'+i+'').fadeTo(0, 1);
	}
	for (i = 1; i <= 4; i++) {
		$('.subssection4option'+i+'-bl0e0w').fadeTo(0, 1);
		// $('.bp2-subssection4option'+i+'').fadeTo(0, 1);
	}
		$(".subsblendsselected-I2DrL6").html("");
		$(".subsbeansselected-HGpxJ1").html("");
		$(".subsweightselected-SSA4ea").html("");
		$(".subsfreque-cyselected-CW7aR9").html("");
		//$(".bp2-subsblendsselected").html("");
		//$(".bp2-subsbeansselected").html("");
		//$(".bp2-subsweightselected").html("");
		//$(".bp2-subsfrequencyselected").html("");
		window.blendSelected = false;
		window.grindSelected == false;
		window.weightSelected == false;
		window.frequencySelected == false;
		//subssubmit();
}
function subssubmit() {
	if (window.subsblendnumber == 1) {
		window.variatal = window.subsData1[window.subsselectedgrind][window.subsselectedweight];
		var discount = ((window.subsData1[0][window.subsselectedweight+2]/100)*window.discountpercent)*window.subsselectedvolume;
		var n = discount.toFixed(2);
		$(".subsmytotal-mgDOxp").html("TOTAL $"+n);
		//$(".bp2-subsmytotal").html("TOTAL $"+n);
	} else if (window.subsblendnumber == 2) {
		window.variatal = window.subsData2[window.subsselectedgrind][window.subsselectedweight];
		var discount = ((window.subsData2[0][window.subsselectedweight+2]/100)*window.discountpercent)*window.subsselectedvolume;
		var n = discount.toFixed(2);
		$(".subsmytotal-mgDOxp").html("TOTAL $"+n);
		//$(".bp2-subsmytotal").html("TOTAL $"+n);
	} else if (window.subsblendnumber == 3) {
		window.variatal = window.subsData3[window.subsselectedgrind][window.subsselectedweight];
		var discount = ((window.subsData3[0][window.subsselectedweight+2]/100)*window.discountpercent)*window.subsselectedvolume;
		var n = discount.toFixed(2);
		$(".subsmytotal-mgDOxp").html("TOTAL $"+n);
		//$(".bp2-subsmytotal").html("TOTAL $"+n);
	} else if (window.subsblendnumber == 4) {
		window.variatal = window.subsData4[window.subsselectedgrind][window.subsselectedweight];
		var discount = ((window.subsData4[0][window.subsselectedweight+2]/100)*window.discountpercent)*window.subsselectedvolume;
		var n = discount.toFixed(2);
		$(".subsmytotal-mgDOxp").html("TOTAL $"+n);
		//$(".bp2-subsmytotal").html("TOTAL $"+n);
	} else if (window.subsblendnumber == 5) {
		window.variatal = window.subsData5[window.subsselectedgrind][window.subsselectedweight];
		var discount = ((window.subsData5[0][window.subsselectedweight+2]/100)*window.discountpercent)*window.subsselectedvolume;
		var n = discount.toFixed(2);
		$(".subsmytotal-mgDOxp").html("TOTAL $"+n);
		//$(".bp2-subsmytotal").html("TOTAL $"+n);
	} else if (window.subsblendnumber == 6) {
		window.variatal = window.subsData6[window.subsselectedgrind][window.subsselectedweight];
		var discount = ((window.subsData6[0][window.subsselectedweight+2]/100)*window.discountpercent)*window.subsselectedvolume;
		var n = discount.toFixed(2);
		$(".subsmytotal-mgDOxp").html("TOTAL $"+n);
		//$(".bp2-subsmytotal").html("TOTAL $"+n);
	} else if (window.subsblendnumber == 7) {
		window.variatal = window.subsData7[window.subsselectedgrind][window.subsselectedweight];
		var discount = ((window.subsData7[0][window.subsselectedweight+2]/100)*window.discountpercent)*window.subsselectedvolume;
		var n = discount.toFixed(2);
		$(".subsmytotal-mgDOxp").html("TOTAL $"+n);
		//$(".bp2-subsmytotal").html("TOTAL $"+n);
	} else if (window.subsblendnumber == 8) {
		window.variatal = window.subsData8[window.subsselectedgrind][window.subsselectedweight];
		var discount = ((window.subsData8[0][window.subsselectedweight+2]/100)*window.discountpercent)*window.subsselectedvolume;
		var n = discount.toFixed(2);
		$(".subsmytotal-mgDOxp").html("TOTAL $"+n);
		//$(".bp2-subsmytotal").html("TOTAL $"+n);
	} else if (window.subsblendnumber == 9) {
		window.variatal = window.subsData9[window.subsselectedgrind][window.subsselectedweight];
		var discount = ((window.subsData9[0][window.subsselectedweight+2]/100)*window.discountpercent)*window.subsselectedvolume;
		var n = discount.toFixed(2);
		$(".subsmytotal-mgDOxp").html("TOTAL $"+n);
		//$(".bp2-subsmytotal").html("TOTAL $"+n);
	}
	window.subsfullstring = "https://kmcr.myshopify.com/tools/checkout/buy_button/add_to_cart?p="+window.productcode+"&v="+window.variatal+"&g=139598&fn="+window.subsselectedfrequencynumber+"&ft="+window.subsselectedfrequencytype +"&dp=$40.00&rdp=1&rup=4000&q="+window.subsselectedvolume+"";
	//window.subsectionnumber++;
	if (window.blendSelected == true && window.grindSelected == true && window.weightSelected == true && window.frequencySelected == true) {
			$(".subsaddtocart-mgDOxp").fadeTo("fast" , 1);
			$(".subsaddtocart-mgDOxp").css({'cursor': 'pointer'}).click(function() {  window.location.href = ""+window.subsfullstring+""; });
			//$(".bp2-subsaddtocart").fadeTo("fast" , 1);
			//$(".bp2-subsaddtocart").css({'cursor': 'pointer'}).click(function() {  window.location.href = ""+window.subsfullstring+""; });

			$(".subssections-Rv2Nh5").hide();
			$(".checkoutnote-Rv2Nh5").show();
			//$(".bp2-subssections").hide();
			//$(".bp2-checkoutnote").show();

			if (window.browsersize = "mobile") {
				//gsap.to(window, {duration: 2, scrollTo:".bp2-subsmytotal"});
			}
	} else {
			$(".subsaddtocart-mgDOxp").fadeTo("fast" , 0.5);
			$(".subsaddtocart-mgDOxp").css({'cursor': 'default'}).unbind('click');
			//$(".bp2-subsaddtocart").fadeTo("fast" , 0.5);
	}
}
function subsvolumeup(){
	window.subsselectedvolume++;
	$(".subsbagsselected-qFZBUE").html(window.subsselectedvolume);
	//$(".bp2-subsbagsselected").html(window.subsselectedvolume);
	subssubmit();
}
function subsvolumedown(){
	if (window.subsselectedvolume > 1  ) {
		window.subsselectedvolume--;
	}
	$(".subsbagsselected-qFZBUE").html(window.subsselectedvolume);
	//$(".bp2-subsbagsselected").html(window.subsselectedvolume);
	subssubmit();
}
function showsubssections(x,y) {
	window.subsectionnumber = x;
	if (y == "forward") {
		TweenMax.to(".subssection"+(x-1)+"-qYHq91", 0.5, {y:-600, opacity:0, ease:Power3.easeInOut});
		TweenMax.to(".subssection"+x+"-qYHq91", 0.5, {y:0, opacity:1, ease:Power3.easeInOut});
		//
		//TweenMax.to(".bp2-subssection"+(x-1)+"", 0.5, {y:-600, opacity:0, ease:Power3.easeInOut});
		//TweenMax.to(".bp2-subssection"+x+"", 0.5, {y:0, opacity:1, ease:Power3.easeInOut});
	} else if (y == "back") {
		TweenMax.to(".subssection"+(x+1)+"-qYHq91", 0.5, {y:+600, opacity:0, ease:Power3.easeInOut});
		TweenMax.to(".subssection"+x+"-qYHq91", 0.5, {y:0, opacity:1, ease:Power3.easeInOut});
		//
		//TweenMax.to(".bp2-subssection"+(x+1)+"", 0.5, {y:+600, opacity:0, ease:Power3.easeInOut});
		//TweenMax.to(".bp2-subssection"+x+"", 0.5, {y:0, opacity:1, ease:Power3.easeInOut});
	}
	if (x == 1) {
		$('.subsprogresstitle-qYHq91').html('Choose your Blend');
		//$('.bp2-subsprogresstitle').html('Choose your Blend');
	} else if (x == 2) {
		$('.subsprogresstitle-qYHq91').html('Choose your Grind');
		//$('.bp2-subsprogresstitle').html('Choose your Grind');
	} else if (x == 3) {
		$('.subsprogresstitle-qYHq91').html('Choose your Weight');
		//$('.bp2-subsprogresstitle').html('Choose your Weight');;
	} else if (x == 4) {
		$('.subsprogresstitle-qYHq91').html('Choose your Frequency');
		//$('.bp2-subsprogresstitle').html('Choose your Frequency');
	}
	$('.subsprogress-qYHq91').html(x+' of 4');
	//$('.bp2-subsprogress').html(x+' of 4');
	if (x == 4) {
			$(".subsnext-qYHq91").hide();
			$(".subsprev-qYHq91").show();
			//$(".bp2-subsnext").hide();
			//$(".bp2-subsprev").show();
	} else if (x == 1) {
		$(".subsprev-qYHq91").hide();
		$(".subsnext-qYHq91").show();
		//$(".bp2-subsprev").hide();
		//$(".bp2-subsnext").show();
	} else {
		$(".subsnext-qYHq91").show();
		$(".subsprev-qYHq91").show();
		//$(".bp2-subsnext").show();
		//$(".bp2-subsprev").show();
	}
}
function subsbuttonlinks() {

	$(".subssection1option1-TEs5WN").css({'cursor': 'pointer'}).click(function() {  window.subsblendnumber = 1; selectBlend();  });
	$(".subssection1option2-TEs5WN").css({'cursor': 'pointer'}).click(function() {  window.subsblendnumber = 2; selectBlend();  });
	$(".subssection1option3-TEs5WN").css({'cursor': 'pointer'}).click(function() {  window.subsblendnumber = 3; selectBlend();  });
	$(".subssection1option4-TEs5WN").css({'cursor': 'pointer'}).click(function() {  window.subsblendnumber = 4; selectBlend();  });
	$(".subssection1option5-TEs5WN").css({'cursor': 'pointer'}).click(function() {  window.subsblendnumber = 5; selectBlend();  });
	$(".subssection1option6-TEs5WN").css({'cursor': 'pointer'}).click(function() {  window.subsblendnumber = 6; selectBlend();  });
	$(".subssection1option7-TEs5WN").css({'cursor': 'pointer'}).click(function() {  window.subsblendnumber = 7; selectBlend();  });
	$(".subssection1option8-TEs5WN").css({'cursor': 'pointer'}).click(function() {  window.subsblendnumber = 8; selectBlend();  });
	$(".subssection1option9-TEs5WN").css({'cursor': 'pointer'}).click(function() {  window.subsblendnumber = 9; selectBlend();  });

	$(".subssection2option1-m3OLst").css({'cursor': 'pointer'}).click(function() {  window.subsselectedgrind = 1; selectGrind(); }); // 1 = Beans. 2 = Standard, 3 = Fine, 4 = Medium, 5 = Coarse
	$(".subssection2option2-m3OLst").css({'cursor': 'pointer'}).click(function() {  window.subsselectedgrind = 2; selectGrind(); });
	$(".subssection2option3-m3OLst").css({'cursor': 'pointer'}).click(function() {  window.subsselectedgrind = 3; selectGrind(); });
	$(".subssection2option4-m3OLst").css({'cursor': 'pointer'}).click(function() {  window.subsselectedgrind = 4; selectGrind(); });
	$(".subssection2option5-m3OLst").css({'cursor': 'pointer'}).click(function() {  window.subsselectedgrind = 5; selectGrind(); });

	$(".subssection3option1-iSUTKS").css({'cursor': 'pointer'}).click(function() {  window.subsselectedweight = 0; selectWeight(); }); // 0 = 1kg, 1 = 500g, 2 = 250g
	$(".subssection3option2-iSUTKS").css({'cursor': 'pointer'}).click(function() {  window.subsselectedweight = 1; selectWeight(); });
	$(".subssection3option3-iSUTKS").css({'cursor': 'pointer'}).click(function() {  window.subsselectedweight = 2; selectWeight(); });

	$(".subssection4option1-bl0e0w").css({'cursor': 'pointer'}).click(function() {  window.subsselectedfrequency = 1; selectFrequency(); }); // 0 = 1kg, 1 = 500g, 2 = 150g
	$(".subssection4option2-bl0e0w").css({'cursor': 'pointer'}).click(function() {  window.subsselectedfrequency = 2; selectFrequency(); });
	$(".subssection4option3-bl0e0w").css({'cursor': 'pointer'}).click(function() {  window.subsselectedfrequency = 3; selectFrequency(); });
	$(".subssection4option4-bl0e0w").css({'cursor': 'pointer'}).click(function() {  window.subsselectedfrequency = 4; selectFrequency(); });

	$(".subsvolumeup-JGGKRD").css({'cursor': 'pointer'}).click(function() {  subsvolumeup(); });
	$(".subsvolumedown-JGGKRD").css({'cursor': 'pointer'}).click(function() {  subsvolumedown(); });

	$(".subsnext-qYHq91").css({'cursor': 'pointer'}).click(function() {  subsnextback("next"); });
	$(".subsprev-qYHq91").css({'cursor': 'pointer'}).click(function() {  subsnextback("back"); });
	//
	//$(".bp2-subssection1option1").css({'cursor': 'pointer'}).click(function() {  window.subsblendnumber = 1; selectBlend();  });
	//$(".bp2-subssection1option2").css({'cursor': 'pointer'}).click(function() {  window.subsblendnumber = 2; selectBlend();  });
	//$(".bp2-subssection1option3").css({'cursor': 'pointer'}).click(function() {  window.subsblendnumber = 3; selectBlend();  });
	//$(".bp2-subssection1option4").css({'cursor': 'pointer'}).click(function() {  window.subsblendnumber = 4; selectBlend();  });
	//$(".bp2-subssection1option5").css({'cursor': 'pointer'}).click(function() {  window.subsblendnumber = 5; selectBlend();  });
	//$(".bp2-subssection1option6").css({'cursor': 'pointer'}).click(function() {  window.subsblendnumber = 6; selectBlend();  });
	//$(".bp2-subssection1option7").css({'cursor': 'pointer'}).click(function() {  window.subsblendnumber = 7; selectBlend();  });

	//$(".bp2-subssection2option1").css({'cursor': 'pointer'}).click(function() {  window.subsselectedgrind = 1; selectGrind(); }); // 1 = Beans. 2 = Standard, 3 = Fine, 4 = Medium, 5 = Coarse
	//$(".bp2-subssection2option2").css({'cursor': 'pointer'}).click(function() {  window.subsselectedgrind = 2; selectGrind(); });
	//$(".bp2-subssection2option3").css({'cursor': 'pointer'}).click(function() {  window.subsselectedgrind = 3; selectGrind(); });
	//$(".bp2-subssection2option4").css({'cursor': 'pointer'}).click(function() {  window.subsselectedgrind = 4; selectGrind(); });
	//$(".bp2-subssection2option5").css({'cursor': 'pointer'}).click(function() {  window.subsselectedgrind = 5; selectGrind(); });

	//$(".bp2-subssection3option1").css({'cursor': 'pointer'}).click(function() {  window.subsselectedweight = 0; selectWeight(); }); // 0 = 1kg, 1 = 500g, 2 = 250g
	//$(".bp2-subssection3option2").css({'cursor': 'pointer'}).click(function() {  window.subsselectedweight = 1; selectWeight(); });
	//$(".bp2-subssection3option3").css({'cursor': 'pointer'}).click(function() {  window.subsselectedweight = 2; selectWeight(); });

	//$(".bp2-subssection4option1").css({'cursor': 'pointer'}).click(function() {  window.subsselectedfrequency = 1; selectFrequency(); }); // 0 = 1kg, 1 = 500g, 2 = 150g
	//$(".bp2-subssection4option2").css({'cursor': 'pointer'}).click(function() {  window.subsselectedfrequency = 2; selectFrequency(); });
	//$(".bp2-subssection4option3").css({'cursor': 'pointer'}).click(function() {  window.subsselectedfrequency = 3; selectFrequency(); });
	//$(".bp2-subssection4option4").css({'cursor': 'pointer'}).click(function() {  window.subsselectedfrequency = 4; selectFrequency(); });

	//$(".bp2-subsvolumeup").css({'cursor': 'pointer'}).click(function() {  subsvolumeup(); });
	//$(".bp2-subsvolumedown").css({'cursor': 'pointer'}).click(function() {  subsvolumedown(); });

	//$(".bp2-subsnext").css({'cursor': 'pointer'}).click(function() {  subsnextback("next"); });
	//$(".bp2-subsprev").css({'cursor': 'pointer'}).click(function() {  subsnextback("back"); });
}
function selectBlend() {
	window.blendSelected = true;
	for (i = 1; i <= 7; i++) {
		$('.subssection1option'+i+'-OpbOVz').fadeTo(0, 0.5);
		//$('.bp2-subssection1option'+i+'').fadeTo(0, 0.5);
	}
	$('.subssection1option'+window.subsblendnumber+'-TEs5WN').fadeTo(0, 1);
	//$('.bp2-subssection1option'+window.subsblendnumber+'').fadeTo(0, 1);
	if (window.subsblendnumber == 1) {
		$(".subsblendsselected-I2DrL6").html("Originale");
		//$(".bp2-subsblendsselected").html("Originale");
		window.productcode = window.subsData1[0][1];
	} else if (window.subsblendnumber == 2) {
		$(".subsblendsselected-I2DrL6").html("DK 258");
		//$(".bp2-subsblendsselected").html("DK 258");
		window.productcode = window.subsData2[0][1];
	} else if (window.subsblendnumber == 3) {
		$(".subsblendsselected-I2DrL6").html("Mexican Organic");
		//$(".bp2-subsblendsselected").html("Mexican Organic");
		window.productcode = window.subsData3[0][1];
	} else if (window.subsblendnumber == 4) {
		$(".subsblendsselected-I2DrL6").html("Dimbulah");
			//$(".bp2-subsblendsselected").html("Dimbulah");
		window.productcode = window.subsData4[0][1];
	} else if (window.subsblendnumber == 5) {
		$(".subsblendsselected-I2DrL6").html("Mexican Decaffeinated");
		//$(".bp2-subsblendsselected").html("Mexican Decaffeinated");
		window.productcode = window.subsData5[0][1];
	} else if (window.subsblendnumber == 6) {
		$(".subsblendsselected-I2DrL6").html("Skybury");
			//$(".bp2-subsblendsselected").html("Skybury");
		window.productcode = window.subsData6[0][1];
	} else if (window.subsblendnumber == 7) {
		$(".subsblendsselected-I2DrL6").html("Swiss Water Decaffeinated");
		//$(".bp2-subsblendsselected").html("Swiss Water Decaffeinated");
		window.productcode = window.subsData7[0][1];
	}
	setTimeout(function() {
		showsubssections(2,"forward");
		TweenMax.to(".subssection1-TEs5WN", 0.5, {y:-600, opacity:0, ease:Power3.easeInOut});
		TweenMax.to(".subssection2-TEs5WN", 0.5, {y:0, opacity:1, ease:Power3.easeInOut});
		//TweenMax.to(".bp2-subssection1", 0.5, {y:-600, opacity:0, ease:Power3.easeInOut});
		//TweenMax.to(".bp2-subssection2", 0.5, {y:0, opacity:1, ease:Power3.easeInOut});
	}, 800);
	//showsubssections(2);
	subssubmit();
}
function selectGrind() {
	window.grindSelected = true;
	for (i = 1; i <= 7; i++) {
		$('.subssection2option'+i+'-m3OLst').fadeTo(0, 0.5);
			//$('.bp2-subssection2option'+i+'').fadeTo(0, 0.5);
	}
	$('.subssection2option'+window.subsselectedgrind+'-m3OLst').fadeTo(0, 1);
		//$('.bp2-subssection2option'+window.subsselectedgrind+'').fadeTo(0, 1);
	if (window.subsselectedgrind == 1) {
		$(".subsbeansselected-HGpxJ1").html("Beans");
		//$(".bp2-subsbeansselected").html("Beans");
	} else if (window.subsselectedgrind == 2) {
		$(".subsbeansselected-HGpxJ1").html("Standard Grind");
		//$(".bp2-subsbeansselected").html("Standard Grind");
	} else if (window.subsselectedgrind == 3) {
		$(".subsbeansselected-HGpxJ1").html("Fine");
		//$(".bp2-subsbeansselected").html("Fine");
	} else if (window.subsselectedgrind == 4) {
		$(".subsbeansselected-HGpxJ1").html("Medium");
		//$(".bp2-subsbeansselected").html("Medium");
	} else if (window.subsselectedgrind == 5) {
		$(".subsbeansselected-HGpxJ1").html("Coarse");
		//$(".bp2-subsbeansselected").html("Coarse");
	}
	setTimeout(function() {
		showsubssections(3,"forward");
		TweenMax.to(".subssection2-qYHq91", 0.5, {y:-300, opacity:0, ease:Power3.easeInOut});
		TweenMax.to(".subssection3-qYHq91", 0.5, {y:0, opacity:1, ease:Power3.easeInOut});
		//TweenMax.to(".bp2-subssection2", 0.5, {y:-300, opacity:0, ease:Power3.easeInOut});
		//TweenMax.to(".bp2-subssection3", 0.5, {y:0, opacity:1, ease:Power3.easeInOut});
	}, 800);
	subssubmit();
}
function selectWeight() {
	window.weightSelected = true;
	for (i = 1; i <= 7; i++) {
		$('.subssection3option'+i+'-iSUTKS').fadeTo(0, 0.5);
		//$('.bp2-subssection3option'+i+'').fadeTo(0, 0.5);
	}
	$('.subssection3option'+(window.subsselectedweight+1)+'-iSUTKS').fadeTo(0, 1);
	//$('.bp2-subssection3option'+(window.subsselectedweight+1)+'').fadeTo(0, 1);
	if (window.subsselectedweight == 0) {
		$(".subsweightselected-SSA4ea").html("1kg");
		//$(".bp2-subsweightselected").html("1kg");
	} else if (window.subsselectedweight == 1) {
		$(".subsweightselected-SSA4ea").html("500g");
		//$(".bp2-subsweightselected").html("500g");
	} else if (window.subsselectedweight == 2) {
		$(".subsweightselected-SSA4ea").html("250g");
		//$(".bp2-subsweightselected").html("250g");
	}
	setTimeout(function() {
		showsubssections(4,"forward");
		TweenMax.to(".subssection3-qYHq91", 0.5, {y:-300, opacity:0, ease:Power3.easeInOut});
		TweenMax.to(".subssection4-qYHq91", 0.5, {y:0, opacity:1, ease:Power3.easeInOut});
		//TweenMax.to(".bp2-subssection3", 0.5, {y:-300, opacity:0, ease:Power3.easeInOut});
		//TweenMax.to(".bp2-subssection4", 0.5, {y:0, opacity:1, ease:Power3.easeInOut});
	}, 800);
	subssubmit();
}
function selectFrequency() {
	window.frequencySelected = true;
	window.weightSelected = true;
	for (i = 1; i <= 7; i++) {
		$('.subssection4option'+i+'-bl0e0w').fadeTo(0, 0.5);
		//$('.bp2-subssection4option'+i+'').fadeTo(0, 0.5);
	}
	$('.subssection4option'+window.subsselectedfrequency+'-bl0e0w').fadeTo(0, 1);
	//$('.bp2-subssection4option'+window.subsselectedfrequency+'').fadeTo(0, 1);
	if (window.subsselectedfrequency == 1) {
		$(".subsfreque-cyselected-CW7aR9").html("Once a week");
		//$(".bp2-subsfrequencyselected").html("Once a week");
		window.subsselectedfrequencytype = 2; // 1 = day, 2 = week, 3 = Month, 4 = Year.
		window.subsselectedfrequencynumber = 1; // 1 = Once, 2 = Twice etc.
	} else if (window.subsselectedfrequency == 2) {
		$(".subsfreque-cyselected-CW7aR9").html("Every other week");
		//$(".bp2-subsfrequencyselected").html("Every other week");
		window.subsselectedfrequencytype = 2; // 1 = day, 2 = week, 3 = Month, 4 = Year.
		window.subsselectedfrequencynumber = 2; // 1 = Once, 2 = Twice etc.
	}  else if (window.subsselectedfrequency == 3) {
		$(".subsfreque-cyselected-CW7aR9").html("Once a month");
		//$(".bp2-subsfrequencyselected").html("Once a month");
		window.subsselectedfrequencytype = 3; // 1 = day, 2 = week, 3 = Month, 4 = Year.
		window.subsselectedfrequencynumber = 1; // 1 = Once, 2 = Twice etc.
	} else if (window.subsselectedfrequency == 4) {
		$(".subsfreque-cyselected-CW7aR9").html("Every six weeks");
		//$(".bp2-subsfrequencyselected").html("Every six weeks");
		window.subsselectedfrequencytype = 2; // 1 = day, 2 = week, 3 = Month, 4 = Year.
		window.subsselectedfrequencynumber = 6; // 1 = Once, 2 = Twice etc.
	}
	subssubmit();
}
function createsubsarrays() {
	//Subs Arrays
	window.subsData1 = [
		["Originale", 2652641525845, 40, 21, 11], // Name, Variatal Code, Price
		[22887699513429, 22887699546197, 22887699578965], // Beans - 1kg, 500g, 150g
		[22887699611733, 22887699644501, 22887699677269], // Standard - 1kg, 500g, 150g
		[22887699710037, 22887699742805, 22887699775573], // Fine - 1kg, 500g, 150g
		[22887699808341, 22887699841109, 22887699873877], // Medium - 1kg, 500g, 150g
		[22887699906645, 22887699939413, 22887699972181] // Coarse - 1kg, 500g, 150g
	];
	window.subsData2 = [
		["DK 258", 2652641362005, 29, 15.50, 8.50], // Name, Variatal Code
		[22887698661461, 22887698694229, 22887698726997], // Beans - 1kg, 500g, 150g
		[22887698759765, 22887698792533, 22887698825301], // Standard - 1kg, 500g, 150g
		[22887698858069, 22887698890837, 22887698923605], // Fine - 1kg, 500g, 150g
		[22887698956373, 22887698989141, 22887699021909], // Medium - 1kg, 500g, 150g
		[22887699054677, 22887699087445, 22887699120213] // Coarse - 1kg, 500g, 150g
	];
	window.subsData3 = [
		["Mexican Organic", 2652640641109, 40, 21, 11], // Name, Variatal Code
		[22887695646805, 22887695679573, 22887695712341], // Beans - 1kg, 500g, 150g
		[22887695745109, 22887695777877, 22887695810645], // Standard - 1kg, 500g, 150g
		[22887695843413, 22887695876181, 22887695908949], // Fine - 1kg, 500g, 150g
		[22887695941717, 22887695974485, 22887696007253], // Medium - 1kg, 500g, 150g
		[22887696040021, 22887696072789, 22887696105557] // Coarse - 1kg, 500g, 150g
	];
	window.subsData4 = [
		["Dimbulah", 2652641132629, 40, 21, 11], // Name, Variatal Code
		[22887697842261, 22887697875029, 22887697907797], // Beans - 1kg, 500g, 150g
		[22887697940565, 22887697973333, 22887698006101], // Standard - 1kg, 500g, 150g
		[22887698038869, 22887698071637, 22887698104405], // Fine - 1kg, 500g, 150g
		[22887698137173, 22887698169941, 22887698202709], // Medium - 1kg, 500g, 150g
		[22887698235477, 22887698268245, 22887698301013] // Coarse - 1kg, 500g, 150g
	];
	window.subsData5 = [
		["Mexican Decaffeinated", 2652640804949, 40, 21, 11], // Name, Variatal Code
		[22887696203861, 22887696236629, 22887696269397], // Beans - 1kg, 500g, 150g
		[22887696302165, 22887696334933, 22887696367701], // Standard - 1kg, 500g, 150g
		[22887696400469, 22887696433237, 22887696466005], // Fine - 1kg, 500g, 150g
		[22887696498773, 22887696531541, 22887696564309], // Medium - 1kg, 500g, 150g
		[22887696597077, 22887696629845, 22887696662613] // Coarse - 1kg, 500g, 150g
	];
	window.subsData6 = [
		["Skybury", 4100954816597, 40, 21, 11], // Name, Variatal Code
		[30139591196757, 30139591229525, 30139591262293], // Beans - 1kg, 500g, 150g
		[30139591295061, 30139591327829, 30139591360597], // Standard - 1kg, 500g, 150g
		[30139591393365, 30139591426133, 30139591458901], // Fine - 1kg, 500g, 150g
		[30139591491669, 30139591524437, 30139591557205], // Medium - 1kg, 500g, 150g
		[30139591589973, 30139591622741, 30139591688277] // Coarse - 1kg, 500g, 150g
	];
	window.subsData7 = [
		["Swiss Water Decaffeinated", 2652639789141, 36, 19, 10], // Name, Variatal Code
		[22887692697685, 22887692730453, 22887692763221], // Beans - 1kg, 500g, 150g
		[22887692795989, 22887692828757, 22887692861525], // Standard - 1kg, 500g, 150g
		[22887692894293, 22887692927061, 22887692959829], // Fine - 1kg, 500g, 150g
		[22887692992597, 22887693025365, 22887693058133], // Medium - 1kg, 500g, 150g
		[22887693090901, 22887693123669, 22887693156437] // Coarse - 1kg, 500g, 150g
	];
}




function respanels(x) {
		var theighttc = $(".panel"+x+"-C61RwL").height();
		var ntheighttc = 1+((window.bheight-theighttc)/theighttc);
		TweenMax.to(".panel"+x+"-C61RwL", 0, {delay:0, scale:ntheighttc, transformOrigin:"top center"});
}
function resfooter() {
		var theighttc = $(".footer-C61RwL").height();
		var ntheighttc = 1+((window.bheight-theighttc)/theighttc);
		TweenMax.to(".footer-C61RwL", 0, {delay:0, scale:ntheighttc, transformOrigin:"top center"});
}
function resfooterstatic() {
	var twidthtop = $(".footerstatic-C61RwL").width();
	var ntwidthtop = 1+((window.bwidth-twidthtop)/twidthtop);
	TweenMax.to(".footerstatic-C61RwL", 0, {delay:0, scale:ntwidthtop, transformOrigin:"top center"});
}
function resnav() {
		//var theighttc = $(".nav-C61RwL").height();
		//var ntheighttc = 1+((window.bheight-theighttc)/theighttc);
		var twidthtop = $(".navmobile-VTJda2").width();
		var ntwidthtop = 1+((window.bwidth-twidthtop)/twidthtop);
	//	TweenMax.to(".nav-C61RwL", 0, {delay:0, scale:ntheighttc, transformOrigin:"top center"});
		TweenMax.to(".navmobile-VTJda2", 0, {delay:0, scale:ntwidthtop, transformOrigin:"top center"});
}

function respanelsmobile2() {
	var twidthtc = $(".panel2mobile-csgAQ6").width();
	var ntwidthtc = 1+((window.bwidth-twidthtc)/twidthtc);
	TweenMax.to(".panel2mobile-csgAQ6", 0, {delay:0, scale:ntwidthtc, transformOrigin:"middle center"});
}

function respanelsmobile1() {
	var twidthtc = $(".panel1mobile-xbcHS1").width();
	var ntwidthtc = 1+((window.bwidth-twidthtc)/twidthtc);
	TweenMax.to(".panel1mobile-xbcHS1", 0, {delay:0, scale:ntwidthtc, transformOrigin:"middle center"});
}



function resproductdetailsmobile() {
	var twidthtc = $(".productdetails-IojKqT").width();
	var ntwidthtc = 1+((window.bwidth-twidthtc)/twidthtc);
	TweenMax.to(".productdetails-IojKqT", 0, {delay:0, scale:ntwidthtc, transformOrigin:"middle center"});
}


// Hide and show the menu
function menushow() {
	$(".navclosebtn-kpwyaS").show();
	$(".navopenbtn-kpwyaS").hide();
	$(".nav-C61RwL").show();
	$(".navmobilecontainer-C61RwL").show();
	//
	var tl = new TimelineLite();
		tl.timeScale( 1.4 );
	tl.from(".link7-DwUKyT", 0.5, {opacity:0, left:-50, ease:Power3.easeOut})
	.from(".link2-DwUKyT", 0.5, {opacity:0, left:-50, ease:Power3.easeOut}, "-=0.4")
	.from(".link3-DwUKyT", 0.5, {opacity:0, left:-50, ease:Power3.easeOut}, "-=0.4")
	.from(".link8-DwUKyT", 0.5, {opacity:0, left:-50, ease:Power3.easeOut}, "-=0.4")
	.from(".link1-DwUKyT", 0.5, {opacity:0, left:-50, ease:Power3.easeOut}, "-=0.4")
	.from(".link4-DwUKyT", 0.5, {opacity:0, left:-50, ease:Power3.easeOut}, "-=0.4")
	.from(".link5-DwUKyT", 0.5, {opacity:0, left:-50, ease:Power3.easeOut}, "-=0.4")
	.from(".link6-DwUKyT", 0.5, {opacity:0, left:-50, ease:Power3.easeOut}, "-=0.4");

	var navtlmobile = new TimelineLite();
		navtlmobile.timeScale( 1.4 );
	navtlmobile.from(".link7-uFi25q", 0.5, {opacity:0, left:-50, ease:Power3.easeOut})
	.from(".link2-uFi25q", 0.5, {opacity:0, left:-50, ease:Power3.easeOut}, "-=0.4")
	.from(".link3-uFi25q", 0.5, {opacity:0, left:-50, ease:Power3.easeOut}, "-=0.4")
	.from(".link8-uFi25q", 0.5, {opacity:0, left:-50, ease:Power3.easeOut}, "-=0.4")
	.from(".link1-uFi25q", 0.5, {opacity:0, left:-50, ease:Power3.easeOut}, "-=0.4")
	.from(".link4-uFi25q", 0.5, {opacity:0, left:-50, ease:Power3.easeOut}, "-=0.4")
	.from(".link5-uFi25q", 0.5, {opacity:0, left:-50, ease:Power3.easeOut}, "-=0.4")
	.from(".link6-uFi25q", 0.5, {opacity:0, left:-50, ease:Power3.easeOut}, "-=0.4");
}
function menuhide() {
	$(".nav-C61RwL").hide();
	$(".navmobilecontainer-C61RwL").hide();
	$(".navclosebtn-kpwyaS").hide();
	$(".navopenbtn-kpwyaS").show();
}

// Capture mouse scroll
// Panel Slides
$('body').bind('mousewheel', function(e) {
	if(e.originalEvent.wheelDelta / 120 > 0) {
			slidePrev();
		} else {
			slideNext();
	}
});
function reset() {
	window.sliding = 1;
}
function slideNext() {
	//alert(window.totalPanels);
	if (window.sliding == 1 && window.panelNo < window.totalPanels) { // If the mouse is scrolled shut of the function so it only plays once until it is reset is called

		window.sliding = 2;
		window.panelNo++;
		window.panelDepth++;
		// If is final panel lift half way to reveal the footer
		if (window.panelNo == window.totalPanels) {

			TweenMax.to(".panel"+(window.panelNo-1)+"-C61RwL", 1, {top:0-(window.bheight/1.7), ease:Power2.easeInOut});
			TweenMax.to(".footer-C61RwL", 1, {top:(0-(window.bheight/1.7))+window.bheight, ease:Power2.easeInOut});
			// Mobile
			TweenMax.to(".panel"+(window.panelNo-1)+"mobi-econtainer-C61RwL", 1, {top:0-(window.bheight), ease:Power2.easeInOut});
			TweenMax.to(".footermobile-C61RwL", 1, {top:0, ease:Power2.easeInOut});
		} else {

			$(".panel"+window.panelNo+"-C61RwL").css('z-index', window.panelDepth);
			TweenMax.to(".panel"+window.panelNo+"-C61RwL", 1, {top:0, ease:Power2.easeInOut});
			TweenMax.to(".panel"+(window.panelNo-1)+"-C61RwL", 1, {top:0-window.bheight, ease:Power2.easeInOut});
			// mobile
			TweenMax.to(".panel"+window.panelNo+"mobi-econtainer-C61RwL", 1, {top:0, ease:Power2.easeInOut});
			TweenMax.to(".panel"+(window.panelNo-1)+"mobi-econtainer-C61RwL", 1, {top:0-window.bheight, ease:Power2.easeInOut});
		}
		slideAnim();
		dots();
		setTimeout(reset, 1200);
	}
}
function slidePrev() {
	if (window.sliding == 1 && window.panelNo > 1) { // If the mouse is scrolled shut of the function so it only plays once until it is reset is called
		window.sliding = 2;
		window.panelNo--;
		window.panelDepth++;
		$(".panel"+window.panelNo+"-C61RwL").css('z-index', window.panelDepth);
		TweenMax.to(".panel"+window.panelNo+"-C61RwL", 1, {top:0, ease:Power2.easeInOut});
		TweenMax.to(".panel"+(window.panelNo+1)+"-C61RwL", 1, {top:window.bheight, ease:Power2.easeInOut});
		TweenMax.to(".footer-C61RwL", 1, {top:window.bheight, ease:Power2.easeInOut});
		// mobile
		TweenMax.to(".panel"+window.panelNo+"mobi-econtainer-C61RwL", 1, {top:0, ease:Power2.easeInOut});
		TweenMax.to(".panel"+(window.panelNo+1)+"mobi-econtainer-C61RwL", 1, {top:window.bheight, ease:Power2.easeInOut});
		TweenMax.to(".footermobile-C61RwL", 1, {top:window.bheight, ease:Power2.easeInOut});
		slideAnim();
		dots();
		setTimeout(reset, 1200);
	}
}

function prodnext() {

	if (window.productNumber < window.totalProducts) {
		window.productNumber++;
	} else {
	//	alert();
		window.productNumber = 1;
		TweenMax.to(".pack"+(window.totalProducts-1)+"-iBIYlP", 1, {left:window.farleft, top:0, scale:0.5, ease:Power3.easeInOut}); // Far Left
		TweenMax.to(".pack"+(window.totalProducts)+"-iBIYlP", 1, {left:window.left, top:0, scale:0.8, ease:Power3.easeInOut}); // Left
		// Mobile
		TweenMax.to(".pack"+(window.totalProducts-1)+"-2TxwAj", 1, {left:window.farleftmobile, top:0, scale:0.5, ease:Power3.easeInOut}); // Far Left
		TweenMax.to(".pack"+(window.totalProducts)+"-2TxwAj", 1, {left:window.leftmobile, top:0, scale:0.8, ease:Power3.easeInOut}); // Left
	}
	TweenMax.to(".pack"+(window.productNumber-2)+"-iBIYlP", 1, {left:window.farleft, top:0, scale:0.5, ease:Power3.easeInOut}); // Far Left
	TweenMax.to(".pack"+(window.productNumber-1)+"-iBIYlP", 1, {left:window.left, top:0, scale:0.8, ease:Power3.easeInOut}); // Left
	TweenMax.to(".pack"+(window.productNumber)+"-iBIYlP", 1, {left:window.center, top:0, scale:1.3, ease:Power3.easeInOut}); // Center
	TweenMax.to(".pack"+(window.productNumber+1)+"-iBIYlP", 1, {left:window.right, top:0, scale:0.8, ease:Power3.easeInOut}); // Right
	TweenMax.to(".pack"+(window.productNumber+2)+"-iBIYlP", 0, {left:window.farright, top:0, scale:0.5, ease:Power3.easeInOut}); // Far Right
	// Mobile
	TweenMax.to(".pack"+(window.productNumber-2)+"-2TxwAj", 1, {left:window.farleftmobile, top:0, scale:0.5, ease:Power3.easeInOut}); // Far Left
	TweenMax.to(".pack"+(window.productNumber-1)+"-2TxwAj", 1, {left:window.leftmobile, top:0, scale:0.8, ease:Power3.easeInOut}); // Left
	TweenMax.to(".pack"+(window.productNumber)+"-2TxwAj", 1, {left:window.centermobile, top:0, scale:1.3, ease:Power3.easeInOut}); // Center
	TweenMax.to(".pack"+(window.productNumber+1)+"-2TxwAj", 1, {left:window.rightmobile, top:0, scale:0.8, ease:Power3.easeInOut}); // Right
	TweenMax.to(".pack"+(window.productNumber+2)+"-2TxwAj", 0, {left:window.farrightmobile, top:0, scale:0.5, ease:Power3.easeInOut}); // Far Right

	if (window.productNumber == window.totalProducts-1) {
		TweenMax.to(".pack1-iBIYlP", 0, {left:window.farright, top:0, scale:0.5, ease:Power3.easeInOut}); // Far Right
		// Mobile
		TweenMax.to(".pack1-2TxwAj", 0, {left:window.farrightmobile, top:0, scale:0.5, ease:Power3.easeInOut}); // Far Right
	}
	if (window.productNumber == window.totalProducts) {
		TweenMax.to(".pack1-iBIYlP", 1, {left:window.right, top:0, scale:0.8, ease:Power3.easeInOut}); // Right
		TweenMax.to(".pack2-iBIYlP", 0, {left:window.farright, top:0, scale:0.5, ease:Power3.easeInOut}); // Far Right
		// Mobile
		TweenMax.to(".pack1-2TxwAj", 1, {left:window.rightmobile, top:0, scale:0.8, ease:Power3.easeInOut}); // Right
		TweenMax.to(".pack2-2TxwAj", 0, {left:window.farrightmobile, top:0, scale:0.5, ease:Power3.easeInOut}); // Far Right
	}
	if (window.productNumber == 2) {
		//alert()
		TweenMax.to(".pack"+(window.totalProducts)+"-iBIYlP", 1, {left:window.farleft, top:0, scale:0.5, ease:Power3.easeInOut}); // Far Left
		TweenMax.to(".pack"+(window.totalProducts)+"-2TxwAj", 1, {left:window.farleftmobile, top:0, scale:0.5, ease:Power3.easeInOut}); // Far Left
	}
	if (window.productNumber == 1) {
		TweenMax.to(".pack3-iBIYlP", 1, {left:window.farright, top:0, scale:0.5, ease:Power3.easeInOut}); // Far Right
		TweenMax.to(".pack"+(window.totalProducts-1)+"-iBIYlP", 1, {left:window.farleft, top:0, scale:0.5, ease:Power3.easeInOut}); // Far Left
		TweenMax.to(".pack"+(window.totalProducts)+"-iBIYlP", 1, {left:window.left, top:0, scale:0.8, ease:Power3.easeInOut}); // Left
		// Mobile
		TweenMax.to(".pack3-kF9GkZ", 1, {left:window.farrightmobile, top:0, scale:0.5, ease:Power3.easeInOut}); // Far Right
		TweenMax.to(".pack"+(window.totalProducts-1)+"-QV5nx5", 1, {left:window.farleftmobile, top:0, scale:0.5, ease:Power3.easeInOut}); // Far Left
		TweenMax.to(".pack"+(window.totalProducts)+"-2TxwAj", 1, {left:window.leftmobile, top:0, scale:0.8, ease:Power3.easeInOut}); // Left
	}
	//$(".bp1-slideno").text(window.productNumber);
	showPreview();
}


function prodprev() {
	if (window.productNumber > 1) {
		window.productNumber--;
	} else {
		window.productNumber = window.totalProducts;
	}
	TweenMax.to(".pack"+(window.productNumber-2)+"-iBIYlP", 0, {left:window.farleft, top:0, scale:0.5, ease:Power3.easeInOut});
	TweenMax.to(".pack"+(window.productNumber-1)+"-iBIYlP", 1, {left:window.left, top:0, scale:0.8, ease:Power3.easeInOut});
	TweenMax.to(".pack"+(window.productNumber)+"-iBIYlP", 1, {left:window.center, top:0, scale:1.3, ease:Power3.easeInOut});
	TweenMax.to(".pack"+(window.productNumber+1)+"-iBIYlP", 1, {left:window.right, top:0, scale:0.8, ease:Power3.easeInOut});
	TweenMax.to(".pack"+(window.productNumber+2)+"-iBIYlP", 1, {left:window.farright, top:0, scale:0.5, ease:Power3.easeInOut});
	// mobile
	TweenMax.to(".pack"+(window.productNumber-2)+"-2TxwAj", 0, {left:window.farleftmobile, top:0, scale:0.5, ease:Power3.easeInOut});
	TweenMax.to(".pack"+(window.productNumber-1)+"-2TxwAj", 1, {left:window.leftmobile, top:0, scale:0.8, ease:Power3.easeInOut});
	TweenMax.to(".pack"+(window.productNumber)+"-2TxwAj", 1, {left:window.centermobile, top:0, scale:1.3, ease:Power3.easeInOut});
	TweenMax.to(".pack"+(window.productNumber+1)+"-2TxwAj", 1, {left:window.rightmobile, top:0, scale:0.8, ease:Power3.easeInOut});
	TweenMax.to(".pack"+(window.productNumber+2)+"-2TxwAj", 1, {left:window.farrightmobile, top:0, scale:0.5, ease:Power3.easeInOut});
	if (window.productNumber == window.totalProducts) {
		TweenMax.to(".pack1-iBIYlP", 1, {left:window.right, top:0, scale:0.8, ease:Power3.easeInOut});
		TweenMax.to(".pack2-iBIYlP", 1, {left:window.farright, top:0, scale:0.5, ease:Power3.easeInOut});
		TweenMax.to(".pack9-iBIYlP", 1, {left:window.center, top:0, scale:1.3, ease:Power3.easeInOut});
		// Mobile
		TweenMax.to(".pack1-2TxwAj", 1, {left:window.rightmobile, top:0, scale:0.8, ease:Power3.easeInOut});
		TweenMax.to(".pack2-2TxwAj", 1, {left:window.farrightmobile, top:0, scale:0.5, ease:Power3.easeInOut});
		TweenMax.to(".pack9-2TxwAj", 1, {left:window.centermobile, top:0, scale:0.8, ease:Power3.easeInOut});
	}
	if (window.productNumber == window.totalProducts-1) {
		TweenMax.to(".pack1-iBIYlP", 1, {left:window.farright, top:0, scale:0.5, ease:Power3.easeInOut});
		// Mobile
		TweenMax.to(".pack1-2TxwAj", 1, {left:window.farrightmobile, top:0, scale:0.5, ease:Power3.easeInOut});
	}
	if (window.productNumber == 2) {
		TweenMax.to(".pack"+(window.totalProducts)+"-iBIYlP", 0, {left:window.farleft, top:0, scale:0.5, ease:Power3.easeInOut});
		// mobile
		TweenMax.to(".pack"+(window.totalProducts)+"-2TxwAj", 0, {left:window.farleftmobile, top:0, scale:0.5, ease:Power3.easeInOut});
	}
	if (window.productNumber == 1) {
		TweenMax.to(".pack9-iBIYlP", 1, {left:window.left, top:0, scale:0.8, ease:Power3.easeInOut});
		TweenMax.to(".pack8-iBIYlP", 0, {left:window.farleft, top:0, scale:0.5, ease:Power3.easeInOut});
		// mobile
		TweenMax.to(".pack9-2TxwAj", 1, {left:window.leftmobile, top:0, scale:1.1, ease:Power3.easeInOut});
		TweenMax.to(".pack8-2TxwAj", 0, {left:window.farleftmobile, top:0, scale:0.7, ease:Power3.easeInOut});
	}
	//$(".bp1-slideno").text(window.productNumber);
	showPreview();
}

function showPreview() {
	for (var x = 1; x <= window.totalProducts; x++) {
		TweenMax.to(".preview"+(x)+"-B6dIwh", 1, {opacity:0, scale:1, ease:Power3.easeInOut});
		TweenMax.to(".preview"+(x)+"-0ye7R3", 1, {opacity:0, scale:1, ease:Power3.easeInOut});
		$(".preview"+(x)+"-B6dIwh").hide();
		$(".preview"+(x)+"-0ye7R3").hide();
	}
	$(".preview"+window.productNumber+"-B6dIwh").show();
	$(".preview"+window.productNumber+"-0ye7R3").show();
	TweenMax.to(".preview"+(window.productNumber)+"-B6dIwh", 1, {opacity:1, scale:1, ease:Power3.easeInOut});
	TweenMax.to(".preview"+(window.productNumber)+"-0ye7R3", 1, {opacity:1, scale:1, ease:Power3.easeInOut});
}

// Slide directly to a product
function slideDirect(x) {
	//alert();
	window.sliding = 2;
	window.panelNo = x;
	window.panelDepth++;
	$(".panel"+window.panelNo+"-C61RwL").css('z-index', window.panelDepth);
	TweenMax.to(".panel"+window.panelNo+"-C61RwL", 1, {top:0, ease:Power2.easeInOut, onComplete:resetSlidesAfterDirect});
	TweenMax.to(".panel2-C61RwL", 1, {top:0-window.bheight, ease:Power2.easeInOut});
	slideAnim();
	dots();
	setTimeout(reset, 1200);
}

// Set slides above and below depending on which slide is displayed
function resetSlidesAfterDirect() {
	// Move above
	for (var x = 1; x < window.panelNo; x++) {
		$(".panel"+x+"-C61RwL").css({top: 0-window.bheight});
		$(".panel"+x+"mobi-econtainer-C61RwL").css({top: 0-window.bheight});
	}
	// Move below
	for (var y = window.panelNo+1; y < window.totalPanels; y++) {
		$(".panel"+y+"-C61RwL").css({top: window.bheight});
		$(".panel"+y+"mobi-econtainer-C61RwL").css({top: window.bheight});
	}
}

function setNav() {
	for (i = 0; i <= 7; i++) { // loop and hide
		var linker = '.navhighlight'+i+'-h6OjDw';
		//var linker2 = '.linktext'+i;
  		TweenMax.to(linker, 0, {opacity:1, width:0, delay:0, scale:1, ease:Cubic.easeOut});
		//$(linker2).css('color', 'black');
	}
}
//
function hoverFunc(number, is_hovered) {
	//alert(number);
	//var linker = '.navhighlight-h6OjDw'+number;
	window.navwidth = $('.linktext'+number+'').width();

	if (is_hovered) {
			//alert(window.navwidth);
		TweenMax.to('.navhighlight'+number+'', 0.2, {opacity:1, width:window.navwidth+20, delay:0, scale:1, ease:Cubic.easeOut});
		$('.navhighlight'+number+'').css("background-color", "#7E8100");
		$('.linktext'+number+'').css('color', 'white');
	} else {
		TweenMax.to('.navhighlight'+number+'', 0.3, {opacity:1, width:0, delay:0, scale:1, ease:Cubic.easeOut});
		$('.linktext'+number+'').css('color', 'black');
	};
}
//
// Slide directly to a product
function slideDirectSideNav(x) {
	// if the selected to panel is the current panel do nothing
	if (window.panelNo != x) {
		window.sliding = 2;
		window.previousPanel = window.panelNo;
		//alert(window.previousPanel);
		window.panelNo = x;
		window.panelDepth++;
		$(".panel"+window.panelNo+"-C61RwL").css('z-index', window.panelDepth);
		// Mobile
		$(".panel"+window.panelNo+"mobi-econtainer-C61RwL").css('z-index', window.panelDepth);

		TweenMax.to(".panel"+window.panelNo+"-C61RwL", 1, {top:0, ease:Power2.easeInOut, onComplete:resetSlidesAfterDirect});
		// Mobile
		TweenMax.to(".panel"+window.panelNo+"mobi-econtainer-C61RwL", 1, {top:0, ease:Power2.easeInOut, onComplete:resetSlidesAfterDirect});
		if (x > window.previousPanel) {
			TweenMax.to(".panel"+window.previousPanel+"-C61RwL", 1, {top:0-window.bheight, ease:Power2.easeInOut});
			// Mobile
			TweenMax.to(".panel"+window.previousPanel+"mobi-econtainer-C61RwL", 1, {top:0-window.bheight, ease:Power2.easeInOut});
		} else {
			TweenMax.to(".panel"+window.previousPanel+"-C61RwL", 1, {top:window.bheight, ease:Power2.easeInOut});
			// Mobile
			TweenMax.to(".panel"+window.previousPanel+"mobi-econtainer-C61RwL", 1, {top:window.bheight, ease:Power2.easeInOut});
		}

		slideAnim();
		dots();
		//menuhide();
		setTimeout(reset, 1200);
	}
	//menuhide(); // Still hide the nav
}
// Highlight the dot of the current panel
function dots(){
	for (i = 1; i <= window.totalPanels; i++) {
		TweenMax.to(".dot"+(i)+"-zYYxbB", 1.2, {scale:0.8, delay:0.0, ease:Elastic.easeInOut});
		//
		//TweenMax.to(".highlight"+(i)+"-v9sW6c", 0, {opacity:0, delay:0.5});
	}
	TweenMax.to(".dot"+window.panelNo+"-zYYxbB", 1.5, {scale:1.4, right:1, delay:0.5, ease:Elastic.easeOut});
}
//
// Gallery Images Viewer Start //
function changeGallery() {
	for (i = 0; i <= window.totalGalleryItems; i++) { // loop and hide
  		$(".galleryimage"+i+"-cVYVyM").hide();
			// mobile
			$(".galleryimage"+i+"-64isk7").hide();
	}
	$(".galleryimage"+window.currentGalleryItems+"-cVYVyM").show(); // Show Current
	//mobile
	$(".galleryimage"+window.currentGalleryItems+"-64isk7").show(); // Show Current
	//TweenMax.from(".galleryimage"+window.currentGalleryItems+"-cVYVyM", 0.5, {opacity:0, ease:Power3.easeInOut});
}
function galleryCountUp() {
	if (window.currentGalleryItems < window.totalGalleryItems) {
		window.currentGalleryItems++;
	} else {
		window.currentGalleryItems = 1;
	}
	//$(".bp1-count").text(window.currentTestimonialItem);
	changeGallery();
}
function galleryCountDown() {
	if (window.currentGalleryItems > 1) {
		window.currentGalleryItems--;
	} else {
		window.currentGalleryItems = window.totalGalleryItems;
	}
	//$(".bp1-count").text(window.currentTestimonialItem);
	changeGallery();
}
//

for (var panelcount = 1; panelcount <= window.totalPanels; panelcount++) {
	//$(".bp1-panel"+panelcount+"").on('swipedown',  function(){ slidePrev() });
	//$(".bp1-panel"+panelcount+"").on('swipeup',  function(){ slideNext() });
	// Mobile
	$(".panel"+panelcount+"mobi-econtainer-C61RwL").on('swipedown',  function(){ slidePrev() });
	$(".panel"+panelcount+"mobi-econtainer-C61RwL").on('swipeup',  function(){ slideNext() });
}
//$(".bp1-footer").on('swipedown',  function(){ slidePrev() });
$("footerstatic-C61RwL").on('swipedown',  function(){ slidePrev() });



$(".btnnext-1xNEPL").css({'cursor': 'pointer'}).click(function() {  prodnext();  });
$(".btnprev-1xNEPL").css({'cursor': 'pointer'}).click(function() {  prodprev();  });
$(".navopenbtn-kpwyaS").css({'cursor': 'pointer'}).click(function() {  menushow();  });
$(".navclosebtn-kpwyaS").css({'cursor': 'pointer'}).click(function() {  menuhide();  });

//$('#closebtn').click(menuhide);				$("#closebtn").css({'cursor': 'pointer'});

$(".changesubsbtn-H3XtJi").css({'cursor': 'pointer'}).click(function() {	restartsubs(); });


// Product Direct Links
$("#prodlink1").css({'cursor': 'pointer'}).click(function() {  slideDirect(3);  });
$("#prodlink2").css({'cursor': 'pointer'}).click(function() {  slideDirect(4);  });
$("#prodlink3").css({'cursor': 'pointer'}).click(function() {  slideDirect(5);  });
$("#prodlink4").css({'cursor': 'pointer'}).click(function() {  slideDirect(6);  });
$("#prodlink5").css({'cursor': 'pointer'}).click(function() {  slideDirect(7);  });
$("#prodlink6").css({'cursor': 'pointer'}).click(function() {  slideDirect(8);  });
$("#prodlink7").css({'cursor': 'pointer'}).click(function() {  slideDirect(9);  });
$("#prodlink8").css({'cursor': 'pointer'}).click(function() {  slideDirect(10);  });
$("#prodlink9").css({'cursor': 'pointer'}).click(function() {  slideDirect(11);  });
//
$("#downbutton").css({'cursor': 'pointer'}).click(function() {  slideNext();  });
//
$(".dot1-zYYxbB").css({'cursor': 'pointer'}).click(function() {  slideDirectSideNav(1);  });
$(".dot2-zYYxbB").css({'cursor': 'pointer'}).click(function() {  slideDirectSideNav(2);  });
$(".dot3-zYYxbB").css({'cursor': 'pointer'}).click(function() {  slideDirectSideNav(3);  });
$(".dot4-zYYxbB").css({'cursor': 'pointer'}).click(function() {  slideDirectSideNav(4);  });
$(".dot5-zYYxbB").css({'cursor': 'pointer'}).click(function() {  slideDirectSideNav(5);  });
$(".dot6-zYYxbB").css({'cursor': 'pointer'}).click(function() {  slideDirectSideNav(6);  });
$(".dot7-zYYxbB").css({'cursor': 'pointer'}).click(function() {  slideDirectSideNav(7);  });
$(".dot8-zYYxbB").css({'cursor': 'pointer'}).click(function() {  slideDirectSideNav(8);  });
$(".dot9-zYYxbB").css({'cursor': 'pointer'}).click(function() {  slideDirectSideNav(9);  });
$(".dot10-zYYxbB").css({'cursor': 'pointer'}).click(function() {  slideDirectSideNav(10);  });



$(".link1-RjZQ7j").css({'cursor': 'pointer'}).css({'cursor': 'pointer'}).click(function() {  window.location.href = "/#/blends";  hashChecker(); }).hover(function() { hoverFunc('1', true) }, function() { hoverFunc('1', false) });
$(".link2-RjZQ7j").css({'cursor': 'pointer'}).css({'cursor': 'pointer'}).click(function() {  window.location.href = "/about";  }).hover(function() { hoverFunc('2', true) }, function() { hoverFunc('2',false) });
$(".link3-RjZQ7j").css({'cursor': 'pointer'}).css({'cursor': 'pointer'}).click(function() {  window.location.href = "/#/blends"; hashChecker();  }).hover(function() { hoverFunc('3', true) }, function() { hoverFunc('3', false) });
$(".link4-RjZQ7j").css({'cursor': 'pointer'}).css({'cursor': 'pointer'}).click(function() {  window.location.href = "/subscriptions";  }).hover(function() { hoverFunc('4', true) }, function() { hoverFunc('4', false) });
$(".link5-RjZQ7j").css({'cursor': 'pointer'}).css({'cursor': 'pointer'}).click(function() {  window.location.href = "/gallery";  }).hover(function() { hoverFunc('5', true) }, function() { hoverFunc('5', false) });
$(".link6-RjZQ7j").css({'cursor': 'pointer'}).css({'cursor': 'pointer'}).click(function() {  window.location.href = "/commercial";  }).hover(function() { hoverFunc('6', true) }, function() { hoverFunc('6', false) });
$(".link7-RjZQ7j").css({'cursor': 'pointer'}).css({'cursor': 'pointer'}).click(function() {  window.location.href = "/contact";  }).hover(function() { hoverFunc('7', true) }, function() { hoverFunc('7', false) });
$(".link8-RjZQ7j").css({'cursor': 'pointer'}).click(function() {  window.location.href = "https://kmcr.myshopify.com/account/";  }).hover(function() { hoverFunc('8', true) }, function() { hoverFunc('8',false) });
$(".logos-RjZQ7j").css({'cursor': 'pointer'}).css({'cursor': 'pointer'}).click(function() {  window.location.href = "/";  });
// Mobile
$(".link1-uFi25q").click(function() {  window.location.href = "https://kmcr.myshopify.com/account/";  });
$(".link2-uFi25q").click(function() {  window.location.href = "/about";    });
$(".link3-uFi25q").click(function() {  window.location.href = "/#/blends"; hashChecker(); });
$(".link4-uFi25q").click(function() {  window.location.href = "/commercial";  });
$(".link5-uFi25q").click(function() {  window.location.href = "/contact";  });
$(".link6-uFi25q").click(function() {  window.location.href = "/gallery";  });
$(".link7-uFi25q").click(function() {  window.location.href = "/#/blends"; hashChecker(); });
$(".link8-uFi25q").click(function() {  window.location.href = "/subscriptions";  });
$('.iconbtn-C61RwL').click(function() {  window.location.href = "/";  });
$(".productdet-lsclosebtn-C61RwL").click(function() {  hideProductDetailsMobile();  });



$(".btngallerynext-tuzc6y").css({'cursor': 'pointer'}).click(function() {  galleryCountUp();  });
$(".btngalleryprev-tuzc6y").css({'cursor': 'pointer'}).click(function() {  galleryCountDown();  });
// mobile
$(".gallerybtnnext-Ota9JO").css({'cursor': 'pointer'}).click(function() {  galleryCountUp();  });
$(".gallerybtnprev-Ota9JO").css({'cursor': 'pointer'}).click(function() {  galleryCountDown();  });

$('.btnnext-MBMwSW').css({'cursor': 'pointer'}).click(prodnext);
$('.btnprev-MBMwSW').css({'cursor': 'pointer'}).click(prodprev);

$('.preview1btn-266Gwo').css({'cursor': 'pointer'}).click({product:1}, showProductDetailsMobile);
$('.preview2btn-vFxoxJ').click({product:2}, showProductDetailsMobile);
$('.preview3btn-Wvd0UI').click({product:3}, showProductDetailsMobile);
$('.preview4btn-abXKzR').click({product:4}, showProductDetailsMobile);
$('.preview5btn-v5UwNT').click({product:5}, showProductDetailsMobile);
$('.preview6btn-a7aKL0').click({product:6}, showProductDetailsMobile);
$('.preview7btn-1x6rfA').click({product:7}, showProductDetailsMobile);
//$('.preview8btn-JfDn4B').click({product:8}, showProductDetailsMobile);
//$('.preview9btn-bd3Eyl').click({product:9}, showProductDetailsMobile);


// Resizes elements to outerbox
function responsive(x) {

	var theight = $(".res"+x+"-C61RwL").height();
	var ntheight = 1+((window.bheight-theight)/theight);
	TweenMax.to(".res"+x+"-C61RwL", 0, {delay:0, scale:ntheight});
	//
	var theightlc = $(".reslc"+x+"").height();
	var ntheightlc = 1+((window.bheight-theightlc)/theightlc);
	TweenMax.to(".reslc"+x+"", 0, {delay:0, scale:ntheightlc, transformOrigin:"left center"});
	//
	var theightrc = $(".resrc"+x+"").height();
	var ntheightrc = 1+((window.bheight-theightrc)/theightrc);
	TweenMax.to(".resrc"+x+"", 0, {delay:0, scale:ntheightrc, transformOrigin:"right center"});
	//
	var theighttc = $(".restc"+x+"-C61RwL").height();
	var ntheighttc = 1+((window.bheight-theighttc)/theighttc);
	TweenMax.to(".restc"+x+"-C61RwL", 0, {delay:0, scale:ntheighttc, transformOrigin:"top center"});
	//
	var twidth = $(".resw"+x+"").width();
	var ntwidth = 1+((window.bwidth-twidth)/twidth);
	TweenMax.to(".resw"+x+"", 0, {delay:0, scale:ntwidth});
	//
	var twidthtop = $(".reswt"+x+"").width();
	var ntwidthtop = 1+((window.bwidth-twidthtop)/twidthtop);
	TweenMax.to(".reswt"+x+"", 0, {delay:0, scale:ntwidthtop, transformOrigin:"top center"});
	//
	var theightleft = $(".reshr"+x+"").height();
	var ntheightleft = 1+((window.bheight-theightleft)/theightleft);
	TweenMax.to(".reshr"+x+"", 0, {delay:0, scale:ntheightleft, transformOrigin:"center right"});
	//

}
// Reloads page if browser if resized
jQuery(document).ready(function($) {
    // Store the window width
    var windowWidth = $(window).width();
    //Resize Event
    $(window).resize(function(){
        // Check if the window width has actually changed and it's not just iOS triggering a resize event on scroll
        if ($(window).width() != windowWidth) {
            // Update the window width for next time
           windowWidth = $(window).width();
           location.reload();
        }
        // Otherwise do nothing
    });
});
// Start code when page content is loaded
$( document ).ready( codeInit );
