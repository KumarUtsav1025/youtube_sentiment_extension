<p align="center">
  <img src="https://cdn-icons-png.flaticon.com/512/6295/6295417.png" width="100" />
</p>
<p align="center">
    <h1 align="center">YOUTUBE_SENTIMENT_EXTENSION</h1>
</p>
<p align="center">
	<img src="https://img.shields.io/github/license/KumarUtsav1025/youtube_sentiment_extension?style=flat&color=0080ff" alt="license">
	<img src="https://img.shields.io/github/last-commit/KumarUtsav1025/youtube_sentiment_extension?style=flat&logo=git&logoColor=white&color=0080ff" alt="last-commit">
	<img src="https://img.shields.io/github/languages/top/KumarUtsav1025/youtube_sentiment_extension?style=flat&color=0080ff" alt="repo-top-language">
	<img src="https://img.shields.io/github/languages/count/KumarUtsav1025/youtube_sentiment_extension?style=flat&color=0080ff" alt="repo-language-count">
<p>
<p align="center">
		<em>Developed with the software and tools below.</em>
</p>
<p align="center">
	<img src="https://img.shields.io/badge/JavaScript-F7DF1E.svg?style=flat&logo=JavaScript&logoColor=black" alt="JavaScript">
	<img src="https://img.shields.io/badge/HTML5-E34F26.svg?style=flat&logo=HTML5&logoColor=white" alt="HTML5">
	<img src="https://img.shields.io/badge/JSON-000000.svg?style=flat&logo=JSON&logoColor=white" alt="JSON">
</p>
<hr>

##  Quick Links

> - [ Overview](#-overview)
> - [ Features](#-features)
> - [ Repository Structure](#-repository-structure)
> - [ Getting Started](#-getting-started)
>   - [ Installation](#-installation)
>   - [ Running youtube_sentiment_extension](#-running-youtube_sentiment_extension)
> - [ Contributing](#-contributing)
> - [ License](#-license)

---

##  Overview

The YouTube Comment Sentiment Analyzer is a Chrome extension designed to help users quickly gauge the sentiment of comments on YouTube videos. By analyzing the first 20 comments on a video, this tool provides an overview of the audience's sentiment, categorizing comments as positive, negative, or neutral.

---

##  Features

* **Sentiment Analysis:** Automatically analyzes the first 20 comments on a YouTube video.
* **Sentiment Categories:** Classifies comments into positive, negative, or neutral.
* **User-Friendly Interface:** Displays results in an easy-to-understand format.
* **Quick Access:** Accessible directly from the Chrome toolbar while watching a YouTube video.

---

##  Repository Structure

```sh
└── youtube_sentiment_extension/
    ├── background.js
    ├── content.js
    ├── images
    │   ├── icon16.png
    │   ├── loading.gif
    │   ├── negative.gif
    │   ├── neutral.gif
    │   ├── positive.gif
    │   ├── sad.gif
    │   ├── truck.gif
    │   └── youtube-animation.gif
    ├── manifest.json
    ├── popup.html
    ├── script.js
    └── styles.css
```

---

##  Getting Started

***Requirements***

Ensure you have the following dependencies installed on your system:

* **JavaScript**: `version x.y.z`

###  Installation

1. Clone the youtube_sentiment_extension repository:

```sh
git clone https://github.com/KumarUtsav1025/youtube_sentiment_extension
```

2. Change to the project directory:

```sh
cd youtube_sentiment_extension
```

###  Running youtube_sentiment_extension

* Open Chrome and navigate to the Extensions page:
    ```sh
    chrome://extensions/
    ```
* Enable Developer Mode by clicking the toggle switch in the top right corner.
* Click "Load unpacked" and select the cloned directory.


### Usage
* Navigate to a YouTube video.
* Click on the YouTube Comment Sentiment Analyzer icon in the Chrome toolbar.
* The extension will automatically fetch and analyze the first 20 comments.
* View the sentiment analysis results displayed in the extension popup.

---


##  Contributing

Contributions are welcome! Here are several ways you can contribute:

- **[Submit Pull Requests](https://github.com/KumarUtsav1025/youtube_sentiment_extension/blob/main/CONTRIBUTING.md)**: Review open PRs, and submit your own PRs.
- **[Join the Discussions](https://github.com/KumarUtsav1025/youtube_sentiment_extension/discussions)**: Share your insights, provide feedback, or ask questions.
- **[Report Issues](https://github.com/KumarUtsav1025/youtube_sentiment_extension/issues)**: Submit bugs found or log feature requests for Youtube_sentiment_extension.

<details closed>
    <summary>Contributing Guidelines</summary>

1. **Fork the Repository**: Start by forking the project repository to your GitHub account.
2. **Clone Locally**: Clone the forked repository to your local machine using a Git client.
   ```sh
   git clone https://github.com/KumarUtsav1025/youtube_sentiment_extension
   ```
3. **Create a New Branch**: Always work on a new branch, giving it a descriptive name.
   ```sh
   git checkout -b new-feature-x
   ```
4. **Make Your Changes**: Develop and test your changes locally.
5. **Commit Your Changes**: Commit with a clear message describing your updates.
   ```sh
   git commit -m 'Implemented new feature x.'
   ```
6. **Push to GitHub**: Push the changes to your forked repository.
   ```sh
   git push origin new-feature-x
   ```
7. **Submit a Pull Request**: Create a PR against the original project repository. Clearly describe the changes and their motivations.

Once your PR is reviewed and approved, it will be merged into the main branch.

</details>

---

##  License

This project is protected under the [MIT](https://choosealicense.com/licenses) License. For more details, refer to the [LICENSE](https://github.com/KumarUtsav1025/youtube_sentiment_extension/blob/main/LICENSE/) file.

---