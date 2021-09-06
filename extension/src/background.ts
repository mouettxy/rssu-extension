chrome.runtime.onMessage.addListener((request, sender, sendResponse) => {
  if (sender.tab?.id) {
    chrome.pageAction.show(sender.tab.id);
  }

  sendResponse();
});
