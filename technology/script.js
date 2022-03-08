const container = document.querySelector('main .container')
const navItems = document.querySelectorAll('.nav span')

document.addEventListener('DOMContentLoaded',()=>{
    gsap.to('.black',{
        duration:.6,
        scale:0,
        delay:.5
    })
})

function showDestination({name, images, description}) {
    console.log(name, images,description);
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
    <div class="image" alt="jjj" ></div>

  
`
let image = document.querySelector('main .container .image')
console.log(image)
image.style.backgroundImage = '../assets/technology/image-launch-vehicle-landscape.jpg'
image.style.color= 'red'
}

let getData = (num) => {
    fetch('../data.json')
        .then(res => res.json())
        .then(data => {
            const technology = data.technology
            showDestination(technology[num - 1])
        })
}

function toggleActive(elements, currentElement){
     elements.forEach((element)=>{
         element.classList.remove('active')
     })
     currentElement.classList.add('active')
}

navItems.forEach((item)=>{
   item.addEventListener('click',(e)=>{
       console.log('clicked')
       let index = e.target.dataset.index
       
       getData(index)
       toggleActive(navItems, item)  
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