import React from 'react'
import logo from '../../public/Logo.png'
import { IoIosCall } from "react-icons/io";
import { IoMdMail } from "react-icons/io";
import { FaInstagram } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { MdEmail } from "react-icons/md";

function Footer() {

    return (
        <>
            <div className='footer'>
                <div className='footerBox'>
                    <span className='footLogo'></span>
                    <div>
                        <p><IoIosCall /> +91-8962655225</p>
                        <p><IoMdMail /> Support@Hiremi.in</p>
                    </div>
                </div>

                <div className='footerBox'>
                    <span>For Individuals</span>
                    <p>Job & internship Opportunity</p>
                    <p>Applicant Monitoring Services</p>
                    <p>Mentorship</p>
                </div>

                <div className='footerBox'>
                    <span>For Businesses</span>
                    <p>Recruitment Outsourcing</p>
                    <p>Project Oversight</p>
                </div>

                <div className='footerBox'>
                    <span>For Colleges</span>
                    <p>Recruitment Drive Services</p>
                    <p>Educational Talks and guest lectures</p>
                </div>

                <div className='footerBox'>
                    <span>Company</span>
                    <p>Contact Us</p>
                    <p>Privacy Policy</p>
                    <p>Terms & Conditions</p>
                </div>

                <div className='footerBox'>
                    <span>Help</span>
                    <p>Recruitment Drive Services</p>
                    <p>Educational Talks and guest lectures</p>
                </div>
            </div>

            <div className='corner'>
                <p>Copyright  © 2023 -Hiremi</p>
                <div>
                    <FaInstagram size={20} />
                    <FaLinkedin size={20} />
                    <MdEmail size={25} />
                </div>
            </div>
        </>
    )
}

export default Footer