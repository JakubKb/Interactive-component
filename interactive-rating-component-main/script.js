// grabbing Main container
const mainContainer = document.querySelector(".main-container")
// grabbing the Thank you element
const thanksEl = document.querySelector(".thankyou")
// grabbing The submit btn
const submitBtn = document.getElementById("submit")
//grabing the rating
const rating = document.getElementById("chosen")
// grabing rates
const rates = document.querySelectorAll(".btn")

submitBtn.addEventListener("click", () => {
    // when submit clicked Remove the class hidden from ThanksElement.
    thanksEl.classList.remove("hidden")
    // and add a display style "none" to main container
    mainContainer.style.display = "none"
})
 // function which will display "you chose X out of 5"
rates.forEach((rates) => {
    rates.addEventListener("click", () =>{
        // displaying the you chose x out of 5
        rating.innerHTML = rates.innerHTML
    })
})

