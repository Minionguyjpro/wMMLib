import { ringBuzzer } from './lib/buzzer.js';
import { notify } from './lib/notify.js';

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
    ringBuzzer: (buzzerId) => ringBuzzer({ config: context.config, buzzerId }),
    notify: (msg) => notify({ msg }),
  };
}

export { ringBuzzer };
export { notify };