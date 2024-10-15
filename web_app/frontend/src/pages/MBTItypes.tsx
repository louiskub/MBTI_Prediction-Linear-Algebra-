import Navbar from '../components/Navbar';
import TestButton from '../components/testButton';
import LetterDescriptionSwitch from '../components/LetterSwitch';
import bgImage from '/src/assets/bg.png';


function MBTItypes() {
    return (
    <div className='bg-et-light-gray bg-repeat-y bg-fit bg-fixed' style={{ backgroundImage: `url(${bgImage})` }}>
        <Navbar bgColor='bg-et-pink'/>
        <div className='flex flex-col justify-center pt-16 text-center font-IBM w-[80vw] ml-auto mr-auto'>
            <h1 className='text-6xl sm:text-7xl md:text-7xl font-bold p-16 text-et-olive-brown text-center animate-pulse select-none'>
                Personality Types
            </h1>
            <TestButton text='ทำแบบทดสอบ'/>
            <LetterDescriptionSwitch />

            <div className="mt-8">

                <div className='bg-et-lavender rounded-md mb-4 min-h-[400px] shadow-md'>
                    <div className='text-white pt-8 h-1/4 text-[42px] sm:text-6xl md:text-7xl lg:text-7xl font-bold'>นักวิเคราะห์</div>
                    <div className="flex justify-center max-w-full sm:flex-row flex-col h-3/4">
                        <div className='flex flex-col p-4 m-4 rounded-md border-solid border border-white sm:w-1/5 sm:min-h-[250px]'>
                            <div className='flex basis-3/4 justify-center items-center'>
                                <div className='text-6xl sm:text-5xl md:text-6xl text-white font-bold'>INTJ</div>
                            </div>
                            <div className='basis-1/4 text-lg sm:text-sm md-base lg:text-lg font-semibold text-black'>ผู้มีเหตุผล</div>
                            <div className='basis-1/4 text-base sm:text-xs md:text-sm lg:text-base text-black'>จินตนาการสูงและเป็นนักคิดกลยุทธ์ที่มีแผนการสำหรับทุกอย่าง</div>
                        </div>
                        <div className='flex flex-col p-4 m-4 rounded-md border-solid border border-white sm:w-1/5 sm:min-h-[250px]'>
                            <div className='flex basis-3/4 justify-center items-center'>
                                <div className='text-6xl sm:text-5xl md:text-6xl text-white font-bold'>INTP</div>
                            </div>
                            <div className='basis-1/4 text-lg sm:text-sm md-base lg:text-lg font-semibold text-black'>นักตรรกะ</div>
                            <div className='basis-1/4 text-base sm:text-xs md:text-sm lg:text-base text-black'>นักคิดค้นนวัตกรรมที่มีความกระหายความรู้อย่างไม่มีที่สิ้นสุด</div>
                        </div>
                        <div className='flex flex-col p-4 m-4 rounded-md border-solid border border-white sm:w-1/5 sm:min-h-[250px]'>
                            <div className='flex basis-3/4 justify-center items-center'>
                                <div className='text-6xl sm:text-5xl md:text-6xl text-white font-bold'>ENTJ</div>
                            </div>
                            <div className='basis-1/4 text-lg sm:text-sm md-base lg:text-lg font-semibold text-black'>ผู้บัญชาการ</div>
                            <div className='basis-1/4 text-base sm:text-xs md:text-sm lg:text-base text-black'>กล้าหาญ มีจิตนาการ และเป็นผู้นำเด็ดเดี่ยว มักหาทางออกหรือสร้างทางออกขึ้นมาได้เสมอ</div>
                        </div>
                        <div className='flex flex-col p-4 m-4 rounded-md border-solid border border-white sm:w-1/5 sm:min-h-[250px]'>
                            <div className='flex basis-3/4 justify-center items-center'>
                                <div className='text-6xl sm:text-5xl md:text-6xl text-white font-bold'>ENTP</div>
                            </div>
                            <div className='basis-1/4 text-lg sm:text-sm md-base lg:text-lg font-semibold text-black'>นักโต้วาที</div>
                            <div className='basis-1/4 text-base sm:text-xs md:text-sm lg:text-base text-black'>ฉลาดและเป็นนักคิดที่ช่างสงสัย ชอบสิ่งที่มาท้าท้ายสติปัญญาของตัวเอง</div>
                        </div>
                    </div>
                </div>

                <div className='bg-et-sage-green rounded-md mb-4 min-h-[400px] shadow-md'>
                    <div className='text-white pt-8 h-1/4 text-[42px] sm:text-6xl md:text-7xl lg:text-7xl font-bold'>นักการฑูต</div>
                    <div className="flex justify-center max-w-full sm:flex-row flex-col h-3/4">
                        <div className='flex flex-col p-4 m-4 rounded-md border-solid border border-white sm:w-1/5 sm:min-h-[250px]'>
                            <div className='flex basis-3/4 justify-center items-center'>
                                <div className='text-6xl sm:text-5xl md:text-6xl text-white font-bold'>INFJ</div>
                            </div>
                            <div className='basis-1/4 text-lg sm:text-sm md-base lg:text-lg font-semibold'>ผู้สนับสนุน</div>
                            <div className='basis-1/4 text-base sm:text-xs md:text-sm lg:text-base'>เป็นคนเงียบ ๆ และดูลึกลับ แต่มักสร้างแรงบันดาลใจและยึดมั่นในอุดมการณ์อย่างไม่ย่อท้อ</div>
                        </div>
                        <div className='flex flex-col p-4 m-4 rounded-md border-solid border border-white sm:w-1/5 sm:min-h-[250px]'>
                            <div className='flex basis-3/4 justify-center items-center'>
                                <div className='text-6xl sm:text-5xl md:text-6xl text-white font-bold'>INFP</div>
                            </div>
                            <div className='basis-1/4 text-lg sm:text-sm md-base lg:text-lg font-semibold'>ผู้ไกล่เกลี่ย</div>
                            <div className='basis-1/4 text-base sm:text-xs md:text-sm lg:text-base'>นักกวี ใจดี และเห็นใจผู้อื่น มีความกระตือรือร้นที่จะช่วยเหลือเพื่อสร้างสิ่งดี ๆ ให้กับสังคม</div>
                        </div>
                        <div className='flex flex-col p-4 m-4 rounded-md border-solid border border-white sm:w-1/5 sm:min-h-[250px]'>
                            <div className='flex basis-3/4 justify-center items-center'>
                                <div className='text-6xl sm:text-5xl md:text-6xl text-white font-bold'>ENFJ</div>
                            </div>
                            <div className='basis-1/4 text-lg sm:text-sm md-base lg:text-lg font-semibold'>ผู้เป็นตัวเอก</div>
                            <div className='basis-1/4 text-base sm:text-xs md:text-sm lg:text-base'>มีเสน่ห์และเป็นผู้นำที่มักสร้างแรงบันดาลใจ สามารถจับใจผู้ฟังได้เสมอ</div>
                        </div>
                        <div className='flex flex-col p-4 m-4 rounded-md border-solid border border-white sm:w-1/5 sm:min-h-[250px]'>
                            <div className='flex basis-3/4 justify-center items-center'>
                                <div className='text-6xl sm:text-5xl md:text-6xl text-white font-bold'>ENFP</div>
                            </div>
                            <div className='basis-1/4 text-lg sm:text-sm md-base lg:text-lg font-semibold'>ผู้รณรงค์</div>
                            <div className='basis-1/4 text-base sm:text-xs md:text-sm lg:text-base'>มีความกระตือรือร้น มีความคิดสร้างสรรค์ และมีมนุษย์สัมพันธ์ที่ดี เป็นคนที่สามารถหาเหตุผลให้ยิ้มได้เสมอ</div>
                        </div>
                    </div>
                </div>

                <div className='bg-et-light-blue rounded-md mb-4 min-h-[400px] shadow-md'>
                    <div className='text-white pt-8 h-1/4 text-[42px] sm:text-6xl md:text-7xl lg:text-7xl font-bold'>ผู้พิทักษ์ปกป้อง</div>
                    <div className="flex justify-center max-w-full sm:flex-row flex-col h-3/4">
                        <div className='flex flex-col p-4 m-4 rounded-md border-solid border border-white sm:w-1/5 sm:min-h-[250px]'>
                            <div className='flex basis-3/4 justify-center items-center'>
                                <div className='text-6xl sm:text-5xl md:text-6xl text-white font-bold'>ISTJ</div>
                            </div>
                            <div className='basis-1/4 text-lg sm:text-sm md-base lg:text-lg font-semibold'>นักคำนวณ</div>
                            <div className='basis-1/4 text-base sm:text-xs md:text-sm lg:text-base'>อยู่กับความเป็นจริง และเป็นคนชอบเสาะหาข้อเท็จจริง ไม่ยอมให้มีข้อสงสัยเหลืออยู่</div>
                        </div>
                        <div className='flex flex-col p-4 m-4 rounded-md border-solid border border-white sm:w-1/5 sm:min-h-[250px]'>
                            <div className='flex basis-3/4 justify-center items-center'>
                                <div className='text-6xl sm:text-5xl md:text-6xl text-white font-bold'>ISFJ</div>
                            </div>
                            <div className='basis-1/4 text-lg sm:text-sm md-base lg:text-lg font-semibold'>ผู้พิทักษ์</div>
                            <div className='basis-1/4 text-base sm:text-xs md:text-sm lg:text-base'>มีความละเอียดอ่อน และเป็นผู้ปกป้องที่ดี มักพร้อมที่จะปกป้องคนที่รักเสมอ</div>
                        </div>
                        <div className='flex flex-col p-4 m-4 rounded-md border-solid border border-white sm:w-1/5 sm:min-h-[250px]'>
                            <div className='flex basis-3/4 justify-center items-center'>
                                <div className='text-6xl sm:text-5xl md:text-6xl text-white font-bold'>ESTJ</div>
                            </div>
                            <div className='basis-1/4 text-lg sm:text-sm md-base lg:text-lg font-semibold'>ผู้บริหาร</div>
                            <div className='basis-1/4 text-base sm:text-xs md:text-sm lg:text-base'>เป็นนักบริหารที่ดี มีความโดดเด่นเรื่องการบริหารเรื่องต่าง ๆ หรือบุคคลากร</div>
                        </div>
                        <div className='flex flex-col p-4 m-4 rounded-md border-solid border border-white sm:w-1/5 sm:min-h-[250px]'>
                            <div className='flex basis-3/4 justify-center items-center'>
                                <div className='text-6xl sm:text-5xl md:text-6xl text-white font-bold'>ESFJ</div>
                            </div>
                            <div className='basis-1/4 text-lg sm:text-sm md-base lg:text-lg font-semibold'>ผู้ให้คำปรึกษา</div>
                            <div className='basis-1/4 text-base sm:text-xs md:text-sm lg:text-base'>มีความเป็นห่วงเป็นใยมากเป็นพิเศษ มีมนุษย์สัมพันธ์และเป็นที่รักของผู้คน มักกระตือรือร้นเสนอความช่วยเหลือผู้อื่น</div>
                        </div>
                    </div>
                </div>
                
                <div className='bg-et-yellow rounded-md mb-16 min-h-[400px] shadow-md'>
                    <div className='text-white pt-8 h-1/4 text-[42px] sm:text-6xl md:text-7xl lg:text-7xl font-bold'>นักสำรวจ</div>
                    <div className="flex justify-center max-w-full sm:flex-row flex-col h-3/4">
                        <div className='flex flex-col p-4 m-4 rounded-md border-solid border border-white sm:w-1/5 sm:min-h-[250px]'>
                            <div className='flex basis-3/4 justify-center items-center'>
                                <div className='text-6xl sm:text-5xl md:text-6xl text-white font-bold'>ISTP</div>
                            </div>
                            <div className='basis-1/4 text-lg sm:text-sm md-base lg:text-lg font-semibold'>ผู้มีความสามารถโดดเด่น</div>
                            <div className='basis-1/4 text-base sm:text-xs md:text-sm lg:text-base'>กล้าหาญและเป็นนักทดลองที่อยู่บนพื้นฐานความเป็นจริง เก่งกาจในการใช้เครื่องมือทุกชนิด</div>
                        </div>
                        <div className='flex flex-col p-4 m-4 rounded-md border-solid border border-white sm:w-1/5 sm:min-h-[250px]'>
                            <div className='flex basis-3/4 justify-center items-center'>
                                <div className='text-6xl sm:text-5xl md:text-6xl text-white font-bold'>ISFP</div>
                            </div>
                            <div className='basis-1/4 text-lg sm:text-sm md-base lg:text-lg font-semibold'>นักผจญภัย</div>
                            <div className='basis-1/4 text-base sm:text-xs md:text-sm lg:text-base'>มีความยืดหยุ่นสูง และเป็นศิลปินทรงเสน่ห์ มักพร้อมสำรวจและทดลองสิ่งใหม่ ๆ อยู่เสมอ</div>
                        </div>
                        <div className='flex flex-col p-4 m-4 rounded-md border-solid border border-white sm:w-1/5 sm:min-h-[250px]'>
                            <div className='flex basis-3/4 justify-center items-center'>
                                <div className='text-6xl sm:text-5xl md:text-6xl text-white font-bold'>ESTP</div>
                            </div>
                            <div className='basis-1/4 text-lg sm:text-sm md-base lg:text-lg font-semibold'>ผู้ประกอบการ</div>
                            <div className='basis-1/4 text-base sm:text-xs md:text-sm lg:text-base'>ฉลาด กระฉับกระเฉง และเข้าใจผู้อื่นได้เป็นอย่างดี มีความสุขกับการใช้ชีวิตแบบสุดโต่ง</div>
                        </div>
                        <div className='flex flex-col p-4 m-4 rounded-md border-solid border border-white sm:w-1/5 sm:min-h-[250px]'>
                            <div className='flex basis-3/4 justify-center items-center'>
                                <div className='text-6xl sm:text-5xl md:text-6xl text-white font-bold'>ESFP</div>
                            </div>
                            <div className='basis-1/4 text-lg sm:text-sm md-base lg:text-lg font-semibold'>ผู้มอบความบันเทิง</div>
                            <div className='basis-1/4 text-base sm:text-xs md:text-sm lg:text-base'>ใช้สัญชาตญาณ กระฉับกระเฉง และกระตือรือร้น และผู้คนรอบข้างจะไม่มีวันเบื่อเมื่ออยู่กับพวกเขา</div>
                        </div>
                    </div>
                </div>
            </div>
            <TestButton/>
        </div>
        <footer className="p-4 bg-et-gray text-cream-50 text-center">
                © 2024 MBTI Project. สถาบันเทคโนโลยีพระจอมเกล้าเจ้าคุณทหารลาดกระบัง.
        </footer>
    </div>
    )
}

export default MBTItypes
