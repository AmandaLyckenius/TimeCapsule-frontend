import { useState } from 'react';
import './CapsuleTips.css';
import { CircleQuestionMark, Lightbulb } from 'lucide-react';

const CapsuleTips = () => {

    const [showTips, setShowTips] = useState<boolean>(false);

    const tips = [
        "Where do you live?",
        "How do you spend a typical day?",
        "Have you traveled?",
        "Have you met someone famous?",
        "Have you learnt a new skill?",
        "What kind of music do you listen to?"
    ];


    return (
        <div>
           
           <div className='tips-container'>
                {showTips && (
                    <div className='tips-box'>
                        <p>Here are some questions to get you started</p>
                        <ul>
                            {tips.map((tip, index) => (
                                <li key={index}> {tip}</li>
                            ))}
                        </ul>   
                    </div>

                )}
           </div>


            <div className='help-button-container'>
                <button className='help-button' onClick={() => setShowTips(!showTips)}>
                    <Lightbulb size={24} color="#333" />
                </button>

            </div>


        </div>
    )
}

export default CapsuleTips;