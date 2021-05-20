import React from 'react';
import Navbar from './Navbar';
import PictureGrid from './PictureGrid';

const Home = () => {
    return (
        <div className="App bg-gray-50" >
            <header className="App-header bg-white">
                <Navbar />
            </header>
            <main className="flex">
                <PictureGrid />
            </main>
        </div>
    )
}

export default Home
