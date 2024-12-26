const { randomInt } = require('crypto');

class Sensor {
    constructor() {
        this.interval = setInterval(() => {
            this.emit('levelChange', this.getRandomLevel());
        }, 5000); // Simulate data reading every 5 seconds
    }

    getRandomLevel() {
        // Generate a random level between 0% and 100%
        return Math.floor(randomInt(0, 101));
    }

    on(event, listener) {
        this[`_${event}Listeners`] = this[`_${event}Listeners`] || [];
        this[`_${event}Listeners`].push(listener);
    }

    emit(event, data) {
        const listeners = this[`_${event}Listeners`] || [];
        listeners.forEach((listener) => listener(data));
    }

    removeListener(event, listener) {
        const listeners = this[`_${event}Listeners`];
        if (listeners) {
            const index = listeners.indexOf(listener);
            if (index !== -1) {
                listeners.splice(index, 1);
            }
        }
    }
}

module.exports = Sensor;
