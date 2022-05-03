def on_data_received():
    global start
    if start == 0:
        start = 1
    else:
        pass
serial.on_data_received(serial.delimiters(Delimiters.NEW_LINE), on_data_received)

start = 0
start = 0
basic.set_led_color(0xff0000)
music.play_melody("C E G B C5 B G E ", 140)
basic.set_led_color(0x00ff00)
serial.write_line("Start erfolgreich... Bitte gebe /start ein")

def on_forever():
    pass
basic.forever(on_forever)
