export async function setFanSpeed({config, speed}) {
    if (speed === undefined || speed === null) {
        throw new Error('Missing required parameter: speed');
    }

    try {
        // Simulate an API call to set the fan speed
        console.log(`Setting fan speed to: ${speed}`);

        const response = await fetch(`${config.ps3Host}/cpursx.ps3?fan=${speed}`, {
            method: 'GET',
        });

        return { success: true, message: `Fan speed set to ${speed} successfully.` };
    } catch (error) {
        console.error('Error setting fan speed:', error);
        throw error;
    }
}