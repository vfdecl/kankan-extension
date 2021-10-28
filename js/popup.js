$(function () {
  var toast = $('#toast')
  var ipt = $('#ipt')
  var btn = $('#btn')
  var timer = null

  function showToast (msg, duration = 1500) {
    toast.removeClass('hide').text(msg)
    clearTimeout(timer)
    timer = setTimeout(function () {
      toast.addClass('hide').text('')
    }, duration)
  }


  btn.on('click', function () {
    var iptVal = (ipt.val() || '').trim()
        
    if (!iptVal) {
      showToast('请输入搜索词')
    }
  })

})






