chrome.runtime.sendMessage({ action: "extractContent" }, function (response) {
  if (response && response.result) {
    document.getElementById("htmlContent").textContent = response.result;
  } else {
    document.getElementById("htmlContent").textContent =
      "No text content found!";
  }
});

document.getElementById("copyButton").addEventListener("click", function () {
  var textToCopy = document.getElementById("htmlContent").textContent;

  var tempTextarea = document.createElement("textarea");
  tempTextarea.value = textToCopy;
  document.body.appendChild(tempTextarea);

  tempTextarea.select();
  document.execCommand("copy");

  document.body.removeChild(tempTextarea);
});

// chrome.tabs.query({ active: true, currentWindow: true }, function (tabs) {
//   chrome.tabs.executeScript(
//     tabs[0].id,
//     {
//       code: `
//           // Select all <span> elements containing <font> elements
//           const spanElementsWithFonts = document.querySelectorAll('span p');

//           // Extract the text content of the innermost <font> element in each <span>
//           const spanTextContents = Array.from(spanElementsWithFonts).map(font => font.textContent.trim());

//           // Return the extracted text content
//           spanTextContents.join('\\n');
//         `,
//     },
//     function (result) {
//       console.log(result);
//       if (result && result[0] !== null) {
//         document.getElementById("htmlContent").textContent = result[0];
//       } else {
//         document.getElementById("htmlContent").textContent =
//           "No text content found in <font> elements!";
//       }
//     }
//   );
// });
