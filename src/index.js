import { fetchCPUTemperature } from './lib/cpu.js';
import { notify } from './lib/notify.js';
import { ringBuzzer } from './lib/buzzer.js';
import { setFanSpeed } from './lib/fan.js';

/**
 * Factory function that returns an async-enabled interface.
 * The PS3 host must be provided by the user as part of the config object.
 * Example usage:
 *   const lib = await wMMLib({ ps3Host: 'http://192.168.1.123' });
 *   await lib.ringBuzzer(1);
 *
 * @param {object} config - Must include { ps3Host: string }
 * @returns {Promise<object>}
 */
export async function wMMLib(config = {}) {
  if (!config.ps3Host) {
    throw new Error('Missing required config option: ps3Host');
  }

  const context = {
    config,
  };

  return {
    fetchCPUTemperature: (unit) => fetchCPUTemperature({ config, unit }),
    notify: (msg) => notify({ config, msg }),
    ringBuzzer: (buzzerId) => ringBuzzer({ config, buzzerId }),
    setFanSpeed: (speed) => setFanSpeed({ config, speed }),
  };
}

export { fetchCPUTemperature };
export { notify };
export { ringBuzzer };
export { setFanSpeed };