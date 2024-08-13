import React from 'react'
import { FaUserGraduate } from "react-icons/fa";
import { PiArrowRightThin } from "react-icons/pi";
import { HiUserGroup } from "react-icons/hi2";
import img from '../../public/ecoSystem.png'

function AboutUs() {
    const img1Url = 'https://s3-alpha-sig.figma.com/img/c206/4d39/49dbe3f438f79bdef04e048572a7b6ec?Expires=1724630400&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=j1sQvTf3UUrtVjcuWn6ZF3gEQDJDSwKy7wv~ZRA58tIus0Xbzc5GR8F9jCUrZ7gwhrSzIt6vF3Lvy9dnhQnSfo8dA1LVgjymuROa6TNd~9ArukAhJqym9JGa7FCq-B6RILLR00iyKfaUANqZwAFQFLbC2Cx~MnNb9hLzETE5mAjnnf4OcMagwLGWR43igQvpjBzNHDxEi23eezbYNIa9qK4NKTdgtsvyCJRfc7g5VOxk8TWbPKj4pEOQHW1cY6sbp5s3M5mYeooq982MneE81nSCgovcbyu0u064ldE-653Tx0DzwYpzZRy5YSTV6-d5gKrdAhBZkiMipnPWTn0OKg__'
    const img2Url = 'https://s3-alpha-sig.figma.com/img/5e96/a152/aa77fb9651154d711cd0ee3128311b4c?Expires=1724630400&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=mdVDkd~0vFN0sFlMg5J~fhqTQ0u5fyfPNaxTzpE3Ubpu2ozd8vgeAbiUYNlGpLbIWF0D6xilQZqyMr6OoIlrIKuotj1Fou2bQ4fvwbAU79yYZfsh9YZr5ndVmxfA8Ox3FSTbPgIjiALgF2rmHRr-T4Nlw9aDfOTjFNn4utIYmnuXNJOXhCcLStf-BE7BQW9AH5Zw9FIFMOQqDF-O7ho6dJYycTRA73ploLyAZcNomXuwpEBWZ6IRGtOjyymJX~3lXszDHU2yAdUEOXgSZ-TDUBv918sBwMp2Zzpg55Wt19GPcVT9mrUTUH4-a2l9tzwTA3u3fmLTqyhE6Cpsxll8TQ__'

    return (
        <div className='aboutUs'>
            <div className='container'>
                <div className='imgWrapper'>
                    <img src={img1Url} alt="" />
                </div>
                <div className='textWrapper'>
                    <h3><button><FaUserGraduate /></button>For College Student</h3>
                    <h1><span>Assisting</span> Individuals</h1>
                    <p>Discover opportunities for jobs, internships, and mentorship under one roof. Connect with skilled professionals to foster mutual success in your career journey.</p>
                    <span className='learnMore'>Learn More <PiArrowRightThin style={{ marginLeft: '3px' }} /></span>
                </div>
            </div>

            <div className='container'>
                <div className='textWrapper'>
                    <h3><button><HiUserGroup /></button>For B2B</h3>
                    <h1><span>Empowering</span> Businesses</h1>
                    <p>Hiremi enhances B2B operations with expert project management and streamlined recruitment outsourcing, optimizing resources for strategic business growth.</p>
                    <span className='learnMore'>Learn More <PiArrowRightThin style={{ marginLeft: '3px' }} /></span>
                </div>
                <div className='imgWrapper'>
                    <img src={img2Url} alt="" />
                </div>
            </div>

            <div className='container last'>
                <div className='circle'>
                    <img src={img} alt="" />
                </div>

                <div className='textWrapper'>
                    <p>Our Eco-System Towards</p>
                    <h1>Business Efficiency & <span>Growth</span></h1>
                    <p>Hiremi enhances business efficiency with expert project management and recruitment outsourcing. We secure top talent, support development through jobs and mentorship, and ensure sustainable growth, fostering a skilled workforce and successful partnerships.</p>
                    <span className='learnMore'>Learn More <PiArrowRightThin style={{ marginLeft: '3px' }} /></span>
                </div>
            </div>
        </div>
    )
}

export default AboutUs