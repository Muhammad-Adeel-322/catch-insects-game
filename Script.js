let btn = document.querySelector("button")
let box1 = document.querySelector(".box-1")
let box2 = document.querySelector(".box-2")
let box3 = document.querySelector(".box-3")
let main = document.querySelector("main")
let game = document.querySelectorAll(".incects-box")
let images = document.querySelectorAll(".images")
let mili = document.querySelector(".milisec")
let secs = document.querySelector(".secind")
let mint = document.querySelector(".mint")
let num = document.querySelector(".number")
let msg = document.querySelector(".message")



let source
btn.addEventListener(("click"), () => {
    box1.style.marginTop = "-100vh"
})
let Number1 = 0
let count = 0
let sec = 0
let mints = 0
for (let a = 0; a < images.length; a++) {
    images[a].addEventListener(("click"), () => {
        source = images[a].src
        box2.style.marginTop = "-100vh"
        setInterval(() => {
            count++
            mili.innerHTML = `0${count}`
            if (count > 9) {
                mili.innerHTML = count
            }

            if (count > 99) {
                count = 0
                sec++
                secs.innerHTML = `0${sec}`
                if (sec > 9) {
                    secs.innerHTML = sec
                }

            }
            if (sec > 60) {
                sec = 0
                mints++
                mint.innerHTML = mints
            }
        }, 10)
        Addinsects()
    })
}

function Addinsects() {
    let Widht_Value = window.innerWidth
    let height = window.innerHeight
    let LeftValue = Math.random() * (Widht_Value - 200) + 90
    let TopValue = Math.random() * (height - 200) + 90
    let incetsbox = document.createElement("div")
    incetsbox.style.width = "150px"
    incetsbox.style.position = "absolute"
    incetsbox.style.left = `${LeftValue}px`
    incetsbox.style.top = `${TopValue}px`
    box3.appendChild(incetsbox)
    let Create_img = document.createElement("img")
    Create_img.style.width = "100%"
    Create_img.style.height = "100%"
    Create_img.src = source
    incetsbox.appendChild(Create_img)
    Create_img.addEventListener("click", () => {
        Create_img.style.display = "none"
        source = Create_img.src
        Number1++
        CreateInsects()
        num.innerHTML = Number1
        if(Number1>39){
            msg.style.display = "block"
        }
    })
}
function CreateInsects() {
    setTimeout(() => {
        Addinsects()
    }, 1000)
    setTimeout(() => {
        Addinsects()
    }, 1500)
}