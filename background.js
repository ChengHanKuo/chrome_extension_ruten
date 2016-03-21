chrome.runtime.onMessage.addListener(
    function(request, sender, sendResponse) {
		if (request.action != "updateIcon") return;
		chrome.browserAction.setIcon({
			path: request.newIconPath,
			tabId: sender.tab.id
		});
    });