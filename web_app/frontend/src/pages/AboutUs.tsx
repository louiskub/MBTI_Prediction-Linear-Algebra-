import Navbar from '../components/Navbar';

const members = [
    {
        name: 'Manatsavin',
        role: 'Member1',
        description: 'Backend developer at King Mongkuts Institute of Technology Ladkrabang',
        image: 'https://tr.rbxcdn.com/30DAY-Avatar-FCD68AA595DBED3E0F053BCA1D3C583A-Png/420/420/Avatar/Png/noFilter', 
        instagram: 'https://www.instagram.com/example1',
    },
    {
        name: 'Ananthachai',
        role: 'Member2',
        description: 'Frontend developer at King Mongkuts Institute of Technology Ladkrabang',
        image: 'https://tr.rbxcdn.com/30DAY-Avatar-FCD68AA595DBED3E0F053BCA1D3C583A-Png/420/420/Avatar/Png/noFilter', 
        instagram: 'https://www.instagram.com/example2',
    },
    {
        name: 'Peerawat',
        role: 'Member3',
        description: 'Frontend developer at King Mongkuts Institute of Technology Ladkrabang',
        image: 'https://tr.rbxcdn.com/30DAY-Avatar-FCD68AA595DBED3E0F053BCA1D3C583A-Png/420/420/Avatar/Png/noFilter', 
        instagram: 'https://www.instagram.com/example3',
    },
    {
        name: 'Emily',
        role: 'Member4',
        description: 'Frontend developer at King Mongkuts Institute of Technology Ladkrabang',
        image: 'https://tr.rbxcdn.com/30DAY-Avatar-FCD68AA595DBED3E0F053BCA1D3C583A-Png/420/420/Avatar/Png/noFilter', 
        instagram: 'https://www.instagram.com/example4',
    },
];

function AboutUs() {
    return (
        <div className="min-h-screen flex flex-col items-center bg-gradient-to-b from-[#D0B1A1] to-[#E2CFCF] p-0.1">
            <Navbar />
            <h1 className="text-9xl pt-16 text-transparent bg-clip-text bg-gradient-to-r from-[#8B5A2B] to-[#D2691E] font-serif animate__animated animate__bounceInDown">
                About Us
            </h1>
            <div className="members-container flex flex-wrap justify-center mt-10 gap-10">
                {members.map((member, index) => (
                    <div key={index} className="card flex flex-col items-center bg-white shadow-lg rounded-lg overflow-hidden max-w-xs transition-transform transform hover:scale-105 hover:shadow-2xl">
                        <div className="w-full h-48 relative">
                            <img 
                                src={member.image} 
                                alt={member.name} 
                                className="absolute inset-0 w-full h-full object-fit" 
                            />
                        </div>
                        <div className="p-4 text-center">
                            <h2 className="text-xl font-semibold text-[#6B4F4F]">{member.name}</h2>
                            <h3 className="text-md text-[#8B5A2B] mb-2">{member.role}</h3>
                            <p className="text-gray-700">{member.description}</p>
                        </div>
                        <div className="flex items-center mb-4">
                            <a href={member.instagram} target="_blank" rel="noopener noreferrer" className="flex items-center bg-[#D7C4B8] p-2 rounded-lg shadow-lg transition-transform duration-300 transform hover:bg-[#D2BBA2]">
                                <img 
                                    src="https://upload.wikimedia.org/wikipedia/commons/a/a5/Instagram_icon.png" 
                                    alt="Instagram" 
                                    className="w-6 h-6 mr-1 transition-transform duration-300 transform hover:scale-125" 
                                />
                                <span className="text-[#6B4F4F] hover:text-[#D2691E] transition-colors duration-300">Instagram</span>
                            </a>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default AboutUs;
