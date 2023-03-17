const blubImg = document.getElementById("bulbimg")
const switchbtn = document.getElementById("switchbutton")

const imgBlubOff = './image/bulb_off-removebg.png'
const imgBlubOn = './image/bulb_on-removebg.png'

let bulb = false
let btn = false
togggleImg()


switchbtn.addEventListener('click',
    function() {
        togggleImg()
        togggleSwitch()

    }
)


function togggleImg() {
    bulb = !bulb
    blubImg.src = bulb ? imgBlubOn : imgBlubOff

}

function togggleSwitch() {
    btn = !btn
    switchbtn.innerHTML = btn ? "On" : "Off"

}