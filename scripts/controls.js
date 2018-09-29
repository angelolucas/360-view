var select = {
  cubemap: document.querySelector('.cubemap-container'),
  input: {
    showGrid: document.querySelector('.input-show-grid'),
    cubeBorder: document.querySelector('.input-cube-border'),
    zoomIn: document.querySelector('.input-zoom[data-zoom="in"]'),
    zoomOut: document.querySelector('.input-zoom[data-zoom="out"]'),
  },
}
var zoomSteps = [0.75, 1, 1.5, 2, 3, 5, 10, 50]
var currentZoom = zoomSteps.length - 1

// Toggle Show Grid
select.input.showGrid.onchange = function() {
  select.cubemap.classList.toggle('show-grid')
}

// Toogle Cube Borders
select.input.cubeBorder.onchange = function() {
  select.cubemap.classList.toggle('cube-border')
}

// Zoom Control
select.input.zoomIn.onclick = function() {
  handleZoom('in')
  disableZoomOnLastStep()
}

select.input.zoomOut.onclick = function() {
  handleZoom('out')
  disableZoomOnLastStep()
}

var handleZoom = function(direction) {
  if (direction === 'in') currentZoom++
  if (direction === 'out') currentZoom--

  var scale = zoomSteps[currentZoom]

  select.cubemap.style.transform =
    'scale3d(' + scale + ',' + scale + ',' + scale + ')'
}

var disableZoomOnLastStep = function() {
  if (currentZoom === zoomSteps.length - 1) {
    select.input.zoomIn.disabled = true
  } else if (currentZoom === 0) {
    select.input.zoomOut.disabled = true
  } else {
    select.input.zoomIn.disabled = false
    select.input.zoomOut.disabled = false
  }
}

document.onload = [handleZoom(), disableZoomOnLastStep()]
