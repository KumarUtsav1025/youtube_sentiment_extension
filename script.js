let videoId = null;

let welcomeBox = document.getElementById('welcomeBox');
let errorBox = document.getElementById('errorBox');
let resultsBox = document.getElementById('resultsBox');


document.addEventListener('DOMContentLoaded', function() {
    welcomeBox.style.display = "flex";
    errorBox.style.display = "none";
    resultsBox.style.display = "none";

    chrome.tabs.query({ active: true, currentWindow: true }, (tabs) => {
        chrome.tabs.sendMessage(tabs[0].id, { type: "GET_VIDEO_ID" }, (response) => {
            if (response && response.videoId) {
                videoId = response.videoId;
                youtubeTab();
                console.log("working fine");
            } else {
                notyoutubeTab();
            }
        });
    });
});

function youtubeTab(){
    welcomeBox.style.display = "flex";
    errorBox.style.display = "none";
    resultsBox.style.display = "none";
}

function notyoutubeTab(){
    welcomeBox.style.display = "none";
    errorBox.style.display = "flex";
    resultsBox.style.display = "none";
}

function resultTab(){
    welcomeBox.style.display = "none";
    errorBox.style.display = "none";
    resultsBox.style.display = "flex";
}


document.getElementById("get-btn").addEventListener('click', async (event) => {
    console.log('Button clicked');
    let welcomeText = document.getElementById('welcomeText');


    // hiding button & Loading Screen Appears
    event.target.hidden = true;
    document.getElementById('welcomeImage').hidden = true;
    document.getElementById('loadingImage').hidden = false;
    welcomeText.innerHTML = "Machines Gearing up..."
    const timeoutId = setTimeout(() => {
        document.getElementById('loadingImage').src = 'images/truck.gif';
        welcomeText.innerHTML = "Loading Results....."
    }, 6000);


    // fetching results
    const url = `https://sentiment-analysis-server-ld80.onrender.com/api/v1/get_data/${videoId}`;

    try {
        const response = await fetch(url);
        if (!response.ok) {
            throw new Error(`HTTP error! Status: ${response.status}`);
        }

        clearTimeout(timeoutId);
        const data = await response.json();

        let imageUrl = data['meta-data']['image_url'];
        let video_name = data['meta-data']['video name'];
        document.getElementById('resultImg').src = imageUrl;
        document.getElementById('videoName').innerHTML = video_name;
        
        responseParser(data['sentiments']);
        resultTab();
        console.log(data);

    } catch (error) {
        clearTimeout(timeoutId);
        document.getElementById('errorText').innerHTML = "Error fetching data";
        notyoutubeTab();
        console.error('Error fetching data:', error);
    }
});

function responseParser(data){
    let positive = data['positive'];
    let negative = data['negative'];
    let neutral = data['neutral'];

    document.getElementById('positive').innerHTML = `${positive.toFixed(2)}%`;
    document.getElementById('negative').innerHTML = `${negative.toFixed(2)}%`;
    document.getElementById('neutral').innerHTML = `${neutral.toFixed(2)}%`;



}