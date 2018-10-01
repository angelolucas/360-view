var select = {
  cubemap: document.querySelector('.cubemap-container'),
  camera: document.querySelector('.camera'),
  input: {
    showGrid: document.querySelector('.input-show-grid'),
    showBorders: document.querySelector('.input-show-borders'),
    zoom: document.querySelector('.input-zoom'),
  },
}

// Zoom Range
select.input.zoom.oninput = function() {
  select.camera.style.transform = 'translateZ(' + this.value + 'px)'
}

// Toggle Show Grid
select.input.showGrid.onclick = function() {
  select.cubemap.classList.toggle('show-grid')
}

// Toogle Cube Borders
select.input.showBorders.onclick = function() {
  select.cubemap.classList.toggle('show-border')
}
