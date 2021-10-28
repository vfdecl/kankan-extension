$(function () {
  var toast = $('#toast')
  var loading = $('#loading')
  var ipt = $('#ipt')
  var btn = $('#btn')
  var timer = null
  var playUrl = 'https://www.cainiaoblog.cn/v.html?system=ios&vid='

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

  function startPlay () {
    var iptVal = (ipt.val() || '').trim()
    if (!iptVal) {
      showToast('地址不能为空')
    } else {
      window.open(playUrl + iptVal)
    }
  }
  ipt.on('keydown', function (e) {
    if (e.which === 13) {
      startPlay()
    }
  })
  btn.on('click', function () {
    startPlay()
  })

})






