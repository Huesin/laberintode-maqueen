function girar90gradosderecha () {
    basic.pause(200)
}
function girar90gradosIzquierda () {
    maqueen.motorStop(maqueen.Motors.All)
    basic.pause(200)
    maqueen.motorRun(maqueen.Motors.M1, maqueen.Dir.CCW, 28)
    maqueen.motorRun(maqueen.Motors.M2, maqueen.Dir.CW, 28)
    basic.pause(1100)
    maqueen.motorStop(maqueen.Motors.All)
}
let ultimogiro = 0
basic.forever(function () {
    if (maqueen.Ultrasonic(PingUnit.Centimeters) < 0) {
        maqueen.motorStop(maqueen.Motors.All)
        girar90gradosIzquierda()
        if (maqueen.Ultrasonic(PingUnit.Centimeters) < 4) {
            maqueen.motorStop(maqueen.Motors.All)
            girar90gradosderecha()
        }
    } else {
        maqueen.motorRun(maqueen.Motors.All, maqueen.Dir.CW, 20)
    }
})
