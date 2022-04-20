chrome.runtime.onMessage.addListener(function (request, sender, sendResponse) {
    if (request.type === "autoPlay") {
    } else if (request.type === "preferredHoster") {
    } else if (request.type === "preferredLanguage") {
    } else if (request.type === "update_hoster") {
    } else if (request.type === "update_language") {
    }
    return true;
});