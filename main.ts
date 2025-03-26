// For the receiver
radio.onReceivedString(function (receivedString) {
    basic.showString(receivedString)
    music.play(music.stringPlayable("A F E F D G E F ", 120), music.PlaybackMode.UntilDone)
})
let sonar_distance = 0
let boat_count = 0
// Both sender and receiver must set radio group to 4
radio.setGroup(4)
// Will it work tho?
basic.forever(function () {
    // I THINK it is right?
    if (sonar.ping(
    DigitalPin.P1,
    DigitalPin.P2,
    PingUnit.Centimeters
    ) == 200) {
        boat_count += 1
        basic.showNumber(boat_count)
    }
    if (boat_count > 10) {
        // For the sender
        radio.sendString("LIMIT IS REACHED")
    }
})
