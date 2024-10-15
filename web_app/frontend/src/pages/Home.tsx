import React from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer'; 
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLightbulb, faUser, faStar, faSearch } from '@fortawesome/free-solid-svg-icons';

const App: React.FC = () => {
    return (
        <div 
            className="min-h-screen flex flex-col 
                       bg-gradient-to-r from-light-brown via-et-light-orange to-dark-brown 
                       bg-[length:200%_200%] animate-gradient-animation 
                       text-cream-50 overflow-hidden"
        >
            <header className="fixed w-full z-10">
                <Navbar />
            </header>

            <main className="flex-grow flex flex-col items-center pt-16 px-4">
                <section className="intro-section text-center p-10 shadow-lg rounded-lg bg-white bg-opacity-90 mb-12 mt-20 transform transition-transform duration-300 hover:scale-105">
                    <h1 className="text-6xl font-bold text-dark-brown">สำรวจ MBTI ของคุณ!</h1>
                    <h2 className="text-4xl text-et-dark-green mt-2">เพื่อพัฒนาศักยภาพของตัวคุณเอง</h2>
                    <p className="description text-et-pale-pink mt-4">♥ ♥ ♥ ♥ ♥ ♥ ♥ ♥ ♥ ♥</p>
                    <div className="portfolio-buttons mt-6 flex justify-center space-x-4">
                        <a href="/theorem" className="font-bold btn bg-gradient-to-r from-et-brown to-et-yellow-green text-white py-3 px-6 rounded shadow-lg transform transition-all duration-300 hover:from-dark-brown hover:to-brown hover:scale-105 hover:shadow-xl">
                            หลักการทำงาน
                        </a>
                        <a href="/mbti-test" className="font-bold btn bg-gradient-to-r from-et-brown to-et-yellow-green text-white py-3 px-6 rounded shadow-lg transform transition-all duration-300 hover:from-dark-brown hover:to-brown hover:scale-105 hover:shadow-xl">
                            ทำแบบทดสอบ
                        </a>
                    </div>
                </section>

                <section className="animation-section mb-12">
                    <div className="animation-container flex justify-center items-center gap-10">
                        <div className="mbti-icon transition-transform duration-300 hover:scale-125">
                            <FontAwesomeIcon icon={faSearch} size="6x" className="text-et-brown animate-spin-slow" />
                        </div>
                        <div className="mbti-icon transition-transform duration-300 hover:scale-125">
                            <FontAwesomeIcon icon={faLightbulb} size="6x" className="text-et-light-orange animate-pulse" />
                        </div>
                        <div className="mbti-icon transition-transform duration-300 hover:scale-125">
                            <FontAwesomeIcon icon={faUser} size="6x" className="text-dark-brown" />
                        </div>
                        <div className="mbti-icon transition-transform duration-300 hover:scale-125">
                            <FontAwesomeIcon icon={faStar} size="6x" className="text-et-yellow-green" />
                        </div>
                    </div>
                </section>

                <section className="highlight-section mb-12">
                    <h2 className="text-4xl font-semibold text-dark-brown mb-6">ทำไมต้องรับการทดสอบ?</h2>
                    <div className="highlight-container grid grid-cols-1 md:grid-cols-3 gap-6">
                        <div className="highlight-card p-6 bg-white rounded-lg shadow-lg transform transition-transform duration-300 hover:scale-105 hover:shadow-xl">
                            <FontAwesomeIcon icon={faLightbulb} size="4x" className="text-et-light-orange mb-4 mx-auto" />
                            <h3 className="text-2xl font-bold text-dark-brown">เข้าใจตัวตนของเรามากขึ้น</h3>
                            <p className="text-gray-600">MBTI เป็นเครื่องมือที่ดีในการช่วยทำให้คุณมีความตระหนักรู้ภายในตนเอง (self-awareness) ซึ่งจะช่วยทำให้คุณได้รู้จักตัวเองมากขึ้น </p>
                        </div>
                        <div className="highlight-card p-6 bg-white rounded-lg shadow-lg transform transition-transform duration-300 hover:scale-105 hover:shadow-xl">
                            <FontAwesomeIcon icon={faStar} size="4x" className="text-et-yellow-green mb-4 mx-auto" />
                            <h3 className="text-2xl font-bold text-dark-brown">ช่วยในการทำงานร่วมกันอย่างมีประสิทธิภาพ</h3>
                            <p className="text-gray-600">การเรียนรู้เรื่อง MBTI สามารถช่วยทำให้แต่ละคนเข้าใจสไตล์การทำงานที่แตกต่างกัน</p>
                        </div>
                        <div className="highlight-card p-6 bg-white rounded-lg shadow-lg transform transition-transform duration-300 hover:scale-105 hover:shadow-xl">
                            <FontAwesomeIcon icon={faUser} size="4x" className="text-et-brown mb-4 mx-auto" />
                            <h3 className="text-2xl font-bold text-dark-brown">ช่วยในการตัดสินใจสิ่งต่างๆ</h3>
                            <p className="text-gray-600">การรู้จัก type ที่แม่นยำของตัวเองสามารถช่วยทำให้เรามองเห็นภาพรวมอย่างรอบด้านที่เกี่ยวกับตัวเอง</p>
                        </div>
                    </div>
                </section>

                <section className="youtube-section mb-12">
    <h2 className="text-4xl font-semibold text-dark-brown mb-6">ดูวิดีโอแนะนำการใช้งานเว็บไซด์ของเรา</h2>
    <div className="youtube-container flex justify-center">
        <iframe
            width="560"
            height="315"
            src="https://www.youtube.com/embed/43Vlz3sR-Fo"
            title="YouTube video player"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
            className="rounded-lg shadow-lg transform transition-transform duration-300 hover:scale-105"
        ></iframe>
    </div>
</section>


                <section className="testimonial-section mb-12">
                    <h2 className="text-4xl font-semibold text-dark-brown mb-6">ความคิดเห็นจากผู้ใช้</h2>
                    <div className="testimonial-container grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                        <div className="testimonial-card p-6 bg-white rounded-lg shadow-lg">
                            <p className="text-gray-600 mb-4">"MBTI ช่วยให้ฉันเข้าใจตัวเองและเพื่อนร่วมงานได้ดีขึ้นมาก!"</p>
                            <h4 className="text-xl font-bold text-dark-brown">- นายอั๋นคนกาฬสินธุ์ อรัญ ภูธาตุแร่</h4>
                        </div>
                        <div className="testimonial-card p-6 bg-white rounded-lg shadow-lg">
                            <p className="text-gray-600 mb-4">"การทำแบบทดสอบนี้เป็นประสบการณ์ที่น่าสนใจและมีประโยชน์"</p>
                            <h4 className="text-xl font-bold text-dark-brown">- เฮียจิน</h4>
                        </div>
                        <div className="testimonial-card p-6 bg-white rounded-lg shadow-lg">
                            <p className="text-gray-600 mb-4">"ฉันสามารถใช้ผลลัพธ์ MBTI ในการพัฒนาตัวเองและการทำงานได้จริง"</p>
                            <h4 className="text-xl font-bold text-dark-brown">- เสี่ยโป้</h4>
                        </div>
                    </div>
                </section>
            </main>
            <footer>
                <Footer/>
            </footer>
        </div>
    );

}

export default App;
