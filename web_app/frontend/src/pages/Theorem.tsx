import Navbar from "../components/Navbar";
import Footer from '../components/Footer';
import CorrSelect from "../components/CorrSelect";
import cov_img from "../assets/covariance_formular_orachat.png";
import corr_form from "../assets/corr_form.png"
import TestButton from '../components/testButton';
import bgImage from '/src/assets/bg.png';

function Theorem() {
    return (       
        <div className="flex flex-col justify-center bg-et-pale-pink bg-fixed bg-cover" style={{ backgroundImage: `url(${bgImage})` }}>
            <header>
                <Navbar bgColor="et-pink"/>
            </header>
            <main className="mt-6 text-center p-5 pt-10 pb-20 justify-center min-h-screen font-IBM w-[80vw]'">
                <h1 className='text-6xl sm:text-7xl md:text-7xl font-bold p-16 text-et-brown text-center'>
                    Theorem
                </h1>

                {/* Pearson */}
                <div className="flex flex-row flex-wrap max-w-full justify-center">
                    <section className="md:w-[40%] sm:w-[80%] p-6 m-4 bg-white transition-transform transform hover:scale-105 hover:shadow-xl rounded-md flex flex-col justify-between items-center shadow-lg">
                        <h2 className="text-3xl font-bold text-gray-700">Covariance</h2>
                        <img src={cov_img} className="mx-auto block" />
                        <div className="text-gray-700 leading-relaxed mt-4">
                            Covariance เป็นการวัดว่าตัวแปรสองตัวเปลี่ยนแปลงไปในทิศทางเดียวกันอย่างไร มันสามารถมีค่าเป็นบวกหรือลบ และบอกถึงทิศทางของความสัมพันธ์
                        </div>
                    </section>

                    <section className="md:w-[40%] sm:w-[80%] p-6 m-4 bg-white transition-transform transform hover:scale-105 hover:shadow-xl rounded-md flex flex-col justify-between items-center shadow-lg">
                        <h2 className="text-3xl font-bold text-gray-700">Correlation</h2>
                        <img src={corr_form} 
                        className="mx-auto block rounded-md" />
                        <div className="text-gray-700 leading-relaxed mt-4">
                            เป็นการวัดทั้งความแข็งแกร่งและทิศทางของความสัมพันธ์เชิงเส้นระหว่างตัวแปรสองตัว เป็นรูปแบบที่ได้มาตรฐานของ Covariance ซึ่งทำให้มันมีค่าอยู่ในช่วงระหว่าง -1 ถึง +1
                        </div>
                    </section>

                    <section className="md:w-[40%] sm:w-[80%] p-6 m-4 bg-white transition-transform transform hover:scale-105 hover:shadow-xl rounded-md flex flex-col justify-between items-center shadow-lg">
                        <h2 className="text-3xl font-bold text-gray-700">Pearson Similarity</h2>
                        <img src="https://cdn1.byjus.com/wp-content/uploads/2019/06/word-image28.png" 
                        className="mx-auto block rounded-md 00" />
                        <div className="text-gray-700 leading-relaxed mt-4">
                            <li>ใช้หลักการหาค่าเฉลี่ยเวคเตอร์ของ MBTI แต่ละประเภท ซึ่งจะทำให้ได้ Vector อ้างอิงของ MBTI แต่ละตัวมา</li>
                            <li>เมื่อได้ Vector อ้างอิงของ MBTI แต่ละตัวแล้วจึงนำมา Pearson Similarity ระหว่าง Vector อ้างอิงของ MBTI ทุกตัวเทียบกับ Input Vector 
                                แล้วแสดงคู่ที่มีค่า Pearson Similarity มากที่สุด</li>
                        </div>
                    </section>

                    <section className="md:w-[40%] sm:w-[80%] p-6 m-4 bg-white transition-transform transform hover:scale-105 hover:shadow-xl rounded-md flex flex-col justify-between items-center shadow-lg">
                        <h2 className="text-3xl font-bold text-gray-700">Covariance VS Correlation</h2>
                        {/* <div className="text-gray-700 leading-relaxed mt-4">
                            <li>Covariance บอกถึงทิศทางของความสัมพันธ์ แต่ไม่สามารถระบุความแข็งแกร่งของความสัมพันธ์ได้ชัดเจน เพราะไม่มีขีดจำกัดที่แน่นอน</li>
                            <li>Correlation เป็นการวัดที่ได้มาตรฐาน ทำให้เราสามารถระบุทั้งทิศทางและความแข็งแกร่งของความสัมพันธ์ได้อย่างชัดเจน</li>
                        </div> */}
                        <table className="text-left hover:border-collapse border-slate-400 rounded-md">
                            <tr className="text-center">
                                
                                <th className="p-2">Covariance</th>
                                <th className="p-2">Correlation</th>
                            </tr>
                            <tr>
                                <td className="p-2">
                                    บอกถึงทิศทางของความสัมพันธ์ แต่ไม่สามารถระบุความแข็งแกร่งของความสัมพันธ์ได้ชัดเจน เพราะไม่มีขีดจำกัดที่แน่นอน
                                </td>
                                <td className="p-2">
                                    เป็นการวัดที่ได้มาตรฐาน ทำให้เราสามารถระบุทั้งทิศทางและความแข็งแกร่งของความสัมพันธ์ได้อย่างชัดเจน
                                </td>
                            </tr>
                            
                        </table>

                        <div>
                            ดังนั้นทางกลุ่มจึงเลือกใช้ Correlation เป็นหลักในการหาความสัมพันธ์ เนื่องจากสามารถระบุทั้งทิศทางและความแข็งแกร่งของความสัมพันธ์ได้อย่างชัดเจน
                        </div>
                    </section>
                </div>

                {/* Correlation Part */}
                
                <div className="flex justify-center mb-6">
                    <CorrSelect />
                </div> 
                <TestButton text='ทำแบบทดสอบ'/>
            </main>
            <footer>
                <Footer bgColor='bg-et-light-orange'/>
            </footer>
            
        </div>
    );
}

export default Theorem;
