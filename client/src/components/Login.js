import React from 'react';
import Navbar from './Navbar';

const Login = () => {
    return (
        <>
            <header>
                <Navbar />
            </header>
            <main className="h-full flex justify-center items-center md:mt-28">
                <div className="flex flex-col text-xl" >
                    <form className="flex flex-col border py-7 px-28" >
                        <label htmlFor="email">Email:</label>
                        <input className="login-input" type="email" id="email" name="email" placeholder="Enter ID(eamil) here."/>
                        
                        <label htmlFor="password">Password:</label>
                        <input className="login-input" type="password" id="password" name="password" placeholder="Enter password here."/>
                        
                        <button className="border py-1 px-1 mb-4 hover:bg-lightBlue-400 hover:text-white" >Sign In</button>
                    </form>
                    <div className="flex flex-col">
                        <p>Sign In with:</p>
                        <button className="login-button hover:bg-lightBlue-400 hover:text-white">Google</button>
                        <button className="login-button hover:bg-lightBlue-400 hover:text-white">Github</button>
                        <button className="login-button hover:bg-lightBlue-400 hover:text-white">Facebook</button>
                    </div>
                </div>

            </main>
        </>
    )
}

export default Login
