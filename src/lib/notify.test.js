import assert from 'assert';
import { notify } from './notify.js';

const realPs3Host = 'http://192.168.1.192';

describe('notify', function() {
    this.timeout(5000);

    it('should throw if msg is undefined', async () => {
        await assert.rejects(
            () => notify({ config: { ps3Host: realPs3Host }, sndId: 5 }),
            /Missing required parameter: msg/
        );
    });

    it('should send notification to the real PS3', async () => {
        const msg = 'Test notification';
        const iconId = 1;
        const sndId = 5;
        const result = await notify({ config: { ps3Host: realPs3Host }, msg, iconId, sndId });
        assert.strictEqual(result.success, true);
        assert.match(result.message, new RegExp(`Notification '${msg}' sent successfully`));
        // Listen for the beep on your PS3!
    });
});