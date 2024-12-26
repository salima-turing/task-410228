// Sensor Module
class Sensor {
    constructor(name) {
        this.name = name;
        this.value = 0;
    }

    // Simulate sensor data reading
    read() {
        this.value = Math.random() * 100; // Simulated sensor value
        console.log(`[Sensor ${this.name}] Value: ${this.value.toFixed(2)}`);
        return this.value;
    }
}

// Actuator Module
class Actuator {
    constructor(name) {
        this.name = name;
    }

    // Perform an action based on the sensor value
    performAction(sensorValue) {
        if (sensorValue > 70) {
            console.log(`[Actuator ${this.name}] Activating due to high sensor value: ${sensorValue}`);
        } else {
            console.log(`[Actuator ${this.name}] No action required for sensor value: ${sensorValue}`);
        }
    }
}

// Main Control System
class ControlSystem {
    constructor() {
        this.sensors = [];
        this.actuators = [];
    }
    
    // Add sensor
    addSensor(sensor) {
        this.sensors.push(sensor);
    }

    // Add actuator
    addActuator(actuator) {
        this.actuators.push(actuator);
    }

    // Monitor sensors and control actuators
    monitor() {
        this.sensors.forEach(sensor => {
            const sensorValue = sensor.read();
            this.actuators.forEach(actuator => actuator.performAction(sensorValue));
        });
    }
}

// Simulating the industrial control system
const system = new ControlSystem();

// Adding sensors
system.addSensor(new Sensor('TemperatureSensor'));
system.addSensor(new Sensor('PressureSensor'));

// Adding actuators
system.addActuator(new Actuator('CoolingFan'));
system.addActuator(new Actuator('EmergencyShutoff'));

// Simulate periodic monitoring (for demo purposes, we'll simulate this with a single call)
setInterval(() => {
    system.monitor();
}, 2000); // Check every 2 seconds
