import React from "react";
import '../styles/Home.css';
import dev from '../assets/dev.svg'

const Home = () => {
    return (
        <div className="home flex items-center justify-center min-h-screen">
            <div className="content">
                <h1 className="text-4xl text-center my-3 px-1">Hi! My name is <span className="developer-name">Angelica Pucheta</span></h1>

                <p className="my-3 text-center text-xl">I'm front end developer.</p>

                <img alt='dev' className="dev" src={dev} />
            </div>
        </div>
    );
}

export default Home;