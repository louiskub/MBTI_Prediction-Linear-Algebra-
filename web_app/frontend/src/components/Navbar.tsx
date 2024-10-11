function Navbar() {
    return (
        <nav className="fixed bg-et-yellow h-16 w-full flex justify-center items-center">
            <div className="text-white flex gap-12 font-semibold">
                <a href="/">Home</a>
                <a href="/mbti-test">MBTI Test</a>
                <a href="/mbti-types">MBTI Types</a>
                <a href="/theorem">Theorem</a>
                <a href="/about-us">About Us</a>
            </div>
        </nav>
    )
}

export default Navbar;