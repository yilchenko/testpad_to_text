const OPENAI_API_KEY = config.OPENAI_API_KEY;

chrome.runtime.sendMessage(
  { action: "extractContent" },
  async function (response) {
    if (response && response.result) {
      document.getElementById("htmlContent").textContent = response.result;
      const completion = await completeTextWithGPT(response.result);
      document.getElementById("answerContent").textContent = completion;
    } else {
      document.getElementById("htmlContent").textContent =
        "No text content found!";
    }
  }
);

document.getElementById("copyButton").addEventListener("click", function () {
  var textToCopy = document.getElementById("htmlContent").textContent;

  var tempTextarea = document.createElement("textarea");
  tempTextarea.value = textToCopy;
  document.body.appendChild(tempTextarea);

  tempTextarea.select();
  document.execCommand("copy");

  document.body.removeChild(tempTextarea);
});

async function completeTextWithGPT(text) {
  const response = await fetch("https://api.openai.com/v1/chat/completions", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${OPENAI_API_KEY}`,
    },
    body: JSON.stringify({
      model: "gpt-3.5-turbo",
      messages: [
        {
          role: "user",
          content:
            "You are an assisatnt to help with test, you will be given a question and options, response with a single option with no explanation.",
        },
        { role: "user", content: text },
      ],
      temperature: 0.7,
    }),
  });
  const data = await response.json();
  console.log(data.choices[0].message.content);
  return data.choices[0].message.content;
}
