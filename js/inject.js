(function () {
  const ldApi = 'https://xuehuayu.cn/v.html?source=extension&from=leduo&vid='
  const fqApi = 'https://xuehuayu.cn/v.html?source=extension&from=fanqie&vid='
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
        const nums = _html.match(/.*\>(.*?)\$/)
        const num = nums ? ':' + nums[1] : ''
        const _a = document.createElement('a')
        _a.href = ldApi + xm
        _a.target = '_blank'
        _a.className = 'kk-btn'
        _a.innerText = `播放${num}`
        li.append(_a)
      }
    })
  } else if (loc.includes('fqzy')) {
    const vodList = _$$('.vodplayinfo li') || [];
    
    vodList.forEach(li => {
      const _html = li.innerHTML
      const _text = li.innerText
      if (_text.includes('FQ')) {
        li.classList = li.classList + ' vod-li'
        const xm = _html.replace(/<.+\/?>|<.+>.*?<\.*>|.*?\$/g, '')
        const nums = _html.match(/.*\>(.*?)\$/)
        const num = nums ? ':' + nums[1] : ''
        const _a = document.createElement('a')
        _a.href = fqApi + xm
        _a.target = '_blank'
        _a.className = 'kk-btn'
        _a.innerText = `播放${num}`
        li.append(_a)
      }
    })
  }

})()