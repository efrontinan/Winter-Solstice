/* HEADER */
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

header.insertBefore(h2, header.children[2])

const stars = document.createElement('div')
stars.classList = 'stars'

header.insertBefore(stars, header.children[0])

/* NAVLINK */

document.addEventListener("DOMContentLoaded", function () {
    const sections = document.querySelectorAll('section')
    const navLinks = document.querySelectorAll('#main-nav a')

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {

                navLinks.forEach(link => link.classList.remove('active'))

                const id = entry.target.id
                const activeLink = document.querySelector(`#main-nav a[href="#${id}"]`)

                if (activeLink) {
                    activeLink.classList.add('active')

                }
            }
        });
    }, { threshold: 1 })

    sections.forEach(section => observer.observe(section))
})

/* SECTION 1 */

const section1 = document.querySelector('#introduction')

const photoDiv = document.createElement('div')
photoDiv.classList = 'photoDiv'

section1.insertBefore(photoDiv, section1.children[0])

const textDiv = document.createElement('div')
textDiv.classList = 'textDiv'

const section1h2 = document.querySelector('#introduction h2')
const section1p = document.querySelector('#introduction p')

textDiv.appendChild(section1h2)
textDiv.appendChild(section1p)

section1.insertBefore(textDiv, section1.children[1])

/* SECTION 2 */

const section2 = document.querySelector('#science')

const textDivs2 = document.createElement('div')
textDivs2.classList = 'textDiv'

const section2p = document.querySelectorAll('#science p')

section2p.forEach(elm => {
    textDivs2.appendChild(elm)
})

section2.insertBefore(textDivs2, section2.children[1])

