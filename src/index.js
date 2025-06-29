import { fetchCPUTemperature } from './lib/cpu.js';
import { notify } from './lib/notify.js';
import { ringBuzzer } from './lib/buzzer.js';
import { setFanSpeed } from './lib/fan.js';

/**
 * Factory function that returns an async-enabled interface.
 * The PS3 host must be provided by the user as part of the config object.
 * Example usage:
 *   const lib = await createLibrary({ ps3Host: 'http://192.168.1.123' });
 *   await lib.ringBuzzer(1);
 *
 * @param {object} config - Must include { ps3Host: string }
 * @returns {Promise<object>}
 */
export async function createLibrary(config = {}) {
  if (!config.ps3Host) {
    throw new Error('Missing required config option: ps3Host');
  }

  const context = {
    config,
  };

  return {
    fetchCPUTemperature: (unit) => fetchCPUTemperature({ unit }),
    notify: (msg) => notify({ msg }),
    ringBuzzer: (buzzerId) => ringBuzzer({ buzzerId }),
    setFanSpeed: (speed) => setFanSpeed({ speed }),
  };
}

export { fetchCPUTemperature };
export { notify };
export { ringBuzzer };
export { setFanSpeed };