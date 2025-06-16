import assert from 'assert';
import { notify } from './notify.js';

const realPs3Host = process.env.REAL_PS3_HOST;
const useRealPs3 = !!realPs3Host;
const testHost = useRealPs3 ? realPs3Host : 'http://localhost:12345';

describe('notify', function() {
    this.timeout(5000);

    it('should throw if msg is undefined', async () => {
        await assert.rejects(
            () => notify({ config: { ps3Host: testHost }, sndId: 5 }),
            /Missing required parameter: msg/
        );
    });

    it('should send notification to the real PS3', async function() {
        if (!useRealPs3) this.skip();
        const msg = 'Test notification';
        const iconId = 1;
        const sndId = 5;
        const result = await notify({ config: { ps3Host: testHost }, msg, iconId, sndId });
        assert.strictEqual(result.success, true);
        assert.match(result.message, new RegExp(`Notification '${msg}' sent successfully`));
    });
});