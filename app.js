const container = document.querySelector('.container');
const colors = ['red', 'blue', 'green'];
const sizes = ['sm', 'md', 'lg'];
const types = ['square', 'cirle']

function randomShape() {
  const colorIdx = Math.floor(Math.random() * colors.length);
  const sizeIdx = Math.floor(Math.random() * sizes.length);
  const shape = {
    color: colors[colorIdx],
    size: sizes[sizeIdx]
    type: types[typeIdx]

  };
  return shape;
}

const shapes = [
  randomShape(),
  randomShape()
];

function render() {
  const html = shapes.map(function (shape) {
    return `<div class='${shape.color} ${shape.size} ${shape.type}'></div>`;
  });
  container.innerHTML = html.join('');
}

render();
setInterval(function () {
  const newShape = randomShape();
  console.log(newShape);
  shapes.push(newShape);
  render();
}, 500);