import assert from 'assert';
import { createLibrary } from '../src/index.js';

const mockConfig = { ps3Host: '127.0.0.1' };

describe('wMMLib', () => {
  it('should throw if ps3Host is missing', async () => {
    await assert.rejects(() => createLibrary({}), /Missing required config option: ps3Host/);
  });
});