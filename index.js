const images = [{
        text: 1,
        path: "https://cdn.pixabay.com/photo/2017/03/18/01/07/willow-catkin-2152984_960_720.jpg"
    },
    {
        text: 2,
        path: "https://cdn.pixabay.com/photo/2018/09/05/12/01/nature-3656121_960_720.jpg"
    },
    {
        text: 3,
        path: "https://cdn.pixabay.com/photo/2016/02/03/08/34/banner-1176681_960_720.jpg"
    },
    {
        text: 4,
        path: "https://cdn.pixabay.com/photo/2017/02/01/21/47/cube-2031512_960_720.jpg"
    },
    {
        text: 5,
        path: "https://cdn.pixabay.com/photo/2016/09/01/19/53/pocket-watch-1637394_960_720.jpg"
    },
    {
        text: 6,
        path: "https://cdn.pixabay.com/photo/2016/04/06/08/50/gears-1311171_960_720.jpg"
    },
]

const header = document.querySelector('img');
const nexBtn = document.querySelector(".btnNext")
const prevBtn = document.querySelector(".btnPrevious")
const span = document.querySelector('span')
const spanLength = document.querySelector('.spanArrayLength')
spanLength.textContent = `/${images.length}`
let active = 0

const handleClickRight = () => {
    if (active < images.length - 1) {
        active++
        prevBtn.style.opacity = '100%';
        span.textContent = images[active].text;
        header.src = images[active].path;
        if (active === images.length - 1) {
            nexBtn.style.opacity = '50%';
        }
    }
}

const handleClickLeft = () => {
    if (active <= images.length) {
        if (active == 0) {
            prevBtn.style.opacity = '50%';
            return
        }
        active--
        nexBtn.style.opacity = '100%'
        span.textContent = images[active].text;
        header.src = images[active].path;
    }
}

window.addEventListener('keydown', (e) => {
    e.keyCode === 39 ? handleClickRight(this) : null
})
nexBtn.addEventListener('click', handleClickRight)

window.addEventListener('keydown', (e) => {
    e.keyCode === 37 ? handleClickLeft(this) : null
})
prevBtn.addEventListener('click', handleClickLeft)