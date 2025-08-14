import { sendCapsule } from '../api/capsuleApi';
import './CapsuleForm.css';
import { useEffect, useState } from 'react';
import CapsuleTips from './CapsuleTips';

const CapsuleForm = () => {

    const [email, setEmail] = useState<string>("");
    const [message, setMessage] = useState<string>("");
    const [deliveryDate, setDeliveryDate] = useState<string>("");

    const [loading, setLoading] = useState<boolean>(false);
    const [success, setSuccess] = useState<boolean>(false);
    const [error, setError] = useState<string | null>(null);

    useEffect(() => {
        if (!success) return;

        const t = setTimeout(() => setSuccess(false), 3000);
        return() => clearTimeout(t);

    }, [success]);

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();

        if(loading) return;

        setLoading(true);
        setError(null);

        try {
            const data = await sendCapsule({email, message, deliveryDate})

            setEmail("");
            setMessage("");
            setDeliveryDate("");

            setSuccess(true);
            console.log("Successfully sent capsule")
        } catch (error){
            setError("Something went wrong, please try again")
            console.error("Failed to send capsule", error)
        } finally{
            setLoading(false);
        }
    }

    return(
        <form onSubmit={handleSubmit} aria-describedby={error ? "form-error" : undefined} >

            {(success || error) && (
                <div
                    className={`toast ${error ? "toast-error" : "toast-success"}`}
                    role={error ? "alert" : "status"}
                    aria-live={error ? "assertive" : "polite"}
                >
                    {error ? "Something went wrong. Please try again." : " Your capsule was sent!"}
                </div>
            )}
            
            <label>
                Email:
                <input 
                type="email" 
                name="email" 
                value={email} 
                onChange={(e) => setEmail(e.target.value)} 
                required 
                disabled={loading}
                />
            </label>

            <label>
                Delivery date:
                <input 
                type="date" 
                name="deliveryDate" 
                value={deliveryDate} 
                onChange={(e) => setDeliveryDate(e.target.value)} 
                required
                disabled={loading} />
            </label>

            <label>
                Message:

                <textarea 
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                placeholder="Write your vision for your future here">
                disabled={loading}
                </textarea>

            </label>

            <div className='button-box'>
              <button className="send-button" type="submit" disabled={loading}>{loading ? "Sending.." : "Send"}</button>
            </div>
           
            <CapsuleTips/>

        </form>
    )
}

export default CapsuleForm;