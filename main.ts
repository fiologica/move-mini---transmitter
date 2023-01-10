enum RadioMessage {
    message1 = 49434
}
buttonClicks.onButtonUp(buttonClicks.AorB.B, function () {
    radio.sendNumber(2)
})
buttonClicks.onButtonUp(buttonClicks.AorB.A, function () {
    radio.sendNumber(2)
})
buttonClicks.onButtonHeld(buttonClicks.AorB.B, function () {
    radio.sendNumber(3)
})
input.onButtonPressed(Button.AB, function () {
    radio.sendNumber(2)
})
buttonClicks.onButtonHeld(buttonClicks.AorB.A, function () {
    radio.sendNumber(1)
})
radio.setGroup(44)
basic.showIcon(IconNames.Heart)
basic.pause(100)
basic.clearScreen()
