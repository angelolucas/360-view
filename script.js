/*
JS used for camera rotation
*/
$(document).ready(function() {
  var winW = $(window).width()
  var winH = $(window).height()
  var $demo = $('.rotation')
  var rotation = {
    x: 45,
    z: 225,
  }
  var prevValues = {
    x: 90,
    y: 45,
  }
  var rotationActive = false
  var startAnimTime = 5400
  var timeout = setTimeout(function() {
    $demo.addClass('ready')
  }, 4400)

  $(document).on('mousedown', function(e) {
    var startX = e.pageX
    var startY = e.pageY

    $(document).on('mousemove', function(e) {
      var deltaX
      var deltaY
      if (!rotationActive) {
        deltaX = startX - e.pageX
        deltaY = startY - e.pageY
        rotationActive = true
      } else {
        deltaX = prevValues.x - e.pageX
        deltaY = prevValues.y - e.pageY
      }
      prevValues.x = e.pageX
      prevValues.y = e.pageY

      var degX = (deltaX * 100) / 360
      var degY = (deltaY * 100) / 360

      rotation.x += degY
      rotation.z += degX

      $demo.css(
        'transform',
        'rotateX(' + rotation.x + 'deg) rotateZ(' + rotation.z + 'deg)'
      )
    })

    $(document).on('mouseup', function(e) {
      $(document).off('mousemove')
      $(document).off('mouseup')
      rotationActive = false
      prevValues.x = 0
      prevValues.y = 0
    })
  })

  $('.magic-button').click(function() {
    $('.cubemap').toggleClass('magic')
  })

  $(document).keypress(function(event) {
    if (event.originalEvent.key === 'm') {
      $('.cubemap').toggleClass('magic')
    }
  })
})
