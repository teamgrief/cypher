const attacking = document.getElementById("attacking")
const defending = document.getElementById("defending")
let attack = true
let defend = false
attacking.addEventListener('click', e => {
    attack = true
    defend = false
    attacking.style.color = 'midnightblue'
    defending.style.color = 'black'
})

defending.addEventListener('click', e => {
    defend = true
    attack = false
    defending.style.color = 'midnightblue'
    attacking.style.color = 'black'
})

const cSite = document.getElementById("cSite")
const bSite = document.getElementById("bSite")
const aSite = document.getElementById("aSite")

const mid = document.getElementById("mid")
const aLong = document.getElementById("aLong")
const garage = document.getElementById("garage")
const cLong = document.getElementById("cLong")

cSite.addEventListener('click', e => {
    if (attack === true && defend === false) {
        window.location.href
    } else {
        window.location.href
    }
})

bSite.addEventListener('click', e => {
    if (attack === true && defend === false) {
        window.location.href
    } else {
        window.location.href
    }
})

aSite.addEventListener('click', e => {
    if (attack === true && defend === false) {
        window.location.href = '#aAttacking'
    } else {
        window.location.href = '#aDefending'
    }
})

mid.addEventListener('click', e => {
    if (attack === true && defend === false) {
        window.location.href
    } else {
        window.location.href
    }
})

aLong.addEventListener('click', e => {
    if (attack === true && defend === false) {
        window.location.href
    } else {
        window.location.href
    }
})

garage.addEventListener('click', e => {
    if (attack === true && defend === false) {
        window.location.href
    } else {
        window.location.href
    } 
})

cLong.addEventListener('click', e => {
    if (attack === true && defend === false) {
        window.location.href
    } else {
        window.location.href
    }
})
