document.querySelector('.magic-button').onclick = function() {
  document.querySelector('.cubemap').classList.toggle('magic')
}

document.onkeypress = function(event) {
  if (event.key === 'm') {
    document.querySelector('.cubemap').classList.toggle('magic')
  }
}
