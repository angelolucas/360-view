var objectContainer = document.querySelector('.rotate-container')
var object = document.querySelector('.rotate')
var speed = 3
var rotation = {
  x: 45,
  z: 225,
}

objectContainer.onmousedown = function(e) {
  var dragging = true
  var prevX = e.pageX
  var prevY = e.pageY

  objectContainer.onmousemove = function(e) {
    if (!dragging) return false

    var x = reversePolarity(e.pageX - prevX)
    var y = reversePolarity(e.pageY - prevY)

    prevX = e.pageX
    prevY = e.pageY

    rotation.x += (y / 10) * speed
    rotation.z += (x / 10) * speed

    object.style.transform =
      'rotateX(' + rotation.x + 'deg) rotateZ(' + rotation.z + 'deg)'
  }

  objectContainer.onmouseup = function(e) {
    dragging = false
  }
}

reversePolarity = function(value) {
  return value - value * 2
}

document.querySelector('.magic-button').onclick = function() {
  document.querySelector('.cubemap').classList.toggle('magic')
}

document.onkeypress = function(event) {
  if (event.key === 'm') {
    document.querySelector('.cubemap').classList.toggle('magic')
  }
}
