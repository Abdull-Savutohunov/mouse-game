const board = document.querySelector('#board')
// const colors = ['red' , 'green' , 'blue' , 'yellow' , 'purple']
const colors = ['#e74c3c' , '#8e44ad' , '#3498db' , '#e67e22' , '#2ecc71']

const SQUARE_NUMBER = 450

for(let i = 0; i < SQUARE_NUMBER; i++) {
  const square = document.createElement('div')

  // square.clasList.add('square')
  square.classList.add('square')
  console.log(square);

  square.addEventListener('mouseover' , () => setColor(square))

  square.addEventListener('mouseleave' , () => removeColor(square))


  board.append(square)
}

function setColor(e) {
  const color = colorGenerate()
  e.style.backgroundColor = color
  e.style.boxShadow = `0 0 2px ${color} , 0 0 10px ${color}`
}

function removeColor(e) {
  e.style.backgroundColor = '#1d1d1d'
  e.style.boxShadow = `0 0 2px #000`

}

function colorGenerate(e) {
  const index = Math.floor( Math.random() * colors.length)
  return colors[index]
}