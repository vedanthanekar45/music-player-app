let loveislong = document.querySelector("#love");
let hymn = document.querySelector("#hymn");
let wish = document.querySelector("#wish");
let highway = document.querySelector("#highway");
let way = document.querySelector("#way");
let paradise = document.querySelector("#paradise");
let scientist = document.querySelector("#scientist");
let count = 0;
const block = document.querySelector(".song-card");

loveislong.addEventListener("click", function() {
    document.querySelector('body').style.backgroundImage = "url('./background/loveisalongroad.jpg')";
    document.querySelector('.available').style.color = "black";
    let love = new Audio("./music/loveisalongroad.mp3");
    if(love.paused) {
        love.play();
    }
    else {
        love.pause();
    }
})

hymn.addEventListener("click", function() {
    document.querySelector('body').style.backgroundImage = "url('./background/hymnfortheweekend.jpg')";
    document.querySelector('.available').style.color = "black";
    let hymnweek = new Audio("./music/hymnforteweekend.mp3");
    if(hymnweek.paused) {
        hymnweek.play();
    }
    else {
        hymnweek.pause();
    }
})

wish.addEventListener("click", function() {
    document.querySelector('body').style.backgroundImage = "url('./background/wishyouwerehere.jpg')";
    document.querySelector('.available').style.color = "black";
    let a = new Audio("./music/wishyouwerehere.mp3");
    if(a.paused) {
        a.play();
    }
    else {
        a.pause();
    }
})

highway.addEventListener("click", function() {
    document.querySelector('body').style.backgroundImage = "url('./background/highwaytohell.jpg')";
    document.querySelector('.available').style.color = "white";
    let h = new Audio("./music/highwaytohell.mp3");
    if(h.paused) {
        h.play();
    }
    else {
        h.pause();
    }
})

paradise.addEventListener("click", function() {
    document.querySelector('body').style.backgroundImage = "url('./background/paradise.jpg')";
    document.querySelector('.available').style.color = "black";
    let h = new Audio("./music/paradise.mp3");
    if(h.paused) {
        h.play();
    }
    else {
        h.pause();
    }
})

way.addEventListener("click", function() {
    document.querySelector('body').style.backgroundImage = "url('./background/iwantitthatway.jpg')";
    document.querySelector('.available').style.color = "black";
    let h = new Audio("./music/iwantitthatway.mp3");
    if (count==0) {
        h.play();
        count = 1;
    }
    else if (count==1) {
        h.pause();
        count = 0;
    }
})

scientist.addEventListener("click", function() {
    document.querySelector('body').style.backgroundImage = "url('./background/thescientist.jpg')";
    document.querySelector('.available').style.color = "black";
    let h = new Audio("./music/thescientist.mp3");
    if(h.paused) {
        h.play();
    }
    else {
        h.pause();
    }
})

block.addEventListener("click", () => {
    
}