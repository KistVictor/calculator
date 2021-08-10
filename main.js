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

  document.querySelector("#btn-plus").onclick = () => operation("+")
  document.querySelector("#btn-minus").onclick = () => operation("-")
  document.querySelector("#btn-mult").onclick = () => operation("*")
  document.querySelector("#btn-divi").onclick = () => operation("/")
  document.querySelector("#btn-equal").onclick = calculate

  document.querySelector("#btn-dot").onclick = verifyDot
  document.querySelector("#btn-ac").onclick = clearAll
  document.querySelector("#btn-lc").onclick = clearLastNumber
  document.querySelector("#btn-sum").onclick = sumNumbers
}

const numberList = document.querySelector("ul")

let value = "0"
let newNumber = true
let lastValue = "0"
let pendingOperation = null

const currentValue = () => parseFloat(value)

const displayNumber = () => document.querySelector("#mainNumber")

function number(number) {

  if (newNumber) {
    value = "" + number
    newNumber = false
  } else {
    value += number
  }

  updateDisplay()
}

function addNewItem(number) {
  const newItem = document.createElement("li")
  newItem.innerText = number
  displayNumber().parentNode.insertBefore(newItem, displayNumber())
}

function clearAll() {
  newNumber = true
  value = "0"
  lastValue = "0"
  pendingOperation = null
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

function operation(op) {
  calculate()
  lastValue = currentValue()
  pendingOperation = op
  newNumber = true
}

function calculate() {
  if (pendingOperation != null) {
    switch (pendingOperation) {
      case "+":
        result = lastValue + currentValue()
        break
      case "-":
        result = lastValue - currentValue()
        break
      case "*":
        result = lastValue * currentValue()
        break
      case "/":
        result = lastValue / currentValue()
        break
    }
    value = result.toString()
    addNewItem(value)
  }
  newNumber = true
  pendingOperation = null
  lastValue = 0
  updateDisplay()
}

function updateDisplay() {
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
  displayNumber().innerText = displayValue
}