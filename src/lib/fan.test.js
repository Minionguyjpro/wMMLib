import assert from 'assert';
import { setFanSpeed } from './fan.js';

const realPs3Host = process.env.REAL_PS3_HOST;
const useRealPs3 = !!realPs3Host;
const testHost = useRealPs3 ? realPs3Host : 'http://localhost:12345';

describe('setFanSpeed', function() {
    this.timeout(5000);

    it('should throw if speed is missing', async () => {
        await assert.rejects(
            () => setFanSpeed({ config: { ps3Host: testHost } }),
            /Missing required parameter: speed/
        );
    });

    it('should set the fan speed on the real PS3', async function() {
        if (!useRealPs3) this.skip();
        const result = await setFanSpeed({ config: { ps3Host: testHost }, speed: 50 });
        assert.strictEqual(result.success, true);
        assert.match(result.message, /Fan speed set to 50/);
    });
});