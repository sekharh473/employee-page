var parsedData= JSON.parse(localStorage.getItem("All_Emp_List"));


// for validation of form

// track input data
function nameDataInput(){
    nameInputbox=document.getElementById("name")
    nameInputbox.setAttribute("style","")
    
}
function mobDataInput(){
    ageInputbox=document.getElementById("mob")
    ageInputbox.setAttribute("style","")
   
}
function ageDataInput(){
    ageInputbox=document.getElementById("age")
    ageInputbox.setAttribute("style","")
   
}
function idDataInput(){
    idInputbox=document.getElementById("id")
    idInputbox.setAttribute("style","")
    

}


function validation(){
    namebox=document.getElementById("name")
    namebox.addEventListener("input",()=>{
        nameDataInput()
    })
    mobbox=document.getElementById("mob")
    mobbox.addEventListener("input",()=>{
        mobDataInput()
    })
    agebox=document.getElementById("age")
    agebox.addEventListener("input",()=>{
        ageDataInput()
    })

    idbox=document.getElementById("id")
    idbox.addEventListener("input",()=>{
        idDataInput()
    })
    

    Name=document.getElementById("name").value;
    MobNo=document.getElementById("mob").value;
    Age=document.getElementById("age").value;
    Id=document.getElementById("id").value;
    if(Name!=""&&MobNo!=="" && Age!="" && Id!=""){
        submitedEmpDetails();
    }
    else{
        if(Name==""){
          
            nameInputbox=document.getElementById("name")
            nameInputbox.setAttribute("style","border-color: red")
           
        }else{
            
        }

        if(MobNo==""){
            MobNoInputbox=document.getElementById("mob")
            MobNoInputbox.setAttribute("style","border-color: red")
            
        }else{

        }

        if(Age==""){
            ageInputbox=document.getElementById("age")
            ageInputbox.setAttribute("style","border-color: red")
            
        }else{

        }
        
        if(Id==""){
            idInputbox=document.getElementById("id")
            idInputbox.setAttribute("style","border-color: red")
            
        }else{

        }
       
    }
}



let submitedEmpDetails=()=>{
   
    let Emp={
    Name:document.getElementById("name").value,
    MobNo:document.getElementById("mob").value,
    Age:document.getElementById("age").value,
    Id:document.getElementById("id").value
    };
    if(parsedData){
        parsedData.push(Emp)
    }else{
        parsedData= [Emp]
    }

    localStorage.setItem("All_Emp_List",JSON.stringify(parsedData))

    

    reset();

    buildTable();
}

let reset=()=>{
   
    document.getElementById("name").value="",
    document.getElementById("mob").value="",
    document.getElementById("age").value="",
    document.getElementById("id").value=""
}

let buildTable=()=>{
    
    var table = document.getElementById("result")
    table.innerHTML= ""
    let parsed= JSON.parse(localStorage.getItem("All_Emp_List"));
    for(i=0;i<parsed.length;i++){
        var row =`<tr id="${i}" class="dataRows">
        <td class="text-center">${parsed[i].Name}</td>
        <td class="text-center">${parsed[i].MobNo}</td>
        <td class="text-center">${parsed[i].Age}</td>
        <td class="text-center">${parsed[i].Id}</td>
        <td class="text-center">
        <button class="btn btn-secondary" id="btnEdit" type="button" data-target="#addEmp" data-toggle="modal" onclick="edit(${i})"><i class="fa fa-pencil" aria-hidden="true"></i> <span class="editAndDlt" >Edit</span></button>
        <button class="btn btn-danger" id="removebtn"  type="button" onclick="deleteData(${i})"><i class="fa fa-trash"></i> <span  class="editAndDlt">Delete</span></button>
        </td>
        </tr>`
        table.innerHTML += row;
    }
     
}

// for initial check of emp list
if(parsedData){
    buildTable()
}else{

}

let deleteData=(index)=>{
    parsedData.splice(index,1);
   localStorage.setItem("All_Emp_List",JSON.stringify(parsedData));
    buildTable();
};
let edit=(index)=>{
   
    let u=document.getElementById("submit-btn");
    u.setAttribute("onclick","Update()");
    u.setAttribute("class","btn btn-primary")
   
    u.innerText="UPDATE";

   
        Name=document.getElementById("name").value=parsedData[index].Name
        MobNo=document.getElementById("mob").value=parsedData[index].MobNo
        Age=document.getElementById("age").value=parsedData[index].Age
        Id=document.getElementById("id").value=parsedData[index].Id

        
        i=index
        return i;
      
}

var Update=()=>{   
    console.log(i)
    parsedData.splice(i,1,
        {Name:document.getElementById("name").value,
        MobNo:document.getElementById("mob").value,
        Age:document.getElementById("age").value,
        Id:document.getElementById("id").value});
    localStorage.setItem("All_Emp_List",JSON.stringify(parsedData));
    buildTable();
    newExpAdd();
    reset()
    
}

var newExpAdd=()=>{
    let u=document.getElementById("submit-btn");
    u.setAttribute("onclick","validation()");
    u.setAttribute("class","btn btn-success")
    u.innerText="SUBMIT";
}
