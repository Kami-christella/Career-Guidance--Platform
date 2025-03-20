import '../styles/Footer.css'


function Footer() {
    return (
      <footer className="d-flex flex-wrap justify-content-between align-items-center py-3 my-4 border-top bg-dark text-light  bottom-0 w-100" style={{ minHeight: "80px" }}>
        <div className="col-md-4 d-flex align-items-center">
          <a href="/" className="mb-3 me-2 mb-md-0 text-light text-decoration-none lh-1">
            <svg width="30" height="24" fill="currentColor" className="bi bi-bootstrap">
              <use href="#bootstrap"></use>
            </svg>
          </a>
          <span className="mb-3 mb-md-0">© 2025 Career Guidance Platform</span>
        </div>
  
        <ul className="nav col-md-4 justify-content-end list-unstyled d-flex">
          <li className="ms-3">
            <a className="text-light" href="#">
              <i className="bi bi-twitter" style={{ fontSize: "24px" }}></i>
            </a>
          </li>
          <li className="ms-3">
            <a className="text-light" href="#">
              <i className="bi bi-instagram" style={{ fontSize: "24px" }}></i>
            </a>
          </li>
          <li className="ms-3 me-4">
            <a className="text-light" href="#">
              <i className="bi bi-facebook" style={{ fontSize: "24px" }}></i>
            </a>
          </li>
        </ul>
      </footer>
    );
  }
  
  export default Footer;
  