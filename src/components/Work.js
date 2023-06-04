import { useState } from 'react';
import classes from '../styles/Education.module.css'

function Work(){
    var [work,setWork]=useState('Icg')
    return(
        <>
        
        <div className='container mt_10' id="work">

            <div className="row d-flex justify-content-center animate__animated animate__fadeInUp">
                <div className="col-12 col-sm-8 col-lg-6 mb-5">
                    <big style={style.neon}>02.</big>
                    <div className='section_heading'><h3>Where I've worked</h3></div>
                    <div className='section_line rounded'></div>
                </div>
                <div className='col-12 col-sm-8 col-lg-8 d-flex justify-content-center'>
                    <div className='w-100 mt-4 d-flex'>
                        <div className='w-40'>
                            {work=='Icg'?
                            <div className={`p-3 ${classes.org_selected}`}>
                                ICG Consulting
                            </div>
                            :
                            <div className={`p-3 ${classes.org}`}
                            onClick={()=>setWork('Icg')}>ICG Consulting</div>}
                            
                            {work=='ACL'?
                            <div className={`p-3 ${classes.org_selected}`}>
                                ACL Digital
                            </div>
                            :
                            <div className={`p-3 ${classes.org}`}
                            onClick={()=>setWork('ACL')}>ACL Digital</div>}
                                                        
                                                        
                            {work=='Freelance'?
                            <div className={`p-3 ${classes.org_selected}`}>
                                Frontend Consultant
                            </div>
                            :
                            <div className={`p-3 ${classes.org}`}
                            onClick={()=>setWork('Freelance')}>Frontend Consultant</div>}
                        </div>
                        <div className='w-60 mb-5'>

                            <div className='p-3'>
                                {work=='Icg'&&
                                <>
                                <h4 style={style.white}>Web Developer</h4>
                                <h6 style={style.neon}>ICG Consulting Inc.</h6>
                                <p className='mb-4'>Feb 2023 - Present</p>

                                <div className='d-block'><i style={{color:'rgb(144,251,220)'}} className="fa-solid fa-caret-right me-2"></i> <p className='d-inline'>Planned the mock-ups of projects and worked with UI/UX team to generate the wireframes, ensuring the effective communication of design concepts</p></div>
                                <div className='d-block'><i style={{color:'rgb(144,251,220)'}} className="fa-solid fa-caret-right me-2"></i> <p className='d-inline'>Developed and deployed web apps using a variety of different technologies</p></div>
                                <div className='d-block'><i style={{color:'rgb(144,251,220)'}} className="fa-solid fa-caret-right me-2"></i> <p className='d-inline'>Revamped the existing websites to enhance user experience and improved SEO optimization. Traffic generated increased by 20%</p></div>
                                <div className='d-block'><i style={{color:'rgb(144,251,220)'}} className="fa-solid fa-caret-right me-2"></i> <p className='d-inline'>Actively churned through customer feedback and resolved reported bugs and possible feature requests established by the service team, PMs and organisational requests</p></div>
                                </>}
                                {work=='ACL'&&
                                <>
                                <h4 style={style.white}>Software Developer</h4>
                                <p className='mb-4'>Jan I Digital (Placed at ACL Digital)</p>
                                <p className='mb-4'>Feb 2022 - Feb 2023</p>

                                <div className='d-block'><i style={{color:'rgb(144,251,220)'}} className="fa-solid fa-caret-right me-2"></i> <p className='d-inline'>Worked with clients to provide end-end solution for existing projects</p></div>
                                <div className='d-block'><i style={{color:'rgb(144,251,220)'}} className="fa-solid fa-caret-right me-2"></i> <p className='d-inline'>Prepared the roadmap for new projects based on client requirements. Handled client meetings and provided status updates in a timely manner</p></div>
                                <div className='d-block'><i style={{color:'rgb(144,251,220)'}} className="fa-solid fa-caret-right me-2"></i> <p className='d-inline'>Participated in designing, development and testing of web apps that used a multitude of different technologies and stacks</p></div>
                                <div className='d-block'><i style={{color:'rgb(144,251,220)'}} className="fa-solid fa-caret-right me-2"></i> <p className='d-inline'>Worked on AWS Cloud integrations for deployment purposes, software testing and payment gateway integrations</p></div>
                                </>}
                                {work=='Freelance'&&
                                <>
                                <h4 style={style.white}>Frontend Consultant</h4>
                                <p className='mb-4'>Freelancing/Contract based</p>
                                <p className='mb-4'>October 2020 - Feb 2022</p>

                                <div className='d-block'><i style={{color:'rgb(144,251,220)'}} className="fa-solid fa-caret-right me-2"></i> <p className='d-inline'>Consultancy/Freelancing role where clients required to modernize and migrate the existing websites written in legacy PHP, Ajax, jQuery etc. to modern frameworks with complete design makeover. Designed, developed and tested the web apps to match the project outlines and addressed any issues clients faced when using the software</p></div>
                                
                                </>}
                            </div>

                        </div>
                    </div>
                </div>
            </div>
        </div>
        
        </>
    )
}
export default Work;
const style={
    neon:{
        color:'rgb(144,251,220)',
        fontFamily:'monospace'
    },
    white:{
        color:'white'
    }
}