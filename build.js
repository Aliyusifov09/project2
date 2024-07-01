let projects = document.getElementById("p1");
let clients = document.getElementById("p2");
let tasks = document.getElementById("p3");
let cups = document.getElementById("p4");
let pros = document.getElementById("p5");

let grow = null;

let start = setInterval(() => {
    grow = setInterval(()=> {
        projects.innerHTML = num1;
        clients.innerHTML = num2;
        tasks.innerHTML = num3;
        cups.innerHTML = num4;
        pros.innerHTML = num5;
        num1++;
        num2++;
        num3++;
        num4++;
        num5++;
        if(num1 >= 168 ) {
            clearInterval(grow);
        }
    },20)
let num1 = 0;
let num2 = 155;
let num3= 446;
let num4 = 1667;
let num5 = 2570;
},8000)
