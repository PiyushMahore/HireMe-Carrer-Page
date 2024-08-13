import React from 'react'
import { MdVerifiedUser } from "react-icons/md";
import { HiLightBulb } from "react-icons/hi";
import { HiUserGroup } from "react-icons/hi";
import { FaHandshake } from "react-icons/fa";

function Services() {

    const centrImg = 'https://s3-alpha-sig.figma.com/img/c9b1/3e27/a805166ddeab5551f4914666684adbf0?Expires=1724630400&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=jW8Jq6bl4YMRoxiv5ChgXhaQVKwh8tM~l4t~o91CsqSB4tETC5Dl8IgAPPceYyHd2V6dmi6S6eiotTXmSN3k4UiHhqrWyEELTEVKUvAUzmJ6vJFOBmN08EunCmOFBwSv2czcFd1REEdv2CejKKyLsfVnqwQOIKxY8Gnih-RabqfyDPdzlGz7HEEqxtDw~FX08c2IO~0frggfAYTXdf2krvvr5bGE672cjak0ybeVSMltr15QkBrYVuX7PmRkyKY~5OVM-6w7igbyuBfFM8DjcgkP9zqBH~tAP~ZPySs0veFmli-QKIVKDLNl9kmu-Nq~xNlR8bsbk4M9XQZizvVQgQ__'
    return (
        <div className='services'>
            <h1>Why do our <span>clients</span> choose us?</h1>
            <div className='srvContainer'>

                <div className='srvBox1'>
                    <div>
                        <MdVerifiedUser size={40} color='#FF2626' />
                        <h2>Verified Users</h2>
                        <p>"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore.</p>
                    </div>
                    <div>
                        <HiLightBulb size={40} color='#FF2626' />
                        <h2>Domain Oriented Expertise</h2>
                        <p>"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore.</p>
                    </div>
                </div>

                <div className='srvBox2'>
                    <img src={centrImg} alt="" />
                </div>

                <div className='srvBox1'>
                    <div>
                        <HiUserGroup size={40} color='#FF2626' />
                        <h2>Expert Management</h2>
                        <p>"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore.</p>
                    </div>
                    <div>
                        <FaHandshake size={40} color='#FF2626' />
                        <h2>Authentic Skill Sets</h2>
                        <p>"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore.</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Services