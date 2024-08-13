import React from 'react'
import { CiStar } from "react-icons/ci";

function Achievments() {
    const imgUrl = 'https://s3-alpha-sig.figma.com/img/3439/89b5/b69aded22b5c77bb1687f161a1a5377e?Expires=1724630400&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=HWugj~tVjJQSinRz0f9bKYFwsU4~uNfm~PinzrymUfU3CM~ll2oJqIhNpuo4tvfJ6Ff8m5ZVdOLkQ8AYMOvIMdcEc3q6icNdlj0MRuRWDyrTSvG2YnDyold1cQjNyd~rMfzVeyWCErFGj1~~8TENgZ0g2W41ZTTSVRCy31yq5O7rDkTZJqw2j-i624Kz8xehEnNtzXDCujoVMjUVnAK-IV4O9OTVinTt4K64sHxnPvCHSCuPch5jr0hAnPMMXc99dm4vtikJHufI8ansR7APybMXQKyrXWpHLMd~~DzMBew9AsaalNaiJ2h--MSC2Y7yPMvlc1lLJduxfWZBO9YZaw__'
    return (
        <div className='achievments'>
            <div className='achTexts'>
                <h1>Apke Development Ka Sathi ! </h1>
                <div>
                    <h1><span>8000+</span> <br />Candidates </h1>
                    <span><CiStar size={60} color='#ffd700' /></span>
                </div>
                <h3>“Empowered with internships, mentorships, and job opportunities nationwide."</h3>
            </div>
            <div className='achImg'>
                <img src={imgUrl} alt="" />
            </div>
        </div>
    )
}

export default Achievments