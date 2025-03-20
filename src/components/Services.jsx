import '../styles/Services.css';
import "bootstrap/dist/css/bootstrap.min.css"; // If using Bootstrap
import "@fortawesome/fontawesome-free/css/all.min.css"; // Import FontAwesome CSS
import "bootstrap-icons/font/bootstrap-icons.css";


function Services() {
  return (
    <div className="container15">
      <div className="service-wrapper">
        <div className="service">
          <div className="cards">
            <div className="card">
            <i className="bi bi-journal-text"></i>
              <h2>Career assessments</h2>
              <p className="txt1">
              Our platform offers comprehensive career assessments that evaluate your skills, 
              interests, and goals to provide personalized career path recommendations and guidance.
              </p>
            </div>

            <div className="card">
              <i className="bi bi-lightbulb"></i>
              <h2>Career path recommendations</h2>
              <p className="txt2">
              Our platform provides tailored career path recommendations based on your unique skills, interests, and goals,
               helping you explore and navigate the best career opportunities that align with your aspirations.
              </p>
            </div>

            <div className="card">
              <i className="bi bi-pie-chart"></i>
              <h2>Industry insights</h2>
              <p className="txt1">
              Our platform offers valuable industry insights by analyzing current trends, challenges, 
              and opportunities, helping users stay informed and make strategic decisions in their career planning.
              </p>
            </div>

            <div className="card">
              <i className="bi bi-people"></i>
              <h2>Professional Networking</h2>
              <p className="txt1">
              Our platform facilitates professional networking by connecting users
             with industry experts, mentors, and peers, fostering meaningful relationships and collaborative growth.
              </p>
            </div>

            <div className="card">
              <i className="bi bi-mortarboard"></i>
              <h2>Mentorship programs</h2>
              <p className="txt1">
              Our platform offers mentorship programs that pair users with experienced
              professionals to provide guidance, support, and valuable insights for career growth and development.
              </p>
            </div>

            <div className="card">
              <i className="bi bi-bar-chart-line"></i>
              <h2>Job Market Trends </h2>
              <p className="txt1">
              Our platform provides real-time job market trends, offering users insights into in-demand skills,
             emerging industries, and evolving career opportunities to help them make informed decisions.
              </p>
            </div>

          </div>
        </div>
      </div>
    </div>
  );
}

export default Services;
