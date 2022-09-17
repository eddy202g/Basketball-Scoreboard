let homeTotal = document.getElementById("home-points-text")
let guestTotal = document.getElementById("guest-points-text")
let homeCount = 0
let guestCount = 0

function addOnePoint() {
    homeCount += 1
    console.log("Button Clicked")
    homeTotal.textContent = homeCount
}

function addTwoPoint() {
    homeCount += 2
    console.log("Button Clicked")
    homeTotal.textContent = homeCount
}

function addThreePoint() {
    homeCount += 3
    console.log("Button Clicked")
    homeTotal.textContent = homeCount
}

function addOnePointGuest() {
    guestCount += 1
    console.log("Button Clicked")
    guestTotal.textContent = guestCount
}

function addTwoPointGuest() {
    guestCount += 2
    console.log("Button Clicked")
    guestTotal.textContent = guestCount
}

function addThreePointGuest() {
    guestCount += 3
    console.log("Button Clicked")
    guestTotal.textContent = guestCount
}

function resetGame() {
    homeCount = 0
    guestCount = 0

    homeTotal.textContent = homeCount
    guestTotal.textContent = guestCount
}