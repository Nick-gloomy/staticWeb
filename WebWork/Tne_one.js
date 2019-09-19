
var name =new Array("123");

var word = new Array("123");



$(document).ready(function () {

    $("#To_2").on("click", function () {
        var v1 = $("#name_2").val();
        var v2 = $("#password_2").val();
        saveWord(name, v1, "name");
        saveWord(word, v2, "password");

        $("#name_2").val("");
        $("#password_2").val("");
        alert("注册完成");


    });
    $("#To_1").on("click", function () {

        var a1 = $("#name_1").val();
        var a2 = $("#password_1").val("");

        $("#name_1").val("");
        $("#password_1").val("");

        /*    ck(name,a1)!=1 & ck(word,a2)!=1 ?  alert("已完成") :  alert("账号错误")*/

        if (ck(name, a1) != 1 & ck(word, a2) != 1) {
            alert("已完成");
            $("#zhuti").show(1000);
        } else {
            alert("账号错误");
        }

    });








    $("#btn-start").on("click", function () {
        $("html, body").animate({scrollTop: $($(this).attr("href")).offset().top - 15 + "px"}, 300);
        return false;
    });




});




function on() {
    var myVideo = document.getElementById("video");
    var a = document.getElementById("Au");
    var on_one=document.getElementById("on");
    var b = document.getElementById("btn-start");

    if(!(a.paused)){
        a.pause();
        b.innerHTML="播放";
    }

    if(myVideo.paused){
        myVideo.play();
        on_one.innerHTML="暂停";
    }
    else {
        myVideo.pause();
        on_one.innerHTML="播放";
    }
}

function backTo(val) {
    var myVideo = document.getElementById("video");
    myVideo.currentTime+=val;
}


function isMuted() {
    var myVideo = document.getElementById("video");
    var isMuted = document.getElementById("isMuted");
    if(myVideo.muted){
        myVideo.muted = false;
        isMuted.innerHTML="静音";
    }
    else {
        myVideo.muted =true;
        isMuted.innerHTML="声音";
    }
}






function playAudio() {
    var a = document.getElementById("Au");
    var b = document.getElementById("btn-start");
    var myVideo = document.getElementById("video");
    var on_one=document.getElementById("on");




    if (a.paused){
      a.load();
      a.play();
        b.innerHTML="暂停";
        myVideo.pause();
        on_one.innerHTML="播放";
    }
    else {
        a.pause();
      b.innerHTML="播放";
    }
}





function saveWord(num,val,name) {


   var b =JSON.parse(num);
    sessionStorage.setItem( name,JSON.stringify(b+","+val));
    var a =JSON.parse( sessionStorage.getItem(name)).split(",");
    num = a;
    return num ;

}

function ck(num,val) {
    for (var a=0;a <= num.length;a++) {
        if( num[a] == val){
            return 1;
            break;

        }

    }
}