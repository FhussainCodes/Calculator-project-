let currdisplay = "";

let finalval = document.querySelector(".final");
finalval.onclick = ()=>{
    let result = eval(currdisplay);
    currdisplay = result;
    document.querySelector(".search").value= currdisplay;  
}

// let button = document.querySelector('.nums');

// button.onclick = ()=>{
//     currdisplay = currdisplay + button.innerText;
//     document.querySelector(".search").value= currdisplay;  
// }


