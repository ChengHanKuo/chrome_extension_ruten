if ($("body").attr('id') == 'wwwRutenComTw') {
	var reputation = $("#wwwRutenComTw > div.rt-page > div.base-theme.rt-goods.rt-wrap > div > div.rt-grid-4-5.side-shadow.customizable-sideshadow > div > div.intro-section.clearfix.auction-data > div.intro-section-right.product-purchase > div.item-purchase.customizable-borderless.purchase-section > div > div.item-info-owner.media-img-rev > p:nth-child(7) > a.text-medium > strong");
	
	var payment_method_1 = $("#wwwRutenComTw > div.rt-page > div.base-theme.rt-goods.rt-wrap > div > div.rt-grid-4-5.side-shadow.customizable-sideshadow > div > div.intro-section.clearfix.auction-data > div.intro-section-right.product-purchase > div.item-purchase.customizable-borderless.purchase-section > div > div.item-info-detail.media-body > table:nth-child(3) > tbody > tr > td:nth-child(2) > ul > li.sub0 > span")
	var payment_method_2 = $("#wwwRutenComTw > div.rt-page > div.base-theme.rt-goods.rt-wrap > div > div.rt-grid-4-5.side-shadow.customizable-sideshadow > div > div.intro-section.clearfix.auction-data > div.intro-section-right.product-purchase > div.item-purchase.customizable-borderless.purchase-section > div > div.item-info-detail.media-body > table:nth-child(3) > tbody > tr > td:nth-child(2) > ul > li.sub1 > span")
	var payment_method_3 = $("#wwwRutenComTw > div.rt-page > div.base-theme.rt-goods.rt-wrap > div > div.rt-grid-4-5.side-shadow.customizable-sideshadow > div > div.intro-section.clearfix.auction-data > div.intro-section-right.product-purchase > div.item-purchase.customizable-borderless.purchase-section > div > div.item-info-detail.media-body > table:nth-child(3) > tbody > tr > td:nth-child(2) > ul > li.sub2 > span")
	var payment_method_4 = $("#wwwRutenComTw > div.rt-page > div.base-theme.rt-goods.rt-wrap > div > div.rt-grid-4-5.side-shadow.customizable-sideshadow > div > div.intro-section.clearfix.auction-data > div.intro-section-right.product-purchase > div.item-purchase.customizable-borderless.purchase-section > div > div.item-info-detail.media-body > table:nth-child(3) > tbody > tr > td:nth-child(2) > ul > li.sub3 > span")
	var payment_method_5 = $("#wwwRutenComTw > div.rt-page > div.base-theme.rt-goods.rt-wrap > div > div.rt-grid-4-5.side-shadow.customizable-sideshadow > div > div.intro-section.clearfix.auction-data > div.intro-section-right.product-purchase > div.item-purchase.customizable-borderless.purchase-section > div > div.item-info-detail.media-body > table:nth-child(3) > tbody > tr > td:nth-child(2) > ul > li.sub4 > span")
	var payment_method_6 = $("#wwwRutenComTw > div.rt-page > div.base-theme.rt-goods.rt-wrap > div > div.rt-grid-4-5.side-shadow.customizable-sideshadow > div > div.intro-section.clearfix.auction-data > div.intro-section-right.product-purchase > div.item-purchase.customizable-borderless.purchase-section > div > div.item-info-detail.media-body > table:nth-child(3) > tbody > tr > td:nth-child(2) > ul > li.sub5 > span")
	var payment_method_7 = $("#wwwRutenComTw > div.rt-page > div.base-theme.rt-goods.rt-wrap > div > div.rt-grid-4-5.side-shadow.customizable-sideshadow > div > div.intro-section.clearfix.auction-data > div.intro-section-right.product-purchase > div.item-purchase.customizable-borderless.purchase-section > div > div.item-info-detail.media-body > table:nth-child(3) > tbody > tr > td:nth-child(2) > ul > li.sub6 > span")

	var location = $("#product-memo > li.location > span")


	alert(	"Reputation:" + reputation.html() + "\n" +
			"Payment Method:\n"+ payment_method_1.html() + "\n" 
						       + payment_method_2.html() + "\n"
						       + payment_method_3.html() + "\n"
						       + payment_method_4.html() + "\n"
						       + payment_method_5.html() + "\n"
						       + payment_method_6.html() + "\n"
						       + payment_method_7.html() + "\n"

	);
	chrome.runtime.sendMessage({
		action : "updateIcon",
		newIconPath : "red.png"
	});
}