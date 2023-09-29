let a=localStorage.getItem("inputedEmpsdata");
if(a){
    window.location.href="dashboardpage.html";
    
}

/**
 * https://colorhunt.co/palette/0c134f1d267d5c469cd4adfc
 * 
 */



var  registeredEmp=JSON.parse(localStorage.getItem("admins_List"));

console.log(registeredEmp)

const handleSubmit= ()=>{
    var emailgot=document.getElementById("email").value;
    if(!emailgot){
        var enteremail=document.getElementById("mail-necessary")
        enteremail.setAttribute("style","display:block;color:red")
        // alert("Please enter email.")
        return
    }else{
        if(!/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(emailgot)){
            document.getElementById("mail-necessary").innerHTML = "Invalid Email*";
        var invalidemail=document.getElementById("mail-necessary")
        invalidemail.setAttribute("style","display:block;color:red")
            // alert("Invalid Email")
            return
        }

    }

    var pwd=document.getElementById("password").value;
    if(!pwd){
        var enterpass=document.getElementById("pass-necessary")
        enterpass.setAttribute("style","display:block;color:red")
        // alert("Please enter password.")
        return
    }

    if(!registeredEmp || registeredEmp.length < 1){
        alert("Please register first")
        return
    }

    let findUser= registeredEmp.find(({Email})=>Email===emailgot);
    if(!findUser){
        var en=document.getElementById("mail-necessary")
        en.setAttribute("style","display:block;color:red")
        // alert("Email is not registered")
        return
    }

    if(findUser.Password !== pwd){
        document.getElementById("pass-necessary").innerHTML = "Wrong Password*";
        var wrongpass=document.getElementById("pass-necessary")
        wrongpass.setAttribute("style","display:block;color:red")
        // alert("Wrong Password")
        return
    }

    localStorage.setItem("inputedEmpsdata", JSON.stringify(findUser));

    window.location.href='dashboardpage.html'

}













// function evalidate(){
//     var emailgot=document.getElementById("email").value;
//     var emailshouldbe='[a-z0-9]+@[a-z]+\.[a-z]{2,3}'
//     if (emailgot.match(emailshouldbe)){
//         console.log("email true")
//         return true
//     }else{
//         document.getElementById("mail-necessary").innerHTML = "Invalid Email";
        
//         var egot=document.getElementById("mail-necessary")
//         egot.setAttribute("style","display:block;color:red")
//         return false
//     }
// }
// function pwvalidation(){
//     var pwgot=document.getElementById("password").value;
//     if(pwgot.length>8){
//         console.log("pw true")
//         return true;
//     }else{
//         console.log("pw false")
//         return false;
//     }
// }

// function properValid(){
//     if(evalidate()&&pwvalidation()){
//         validation()
//     }
// }

// const validation=()=> {
//     console.log("validating");

//     let mailbox=document.getElementById("email")
//     mailbox.addEventListener("input",()=>{
//         emailDataInput()
//     })

//     pwbox=document.getElementById("password")
//     pwbox.addEventListener("input",()=>{
//         passwordDataInput()
//     })


//     var eml=document.getElementById("email").value;
//     var pwd=document.getElementById("password").value;

//     for(let i=0;i<registeredEmp.length;i++){
//         var matchedEmp=registeredEmp[i]
       
//         if(matchedEmp.Email== eml){
//             console.log("EMAIL FOUND")

//         var e=document.getElementById("mail-necessary")
//         e.setAttribute("style","display:none")

//             if(matchedEmp.Password==pwd){
//                 loginCheck(matchedEmp)
//                 var p=document.getElementById("pass-necessary")
//                 p.setAttribute("style","display:none")
//             }else{
//                 invalidPassword()
//             }
//         }else{
//             invalidemail()
//             console.log("emailmatch not found")
//         }
//     }


// }

// function loginCheck(matchedEmp){
    

//     matchFound=true;

//     var inputedEmp={
//         Name:matchedEmp.Name,
//         Email:matchedEmp.Email,
//         Password:matchedEmp.Password
//     }

//     localStorage.setItem("inputedEmpsdata",JSON.stringify(inputedEmp))
     
//     afterVerify(matchFound)
   
// }
    


// function afterVerify(m){
//     if(m){
//         console.log("Email and password match found")
//         window.location.href='dashboardpage.html'
//     }
// }


// function invalidemail(){
//     var e=document.getElementById("mail-necessary")
//     e.setAttribute("style","display:block;color:red")
// }
// function invalidPassword(){
//     var p = document.getElementById("pass-necessary")
//     console.log(p);
//     p.setAttribute("style","display:block;color:red")
// }


// function emailDataInput(){
//     mailInputbox=document.getElementById("email")
//     mailInputbox.setAttribute("style","")
//     mailptag=document.getElementById("mail-necessary")
//     mailptag.setAttribute("style","display:none")
// }
    



