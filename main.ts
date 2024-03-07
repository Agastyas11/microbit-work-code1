input.onButtonPressed(Button.A, function () {
    motions = 0
    basic.showNumber(motions)
})
input.onSound(DetectedSound.Loud, function () {
    LightsON = !(LightsON)
    if (LightsON) {
        basic.showLeds(`
            # # # # #
            # . . . #
            # . . . #
            # . . . #
            # # # # #
            `)
    } else {
        basic.clearScreen()
    }
})
input.onButtonPressed(Button.B, function () {
    degrees = input.compassHeading()
    if (degrees < 45) {
        basic.showString("N")
    } else if (degrees < 135) {
        basic.showString("E")
    } else if (degrees < 225) {
        basic.showString("S")
    } else if (degrees < 315) {
        basic.showString("W")
    } else {
        basic.showString("N")
    }
})
input.onGesture(Gesture.Shake, function () {
    motions += 1
    basic.showNumber(motions)
})
let degrees = 0
let LightsON = false
let motions = 0
input.setSoundThreshold(SoundThreshold.Loud, 128)
motions = 0
basic.showNumber(motions)
basic.forever(function () {
	
})
