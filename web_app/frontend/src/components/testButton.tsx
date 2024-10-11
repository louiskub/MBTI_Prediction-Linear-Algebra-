import { Link } from 'react-router-dom';

function TestButton() {
    return (
        <div className="flex justify-center">
            <Link to="/MBTI-test" className="rounded-md text-xl font-bold p-2 text-et-brown bg-et-pale-pink text-center hover:text-et-dark-green hover:bg-et-sage-green hover:cursor-pointer">
                ทำแบบทดสอบ➜
            </Link>
        </div>
    );
}

export default TestButton;
