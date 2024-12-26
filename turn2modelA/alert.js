class Alert {
    constructor() {
        this.alertThreshold = 30; // critical level for alerting
    }

    sendAlert(message) {
        console.log(`ALERT: ${message}`);
        // Additional logic to send email or push notifications can be added here
    }

    checkLevel(level) {
        if (level < this.alertThreshold) {
            this.sendAlert(`Water level is critically low: ${level}%`);
        }
    }
}

module.exports = Alert;
