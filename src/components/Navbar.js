import classes from '../styles/Navbar.module.css'

function Navbar(){
    return(
        <nav className="navbar navbar-expand-lg navbar-dark">
            <div className="container-fluid">
                <div className='navbar-brand d-flex'>
                    <div className={`${classes.w_4} me-3`}>
                        <div className={classes.aspectratio}></div>
                    </div>
                </div>
                <button className={`${classes.icon} navbar-toggler`} type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="">
                        <i style={{color:'rgb(144,251,220)'}} className="fa-solid fa-bars-staggered"></i>
                    </span>
                </button>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav m-auto mb-2 mb-lg-0 my-5 my-lg-0">
                        <li className="nav-item mx-4">
                            <a className="nav-link" aria-current="page" href="#aboutme">About Me</a>
                        </li>
                        
                        <li className="nav-item mx-4">
                            <a className="nav-link" href="#education" aria-disabled="true">Education</a>
                        </li>

                        <li className="nav-item mx-4">
                            <a className="nav-link" href="#projects" aria-disabled="true">Projects</a>
                        </li>

                        <li className="nav-item mx-4">
                            <a className="nav-link" href="#contact" aria-disabled="true">Contact Me</a>
                        </li>

                    </ul>
        
                </div>
            </div>
        </nav>
    )
}
export default Navbar;