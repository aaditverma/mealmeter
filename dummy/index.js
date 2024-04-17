var o1=0,o2=0,o3=0;
document.getElementById("s1").addEventListener("mouseover",opens);
document.getElementById("s").addEventListener("mouseout",closes);

function open1(){
    if(o3==1){
        open3();
    }
    
    if(o2==1){
        open2();
    }
    if (o1==0) {
        document.getElementById("s").style.height="40px";
        document.getElementById("s").style.width="100%"
        document.getElementById("s").style.border="1px";
        o1 = 1;
    } else {
        document.getElementById("s").style.height="0px";
        document.getElementById("s").style.border="0px";
        o1 = 0;
    }
}

function opens(){
    document.getElementById("s").style.height="40px";
    document.getElementById("s").style.width="100%"
    document.getElementById("s").style.border="1px";
}

function closes(){
    document.getElementById("s").style.height="0px";
    document.getElementById("s").style.border="0px";
}

function open2(){
    if(o1==1){
        open1();
    }
    
    if(o3==1){
        open3();
    }
    if (o2==0) {
        document.getElementById("m").style.height="40px";
        document.getElementById("m").style.width="100%"
        document.getElementById("m").style.border="1px";
        o2 = 1;
    } else {
        document.getElementById("m").style.height="0px";
        document.getElementById("m").style.border="0px";
        o2 = 0;
    }
}

function open3(){
    if(o1==1){
        open1();
    }
    
    if(o2==1){
        open2();
    }
    if (o3==0) {
        document.getElementById("w").style.height="40px";
        document.getElementById("w").style.width="100%"
        document.getElementById("w").style.border="1px";
        o3 = 1;
    } else {
        document.getElementById("w").style.height="0px";
        document.getElementById("w").style.border="0px";
        o3 = 0;
    }

}
