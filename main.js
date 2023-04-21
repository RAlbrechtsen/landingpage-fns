// function changeBackgroundColor() {
//     let body = document.querySelector("body")
//     body.style.backgroundColor = "White"

//     let headline = document.querySelector(".headline")
//     headline.style.color = "Black"

//     let mainText = document.querySelector(".mainText")
//     mainText.style.color = "Black"
// }


function changeBackgroundColor() {
        let body = document.querySelector("body")
    body.classList.toggle("whiteBG");

    let headline = document.querySelector(".headline")
    headline.classList.toggle("blackText");

    let mainText = document.querySelector(".mainText")
    mainText.classList.toggle("blackText");
}