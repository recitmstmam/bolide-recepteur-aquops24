input.onButtonPressed(Button.A, function () {
    radio.sendString("Go")
    basic.pause(100)
    basic.showIcon(IconNames.No)
    basic.pause(1000)
    control.reset()
})
radio.setGroup(1)
let Fentes = 0
let distance = 0
basic.showIcon(IconNames.Yes)
basic.forever(function () {
	
})
