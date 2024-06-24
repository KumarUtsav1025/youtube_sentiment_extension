let currentVideoId = null;
let imgSrc = null;

chrome.runtime.onMessage.addListener((message, sender, sendResponse) => {
    // Ensure the element is available before accessing its src
    const imgElement = document.querySelector('.yt-core-image');
    imgSrc = imgElement.src;
    if (message.type === "NEW") {    
        console.log(imgSrc);
        currentVideoId = message.videoId;
        sendResponse({ videoId: currentVideoId, imgSrc: imgSrc });
        console.log("Video ID received in content script:", currentVideoId);
    } else if (message.type === "GET_VIDEO_ID") {
        sendResponse({ videoId: currentVideoId, imgSrc: imgSrc });
    }
});
