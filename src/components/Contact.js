import classes from '../styles/Contact.module.css'
function ContactMe(){
    return(
        <>
        <div className="container mt_10" id="contact">
            <div className="row d-flex justify-content-center animate__animated animate__fadeInUp">
                <div className="col-10 d-flex justify-content-center">
                    <big style={style.neon} className='my-2'>04. What's next ?</big>
                </div>
                <div className="col-10 d-flex flex-column align-items-center">
                    <h4 style={style.white} className="my-5">Get in Touch</h4>
                    <p className='w-contact text-center'>
                        Graduated in April 2022 and freelanced for 4 months, I am looking for 
                        more permanent opportunities. Whether you have any specific/general roles or just want to say hi,
                        you can contact me below:
                    </p>
                    <big className='my-5 d-flex justify-content-center flex-nowrap'>
                        <a className='no-decoration' href="https://github.com/SakshamSasan" target='_blank'><i className={`${classes.icon} fa-brands fa-github mx-4 d-inline-block resize`}></i></a>
                        <a className='no-decoration' href="https://www.instagram.com/sakshamsasan/?hl=en" target='_blank'><i className={`${classes.icon} fa-brands fa-instagram mx-4 d-inline-block resize`}></i></a>
                        <a href="https://ca.linkedin.com/in/saksham-sasan-6a626b204" className='no-decoration' target='_blank'><i className={`${classes.icon} fa-brands fa-linkedin-in mx-4 d-inline-block resize`}></i></a>
                        <a href='mailto:sakshamsasan07@gmail.com' target='_blank' className='no-decoration'><i className={`${classes.icon} fa-solid fa-g mx-4 d-inline-block resize`}></i></a>
                    </big>
                </div>
            </div>
        </div>
        </>
    )
}
const style={
    neon:{
        color:'rgb(144,251,220)',
        fontFamily:'monospace'
    },
    white:{
        color:'white'
    }
}
export default ContactMe;