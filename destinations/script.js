let mainContainer = document.querySelector('.destinations .template')
let tl = gsap.timeline()

//name,description,src,distance,travel


document.addEventListener('DOMContentLoaded',()=>{
    gsap.to('.black',{
        duration:.6,
        scale:0,
        delay:.5
    })
})

function showDestination({name,images,description,distance,travel})
{
   console.log(name,images,description,distance,travel); 
    mainContainer.innerHTML = 
    `
    <div class="image" style="background: url('${images.png}') top no-repeat; background-size: contain;">
     </div>
<div class="info">
  
   <div class="content">
       <h2 class="name">${name.toUpperCase()}</h2>
       <p class="description">
         ${description}
       </p>
       <div class="distance">
           <h3>Avg. distance
           </h3>
           <p>${distance} </p>

       </div>
       <div   class="travel-time">
           <h3>Est. travel time</h3>
           <p>${travel}</p>
       </div>
   </div>
</div>

`
 tl.from('main .template .name',{
        duration:1,
        y:-20,
        opacity:0,
 }).from('main .template p.description',{
      duration:1.5,
      x:-20,
      opacity:0

  },'-=.8')
  .from('.distance p,.travel-time p',{
      duration:.8,
      x:20,
      opacity:0,
      stagger:.5
  },'-=.5')

}

let getData = (name) =>{
   fetch('../data.json')
    .then(res => res.json())
    .then(data => {
    const destinations =  data.destinations

    let query = destinations.filter((destination)=>{
        return name.toLowerCase() === destination.name.toLowerCase()
    })
     showDestination(query[0])
     
    
    } )
}



let destinationList = document.querySelectorAll('main nav li')

destinationList.forEach((item)=>{
    item.addEventListener('click',(e)=>{
        let destination = e.target.dataset.destination
        getData(destination)
    })
})

function setActiveList(e){
      destinationList.forEach((list)=>{
          list.classList.remove('active')
      })
      e.target.classList.add('active')
}
destinationList.forEach((item)=>{
    item.addEventListener('click',setActiveList)
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

/** animations */


// document.addEventListener('DOMContentLoaded',()=>{
// tl.to('main .template .name',{visibility:'visible',})
// .from('main .template .name',{
//     duration:1,
//     y:-20,
//     opacity:0
// })
// })