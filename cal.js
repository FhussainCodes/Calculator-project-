let currdisplay = "";

let finalval = document.querySelector(".final");
finalval.onclick = () => {
    let result = eval(currdisplay);
    currdisplay = result;
    document.querySelector(".search").value = currdisplay;
}




