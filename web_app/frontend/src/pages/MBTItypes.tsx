import Navbar from '../components/Navbar';

function MBTItypes() {
    return (
    <div className="font-IBM">
        <meta name="viewport" content="width=device-width, initial-scale=1.0"></meta>
        
        <div className='text-5xl font-bold p-8 h-1/4 text-et-brown'>Personality Types</div>

        <div className="flex justify-center">
            <a href="/MBTItest" className='rounded-md text-xl font-bold p-2 text-et-brown bg-et-pale-pink text-center hover:text-et-dark-green hover:bg-et-sage-green hover:cursor-pointer'>
                ทำแบบทดสอบ
            </a>
        </div>

        <div className="relative h-56 flex justify-center flex-row text-8xl text-et-light-gray font-bold hover:cursor-pointer">
            <div className='basis-1/8 p-4 rounded-md hover:text-et-green-blue group'>
                I
                <div className="absolute gap-x-4 hidden w-1/2 group-hover:flex flex-row bottom-0 left-1/2 transform -translate-x-1/2 p-4 text-base rounded-md font-normal">
                    <div className="basis-1/2">
                        <div className="font-bold text-2xl">I - introverts</div>
                        <div>บุคคลกล้าแสดงออกชอบพบปะผู้คน</div>
                    </div>
                    <div className="basis-1/2">
                        <div className="font-bold text-2xl">E - extroverts</div>
                        <div>บุคคลชอบอยู่คนเดียว โลกส่วนตัวสูง</div>
                    </div>
                </div>
            </div>
            <div className='basis-1/8 p-4 rounded-md hover:text-et-gray-blue group'>
                N
                <div className="absolute gap-x-4 hidden w-1/2 group-hover:flex flex-row bottom-0 left-1/2 transform -translate-x-1/2 p-4 text-base rounded-md font-normal">
                    <div className="basis-1/2">
                        <div className="font-bold text-2xl">N - intuitives</div>
                        <div>รับรู้ด้วยสัญชาตญาณ ความรู้สึก ความคิดสร้างสรรค์ที่คาดเดาอนาคต</div>
                    </div>
                    <div className="basis-1/2">
                        <div className="font-bold text-2xl">S - sensors</div>
                        <div>รับรู้ด้วยประสาทสัมผัสทั้ง 5 อยู่ในโลกแห่งความจริง ไม่เพ้อฝัน</div>
                    </div>
                </div>

            </div>
            <div className='basis-1/8 p-4 rounded-md hover:text-et-dark-purple group'>
                T
                <div className="absolute gap-x-4 hidden w-1/2 group-hover:flex flex-row bottom-0 left-1/2 transform -translate-x-1/2 p-4 text-base rounded-md font-normal">
                    <div className="basis-1/2">
                        <div className="font-bold text-2xl">T - thinkers</div>
                        <div>ใช้ตรรกะ สมเหตุสมผล ในการตัดสินใจ</div>
                    </div>
                    <div className="basis-1/2">
                        <div className="font-bold text-2xl">F - feelers</div>
                        <div>ใช้ความรู้สึกในการตัดสินใจ</div>
                    </div>
                </div>
            </div>
            <div className='basis-1/8 p-4 rounded-md hover:text-et-pink group'>
                J
                <div className="absolute gap-x-4 hidden w-1/2 group-hover:flex flex-row bottom-0 left-1/2 transform -translate-x-1/2 p-4 text-base rounded-md font-normal">
                    <div className="basis-1/2">
                        <div className="font-bold text-2xl">J - judgers</div>
                        <div>มีระบบการจัดแจง ทำตามแผนที่วางเอาไว้</div>
                    </div>
                    <div className="basis-1/2">
                        <div className="font-bold text-2xl">P - perceivers</div>
                        <div>ไม่ยึดติดกับแบบแผนใช้ความยืดหยุ่นทางความคิด</div>
                    </div>
                </div>
            </div>
        </div>


        <div className="h-screen mt-8">
            <div className='h-1/2 bg-et-lavender rounded-md mb-4'>
                <div className='text-5xl font-bold text-white p-8 h-1/4'>นักวิเคราะห์</div>
                <div className="flex justify-center flex-row h-3/4">
                    <div className='flex flex-col basis-1/5 p-4 m-4 rounded-md border-solid border border-white'>
                        <div className='flex basis-3/4 justify-center items-center'>
                            <div className='text-7xl text-white font-bold'>INTJ</div>
                        </div>
                        <div className='basis-1/4'>จินตนาการสูงและเป็นนักคิดกลยุทธ์ที่มีแผนการสำหรับทุกอย่าง</div>
                    </div>
                    <div className='flex flex-col basis-1/5 p-4 m-4 rounded-md border-solid border border-white'>
                        <div className='flex basis-3/4 justify-center items-center'>
                            <div className='text-7xl text-white font-bold'>INTP</div>
                        </div>
                        <div className='basis-1/4'>นักคิดค้นนวัตกรรมที่มีความกระหายความรู้อย่างไม่มีที่สิ้นสุด</div>
                    </div>
                    <div className='flex flex-col basis-1/5 p-4 m-4 rounded-md border-solid border border-white'>
                        <div className='flex basis-3/4 justify-center items-center'>
                            <div className='text-7xl text-white font-bold'>ENTJ</div>
                        </div>
                        <div className='basis-1/4'>กล้าหาญ มีจิตนาการ และเป็นผู้นำเด็ดเดี่ยว มักหาทางออกหรือสร้างทางออกขึ้นมาได้เสมอ</div>
                    </div>
                    <div className='flex flex-col basis-1/5 p-4 m-4 rounded-md border-solid border border-white'>
                        <div className='flex basis-3/4 justify-center items-center'>
                            <div className='text-7xl text-white font-bold'>ENTP</div>
                        </div>
                        <div className='basis-1/4'>ฉลาดและเป็นนักคิดที่ช่างสงสัย ชอบสิ่งที่มาท้าท้ายสติปัญญาของตัวเอง</div>
                    </div>
                </div>
            </div>
            <div className='h-1/2 bg-et-sage-green rounded-md mb-4'>
                <div className='text-5xl font-bold text-white p-8 h-1/4'>นักการฑูต</div>
                <div className="flex justify-center flex-row h-3/4">
                    <div className='flex flex-col basis-1/5 p-4 m-4 rounded-md border-solid border border-white'>
                        <div className='flex basis-3/4 justify-center items-center'>
                            <div className='text-7xl text-white font-bold'>INFJ</div>
                        </div>
                        <div className='basis-1/4'>เป็นคนเงียบ ๆ และดูลึกลับ แต่มักสร้างแรงบันดาลใจและยึดมั่นในอุดมการณ์อย่างไม่ย่อท้อ</div>
                    </div>
                    <div className='flex flex-col basis-1/5 p-4 m-4 rounded-md border-solid border border-white'>
                        <div className='flex basis-3/4 justify-center items-center'>
                            <div className='text-7xl text-white font-bold'>INFP</div>
                        </div>
                        <div className='basis-1/4'>นักกวี ใจดี และเห็นใจผู้อื่น มีความกระตือรือร้นที่จะช่วยเหลือเพื่อสร้างสิ่งดี ๆ ให้กับสังคม</div>
                    </div>
                    <div className='flex flex-col basis-1/5 p-4 m-4 rounded-md border-solid border border-white'>
                        <div className='flex basis-3/4 justify-center items-center'>
                            <div className='text-7xl text-white font-bold'>ENFJ</div>
                        </div>
                        <div className='basis-1/4'>มีเสน่ห์และเป็นผู้นำที่มักสร้างแรงบันดาลใจ สามารถจับใจผู้ฟังได้เสมอ</div>
                    </div>
                    <div className='flex flex-col basis-1/5 p-4 m-4 rounded-md border-solid border border-white'>
                        <div className='flex basis-3/4 justify-center items-center'>
                            <div className='text-7xl text-white font-bold'>ENFP</div>
                        </div>
                        <div className='basis-1/4'>มีความกระตือรือร้น มีความคิดสร้างสรรค์ และมีมนุษย์สัมพันธ์ที่ดี เป็นคนที่สามารถหาเหตุผลให้ยิ้มได้เสมอ</div>
                    </div>
                </div>
            </div>

            <div className='h-1/2 bg-et-light-blue rounded-md mb-4'>
                <div className='text-5xl font-bold text-white p-8 h-1/4'>ผู้พิทักษ์ปกป้อง</div>
                <div className="flex justify-center flex-row h-3/4">
                    <div className='flex flex-col basis-1/5 p-4 m-4 rounded-md border-solid border border-white'>
                        <div className='flex basis-3/4 justify-center items-center'>
                            <div className='text-7xl text-white font-bold'>ISTJ</div>
                        </div>
                        <div className='basis-1/4'>อยู่กับความเป็นจริง และเป็นคนชอบเสาะหาข้อเท็จจริง ไม่ยอมให้มีข้อสงสัยเหลืออยู่</div>
                    </div>
                    <div className='flex flex-col basis-1/5 p-4 m-4 rounded-md border-solid border border-white'>
                        <div className='flex basis-3/4 justify-center items-center'>
                            <div className='text-7xl text-white font-bold'>ISFJ</div>
                        </div>
                        <div className='basis-1/4'>มีความละเอียดอ่อน และเป็นผู้ปกป้องที่ดี มักพร้อมที่จะปกป้องคนที่รักเสมอ</div>
                    </div>
                    <div className='flex flex-col basis-1/5 p-4 m-4 rounded-md border-solid border border-white'>
                        <div className='flex basis-3/4 justify-center items-center'>
                            <div className='text-7xl text-white font-bold'>ESTJ</div>
                        </div>
                        <div className='basis-1/4'>เป็นนักบริหารที่ดี มีความโดดเด่นเรื่องการบริหารเรื่องต่าง ๆ หรือบุคคลากร</div>
                    </div>
                    <div className='flex flex-col basis-1/5 p-4 m-4 rounded-md border-solid border border-white'>
                        <div className='flex basis-3/4 justify-center items-center'>
                            <div className='text-7xl text-white font-bold'>ESFJ</div>
                        </div>
                        <div className='basis-1/4'>ฉลาดและเป็นนักคิดที่ช่างสงสัย ชอบสิ่งที่มาท้าท้ายสติปัญญาของตัวเอง</div>
                    </div>
                </div>
            </div>    
            <div className='h-1/2 bg-et-yellow rounded-md mb-4'>
                <div className='text-5xl font-bold text-white p-8 h-1/4'>นักสำรวจ</div>
                <div className="flex justify-center flex-row h-3/4">
                    <div className='flex flex-col basis-1/5 p-4 m-4 rounded-md border-solid border border-white'>
                        <div className='flex basis-3/4 justify-center items-center'>
                            <div className='text-7xl text-white font-bold'>ISTP</div>
                        </div>
                        <div className='basis-1/4'>กล้าหาญและเป็นนักทดลองที่อยู่บนพื้นฐานความเป็นจริง เก่งกาจในการใช้เครื่องมือทุกชนิด</div>
                    </div>
                    <div className='flex flex-col basis-1/5 p-4 m-4 rounded-md border-solid border border-white'>
                        <div className='flex basis-3/4 justify-center items-center'>
                            <div className='text-7xl text-white font-bold'>ISFP</div>
                        </div>
                        <div className='basis-1/4'>มีความยืดหยุ่นสูง และเป็นศิลปินทรงเสน่ห์ มักพร้อมสำรวจและทดลองสิ่งใหม่ ๆ อยู่เสมอ</div>
                    </div>
                    <div className='flex flex-col basis-1/5 p-4 m-4 rounded-md border-solid border border-white'>
                        <div className='flex basis-3/4 justify-center items-center'>
                            <div className='text-7xl text-white font-bold'>ESTP</div>
                        </div>
                        <div className='basis-1/4'>ฉลาด กระฉับกระเฉง และเข้าใจผู้อื่นได้เป็นอย่างดี มีความสุขกับการใช้ชีวิตแบบสุดโต่ง</div>
                    </div>
                    <div className='flex flex-col basis-1/5 p-4 m-4 rounded-md border-solid border border-white'>
                        <div className='flex basis-3/4 justify-center items-center'>
                            <div className='text-7xl text-white font-bold'>ESFP</div>
                        </div>
                        <div className='basis-1/4'>ใช้สัญชาตญาณ กระฉับกระเฉง และกระตือรือร้น และผู้คนรอบข้างจะไม่มีวันเบื่อเมื่ออยู่กับพวกเขา</div>
                    </div>
                </div>
            </div>
        </div>
    </div>
    )
}

export default MBTItypes
