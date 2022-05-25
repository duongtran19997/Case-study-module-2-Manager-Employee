class User {
    email: string;
    pass: string;

    constructor(email: string, pass: string) {
        this.email = email;
        this.pass = pass;
    }
}

function Check(id) {
    for (let i = 0; i < users.length; i++) {
        if (id == users[i].email) {
            return true
        }
    }
    return false
}


let users: User[] = []
let signUp = document.getElementById('signup') as HTMLButtonElement
signUp.addEventListener('click', () => {
    let email = (document.getElementById('form2Example17') as HTMLInputElement).value;
    let password = (document.getElementById('form2Example27') as HTMLInputElement).value;
    let password1 = (document.getElementById('form2Example37') as HTMLInputElement).value;
    if (Check(email)) {
        alert('This email has been used')
        window.location.href = 'signup.html'
    } else {
        if (password != password1) {
            alert('password is not match')
            window.location.href = 'signup.html'
        } else if (email === '' || password === '' || password1 === '') {
            alert('please fill information')
            window.location.href = 'signup.html'
        } else {
            users.push(new User(email, password))
            localStorage.setItem('data', JSON.stringify(users))
            alert('Sign Up Success')
            window.location.href = 'login.html'
        }
    }

})