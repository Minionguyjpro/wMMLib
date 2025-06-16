export async function notify({ config, msg, iconId, sndId }) {
    if (typeof msg === 'undefined') {
        throw new Error('Missing required parameter: msg');
    }       
    try {
        // Simulate an API call to ring the buzzer
        console.log(`Sending notification with message: '${msg}', icon: ''${iconId}', sound: ${sndId}`);

        const response = await fetch(`${config.ps3Host}/notify.ps3mapi?msg=${msg}&icon=${iconId}&snd=${sndId}`, {
            method: 'GET',
        });

        return { success: true, message: `Notification '${msg}' sent successfully.` };
    } catch (error) {
        console.error('Error sending notification:', error);
        throw error;
    }
}