class User {
    user_id = ""
    username = " ";
    email = " ";
    password = " ";
    api_url = "https://62b1cc7ac7e53744afc16f70.mockapi.io"
    create() {
        let data = {
            username: this.username,
            email: this.email,
            password: this.password,


        }
        data = JSON.stringify(data)
        fetch(this.api_url +'/users', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: data
        }) 
            .then(response => response.json())
            .then(data => {
                window.location.href = "hexa.html"
                
            })
    }
   
}

