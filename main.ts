input.onButtonPressed(Button.A, function () {
    motions = 0
    basic.showNumber(motions)
})
input.onSound(DetectedSound.Loud, function () {
    LightsON = !(LightsON)
    if (LightsON) {
        basic.showLeds(`
            # # # # #
            # # # # #
            # # # # #
            # # # # #
            # # # # #
            `)
    } else {
        basic.clearScreen()
    }
})
input.onButtonPressed(Button.AB, function () {
    for (let index = 0; index < 200; index++) {
        currfreq = Math.map(input.acceleration(Dimension.X), -1024, 1023, 1, 5000)
        music.playSoundEffect(music.createSoundEffect(
        WaveShape.Sine,
        Math.map(input.acceleration(Dimension.X), -1024, 1023, 1, 5000),
        Math.map(input.acceleration(Dimension.Y), -1024, 1023, 1, 5000),
        randint(0, 1024),
        randint(0, 1024),
        randint(40, 100),
        SoundExpressionEffect.Vibrato,
        InterpolationCurve.Curve
        ), SoundExpressionPlayMode.UntilDone)
        lastfreq = currfreq
    }
})
input.onButtonPressed(Button.B, function () {
    let start = 0
    elapsed = input.runningTime() - start
    basic.showNumber(Math.idiv(elapsed, 1000))
})
input.onGesture(Gesture.Shake, function () {
    motions += 1
    basic.showNumber(motions)
})
let elapsed = 0
let lastfreq = 0
let currfreq = 0
let LightsON = false
let motions = 0
input.setSoundThreshold(SoundThreshold.Loud, 128)
motions = 0
basic.showNumber(motions)
basic.forever(function () {
	
})
