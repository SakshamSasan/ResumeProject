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

                    <div className='col-12 col-sm-8 col-lg-9 pt-4 my-5 m-auto '>
                        <div style={{position:'relative'}} className='w-100 d-flex'>
                            <div className={`rounded wp-60 ${classes.info}`} >
                                            <span style={style.neon}>Learning Management System</span>
                                            <h4 className='my-3' style={style.white}>Scholarist</h4>
                                            <p className={classes.description}>Scholarist is a learning management system prototype which can be used to teach students virtually in an interactive manner. Utilizes video calling, real-time chatting, multi-language support and many other features</p>
                                            <span className='my-2 d-inline-block' style={{width:'60%',color:'rgb(150,159,187)'}}>ReactJS &nbsp; i18n &nbsp; ExpressJS &nbsp; AWS &nbsp; MySQL &nbsp; Material UI</span>
                                            <br />
                                            <span ><a href='https://scholarist.com' target='_blank' style={style.white}><i className="fa-solid fa-link d-inline-block resize "></i></a></span>
                            </div>
                            <div className={`rounded wp-60 ${classes.picSC}`}>
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

                    <div className='col-12 col-sm-8 col-lg-9 pt-4 my-5 m-auto '>
                        <div style={{position:'relative'}} className='w-100 d-flex'>
                            <div className={`rounded wp-60 ${classes.info2}`} >
                                            <span style={style.neon}>Real-time messaging app</span>
                                            <h4 className='my-3' style={style.white}>Direct Messager</h4>
                                            <p className={classes.description}>A full-stack chatting app that supports real-time messaging. Users can
                                             search for people, start chatting with them and even create/modify groups</p>
                                            <span className='my-2 d-inline-block' style={{width:'60%',color:'rgb(150,159,187)'}}>Socket.IO &nbsp; ReactJS &nbsp; ExpressJS &nbsp; Firebase &nbsp; Toasts</span>
                                            <br />
                                            <span ><a href="https://github.com/SakshamSasan/DirectMessager" target='_blank' style={style.white}><i className="fa-brands fa-github me-4 d-inline-block resize"></i></a><a href='https://dmer.herokuapp.com' target='_blank' style={style.white}><i className="fa-solid fa-link d-inline-block resize "></i></a></span>
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
                                            <span style={style.neon}>Music Player built using FARM Stack</span>
                                            <h4 className='my-3' style={style.white}>JAS Music Lounge</h4>
                                            <p className={classes.description}>A Spotify-like music player that features
                                            songs, artists, functionality to like/dislike and edit user profiles etc. Users can sign up and start using the app</p>
                                            <span className='my-2 d-inline-block' style={{width:'60%',color:'rgb(150,159,187)'}}>ReactJS &nbsp; FastAPI &nbsp; Redux &nbsp; MySQL &nbsp; SQLAlchemy</span>
                                            <br />
                                            <span ><a href="https://github.com/SakshamSasan/jasmusic" target='_blank' style={style.white}><i className="fa-brands fa-github mx-4 d-inline-block resize"></i></a><a href='https://sakshamsasan.github.io/jasmusic/' target='_blank' style={style.white}><i className="fa-solid fa-link d-inline-block resize "></i></a></span>
                            </div>
                
                        </div>
                        

                    </div>

                    

                    <div className='col-12 mt_10'>

                    </div>

                    {/* <div className='col-12 col-sm-8 col-lg-9 pt-4 my-5 m-auto'>
                        <div style={{position:'relative'}} className='w-100 d-flex'>
                            <div className={`rounded wp-60 ${classes.picMP}`}>
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

                            <div className={`rounded wp-60 ${classes.info2}`} >
                                            <span style={style.neon}>Redux managed SPA</span>
                                            <h4 className='my-3' style={style.white}>Pixity</h4>
                                            <p className={classes.description}>A Redux managed single page movies app where users can search for movies and select their favourites from the list. Deployed on Github Pages</p>
                                            <span className='my-2 d-inline-block' style={{width:'60%',color:'rgb(150,159,187)'}}>ReactJS &nbsp; Redux &nbsp; Bootstrap &nbsp; Git &nbsp; oMDB API </span>
                                            <br />
                                            <span ><a href="https://github.com/SakshamSasan/Movies" target='_blank' style={style.white}><i className="fa-brands fa-github mx-4 d-inline-block resize"></i></a><a href='https://sakshamsasan.github.io/Movies/' target='_blank' style={style.white}><i className="fa-solid fa-link d-inline-block resize "></i></a></span>
                            </div>
                
                        </div>
                        

                    </div> */}


                    <div className='col-12 mt_10'>

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