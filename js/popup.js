document.addEventListener('DOMContentLoaded', function () {
    document.querySelector('#autoPlay').addEventListener('click', autoPlay, false)
    function autoPlay() {
        var value = document.querySelector('#autoPlay').checked;
        chrome.storage.local.set({ 'autoPlay': value });
        chrome.tabs.query({ currentWindow: true, active: true }, function (tabs) {
            chrome.tabs.sendMessage(tabs[0].id, { type: "autoPlay", value: value }, function (response) { });
        })

    }
}, false)
document.addEventListener('DOMContentLoaded', function () {
    document.querySelector('#preferredHoster').addEventListener('click', preferredHoster, false)
    function preferredHoster() {
        var value = document.querySelector('#preferredHoster').checked;
        chrome.storage.local.set({ 'preferredHoster': value });
        chrome.tabs.query({ currentWindow: true, active: true }, function (tabs) {
            chrome.tabs.sendMessage(tabs[0].id, { type: "preferredHoster", value: value }, function (response) { });
        })

    }
}, false)
document.addEventListener('DOMContentLoaded', function () {
    document.querySelector('#preferredLanguage').addEventListener('click', preferredLanguage, false)
    function preferredLanguage() {
        var value = document.querySelector('#preferredLanguage').checked;
        chrome.storage.local.set({ 'preferredLanguage': value });
        chrome.tabs.query({ currentWindow: true, active: true }, function (tabs) {
            chrome.tabs.sendMessage(tabs[0].id, { type: "preferredLanguage", value: value }, function (response) { });
        })

    }
}, false)

document.addEventListener('DOMContentLoaded', function () {
    document.querySelector('#hoster').addEventListener('click', hoster, false)
    function hoster() {
        var select = document.querySelector('#hoster');
        var hoster = select.children[select.selectedIndex].value;
        chrome.storage.local.set({ 'hoster': hoster });
        chrome.tabs.query({ currentWindow: true, active: true }, function (tabs) {
            chrome.tabs.sendMessage(tabs[0].id, { type: "update_hoster", value: hoster }, function (response) { });
        })
    }
}, false)

document.addEventListener('DOMContentLoaded', function () {
    document.querySelector('#language').addEventListener('click', language, false)
    function language() {
        var select = document.querySelector('#language');
        var language = select.children[select.selectedIndex].value;
        chrome.storage.local.set({ 'language': language });
        chrome.tabs.query({ currentWindow: true, active: true }, function (tabs) {
            chrome.tabs.sendMessage(tabs[0].id, { type: "update_language", value: language }, function (response) { });
        })
    }
}, false)