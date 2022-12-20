
// js-more-info
const allButtons = document.querySelectorAll(".js-more-info");
const flexcon = document.querySelector(".flexcon");
const ondergrond = document.querySelector(".ondergrond");
const slide = document.querySelector(".slide");
const box = document.querySelector(".box");
const close = document.querySelector(".close-button");
const overviewBtn = document.querySelector(".js-up");
const overview = document.querySelector(".overview");
const searchBtn = document.querySelector(".js-search");
const search = document.querySelector(".search");   
const gradient = document.querySelector(".gradient");
const flexScroll = document.querySelector("#flex-scroll")
const inlog = document.querySelector(".inlog");

// allButtons.forEach((button) => {
    //     button.addEventListener('click', () => {
        //         flecxon.classList.toggle("active")
        
        //     })
// })

function slideActive() {
    ondergrond.classList.toggle("active")
    flexcon.classList.toggle("active")
    flexScroll.classList.toggle("active")
    slide.classList.toggle("active")  
    box.classList.toggle("active")
    gradient.classList.toggle("active")
}

overviewBtn.addEventListener('click', () => {
    overview.classList.toggle("active")
})

searchBtn.addEventListener('click', () => {
    search.classList.toggle("active")
})

// Functie voor de locate knop
function closeSlide() {
    if (ondergrond.classList.contains("active")) {
        ondergrond.classList.toggle("active")
        flexcon.classList.toggle("active")
        slide.classList.toggle("active")  
        box.classList.toggle("active")
        gradient.classList.toggle("active")
    }
}

function acceptLogin() {
    inlog.classList.toggle("active")
}

var attempt = 3;

function validate() {
    var username = document.getElementById("username").value;
    var password = document.getElementById("password").value;
    
    if (username == "admin" && password == "admin") {
        acceptLogin();
        return false;
    }
    
    if (username == "Milan" && password == "worst") {
        acceptLogin();
        return false;
    }
    
    if (username == "Thomas" && password == "kaas") {
        acceptLogin();
        return false;
    }
    
    if (username == "Iskandar" && password == "CTC") {
        acceptLogin();
        return false;
    }
    
    else {
        attempt --;
        alert("You have left "+attempt+" attempts");
        
        if(attempt == 0) {
            document.getElementById("username").disabled = true;
            document.getElementById("password").disabled = true;
            document.getElementById("submit").disabled = true;
            return false;
        }
    }
}
const reserveButton = document.querySelectorAll(".reserve-button");
const reserveTab = document.querySelector(".reserve-menu");
const infoBox = document.querySelector(".desktop-info-box");



    function toggleReserveMenu() {
        reserveTab.classList.toggle("active")
        // infoBox.classList.toggle("close")
        // goBack()
    }



