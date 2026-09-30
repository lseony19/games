let header = document.querySelector('header')
let bar = document.querySelector('.bar')
let promotion = document.querySelector('.floating-shorts')

window.addEventListener('scroll', () => {

    if ( window.scrollY > 0 ) {
        header.classList.add('down')
    } else {
        header.classList.remove('down')
    }


    let body_h = document.body.offsetHeight
    let view_h = window.innerHeight
    let real_h = body_h - view_h

    let per = ( window.scrollY / real_h) * 100
    console.log(Math.round(per))

    bar.style.width = per + '%'
    
    if ( window.scrollY > document.querySelector('#genji').offsetTop - 400) {
        promotion.classList.add('show')
        
    } else {
        promotion.classList.remove('show')
    }
})