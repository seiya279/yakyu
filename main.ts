input.onButtonPressed(Button.A, function () {
    if (0 < pos_x) {
        led.unplot(pos_x, pos_y)
        pos_x += -1
        led.plot(pos_x, pos_y)
    }
})
input.onButtonPressed(Button.AB, function () {
    for (let i = 0; i <= 3; i++) {
        led.plot(pos_x, 3 - i)
        basic.pause(100)
        led.unplot(pos_x, 3 - i)
    }
    radio.sendNumber(pos_x)
})
input.onButtonPressed(Button.B, function () {
    if (pos_x < 4) {
        led.unplot(pos_x, pos_y)
        pos_x += 1
        led.plot(pos_x, pos_y)
    }
})
let pos_y = 0
let pos_x = 0
pos_x = 2
pos_y = 4
led.plot(pos_x, pos_y)
basic.forever(function () {
	
})
