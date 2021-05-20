import React from 'react'

const Navbar = () => {
    return (
        <nav className="flex flex-wrap justify-between items-center  px-7 lg:px-32 h-14 border-b mb-4 ">
            <h1>Instagram</h1>
            <input className="searchInput fas fa-search" name="search" type="text" placeholder="&#xf002; Search"/>
            <div >
                <a className="p-2.5" href="/"><i className="fas fa-home"></i></a>
                <a className="p-2.5" href="/"><i className="far fa-comment-dots"></i></a>
                <a className="p-2.5" href="/"><i className="fas fa-compass"></i></a>
                <a className="p-2.5" href="/"><i className="far fa-heart"></i></a>
                <a className="p-2.5" href="/login"><i className="fas fa-user-circle"></i></a>
            </div>
        </nav>)
}
export default Navbar