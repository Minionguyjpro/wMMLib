export async function ringBuzzer({ config, buzzerId }) {
    if (!buzzerId) {
        throw new Error('Missing required parameter: buzzerId');
    }

    try {
        // Simulate an API call to ring the buzzer
        console.log(`Ringing buzzer with ID: ${buzzerId}`);

        const response = await fetch(`${config.ps3Host}/beep.ps3?${buzzerId}`, {
            method: 'GET',
        });
        
        // if (!response.ok) {
        //     throw new Error(`Failed to ring buzzer: ${response.statusText}`);
        // }

        return { success: true, message: `Buzzer ${buzzerId} rung successfully.` };
    } catch (error) {
        console.error('Error ringing buzzer:', error);
        throw error;
    }
}