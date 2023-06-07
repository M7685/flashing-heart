input.onButtonPressed(Button.A, function () {
    count += -1
})
input.onButtonPressed(Button.AB, function () {
    count += count * 1000000
})
input.onButtonPressed(Button.B, function () {
    count += 1
})
let count = 0
count = 0
basic.forever(function () {
    basic.showNumber(count)
})
