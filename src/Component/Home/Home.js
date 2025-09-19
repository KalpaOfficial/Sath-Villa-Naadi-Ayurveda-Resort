import React, { useState, useEffect } from "react";
import Nav from "../Nav/Nav";
import Footer from "../Footer/Footer";
import "../Home/Home.css";
 import { FaMapMarkerAlt, FaPhoneAlt, FaEnvelope } from "react-icons/fa"; // icons

// images
import heroImage from "../Home/frontview.jpg";
import package1 from "../Home/garden.jpg";
import package2 from "../Home/flowerbath.jpg";
import package3 from "../Home/welcomeayu.jpg";
import package4 from "../Home/gardenjuice.jpg";

const sliderImages = [package1, package2, package3, package4];

function Home() {
  const [currentIndex, setCurrentIndex] = useState(0);

  // Auto-slide every 4 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) =>
        prevIndex === sliderImages.length - 1 ? 0 : prevIndex + 1
      );
    }, 4000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="home-container">
      <Nav />

      {/* Photo Slider */}
      <section className="slider-section">
        {sliderImages.map((img, index) => (
          <div
            key={index}
            className={`slide ${index === currentIndex ? "active" : ""}`}
          >
            <img src={img} alt={`Slide ${index + 1}`} />
          </div>
        ))}
        <div className="slider-dots">
          {sliderImages.map((_, index) => (
            <span
              key={index}
              className={index === currentIndex ? "dot active-dot" : "dot"}
              onClick={() => setCurrentIndex(index)}
            ></span>
          ))}
        </div>
      </section>

    
<section className="contact-tab">
  <a href="https://goo.gl/maps/XXXXX" target="_blank" rel="noreferrer" className="contact-box">
    <FaMapMarkerAlt className="icon" />
    <p>Moragalla, Beruwala, Sri Lanka</p>
  </a>
  <a href="tel:+94771234567" className="contact-box">
    <FaPhoneAlt className="icon" />
    <p>+94 77 123 4567</p>
  </a>
  <a href="mailto:info@sathvilla.com" className="contact-box">
    <FaEnvelope className="icon" />
    <p>info@sathvilla.com</p>
  </a>
</section>

      {/* Hero Section */}
      <section className="hero-section">
        <div className="hero-content">
          <h1>Welcome to Sath Villa & Naadi Ayurveda Resort</h1>
          <p>
            Immerse yourself in traditional Ayurveda treatments in a tranquil
            environment. Begin your wellness journey with our stress relief and
            rejuvenation programs.
          </p>
          <a href="/add_booking" className="btn">
            Book Your Stay
          </a>
        </div>
        <div className="hero-image">
          <img src={heroImage} alt="Ayurveda Retreat" />
        </div>
      </section>

      {/* About Resort Section */}
<section
  className="about-section"
  style={{ "--bg-image": `url(${package2})` }}
>
  <div className="overlay">
    <h2>Our Resort</h2>
    <p>
      Stay in our modern airy rooms, with high-quality furniture and mouth-watering sea views.Let our friendly and experienced staff take care of all your needs to ensure you feeling right at home with us.
      Sath Villa & Naadi Ayurveda Resort is the perfect setting for your relaxation and an experience for all senses.
      Sath Villa family is eagerly waiting to treat you like a family member. We look forward to spoiling you and are happy to make your Sri Lankan adventure a memorable one!<br/><br/>
      Leave stress, anxiety and unhealthy habits behind and dive into the soothing calm of the Sri Lankan jungle. (Only a 90-minute cab ride from Colombo Int. Airport)
      Feel young and healthy with new emotional strength, improve your physical well-being through Yoga, and restore internal balance with delicious plant-based meals.
      joy our garden and pool or take a dip in the ocean right next to our property.
      Take in our family-like atmosphere, and let our staff treat you to delicious food and drinks. Let us be part of your unforgettable time in Sri Lanka.
      The whole Sath Villa Resort Family is looking forward to welcoming you!
    </p>
  </div>
</section>

      {/* Services Section */}
      <section className="services-section">
        <h2>Our Wellness Services</h2>
        <div className="services-grid">
          <div className="service-card">
            <h3>Panchakarma Therapy</h3>
            <p>Detoxify and rejuvenate your body with traditional methods.</p>
          </div>
          <div className="service-card">
            <h3>Ayurvedic Massage</h3>
            <p>Relax and relieve stress with herbal oils and massage.</p>
          </div>
          <div className="service-card">
            <h3>Yoga & Meditation</h3>
            <p>Connect mind and body through guided sessions.</p>
          </div>
        </div>
        <a href="/services" className="btn">
          Explore Services
        </a>
      </section>

     {/* About Ayurveda Section */}
<section
  className="about-section"
  style={{ "--bg-image": `url(${package1})` }}
>
  <div className="overlay">
    <h2>What is Ayurveda?</h2>
    <p>
      Ayurveda is a natural way of healing ailments and securing the balance of a healthy life. It promotes physical as well as 
      mental well-being.Ayurveda is a holistic system which guides us so that we can live a healthier and more balanced lifestyle. 
      The wisdom of Ayurveda encourages us to take responsibility for our own health according to the different stages of our lives, 
      the seasons, and the environment we live, work and play in.<br/><br/>
      Ayurveda is considered to be a science of balance and longevity that based on the 
      principle of the three energies called Vata, Pita and Kapha.Ayurveda stresses the use of plant-based medicines and treatments. 
      Hundreds of plant-based medicines are employed in order to control and maintain these three energies.
    </p>
  </div>
</section>


      {/* Packages Section */}
      <section className="packages-section">
        <h2>Featured Packages</h2>
        <div className="packages-grid">
          <div className="package-card">
            <img src={package1} alt="Detox Package" />
            <h3>Detox & Rejuvenation</h3>
            <p>7 Days complete body detox program.</p>
          </div>
          <div className="package-card">
            <img src={package2} alt="Stress Relief Package" />
            <h3>Stress Relief</h3>
            <p>5 Days of relaxing massages and meditation.</p>
          </div>
          <div className="package-card">
            <img src={package3} alt="Holistic Package" />
            <h3>Holistic Wellness</h3>
            <p>10 Days wellness retreat with Ayurvedic therapies.</p>
          </div>
        </div>
        <a href="/packages" className="btn">
          View All Packages
        </a>
      </section>

      {/* Therapy Hours Section */}
<section
  className="about-section"
  style={{ "--bg-image": `url(${package3})` }}
>
  <div className="overlay">
    <h2>Therapy Hours</h2>
    <p>
     
Sunday : 8:00am - 21:00pm<br/>
Monday : 8:00am - 21:00pm<br/>
Tuesday : 8:00am - 21:00pm<br/>
Wednesday : 8:00am - 21:00pm<br/>
Thursday : 8:00am - 21:00pm<br/>
Friday : 8:00am - 21:00pm<br/>
Saturday : 8:00am - 21:00pm<br/>
    </p>
    <a href="/about" className="btn-section">Learn More</a>
  </div>
</section>

      {/* Testimonials Section */}
      <section className="testimonials-section">
        <h2>What Our Guests Say</h2>
        <div className="testimonials-grid">
          <div className="testimonial-card">
            <p>"A life-changing experience! The therapies and food were amazing."</p>
            <h4>- Nuwan P.</h4>
          </div>
          <div className="testimonial-card">
            <p>
              "Peaceful environment and very professional staff. Highly
              recommend!"
            </p>
            <h4>- Chamari S.</h4>
          </div>
          <div className="testimonial-card">
            <p>"I felt rejuvenated and stress-free. Ayurveda works wonders!"</p>
            <h4>- Perera D.</h4>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="cta-section">
        <h2>Ready to Rejuvenate?</h2>
        <p>Book your stay today and embrace holistic wellness.</p>
        <a href="/add_booking" className="btn-cta">
          Book Now
        </a>
      </section>

      <Footer />
    </div>
  );
}

export default Home;


