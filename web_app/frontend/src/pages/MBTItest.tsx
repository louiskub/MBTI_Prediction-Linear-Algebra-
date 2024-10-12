import Navbar from '../components/Navbar';
import { Link } from 'react-router-dom';
import { useState } from 'react';

function MBTItest() {
    const [name, setName] = useState('');
    const [age, setAge] = useState<number | ''>('');
    const [gender, setGender] = useState('');
    const [education, setEducation] = useState<number | ''>('');
    const [interest, setInterest] = useState('');

    const questions = [
        "คุณรู้สึกสบายใจในการพบปะผู้คนใหม่ ๆ", //Introversion Score
        "คุณมักจะวางแผนก่อนลงมือทำเสมอ", //Judging Score
        "คุณให้ความสำคัญกับข้อเท็จจริงมากกว่าความรู้สึก", //Thinking Score
        "คุณไม่สนใจที่จะพูดคุยเกี่ยวกับทฤษฎีว่าโลกจะเป็นไปอย่างไรในอนาคต", //Sensing Score
        "คุณสนุกกับการมีส่วนร่วมในกิจกรรมที่ทำเป็นทีม", //Introversion Score
        "คุณถูกอารมณ์ควบคุม มากกว่าที่คุณจะควบคุมอารมณ์ของตัวเอง", //Thinking Score
        "คุณปรับเปลี่ยนรูปแบบการทำงานตามสถานการณ์อยู่เสมอ", //Judging Score
        "คุณสนใจการแสดงออกด้านความคิดสร้างสรรค์ในรูปแบบต่าง ๆ เช่น การเขียน", //Sensing Score
        "คุณรู้สึกอึดอัดเมื่ออยู่ในสังคมที่ไม่คุ้นเคย", //Introversion Score
        "คุณเบื่อหรือเลิกสนใจเมื่อการพูดคุยหันเหเข้าเรื่องทฤษฎีมากเกินไป", //Thinking Score
        "คุณมักกังวลว่าสิ่งต่าง ๆ จะเลวร้ายลงไปอีก", //Sensing Score
        "คุณชอบทำงานให้เสร็จก่อนที่จะปล่อยให้ตัวเองได้ผ่อนคลาย" //Judging Score
    ];
    const questionOptions = [0, 1, 2, 3, 4]
    const [selectedValues, setSelectedValues] = useState(Array(12).fill(null));

    const nameChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setName(event.target.value);
    };
    const ageChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        const value = event.target.value;
        setAge(value === '' ? '' : Number(value));
    };
    const educationChange = (event: React.ChangeEvent<HTMLSelectElement>)  => {
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

    return (
        <div>
            <Navbar/>
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
                        <option value="0">มัธยมปลายหรือเทียบเท่า</option>
                        <option value="1">ปริญญาตรี</option>
                        <option value="1">ปริญญาโท</option>
                        <option value="1">ปริญญาเอก</option>
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
                    <Link to="/" className="rounded-md text-xl font-bold p-2 text-et-brown bg-et-pale-pink text-center hover:text-et-dark-green hover:bg-et-sage-green hover:cursor-pointer">
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
    )
}

export default MBTItest;