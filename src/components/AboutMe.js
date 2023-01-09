import classes from '../styles/Aboutme.module.css'

function AboutMe(){
    return(
        <>
        <div className={`container ${classes.mt_5} px-4`} id="aboutme">
            <div className='row '>
                <div className='col-12 col-lg-7 animate__animated animate__fadeInLeft'>
                    <big style={style.neon}>Hi, my name is</big>
                    <h1 style={style.white} className='my-4'>Saksham Sasan.</h1>
                    <h2 style={style.grey}>I am a software developer.</h2>
                </div>

                <div className={`col-12 mt-5 mt-lg-0 col-lg-5 d-flex justify-content-center animate__animated animate__fadeInRight`}>
                    <div className={classes.profilePic}>

                    </div>
                </div>
            </div>
            
        </div>

        <div className='container mt_10'>
            <div className='row d-flex justify-content-center d-lg-block animate__animated animate__fadeInUp'>
                <div className='col-12 col-sm-8 col-lg-6'>
                    <big style={style.neon}>01.</big>
                    <div className='section_heading '><h3>About Me</h3></div>
                    <div className='section_line rounded'></div>
                </div>
                <div className='col-12 col-sm-8 col-lg-8 pt-4'>
                <p>Hi! I am Saksham Sasan and I am a 21 years old software developer in Toronto. 
                I have worked on many projects, some personal and others for clients.
                </p>
                <p>I enjoy creating products that wow the customer/client and exceed their expectations.
                My work is centered around perfecting every pixel of the app I am developing to deliver visually-stunning experiences.
                I did my high school in India and have completed Advanced Diploma in Computer Engineering from <span style={{color:'rgb(144,251,220)'}}>Seneca College</span>.
                I have freelancing experience in building web-apps. I am a full-stack(<span style={{color:'rgb(144,251,220)'}}>MERN</span>) developer and also well-versed with basics
                of programming, <span style={{color:'rgb(144,251,220)'}}>Data Structures</span>,<span style={{color:'rgb(144,251,220)'}}>Algorithms</span> etc. Recently, a good portion of my time is also going in exploring software testing and
                cloud computing 
                </p>
                <p>Here are some of the technologies I've recenlt worked with:</p>
                <table className='m-auto my-5' style={{color:'rgb(136,146,176)',fontFamily:'monospace'}}>
                    <tr className='p-2' >
                        <td className='d-inline-block my-2 ml-3 me-5'><i style={{color:'rgb(144,251,220)'}} className="fa-solid fa-caret-right"></i> JavaScript(ES6+)</td>
                        <td><i style={{color:'rgb(144,251,220)'}} className="fa-solid fa-caret-right"></i> HTML, CSS</td>
                        
                    </tr>
                    <tr className='p-2'>
                        <td className='d-inline-block my-2 ml-3 me-5'><i style={{color:'rgb(144,251,220)'}} className="fa-solid fa-caret-right"></i> React</td>
                        <td><i style={{color:'rgb(144,251,220)'}} className="fa-solid fa-caret-right"></i> ExpressJS</td>
                    </tr>
                    <tr className='p-2'>
                        <td className='d-inline-block my-2 ml-3 me-5'><i style={{color:'rgb(144,251,220)'}} className="fa-solid fa-caret-right"></i> NodeJS</td>
                        <td><i style={{color:'rgb(144,251,220)'}} className="fa-solid fa-caret-right"></i> MongoDB</td>
                    </tr>
                    <tr className='p-2'>
                        <td className='d-inline-block my-2 ml-3 me-5'><i style={{color:'rgb(144,251,220)'}} className="fa-solid fa-caret-right"></i> AWS</td>
                        <td><i style={{color:'rgb(144,251,220)'}} className="fa-solid fa-caret-right"></i> Python</td>
                    </tr>
                </table>
                </div>
                
            </div>
        </div>
        </>
    )
}
const style = {
    white:{
        color:'white',
        fontSize:'4rem'
    },
    neon:{
        color:'rgb(144,251,220)',
        fontFamily:'monospace'
    },
    grey:{
        color:'rgb(136,146,176)',
        fontSize:'4rem'
    }
}
export default AboutMe;
