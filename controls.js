var select = {
  cubemap: document.querySelector('.cubemap'),

  input: {
    showGrid: document.querySelector('.input-show-grid'),
    zoomOut: document.querySelector('.input-zoom-out'),
    cubeBorder: document.querySelector('.input-cube-border'),
  },
}

select.input.showGrid.onchange = function() {
  select.cubemap.classList.toggle('show-grid')
}

select.input.zoomOut.onchange = function() {
  select.cubemap.classList.toggle('zoom-out')
}

select.input.cubeBorder.onchange = function() {
  select.cubemap.classList.toggle('cube-border')
}
