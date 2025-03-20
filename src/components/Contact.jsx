
import '../styles/Contact.css';
import "bootstrap/dist/css/bootstrap.min.css"; // If using Bootstrap
import "@fortawesome/fontawesome-free/css/all.min.css"; // Import FontAwesome CSS
import { useForm } from "react-hook-form";
import axios from 'axios';


function Contact() {

  const { register, handleSubmit } = useForm();

    const onsend = async (data) => {
        try {
            const formData = {
                names: data.names,
                email: data.email,
                phone: data.phone,
                message: data.message
            };

            const response = await axios.post(
                "http://localhost:5001/contact/createContact",
                formData,
                {
                    headers: {
                        "Content-Type": "application/json"
                             }
                }
            );
            alert("Contact message sent successfully");
            console.log("Contact message sent successfully:", response.data);
        } catch (error) {
          alert("Contact message not sent");
            console.error("Error sending message:", error.response?.data || error.message);
        }
    };
  return (
    <section className="contact1">
      <div className="content1">
        <h2 >Book Us</h2>
        <p>
        Ready to experience our exceptional services in person? Booking with us is quick and easy! 
        Simply fill out the form to schedule your appointment if you’d like to meet us in person, 
        or reach out for any other inquiries. We look forward to serving you!
        </p>
      </div>
      <div className="container1">
        <div className="contactInfo1">
          <div className="box1">
            <div className="icon1">
            <i className="bi bi-geo-fill" id='contactIcons'></i>
            </div>
            <div className="text1">
              <h3>Address</h3>
              <p>
              Kigali, KG 176st,
                <br />
                Kigali - RWANDA
              </p>
            </div>
          </div>
          <div className="box1">
            <div className="icon1">
            <i className="bi bi-telephone-fill" id='contactIcons'></i>
            </div>
            <div className="text1">
              <h3>Phone</h3>
              <p>0780449682</p>
            </div>
          </div>
          <div className="box1">
            <div className="icon1">
            <i className="bi bi-envelope-heart-fill" id='contactIcons'></i>
            </div>
            <div className="text1">
              <h3>Email</h3>
              <p>kamichristellaa@gmail.com</p>
            </div>
          </div>
          <h2 className="txt1">Connect with Us</h2>
          <ul className="sci1">
            <li>
              <a href="#">
              <i className="bi bi-facebook" id='socialIcons'></i>
              </a>
            </li>
            <li>
              <a href="#">
              <i className="bi bi-instagram" id='socialIcons'></i>
              </a>
            </li>
            <li>
              <a href="#">
              <i className="bi bi-linkedin" id='socialIcons'></i>
              </a>
            </li>
          </ul>
        </div>

        <div className="contactForm1">
          <form onSubmit={handleSubmit(onsend)}>
            <h2 className='sendSmsTitle'>Send Message</h2>
            <div className="inputBox1">
              <input type="text" id="name" required
               {...register('names', { required: true })}
              />
              <span>Full Name</span>
            </div>
            <div className="inputBox1">
              <input type="email" id="email" required 
              {...register('email', { required: true })}
              />
              <span>Email</span>
            </div>
            <div className="inputBox1">
              <input type="number" id="phone" required 
              {...register('phone', { required: true })}
              />
              <span>Phone Number</span>
            </div>
            <div className="inputBox1">
              <textarea id="message" type="text" required
              {...register('message', { required: true })}
              />
              <span>Type your Message...</span>
            </div>
            <div className="inputBox1">
              <input type="submit" value="Send" />
            </div>
          </form>
        </div>
      </div>
    </section>
  );
}

export default Contact;
