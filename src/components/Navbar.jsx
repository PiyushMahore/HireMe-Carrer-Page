import React, { useState, useEffect } from 'react'
import { IoMdMenu } from "react-icons/io";
import { IoCloseCircleOutline } from "react-icons/io5";
import { RiArrowDropDownLine } from "react-icons/ri";
import { Link } from 'react-scroll';

function NavBar() {
    const [nav, setNav] = useState(false)
    const [scrolled, setScrolled] = useState(false);

    const handleNav = () => setNav(!nav)
    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > 50) {
                setScrolled(true);
            } else {
                setScrolled(false);
            }
        };
        window.addEventListener('scroll', handleScroll);
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    const hireImg = "https://s3-alpha-sig.figma.com/img/62db/d892/925782157f58608f73147a4cc397dd15?Expires=1724630400&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=OgxLinOC0x9xrrGNBw3dJk21UdK4MZNcLkkLbKA0QJty07TLcsMioQ9~jAA46vMzc1e1aTogTK81W6kwoMKQItCbfwb39qIiyoJheDpFUNqFe~Yenkq9t1abiKJtvbCASkvFVhYaiakeAeLrXzmHVjAJ4OC-PXhUj9t95TPsE1GfmYqYb4QFlOM6MFOAVGkbn08h8~MgiAeEJrGZmu8kf1yh9q-MuGl18-pnVhd0cJZjuqnHdgTmhGHcYe3gEG75flMk3dzzJaoFE-B9Fom-TRKm5xvXubQZBHaa1dk3Fmh6dLMpeHuI5sTL2HJ~O3wm73bQyd5uRpopR7x2CKKdkA__";

    return (
        <nav className={`navbar ${scrolled ? 'scrolled' : ''}`}>
            {/* Web */}
            <div className='web'>
                <img src={hireImg} alt="Hire Me Logo" width={100} />
                <div className='options'>
                    <Link to='services' smooth={true} duration={700}>Services <RiArrowDropDownLine style={{ position: "absolute" }} size={25} /></Link>
                    <Link to='career' smooth={true} duration={600}>Carriers</Link>
                    <Link to='aboutUs' smooth={true} duration={500}>About Us</Link>
                    <Link to='footer' smooth={true} duration={800}>Contact Us</Link>
                </div>
                <button>Our App</button>
            </div>

            {/* Mobile */}

            <div className='mobileNav'>
                {nav ? <IoCloseCircleOutline onClick={handleNav} size={30} color='black' /> : <IoMdMenu onClick={handleNav} size={30} color='black' />}
            </div>
            {
                nav ?
                    <div className='navOpt'>
                        <Link to='services' smooth={true} duration={700}>Services</Link>
                        <Link to='career' smooth={true} duration={600}>Carriers</Link>
                        <Link to='aboutUs' smooth={true} duration={500}>About Us</Link>
                        <Link to='footer' smooth={true} duration={800}>Contact Us</Link>
                    </div>
                    : ""
            }
        </nav>
    )
}

export default NavBar