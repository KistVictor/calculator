const buttons = document.querySelectorAll("button")
const charList = document.querySelector("ul")

let value = '0'
let newNumber = true

function getChar(event) {
  let char = event.target.innerText

  if (char == ".") {
    verifyVirgle()
  }

  if (newNumber) {
    value = ""+char
    newNumber = false
  } else {
    value += char
  }


  updateDisplay()
}

/*function addChar(char) {
  const newItem = document.createElement("li")
  newItem.innerText = char
  charList.appendChild(newItem)
}*/

function updateDisplay() {
  document.querySelector("li").innerText = value
}

function verifyVirgle() {

}



buttons.forEach((button) => {
  button.addEventListener("click", getChar)
})