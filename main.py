def on_button_pressed_a():
    global motions
    motions = 0
    basic.show_number(motions)
input.on_button_pressed(Button.A, on_button_pressed_a)

def on_sound_loud():
    global LightsON
    LightsON = not (LightsON)
    if LightsON:
        basic.show_leds("""
            # # # # #
            # . . . #
            # . . . #
            # . . . #
            # # # # #
            """)
    else:
        basic.clear_screen()
input.on_sound(DetectedSound.LOUD, on_sound_loud)

def on_button_pressed_b():
    global degrees
    degrees = input.compass_heading()
    if degrees < 45:
        basic.show_string("N")
    elif degrees < 135:
        basic.show_string("E")
    elif degrees < 225:
        basic.show_string("S")
    elif degrees < 315:
        basic.show_string("W")
    else:
        basic.show_string("N")
input.on_button_pressed(Button.B, on_button_pressed_b)

def on_gesture_shake():
    global motions
    motions += 1
    basic.show_number(motions)
input.on_gesture(Gesture.SHAKE, on_gesture_shake)

degrees = 0
LightsON = False
motions = 0
input.set_sound_threshold(SoundThreshold.LOUD, 128)
motions = 0
basic.show_number(motions)

def on_forever():
    pass
basic.forever(on_forever)
