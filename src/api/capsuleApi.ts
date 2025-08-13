
const BASE_URL = process.env.REACT_APP_API_URL;

function assertBaseUrl(url?: string): asserts url is string {
    if (!url) {
      throw new Error(
        'Saknar REACT_APP_API_URL. Sätt den i Vercel > Project > Settings > Environment Variables (Production/Preview) eller i .env.local för dev.'
      );
    }
  }

export const sendCapsule = async (capsuleData: {
    email: string;
    message: string;
    deliveryDate: string;
}) => {

    assertBaseUrl(BASE_URL);

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