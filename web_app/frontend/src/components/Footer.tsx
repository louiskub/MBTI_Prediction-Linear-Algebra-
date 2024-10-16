import React from 'react';

interface FooterProps {
    bgColor?: string;
}

const Footer: React.FC<FooterProps> = ({ bgColor }) => {
    return (
        <footer className={`p-4 text-cream-50 text-center ${bgColor || 'bg-dark-brown'}`}>
            © 2024 MBTI Prediction. King Mongkut's Institute of Technology Ladkrabang.
        </footer>
    );
};

export default Footer;
