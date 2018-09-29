var objectContainer = document.querySelector('.rotate-container')
var object = document.querySelector('.rotate')
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

    var xRotation = e.pageX - prevXRotation
    var yRotation = e.pageY - prevYRotation

    prevXRotation = e.pageX
    prevYRotation = e.pageY

    rotation.x += yRotation / 13
    rotation.z += xRotation / 13

    applyRotatiton()
  }

  objectContainer.onmouseup = function(e) {
    dragging = false
  }
}

// Apply rotation by device orientation
window.addEventListener('deviceorientation', function(e) {
  rotation.x = e.beta
  rotation.y = -e.gamma
  rotation.z = e.alpha

  applyRotatiton()
})

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
