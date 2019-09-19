
var mun;
var star;
var stop;
var work=null;

window.onload=function ( ) {
    mun = document.getElementById("mun");
    star = document.getElementById("star");
    stop = document.getElementById("stop");
    star.onclick =starWorking();
    stop.onclick = stopWorking ();

}

function starWorking () {
// if (work){
//     return;
// }

    work = new Worker("webWork2.js");
    work.onmessage = function (e) {
        mun.innerHTML = e.data;
    }
}

function stopWorking() {

if (work){

    work.terminate();/*消除内存*/
    work = null;
}else {return}


}