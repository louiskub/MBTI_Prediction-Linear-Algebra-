interface TestButtonProps {
    text: string;
}

function TestButton({ text }: TestButtonProps) {
    const defaultText = "ล้างข้อมูล";

    return (
        <div className='flex justify-center group text-xl font-bold text-white bg-et-purple-gray pt-2 pb-2 mb-12 rounded-md w-36 shadow-inner hover:cursor-pointer hover:bg-et-gray'>
            <div className='group-hover:hidden pr-2'>{text || defaultText}</div>
            <div className='border-l border-white pl-2 group-hover:border-0 group-hover:w-56 text-right group-hover:-translate-x-16 group-hover:pl-0 transition-transform ease-in duration-200'>⟳</div>
        </div>
    );
}
export default TestButton;
