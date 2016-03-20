chrome.runtime.onMessage.addListener(
    function(request, sender, sendResponse) {
        // read `newIconPath` from request and read `tab.id` from sender
        // chrome.browserAction.setIcon({
        //     path: request.newIconPath,
        //     tabId: sender.tab.id
        // });
		if (request.action != "updateIcon") return;
		chrome.browserAction.setIcon({
			path: request.newIconPath,
			tabId: sender.tab.id
		});
    });

// chrome.browserAction.setIcon({path: "red.png"});