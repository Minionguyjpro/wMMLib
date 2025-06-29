# wMMLib

An easy-to-use library for the webMAN MOD PS3 API written in Node.js.

## Install

Inside of your Node.js project, run:

```bash
npm install wmmlib
```

## Usage

```js
// Import the library's export
const { wMMLib } = require('wmmlib');

(async () => {
    const ps3 = await wMMLib({
        ps3Host: 'http://192.168.1.192',
    });

    // Set fan speed
    await ps3.setFanSpeed(50);

    // Define a function to get CPU temperature in Fahrenheit
    async function getCPUTempOfPS3InF() {
        const temps = await ps3.fetchCPUTemperature('C');
        // Convert Celsius to Fahrenheit
        return (temps.cpu * 9/5) + 32;
    }

    // Get the returned temperatures and print them to the console
    try {
        const tempF = await getCPUTempOfPS3InF();
        console.log('CPU temperature in Fahrenheit:', tempF);
    } catch (err) {
        console.error('Error fetching CPU temperature:', err);
    }
})();
```

### Functions

Below all functions provided by this library are listed along with a description on what it does.

### Core Interface

- `wMMLib(config)`: Asynchronously creates and returns an interface to interact with a PS3 via webMAN MOD.
  - The parameter `ps3Host` in string format is necessary for the required config object.

### PS3 Control Functions

- `fetchCPUTemperature(unit)`: Fetches the current CPU temperature from the PS3.
  - The `unit` parameter can be `'C'` for Celsius or `'F'` for Fahrenheit. If left blank, defaults to `'C'`.
- `setFanSpeed(speed)`: Sets the PS3 fan speed to the specified percentage.
  - The `speed` parameter should be a number between 0 and 100.
- `ringBuzzer(buzzerId)`: Triggers the PS3 buzzer.
  - The `buzzerId` parameter specifies the buzzer pattern or type.
- `notify(msg)`: Sends an on-screen notification to the PS3.
  - The `msg` parameter specifies the message to be sent.

## Utility Functions

- `fetchCPUTemperature`: Also exported directly for advanced usage.
- `setFanSpeed`: Also exported directly for advanced usage.
- `ringBuzzer`: Also exported directly for advanced usage.
- `notify`: Also exported directly for advanced usage.