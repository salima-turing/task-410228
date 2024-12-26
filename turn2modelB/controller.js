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
        this.criticalLevelLow = 30;
        this.criticalLevelHigh = 80;

        this.setupListeners();
    }

    setupListeners() {
        this.sensor.on('levelChange', (level) => {
            this.monitorLevel(level);
        });
    }

    monitorLevel(level) {
        console.log(`Current water level: ${level}%`);
        this.dataLogger.logData(new Date().toISOString(), level);

        if (level < this.criticalLevelLow) {
            this.pump.toggle();
            this.alert.sendAlert('Water level is too low. Pump activated.');
        } else if (level > this.criticalLevelHigh) {
            this.alert.sendAlert('Water level is too high.');
        }
    }
}

const controller = new Controller();
