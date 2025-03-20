import image1 from '../assets/images/c2.jfif';

function About() {
    return (
        <div>
            <br /> <br /> <br /> <br /> <br /> <br />

            <div className="container">
                <div className="row">
                    <div className="col-xl-5 col-lg-5">
                        <div className="about_info">
                            <div className="section_title mb-20px">
                                <span className="text-success fw-bold">About Us</span>
                                <h3>Career Guidance&nbsp;Platform</h3>
                            </div>
                            <p>
                                Career Guidance Platform empowers individuals with expert advice, personalized career tests, and professional resources to help them make informed career choices. 
                                We support students, job seekers, and professionals with mentorship and tools for success, guiding them toward fulfilling careers.
                            </p>
                        </div>
                    </div>
                    <div className="col-xl-7 col-lg-7">
                        <div className="about_thumb d-flex float-end">
                            <div className="img_1">
                                <img src={image1} alt="About" className="img-fluid" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Cards Section */}
            <div className="container mt-5">
                <div className="row justify-content-center">
                    <div className="col-lg-4">
                        <div className="card text-white bg-success mb-3" style={{ maxWidth: "25rem" }}>
                            <div className="card-header">Mission</div>
                            <div className="card-body">
                                {/* <h5 className="card-title">Empowering Careers, Shaping Futures</h5> */}
                                <p className="card-text">
                                We empower individuals with expert guidance, personalized career assessments, and professional 
                                development resources to help them make informed career decisions and achieve their goals.
                                </p>
                            </div>
                        </div>
                    </div>

                    <div className="col-lg-4">
                        <div className="card text-white bg-dark mb-3" style={{ maxWidth: "25rem" }}>
                            <div className="card-header">Vision</div>
                            <div className="card-body">
                                {/* <h5 className="card-title">Inspiring Growth, Unlocking Potential</h5> */}
                                <p className="card-text">
                                Our vision is to be the leading platform that empowers individuals to explore, grow, 
                                and thrive in their careers through innovative guidance, mentorship, and skill development
                                </p>
                            </div>
                        </div>
                    </div>

                    <div className="col-lg-4">
                        <div className="card text-white bg-success mb-3" style={{ maxWidth: "25rem" }}>
                            <div className="card-header">Purpose</div>
                            <div className="card-body">
                                {/* <h5 className="card-title">Guiding Paths, Creating Opportunities</h5> */}
                                <p className="card-text">
                                Our purpose is to provide individuals with the right tools, insights, and support to navigate their
                                 career paths confidently and achieve meaningful professional success.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {/* End of Cards Section */}
        </div>
    );
}

export default About;
