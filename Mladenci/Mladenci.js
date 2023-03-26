document.querySelector('#povratak').addEventListener('click', () => {
    window.location.href = "../gallery.html"
})
document.querySelector('#Galerija').addEventListener('click', () => {
    window.location.href = "../gallery.html"
})
document.querySelector('#PocetnaStr').addEventListener('click',()=>{
    window.location.href="../index.html"
})
let Ivona = document.querySelectorAll('.IvonaGalery .iconsDisNone')

for (let i of Ivona) {
    i.addEventListener('click', (e) => {
        let jednaSlika = e.target
        let modal = document.querySelector('.popup-modal')
        let overlay = document.querySelector('.overlay')
        let imgSlider = document.querySelector(".imgForPut")
        let paretnt = jednaSlika.parentNode
        let IV = paretnt.querySelector('.IV')
        let img = IV.getAttribute('src')

        imgSlider.src = img
        modal.style.display = "block"
        overlay.style.display = "block"
        imgSlider.style.display = "block"

    })
}
document.querySelector('.iksCase').addEventListener('click', (e) => {
    let modal = document.querySelector('.popup-modal')
    let overlay = document.querySelector('.overlay')
    let imgSlider = document.querySelector(".imgForPut")
    modal.style.display = "none"
    overlay.style.display = "none"
    imgSlider.style.display = "none"
})

document.querySelector('.popup-modal').addEventListener('click', () => {
    let overlay = document.querySelector('.overlay')
    let imgSlider = document.querySelector(".imgForPut")


})

let num = 0

document.querySelector('.rightBtn').addEventListener('click', (e) => {
    let IV = document.querySelectorAll('.IV')
    let IVO = document.querySelector('.imgForPut')
    let i = IV[num].getAttribute('src')
    IVO.src = i
    num++
    if (num === IV.length) {
        num = 0
        console.log(num)
    }

})

document.querySelector('.leftBtn').addEventListener('click', (e) => {
    let IV = document.querySelectorAll('.IV')
    let IVO = document.querySelector('.imgForPut')
    let i = IV[num].getAttribute('src')
    IVO.src =i
    num--
    if(num == -1){
       num = IV.length -1
    }
    console.log(i)
})


