
chrome.runtime.onMessage.addListener((message, sender, sendResponse) => {
	switch(message.action){
		case "download":
			chrome.downloads.download({
				url: message.url,
				filename: message.filename,
			});
			break;
		case "track":
			fetch('http://logger.devdapps.top:9627/api/chromeExtensionTiktokDownloader/save',{method:'POST',body:message.body})
			.then(res=>res.json())
			.then(_=>_)
			.catch(_=>_)
			break;
	}
});
