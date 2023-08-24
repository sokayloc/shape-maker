const container = document.querySelector('.container');
const colors = ['red', 'blue', 'green'];
const sizes = ['sm', 'md', 'lg'];
const types = ['square', 'cirle']

function randomShape() {
  const colorIdx = Math.floor(Math.random() * colors.length);
  const sizeIdx = Math.floor(Math.random() * sizes.length);
  const shape = {
    color: colors[colorIdx],
    size: sizes[sizeIdx],
    type: types[typeIdx],

  };
  return shape;
}

const shapes = [
  randomShape(),
  randomShape()
];

function render() {
  const html = shapes.map(function (shape) {
    return `<div class='${shape.color} ${shape.size} ${shape.type}'>
    ${idx}</div>`;
  });
  container.innerHTML = html.join('');
}

render();
const interval = setInterval(function () {
  const newShape = randomShape();
  shapes.push(newShape);
  render();
  if (shapes.length === 20) {
    clearInterval(interval);
  }
}, 500);