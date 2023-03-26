document.querySelector('.icons').addEventListener('click', () => {
    document.querySelector('.wrapper').style.display = 'none'
    document.querySelector('.closeMENU').style.display = 'block'
    document.querySelector('.icons2').style.display = 'block'
    document.querySelector('.icons').style.display = 'none'
})
document.querySelector('.icons2').addEventListener('click', () => {
    document.querySelector('.wrapper').style.display = 'block'
    document.querySelector('.closeMENU').style.display = 'none'
    document.querySelector('.icons2').style.display = 'none'
    document.querySelector('.icons').style.display = 'block'
})


const chatIcon = () => {
    let myPicture = document.querySelector('#chatICONS')
    let chatICONS = document.querySelector('#question')
    let icon = document.querySelector('.chat img')

    let chats = document.querySelector('.displayBlock')
    myPicture.style.display = 'none'
    chats.style.display = "block"
    icon.style.display = 'none'
    chatICONS.style.display = 'none'


}
const prijava = (event) => {


    let ask = document.querySelector('.display')
    let chats = document.querySelector('.displayBlock')
    let Name = document.querySelector("#Name").value.trim()
    let Email = document.querySelector('#Email').value.trim()
    let NameEror = document.querySelector('.NameEror')
    let EmailEror = document.querySelector('.EmailEror')

    if (Name.length < 3) {
        NameEror.innerText = '*ime nije dobro'
    } else {
        NameEror.innerText = ""
    }
    if (!validateEmail(Email)) {
        EmailEror.innerText = "Email nije validan"
    } else {
        chats.style.display = "none"
        ask.style.display = "block"


    }
}
const validateEmail = (Email) => {
    return String(Email)
        .toLowerCase()
        .match(
            /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
        );
};
const Send = () => {
    xmlhttp = new XMLHttpRequest();
    xmlhttp.open("POST", "https://photostudiodigital-8b603-default-rtdb.europe-west1.firebasedatabase.app/Email.json", true)
    xmlhttp.setRequestHeader('Content-Type', 'application/json')
    xmlhttp.onreadystatechange = function () {
        if (this.readyState == 4) {
            console.log(this.status)
            console.log(JSON.parse(this.responseText))
        }
    }

    const EmailIME = []
    let inputforQuestion = document.querySelector('.inputforQuestion').value.trim()
    let Name = document.querySelector("#Name").value.trim()
    let Email = document.querySelector('#Email').value.trim()
    let ask = document.querySelector('.display')
    let myPicture = document.querySelector('#chatICONS')
    let chatICONS = document.querySelector('#question')
    myPicture.style.display = 'block'
    chatICONS.style.display = 'block'
    ask.style.display = "none"
    EmailIME.push({ Email: Email, Ime: Name, Komentar: inputforQuestion })
    xmlhttp.send(JSON.stringify(EmailIME))

}
const minimize = () => {
    let myPicture = document.querySelector('#chatICONS')
    let chats = document.querySelector('.displayBlock')
    chats.style.display = "none"
    myPicture.style.display = "block"
}

