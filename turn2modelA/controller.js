const Sensor = require('./sensor');
const Pump = require('./pump');
const Alert = require('./alert');
const DataLogger = require('./dataLogger');

class Controller {
    constructor() {
        this.sensor = new Sensor();
        this.pump = new Pump();
        this.alert = new Alert();
        this.dataLogger = new DataLogger();
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
        this.dataLogger.logData(level); // Log the data

        this.alert.checkLevel(level); // Check for alerts

        if (level < this.criticalLevel) {
            this.pump.toggle();
        }
    }
}

const controller = new Controller();
