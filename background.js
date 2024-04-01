chrome.runtime.onMessage.addListener(function (message, sender, sendResponse) {
  if (message.action === "extractContent") {
    chrome.tabs.query({ active: true, currentWindow: true }, function (tabs) {
      chrome.tabs.executeScript(
        tabs[0].id,
        {
          code: `
              // Execute content extraction logic
              spanElementsWithPs = document.querySelectorAll('span p');
              spanTextContents = Array.from(spanElementsWithPs).map(p => p.textContent.trim());
              extractedContent = spanTextContents.join('\\n');
              extractedContent;
            `,
        },
        function (result) {
          if (result && result[0] !== null) {
            sendResponse({ result: result[0] });
          } else {
            sendResponse({ result: null });
          }
        }
      );
    });

    return true;
  }
});
