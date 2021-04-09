
/*<![CDATA[*/
(function () {
var scriptURL = 'https://sdks.shopifycdn.com/buy-button/latest/buy-button-storefront.min.js';
if (window.ShopifyBuy) {
if (window.ShopifyBuy.UI) {
ShopifyBuyInit();
} else {
loadScript();
}
} else {
loadScript();
}
function loadScript() {
var script = document.createElement('script');
script.async = true;
script.src = scriptURL;
(document.getElementsByTagName('head')[0] || document.getElementsByTagName('body')[0]).appendChild(script);
script.onload = ShopifyBuyInit;
}
function ShopifyBuyInit() {
var client = ShopifyBuy.buildClient({
domain: 'kmcr.myshopify.com',
storefrontAccessToken: '10b14745a192d0a30b18d46f2cbce1ca',
appId: '6',
});
ShopifyBuy.UI.onReady(client).then(function (ui) {
var options = {


	"product": {
		"iframe": false,
		"buttonDestination": "cart",
		"contents": {
			"description": false,
			"img": false,
		},
		"text": {
			"button": "Add to Cart"
		},
		"styles": {
			"button": {
				'background-color': "blue"
			}
		}
	},
	"toggle": {
		"iframe": false,
		"sticky":true,
	"contents":{
		"count": true,
		 "icon":true
	},
	},
	"cart": {
		popup: false,
		"styles": {
			"button": {
				"background-color": "#333333"
			}
		}
	}

};
// add as many of these as you want buy buttons. Just swap out the product id: [12345] number to replace a product with another.
// Product 1 - Cabeza
if(document.getElementById('product-component-cabeza')){
	ui.createComponent('product', {
		id: [2652641525845],
		node: document.getElementById('product-component-cabeza'),
		moneyFormat: '%24%7B%7Bamount%7D%7D',
		options: options // this is referencing our newly created object.
	});
}
// Product 1 - Cabeza Mobile
if(document.getElementById('product-component-cabezamobile')){
	ui.createComponent('product', {
		id: [2652641525845],
		node: document.getElementById('product-component-cabezamobile'),
		moneyFormat: '%24%7B%7Bamount%7D%7D',
		options: options // this is referencing our newly created object.
	});
}
// Product 2 - Corazon
if(document.getElementById('product-component-corazon')){
	ui.createComponent('product', {
		id: [2652641362005],
		node: document.getElementById('product-component-corazon'),
		moneyFormat: '%24%7B%7Bamount%7D%7D',
		options: options
	});
}
// Product 2 - Corazon Mobile
if(document.getElementById('product-component-corazonmobile')){
	ui.createComponent('product', {
		id: [2652641362005],
		node: document.getElementById('product-component-corazonmobile'),
		moneyFormat: '%24%7B%7Bamount%7D%7D',
		options: options
	});
}
// Product 3 - Mariposa
if(document.getElementById('product-component-mariposa')){
	ui.createComponent('product', {
		id: [2652641001557],
		node: document.getElementById('product-component-mariposa'),
		moneyFormat: '%24%7B%7Bamount%7D%7D',
		options: options
	});
}
// Product 3 - Mariposa Mobile
if(document.getElementById('product-component-mariposamobile')){
	ui.createComponent('product', {
		id: [2652641001557],
		node: document.getElementById('product-component-mariposamobile'),
		moneyFormat: '%24%7B%7Bamount%7D%7D',
		options: options
	});
}
//
// Product 4 - Caballo
if(document.getElementById('product-component-caballo')){
	ui.createComponent('product', {
		id: [2652641722453],
		node: document.getElementById('product-component-caballo'),
		moneyFormat: '%24%7B%7Bamount%7D%7D',
		options: options
	});
}
// Product 4 - Caballo Mobile
if(document.getElementById('product-component-caballomobile')){
	ui.createComponent('product', {
		id: [2652641722453],
		node: document.getElementById('product-component-caballomobile'),
		moneyFormat: '%24%7B%7Bamount%7D%7D',
		options: options
	});
}
//
//
// Product 5 - Mexican Organic
if(document.getElementById('product-component-mexicanorganic')){
	ui.createComponent('product', {
		id: [2652640641109],
		node: document.getElementById('product-component-mexicanorganic'),
		moneyFormat: '%24%7B%7Bamount%7D%7D',
		options: options
	});
}
// Product 5 - Mexican Organic Mobile
if(document.getElementById('product-component-mexicanorganicmobile')){
	ui.createComponent('product', {
		id: [2652640641109],
		node: document.getElementById('product-component-mexicanorganicmobile'),
		moneyFormat: '%24%7B%7Bamount%7D%7D',
		options: options
	});
}
//
//
// Product 6 - Dimbulah
if(document.getElementById('product-component-dimbulah')){
	ui.createComponent('product', {
		id: [2652641132629],
		node: document.getElementById('product-component-dimbulah'),
		moneyFormat: '%24%7B%7Bamount%7D%7D',
		options: options
	});
}
// Product 6 - Dimbulah Mobile
if(document.getElementById('product-component-dimbulahmobile')){
	ui.createComponent('product', {
		id: [2652641132629],
		node: document.getElementById('product-component-dimbulahmobile'),
		moneyFormat: '%24%7B%7Bamount%7D%7D',
		options: options
	});
}
//
//
// Product 7 - Mexican Decaffeinated
if(document.getElementById('product-component-mexicandecaffeinated')){
	ui.createComponent('product', {
		id: [2652640804949],
		node: document.getElementById('product-component-mexicandecaffeinated'),
		moneyFormat: '%24%7B%7Bamount%7D%7D',
		options: options
	});
}
// Product 7 - Mexican Decaffeinated Mobile
if(document.getElementById('product-component-mexicandecaffeinatedmobile')){
	ui.createComponent('product', {
		id: [2652640804949],
		node: document.getElementById('product-component-mexicandecaffeinatedmobile'),
		moneyFormat: '%24%7B%7Bamount%7D%7D',
		options: options
	});
}
//
// Product 8 - Swiss Water Decaffeinated
if(document.getElementById('product-component-swisswaterdecaffeinated')){
	ui.createComponent('product', {
		id: [2652639789141],
		node: document.getElementById('product-component-swisswaterdecaffeinated'),
		moneyFormat: '%24%7B%7Bamount%7D%7D',
		options: options
	});
}
// Product 8 - Swiss Water Decaffeinated Mobile
if(document.getElementById('product-component-swisswaterdecaffeinatedmobile')){
	ui.createComponent('product', {
		id: [2652639789141],
		node: document.getElementById('product-component-swisswaterdecaffeinatedmobile'),
		moneyFormat: '%24%7B%7Bamount%7D%7D',
		options: options
	});
}
//
// Product 9 - Skybury
if(document.getElementById('product-component-skybury')){
	ui.createComponent('product', {
		id: [4100954816597],
		node: document.getElementById('product-component-skybury'),
		moneyFormat: '%24%7B%7Bamount%7D%7D',
		options: options
	});
}
// Product 9 - Skybury Mobile
if(document.getElementById('product-component-skyburymobile')){
	ui.createComponent('product', {
		id: [4100954816597],
		node: document.getElementById('product-component-skyburymobile'),
		moneyFormat: '%24%7B%7Bamount%7D%7D',
		options: options
	});
}
//
//
});
}
})();
