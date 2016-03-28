function getInfo() {
	var item_title = $("#wwwRutenComTw > div.rt-page > div.base-theme.rt-goods.rt-wrap > div > div.rt-grid-4-5.side-shadow.customizable-sideshadow > div > h2");
	if (item_title.length == 0) return;

	var payment_method = $('.item-detail-table:contains("付款方式") .detail-list li')
		.toArray()
		.map(function(li) {
			return $(li).text();
		})
		.filter(function(text) {
			return text.trim() !== "";
		});

	var delivery_method = $('.item-detail-table:contains("運送方式") .detail-list li span')
		.toArray()
		.map(function(li) {
			return $(li).text();
		})
	console.log(payment_method);

	var reputation = $("#wwwRutenComTw > div.rt-page > div.base-theme.rt-goods.rt-wrap > div > div.rt-grid-4-5.side-shadow.customizable-sideshadow > div > div.intro-section.clearfix.auction-data > div.intro-section-right.product-purchase > div.item-purchase.customizable-borderless.purchase-section > div > div.item-info-owner.media-img-rev > p:nth-child(7) > a.text-medium > strong");
	var quantity_available = $("#wwwRutenComTw > div.rt-page > div.base-theme.rt-goods.rt-wrap > div > div.rt-grid-4-5.side-shadow.customizable-sideshadow > div > div.intro-section.clearfix.auction-data > div.intro-section-right.product-purchase > div.item-purchase.customizable-borderless.purchase-section > div > div.item-info-detail.media-body > table:nth-child(1) > tbody > tr:nth-child(1) > td:nth-child(2) > strong")
	var quantity_sold = $("#wwwRutenComTw > div.rt-page > div.base-theme.rt-goods.rt-wrap > div > div.rt-grid-4-5.side-shadow.customizable-sideshadow > div > div.intro-section.clearfix.auction-data > div.intro-section-right.product-purchase > div.item-purchase.customizable-borderless.purchase-section > div > div.item-info-detail.media-body > table:nth-child(1) > tbody > tr:nth-child(2) > td:nth-child(2) > strong")
	var location = $("#product-memo > li.location > span")

	if (reputation.html() <= 1000) {
		var reputation_score = 20;
	}else if (reputation.html() > 1000 && reputation.html() <= 2000) {
		var reputation_score = 40;
	}else if (reputation.html() > 2000 && reputation.html() <= 3000) {
		var reputation_score = 60;
	}else if (reputation.html() > 3000 && reputation.html() <= 4000) {
		var reputation_score = 80;
	}else{
		var reputation_score = 100;
	}

	alert("Trust Score: 83" + "\n"
		+ "Trust Scope: VERY HIGH" + "\n"
		+ "\nReputation:" + reputation.html() + "\n"
		+ "\nQuantity:" + quantity_sold.html() + "\n"
		+ "\n"
		+ "Payment Method:\n"
		+ payment_method.join('\n') + "\n"
		+ "\nDelivery Method:\n"
		+ delivery_method.join('\n')+ "\n"
		+ "\nLocation:\n"
		+ location.html() + "\n"
	);
	chrome.runtime.sendMessage({
		action : "updateIcon",
		newIconPath : "red.png"
	});
}

getInfo();