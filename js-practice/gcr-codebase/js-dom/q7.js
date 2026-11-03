const hoverBox = document.querySelector('#mouseBox');
const position = document.querySelector('#coordinates');
hoverBox.addEventListener('mousemove', (evt) => {
  position.textContent = `clientX: ${evt.clientX}, clientY: ${evt.clientY}`;
});
hoverBox.addEventListener('dblclick', (event) => {
  const limits = hoverBox.getBoundingClientRect();
  const dot = document.createElement('span');
  dot.className = 'dot';
  dot.style.left = `${event.clientX - limits.left}px`;
  dot.style.top = `${event.clientY - limits.top}px`;
  hoverBox.append(dot);
});
