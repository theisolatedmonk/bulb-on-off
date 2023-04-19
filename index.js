const blubImg = document.getElementById("bulbimg")
const switchbtn = document.getElementById("switchbutton")

const imgBlubOff = './image/8czr7ad7i-removebg-preview.png'
const imgBlubOn = './image/8czr7ad7i.png'

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
    switchbtn.innerHTML = btn ? "ON" : "OFF"
    switchbtn.style.backgroundColor = btn ? "red" : "Green"

}