import React from 'react';

interface SurveyQuestionProps {
    text: string;
}

const SurveyQuestion: React.FC<SurveyQuestionProps> = ({ text }) => {
    return (
        <div className='flex justify-center font-IBM'>
            <div className="flex flex-col items-center border w-full h-48">
                <h2 className="basis-1/2 text-xl mb-4 text-et-gray pt-8">{text}</h2>
                <div className="basis-1/2 flex space-x-4 items-center h-full">
                    <p className='text-et-light-orange'>ไม่เห็นด้วย</p>
                        <label key='0' className="flex items-center space-x-1">
                            <input
                                type="radio"
                                name={text}
                                value={0}
                                className="hidden peer"
                            />
                            <div className="h-10 w-10 rounded-full border-2 border-gray-300 peer-checked:bg-et-light-orange hover:cursor-pointer hover:border-et-gray-blue"></div>
                        </label>
                        <label key='1' className="flex items-center space-x-1">
                            <input
                                type="radio"
                                name={text}
                                value={1}
                                className="hidden peer"
                            />
                            <div className="h-10 w-10 rounded-full border-2 border-gray-300 peer-checked:bg-et-light-orange hover:cursor-pointer hover:border-et-gray-blue"></div>
                        </label>
                        <label key='2' className="flex items-center space-x-1">
                            <input
                                type="radio"
                                name={text}
                                value={2}
                                className="hidden peer"
                            />
                            <div className="h-10 w-10 rounded-full border-2 border-gray-300 peer-checked:bg-gray-300 hover:cursor-pointer hover:border-et-gray-blue"></div>
                        </label>
                        <label key='3' className="flex items-center space-x-1">
                            <input
                                type="radio"
                                name={text}
                                value={3}
                                className="hidden peer"
                            />
                            <div className="h-10 w-10 rounded-full border-2 border-gray-300 peer-checked:bg-et-green hover:cursor-pointer hover:border-et-gray-blue"></div>
                        </label>
                        <label key='4' className="flex items-center space-x-1">
                            <input
                                type="radio"
                                name={text}
                                value={4}
                                className="hidden peer"
                            />
                            <div className="h-10 w-10 rounded-full border-2 border-gray-300 peer-checked:bg-et-green hover:cursor-pointer hover:border-et-gray-blue"></div>
                        </label>
                    <p className='text-et-green'>เห็นด้วย</p>
                </div>
            </div>
            <p></p>
        </div>
    );
};

export default SurveyQuestion;
