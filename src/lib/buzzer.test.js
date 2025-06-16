import assert from 'assert';
import { ringBuzzer } from './buzzer.js';

const realPs3Host = process.env.REAL_PS3_HOST;
const useRealPs3 = !!realPs3Host;
const testHost = useRealPs3 ? realPs3Host : 'http://localhost:12345'; // or your mock server

describe('ringBuzzer', function() {
  this.timeout(5000);

  it('should throw if buzzerId is missing', async () => {
    await assert.rejects(
      () => ringBuzzer({ config: { ps3Host: testHost } }),
      /Missing required parameter: buzzerId/
    );
  });

  it('should ring the buzzer on the real PS3', async function() {
    if (!useRealPs3) this.skip();
    const result = await ringBuzzer({ config: { ps3Host: testHost }, buzzerId: 1 });
    assert.strictEqual(result.success, true);
    assert.match(result.message, /Buzzer 1 rung successfully/);
  });
});