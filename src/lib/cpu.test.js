import assert from 'assert';
import { fetchCPUTemperature } from './cpu.js';

const realPs3Host = process.env.REAL_PS3_HOST;
const useRealPs3 = !!realPs3Host;
const testHost = useRealPs3 ? realPs3Host : 'http://localhost:12345';

describe('fetchCPUTemperature', function() {
    this.timeout(5000);

    it('should fetch CPU temperature from the PS3', async function() {
        if (!useRealPs3) this.skip();
        const result = await fetchCPUTemperature({ config: { ps3Host: testHost}});
        assert.strictEqual(typeof result.cpu, 'number');
        assert(result.cpu > 0, 'CPU temperature should be greater than 0');
        console.log('Fetched CPU temperature:', result.cpu);
    });
});