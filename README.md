# OnlineTestPad Question Scraper

This Chrome extension allows you to scrape questions from OnlineTestPad.com.

## Features

- Scrapes questions from OnlineTestPad.com
- Copies scraped text to clipboard for easy access
- Supports answering questions with AI (requires OpenAI API key, see below)

## Installation

1. Download the extension files from the repository.
2. Open Google Chrome and go to `chrome://extensions/`.
3. Enable Developer mode (toggle switch located in the top right corner).
4. Click on "Load unpacked" and select the folder containing the extension files.

## Usage

1. Navigate to https://onlinetestpad.com/.
2. Click on the extension icon in the Chrome toolbar.
3. Click on the "Scrape Questions" button.
4. The extension will scrape the questions from the page and copy them to your clipboard.

### Answering Questions with AI

To use the AI question answering feature, you need to insert your OpenAI API key into the `config.js` file.

1. Open the `config.js` file in the extension folder.
2. Insert your OpenAI API key in the `OPENAI_API_KEY` variable.
3. Save the file.

## License

This project is licensed under the [MIT License](LICENSE).
