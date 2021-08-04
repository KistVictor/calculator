const buttons = document.querySelectorAll("button")
const charList = document.querySelector("ul")

function getChar(event) {
    const char = event.target.innerText
    addChar(char)
}

function addChar(char) {
    const newItem = document.createElement("li")
    newItem.innerText = char
    console.log(newItem)
    charList.appendChild(newItem)
}






buttons.forEach((button) => {
    button.addEventListener("click", getChar)
})