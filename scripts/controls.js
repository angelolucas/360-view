var select = {
  cube: document.querySelector('.cube'),
  camera: document.querySelector('.camera'),
  input: {
    showGrid: document.querySelector('.input-show-grid'),
    showBorders: document.querySelector('.input-show-borders'),
    zoom: document.querySelector('.input-zoom'),
  },
}

// Range Zoom
select.input.zoom.oninput = function() {
  select.camera.style.transform = 'translateZ(' + this.value + 'px)'
}

// Toggle Show Grid
select.input.showGrid.onclick = function() {
  select.cube.classList.toggle('grid')
}

// Toogle Cube Borders
select.input.showBorders.onclick = function() {
  select.cube.classList.toggle('borders')
}
