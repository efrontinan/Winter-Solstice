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
h2.textContent = 'The longest night'

header.insertBefore(h2, header.children[2])

const stars = document.createElement('div')
stars.classList = 'stars'

header.insertBefore(stars, header.children[0])

window.addEventListener('scroll', () => {
    const maxScroll = 500
    const scrollPosition = window.scrollY
    let scale = 1 - (scrollPosition / maxScroll) * 0.25

    if (scale < 0.75) {
        scale = 0.75
    }

    header.style.transform = `scale(${scale})`
})

/* NAVLINK */

const body = document.querySelector('body')
const navBar = document.querySelector('#main-nav')
body.appendChild(navBar)

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
    }, { threshold: 0.5 })

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

/*SECTION 3 */

const section3 = document.querySelector('#hemispheres')

const hemispheresDiv = document.createElement('div')
hemispheresDiv.id = 'hemispheresInfo'

const photoDivs3 = document.createElement('div')
photoDivs3.classList = 'photoDiv'

const filter = document.createElement('div')
filter.id = 'filter'

photoDivs3.appendChild(filter)

const s3articles = document.querySelectorAll('#hemispheres article')

s3articles.forEach(elm => {
    hemispheresDiv.appendChild(elm)
})

hemispheresDiv.insertBefore(photoDivs3, hemispheresDiv.children[1])

section3.insertBefore(hemispheresDiv, section3.children[2])

document.addEventListener('scroll', () => {
    const northernHemisphere = document.getElementById('northern-hemisphere')
    const southernHemisphere = document.getElementById('southern-hemisphere')

    const sectionHeight = section3.offsetHeight
    const scrollPosition = window.scrollY + window.innerHeight / 2

    const upperHalf = sectionHeight / 2

    if (scrollPosition < section3.offsetTop + upperHalf) {
        northernHemisphere.style.color = '#eee'
        southernHemisphere.style.color = '#939393'
        photoDivs3.style.justifyContent = 'flex-end'
    } else {
        northernHemisphere.style.color = '#939393'
        southernHemisphere.style.color = '#eee'
        photoDivs3.style.justifyContent = 'flex-start'
    }
})

/*SECTION 4. CELEBRATIONS */

const section4 = document.querySelector('#celebrations')

const articlesDiv = document.createElement('div')
articlesDiv.classList = 'articlesDiv'

const section4articles = document.querySelectorAll('#celebrations article')

section4articles.forEach((elm) => {

    const newDiv = document.createElement('div')
    newDiv.classList = `card-content`

    const h3 = document.querySelector(`#${elm.id} h3`)
    const p = document.querySelector(`#${elm.id} p`)

    newDiv.appendChild(h3)
    newDiv.appendChild(p)

    elm.appendChild(newDiv)

    articlesDiv.appendChild(elm)

})

section4.appendChild(articlesDiv)

/*BACK TO TOP */

const backToTopBtn = document.querySelector('#footer-nav ul li a')

backToTopBtn.addEventListener('click', () => {
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    })
})
