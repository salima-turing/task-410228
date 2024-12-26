class Alert {
    constructor() {
        this.emailService = 'fakeEmailService'; // Replace with an actual email service like Nodemailer
    }

    sendAlert(message) {
        console.log(`Sending alert: ${message}`);
        // Actual email sending logic would be here using the emailService
    }
}

module.exports = Alert;
