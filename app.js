let gameseq = [];
let userseq = [];
let started = false;
let level = 0;
let btns = ["purple", "yellow", "green", "red"]
let h2 = document.querySelector("h2");
let max=0;
let h3=document.createElement("h3");
h3.innerText=`Height Score is ${max}`; 
document.body.appendChild(h3);
//height scoure 
document.addEventListener("keypress", function () {
    if (started == false) {
        console.log("game is started ");
        started = true;
        levelUp();
    }

})
function btnFlash(btn) {
    btn.classList.add("flash");
    setTimeout(function () {
        btn.classList.remove("flash")
    }, 500);
}
function levelUp() {
    userseq = [];
    level++;
    h2.innerText = `Level ${level}`;

    //random color
    let randIndx = Math.floor(Math.random() * 3);
    let randColor = btns[randIndx];
    let randbtn = document.querySelector(`.${randColor}`);
    // console.log(randColor);
    // console.log(randbtn);
    // console.log(randIndx);

    gameseq.push(randColor);
    console.log(gameseq)
    btnFlash(randbtn);

}

function checklevel(indx) {
    // let indx=level-1;

    if (userseq[indx] === gameseq[indx]) {
        if (userseq.length === gameseq.length) {
            setTimeout(levelUp, 1000);

        }
    }
    else {
        
        h2.innerHTML = `Game Over ! Your score is <b>${level}</b> <br>Press any ans key to start.`;
        heightScore(level);

        document.body.style.backgroundColor = "red";
        setTimeout(function () {
            document.body.style.backgroundColor = "white";
        }, 500);


        reset();
    }
}
function btnpress() {
    let btn = this;
    // console.log("btn was pressed");
    console.log(btn);
    userclour = btn.getAttribute("id");
    userseq.push(userclour);
    console.log(userseq);
    // console.log(userclour);
    // btnFlash(btn);
    checklevel(userseq.length - 1);

}
function reset() {
    gameseq = [];
    userseq = [];
    started = false;
    level = 0;
}

function heightScore(level){
    if (max <level)
    {
        max=level;
        h3.innerText=`Height Score is ${max}`; 

    }

}
let allbtn = document.querySelectorAll(".btn");
for (btn of allbtn) {
    btn.addEventListener("click", btnpress)
}