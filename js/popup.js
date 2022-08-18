$(function () {
  const slt = $('#jxapis')
  const toast = $('#toast')
  const loading = $('#loading')
  const ipt = $('#ipt')
  let timer = null

  initOptions()

  function getUrl (url) { 
    if (url && url.match(/^https?\:\/\//)) {
      const {origin, pathname} = new URL(url)
      return origin + pathname
    } else {
      return url
    }
  }

  function initOptions () {
    let opts = ''
    for (key in jxapis) {
      if (jxapis[key]) {
        opts += `<option value="${jxapis[key]}">${key}</option>`
      }
    }
    slt.html(slt.html() + opts)
  }

  slt.change(function (e) {
    let iptVal = (ipt.val() || '').trim()
    const val = e.target.value
    if (!iptVal) {
      slt.find('option').eq(0).prop('selected', true)
      showToast('地址不能为空')
    } else {
      iptVal = getUrl(iptVal)
      window.open(val + iptVal, 'kankan', 'width='+(window.screen.availWidth)+',height='+(window.screen.availHeight)+ ', fullscreen=yes, toolbar=no, menubar=no, scrollbars=no, resizable=no, location=no, status=no')
    }
  })

  function showToast (msg, duration = 1500) {
    toast.removeClass('hide').text(msg)
    clearTimeout(timer)
    timer = setTimeout(function () {
      toast.addClass('hide').text('')
    }, duration)
  }

  function showLoading () {
    loading.removeClass('hide')
  }

  function hideLoading () {
    loading.addClass('hide')
  }


})






