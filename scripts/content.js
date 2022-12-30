chrome.runtime.Message.addListener((request, sender, sendResponse) => {
  if (request.message === "inject") {
    const { content } = request;

    console.log(content);

    sendResponse({ status: "success" });
  }
});
