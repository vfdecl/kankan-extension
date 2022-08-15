(function () {
  const api = 'https://app.xuehuayu.cn/v.html?source=extension&from=leduo&vid='
  const loc = window.location.href

  function _$ (selector) {
    return document.querySelector(selector)
  }
  function _$$ (selector) {
    return document.querySelectorAll(selector)
  }

  if (loc.includes('leduozy')) {
    const vodList = _$$('.movievod li') || [];

    vodList.forEach(li => {
      const _html = li.innerHTML
      const _text = li.innerText
      if (_text.includes('XM')) {
        li.classList = li.classList + ' vod-li'
        const xm = _html.replace(/<.+\/?>|<.+>.*?<\.*>/g, '')
        const _a = document.createElement('a')
        _a.href = api + xm
        _a.target = '_blank'
        _a.className = 'kk-btn'
        _a.innerText = '播放'
        li.append(_a)
      }
    })
  }


})()