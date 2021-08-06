onload = () => {
  document.querySelector("#btn-0").onclick = () => number(0)
  document.querySelector("#btn-1").onclick = () => number(1)
  document.querySelector("#btn-2").onclick = () => number(2)
  document.querySelector("#btn-3").onclick = () => number(3)
  document.querySelector("#btn-4").onclick = () => number(4)
  document.querySelector("#btn-5").onclick = () => number(5)
  document.querySelector("#btn-6").onclick = () => number(6)
  document.querySelector("#btn-7").onclick = () => number(7)
  document.querySelector("#btn-8").onclick = () => number(8)
  document.querySelector("#btn-9").onclick = () => number(9)
  document.querySelector("#btn-dot").onclick = verifyDot
  document.querySelector("#btn-ac").onclick = clearAll
  document.querySelector("#btn-lc").onclick = clearLastNumber
  document.querySelector("#btn-sum").onclick = sumNumbers
}

const charList = document.querySelector("ul")

let value = "0"
let temp = "0"
let newNumber = true

function number(number) {

  if (newNumber) {
    value = "" + number
    newNumber = false
  } else {
    value += number
  }

  updateDisplay()
}

function clearAll() {
  newNumber = true
  value = "0"
  updateDisplay()
}

function clearLastNumber() {
  value = value.substring(0, value.length - 1)
  updateDisplay()
}

function verifyDot() {
  if (value.indexOf(".") === -1) {
    value += "."
  }
  updateDisplay()
}

function updateDisplay() {
  console.log(value)
  let [entire, decimal] = value.split(".")
  let displayValue = ''
  counter = 0
  for (let i = entire.length - 1; i >= 0; i--) {
    if (++counter > 3) {
      displayValue = "," + displayValue
      counter = 1
    }
    displayValue = entire[i] + displayValue
  }
  displayValue = displayValue + (decimal ? '.' + decimal : '')
  document.querySelector("li").innerText = displayValue
}