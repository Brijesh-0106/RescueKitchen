// Capthcha
(function () {
    const fonts = ['cursive', 'sans', 'serif', 'monospace', 'sans-serif']
    const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    let captchaval = "";


    // Captcha generation
    function generateString() {
        length = 5
        let result = '';
        const charactersLength = characters.length;
        for (let i = 0; i < length; i++) {
            result += characters.charAt(Math.floor(Math.random() * charactersLength));
        }
        captchaval = result;
    }


    // captcha placing at preview
    function setcaptcha() {
        let html = captchaval.split("").map((char) => {
            const rotate = -20 + Math.trunc(Math.random() * 30)
            const font = Math.trunc(Math.random() * fonts.length)
            return `<span 
            style="
            transform:rotate(${rotate}deg);
            font-family:${fonts[font]}
            "
            >${char}</span>`;
        }).join("");
        document.querySelector(".preview").innerHTML = html
    }


    // captcha initialization
    function initcaptcha() {
        generateString();
        setcaptcha()
    }
    initcaptcha()


    // Varifying both captcha
    document.querySelector(".btn").addEventListener("click", function () {
        let inputcaptchaval = document.querySelector(".captcha input").value;
        if (inputcaptchaval == captchaval) {
            alert("Logging In!")
        } else {
            alert("Invalid captcha!")
        }
    })
})();


// refresh captcha button
document.querySelector(".captcha-refresh").addEventListener("click", function () {
    generateString();
    setcaptcha()
})


// Below both is used to add hover effect on buttons of cards
function hoverEffect(element) {
    element.style.color = "white";
    element.style.backgroundColor = "rgb(1,156,1)";
    element.style.border = "2px solid rgb(1,156,1)";
}


function normalEffect(element) {
    element.style.color = "black";
    element.style.backgroundColor = "transparent";
    element.style.border = "1px solid black";
}
// end


// Below code is for automatic corousal
var swiper = new Swiper(".mySwiper", {
    spaceBetween: 30,
    centeredSlides: true,
    autoplay: {
        delay: 2500,
        disableOnInteraction: false,
    },
    grabCursor: true,
    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
    },
});