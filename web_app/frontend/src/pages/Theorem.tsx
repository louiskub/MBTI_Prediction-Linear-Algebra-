import Navbar from "../components/Navbar";

// const gender = "/corr_img/gender/";
// const interest = "/corr_img/interest/";
// const mbti = "/corr_img/mbti/";

function Theorem() {
    return (       
        <div className="flex justify-center">
            <Navbar />
            <div className="flex flex-col justify-center pt-16 text-center font-IBM w-[80vw]">
                <h1 className="p-16 text-5xl font-bold">Theorem</h1>
                
                {/* Pearson Part */}
                <div className="">
                    <h2 className="text-3xl font-bold"> Pearson Similarity </h2>
                    <img src="https://cdn1.byjus.com/wp-content/uploads/2019/06/word-image28.png" alt="" />
                    <div>
                        ใช้หลักการหาค่าเฉลี่ยเวคเตอร์ของ MBTI แต่ละประเภท ซึ่งจะทำให้ได้ Vector อ้างอิงของ MBTI แต่ละตัวมา
                    </div>
                    <div>
                        เมื่อได้ Vector อ้างอิงของ MBTI แต่ละตัวแล้ว กุเอามันมาหา Cosine กับ Pearson Similarity ระหว่าง Vector 2 ตัว
                    </div>
                    <div>
                        
                    </div>
                </div>

            </div>
            {/* <h1 className="text-9xl pt-16">Theorem</h1>
            
            <img src={gender+"Male.png"} alt="" /> */}
        </div>
    );
}


export default Theorem;
