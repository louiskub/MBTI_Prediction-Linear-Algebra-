import Navbar from '../components/Navbar';

const members = [
    {
        name: 'Manatsavin',
        role: 'Member1',
        description: 'Backend developer at king mongkuts institute of technology ladkrabang',
        image: 'https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/d5b320cf-5892-4dac-814a-ed0ef2e9bd65/dee9iw8-5831fb90-2dac-4091-b511-bdf8711492ce.png/v1/fill/w_1280,h_1280/basic_boy_roblox_render__by_pipxal_dee9iw8-fullview.png?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7ImhlaWdodCI6Ijw9MTI4MCIsInBhdGgiOiJcL2ZcL2Q1YjMyMGNmLTU4OTItNGRhYy04MTRhLWVkMGVmMmU5YmQ2NVwvZGVlOWl3OC01ODMxZmI5MC0yZGFjLTQwOTEtYjUxMS1iZGY4NzExNDkyY2UucG5nIiwid2lkdGgiOiI8PTEyODAifV1dLCJhdWQiOlsidXJuOnNlcnZpY2U6aW1hZ2Uub3BlcmF0aW9ucyJdfQ.HlZ7uauRrbAWMkVKTAnV0o_ZS322Fp1agaAX7HtOx14', 
    },
    {
        name: 'Ananthachai',
        role: 'Member2',
        description: 'Frontend developer at king mongkuts institute of technology ladkrabang',
        image: 'https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/d5b320cf-5892-4dac-814a-ed0ef2e9bd65/dee9iw8-5831fb90-2dac-4091-b511-bdf8711492ce.png/v1/fill/w_1280,h_1280/basic_boy_roblox_render__by_pipxal_dee9iw8-fullview.png?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7ImhlaWdodCI6Ijw9MTI4MCIsInBhdGgiOiJcL2ZcL2Q1YjMyMGNmLTU4OTItNGRhYy04MTRhLWVkMGVmMmU5YmQ2NVwvZGVlOWl3OC01ODMxZmI5MC0yZGFjLTQwOTEtYjUxMS1iZGY4NzExNDkyY2UucG5nIiwid2lkdGgiOiI8PTEyODAifV1dLCJhdWQiOlsidXJuOnNlcnZpY2U6aW1hZ2Uub3BlcmF0aW9ucyJdfQ.HlZ7uauRrbAWMkVKTAnV0o_ZS322Fp1agaAX7HtOx14', 
    },
    {
        name: 'Peerawat',
        role: 'Member3',
        description: 'Frontend developer at king mongkuts institute of technology ladkrabang',
        image: 'https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/d5b320cf-5892-4dac-814a-ed0ef2e9bd65/dee9iw8-5831fb90-2dac-4091-b511-bdf8711492ce.png/v1/fill/w_1280,h_1280/basic_boy_roblox_render__by_pipxal_dee9iw8-fullview.png?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7ImhlaWdodCI6Ijw9MTI4MCIsInBhdGgiOiJcL2ZcL2Q1YjMyMGNmLTU4OTItNGRhYy04MTRhLWVkMGVmMmU5YmQ2NVwvZGVlOWl3OC01ODMxZmI5MC0yZGFjLTQwOTEtYjUxMS1iZGY4NzExNDkyY2UucG5nIiwid2lkdGgiOiI8PTEyODAifV1dLCJhdWQiOlsidXJuOnNlcnZpY2U6aW1hZ2Uub3BlcmF0aW9ucyJdfQ.HlZ7uauRrbAWMkVKTAnV0o_ZS322Fp1agaAX7HtOx14', 
    },
    {
        name: 'Emily',
        role: 'Member4',
        description: 'Frontend developer at king mongkuts institute of technology ladkrabang',
        image: 'https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/d5b320cf-5892-4dac-814a-ed0ef2e9bd65/dee9iw8-5831fb90-2dac-4091-b511-bdf8711492ce.png/v1/fill/w_1280,h_1280/basic_boy_roblox_render__by_pipxal_dee9iw8-fullview.png?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7ImhlaWdodCI6Ijw9MTI4MCIsInBhdGgiOiJcL2ZcL2Q1YjMyMGNmLTU4OTItNGRhYy04MTRhLWVkMGVmMmU5YmQ2NVwvZGVlOWl3OC01ODMxZmI5MC0yZGFjLTQwOTEtYjUxMS1iZGY4NzExNDkyY2UucG5nIiwid2lkdGgiOiI8PTEyODAifV1dLCJhdWQiOlsidXJuOnNlcnZpY2U6aW1hZ2Uub3BlcmF0aW9ucyJdfQ.HlZ7uauRrbAWMkVKTAnV0o_ZS322Fp1agaAX7HtOx14', 
    },
];

function AboutUs() {
    return (
        <div className="min-h-screen flex flex-col items-center bg-gradient-to-b from-[#E2CFCF] to-[#D0B1A1]">
            <Navbar />
            <h1 className="text-9xl pt-16 text-brown-800 font-serif">About Us</h1>
            <div className="members-container flex flex-wrap justify-center mt-10 gap-10 p-5">
                {members.map((member, index) => (
                    <div key={index} className="member-card p-6 bg-[#BFA3A3] rounded-lg shadow-lg transform transition-transform duration-300 hover:scale-105">
                        <img src={member.image} alt={`${member.name}'s profile`} className="rounded-full mb-4 w-32 h-32 object-cover mx-auto border-4 border-[#8B5B29] shadow-lg" />
                        <h2 className="text-2xl font-bold text-brown-800">{member.name}</h2>
                        <h3 className="text-lg text-brown-600">{member.role}</h3>
                        <p className="text-brown-500 mt-2">{member.description}</p>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default AboutUs;
