import React from 'react';
import '../App.css';
import Utsavi_Photo from '../images/IMG_4619.JPG';

const AboutUs = () => {


    return (
        <div>
            <div className='container morepadding '>
                <hr className="text-countries-hr" />
        <div>        
        <h1 className="text-countries">The TBL Team</h1></div>
        <hr className="text-countries-hr" />
            <div className="about-wrapper">
                
                <div className='about-text'>
                    <p>We're just a few people who like traveling and sharing our experiences.
                    We hope our stories inspire you to fly and see the beauties of the world!</p>
                </div>
                
                <div className="about-profile"> 
                        <div className="about-cards">
                           <div><img className="about-photo" src={Utsavi_Photo} alt="Profile Photo"/></div>
                           <div><hr className="text-countries-hr" /></div>
                           <div><p className="about-profile-names">Utsavi</p>
                           <p>Favorite Places to Visit:</p>
                            <ul>
                                <li>
                                South India
                                </li>
                                <li>
                                    USA
                                </li>
                                <li>
                                    Europe
                                </li>
                            </ul>
                           </div>
                       </div> 

                       <div className="about-cards">
                           <div><img className="about-photo" src="http://images.ctfassets.net/t0fd7bi3x7x9/6MRqOHJ5oJD769H2iocyr2/16cd1f956defde4197cb72f8d3aec0ef/DSC_5567_-_Copy.jpg" alt="Profile Photo"/></div>
                           <div><hr className="text-countries-hr" /></div>
                           <div><p className="about-profile-names">Aryan</p>
                           <p>Favorite Places to Visit:</p>
                            <ul>
                                <li>
                                Japan
                                </li>
                                <li>
                                    Southwest USA
                                </li>
                                <li>
                                    Ireland
                                </li>
                            </ul>
                           </div>
                       </div> 

                       <div className="about-cards">
                           <div><img className="about-photo" src="http://images.ctfassets.net/t0fd7bi3x7x9/6MRqOHJ5oJD769H2iocyr2/16cd1f956defde4197cb72f8d3aec0ef/DSC_5567_-_Copy.jpg" alt="Profile Photo"/></div>
                           <div><hr className="text-countries-hr" /></div>
                           <div><p className="about-profile-names">Robert</p>
                           <p>Favorite Places to Visit:</p>
                            <ul>
                                <li>
                                Japan
                                </li>
                                <li>
                                    Southwest USA
                                </li>
                                <li>
                                    Ireland
                                </li>
                            </ul>
                           
                           </div>
                       </div> 
                </div>
            </div>
        </div>
    </div>

    )
}
export default AboutUs;