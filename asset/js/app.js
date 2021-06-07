/* let pala = ['2','eaf','vsi','vdfv']
let i = 0
let timer_is_on = 0
function timedCount(){
    //console.log(pala[i])
    i++
    if(i===pala.length){
        i=0
    }
    setTimeout(timedCount,2000)
}
timedCount() */

window.sr = ScrollReveal();

sr.reveal('.project',{
    duration: 4000,
    origin: 'top',
    distance: '-50px'
})

sr.reveal('.about-feactures',{
    duration: 2000,
    origin: 'right',
    distance: '-100px'
})   
sr.reveal('.about-story',{
    duration: 2000,
    origin: 'left',
    distance: '-50px'
}) 