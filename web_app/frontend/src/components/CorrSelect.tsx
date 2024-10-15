import { useState } from "react";
const gender = "/corr_img/gender/";
const interest = "/corr_img/interest/";
const mbti = "/corr_img/mbti/";
import stonk from '../assets/stonk.png'
function CorrSelect() {

    const [selected, setSeleted] = useState("");
    const [selInter, setSelInter] = useState("");
    const [selGen, setSelGen] = useState("");
    const [mbti1, setMbti1] = useState("INTJ");

    function MBTIonChange(index: number, value: string){
        const arr = mbti1.split('')
        arr[index] = value
        setMbti1(arr.join(''))
    }

    let select2;
    let path = "";
    let filename = "";
    let path_img = "";
    let corr_img;

    if (selected == "Gender"){
        select2 = (
            <div className="mr-5">
                <label className="text-start block text-sm font-medium text-gray-900">Gender</label>
                <select 
                onChange={(e) => setSelGen(e.target.value)}
                value={selGen}
                className=" bg-gray-50 border border-gray-300 text-gray-900 mb-6 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 p-1.5 sm:p-2.5">
                    <option value="">Select Option</option>
                    <option value="Male">Male</option>
                    <option value="Female">Female</option>
                </select>
            </div>
        );
        path = gender;
        filename = selGen;
    }
    else if(selected == "Interest"){
        select2 = (
            <div className="mr-5">                
                <label className="text-start block text-sm font-medium text-gray-900">Interest</label>
                <select 
                onChange={(e) => setSelInter(e.target.value)}
                className=" bg-gray-50 border border-gray-300 text-gray-900 mb-6 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 p-1.5 sm:p-2.5">
                    <option value="">Select Option</option>
                    <option value="Arts">Arts</option>
                    <option value="Technology">Technology</option>
                    <option value="Sports">Sports</option>
                    <option value="Others">Others</option>
                    <option value="Unknown">Unknown</option>
                </select>
            </div>
        );
        path = interest;
        filename = selInter;
    }
    else if(selected == "MBTI"){
        select2 = (
            <div className="mr-5">
                <label className="text-start block text-sm font-medium text-gray-900">MBTI</label>

                <select 
                onChange={(e) => MBTIonChange(0, e.target.value)}
                className=" bg-gray-50 border border-gray-300 text-gray-900 mb-6 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 p-1.5 sm:p-2.5">
                    <option value="I">I</option>
                    <option value="E">E</option>
                </select>
                <select 
                onChange={(e) => MBTIonChange(1, e.target.value)}
                className=" bg-gray-50 border border-gray-300 text-gray-900 mb-6 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 p-1.5 sm:p-2.5">
                    <option value="N">N</option>
                    <option value="S">S</option>
                </select>
                <select 
                onChange={(e) => MBTIonChange(2, e.target.value)}
                className=" bg-gray-50 border border-gray-300 text-gray-900 mb-6 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 p-1.5 sm:p-2.5">
                    <option value="T">T</option>
                    <option value="F">F</option>
                </select>
                <select 
                onChange={(e) => MBTIonChange(3, e.target.value)}
                className=" bg-gray-50 border border-gray-300 text-gray-900 mb-6 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 p-1.5 sm:p-2.5">
                    <option value="J">J</option>
                    <option value="P">P</option>
                </select>
            </div>
        );
        path = mbti;
        filename = mbti1
    }
    else {
        path = "";
        filename = "" 
    }
    
    path_img = path + filename + ".png"
    if (path_img == ".png" || filename == ""){
        corr_img = (
            <div className="">
                <img src={stonk} alt="ok" className="rounded-2xl  mx-auto transition-transform transform hover:scale-105 hover:shadow-xl" />
                {/* <div>{path_img}</div> */}
            </div>
        )
    }
    else {
        corr_img = (
            <div className="">
                <img src={path_img} alt="ok" className="rounded-2xl mx-auto transition-transform transform hover:scale-105 hover:shadow-xl" />
                {/* <div>{path_img}</div> */}
            </div>
        )
    }

    return (       
        <div className="flex flex-col items-center justify-center max-w-[1300px] mt-16">
            <h2 className="text-5xl sm:text-6xl font-bold text-et-brown pb-2">View Correlation</h2>
            <div className="flex flex-row justify-start w-full flex-wrap">
                {/* Select 1 */}
                <div className="mr-5"> 
                    <label className="block text-sm font-medium text-gray-900 text-start">Department</label>
                    <select 
                    onChange={(e) => setSeleted(e.target.value)}
                    value={selected}
                    className=" bg-gray-50 border border-gray-300 text-gray-900 mb-6 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 p-1.5 sm:p-2.5">
                        <option value="">Select Department</option>
                        <option value="Gender">Gender</option>
                        <option value="Interest">Interest</option>
                        <option value="MBTI">MBTI</option>
                    </select>
                </div>
                {select2}
                {(path_img == ".png" || filename == "") && (
                    // w-[100%] text-start
                    <div className="mt-8">
                        Select Something
                    </div>
                )}
                <div className="w-[100%]">
                    {corr_img}
                </div>
            
            </div>
            
        </div>
    );
}


export default CorrSelect;
