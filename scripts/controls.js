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
var currentZoom = 7

select.input.showGrid.onchange = function() {
  select.cubemap.classList.toggle('show-grid')
}

select.input.cubeBorder.onchange = function() {
  select.cubemap.classList.toggle('cube-border')
}

select.input.zoomIn.onclick = function() {
  if (currentZoom < zoomSteps.length - 1) {
    currentZoom++

    applyZoom()
  }
}

select.input.zoomOut.onclick = function() {
  if (currentZoom > 0) {
    currentZoom--

    applyZoom()
  }
}

var applyZoom = function() {
  select.cubemap.style.transform =
    'scale3d(' +
    zoomSteps[currentZoom] +
    ',' +
    zoomSteps[currentZoom] +
    ',' +
    zoomSteps[currentZoom] +
    ')'
}

document.onload = applyZoom()
