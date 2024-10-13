import Navbar from '../components/Navbar';
import { Link } from 'react-router-dom';
import { useState } from 'react';
import axios from 'axios';

function MBTItest() {
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
    
    const questionOptions = [0, 1, 2, 3, 4];

    const nameChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setName(event.target.value);
    };

    const ageChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        const value = event.target.value;
        setAge(value === '' ? '' : Number(value));
    };

    const educationChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
        const value = event.target.value;
        setEducation(value === '' ? '' : Number(value));
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
        return name && age && gender && education !== '' && interest && !selectedValues.includes(null);
    };

    const [MBTI, setMBTI] = useState<string[]>([]);
    const handleSubmit = async () => {
        // if (!checkComplete()) {
        //     alert("กรุณากรอกข้อมูลให้ครบก่อนส่งแบบทดสอบ");
        //     return;
        // }

        const data = {
            // "age": age,
            // "gender": gender,
            // "education": education,
            // "intro": parseFloat((selectedValues[0]) + (selectedValues[4]) + (4 - (selectedValues[8])) * 10 / 12.0),
            // "sensing": parseFloat((selectedValues[3]) + (4 - (selectedValues[7])) + (4 - (selectedValues[10])) * 10 / 12.0),
            // "thinking": parseFloat((selectedValues[2]) + (4 - (selectedValues[5])) + (4 - (selectedValues[9])) * 10 / 12.0),
            // "judging": parseFloat((selectedValues[1]) + (4 - (selectedValues[6])) + (selectedValues[11]) * 10 / 12.0),
            // "interest": interest
            "age": 20,
            "gender": "Male",
            "education": 0,
            "intro": 1,
            "sensing": 1,
            "thinking": 1,
            "judging": 2,
            "interest": "Sports"
        }

        try {
            console.log(data)
            const response = await axios.post("http://localhost:8000/mbti-test", data);
            console.log(response.data);
            setMBTI(response.data)
        } catch (error) {
            console.error("Error :", error);
        }
    };

    return (
        <div className='font-IBM bg-et-light-gray'>
            <Navbar/>
            <div className="flex flex-col justify-center items-center pt-16">
            <h1 className='text-5xl sm:text-6xl md:text-6xl font-bold p-16 text-et-brown'>
                แบบทดสอบ MBTI
            </h1>
            <div className='bg-white w-[30%] rounded-md pt-4 pb-10 shadow-sm'>
            <h1 className="text-xl sm:text-2xl md:text-2xl font-bold p-4 text-et-olive-brown text-center">ข้อมูลส่วนตัว</h1>
                <div className="flex flex-col justify-center items-center p-2">
                    <p className="text-sm md:text-base text-et-brown w-2/3 ml-2 font-medium">ชื่อ</p>
                    <input
                        value={name} 
                        onChange={nameChange}
                        className="border border-gray-300 p-2 rounded-md w-2/3"
                        placeholder="เขียนชื่อของคุณ"
                    />
                </div>
                <div className="flex flex-col justify-center items-center p-2">
                    <p className="text-sm md:text-base text-et-brown w-2/3 ml-2 font-medium">อายุ</p>
                    <input 
                        value={age} 
                        onChange={ageChange}
                        className="border border-gray-300 p-2 rounded-md w-2/3"
                        placeholder="เลือกอายุของคุณ"
                        type="number"
                        min="0"
                    />
                </div>
                <div className="flex flex-col justify-center items-center p-2">
                    <p className="text-sm md:text-base text-et-brown w-2/3 ml-2 font-medium">เพศ</p>
                    <div className='flex justify-center w-full'>
                    <button 
                        onClick={() => setGender("Male")} 
                        className={`border border-gray-300 w-1/3 p-2 rounded-md mr-1 transition-transform transform hover:border-et-gray-blue hover:border-2 ${gender === "Male" ? 'bg-et-gray-blue text-white' : 'bg-white text-gray-400'}`}
                    >
                        ชาย
                    </button>
                    <button 
                        onClick={() => setGender("Female")} 
                        className={`border border-gray-300 w-1/3 p-2 rounded-md transition-transform transform hover:border-et-pink hover:border-2 ${gender === "Female" ? 'bg-et-pink text-white' : 'bg-white text-gray-400'}`}
                    >
                        หญิง
                    </button>
                    </div>
                </div>
                <div className="flex flex-col justify-center items-center p-2">
                    <p className="text-sm md:text-base text-et-brown w-2/3 ml-2 font-medium">ระดับการศึกษา</p>
                    <select 
                        value={education} 
                        onChange={educationChange}
                        className="border border-gray-300 p-2 rounded-md w-2/3 text-gray-400 focus:border-et-gray-brown focus:border-2 hover:cursor-pointer"
                    >
                        <option value="">เลือกระดับการศึกษา</option>
                        <option value="0">ต่ำกว่ามัธยมปลาย</option>
                        <option value="0">มัธยมปลายหรือเทียบเท่า</option>
                        <option value="1">ปริญญาตรี</option>
                        <option value="1">ปริญญาโท</option>
                        <option value="1">ปริญญาเอก</option>
                    </select>
                </div>
                <div className="flex flex-col justify-center items-center p-2">
                    <p className="text-sm md:text-base text-et-brown w-2/3 ml-2 font-medium">ความสนใจ</p>
                    <select 
                        value={interest} 
                        onChange={interestChange}
                        className="border border-gray-300 p-2 rounded-md w-2/3 text-gray-400 focus:border-2 focus:border-et-gray-brown hover:cursor-pointer"
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
                
            </div>
            <div className="flex flex-col justify-center items-center pt-16">
            <div className="flex flex-col space-y-8 bg-white w-3/4 rounded-md pt-10 pb-10 shadow-sm">
            <h1 className="text-xl sm:text-2xl md:text-2xl font-bold p-4 text-et-olive-brown text-center">ข้อความเหล่านี้ตรงกับตัวคุณหรือไม่</h1>
                {questions.map((question, questionIndex) => (
                    <div key={questionIndex} className="flex flex-col items-center p-4 border-t">
                        <h2 className="text-xl mb-4 mt-4">{question}</h2>
                        <div className="flex space-x-4 items-center">
                            <p>ไม่เห็นด้วย</p>
                            <label key={0} className="flex items-center space-x-2">
                                <input
                                type="radio"
                                value={0}
                                checked={selectedValues[questionIndex] === 0}
                                onChange={() => questionChange(questionIndex, 0)}
                                className="hidden peer"
                                />
                                <div className="h-10 w-10 rounded-full border-2 border-gray-300 peer-checked:bg-et-green"></div>
                            </label>
                            <label key={1} className="flex items-center space-x-2">
                                <input
                                type="radio"
                                value={1}
                                checked={selectedValues[questionIndex] === 1}
                                onChange={() => questionChange(questionIndex, 1)}
                                className="hidden peer"
                                />
                                <div className="h-8 w-8 rounded-full border-2 border-gray-300 peer-checked:bg-et-green"></div>
                            </label>
                            <label key={2} className="flex items-center space-x-2">
                                <input
                                type="radio"
                                value={2}
                                checked={selectedValues[questionIndex] === 2}
                                onChange={() => questionChange(questionIndex, 2)}
                                className="hidden peer"
                                />
                                <div className="h-7 w-7 rounded-full border-2 border-gray-300 peer-checked:bg-et-green"></div>
                            </label>
                            <label key={3} className="flex items-center space-x-2">
                                <input
                                    type="radio"
                                    value={3}
                                    checked={selectedValues[questionIndex] === 3}
                                    onChange={() => questionChange(questionIndex, 3)}
                                    className="hidden peer"
                                />
                                <div className="h-8 w-8 rounded-full border-2 border-gray-300 peer-checked:bg-et-green"></div>
                            </label>
                            <label key={4} className="flex items-center space-x-2">
                                <input
                                type="radio"
                                value={4}
                                checked={selectedValues[questionIndex] === 4}
                                onChange={() => questionChange(questionIndex, 4)}
                                className="hidden peer"
                                />
                                <div className="h-10 w-10 rounded-full border-2 border-gray-300 peer-checked:bg-et-green"></div>
                            </label>
                            
                            <p>เห็นด้วย</p>
                        </div>
                    </div>
                ))}
            </div>
            </div>
            <p>Name : {name}</p>
            <p>Age : {age}</p>
            <p>Gender : {gender}</p>
            <p>Education : {education}</p>
            <p>Introversion Score : {((selectedValues[0] + selectedValues[4] + (4 - selectedValues[8])) * 10 / 12.0).toFixed(4)}</p>
            <p>Sensing Score : {((selectedValues[3] + (4 - selectedValues[7]) + (4 - selectedValues[10])) * 10 / 12.0).toFixed(4)}</p>
            <p>Thinking Score : {((selectedValues[2] + (4 - selectedValues[5]) + (4 - selectedValues[9])) * 10 / 12.0).toFixed(4)}</p>
            <p>Judging Score : {((selectedValues[1] + (4 - selectedValues[6]) + selectedValues[11]) * 10 / 12.0).toFixed(4)}</p>
            <p>Interest : {interest}</p>
            {checkComplete() ? (
                <div className="flex justify-center mb-24">
                    <Link to="/" className="flex justify-center items-center rounded-md text-xl font-bold p-2 text-et-brown bg-et-pale-pink text-center 
                        transition-transform transform hover:scale-105 
                        hover:text-et-dark-green hover:bg-et-sage-green hover:cursor-pointer shadow-sm">
                        ส่งแบบทดสอบ ➜
                    </Link>
                </div>
            ) : (
                <div className="flex justify-center mb-24">
                    <button
                        onClick={() => {
                            if (!checkComplete()) {
                                alert("กรุณากรอกข้อมูลให้ครบก่อนส่งแบบทดสอบ");
                            }
                        }}
                        className="rounded-md text-xl font-bold p-2 text-et-brown bg-et-pale-pink text-center hover:text-et-dark-green hover:bg-et-sage-green hover:cursor-pointer"
                    >
                        ส่งแบบทดสอบ ➜
                    </button>
                </div>
            )}
        </div>
    );
}

export default MBTItest;
