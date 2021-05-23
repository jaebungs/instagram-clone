import React from 'react';
import { useHistory } from 'react-router-dom';

const Success = () => {
    const history = useHistory();

    const routeToHome = () => {
        const path = '/';
        history.push(path);
    }
    return (
        <div className="p-28 m-28 text-xl">
            Login succeed.
            <div className="flex flex-col justify-center items-center">
                <button className="border m-3 p-3">Log out</button>
                <button className="border m-3 p-3" onClick={routeToHome}>Go to Home</button>
            </div>
        </div>
    )
}

export default Success
