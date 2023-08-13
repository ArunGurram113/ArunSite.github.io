

function imgpath(){
  

    var input = document.getElementById("input");
    var image = document.getElementById("img");

    let path = input.value;
    let pName = path.replace(/^.*\\/, "");

    image.setAttribute("src", pName);

    alert(pName);
    alert(path);



}


function img(){

   // alert()
    var val = document.getElementById("img");

    let name = val.getAttribute("src");

    alert(name);

}