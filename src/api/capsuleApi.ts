
const BASE_URL = 'https://time-capsule.fly.dev';

export const sendCapsule = async (capsuleData: {
    email: string;
    message: string;
    deliveryDate: string;
}) => {

    const response = await fetch (`${BASE_URL}/api/time-capsule`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(capsuleData),

    });

    if(!response.ok){
        const errorText = await response.text();
        throw new Error (`Failed to send time capsule: ${errorText}`)
    }

    const contentType = response.headers.get("content-type");

    if (contentType && contentType.includes("application/json")){
        return await response.json();
    } else {
        return {message: await response.text() || "Time capsule sent!"}
    }

}