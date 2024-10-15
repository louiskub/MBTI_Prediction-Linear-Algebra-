import Navbar from '../components/Navbar';
import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { useState } from 'react';
import axios from 'axios';
import MBTIChart from '../components/chart';
import Cookies from 'js-cookie';

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
        "คุณสนใจการแสดงออกด้านความคิดสร้างสรรค์ในรูปแบบต่าง ๆ เช่น 'งานศิลปะ'", 
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

    const nameChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        const value = event.target.value;
        setName(value);
        Cookies.set('name', value, { expires: 7 });
    };

    const ageChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        const value = event.target.value;
        const ageValue = value === "" ? "" : Number(value);
        setAge(ageValue);
        Cookies.set('age', ageValue, { expires: 7 });
    };

    const setGenderMale = () => {
        setGender("Male");
        Cookies.set('gender', "Male", { expires: 7 });
    };
    
    const setGenderFemale = () => {
        setGender("Female");
        Cookies.set('gender', "Female", { expires: 7 });
    };

    const educationChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
        const value = event.target.value;
        setEducation(value === "" ? "" : Number(value));
        Cookies.set('education', value, { expires: 7 });
    };

    const interestChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
        const value = event.target.value;
        setInterest(value);
        Cookies.set('interest', value, { expires: 7 });
    };

    const questionChange = (questionIndex: number, value: number) => {
        const newValues = [...selectedValues];
        newValues[questionIndex] = value;
        setSelectedValues(newValues);
        Cookies.set(`question_${questionIndex}`, value, { expires: 7 });
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
            Cookies.set('MBTIResult', JSON.stringify(response.data), { expires: 7 });
        } catch (error) {
            console.error("Error :", error);
        }
    };

    useEffect(() => {

        const mbtiCookie = Cookies.get('MBTIResult');
        if (mbtiCookie) {
            setMBTI(JSON.parse(mbtiCookie));
        }

        const nameCookie = Cookies.get('name');
        if (nameCookie) {
            setName(nameCookie);
        }

        const ageCookie = Cookies.get('age');
        if (ageCookie) {
            setAge(Number(ageCookie));
        }

        const genderCookie = Cookies.get('gender');
        if (genderCookie) {
            setGender(genderCookie);
        }

        const educationCookie = Cookies.get('education');
        if (educationCookie) {
            setEducation(Number(educationCookie));
        }

        const interestCookie = Cookies.get('interest');
        if (interestCookie) {
            setInterest(interestCookie);
        }

        const initialSelectedValues = [...selectedValues];
        questions.forEach((_, index) => {
            const answer = Cookies.get(`question_${index}`);
            if (answer !== undefined) {
                initialSelectedValues[index] = Number(answer);
            }
        });
        
        setSelectedValues(initialSelectedValues);
    }, []);

    const resetAnswers = () => {
        const newValues = Array(12).fill(null);
        setSelectedValues(newValues);
    
        setName('');
        setAge('');
        setGender('');
        setEducation('');
        setInterest('');
        setMBTI([]);

        Cookies.remove('name');
        Cookies.remove('age');
        Cookies.remove('gender');
        Cookies.remove('education');
        Cookies.remove('interest');
        Cookies.remove('MBTIResult');
    
        questions.forEach((_, index) => {
            Cookies.remove(`question_${index}`);
        });
    };

    return (
        <div className='font-IBM bg-[#f7ebeb]'>
            <Navbar/>
            <div className="flex flex-col justify-center items-center pt-16">
                <h1 className='max-[400px]:text-4xl text-5xl sm:text-6xl font-bold p-16 text-et-brown text-center'>
                    แบบทดสอบ MBTI
                </h1>
                <button
                    onClick={resetAnswers}
                    className="rounded-md text-xl font-bold p-2 text-white bg-red-500 hover:bg-red-700 transition-transform transform hover:scale-105 hover:cursor-pointer shadow-sm mb-4"
                >
                    รีเซ็ตคำตอบ
                </button>
                <div className='bg-white w-5/6 sm:w-2/3 lg:w-[440px] max-w-[440px] rounded-md pt-4 pb-10 shadow-sm transition-transform hover:scale-105'>
                <h1 className="text-2xl font-bold p-4 text-et-olive-brown text-center">ข้อมูลส่วนตัว</h1>
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
                            onClick={() => setGenderMale()} 
                            className={`border border-gray-300 w-1/3 p-2 rounded-md mr-1 transition-transform transform hover:border-et-gray-blue hover:border-2 ${gender === "Male" ? 'bg-et-gray-blue text-white' : 'bg-white text-gray-400'}`}
                        >
                            ชาย
                        </button>
                        <button 
                            onClick={() => setGenderFemale()} 
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
                            <option value="1">มัธยมปลายหรือเทียบเท่า</option>
                            <option value="2">ปริญญาตรี</option>
                            <option value="3">ปริญญาโท</option>
                            <option value="4">ปริญญาเอก</option>
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
                <div className="flex flex-col space-y-4 bg-white w-3/4 rounded-md pt-10 pb-10 shadow-sm min-w-[340px]">
                <h1 className="text-xl sm:text-2xl font-bold p-4 text-et-olive-brown text-center">ข้อความเหล่านี้ตรงกับตัวคุณหรือไม่</h1>
                    {questions.map((question, questionIndex) => (
                        <div key={questionIndex} id={`question${questionIndex}`} className="flex flex-col items-center p-4 border-t border-et-pale-pink text-center">
                            <h2 className="text-base md:text-lg mb-4 mt-4">{question}</h2>
                            <div className="flex space-x-4 items-center">
                                <p className='text-sm sm:text-base text-red-300 font-medium'>ไม่เห็นด้วย</p>
                                <label key={0} className="flex items-center">
                                    <input
                                    type="radio"
                                    value={0}
                                    checked={selectedValues[questionIndex] === 0}
                                    onChange={() => questionChange(questionIndex, 0)}
                                    className="hidden peer"
                                    />
                                    <div className="h-10 w-10 rounded-full border-2 text-white border-red-300 hover:cursor-pointer hover:bg-red-300 text-center align-middle peer-checked:before:content-['✓'] peer-checked:bg-red-300 leading-10 transition-all duration-300"></div>
                                </label>
                                <label key={1} className="flex items-center">
                                    <input
                                    type="radio"
                                    value={1}
                                    checked={selectedValues[questionIndex] === 1}
                                    onChange={() => questionChange(questionIndex, 1)}
                                    className="hidden peer"
                                    />
                                    <div className="h-8 w-8 rounded-full border-2 text-white border-red-300 hover:cursor-pointer hover:bg-red-300 text-center align-middle peer-checked:before:content-['✓'] peer-checked:bg-red-300 leading-8 transition-all duration-300"></div>
                                </label>
                                <label key={2} className="flex items-center">
                                    <input
                                    type="radio"
                                    value={2}
                                    checked={selectedValues[questionIndex] === 2}
                                    onChange={() => questionChange(questionIndex, 2)}
                                    className="hidden peer"
                                    />
                                    <div className="h-7 w-7 rounded-full border-2 text-white border-gray-300 hover:cursor-pointer hover:bg-gray-300 text-center align-middle peer-checked:before:content-['✓'] peer-checked:bg-gray-300 leading-7 transition-all duration-300"></div>
                                </label>

                                <label key={3} className="flex items-center">
                                    <input
                                        type="radio"
                                        value={3}
                                        checked={selectedValues[questionIndex] === 3}
                                        onChange={() => questionChange(questionIndex, 3)}
                                        className="hidden peer"
                                    />
                                    <div className="h-8 w-8 rounded-full border-2 text-white border-et-light-green hover:cursor-pointer hover:bg-et-light-green text-center align-middle peer-checked:before:content-['✓'] peer-checked:bg-et-light-green leading-8 transition-all duration-300"></div>
                                </label>

                                <label key={4} className="flex items-center">
                                    <input
                                    type="radio"
                                    value={4}
                                    checked={selectedValues[questionIndex] === 4}
                                    onChange={() => questionChange(questionIndex, 4)}
                                    className="hidden peer"
                                    />
                                    <div className="h-10 w-10 rounded-full border-2 text-white border-et-light-green hover:cursor-pointer hover:bg-et-light-green text-center align-middle peer-checked:before:content-['✓'] peer-checked:bg-et-light-green leading-10 transition-all duration-300"></div>
                                </label>
                                
                                <p className='text-sm sm:text-base text-et-light-green font-medium'>เห็นด้วย</p>
                            </div>
                        </div>
                    ))}
                </div>
                <div className="flex justify-center m-8">
                    <button
                        onClick={handleSubmit}
                        className="flex justify-center items-center rounded-md text-xl font-bold p-2 text-white bg-et-purple-gray text-center 
                        transition-transform transform hover:scale-105 
                        hover:text-et-olive-brown hover:bg-et-gray hover:cursor-pointer shadow-sm mb-4"
                    >
                        ส่งแบบทดสอบ ➜
                    </button>
                </div>
                {MBTI.length > 0 ? (
                    <div className='mb-8'>
                        <div className='flex items-center bg-et-pink p-4 rounded-lg shadow-md mb-8 m-2'>
                            <div className="max-w-xl mx-auto p-4 bg-et-pink rounded-lg ml-2 mr-2 hover:cursor-pointer border-dashed border-4 border-et-pale-pink">
                                <h1 className="text-2xl font-semibold text-center mb-4 text-white">
                                    {`MBTI ของคุณคือ:`}
                                </h1>
                                <p className="text-8xl font-bold text-et-olive-brown text-center mb-2">{MBTI[0][1]}</p>
                                <p className="text-lg text-et-olive-brown font-semibold text-center mb-2">
                                    {`- ${mbtis[MBTI[0][1]][1]} -`}
                                </p>
                                <p className="text-lg text-et-brown text-center mb-8">
                                    {mbtis[MBTI[0][1]][2]}
                                </p>
                                <p className="text-lg text-white text-center mb-4">
                                    {`อยู่ในกลุ่มของ ${mbtis[MBTI[0][1]][0]}`}
                                </p>
                            </div>
                        </div>
                        <div className="max-w-full mx-auto p-4 bg-et-light-blue rounded-lg ml-2 mr-2 border-dashed border-4 border-white">
                            <h1 className="text-center text-xl min-[410px]:text-2xl font-bold mt-6 mb-4 text-et-dark-blue">MBTI ที่ใกล้เคียงกับคุณมากที่สุด</h1>
                            <MBTIChart MBTI={MBTI} />
                            <table className="table-auto w-1/4 mx-auto border border-gray-300 mb-8">
                                <thead>
                                <tr className="bg-et-gray-blue text-center text-white">
                                    <th className="px-4 py-2 border border-gray-300 w-1/4">MBTI Type</th>
                                    <th className="px-4 py-2 border border-gray-300">Pearson Similarity</th>
                                </tr>
                                </thead>
                                <tbody className="bg-gray-50">
                                    {MBTI.map((item, index) => {
                                        const top = index === 0 ? "bg-et-yellow hover:bg-yellow-200 font-bold" : "hover:bg-gray-200"
                                        return (
                                        <tr key={index} className={`${top}`}>
                                            <td className="px-4 py-2 border border-gray-300 text-center font-bold">{item[1]}</td>
                                            <td className="px-4 py-2 border border-gray-300 text-center">{item[0]}</td>
                                        </tr>
                                        );
                                    })}
                                </tbody>
                            </table>
                            <div className="flex justify-center">
                                <Link
                                    to="/mbti-types"
                                    className="flex justify-center items-center rounded-md text-xl font-bold p-2 text-white bg-et-dark-blue text-center 
                                            transition-transform transform hover:scale-105 
                                            hover:text-white hover:bg-et-gray-blue hover:cursor-pointer shadow-sm mb-8 w-1/2"
                                >
                                    ดูประเภท MBTI เพิ่มเติม ➜
                                </Link>
                            </div>
                        </div>
                    </div>
                    ) : (
                    <div className='flex items-center bg-et-pink p-4 rounded-lg shadow-md mb-8 m-2 hover:scale-105'>
                        <div className="max-w-xl mx-auto p-4 bg-et-pink rounded-lg border-dashed border-4 border-et-pale-pink">
                            <h1 className="text-2xl font-semibold text-center mb-4 text-white">
                                {`MBTI ของคุณคือ:`}
                            </h1>
                            <p className="text-8xl font-bold text-white text-center mb-2">?</p>
                        </div>
                    </div>
                    )
                }
            </div>
            <footer className="p-4 bg-et-gray-brown text-cream-50 text-center">
                © 2024 MBTI Project. สถาบันเทคโนโลยีพระจอมเกล้าเจ้าคุณทหารลาดกระบัง.
            </footer>
        </div>
    )
}

export default MBTItest;