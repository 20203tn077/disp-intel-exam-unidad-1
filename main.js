const tv = {
    on: false,
    volume: '',
    channel: '',
    muted: '',

    togglePower() {
        if (!this.on) {
            this.on = true
            this.volume = 3
            this.channel = 7
            this.muted = false
        } else {
            this.on = false
            this.volume = ''
            this.channel = ''
            this.muted = ''
        }
        this.showState()
    },
    increaseVolume() {
        if (!this.on) console.log('Televisión apagada')
        else if (this.muted) this.muted = false
        else if (this.volume === 10) console.log('Volumen al máximo')
        else this.volume++
        this.showState()
    },
    decreaseVolume() {
        if (!this.on) console.log('Televisión apagada')
        else if (this.muted) this.muted = false
        else if (this.volume === 1) console.log('Volumen al mínimo')
        else this.volume--
        this.showState()
    },
    nextChannel() {
        if (!this.on) console.log('Televisión apagada')
        else if (this.channel === 100) console.log('Último canal')
        else this.channel++
        this.showState()
    },
    previousChannel() {
        if (!this.on) console.log('Televisión apagada')
        else if (this.channel === 1) console.log('Primer canal')
        else this.channel--
        this.showState()
    },
    toggleMute() {
        if (!this.on) console.log('Televisión apagada')
        else this.muted = !this.muted
        this.showState()
    },
    showState() {
        console.log(
`Estado:    ${this.on ? 'Encendida' : 'Apagada'}
Volumen:   ${this.volume}
Canal:     ${this.channel}
Silencio:  ${this.muted === '' ? '' : this.muted ? 'Sí' : 'No'}
----------------------------`
        )
    }
}