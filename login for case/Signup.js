var User = /** @class */ (function () {
    function User(email, pass) {
        this.email = email;
        this.pass = pass;
    }
    return User;
}());
function Check(id) {
    for (var i = 0; i < users.length; i++) {
        if (id == users[i].email) {
            return true;
        }
    }
    return false;
}
var users = [];
var signUp = document.getElementById('signup');
signUp.addEventListener('click', function () {
    var email = document.getElementById('form2Example17').value;
    var password = document.getElementById('form2Example27').value;
    var password1 = document.getElementById('form2Example37').value;
    if (Check(email)) {
        alert('This email has been used');
        window.location.href = 'signup.html';
    }
    else {
        if (password != password1) {
            alert('password is not match');
            window.location.href = 'signup.html';
        }
        else if (email === '' || password === '' || password1 === '') {
            alert('please fill information');
            window.location.href = 'signup.html';
        }
        else {
            users.push(new User(email, password));
            localStorage.setItem('data', JSON.stringify(users));
            alert('Sign Up Success');
            window.location.href = 'login.html';
        }
    }
});
