function myfun(){
    let Username=document.getElementById('username').value
    let Password = document.getElementById('password').value
    if(Username=="happy" && Password=="morehappy"){
        window.location=""
    }
    else{
        document.getElementById('para').innerHTML="wrong Username or password"
    }
}