import React from 'react'
import { SlArrowDown } from "react-icons/sl";
import NavBar from '../components/Navbar'

function Home() {
    const nextPage = (offset) => {
        window.scrollBy({
            top: offset,
            behavior: 'smooth'
        });
    }

    return (
        <div className='home'>
            <NavBar />
            <div className='hero'>
                <h1>Apke Development Ka<br /> Sathi <span className='specialText'>Hiremi!</span></h1>
                <p>Your CareeHiremi, where we connect talent with opportunities, <br />empowering India's youth to become tomorrow's leaders</p>
                <button className='buttion1'>Download the app</button>
                <button className='buttion2'>For bussiness</button>
            </div>
            <SlArrowDown onClick={() => nextPage(700)} color='white' style={{ alignSelf: "flex-end", position: "absolute" }} size={35} />
        </div>
    )
}

export default Home