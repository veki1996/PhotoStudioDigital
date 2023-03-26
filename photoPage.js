/*
function validate() {
    let inputs = document.querySelectorAll('#RegistrationForm input')

    for (let input of inputs) {
        inputValue = input.value
        intputName = input.getAttribute("name")
        switch (intputName) {
            case 'register_email':
                if (!validateEmail(inputValue)) {
                    document.querySelector('#ul2').innerHTML = "<li>neispravna Email adresa</li>"
                } else {
                    document.querySelector('#ul2').innerHTML = ""
                }
                break;
            case 'ponovi_lozinku':
                let lozinka = document.querySelector('input[name="register_lozinka"]').value
                if (inputValue !== lozinka || inputValue.length < 4) {
                    document.querySelector('#ul4').innerHTML = "<li>Lozinke se ne poklapaju lozinka mora biti duza od 4 karaktera</li>"
                } else {
                    document.querySelector('#ul4').innerHTML = ""
                }
                break;
            case 'korisnicko_ime':
                if (inputValue.length < 5) {
                    document.querySelector('#ul1').innerHTML = "<li> Ime mora biti duze od 4 slova</li>"
                } else {
                    document.querySelector('#ul1').innerHTML = ""
                }
        }

    }
}
const validationEmails = (email) => {
    return email.match(
        /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
    );
};

document.querySelector('#RegistrationForm').addEventListener('submit', e => {
    e.preventDefault()
    validate();
    let user = new User()
    user.username = document.querySelector('#korisnicko_ime').value;
    user.email = document.querySelector('#email').value;
    user.password = document.querySelector('#lozinka').value;
    user.create()
})



document.querySelector('#LoginForm').addEventListener('submit', e => {
    e.preventDefault()
    let email = document.querySelector('#login_email').value
    let password = document.querySelector('#login_lozinka').value

    xmlhttp = new XMLHttpRequest();
    xmlhttp.open("GET", "https://62b1cc7ac7e53744afc16f70.mockapi.io/users", true);
    xmlhttp.setRequestHeader('Content-Type', 'application/json');
    xmlhttp.onreadystatechange = function () {
        if (this.readyState == 4) {
            let login = 0
            let osoba1 = JSON.parse(this.responseText);
            for (let el of osoba1) {
                if (el.email == email && el.password == password) {
                    login = 1
                    window.location.href = 'hexa.html'
                    ySelector("#ime").innerText = "veki"

                } if (login == 0) {
                    alert('pogresan email ili lozinka')
                }

            }
        }
    }
        ;
    xmlhttp.send()

})


let loginEvent = document.querySelector("#loginEvent").addEventListener('click', () => {
    document.querySelector('#login-modal').style.display = "block"
    document.querySelector(".closeMENU").style.display = "none"
})
*/

let closeModal = document.querySelector('#closeModal').addEventListener('click', () => {
    document.querySelector('#login-modal').style.display = "none"
    document.querySelector(".closeMENU").style.display = "block"
})
document.querySelector('#NemasNalog').addEventListener("click", (e) => {
    e.preventDefault()
    document.querySelector('.custom-modal').style.display = "block"
})
document.querySelector('#closeModalReg').addEventListener('click', () => {
    document.querySelector('.custom-modal').style.display = "none"
})

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
    document.querySelector('.custom-modal').style.display = 'none'
    document.querySelector('#login-modal').style.display = 'none'
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
    chatICONS.style.display = 'none'
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

galerija=()=>{
    window.location.href = "gallery.html"
}