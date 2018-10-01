var dragArea = document.querySelector('.drag-area')
var rotationContainers = document.querySelectorAll('.rotate')
var rotation = {
  x: 45,
  y: 0,
  z: 225,
}

dragArea.onmousedown = function(e) {
  var dragging = true
  var prevXRotation = e.pageX
  var prevYRotation = e.pageY

  dragArea.onmousemove = function(e) {
    if (!dragging) return false

    var xRotation = e.pageX - prevXRotation
    var yRotation = e.pageY - prevYRotation

    prevXRotation = e.pageX
    prevYRotation = e.pageY

    rotation.x += yRotation / 5
    rotation.z += xRotation / 5

    applyRotatiton()
  }

  dragArea.onmouseup = function(e) {
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
  var rotate =
    'rotateY(' +
    rotation.y +
    'deg) rotateX(' +
    rotation.x +
    'deg) rotateZ(' +
    rotation.z +
    'deg)'

  rotationContainers.forEach(function(container) {
    container.style.transform = rotate
  })
}

document.onload = applyRotatiton()
