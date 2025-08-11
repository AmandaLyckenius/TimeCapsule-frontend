import CapsuleForm from "./CapsuleForm";
import CapsuleTips from "./CapsuleTips";
import './MainContent.css';

const MainContent  = () => {
    return (
        <main>

            <div className="intro-text">
                <h1>VISION CAPSULE</h1>
                <p className="tagline">Send a message to your future self</p>
            </div>
            
        
            <CapsuleForm/>
            

        </main>
    )
}

export default MainContent;