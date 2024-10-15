import { useState } from "react";
const gender = "/corr_img/gender/";
const interest = "/corr_img/interest/";
const mbti = "/corr_img/mbti/";

function CorrSelect() {

    const [selected, setSeleted] = useState("");
    const [secsel, setSecSel] = useState("");
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
            <div>
                <select name="" id="" className=""
                onChange={(e) => setSecSel(e.target.value)}>
                    <option value="">Select Option</option>
                    <option value="Male">Male</option>
                    <option value="Female">Female</option>
                </select>
            </div>
        );
        path = gender;
        filename = secsel;
    }
    else if(selected == "Interest"){
        select2 = (
            <div>
                <select name="" id="" className="bg-zinc-400 overflow-clip"
                onChange={(e) => setSecSel(e.target.value)}>
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
        filename = secsel;
    }
    else if(selected == "MBTI"){
        select2 = (
            <div>
                <select name="" id=""
                onChange={(e) => MBTIonChange(0, e.target.value)}>
                    <option value="I">I</option>
                    <option value="E">E</option>
                </select>
                <select name="" id=""
                onChange={(e) => MBTIonChange(1, e.target.value)}>
                    <option value="N">N</option>
                    <option value="S">S</option>
                </select>
                <select name="" id=""
                onChange={(e) => MBTIonChange(2, e.target.value)}>
                    <option value="T">T</option>
                    <option value="F">F</option>
                </select>
                <select name="" id=""
                onChange={(e) => MBTIonChange(3, e.target.value)}>
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
        //
    }
    else {
        corr_img = (
            <div className="">
                <img src={path_img} alt="ok" className="" />
                <div>{path_img}</div>
            </div>
        )
    }

    return (       
        <div className="flex justify-center">
            <div className="mt-16 ">
                {/* Select 1 */}
                <select name="" id="" className="bg-zinc-400"
                    onChange={(e) => setSeleted(e.target.value)}
                    value={selected}>
                    <option value="">Select Department</option>
                    <option value="Gender">Gender</option>
                    <option value="Interest">Interest</option>
                    <option value="MBTI">MBTI</option>
                </select>

                {select2}
                {corr_img}
            </div>
            
        </div>
    );
}


export default CorrSelect;
