import Navbar from '../components/Navbar';
import { Link } from 'react-router-dom';
import { useState } from 'react';
import axios from 'axios';

function MBTItest() {

    interface InputData {
        age: number;
        gender: string;
        education: number;
        intro: number;
        sensing: number;
        thinking: number;
        judging: number;
        interest: string;
    }

    interface MBTIs {
        [key: string]: [string, string, string];
    }

    const [name, setName] = useState('');
    const [age, setAge] = useState<number | ''>('');
    const [gender, setGender] = useState('');
    const [education, setEducation] = useState<number | ''>('');
    const [interest, setInterest] = useState('');
    const [selectedValues, setSelectedValues] = useState(Array(12).fill(null));

    const questions = [
        "คุณรู้สึกสบายใจในการพบปะผู้คนใหม่ ๆ", 
        "คุณมักจะวางแผนก่อนลงมือทำเสมอ", 
        "คุณให้ความสำคัญกับข้อเท็จจริงมากกว่าความรู้สึก", 
        "คุณไม่สนใจที่จะพูดคุยเกี่ยวกับทฤษฎีว่าโลกจะเป็นไปอย่างไรในอนาคต", 
        "คุณสนุกกับการมีส่วนร่วมในกิจกรรมที่ทำเป็นทีม", 
        "คุณถูกอารมณ์ควบคุม มากกว่าที่คุณจะควบคุมอารมณ์ของตัวเอง", 
        "คุณปรับเปลี่ยนรูปแบบการทำงานตามสถานการณ์อยู่เสมอ", 
        "คุณสนใจการแสดงออกด้านความคิดสร้างสรรค์ในรูปแบบต่าง ๆ เช่น การเขียน", 
        "คุณรู้สึกอึดอัดเมื่ออยู่ในสังคมที่ไม่คุ้นเคย", 
        "คุณเบื่อหรือเลิกสนใจเมื่อการพูดคุยหันเหเข้าเรื่องทฤษฎีมากเกินไป", 
        "คุณมักกังวลว่าสิ่งต่าง ๆ จะเลวร้ายลงไปอีก", 
        "คุณชอบทำงานให้เสร็จก่อนที่จะปล่อยให้ตัวเองได้ผ่อนคลาย"
    ];

    const mbtis: MBTIs = {
        INTJ: ["นักวิเคราะห์ (INTJ, INTP, ENTJ, ENTP)", "ผู้มีเหตุผล", "จินตนาการสูงและเป็นนักคิดกลยุทธ์ที่มีแผนการสำหรับทุกอย่าง"],
        INTP: ["นักวิเคราะห์ (INTJ, INTP, ENTJ, ENTP)", "นักตรรกะ", "นักคิดค้นนวัตกรรมที่มีความกระหายความรู้อย่างไม่มีที่สิ้นสุด"],
        ENTJ: ["นักวิเคราะห์ (INTJ, INTP, ENTJ, ENTP)", "ผู้บัญชาการ", "กล้าหาญ มีจิตนาการ และเป็นผู้นำเด็ดเดี่ยว มักหาทางออกหรือสร้างทางออกขึ้นมาได้เสมอ"],
        ENTP: ["นักวิเคราะห์ (INTJ, INTP, ENTJ, ENTP)", "นักโต้วาที", "ฉลาดและเป็นนักคิดที่ช่างสงสัย ชอบสิ่งที่มาท้าท้ายสติปัญญาของตัวเอง"],
        INFJ: ["นักการฑูต (INFJ, INFP, ENFJ, ENFP)", "ผู้สนับสนุน", "เป็นคนเงียบ ๆ และดูลึกลับ แต่มักสร้างแรงบันดาลใจและยึดมั่นในอุดมการณ์อย่างไม่ย่อท้อ"],
        INFP: ["นักการฑูต (INFJ, INFP, ENFJ, ENFP)", "ผู้ไกล่เกลี่ย", "นักกวี ใจดี และเห็นใจผู้อื่น มีความกระตือรือร้นที่จะช่วยเหลือเพื่อสร้างสิ่งดี ๆ ให้กับสังคม"],
        ENFJ: ["นักการฑูต (INFJ, INFP, ENFJ, ENFP)", "ผู้เป็นตัวเอก", "มีเสน่ห์และเป็นผู้นำที่มักสร้างแรงบันดาลใจ สามารถจับใจผู้ฟังได้เสมอ"],
        ENFP: ["นักการฑูต (INFJ, INFP, ENFJ, ENFP)", "นักรณรงค์", "มีความกระตือรือร้น มีความคิดสร้างสรรค์ และมีมนุษย์สัมพันธ์ที่ดี เป็นคนที่สามารถหาเหตุผลให้ยิ้มได้เสมอ"],
        ISTJ: ["ผู้พิทักษ์ปกป้อง (ISTJ, ISFJ, ESTJ, ESFJ)", "นักคำนวณ", "อยู่กับความเป็นจริง และเป็นคนชอบเสาะหาข้อเท็จจริง ไม่ยอมให้มีข้อสงสัยเหลืออยู่"],
        ISFJ: ["ผู้พิทักษ์ปกป้อง (ISTJ, ISFJ, ESTJ, ESFJ)", "ผู้พิทักษ์", "มีความละเอียดอ่อน และเป็นผู้ปกป้องที่ดี มักพร้อมที่จะปกป้องคนที่รักเสมอ"],
        ESTJ: ["ผู้พิทักษ์ปกป้อง (ISTJ, ISFJ, ESTJ, ESFJ)", "ผู้บริหาร", "เป็นนักบริหารที่ดี มีความโดดเด่นเรื่องการบริหารเรื่องต่าง ๆ หรือบุคคลากร"],
        ESFJ: ["ผู้พิทักษ์ปกป้อง (ISTJ, ISFJ, ESTJ, ESFJ)", "ผู้ให้คำปรึกษา", "มีความเป็นห่วงเป็นใยมากเป็นพิเศษ มีมนุษย์สัมพันธ์และเป็นที่รักของผู้คน มักกระตือรือร้นเสนอความช่วยเหลือผู้อื่น"],
        ISTP: ["นักสำรวจ (ISTP, ISFP, ESTP, ESFP)", "ผู้มีความสามารถโดดเด่น", "กล้าหาญและเป็นนักทดลองที่อยู่บนพื้นฐานความเป็นจริง เก่งกาจในการใช้เครื่องมือทุกชนิด"],
        ISFP: ["นักสำรวจ (ISTP, ISFP, ESTP, ESFP)", "นักผจญภัย", "มีความยืดหยุ่นสูง และเป็นศิลปินทรงเสน่ห์ มักพร้อมสำรวจและทดลองสิ่งใหม่ ๆ อยู่เสมอ"],
        ESTP: ["นักสำรวจ (ISTP, ISFP, ESTP, ESFP)", "ผู้ประกอบการ", "ฉลาด กระฉับกระเฉง และเข้าใจผู้อื่นได้เป็นอย่างดี มีความสุขกับการใช้ชีวิตแบบสุดโต่ง"],
        ESFP: ["นักสำรวจ (ISTP, ISFP, ESTP, ESFP)", "ผู้มอบความบันเทิง", "ใช้สัญชาตญาณ กระฉับกระเฉง และกระตือรือร้น และผู้คนรอบข้างจะไม่มีวันเบื่อเมื่ออยู่กับพวกเขา"]
    };
    
    const questionOptions = [0, 1, 2, 3, 4];

    const nameChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setName(event.target.value);
    };

    const ageChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        const value = event.target.value;
        setAge(value === "" ? "" : Number(value));
    };

    const educationChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
        const value = event.target.value;
        setEducation(value === "" ? "" : Number(value));
    };

    const interestChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
        setInterest(event.target.value);
    };

    const questionChange = (questionIndex: number, value: number) => {
        const newValues = [...selectedValues];
        newValues[questionIndex] = value;
        setSelectedValues(newValues);
    };

    const checkComplete = () => {
        return name && age !== "" && gender && education !== "" && interest && !selectedValues.includes(null);
    };
    
    const checkAge = () => {
        return typeof age === "number" && age >= 0;
    }

    const [MBTI, setMBTI] = useState<[number, string][]>([]);
    const handleSubmit = async () => {
        if (!checkComplete()) {
            alert("กรุณากรอกข้อมูลให้ครบก่อนส่งแบบทดสอบ");
            return;
        }
        if (!checkAge()){
            alert("กรุณากรอกอายุให้ถูกต้อง");
            return;
        }


        const data: InputData = {
            "age": age as number,
            "gender": gender,
            "education": typeof education === "number" && education > 1 ? 1 : 0,
            "intro": parseFloat((selectedValues[0]) + (selectedValues[4]) + (4 - (selectedValues[8])) * 10 / 12.0),
            "sensing": parseFloat((selectedValues[3]) + (4 - (selectedValues[7])) + (4 - (selectedValues[10])) * 10 / 12.0),
            "thinking": parseFloat((selectedValues[2]) + (4 - (selectedValues[5])) + (4 - (selectedValues[9])) * 10 / 12.0),
            "judging": parseFloat((selectedValues[1]) + (4 - (selectedValues[6])) + (selectedValues[11]) * 10 / 12.0),
            "interest": interest
        }

        try {
            console.log(data)
            const response = await axios.post("http://localhost:8000/mbti-test", data);
            setMBTI(response.data)
        } catch (error) {
            console.error("Error :", error);
        }
    };

    return (
        <div>
            <Navbar />
            <div className="flex flex-col justify-center items-center pt-16">
                <h1 className="text-3xl font-bold">แบบทดสอบ MBTI</h1>
                <h1 className="text-xl mt-6 font-bold">ข้อมูลส่วนตัว</h1>
                <div className="flex justify-center items-center p-4">
                    <p className="font-bold mr-4">ชื่อ</p>
                    <input 
                        value={name} 
                        onChange={nameChange}
                        className="border border-gray-300 p-2 rounded"
                        placeholder="เขียนชื่อของคุณ"
                    />
                </div>
                <div className="flex justify-center items-center p-4">
                    <p className="font-bold mr-4">อายุ</p>
                    <input 
                        value={age} 
                        onChange={ageChange}
                        className="border border-gray-300 p-2 rounded"
                        placeholder="เลือกอายุของคุณ"
                        type="number"
                        min="0"
                    />
                </div>
                <div className="flex justify-center items-center p-4">
                    <p className="font-bold mr-4">เพศ</p>
                    <button 
                        onClick={() => setGender("Male")} 
                        className={`border border-gray-300 w-20 p-2 rounded mr-2 ${gender === "Male" ? 'bg-et-gray-blue text-white' : 'bg-white'}`}
                    >
                        ชาย
                    </button>
                    <button 
                        onClick={() => setGender("Female")} 
                        className={`border border-gray-300 w-20 p-2 rounded ${gender === "Female" ? 'bg-et-pink text-white' : 'bg-white'}`}
                    >
                        หญิง
                    </button>
                </div>
                <div className="flex justify-center items-center p-4">
                    <p className="font-bold mr-4">ระดับการศึกษา</p>
                    <select 
                        value={education} 
                        onChange={educationChange}
                        className="border border-gray-300 p-2 rounded"
                    >
                        <option value="">เลือกระดับการศึกษา</option>
                        <option value="0">ต่ำกว่ามัธยมปลาย</option>
                        <option value="1">มัธยมปลายหรือเทียบเท่า</option>
                        <option value="2">ปริญญาตรี</option>
                        <option value="3">ปริญญาโท</option>
                        <option value="4">ปริญญาเอก</option>
                    </select>
                </div>
                <div className="flex justify-center items-center p-4">
                    <p className="font-bold mr-4">ความสนใจ</p>
                    <select 
                        value={interest} 
                        onChange={interestChange}
                        className="border border-gray-300 p-2 rounded"
                    >
                        <option value="">เลือกความสนใจ</option>
                        <option value="Unknown">ไม่มีความสนใจเป็นพิเศษ</option>
                        <option value="Arts">ศิลปะ</option>
                        <option value="Technology">เทคโนโลยี</option>
                        <option value="Sports">กีฬา</option>
                        <option value="Others">อื่นๆ</option>
                    </select>
                </div>
            </div>
            <h1 className="flex flex-col items-center text-xl mt-6 mb-8 font-bold">ข้อความเหล่านี้ตรงกับตัวคุณหรือไม่</h1>
            <div className="flex flex-col space-y-8">
                {questions.map((question, questionIndex) => (
                    <div key={questionIndex} className="flex flex-col items-center p-4">
                        <h2 className="text-xl mb-4">{question}</h2>
                        <div className="flex space-x-4 items-center">
                            <p>ไม่เห็นด้วย</p>
                            {questionOptions.map((option) => (
                                <label key={option} className="flex items-center space-x-2">
                                    <input
                                        type="radio"
                                        value={option}
                                        checked={selectedValues[questionIndex] === option}
                                        onChange={() => questionChange(questionIndex, option)}
                                        className="form-radio h-6 w-6 accent-et-green"
                                    />
                                    <span></span>
                                </label>
                            ))}
                            <p>เห็นด้วย</p>
                        </div>
                    </div>
                ))}
            </div>
            <div className="flex justify-center m-8">
                <button
                    onClick={handleSubmit}
                    className="rounded-md text-xl font-bold p-2 text-et-brown bg-et-pale-pink text-center hover:text-et-dark-green hover:bg-et-sage-green hover:cursor-pointer"
                >
                    ส่งแบบทดสอบ ➜
                </button>
            </div>
            {MBTI.length > 0 ? (
                <div>
                    <div className="max-w-xl mx-auto p-4 bg-et-lavender rounded-lg shadow-md mb-8 hover:cursor-pointer">
                        <h1 className="text-2xl font-bold text-center mb-4">
                            {`ประเภท MBTI ของคุณคือ:`}
                        </h1>
                        <p className="text-8xl font-bold text-gray-700 text-center mb-2">{MBTI[0][1]}</p>
                        <p className="text-lg text-gray-700 text-center mb-2">
                            {`(${mbtis[MBTI[0][1]][1]})`}
                        </p>
                        <p className="text-base text-gray-500 text-center mb-8">
                            {mbtis[MBTI[0][1]][2]}
                        </p>
                        <p className="text-lg text-gray-600 text-center mb-4">
                            {`อยู่ในกลุ่มของ ${mbtis[MBTI[0][1]][0]}`}
                        </p>
                    </div>
                    <table className="table-auto w-1/4 mx-auto border border-gray-300 mb-8">
                        <thead>
                        <tr className="bg-et-gray-blue text-center text-white">
                            <th className="px-4 py-2 border border-gray-300 w-1/4">MBTI Type</th>
                            <th className="px-4 py-2 border border-gray-300">Pearson Similarity</th>
                        </tr>
                        </thead>
                        <tbody>
                            {MBTI.map((item, index) => {
                                const backgroundColor = index === 0 ? "bg-yellow-300" : ""
                                const backgroundHoverColor = index === 0 ? "hover:bg-yellow-200" : "hover:bg-gray-200"

                                return (
                                <tr key={index} className={`${backgroundColor} ${backgroundHoverColor}`}>
                                    <td className="px-4 py-2 border border-gray-300 text-center font-bold">{item[1]}</td>
                                    <td className="px-4 py-2 border border-gray-300 text-center">{item[0]}</td>
                                </tr>
                                );
                            })}
                        </tbody>
                    </table>
                </div>
                ) : (
                <div>
                    <div className="max-w-xl mx-auto p-4 bg-et-lavender rounded-lg shadow-md mb-7">
                        <h1 className="text-2xl font-bold text-center mb-4">
                            {`ประเภท MBTI ของคุณคือ:`}
                        </h1>
                        <p className="text-8xl font-bold text-gray-700 text-center mb-2">?</p>
                    </div>
                </div>
            )}
        </div>
    );
}

export default MBTItest;
