
var div01,show;

window.onload=function () {
     div01=document.getElementById("div01");
      show=document.getElementById("show")


    div01.ondragover=function (e) {
        e.preventDefault();
    }


     div01.ondrop=function (e) {
         e.preventDefault();
         showobj(e);
         var f = e.dataTransfer.files[0];
         var fileReader=new FileReader();
         fileReader.onload=function (e) {
             div01.innerHTML="<img src=\""+fileReader.result+"\">"
         }
         fileReader.readAsDataURL(f);
     }

}

function showobj(obj) {

    var s ="";
    for (var k in obj){
        s +=k+";"+obj[k]+"<br/>";

    }
    show.innerHTML=s;

}