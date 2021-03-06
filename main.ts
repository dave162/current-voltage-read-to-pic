input.onButtonPressed(Button.B, function () {
    basic.showIcon(IconNames.Sad)
    serial.redirect(
    SerialPin.P15,
    SerialPin.P16,
    BaudRate.BaudRate9600
    )
    serial.writeString("ldc")
    serial.writeLine("\\r")
    serial.writeLine("\\r")
})
let voltage = 0
let current = 0
basic.showString("Read V/C")
music.playMelody("C5 B A G F E D C ", 368)
serial.redirect(
SerialPin.P15,
SerialPin.P16,
BaudRate.BaudRate9600
)
basic.pause(5000)
basic.pause(5000)
basic.forever(function () {
    serial.writeValue("current", Math.round(current))
    serial.writeValue("voltage", Math.round(voltage))
    voltage = pins.analogReadPin(AnalogPin.P1)
    voltage = pins.map(
    voltage,
    0,
    1023,
    0,
    3.3
    )
    voltage = voltage * 11
    current = pins.analogReadPin(AnalogPin.P0)
    current = pins.map(
    current,
    0,
    1023,
    0,
    3.3
    )
    current = current - 0.33
    current = current * 37.8788
    basic.showIcon(IconNames.Happy)
    serial.writeString("ld1 right thruster DA")
    serial.writeLine("\\r")
    serial.writeLine("\\r")
    basic.pause(100)
    serial.writeString("ld2 voltage:   ")
    serial.writeNumber(voltage)
    serial.writeString("")
    serial.writeLine("\\r")
    serial.writeLine("\\r")
    basic.pause(100)
    serial.writeString("ld3 current:   ")
    serial.writeNumber(current)
    serial.writeString("")
    serial.writeLine("\\r")
    serial.writeLine("\\r")
    basic.pause(100)
})
basic.forever(function () {
	
})
