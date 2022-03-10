const container = document.querySelector('main .container')
const navItems = document.querySelectorAll('.nav span')
let allData = []
let imageIndex = 0;


document.addEventListener('DOMContentLoaded', () => {
    fetch('../data.json')
        .then(res => res.json())
        .then(data => {
            allData = [...data.technology]
        })
    gsap.to('.black', {
        duration: .6,
        scale: 0,
        delay: .5
    })
})

function showDestination({name, images, description}) {
    container.innerHTML =
        `
        <div class="info">
        <p>The terminology is...</p>
        <p class="name">
           ${name}
        </p>
        <p class="about">
           ${description}
        </p>
    </div>
    <img src="${ window.innerWidth <= 768 ? images.landscape : images.portrait}" alt="" class="image">
  
`
}

let getData = (num) => {
    fetch('../data.json')
        .then(res => res.json())
        .then(data => {
            const technology = data.technology
             allData = [...technology]
            showDestination(technology[num - 1])
        })
}

getData(1)


function toggleActive(elements, currentElement){
     elements.forEach((element)=>{
         element.classList.remove('active')
     })
     currentElement.classList.add('active')
    }
   

navItems.forEach((item)=>{
   item.addEventListener('click',(e)=>{
       let index = e.target.dataset.index
       imageIndex = index - 1
       getData(index)
       changeImg()
       toggleActive(navItems, item)  
   })
})

//for changing image oreientation

function changeImg(){
        let image = document.querySelector('main .container .image')
        let landscapeSrc = allData[imageIndex].images.landscape
        let portraitSrc = allData[imageIndex].images.portrait
        console.log(portraitSrc)
        if(window.innerWidth <= 768){
        image.setAttribute('src', landscapeSrc)
        }else{
        console.log('hi')  
        image.setAttribute('src', portraitSrc) 
       }
}

window.addEventListener('resize',changeImg)


let closeIcon = document.querySelector('.icn-close')
let hamburger = document.querySelector('.icn-open')
let mobileNav = document.querySelector('.mobile-nav ul')

hamburger.addEventListener('click',()=>{
       mobileNav.classList.add('active')
})

closeIcon.addEventListener('click',()=>{
       mobileNav.classList.remove('active')
})

