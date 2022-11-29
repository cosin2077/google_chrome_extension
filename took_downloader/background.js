
chrome.runtime.onMessage.addListener((message, sender, sendResponse) => {
	console.log(message)
	switch(message.action){
		case "download":
			console.log(message.url)
			chrome.downloads.download({
				url: message.url,
				filename: message.filename,
				headers: [
				// 'user-agent': 'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_5) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/89.0.4341.0 Safari/537.36'
					{
						name: "user-agent",
						value: 'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_5) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/89.0.4341.0 Safari/537.36'
					}
				]
			}, (res) => {
				console.log(res)
			});
			break;
	}
});
