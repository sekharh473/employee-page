var inputedData=JSON.parse(localStorage.getItem("inputedEmpsdata"));
console.log(inputedData)

var n =document.getElementById("nameInputId")
    var e =document.getElementById("emailInputId")
    n.setAttribute("value",inputedData.Name);
    e.setAttribute("value",inputedData.Email);