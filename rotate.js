var objectContainer = document.querySelector('.rotate-container')
var object = document.querySelector('.rotate')
var speed = 3
var rotation = {
  x: 45,
  y: 0,
  z: 225,
}

objectContainer.onmousedown = function(e) {
  var dragging = true
  var prevXRotation = e.pageX
  var prevYRotation = e.pageY

  objectContainer.onmousemove = function(e) {
    if (!dragging) return false

    var xRotation = reversePolarity(e.pageX - prevXRotation)
    var yRotation = reversePolarity(e.pageY - prevYRotation)

    prevXRotation = e.pageX
    prevYRotation = e.pageY

    rotation.x += (yRotation / 10) * speed
    rotation.z += (xRotation / 10) * speed

    applyRotatiton()
  }

  objectContainer.onmouseup = function(e) {
    dragging = false
  }
}

var reversePolarity = function(value) {
  return value - value * 2
}

// Apply rotation by device orientation
window.addEventListener('deviceorientation', handleOrientation)

function handleOrientation(e) {
  rotation.x = e.beta
  rotation.y = -e.gamma
  rotation.z = e.alpha

  applyRotatiton()
}

var applyRotatiton = function() {
  object.style.transform =
    'rotateY(' +
    rotation.y +
    'deg) rotateX(' +
    rotation.x +
    'deg) rotateZ(' +
    rotation.z +
    'deg)'
}

document.onload = applyRotatiton()
