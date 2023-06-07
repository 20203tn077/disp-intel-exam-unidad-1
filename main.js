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
        console.log('')
        console.log(`Estado:    ${this.on ? 'Encendida' : 'Apagada'}`)
        console.log(`Volumen:   ${this.volume}`)
        console.log(`Canal:     ${this.channel}`)
        console.log(`Silencio:  ${this.muted === '' ? '' : this.muted ? 'Sí' : 'No'}`)
        console.log('----------------------------')
    }
}

// Se solicita realizar el desarrollo de una aplicación en javascript con html básico que
// permita realizar la modificación de propiedades de un elemento/objeto de javascript por
// medio de click en botones.
// En este caso se deberá representar en un objeto javascript una televisión la cual pueda
// pueda ser encendida y apagada.
// En caso de estar encendida se deberán poder realizar la siguientes acciones:
// ● Subir volumen.
// ○ Máximo al 10
// ○ Al encender en 3
// ● Bajar volumen.
// ○ Mínimo al 1
// ● Subir al siguiente canal.
// ○ Máximo al 100
// ○ Al encender en 7
// ● Bajar al siguiente canal.
// ○ Mínimo al 1
// ● Activar/desactivar Mutear/Silenciar
// ○ Al activar cambia el volumen a 0
// ○ Al desactivar regresa el volumen al valor anterior.

// Nota importante:
// ● Al pulsar cada botón se deberá imprimir el consola el estado final después de
// hacer los cambios al objeto que representa la televisión. En caso de no poder
// hacer la acción deberá indicar el motivo. Por ejemplo: “Volumen al máximo”
// “Televisión apagada”
// ● Se espera mínimamente una interfaz en HTML como se muestra en la siguiente
// imagen.