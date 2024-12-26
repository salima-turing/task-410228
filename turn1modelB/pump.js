class Pump {
    constructor() {
        this.isOn = false;
    }

    turnOn() {
        console.log('Pump is turned on.');
        this.isOn = true;
    }

    turnOff() {
        console.log('Pump is turned off.');
        this.isOn = false;
    }

    toggle() {
        if (this.isOn) {
            this.turnOff();
        } else {
            this.turnOn();
        }
    }
}

module.exports = Pump;
