let sidebar = document.getElementById("sidebar_menu");
  let mainPage = document.getElementById("main-page");
let checked = () => {
  let checkbox = document.getElementById("sidebar_checkbox").checked;
  

  if (checkbox) {
    sidebar.style = "transform: translateX(-100%);";
    
    console.log("not");
  } else {
    sidebar.style =
    "transform: translateX(0%);border: 2px solid black; height: 100vh;";
    console.log("yes");
  }
};

let openSidebar = () => {
  let screenWidth = window.innerWidth;
  if (screenWidth > 710) {
    console.log("hdhdh");
    document.getElementById("sidebar_checkbox").checked = true;
    sidebar.style =
      "transform: translateX(0%);border: 2px solid black; height: 100vh;background-color:rgb(0, 0, 0);";
  }
  if(screenWidth < 711){
    document.getElementById("sidebar_checkbox").checked = false;
    sidebar.style = "transform: translateX(-100%);";
  }
};

window.addEventListener("resize",openSidebar);


// window.addEventListener('resize', openSidebar);
// function openSidebar() {
//     var screenWidth = window.innerWidth ;
//     if (screenWidth > 710) {
//         document.getElementById("sidebar_checkbox").checked = true;
//         sidebar.style="transform: translateX(0%);border: 2px solid black; height: 100vh;"

//       console.log("Opening sidebar...");
//     }
//   }

// if(window.matchMedia("(min-width: 710px)").matches){
//     document.getElementById("sidebar_checkbox").checked = true;
//     sidebar.style="transform: translateX(0%);border: 2px solid black; height: 100vh;"
// }

// if(window.matchMedia("(min-width: 710px)").matches){
//     console.log("checking")
//     let sidebar=document.getElementById("sidebar_checkbox").checked = true;
//     sidebar.style="transform: translateX(0%);border: 2px solid black; height: 100vh;"
// }
