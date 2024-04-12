import React from 'react'
import aboutUs from '../../images/banner/aboutUs.jpg'

const AboutUs = () => {
    return (
        <div>
            <div>
                <div className='h-[20rem] w-[30rem] ring'>
                    <img 
                        src={aboutUs} 
                        className=' h-full w-full'
                        alt="about us"
                    />
                </div>

                <div>

                </div>
            </div>
        </div>
    )
}

export default AboutUs