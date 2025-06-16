import assert from 'assert';
import { ringBuzzer } from './buzzer.js';

const realPs3Host = 'http://192.168.1.192';

describe('ringBuzzer', function() {
  this.timeout(5000);

  it('should throw if buzzerId is missing', async () => {
    await assert.rejects(() => ringBuzzer({ config: { ps3Host: realPs3Host } }), /Missing required parameter: buzzerId/);
  });

  it('should ring the buzzer on the real PS3', async () => {
    const result = await ringBuzzer({ config: { ps3Host: realPs3Host }, buzzerId: 1 });
    assert.strictEqual(result.success, true);
    assert.match(result.message, /Buzzer 1 rung successfully/);
    // Listen for the beep on your PS3!
  });
});