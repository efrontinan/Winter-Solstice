const header = document.querySelector('header')

const newDiv = document.createElement('div')
newDiv.id = 'moonDiv'

const moon = document.createElement('div')
moon.id = 'moon'

newDiv.appendChild(moon)

header.insertBefore(newDiv, header.children[0])

const h1 = document.querySelector('h1')

const h2 = document.createElement('h2')
h2.textContent = 'The shortest night'
console.log(h2)

header.insertBefore(h2, header.children[2])

const stars = document.createElement('div')
stars.classList = 'stars'

// const twinkling = document.createElement('div')
// twinkling.classList = 'twinkling'

// header.insertBefore(twinkling, header.children[0])
header.insertBefore(stars, header.children[0])

console.log(header.children)