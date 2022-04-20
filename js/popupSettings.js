chrome.storage.local.get(['autoPlay'], function (result) {
    document.getElementById("autoPlay").checked = result.autoPlay;
});
chrome.storage.local.get(['preferredHoster'], function (result) {
    document.getElementById("preferredHoster").checked = result.preferredHoster;
});
chrome.storage.local.get(['preferredLanguage'], function (result) {
    document.getElementById("preferredLanguage").checked = result.preferredLanguage;
});

chrome.storage.local.get(['hoster'], function (result) {
    var select = document.getElementById("hoster");
    var hoster = result.hoster;
    for (var i = 0; i < select.children.length; i++) {
        var child = select.children[i];
        if (child.value == hoster) {
            child.selected = true;
            break;
        }
    }
});
chrome.storage.local.get(['language'], function (result) {
    var select = document.getElementById("language");
    var language = result.language;
    for (var i = 0; i < select.children.length; i++) {
        var child = select.children[i];
        if (child.value == language) {
            child.selected = true;
            break;
        }
    }
});
