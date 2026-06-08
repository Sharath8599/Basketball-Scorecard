let homescoreEl=document.getElementById("home-score")

let guestscoreEl=document.getElementById("guest-score")

let homeScore=0
let guestScore=0


function increaseHomeScoreOne(){
    homeScore+=1
    homescoreEl.textContent=homeScore
}

function increaseHomeScoreTwo(){
    homeScore+=2
    homescoreEl.textContent=homeScore
}

function increaseHomeScoreThree(){
    homeScore+=3
    homescoreEl.textContent=homeScore
}

function increaseGuestScoreOne(){
    guestScore+=1
    guestscoreEl.textContent=guestScore
}

function increaseGuestScoreTwo(){
    guestScore+=2
    guestscoreEl.textContent=guestScore
}

function increaseGuestScoreThree(){
    guestScore+=3
    guestscoreEl.textContent=guestScore
}