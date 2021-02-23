//Map Button Things Yep
const haven = document.getElementById("haven")
const ascent = document.getElementById("ascent")
const icebox = document.getElementById("icebox")
const split = document.getElementById("split")
const bind = document.getElementById("bind")

//Utility Buttons Yep
const desc = document.getElementById("desc")
const cam = document.getElementById("cam")
const wire = document.getElementById("wire")
const cage = document.getElementById("cage")

cam.addEventListener('click', e => {
    desc.innerText = "Cypher's camera is key to his mastery of information gathering. When watching from his camera, Cypher is granted a full view of wherever his camera was placed. A good camera spot is one that has a balance between information and sneakiness."
    cam.style.border = "5px solid midnightblue"
    cam.style.borderRadius = "8px"
    cage.style.border = ""
    cage.style.borderRadius = ""
    wire.style.border = ""
    wire.style.borderRadius = ""
})
wire.addEventListener('click', e => {
    desc.innerText = "Cypher's wires help Cypher find his victims. Whether to watch flanks, or to hold areas, Cypher's trapwires are the perfect tool for the job. Typically the best wires are at crouching head level."
    wire.style.border = "5px solid midnightblue"
    wire.style.borderRadius = "8px"
    cam.style.border = ""
    cam.style.borderRadius = ""
    cage.style.border = ""
    cage.style.borderRadius = ""
})
cage.addEventListener('click', e => {
    desc.innerText = "Cypher's cages are an essential tool to ensure that Cypher stays hidden and unseen. However, these cages have another purpose: enterance detection, when an enemy walks in, the cage emits a sound. One of the best uses for cyber cages, are: 'One ways'."
    cage.style.border = "5px solid midnightblue"
    cage.style.borderRadius = "8px"
    cam.style.border = ""
    cam.style.borderRadius = ""
    wire.style.border = ""
    wire.style.borderRadius = ""
})