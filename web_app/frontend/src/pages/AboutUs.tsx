import Navbar from '../components/Navbar';
import JinProfile from '../assets/jin_profile.png';
import MarkProfile from '../assets/mark_profile.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faInstagram, faGithub } from '@fortawesome/free-brands-svg-icons';
import { useState, useEffect } from 'react';
import Cookies from 'js-cookie';

const members = [
    {
        id: '66010660',
        name: 'โมฮาเหม็ด หลุยส์',
        role: 'แฮปปี้ คนกินหมู',
        image: 'https://img.lovepik.com/png/20231024/Cartoon-Muslim-Cute-Little-Boy-arab-arabic-little-boys_329599_wh1200.png', 
        instagram: 'https://www.instagram.com/louis.mnsv_/',
        github: 'https://github.com/louiskub',
    },
    {
        id: '66010898',
        name: 'นายอนัธชัย จานเจือ',
        role: 'แฮปปี้ คนกินหมู',
        image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQBUDstgb_qFZEfqCdHL9R3xMCKXMRq53RIoA&s', 
        instagram: 'https://www.instagram.com/ananx.j/',
        github: 'https://github.com/Anantha250',
    },
    {
        id: '66011442',
        name: 'นายพีรวัส อิงคสันตติกุล',
        role: 'เกิดใหม่ทั้งทีก็เป็นวิปครีมไปซะแล้ว',
        image: MarkProfile, 
        instagram: 'https://www.instagram.com/mark_peerawat/',
        github: 'https://github.com/MustMark',
    },
    {
        id: '66010948',
        name: 'นางสาวแอมมีลี โจว',
        role: 'เกิดใหม่ทั้งทีก็เป็นวิปครีมไปซะแล้ว',
        image: JinProfile,
        instagram: 'https://www.instagram.com/j.i_.n12/',
        github: 'https://github.com/jueeeeeen',
    },
];

function AboutUs() {
    const [comments, setComments] = useState([]);
    const [newComment, setNewComment] = useState('');

    useEffect(() => {
        const savedComments = Cookies.get('comments');
        if (savedComments) {
            setComments(JSON.parse(savedComments));
        }
    }, []);

    const handleCommentSubmit = (e) => {
        e.preventDefault();
        const updatedComments = [...comments, newComment];
        setComments(updatedComments);
        Cookies.set('comments', JSON.stringify(updatedComments), { expires: 7 });
        setNewComment('');
    };

    return (
        <div className="min-h-screen flex flex-col items-center bg-gradient-to-b from-[#D0B1A1] to-[#E2CFCF] p-0.1">
            <Navbar />
            
            <section className="w-full py-20 text-center">
                <h1 className="text-6xl md:text-9xl pt-16 text-transparent bg-clip-text bg-gradient-to-r from-[#8B5A2B] to-[#D2691E] font-serif animate-bounce">
                    About Us
                </h1>
                <p className="mt-4 text-xl md:text-2xl text-[#6B4F4F]">
                    เราคือทีมพัฒนาที่มุ่งมั่นในการสร้างสรรค์สิ่งดีๆ สำหรับคุณ
                </p>
            </section>

            <section className="w-full px-4 md:px-16 lg:px-32 py-10">
                <h2 className="text-4xl font-semibold text-dark-brown mb-8 text-center">Meet Our Team</h2>
                <div className="members-container grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
                    {members.map((member) => (
                        <div key={member.id} className="card flex flex-col items-center bg-white shadow-lg rounded-lg overflow-hidden transition-transform transform hover:scale-105 hover:shadow-2xl">
                            <div className="w-full h-48 relative overflow-hidden">
                                <img 
                                    src={member.image} 
                                    alt={member.name} 
                                    className="absolute inset-0 w-full h-full object-contain object-center" 
                                />  
                            </div>
                            <div className="p-6 text-center">
                                <h2 className="text-xl font-semibold text-[#6B4F4F]">{member.name}</h2>
                                <h3 className="text-md text-black font-bold">รหัสนักศึกษา : {member.id}</h3>
                                <h3 className="text-md text-[#8B5A2B] mb-2">กลุ่ม : {member.role}</h3>
                            </div>
                            <div className="flex space-x-4 mb-4">
                                <a href={member.instagram} target="_blank" rel="noopener noreferrer" className="flex items-center bg-[#D7C4B8] p-2 rounded-lg shadow-lg transition-transform duration-300 transform hover:bg-[#D2BBA2]">
                                    <FontAwesomeIcon icon={faInstagram} className="w-6 h-6 text-[#6B4F4F] hover:text-[#D2691E]" />
                                </a>
                                <a href={member.github} target="_blank" rel="noopener noreferrer" className="flex items-center bg-[#D7C4B8] p-2 rounded-lg shadow-lg transition-transform duration-300 transform hover:bg-[#D2BBA2]">
                                    <FontAwesomeIcon icon={faGithub} className="w-6 h-6 text-[#6B4F4F] hover:text-[#D2691E]" />
                                </a>
                            </div>
                        </div>
                    ))}
                </div>
            </section>

            <section className="w-full px-4 md:px-16 lg:px-32 py-10 bg-[#F9F7F1]">
                <h2 className="text-4xl font-semibold text-dark-brown mb-8 text-center">รีวิวส่วนหนึ่งจากผู้ใช้</h2>
                <div className="testimonial-container grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
                    <div className="testimonial-card p-6 bg-white rounded-lg shadow-lg">
                        <p className="text-gray-600 mb-4">"MBTI ช่วยให้ฉันเข้าใจตัวเองและเพื่อนร่วมงานได้ดีขึ้นมาก!"</p>
                        <h4 className="text-xl font-bold text-dark-brown">- น้องเอ</h4>
                    </div>
                    <div className="testimonial-card p-6 bg-white rounded-lg shadow-lg">
                        <p className="text-gray-600 mb-4">"การทำแบบทดสอบนี้เป็นประสบการณ์ที่น่าสนใจและมีประโยชน์"</p>
                        <h4 className="text-xl font-bold text-dark-brown">- คุณบี</h4>
                    </div>
                    <div className="testimonial-card p-6 bg-white rounded-lg shadow-lg">
                        <p className="text-gray-600 mb-4">"ฉันสามารถใช้ผลลัพธ์ MBTI ในการพัฒนาตัวเองและการทำงานได้จริง"</p>
                        <h4 className="text-xl font-bold text-dark-brown">- น้องซี</h4>
                    </div>
                </div>
            </section>

            <section className="w-full px-4 md:px-16 lg:px-32 py-10">
                <h2 className="text-4xl font-semibold text-dark-brown mb-8 text-center">ความคิดเห็นของคุณมีค่าสำหรับพวกเรา</h2>
                <form onSubmit={handleCommentSubmit} className="max-w-xl mx-auto bg-white p-8 rounded-lg shadow-lg">
                    <div className="mb-4">
                        <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="comment">
                            Comment
                        </label>
                        <textarea
                            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                            id="comment"
                            rows={4}
                            placeholder="Your Comment"
                            value={newComment}
                            onChange={(e) => setNewComment(e.target.value)}
                            required
                        ></textarea>
                    </div>
                    <div className="flex justify-center">
                        <button 
                            type="submit"
                            className="bg-[#D2691E] hover:bg-[#8B5A2B] text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline transition duration-300 transform hover:scale-105">
                            ส่งความคิดเห็น
                        </button>
                    </div>
                </form>

                <div className="mt-8">
                    <h3 className="text-2xl font-semibold text-dark-brown mb-4 text-center">ความคิดเห็นล่าสุด</h3>
                    <ul className="space-y-4">
                        {comments.slice(-3).map((comment, index) => (
                            <li key={index} className="p-4 bg-white rounded-lg shadow-lg">
                                {comment}
                            </li>
                        ))}
                    </ul>
                </div>
            </section>

            <footer className="w-full text-center p-4 bg-[#D7C4B8] text-[#6B4F4F]">
                <p>&copy; 2024 All rights reserved.</p>
            </footer>
        </div>
    );
}

export default AboutUs;
