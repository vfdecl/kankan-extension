(function () {

  function onContextClick () {

  }

  // createMenus();

  function createMenus () {
    chrome.contextMenus.create({
      "id": "kankan",
      "title": '使用“看看”播放',
      "contexts": ["page", "frame"],
      "documentUrlPatterns": ["*://*/*"]
    });
    chrome.contextMenus.onClicked.addListener(onContextClick)
  }

})()