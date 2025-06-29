export async function fetchCPUTemperature({ config, unit }) {
    try {
        const response = await fetch(`${config.ps3Host}/cpursx.ps3`, { method: 'GET' });
        const text = await response.text();
        let match;
        if (unit === 'C' || !unit) {
            match = text.match(/CPU:\s*(\d+)\s*[°º]C[^\d]+RSX:\s*(\d+)\s*[°º]C/i);
        } else if (unit === 'F') {
            match = text.match(/CPU:\s*(\d+)\s*[°º]F[^\d]+RSX:\s*(\d+)\s*[°º]F/i);
        }
        if (match) {
            return {
                cpu: parseInt(match[1], 10),
                rsx: parseInt(match[2], 10)
            };
        }
        return null;
    } catch (error) {
        console.error('Error fetching CPU temperature:', error);
        throw error;
    }
}