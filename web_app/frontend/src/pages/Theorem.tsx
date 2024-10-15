import Navbar from "../components/Navbar";
import CorrSelect from "../components/CorrSelect";
import cov_img from "../assets/covariance_formular_orachat.png"



function Theorem() {
    return (       
        <div className="flex flex-col justify-center bg-et-light-gray bg-fixed bg-cover">
            <header>
                <Navbar />
            </header>
            <main className="mt-6 text-center p-10 justify-center">
                {/* Pearson */}
                <div className="flex flex-row flex-wrap max-w-full justify-center">
                    <section className="w-[40%] p-4 m-4 bg-white transition-transform transform hover:scale-105 rounded-md">
                        <h2 className="text-3xl font-bold"> Pearson Similarity </h2>
                        <img src="https://cdn1.byjus.com/wp-content/uploads/2019/06/word-image28.png" 
                        className="mx-auto block" />
                        <li>
                            ใช้หลักการหาค่าเฉลี่ยเวคเตอร์ของ MBTI แต่ละประเภท ซึ่งจะทำให้ได้ Vector อ้างอิงของ MBTI แต่ละตัวมา
                        </li>
                        <li>
                            เมื่อได้ Vector อ้างอิงของ MBTI แต่ละตัวแล้ว กุเอามันมาหา Cosine กับ Pearson Similarity ระหว่าง Vector 2 ตัว
                        </li>
                    </section>

                    <section className="w-[40%] p-4 m-4 bg-white transition-transform transform hover:scale-105 rounded-md">
                        <h2 className="text-3xl font-bold"> Covariance </h2>
                        <img src={cov_img} 
                        className="mx-auto block" />
                        <div>
                            Covariance เป็นการวัดว่าตัวแปรสองตัวเปลี่ยนแปลงไปในทิศทางเดียวกันอย่างไร มันสามารถมีค่าเป็นบวกหรือลบ และบอกถึงทิศทางของความสัมพันธ์
                        </div>
                    </section>







                    
                    
                </div>
                
                
                
            </main>

            {/* Correlation Part */}
            <footer>
                <CorrSelect/>
            </footer>
            
        </div>
    );
}


export default Theorem;
