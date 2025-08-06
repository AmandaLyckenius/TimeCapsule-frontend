import { useState } from 'react';
import './CapsuleTips.css';
import { CircleQuestionMark } from 'lucide-react';

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
            <button className='help-button' onClick={() => setShowTips(!showTips)}>
            <CircleQuestionMark size={24} color="#333" />

            </button>

            {showTips && (
                <div>
                    <p>Here are some questions to get you started</p>
                    <ul>
                        {tips.map((tip, index) => (
                            <li key={index}> {tip}</li>
                        ))}
                    </ul>
                </div>
            )}
        </div>
    )
}

export default CapsuleTips;