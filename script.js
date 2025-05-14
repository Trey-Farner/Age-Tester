const input = document.getElementById("input");
const submitBtn = document.getElementById("submit-btn")
const result = document.getElementById("result")


submitBtn.addEventListener("click", () => {
    const date = new Date()
    date.setFullYear(date.getFullYear() - 21)
    const inputDate = new Date(input.value)
    console.log(inputDate.getDate())
    if (inputDate.getTime() <= date.getTime()) {
        return result.textContent = "Welcome patron! Grab a drink and toss some dice!"
    } else {
        return result.textContent = "Oh great heavens! Leave this establishment NOW before I contact the local constabulary."
    }
})