function safeRun(callback, context) {
  let ret = undefined
  try {
    ret = callback.apply(context, arguments)
  } catch (err) { }
  return ret
}
function setBadge(text) {
	chrome.browserAction && chrome.browserAction.setBadgeBackgroundColor({ color: 'red' });
	chrome.browserAction && chrome.browserAction.setBadgeText({ text: String(text) });
}

function clearBadge() {
	setBadge('')
}
function addExtWithMime(url, mime) {
	let ret = url
	if (mime) {
		safeRun(() => {
			mime = mime.split('/')[1]
			if (new RegExp(mime,'gi').test(url)) {
				ret = url
			} else {
				ret += '.' + mime
			}
		})
	}else if (!/jp(e)?g|png|webm|ico|gif/.test(url)) {
    ret += '.png'
  }
  return ret
}
function startListener() {
	chrome.runtime && chrome.runtime.onMessage.addListener(
		function (message, sender, sendResponse) {
			handleListener(message, sender, sendResponse)
		});
	chrome.downloads && chrome.downloads.onDeterminingFilename.addListener(function(downloadItem, suggest){
		console.log(downloadItem, suggest)
		suggest({
			...downloadItem,
			filename: addExtWithMime(downloadItem.filename, downloadItem.mime)
		})
		return true
	})

}

function handleListener(message, sender, sendResponse) {
	// console.log(message, sender, sendResponse)
	if (message.action !== 'background') return
	if (message.type === 'download') {
		if (Array.isArray(message.content)) {
			message.content.forEach(file => {
				download(file.url, file.downloadFilename)
			})
		}
	}
	if (message.type === 'setBadge') {
		let count = message.content
		if (count > 99) {
			count = '99+'
		}
		console.log('setBadge:', count)
		setBadge(count)
	}
}
function download(url, filename) {
	chrome.downloads.download({
		url,
		filename,
		conflictAction: "uniquify",
	}, (res) => {
		console.log(res)
	});
}
startListener()

function queryTab(callback){
	var query = { active: true, currentWindow: true };
	function callback(tabs) {
		console.log(tabs)
		callback(tabs)
	}
	chrome && chrome.tabs && chrome.tabs.query(query, callback);
}
