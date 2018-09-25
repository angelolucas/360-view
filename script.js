/*
JS used for camera rotation
*/

var objectContainer = document.querySelector('.rotate-container')
var object = document.querySelector('.rotate')
var rotation = {
  x: 45,
  z: 225,
}
var prevValues = {
  x: 90,
  y: 45,
}
var rotationActive = false

objectContainer.onmousedown = function(e) {
  var dragging = true
  var startX = e.pageX
  var startY = e.pageY

  objectContainer.onmousemove = function(e) {
    if (!dragging) return false

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

    object.style.transform =
      'rotateX(' + rotation.x + 'deg) rotateZ(' + rotation.z + 'deg)'
  }

  objectContainer.onmouseup = function(e) {
    dragging = false
    rotationActive = false
    prevValues.x = 0
    prevValues.y = 0
  }
}

document.querySelector('.magic-button').onclick = function() {
  document.querySelector('.cubemap').classList.toggle('magic')
}

document.onkeypress = function(event) {
  if (event.key === 'm') {
    document.querySelector('.cubemap').classList.toggle('magic')
  }
}
