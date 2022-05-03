serial.onDataReceived(serial.delimiters(Delimiters.NewLine), function () {
    if (start == 0) {
        if (serial.readLine() == "/start") {
            start = 1
            raumcode = 0
            serial.writeLine("Bitte gebe den 4-Stelligen Raumcode ein...")
        } else {
            serial.writeLine("Bitte gebe /start ein... Falsche Eingabe...")
        }
    } else {
        if (raumcode == 0) {
            radio.setGroup(parseFloat(serial.readLine()))
            raumcode = 1
            name = 0
            serial.writeLine("Bitte gebe nun deinen Namen ein...")
        } else {
            if (name == 0) {
                name2 = serial.readLine()
                name = 1
                serial.writeLine("Fertig! Du bist jetzt mit dem Chat verbunden...")
                serial.writeLine("" + name2 + " ist dem Chatroom beigetreten...")
                radio.sendString("" + name2 + " ist dem Chatroom beigetreten...")
            } else {
                serial.writeLine("[" + name2 + "] " + serial.readLine())
                radio.sendString("[" + name2 + "] " + serial.readLine())
            }
        }
    }
})
radio.onReceivedString(function (receivedString) {
    serial.writeLine(receivedString)
})
let name2 = ""
let name = 0
let raumcode = 0
let start = 0
start = 0
raumcode = 1
name = 1
basic.setLedColor(0xff0000)
music.playMelody("C E G B C5 B G E ", 140)
basic.setLedColor(0x00ff00)
serial.writeLine("Start erfolgreich... Bitte gebe /start ein")
basic.forever(function () {
	
})
