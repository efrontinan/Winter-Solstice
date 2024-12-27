const header = document.querySelector('header')

const newDiv = document.createElement('div')
newDiv.id = 'moonDiv'

const moon = document.createElement('div')
moon.id = 'moon'

newDiv.appendChild(moon)

const sun = document.createElement('div')
sun.id = 'sun'

newDiv.appendChild(sun)


header.insertBefore(newDiv, header.children[0])