let timer = document.getElementById("time-element");
let [btn1, btn2] = document.getElementsByTagName("button");
let b1 = document.getElementById("b1"), b2 = document.getElementById("b2"), b3 = document.getElementById("b3");
let counter=1;
let _10miliSeconds = 0,box3=0,box2=0,box1=0;
let timerId;

function startTimer(){
    timerId = setInterval(function(){
        box1=_10miliSeconds;
        if(box1>99){
            box2+=1;
            box1=0
            _10miliSeconds=0;
        }
        if(box2>59){
            box3+=1;
            box2=0;
            box1=0;
            _10miliSeconds=0;
        }
        if(box3>59){
            box3=0;
            box2=0;
            box1=0;
            _10miliSeconds=0;
        }
        _10miliSeconds++;
        if(box1<10) box1="0"+box1;
        if(box2<10) box2="0"+box2;
        if(box3<10) box3="0"+box3;
        b3.innerHTML=box3;
        b2.innerHTML=box2;
        b1.innerHTML=box1;
        box2=box2-1+1;
        box3=box3-1+1;
    },10);
    btn1.removeEventListener("click",resetApp);
    btn1.addEventListener("click",addLap);
    btn1.innerHTML="Lap"
    btn2.removeEventListener("click",startTimer);
    btn2.innerHTML="Stop";
    btn2.addEventListener("click",stopTimer);
}

function stopTimer(){
    clearTimeout(timerId);
    btn2.removeEventListener("click",stopTimer);
    btn2.innerHTML="Resume";
    btn2.addEventListener("click",startTimer);
    btn1.removeEventListener("click",addLap);
    btn1.innerHTML="Reset";
    btn1.addEventListener("click",resetApp);
}

function resetApp(){
    history.go(0);
}
function addLap(){
    console.log("Hello I am Here");
    let x=document.createElement("div");
    let y=document.createElement("div");
    let z=document.createElement("div");
    let line = document.createElement("hr");
    x.innerHTML="Lap "+counter;
    y.innerHTML=box3+" : "+box2+" : "+box1;
    z.appendChild(x);
    z.appendChild(y);
    z.setAttribute("class", "lap");
    let lapsArea = document.getElementById("lapArea");
    lapsArea.appendChild(z);
    lapsArea.appendChild(line);
    counter++;
}
btn2.addEventListener("click",startTimer);