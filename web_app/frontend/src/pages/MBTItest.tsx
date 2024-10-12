import Navbar from '../components/Navbar';
import { Link } from 'react-router-dom';
import { useState } from 'react';
import Question from '../components/Question';

function MBTItest() {
    const [name, setName] = useState('');
    const [age, setAge] = useState<number | ''>('');
    const [gender, setGender] = useState('');
    const [education, setEducation] = useState<number | ''>('');
    const [interest, setInterest] = useState('');

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

    return (
        <div>
            <Navbar/>
            <div className="flex flex-col justify-center items-center pt-16">
                <h1 className="text-3xl font-bold">MBTI Test</h1>
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
                <p>{name},{age},{gender},{education},{interest}</p>
            </div>
            <div className="flex justify-center">
                <Link to="/" className="rounded-md text-xl font-bold p-2 text-et-brown bg-et-pale-pink text-center hover:text-et-dark-green hover:bg-et-sage-green hover:cursor-pointer">
                    ส่งแบบทดสอบ ➜
                </Link>
            </div>
        </div>
    )
}

export default MBTItest;