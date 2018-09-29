var select = {
  cubemap: document.querySelector('.cubemap-container'),
  input: {
    showGrid: document.querySelector('.input-show-grid'),
    cubeBorder: document.querySelector('.input-cube-border'),
    zoomIn: document.querySelector('.zoom-in'),
    zoomOut: document.querySelector('.zoom-out'),
  },
}
var zoomSteps = [0.75, 1, 1.5, 2, 3, 5, 10, 50]
var currentZoom = zoomSteps.length - 1

select.input.showGrid.onchange = function() {
  select.cubemap.classList.toggle('show-grid')
}

select.input.cubeBorder.onchange = function() {
  select.cubemap.classList.toggle('cube-border')
}

select.input.zoomIn.onclick = function() {
  var lastStap = currentZoom === zoomSteps.length - 1

  if (!lastStap) {
    currentZoom++
    applyZoom()
  }
}

select.input.zoomOut.onclick = function() {
  var lastStep = currentZoom === 0

  if (!lastStep) {
    currentZoom--
    applyZoom()
  }
}

var applyZoom = function() {
  var scale = zoomSteps[currentZoom]

  select.cubemap.style.transform =
    'scale3d(' + scale + ',' + scale + ',' + scale + ')'
}

document.onload = applyZoom()
