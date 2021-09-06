chrome.runtime.onMessage.addListener((request, sender, sendResponse) => {
  console.log(request);
  console.log(sender.tab.id);

  chrome.pageAction.show(sender.tab.id);
  sendResponse();
});
