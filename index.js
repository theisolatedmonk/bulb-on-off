const blubImg = document.getElementById("bulbimg")
const switchbtn = document.getElementById("switchbutton")

const imgBlubOff = './image/bulb_off-removebg.png'
const imgBlubOn = './image/bulb_on-removebg.png'

let bulb = false
togggleImg()


switchbtn.addEventListener('click',
    function() {
        togggleImg()
    }
)


function togggleImg() {
    bulb = !bulb
    blubImg.src = bulb ? imgBlubOn : imgBlubOff

}