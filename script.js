/*
JS used for camera rotation
*/
$(document).ready(function() {
  var winW = $(window).width()
  var winH = $(window).height()
  var objectContainer = $('.rotate-container')
  var object = $('.rotate')
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
    objectContainer.addClass('ready')
  }, 4400)

  objectContainer.on('mousedown', function(e) {
    var startX = e.pageX
    var startY = e.pageY

    objectContainer.on('mousemove', function(e) {
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

      object.css(
        'transform',
        'rotateX(' + rotation.x + 'deg) rotateZ(' + rotation.z + 'deg)'
      )
    })

    objectContainer.on('mouseup', function(e) {
      objectContainer.off('mousemove')
      objectContainer.off('mouseup')
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
