var Login = document.getElementById('login');
Login.addEventListener('click', function () {
    var email = document.getElementById('form2Example17').value;
    var pass = document.getElementById('form2Example27').value;
    var data = JSON.parse(localStorage.getItem('data'));
    var boolean = false;
    data.forEach(function (value, index) {
        if (value.email == email && value.pass == pass) {
            window.location.href = "../views/index.html";
            boolean = true;
        }
        else {
            boolean = false;
        }
    });
    if (boolean === false) {
        var html = "<p>Wrong email or password!!!</p>";
        document.getElementById('wrong-pass').innerHTML = html;
    }
});
