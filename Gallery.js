let h3 = document.querySelectorAll('.Artikli h3')
for (let h of h3) {
    h.addEventListener('click', (e) => {
        let tajEl = e.target
        let name = tajEl.getAttribute('name')

        let mainDiv = document.querySelectorAll('.imageGallerySection div')

        for (let main of mainDiv) {
            main.style.display = "none"
            let imena = main.getAttribute('name')
            if (name === "Sve") {
                main.style.display = "block"
            }
            if(name === imena){
                main.style.display='block'
            }
        }
    })
}
let pocetna = document.querySelector('#PocetnaStr').addEventListener('click',()=>{
    window.location.href = "index.html"
})
// let lepir = document.querySelector('#Lepir').addEventListener('click',()=>{
//     window.location.href = "Lepir.html"
// })
let Ivona = document.querySelector('#Ivona').addEventListener('click',()=>{
    window.location.href = "Ivona/Ivona.html"
})
document.querySelector('#Mladenci').addEventListener('click',()=>{
    window.location.href="Mladenci/Mladenci.html"
})
document.querySelector('#Milica').addEventListener('click',()=>{
    window.location.href="Milica/Milica.html"
})
document.querySelector('#Srdjan').addEventListener('click',()=>{
    window.location.href="SvadbaGYM/Srdjan.html"
})
document.querySelector('#Radmila').addEventListener('click',()=>{
    window.location.href="Radmila/Radmila.html"
})

