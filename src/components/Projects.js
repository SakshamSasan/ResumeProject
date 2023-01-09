import classes from '../styles/Projects.module.css'

function Projects(){
    return(
        <>
            <div className='container mt_10' id="projects">
                <div className='row d-flex justify-content-center d-lg-block animate__animated animate__fadeInUp'>
                    <div className='col-12 col-sm-8 col-lg-6'>
                        <big style={style.neon}>03.</big>
                        <div className='section_heading '><h3>Projects</h3></div>
                        <div className='section_line rounded'></div>
                    </div>

                    <div className='col-12 col-sm-8 col-lg-9 pt-4 my-5 m-auto'>
                        <div style={{position:'relative'}} className='w-100 d-flex'>
                            <div className={`rounded wp-60 ${classes.picJAS}`}>
                                    <div className={classes.cover} style={{color:'transparent'}}>
                                            <span >Music Player built using MERN Stack</span>
                                            <h4 className='my-3' >JAS Music Lounge</h4>
                                            <p className={classes.description2} >A Spotify-like music player that features
                                            songs, artists, functionality to like/dislike and edit user profiles etc. Users can sign up and start using the app</p>
                                            <span className='mt-2 d-inline-block' style={{width:'60%'}}>ReactJS &nbsp; ExpressJS &nbsp; PassportJS &nbsp; MongoDB &nbsp; BootStrap</span>
                                            <br />
                                            <span><i className="fa-brands fa-github mx-4 d-inline-block resize"></i><i className="fa-solid fa-link d-inline-block resize "></i></span>
                                    </div>
                            </div>

                            <div className={`rounded wp-60 ${classes.info}`} >
                                            <span style={style.neon}>Music Player built using MERN Stack</span>
                                            <h4 className='my-3' style={style.white}>JAS Music Lounge</h4>
                                            <p className={classes.description}>A Spotify-like music player that features
                                            songs, artists, functionality to like/dislike and edit user profiles etc. Users can sign up and start using the app</p>
                                            <span className='my-2 d-inline-block' style={{width:'60%',color:'rgb(150,159,187)'}}>ReactJS &nbsp; ExpressJS &nbsp; PassportJS &nbsp; MongoDB &nbsp; BootStrap</span>
                                            <br />
                                            <span ><a href="https://github.com/SakshamSasan/JASLounge" target='_blank' style={style.white}><i className="fa-brands fa-github mx-4 d-inline-block resize"></i></a><a href='jasmusic.herokuapp.com' target='_blank' style={style.white}><i className="fa-solid fa-link d-inline-block resize "></i></a></span>
                            </div>
                
                        </div>
                        

                    </div>

                    <div className='col-12 mt_10'>

                    </div>

                    <div className='col-12 col-sm-8 col-lg-9 pt-4 my-5 m-auto '>
                        <div style={{position:'relative'}} className='w-100 d-flex'>
                            <div className={`rounded wp-60 ${classes.info2}`} >
                                            <span style={style.neon}>Real-time messaging app</span>
                                            <h4 className='my-3' style={style.white}>Direct Messager</h4>
                                            <p className={classes.description}>A full-stack chatting app that supports real-time messaging. Users can
                                             search for people, start chatting with them and even create/modify groups</p>
                                            <span className='my-2 d-inline-block' style={{width:'60%',color:'rgb(150,159,187)'}}>Socket.IO &nbsp; ReactJS &nbsp; ExpressJS &nbsp; Firebase &nbsp; Toasts</span>
                                            <br />
                                            <span ><a href="https://github.com/SakshamSasan/DirectMessager" target='_blank' style={style.white}><i className="fa-brands fa-github me-4 d-inline-block resize"></i></a><a href='dmer.herokuapp.com' target='_blank' style={style.white}><i className="fa-solid fa-link d-inline-block resize "></i></a></span>
                            </div>
                            <div className={`rounded wp-60 ${classes.picDM}`}>
                                    <div className={classes.cover} style={{color:'transparent'}}>
                                            <span >Real-time messaging app</span>
                                            <h4 className='my-3' >JAS Music Lounge</h4>
                                            <p className={classes.description2} >A Spotify-like music player that features
                                            songs, artists, functionality to like/dislike and edit user profiles etc. Users can sign up and start using the app</p>
                                            <span className='mt-2 d-inline-block' style={{width:'60%'}}>Socket.IO &nbsp; ReactJS &nbsp; ExpressJS &nbsp; Firebase &nbsp; Toasts</span>
                                            <br />
                                            <span><i className="fa-brands fa-github mx-4 d-inline-block resize"></i><i className="fa-solid fa-link d-inline-block resize "></i></span>
                                    </div>
                            </div>

                            
                
                        </div>
                        

                    </div>

                    <div className='col-12 mt_10'>

                    </div>

                    <div className='col-12 col-sm-8 col-lg-9 pt-4 my-5 m-auto'>
                        <div style={{position:'relative'}} className='w-100 d-flex'>
                            <div className={`rounded wp-60 ${classes.picBlog}`}>
                                    <div className={classes.cover} style={{color:'transparent'}}>
                                            <span >A Single Page Blog website</span>
                                            <h4 className='my-3' >Bloggy</h4>
                                            <p className={classes.description2} >An SPA React app which uses Firebase in Backend to create blog posts. Users can create and read these posts.
                                            Unit/end-to-end tests are written using RTL and Cypress. Designed using Figma</p>
                                            <span className='mt-2 d-inline-block' style={{width:'60%'}}>ReactJS &nbsp; Cypress &nbsp; Figma &nbsp; BootStrap &nbsp; Firebase</span>
                                            <br />
                                            <span><i className="fa-brands fa-github mx-4 d-inline-block resize"></i><i className="fa-solid fa-link d-inline-block resize "></i></span>
                                    </div>
                            </div>

                            <div className={`rounded wp-60 ${classes.info}`} >
                                            <span style={style.neon}>A Single Page Blog website</span>
                                            <h4 className='my-3' style={style.white}>Bloggy</h4>
                                            <p className={classes.description}>An SPA React app which uses Firebase in Backend to create blog posts. Users can create and read these posts.
                                            Unit/end-to-end tests are written using RTL and Cypress. Designed using Figma</p>
                                            <span className='my-2 d-inline-block' style={{width:'60%',color:'rgb(150,159,187)'}}>ReactJS &nbsp; Cypress &nbsp; Figma &nbsp; BootStrap &nbsp; Firebase</span>
                                            <br />
                                            <span ><a href="https://github.com/SakshamSasan/Blog" target='_blank' style={style.white}><i className="fa-brands fa-github mx-4 d-inline-block resize"></i></a><a href='https://sakshamsasan.github.io/Blog/' target='_blank' style={style.white}><i className="fa-solid fa-link d-inline-block resize "></i></a></span>
                            </div>
                
                        </div>
                        

                    </div>

                    <div className='col-12 mt_10'>

                    </div>

                    <div className='col-12 col-sm-8 col-lg-9 pt-4 my-5 m-auto '>
                        <div style={{position:'relative'}} className='w-100 d-flex'>
                            <div className={`rounded wp-60 ${classes.info2}`} >
                                            <span style={style.neon}>Redux managed SPA</span>
                                            <h4 className='my-3' style={style.white}>Pixity Movies App</h4>
                                            <p className={classes.description}>A single page React movies app where state is managed using
                                            Redux. oMDB API is used to search for films. Users can select their favourites from the list.</p>
                                            <span className='my-2 d-inline-block' style={{width:'60%',color:'rgb(150,159,187)'}}>Redux&nbsp; ReactJS &nbsp; REST API &nbsp; BootStrap &nbsp;Figma</span>
                                            <br />
                                            <span ><a href="https://github.com/SakshamSasan/Movies" target='_blank' style={style.white}><i className="fa-brands fa-github me-4 d-inline-block resize"></i></a><a href='https://sakshamsasan.github.io/Movies/' target='_blank' style={style.white}><i className="fa-solid fa-link d-inline-block resize "></i></a></span>
                            </div>
                            <div className={`rounded wp-60 ${classes.picMP}`}>
                                    <div className={classes.cover} style={{color:'transparent'}}>
                                            <span >Real-time messaging app</span>
                                            <h4 className='my-3' >JAS Music Lounge</h4>
                                            <p className={classes.description2} >AA single page React movies app where state is managed using
                                            Redux. oMDB API is used to search for films. Users can select their favourites from the list.</p>
                                            <span className='mt-2 d-inline-block' style={{width:'60%'}}>Socket.IO &nbsp; ReactJS &nbsp; ExpressJS &nbsp; Firebase &nbsp; Toasts</span>
                                            <br />
                                            <span><i className="fa-brands fa-github mx-4 d-inline-block resize"></i><i className="fa-solid fa-link d-inline-block resize "></i></span>
                                    </div>
                            </div>

                            
                
                        </div>
                        

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
        color:'white',
    }
}
export default Projects;