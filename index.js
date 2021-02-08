const sliderParent = document.querySelector('.latest-artcicles__article__wrapper')
const cards = document.querySelectorAll('.latest-articles__article')
const sliderLeft = document.querySelector('.slider_left')
const sliderRight = document.querySelector('.slider_right')
const initCount = 3
let firstNode = 0
let lastNode = cards.length - initCount - 1

function init() {
    sliderLeft.style.visibility = 'hidden'
    for (let i = initCount; i < cards.length; i++) {
        sliderParent.removeChild(cards[i])
    }
}
init()

sliderRight.addEventListener('click', () => {
    if (lastNode === cards.length - 1) {
        return
    }
    if (sliderLeft.style.visibility === 'hidden') {
        sliderLeft.style.visibility = 'visible'
    }
    sliderParent.removeChild(cards[firstNode])
    firstNode += 1
    lastNode += 1
    if (lastNode === cards.length - 1) {
        sliderRight.style.visibility = 'hidden'
    }
    sliderParent.appendChild(cards[lastNode])
})

sliderLeft.addEventListener('click', () => {
    if (firstNode === 0) {
        return 
    }
    if (sliderRight.style.visibility === 'hidden') {
        sliderRight.style.visibility = 'visible'
    }
    sliderParent.removeChild(cards[lastNode])
    firstNode -= 1
    lastNode -= 1
    if (firstNode === 0) {
        sliderLeft.style.visibility = 'hidden'
    }
    sliderParent.prepend(cards[firstNode])
})