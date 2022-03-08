const container = document.querySelector('main .crew')
const navDots = document.querySelectorAll('.nav-dots span')

document.addEventListener('DOMContentLoaded',()=>{
    gsap.to('.black',{
        duration:.6,
        scale:0,
        delay:.5
    })
})

function showDestination({name, images, role, bio}) {
    console.log(name, images, role, bio);
    container.innerHTML =
        `
        <div class="description">
        <h1 class="role">${role}</h1>
        <h2 class="name">${name}</h2>
        <p class="about">
            ${bio}
        </p>
    </div>
  
    <img src="${images.png}" alt="our commander">

  
`

}

let getData = (num) => {
    fetch('../data.json')
        .then(res => res.json())
        .then(data => {
            const crew = data.crew
            showDestination(crew[num - 1])
        })
}

function toggleActive(elements, currentElement){
     elements.forEach((element)=>{
         element.classList.remove('active')
     })
     currentElement.classList.add('active')
}

console.log(navDots)
navDots.forEach((dot)=>{
   dot.addEventListener('click',(e)=>{
       console.log('clicked')
    toggleActive(navDots, dot)  
    let index = e.target.dataset.index
    
    getData(index)
   })
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