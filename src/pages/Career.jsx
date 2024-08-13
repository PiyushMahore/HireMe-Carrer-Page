import React from 'react'
import img from '../../public/appPrev.png'
import { PiArrowRightThin } from "react-icons/pi";
import { FaGooglePlay } from "react-icons/fa";
import { FaApple } from "react-icons/fa";
import { PiLineVerticalLight } from "react-icons/pi";

function Career() {
    return (
        <div className='career'>
            <span className='appDemo'>
                <img src={img} alt="" />
            </span>
            <div className='appDesc'>
                <h1>Hire<span>mi</span>
                    <br />
                    India’s No.1 <br /> Career Path App</h1>
                <p>Your one-stop destination for jobs, internships, and mentorship programs all over India.</p>
                <div className='down'>
                    <button>Download App <PiArrowRightThin style={{ fontWeight: "bold", marginLeft: "2.5px" }} size={20} /></button>
                    <PiLineVerticalLight size={40} />
                    <FaGooglePlay />
                    <FaApple />
                </div>
            </div>
        </div>
    )
}

export default Career