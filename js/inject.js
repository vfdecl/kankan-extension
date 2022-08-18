(function () {
  const api = 'https://xuehuayu.cn/v.html?source=extension&from={{from}}&title={{title}}&vid='
  const loc = window.location.href

  function _$ (selector, dom = document) {
    return dom.querySelector(selector)
  }
  function _$$ (selector, dom = document) {
    return dom.querySelectorAll(selector)
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
        const ldApi = api.replace('{{from}}', 'leduo').replace('{{title}}', `${nums[1]}`)
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
        const fqApi = api.replace('{{from}}', 'fanqie').replace('{{title}}', `${nums[1]}`)
        const _a = document.createElement('a')
        _a.href = fqApi + xm
        _a.target = '_blank'
        _a.className = 'kk-btn'
        _a.innerText = `播放${num}`
        li.append(_a)
      }
    })
  } else if (loc.includes('guangsuzy') || loc.includes('guangsuziyuan')) {
    const vodList = _$$('.dy-collect-list li') || [];
    const api = 'https://www.gszyv.com/m3u8/?url='

    vodList.forEach(li => {
      const xm = _$$('a', li)[0].href

      if (xm.includes('http')) {
        const nums = _$('.c-name', li).innerText
        const num = nums ? ':' + nums : ''
        const _a = document.createElement('a')
        if (xm.includes('.m3u8')) {
          _a.href = api + xm
        } else {
          _a.href = xm
        }
        _a.target = '_blank'
        _a.className = 'kk-btn d-i-b'
        _a.innerText = `播放${num}`
        li.append(_a)
      }
    })
  } else if (loc.includes('hongniuzy') || loc.includes('hongniuziyuan')) {
    const vodList = _$$('.vodplayinfo li') || [];
    const api = 'https://www.tutukiki.com/m3u8/?url='

    vodList.forEach(li => {
      const xm = _$$('a', li)[0].href
      if (xm.includes('http')) {
        li.classList = li.classList + ' vod-li'
        const num = _$$('a', li)[0].title
        const _a = document.createElement('a')
        if (xm.includes('.m3u8')) {
          _a.href = api + xm
        } else {
          _a.href = xm
        }
        _a.target = '_blank'
        _a.className = 'kk-btn'
        _a.innerText = `播放${num}`
        li.append(_a)
      }
    })
  }

})()