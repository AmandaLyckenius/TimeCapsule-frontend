
const BASE_URL = 'https://time-capsule.fly.dev';

export const sendCapsule = async (capsuleData: {
    email: string;
    message: string;
    deliveryDate: string;
}) => {

    const response = await fetch (`${BASE_URL}/api/capsules`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(capsuleData),

    });

    if(!response.ok){
        throw new Error ("Failed to send time capsule")
    }

    return response.json();
}