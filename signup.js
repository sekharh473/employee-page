let parsedData= JSON.parse(localStorage.getItem("admins_List"));

console.log(parsedData)

const handleRegister=()=>{
    var namegot=document.getElementById("name").value;
    if(!namegot){
        var entername=document.getElementById("name-necessary")
        entername.setAttribute("style","display:block;color:red")
        return
    }else{
        if(namegot.length<5){
            document.getElementById("name-necessary").innerHTML='Must be more than 5 letters*'
            var nameTooSort=document.getElementById("name-necessary")
            nameTooSort.setAttribute("style","display:block;color:red")
        return
        }else{
            var nameTooSort=document.getElementById("name-necessary")
            nameTooSort.setAttribute("style","display:none;color:red")
        }
    }

    var emailgot=document.getElementById("email").value;
    if(!emailgot){
        var enteremail=document.getElementById("email-necessary")
        enteremail.setAttribute("style","display:block;color:red")
        // alert("Please enter email.")
        return
    }else{
        if(!/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(emailgot)){
            document.getElementById("email-necessary").innerHTML = "Invalid Email Id*";
        var invalidemail=document.getElementById("email-necessary")
        invalidemail.setAttribute("style","display:block;color:red")
            // alert("Invalid Email")
            return
        }else{
            var invalidemail=document.getElementById("email-necessary")
        invalidemail.setAttribute("style","display:none;color:red")
        }

    }

    var pwd=document.getElementById("password").value;
    if(!pwd){
        var enterpass=document.getElementById("password-necessary")
        enterpass.setAttribute("style","display:block;color:red")
        // alert("Please enter password.")
        return
    }else{
        if(pwd.length<8){
            document.getElementById("password-necessary").innerHTML = "PassWord Must be more than 8 Letters*";
            var invalidpass=document.getElementById("password-necessary")
            invalidpass.setAttribute("style","display:block;color:red")
        }else{
            var invalidpass=document.getElementById("password-necessary")
            invalidpass.setAttribute("style","display:none;color:red")
        }
    }

    var cpwd=document.getElementById("cpassword").value;
    if(!cpwd){
        var enterpass=document.getElementById("cpassword-necessary")
        enterpass.setAttribute("style","display:block;color:red")
    }else{if(cpwd!==pwd){
        document.getElementById("cpassword-necessary").innerHTML = "PassWord Must be same as Given Before*";
        var invalidpass=document.getElementById("cpassword-necessary")
        invalidpass.setAttribute("style","display:block;color:red")
    }else{
        var invalidpass=document.getElementById("cpassword-necessary")
        invalidpass.setAttribute("style","display:none;color:red")
    }
}

}



// trackdata input data
function nameDataInput(){
    nameInputbox=document.getElementById("name")
    nameInputbox.setAttribute("style","")
    nameptag=document.getElementById("name-necessary")
    nameptag.setAttribute("style","display:none")
}
function emailDataInput(){
    mailInputbox=document.getElementById("email")
    mailInputbox.setAttribute("style","")
    mailptag=document.getElementById("email-necessary")
    mailptag.setAttribute("style","display:none")
}

function passwordDataInput(){
    pwInputbox=document.getElementById("password")
    pwInputbox.setAttribute("style","")
    pwptag=document.getElementById("password-necessary")
    pwptag.setAttribute("style","display:none")

}
function cpasswordDataInput(){
    cpwInputbox=document.getElementById("cpassword")
    cpwInputbox.setAttribute("style","")
    cpwptag=document.getElementById("cpassword-necessary")
    cpwptag.setAttribute("style","display:none")

}


    
function validation(){
    namebox=document.getElementById("name")
    namebox.addEventListener("input",()=>{
        nameDataInput()
    })

    mailbox=document.getElementById("email")
    mailbox.addEventListener("input",()=>{
        emailDataInput()
    })

    pwbox=document.getElementById("password")
    pwbox.addEventListener("input",()=>{
        passwordDataInput()
    })

    cpwbox=document.getElementById("cpassword")
    cpwbox.addEventListener("input",()=>{
        cpasswordDataInput()
    })
    

    Name=document.getElementById("name").value;
    Email=document.getElementById("email").value;
    Pw=document.getElementById("password").value;
    Cpw=document.getElementById("cpassword").value;
    if(Name!="" && namevalidate() && Email!="" && emailValidate() && Pw!=""&& pwvalidation() && Cpw==Pw){
        register()
    }
    else{
        if(Name==""){
          
            nameInputbox=document.getElementById("name")
            nameInputbox.setAttribute("style","border-color: red")
            nameptag=document.getElementById("name-necessary")
            nameptag.setAttribute("style","display:block;color:red")
        }else{
            
        }
        if(Email=="" ){
            mailInputbox=document.getElementById("email")
            mailInputbox.setAttribute("style","border-color: red")
            mailptag=document.getElementById("email-necessary")
            mailptag.setAttribute("style","display:block;color:red")
        }else {

        }

        
        if(Pw=="" ){
            pwInputbox=document.getElementById("password")
            pwInputbox.setAttribute("style","border-color: red")
            pwptag=document.getElementById("password-necessary")
            pwptag.setAttribute("style","display:block;color:red")
        }else{

        }
        if(Cpw=="" ){
            cpwInputbox=document.getElementById("cpassword")
            cpwInputbox.setAttribute("style","border-color: red")
            cpwptag=document.getElementById("cpassword-necessary")
            cpwptag.setAttribute("style","display:block;color:red")
        }else{
            
        }
       
    }
}


let register=()=>{
    let admins={
        Name:document.getElementById("name").value,
        Email:document.getElementById("email").value,
        Password:document.getElementById("password").value
    }
    if(parsedData){
        parsedData.push(admins)
    }else{
        parsedData= [admins]
    }

    localStorage.setItem("admins_List",JSON.stringify(parsedData))

        reset();

}

var reset=()=>{
    document.getElementById("name").value="";
    document.getElementById("email").value="";
    document.getElementById("password").value="";
    document.getElementById("cpassword").value="";
}



//all validations
var namevalidate=()=>{
    var namegot=document.getElementById("name").value;
    if(namegot.length>5){
        console.log("name true")
        return true
    }else{
        console.log("name false")
        return false
    }
}


var emailValidate=()=>{
    var emailgot=document.getElementById("email").value;
    var emailshouldbe='[a-z0-9]+@[a-z]+\.[a-z]{2,3}'
    if (emailgot.match(emailshouldbe)){
        console.log("email true")
        return true
    }else{
        console.log("email false")
        return false
    }
}

var pwvalidation =()=>{
    var pwgot=document.getElementById("password").value;
    if(pwgot.length>8){
        console.log("pw true")
        return true;
    }else{
        console.log("pw false")
        return false;
    }
}
