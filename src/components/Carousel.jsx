import image1 from '../assets/images/k2.jpeg';
import image2 from '../assets/images/k3.png';
import image3 from '../assets/images/k4.png';
import flight from '../assets/images/flight.jpg'
import { BrowserRouter } from 'react-router-dom';
import '../styles/CarouselStyles.css';
import { useNavigate } from 'react-router-dom';


function Carousel(){
  const navigate = useNavigate();
    return(
        <div>
         
              {/* Carousel Start */}
      <div id="carouselExampleIndicators" className="carousel slide" data-bs-ride="carousel">
        <ol className="carousel-indicators">
          <li data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0" className="active"></li>
          <li data-bs-target="#carouselExampleIndicators" data-bs-slide-to="1"></li>
          <li data-bs-target="#carouselExampleIndicators" data-bs-slide-to="2"></li>
        </ol>

        <div className="carousel-inner">
          <div className="carousel-item active">
            <img className="d-block w-100" src={image2} alt="First slide" />
            <div className="carousel-caption d-none d-md-block">
                 <h2 style={{marginBottom:'20px', textAlign: 'center', color: 'white', fontWeight:'bolder',fontSize:'42px'}}>We Help You Choose Your Future Career</h2>
               {/* <button className="btn btn-success" style={{marginBottom:'240px', textAlign: 'center'}}>We Help You Choose Your Future Career</button> */}
              <button className="btn btn-success"  onClick={() => navigate('/Signup')} style={{marginBottom:'140px', textAlign: 'center'}}>Join Us Today</button>
            </div>
          </div>
          <div className="carousel-item">
            <img className="d-block w-100" src={image1} alt="Second slide" />
            <div className="carousel-caption d-none d-md-block">

<h2 style={{marginBottom:'20px', textAlign: 'center', color: 'white', fontWeight:'bolder',fontSize:'42px'}}>Do you want to take Career Tests?</h2>
<button className="btn btn-success" onClick={() => navigate('/Login')} style={{marginBottom:'140px', textAlign: 'center'}}>Sign In </button>
</div>
          </div>
          <div className="carousel-item">
            <img className="d-block w-100" src={image3} alt="Third slide" />
            <div className="carousel-caption d-none d-md-block">

<h2  style={{marginBottom:'20px', textAlign: 'center', color: 'white', fontWeight:'bolder',fontSize:'42px'}}>Ready to step into your Career</h2>
<button className="btn btn-success" onClick={() => navigate('/Signup')}  style={{marginBottom:'140px', textAlign: 'center'}}>Register</button>
</div>
          </div>
        </div>

        <a className="carousel-control-prev" href="#carouselExampleIndicators" role="button" data-bs-slide="prev">
          <span className="carousel-control-prev-icon" aria-hidden="true"></span>
          <span className="visually-hidden">Previous</span>
        </a>
        <a className="carousel-control-next" href="#carouselExampleIndicators" role="button" data-bs-slide="next">
          <span className="carousel-control-next-icon" aria-hidden="true"></span>
          <span className="visually-hidden">Next</span>
        </a>
      </div>
      {/* Carousel End */}

      {/* start of intro to platform */}
        <div className='intro'>
         <div><img src={flight} alt="image" className='flightImage' /></div>
          <div>
            <h2 className='text-success'>Career Guidance Platform</h2>
            <p className='para2'>
             Our Platform empowers individuals with expert advice, personalized career tests, and professional resources to help them make informed career choices. 
             We support students, job seekers, and professionals with mentorship and tools for success, guiding them toward fulfilling careers.
            </p>
          </div>

        </div>
      {/* end of intro */}

    {/* start of Testimonials */}
    <br /> <br /> <br />

    <h2 className="text-center text-success">Testimonials</h2>
    <br /> <br />

    <link href="https://cdn.jsdelivr.net/npm/mdb-ui-kit@5.0.0/dist/mdb.min.css" rel="stylesheet"/>
<script type="module" src="https://cdn.jsdelivr.net/npm/mdb-ui-kit@5.0.0/dist/mdb.min.js"></script>



<div id="carouselExampleControls" className="carousel slide text-center carousel-dark" data-bs-ride="carousel">
  <div className="carousel-inner">
    <div className="carousel-item active">
      <img 
        className="rounded-circle shadow-1-strong mb-4"
        src="https://mdbcdn.b-cdn.net/img/Photos/Avatars/img%20(10).webp" 
        alt="avatar"
        style={{ width: '150px' }} 
      />
      <div className="row d-flex justify-content-center">
        <div className="col-lg-8">
          <h5 className="mb-3">Maria Kate</h5>
          <p>Software Developer</p>
          <p className="text-muted">
            <i className="fas fa-quote-left pe-2"></i>
            I found the Career Guidance Platform incredibly helpful in discovering my passion for software
             development. The personalized career assessments and expert advice gave me the confidence 
            to transition into the tech industry and pursue a successful career as a software developer
          </p>
        </div>
      </div>
      <ul className="list-unstyled d-flex justify-content-center text-warning mb-0">
        <li><i className="fas fa-star fa-sm"></i></li>
        <li><i className="fas fa-star fa-sm"></i></li>
        <li><i className="fas fa-star fa-sm"></i></li>
        <li><i className="fas fa-star fa-sm"></i></li>
        <li><i className="fas fa-star fa-sm"></i></li>
      </ul>
    </div>
    <div className="carousel-item">
      <img 
        className="rounded-circle shadow-1-strong mb-4"
        src="https://mdbcdn.b-cdn.net/img/Photos/Avatars/img%20(32).webp" 
        alt="avatar"
        style={{ width: '150px' }} 
      />
      <div className="row d-flex justify-content-center">
        <div className="col-lg-8">
          <h5 className="mb-3">John Doe</h5>
          <p>Artist</p>
          <p className="text-muted">
            <i className="fas fa-quote-left pe-2"></i>
            As an aspiring artist, the Career Guidance Platform helped me recognize my true potential and passion
            for visual arts. Through their personalized guidance and resources, I gained the confidence and direction
            I needed to pursue a career as a professional artist, honing my skills and building a strong portfolio.
          </p>
        </div>
      </div>
      <ul className="list-unstyled d-flex justify-content-center text-warning mb-0">
        <li><i className="fas fa-star fa-sm"></i></li>
        <li><i className="fas fa-star fa-sm"></i></li>
        <li><i className="fas fa-star fa-sm"></i></li>
        <li><i className="fas fa-star fa-sm"></i></li>
        <li><i className="far fa-star fa-sm"></i></li>
      </ul>
    </div>
    <div className="carousel-item">
      <img 
        className="rounded-circle shadow-1-strong mb-4"
        src="https://mdbcdn.b-cdn.net/img/Photos/Avatars/img%20(1).webp" 
        alt="avatar" 
        style={{ width: '150px' }} 
      />
      <div className="row d-flex justify-content-center">
        <div className="col-lg-8">
          <h5 className="mb-3">Anna Deynah</h5>
          <p>Medical Doctor</p>
          <p className="text-muted">
            <i className="fas fa-quote-left pe-2"></i>
            As a Medical Doctor, the Career Guidance Platform provided me with valuable insights into various
            specializations and career paths within the healthcare industry. It helped me understand my strengths 
            and align my passion for patient care with the right medical field, ultimately guiding me toward
            a fulfilling and impactful career in medicine.
          </p>
        </div>
      </div>
      <ul className="list-unstyled d-flex justify-content-center text-warning mb-0">
        <li><i className="fas fa-star fa-sm"></i></li>
        <li><i className="fas fa-star fa-sm"></i></li>
        <li><i className="fas fa-star fa-sm"></i></li>
        <li><i className="fas fa-star fa-sm"></i></li>
        <li><i className="fas fa-star fa-sm"></i></li>
      </ul>
    </div>
  </div>
  <button 
    className="carousel-control-prev" 
    type="button" 
    data-bs-target="#carouselExampleControls" 
    data-bs-slide="prev"
  >
    <span className="carousel-control-prev-icon text-body" aria-hidden="true"></span>
    <span className="visually-hidden">Previous</span>
  </button>
  <button 
    className="carousel-control-next" 
    type="button" 
    data-bs-target="#carouselExampleControls" 
    data-bs-slide="next"
  >
    <span className="carousel-control-next-icon text-body" aria-hidden="true"></span>
    <span className="visually-hidden">Next</span>
  </button>
</div>

{/* end of Testimonials */}


      <br />
 

        </div>
    )
}

export default Carousel;