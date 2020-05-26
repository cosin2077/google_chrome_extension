
chrome.runtime.onMessage.addListener((message, sender, sendResponse) => {
	switch(message.action){
		case "download":
			chrome.downloads.download({
				url: message.url,
				filename: message.filename,
			});
			break;
	}
});
