const Sensor = require('./sensor');
const Pump = require('./pump');

class Controller {
    constructor() {
        this.sensor = new Sensor();
        this.pump = new Pump();
        this.criticalLevel = 30;

        this.setupListeners();
    }

    setupListeners() {
        this.sensor.on('levelChange', (level) => {
            this.monitorLevel(level);
        });
    }

    monitorLevel(level) {
        console.log(`Current water level: ${level}%`);

        if (level < this.criticalLevel) {
            this.pump.toggle();
        }
    }
}

const controller = new Controller();
