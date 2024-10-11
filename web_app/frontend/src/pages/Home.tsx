import { useState } from 'react'

import Navbar from '../components/Navbar';

function Home() {
    const [count, setCount] = useState(0)
    return (
        <div>
            <Navbar/>
            <h1 className='text-2xl pt-16'>Home</h1>
            <div className="card">
                <button onClick={() => setCount((count) => count + 1)}>
                    count is {count}
                </button>
            </div>
            <p className="read-the-docs">
                Click on the Vite and React logos to learn more
            </p>
        </div>
    )
}

export default Home;