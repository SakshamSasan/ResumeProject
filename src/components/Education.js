import { useState } from 'react';
import classes from '../styles/Education.module.css'

function Education(){
    var [edu,setEdu]=useState('Seneca')
    return(
        <>
        
        <div className='container mt_10' id="education">

            <div className="row d-flex justify-content-center animate__animated animate__fadeInUp">
                <div className="col-12 col-sm-8 col-lg-6 mb-5">
                    <big style={style.neon}>02.</big>
                    <div className='section_heading'><h3>Education</h3></div>
                    <div className='section_line rounded'></div>
                </div>
                <div className='col-12 col-sm-8 col-lg-8 d-flex justify-content-center'>
                    <div className='w-100 mt-4 d-flex'>
                        <div className='w-40'>
                            {edu=='Seneca'?
                            <div className={`p-3 ${classes.org_selected}`}>
                                Seneca College
                            </div>
                            :
                            <div className={`p-3 ${classes.org}`}
                            onClick={()=>setEdu('Seneca')}>Seneca College</div>}
                            
                            {edu=='CN'?
                            <div className={`p-3 ${classes.org_selected}`}>
                                Coding Ninjas
                            </div>
                            :
                            <div className={`p-3 ${classes.org}`}
                            onClick={()=>setEdu('CN')}>Coding Ninjas</div>}
                                                        
                                                        
                            {edu=='School'?
                            <div className={`p-3 ${classes.org_selected}`}>
                                SGGS Public
                            </div>
                            :
                            <div className={`p-3 ${classes.org}`}
                            onClick={()=>setEdu('School')}>SGGS Public</div>}
                        </div>
                        <div className='w-60 mb-5'>

                            <div className='p-3'>
                                {edu=='Seneca'&&
                                <>
                                <h4 style={style.white}>Advanced Diploma</h4>
                                <h6 style={style.neon}>Computer Engineering</h6>
                                <p className='mb-4'>Jan 2020 - April 2022</p>

                                <i style={{color:'rgb(144,251,220)'}} className="fa-solid fa-caret-right me-2"></i> <p className='d-inline'>Graduated the course
                                with 3.9 GPA and received President's Honours Award thrice</p>
                                </>}
                                {edu=='CN'&&
                                <>
                                <h4 style={style.white}>Full-Stack Web Dev + DS/Algo</h4>
                                <p className='mb-4'>Jan 20222 - Jan 2023</p>

                                <i style={{color:'rgb(144,251,220)'}} className="fa-solid fa-caret-right me-2"></i> <p className='d-inline'>Completed Coding Ninjas
                                MERN Stack and Python courses with top rankings. Mentored new students and assisted in doubt clearance</p>
                                </>}
                                {edu=='School'&&
                                <>
                                <h4 style={style.white}>High School Diploma</h4>
                                <h6 style={style.neon}>CBSE - Non Medical</h6>
                                <p className='mb-4'>Jan 2018 - April 2019</p>

                                <i style={{color:'rgb(144,251,220)'}} className="fa-solid fa-caret-right me-2"></i> <p className='d-inline'>Graduated Secondary School in India with a final 96% in CBSE All India Board Exam</p>
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
export default Education;
const style={
    neon:{
        color:'rgb(144,251,220)',
        fontFamily:'monospace'
    },
    white:{
        color:'white'
    }
}