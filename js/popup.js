$(function () {
  var slt = $('#jxapis')
  var toast = $('#toast')
  var loading = $('#loading')
  var ipt = $('#ipt')
  var timer = null

  initOptions()

  function initOptions () {
    var opts = ''
    for (key in jxapis) {
      if (jxapis[key]) {
        opts += `<option value="${jxapis[key]}">${key}</ooption>`
      }
    }
    slt.html(slt.html() + opts)
  }

  slt.change(function (e) {
    var iptVal = (ipt.val() || '').trim()
    const val = e.target.value
    if (!iptVal) {
      slt.find('option').eq(0).prop('selected', true)
      showToast('地址不能为空')
    } else {
      window.open(val + iptVal)
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






