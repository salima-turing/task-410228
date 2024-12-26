class DataLogger {
    constructor() {
        this.logs = [];
    }

    logData(timestamp, level) {
        const logEntry = { timestamp, level };
        this.logs.push(logEntry);
        console.log('Data logged:', logEntry);
    }

    saveToFile() {
        // Implement file writing logic here using fs module
    }
}

module.exports = DataLogger;
