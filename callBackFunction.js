function callBack(name, task){
    console.log('Hello',name);
    task();
}
function triangleArea(){
    var a = 5;
    var b = 7;
    var triangleArea = 0.5 *a*b;
    console.log('Yours result is - ',triangleArea); 
}

function circleArea(){
    var pi =3.1416;
    var r = 4;
    var circleArea = pi * r * r;
    console.log('Yours result is - ',circleArea);
}

callBack('john',triangleArea);
callBack('wick',circleArea);