import { sendCapsule } from '../api/capsuleApi';
import './CapsuleForm.css';
import { useState } from 'react';
import CapsuleTips from './CapsuleTips';

const CapsuleForm = () => {

    const [email, setEmail] = useState<string>("");
    const [message, setMessage] = useState<string>("");
    const [deliveryDate, setDeliveryDate] = useState<string>("");

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();

        try {
            const data = await sendCapsule({email, message, deliveryDate})
            console.log("Successfully sent capsule")
        } catch (error){
            console.error("Failed to send capsule", error)
        }
    }

    return(
        <form onSubmit={handleSubmit}>
            
            <label className='form-field'>
                Email:
                <input 
                type="email" 
                name="email" 
                value={email} 
                onChange={(e) => setEmail(e.target.value)} 
                required />
            </label>

            <label className='form-field'>
                Delivery date:
                <input 
                type="date" 
                name="deliveryDate" 
                value={deliveryDate} 
                onChange={(e) => setDeliveryDate(e.target.value)} 
                required />
            </label>

            <label className='form-field'>
                Message:

                <textarea 
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                placeholder="Write your vision for your future here">
                </textarea>

            </label>

            <div className='button-box'>
              <button type="submit">Send</button>
            </div>

            <div className='tips-button'>
                <CapsuleTips/>
            </div>

            


        </form>
    )
}

export default CapsuleForm;