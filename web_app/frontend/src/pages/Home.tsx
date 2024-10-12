import React from 'react';
import Navbar from '../components/Navbar'; 
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLightbulb, faUser, faStar, faSearch } from '@fortawesome/free-solid-svg-icons';

const App: React.FC = () => {
    return (
        <div className="min-h-screen flex flex-col bg-gradient-to-b from-[#F4E1D2] to-[#E6C4B5] overflow-hidden">
            <header>
                <Navbar />
            </header>

            <main className="flex-grow flex flex-col items-center pt-16 px-4">
                <section className="intro-section text-center p-10 shadow-lg rounded-lg bg-white bg-opacity-90 mb-12 mt-20 transform transition-transform duration-300 hover:scale-105">
                    <h1 className="text-6xl font-bold text-[#5D3A29]">Discover Your MBTI Type</h1>
                    <h2 className="text-4xl text-[#7A5A4E] mt-2">Unlock Your Personality</h2>
                    <p className="description text-[#9F7C6B] mt-4">♥ ♥ ♥ ♥ ♥ ♥ ♥ ♥ ♥ ♥</p>
                    <div className="portfolio-buttons mt-6 flex justify-center space-x-4">
                        <a href="/theorem" className="btn bg-gradient-to-r from-[#4B3D3A] to-[#C9BBA4] text-white py-3 px-6 rounded shadow-lg transform transition-all duration-300 hover:from-[#3D2A25] hover:to-[#C19B8E] hover:scale-105 hover:shadow-xl">
                            Learn More
                        </a>
                        <a href="/mbti-test" className="btn bg-gradient-to-r from-[#4B3D3A] to-[#C9BBA4] text-white py-3 px-6 rounded shadow-lg transform transition-all duration-300 hover:from-[#3D2A25] hover:to-[#C19B8E] hover:scale-105 hover:shadow-xl">
                            Take the Test
                        </a>
                    </div>
                </section>

                <section className="animation-section mb-12">
                    <div className="animation-container flex justify-center items-center gap-10">
                        <div className="mbti-icon bounce transition-transform duration-300 hover:scale-125">
                            <FontAwesomeIcon icon={faSearch} size="6x" className="text-[#4B3D3A]" />
                        </div>
                        <div className="mbti-icon bounce transition-transform duration-300 hover:scale-125">
                            <FontAwesomeIcon icon={faLightbulb} size="6x" className="text-[#7A5A4E]" />
                        </div>
                        <div className="mbti-icon bounce transition-transform duration-300 hover:scale-125">
                            <FontAwesomeIcon icon={faUser} size="6x" className="text-[#5D3A29]" />
                        </div>
                        <div className="mbti-icon bounce transition-transform duration-300 hover:scale-125">
                            <FontAwesomeIcon icon={faStar} size="6x" className="text-[#9F7C6B]" />
                        </div>
                    </div>
                </section>

                <section className="highlight-section mb-12">
                    <h2 className="text-4xl font-semibold text-[#5D3A29] mb-6">ทำไมต้องรับการทดสอบ?</h2>
                    <div className="highlight-container grid grid-cols-1 md:grid-cols-3 gap-6">
                        <div className="highlight-card p-6 bg-white rounded-lg shadow-lg transform transition-all duration-300 hover:scale-105 hover:shadow-xl">
                            <FontAwesomeIcon icon={faLightbulb} size="4x" className="text-[#7A5A4E] mb-4 mx-auto" />
                            <h3 className="text-2xl font-bold text-[#5D3A29]">เข้าใจตัวตนของเรามากขึ้น</h3>
                            <p className="text-gray-600">MBTI เป็นเครื่องมือที่ดีในการช่วยทำให้คุณมีความตระหนักรู้ภายในตนเอง (self-awareness) ซึ่งจะช่วยทำให้คุณได้รู้จักตัวเองมากขึ้น </p>
                        </div>
                        <div className="highlight-card p-6 bg-white rounded-lg shadow-lg transform transition-all duration-300 hover:scale-105 hover:shadow-xl">
                            <FontAwesomeIcon icon={faStar} size="4x" className="text-[#9F7C6B] mb-4 mx-auto" />
                            <h3 className="text-2xl font-bold text-[#5D3A29]">ช่วยในการทำงานร่วมกันอย่างมีประสิทธิภาพ</h3>
                            <p className="text-gray-600">การเรียนรู้เรื่อง MBTI สามารถช่วยทำให้แต่ละคนเข้าใจสไตล์การทำงานที่แตกต่างกัน</p>
                        </div>
                        <div className="highlight-card p-6 bg-white rounded-lg shadow-lg transform transition-all duration-300 hover:scale-105 hover:shadow-xl">
                            <FontAwesomeIcon icon={faUser} size="4x" className="text-[#4B3D3A] mb-4 mx-auto" />
                            <h3 className="text-2xl font-bold text-[#5D3A29]">ช่วยในการตัดสินใจสิ่งต่างๆ</h3>
                            <p className="text-gray-600">การรู้จัก type ที่แม่นยำของตัวเองสามารถช่วยทำให้เรามองเห็นภาพรวมอย่างรอบด้านที่เกี่ยวกับตัวเอง</p>
                        </div>
                    </div>
                </section>

            </main>
        </div>
    );
}

export default App;
