const fs = require('fs');
const path = require('path');

class DataLogger {
    constructor() {
        this.logFilePath = path.join(__dirname, 'sensorData.log');
    }

    logData(level) {
        const timestamp = new Date().toISOString();
        const logEntry = `${timestamp} - Water Level: ${level}%\n`;

        fs.appendFile(this.logFilePath, logEntry, (err) => {
            if (err) {
                console.error('Error logging data:', err);
            }
        });
    }
}

module.exports = DataLogger;
