

 window.sr = ScrollReveal();

sr.reveal('.project',{
    duration: 4000,
    origin: 'top',
    distance: '-10px'
})

sr.reveal('.about-feactures',{
    duration: 2000,
    origin: 'right',
    distance: '-10px'
})   
sr.reveal('.about-story',{
    duration: 2000,
    origin: 'left',
    distance: '-10px'
}) 

window.addEventListener('scroll', function(){
    const nav = document.querySelector('.container-menu')
    const position = nav.getBoundingClientRect()
    console.log(position.top + scrollY)
    if(position.top + scrollY > 0){
        nav.classList.add('back-menu-scroll');           
    }else{
        nav.classList.remove('back-menu-scroll')
    }
})

addEventListener('DOMContentLoaded', () => {
    const btnMenu = document.getElementById('btn-menu-nav')
    if(btnMenu){
        btnMenu.addEventListener('click', () =>{
            const itemsResponsive = document.querySelector('.items-menu')
            itemsResponsive.classList.toggle('show')
        })
    }
})
