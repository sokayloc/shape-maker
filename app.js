const container = document.querySelector('.container');
const colors = ['red', 'blue', 'green'];
const sizes = ['sm', 'md', 'lg'];

function randomShape(){
  const colorIdx = Math.floor(Math.random()*colors.length);
  const sizeIdx = Math.floor(Math.random()*sizes.length);
  const shape = {
    color: colors[colorIdx],
    size: sizes[sizeIdx]

  };
  return shape;
}

const shapes = [
  randomShape(),
  randomShape()
];

function render(){
  const html = shapes.map(function(shape){
    return `<div class='${shape.color} ${shape.size}'></div>`;
  });
  container.innerHTML = html.join('');
}

render();
setInterval(function(){
  const newShape = randomShape();
  shapes.push(newShape);
  render();
}, 500);