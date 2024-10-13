import React, { useEffect, useState } from 'react';

const LetterPairSwitch: React.FC = () => {
    const letterPairs = [
        ['I', 'E'],
        ['N', 'S'],
        ['T', 'F'],
        ['J', 'P'],
    ];

    const [currentIndices, setCurrentIndices] = useState([0, 0, 0, 0]);

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentIndices(prevIndices => 
                prevIndices.map(index => (index + 1) % 2)
            );
        }, 1000);

        return () => clearInterval(interval);
    }, []);

    return (
        <div className="relative h-56 flex justify-center flex-row text-7xl sm:text-8xl text-et-light-skin font-bold mt-8 bg-white border-2 border-et-light-gray rounded-md hover:cursor-pointer transition-transform transform hover:scale-105">
            <div className='basis-1/8 p-4 rounded-md hover:text-et-green-blue group'>
                {letterPairs[0][currentIndices[0]]}
                <div className="absolute gap-x-4 hidden group-hover:flex flex-row bottom-0 w-5/6 left-1/2 pb-4 transform -translate-x-1/2 text-base rounded-md font-normal">
                    <div className="basis-1/2">
                        <div className="font-bold text-lg sm:text-xl md:text-2xl">I - introverts</div>
                        <div className='text-xs md:text-base'>บุคคลชอบอยู่คนเดียว โลกส่วนตัวสูง</div>
                    </div>
                    <div className="basis-1/2">
                        <div className="font-bold text-lg sm:text-xl md:text-2xl">E - extroverts</div>
                        <div className='text-sm md:text-base'>บุคคลกล้าแสดงออกชอบพบปะผู้คน</div>
                    </div>
                </div>
            </div>
            <div className='basis-1/8 p-4 rounded-md hover:text-et-gray-blue group'>
                {letterPairs[1][currentIndices[1]]}
                <div className="absolute gap-x-4 hidden group-hover:flex flex-row bottom-0 w-5/6 left-1/2 pb-4 transform -translate-x-1/2 text-base rounded-md font-normal">
                    <div className="basis-1/2">
                        <div className="font-bold text-lg sm:text-xl md:text-2xl">N - intuitives</div>
                        <div className='text-xs md:text-base'>รับรู้ด้วยสัญชาตญาณ ความรู้สึก ความคิดสร้างสรรค์ที่คาดเดาอนาคต</div>
                    </div>
                    <div className="basis-1/2">
                        <div className="font-bold text-lg sm:text-xl md:text-2xl">S - sensors</div>
                        <div className='text-xs md:text-base'>รับรู้ด้วยประสาทสัมผัสทั้ง 5 อยู่ในโลกแห่งความจริง ไม่เพ้อฝัน</div>
                    </div>
                </div>
            </div>
            <div className='basis-1/8 p-4 rounded-md hover:text-et-dark-purple group'>
                {letterPairs[2][currentIndices[2]]}
                <div className="absolute gap-x-4 hidden group-hover:flex flex-row bottom-0 w-5/6 left-1/2 pb-4 transform -translate-x-1/2 text-base rounded-md font-normal">
                    <div className="basis-1/2">
                        <div className="font-bold text-lg sm:text-xl md:text-2xl">T - thinkers</div>
                        <div className='text-xs md:text-base'>ใช้ตรรกะ สมเหตุสมผล ในการตัดสินใจ</div>
                    </div>
                    <div className="basis-1/2">
                        <div className="font-bold text-lg sm:text-xl md:text-2xl">F - feelers</div>
                        <div className='text-xs md:text-base'>ใช้ความรู้สึกในการตัดสินใจ</div>
                    </div>
                </div>
            </div>
            <div className='basis-1/8 p-4 rounded-md hover:text-et-pink group'>
                {letterPairs[3][currentIndices[3]]}
                <div className="absolute gap-x-4 hidden group-hover:flex flex-row bottom-0 w-5/6 left-1/2 pb-4 transform -translate-x-1/2 text-base rounded-md font-normal">
                    <div className="basis-1/2">
                        <div className="font-bold text-lg sm:text-xl md:text-2xl">J - judgers</div>
                        <div className='text-xs md:text-base'>มีระบบการจัดแจง ทำตามแผนที่วางเอาไว้</div>
                    </div>
                    <div className="basis-1/2">
                        <div className="font-bold text-lg sm:text-xl md:text-2xl">P - perceivers</div>
                        <div className='text-xs md:text-base'>ไม่ยึดติดกับแบบแผนใช้ความยืดหยุ่นทางความคิด</div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default LetterPairSwitch;
