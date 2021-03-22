
let receiveList = []
var startListener = () => {
    chrome.runtime && chrome.runtime.onMessage.addListener(
        function (message, sender, sendResponse) {
            if (message.action === 'popup') {
                handleListener(message, sender, sendResponse)
            }
        });
}
startListener()

function handleListener(message, sender, sendResponse) {
    console.log(message, sender, sendResponse)
    if (message.content) {
        receiveList = message.content
        setBadge(receiveList.length)
    }
}

function setBadge(text) {
    chrome.browserAction && chrome.browserAction.setBadgeBackgroundColor({ color: 'red' });
    chrome.browserAction && chrome.browserAction.setBadgeText({ text: String(text) });
}

function clearBadge() {
    setBadge('')
}

function sendFiles(fileList) {
    chrome.runtime.sendMessage({
        action: "background",
        type: 'download',
        content: fileList,
    });
}
function injectPopup() {
    const app = document.querySelector('.app')
    const button = document.querySelector('.app button')
    button.onclick = function () {
        console.log(receiveList)
        sendFiles(receiveList)
    }
}
// injectPopup()