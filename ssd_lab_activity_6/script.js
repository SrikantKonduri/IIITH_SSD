
let username_element = document.getElementById('username');
let pwd_element = document.getElementById('password');
let confirmpwd_element = document.getElementById('cpassword');
let submitbtn_element = document.getElementById('submitbtn');
let email_element = document.getElementById('email');

function validateFormData(){
    pwd = pwd_element.value;
    gmail = document.getElementById('email').value;
    mname = document.getElementById('mname').value;
    cpwd = confirmpwd_element.value;
    uname = username_element.value;
    teamlead = document.getElementById('teamlead').value;
    if(pwd === cpwd){
        const mymembers = document.getElementById('content2').childNodes;
        let members= "";
        for(const itr of mymembers){
            members += itr.innerText + ", ";
        }
        alert('Manager: ' + mname + '\nGroup Mail: ' + gmail + '\n Username: ' + uname + '\n Team Lead: ' + teamlead + '\n Team members: ' + members);
    }
    // email = email_element.value;
    // if(pwd === cpwd && uname)
}


function checkPWD(pwd,cpwd){
    return pwd === cpwd
}

confirmpwd_element.addEventListener("blur",(event) => {
    let pwd = pwd_element.value;
    let cpwd = confirmpwd_element.value;
    console.log('In');
    if(checkPWD(pwd,cpwd)){
        document.getElementById('pwdhandle').innerHTML = "";
    }
    else{
        document.getElementById('pwdhandle').innerHTML = "Passwords do not match";
    }
})

username_element.addEventListener("input",(event) => {
    event.preventDefault();   
    if(!event.target.checkValidity()){        
        document.getElementById('usernamehandle').innerHTML = "Invalid";
    }
    else{
        document.getElementById('usernamehandle').innerHTML = "";
    }
    
})


function dragStart(event) {
    event.dataTransfer.setData("Text", event.target.id);
  }
  function allowDrop(event) {
    event.preventDefault();
  }
  function drop(event) {
    event.preventDefault();
    var data = event.dataTransfer.getData("Text");
    event.target.appendChild(document.getElementById(data));
    // document.getElementById("demo").innerHTML = "The p element was dropped";
  }


// submitbtn_element.addEventListener("click",() => {
//     alert('Submitted')
// })

