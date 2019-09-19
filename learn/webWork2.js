

var daa =0;

function theCounting() {
    postMessage(daa); /*返回值*/
    daa++;
    setTimeout(theCounting, 1000);

}

theCounting();

