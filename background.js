chrome.tabs.onUpdated.addListener((tabId, changeInfo, tab) => {
    if (changeInfo.url && changeInfo.url.includes("youtube.com/watch")) {
        const queryParameters = changeInfo.url.split("?")[1];
        const urlParameters = new URLSearchParams(queryParameters);
        chrome.action.setBadgeText({ text: 'YT', tabId: tab.id });
        chrome.action.setBadgeBackgroundColor({ color: 'green', tabId: tab.id });
        console.log("Video ID:", urlParameters.get("v"));

        chrome.tabs.sendMessage(tabId, {
            type: "NEW",
            videoId: urlParameters.get("v")
        }).then(response => {
            console.log("Message sent to content script:", response);
        }).catch(error => {
            console.error("Error sending message:", error);
        });
    } else if(!changeInfo.url.includes("youtube.com/watch")){
        chrome.action.setBadgeText({ text: '', tabId: tab.id });
    }
});
