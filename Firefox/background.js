function checkTabTitle(tabId, changeInfo, tabInfo) {
    if (changeInfo.title && changeInfo.title === "Server Not Found") {
      browser.tabs.remove(tabId);
    }
  }
  
  browser.tabs.onUpdated.addListener(checkTabTitle);
  