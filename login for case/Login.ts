let Login = (document.getElementById('login') as HTMLButtonElement)
Login.addEventListener('click',()=>{
    let email=(document.getElementById('form2Example17') as HTMLInputElement).value;
    let pass = (document.getElementById('form2Example27') as HTMLInputElement).value;
    let data = JSON.parse(localStorage.getItem('data'))
    let boolean= false
    data.forEach((value,index)=>{
        if(value.email ==email&&value.pass==pass){
            window.location.href = "../views/index.html"
            boolean=true
        }else{
            boolean=false
        }
    })
    if(boolean===false){
        alert('something wrong, replace')
    }
})