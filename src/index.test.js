import assert from 'assert';
import { createLibrary } from '../src/index.js';

const realPs3Host = process.env.REAL_PS3_HOST;
const useRealPs3 = !!realPs3Host;
const testHost = useRealPs3 ? realPs3Host : 'http://localhost:12345';

describe('wMMLib', () => {
  it('should throw if ps3Host is missing', async () => {
    await assert.rejects(() => createLibrary({}), /Missing required config option: ps3Host/);
  });

  it('should create the library with a valid ps3Host', async () => {
    const lib = await createLibrary({ ps3Host: testHost });
    assert.ok(lib);
    assert.strictEqual(typeof lib.ringBuzzer, 'function');
  });
});