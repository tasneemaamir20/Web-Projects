let mail=document.getElementById("mail");
let FullName=document.getElementById("FullName");
let pass=document.getElementById("pw");
let username=document.getElementById("Username");
let loginusername=document.getElementById("Loginusername");
let loginpass=document.getElementById("loginpw");

function store(e)
{
    e.preventDefault();
    if(mail.value.length==0)
    {
        alert("Please enter the mail");
    }
    else if(pass.value.length==0)
    {
        alert("Please enter the password");
    }
    else if(FullName.value.length==0)
    {
        alert("Please enter the full name");
    }
    else if(username.value.length==0)
    {
        alert("Please enter the password");
    }
    else
    {
        localStorage.setItem('username', username.value);
        localStorage.setItem('fullname', FullName.value);
        localStorage.setItem('mail', mail.value);
        localStorage.setItem('pw', pw.value);
        alert('Your account has been created');
        open("./insta.html");

    }
}
console.log(localStorage.getItem('username'));

function show()
{
    let user=localStorage.getItem('username');
    let password=localStorage.getItem('pw');
    console.log(password);
    console.log(user);
    if(user != loginusername.value)
    {
        alert("Please enter correct username");
    }
    else if(password != loginpass.value){
        alert("Please enter correct password");
    }
    else{
        alert("Login succecfull!!!n");
        open("./HomePage.html");
    }
}
