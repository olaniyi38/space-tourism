// let allData;

// fetch('./data.json')
//   .then((response) => {
//     return response.json()
//   }).then((data) => {
//    console.log(data)
//   })

let buttonTl = gsap.timeline()

let button = document.querySelector('main button')
let link = document.querySelector('.link')
console.log(link)

document.addEventListener('DOMContentLoaded',()=>{
  gsap.to('.black',{
      duration:.6,
      scale:0,
      delay:.5
  })
})

button.addEventListener("click", () => {
  setTimeout(function clickLink() {
    link.click()
  }, 2000)
  buttonTl.to('main button', {
      duration: 1,
      transform: 'scale(0.7)',

    }).to('main button div', {
      display: 'none'
    })
    .to('main button', {
      background: '#0B0D17',
      duration: .5
    })
    .to('main button', {
      duration: 3,
      transform: 'scale(100.7)',

    }, '-=.3').to('main button span', {
      opacity: 0,
      duration: .1
    }, '-=3.5')


})


let introTl = gsap.timeline()

introTl.from('.anim h1', {
  duration: 1.5,
  y: 300,
})

let closeIcon = document.querySelector('.icn-close')
let hamburger = document.querySelector('.icn-open')
let mobileNav = document.querySelector('.mobile-nav ul')

hamburger.addEventListener('click',()=>{
       mobileNav.classList.add('active')
})

closeIcon.addEventListener('click',()=>{
       mobileNav.classList.remove('active')
})