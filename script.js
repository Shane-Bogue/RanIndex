const div = document.createElement('div')
const h1 = document.createElement('h1')

arr = [
    'Weather',
    '20F',
    'Freezing',
    'Clear Skys'
]

div.textContent = arr.join(' ')
h1.textContent = '...'

div.addEventListener('click', () => {
    h1.textContent = arr[Math.floor(Math.random() * arr.length)]
})

document.body.append(div,h1)