basic.forever(function () {
    for (let X = 0; X <= 4; X++) {
        for (let Y = 0; Y <= 4; Y++) {
            if (X == 0) {
                led.plot(4 - X, 4 - Y)
                basic.pause(200)
            } else if (X == 1) {
                led.plot(4 - X, Y)
                basic.pause(200)
            } else if (X == 2) {
                led.plot(4 - X, 4 - Y)
                basic.pause(200)
            } else if (X == 3) {
                led.plot(4 - X, Y)
                basic.pause(200)
            } else if (X == 4) {
                led.plot(4 - X, 4 - Y)
                basic.pause(200)
            } else {
            	
            }
        }
    }
    basic.clearScreen()
})
