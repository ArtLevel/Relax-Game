// Находим нужные элементы
const board = document.querySelector('#board')

// Создаём переменные colors в котором хранятся все цвета, и SQUARES_NUMBER который задаёт количество кубов в board
const colors = [
	'#7dca6f',
	'#e74c3c',
	'#e894b1',
	'#2a90a7',
	'#8e44ad',
	'#3498db',
	'#6729a8',
	'#e67e22',
	'#2ecc71',
]
const SQUARES_NUMBER = 600

// Создаём кубики и вешаем на них обработчики событий, при навединии и убирания курсора мыши
for (let i = 0; i < SQUARES_NUMBER; i++) {
	const square = document.createElement('div')
	square.classList.add('square')

	square.addEventListener('mouseover', () => setColor(square))
	square.addEventListener('click', () => activeRandomSquare(10))
	square.addEventListener('mouseleave', () => removeColor(square))

	board.append(square)
}

// Функрия которая срабатывает при наведении на square
function setColor(element) {
	const color = getRandomColor()
	element.style.backgroundColor = color
	element.style.boxShadow = `0 0 2px ${color}, 0 0 10px ${color}`
}

// Функрия которая срабатывает при убирании курсора с square
function removeColor(element) {
	element.style.backgroundColor = '#5757571d'
	element.style.boxShadow = `0 0 2px #5757571d`
}

// Функция, которая рандомно выбирает из массива определённый цвет, и возвращает его
function getRandomColor() {
	const index = Math.floor(Math.random() * colors.length)

	return colors[index]
}

// Функция, которая рандомно выбирает square из board, и окрпшивает этот square в рандомный цвет, через 2s убирает его
function activeRandomSquare(count) {
	for (let i = 0; i <= count; i++) {
		const randomSquare = Math.floor(
			Math.random() * board.querySelectorAll('div').length
		)

		setColor(board.querySelectorAll('div')[randomSquare])
		setTimeout(() => {
			removeColor(board.querySelectorAll('div')[randomSquare])
		}, 4000)
	}
}
