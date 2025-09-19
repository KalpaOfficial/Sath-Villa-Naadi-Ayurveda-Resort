import React, { useState } from "react";
import Nav from "../Nav/Nav";
import Footer from "../Footer/Footer";
import "./Ayurveda.css";

function Ayurveda() {
  const [expandedPackages, setExpandedPackages] = useState({});

  const togglePackage = (packageId) => {
    setExpandedPackages(prev => ({
      ...prev,
      [packageId]: !prev[packageId]
    }));
  };

  const packageData = [
    {
      id: 1,
      title: "SWASTHA HEALTH PROMOTE PACKAGE (NCD)",
      description: "Aimed to combat, prevent and cure pre-stage non communicable diseases NCDs",
      fullDescription: "This comprehensive package focuses on preventing and managing non-communicable diseases through personalized Ayurvedic treatments, dietary plans, and lifestyle modifications. Our experts will create a tailored program to address your specific health concerns.",
      image: "https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&h=350&q=80"
    },
    {
      id: 2,
      title: "SWASTHAAYU PRABALA PACKAGE",
      description: "Focuses on complete wellness and balance through Ayurveda",
      fullDescription: "Experience complete rejuvenation with our wellness package that combines traditional Ayurvedic therapies, yoga, and meditation. Restore your body's natural balance and achieve optimal health through our holistic approach.",
      image: "https://images.unsplash.com/photo-1506003093669-40e10ad5a5d8?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&h=350&q=80"
    },
    {
      id: 3,
      title: "SWASTHA WELLNESS PACKAGE",
      description: "A comprehensive package for overall health and well-being",
      fullDescription: "Our most popular package offers a complete wellness experience with daily treatments, personalized nutrition plans, and mindfulness practices. Designed to detoxify, rejuvenate, and restore your body and mind.",
      image: "https://images.unsplash.com/photo-1545205597-3d9d05c592d8?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&h=350&q=80"
    },
    {
      id: 4,
      title: "INTRODUCTION TO AYURVEDA KNOW YOUR PRAKURTHI PACKAGE",
      description: "Guide towards a balanced lifestyle according to the unique body constitution (Prakurthi)",
      fullDescription: "Discover your unique mind-body type (Prakurthi) and learn how to maintain balance through Ayurvedic principles. This package includes consultation, diagnostic tests, and personalized recommendations for your lifestyle.",
      image: "https://images.unsplash.com/photo-1599901860904-17e6ed7083a0?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&h=350&q=80"
    },
    {
      id: 5,
      title: "SWASTHA CHARMA SHAMYA PACKAGE",
      description: "Helps with skin diseases and is designed for skin health and rejuvenation",
      fullDescription: "Specialized treatments for various skin conditions using herbal preparations and traditional therapies. This package includes detoxification, external applications, and internal medications for radiant, healthy skin.",
      image: "https://images.unsplash.com/photo-1570172619644-dfd03ed5d881?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&h=350&q=80"
    },
    {
      id: 6,
      title: "SWASTHA RASAYANAM PACKAGE (ANTI-AGING TREATMENT)",
      description: "Anti-aging treatments to rejuvenate and revitalize the body",
      fullDescription: "Our anti-aging Rasayana therapy focuses on rejuvenation at the cellular level. Through specialized treatments and herbal formulations, we help reverse the signs of aging and promote longevity.",
      image: "https://images.unsplash.com/photo-1504813184591-01572f98c85f?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&h=350&q=80"
    },
    {
      id: 7,
      title: "SWASTHA AYU SLIM PACKAGE",
      description: "Tailored for weight management",
      fullDescription: "A comprehensive weight management program that combines Ayurvedic treatments, dietary guidance, and lifestyle recommendations. Achieve sustainable weight loss and improve metabolism naturally.",
      image: "https://images.unsplash.com/photo-1535914254981-b5012eebbd15?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&h=350&q=80"
    },
    {
      id: 8,
      title: "SWASTHA HITHAAYU PACKAGE",
      description: "A holistic approach to fostering optimal health through mind-body harmony",
      fullDescription: "This package focuses on creating harmony between mind and body through specialized therapies, meditation, and yoga. Experience deep relaxation and improved overall well-being.",
      image: "https://images.unsplash.com/photo-1545389336-8c6dfde0b0c1?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&h=350&q=80"
    },
    {
      id: 9,
      title: "SWASTHA MIND RELAXATION AND DE-STRESS PACKAGE",
      description: "Focuses on mental relaxation and stress relief",
      fullDescription: "Specially designed to combat modern stress and anxiety, this package includes therapies that calm the nervous system, improve sleep quality, and enhance mental clarity.",
      image: "https://images.unsplash.com/photo-1593811167562-9cef47bfc5d7?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&h=350&q=80"
    },
    {
      id: 10,
      title: "SWASTHA ASTHI SUWA PACKAGE",
      description: "Aimed at bone and joint health and addressing skeletal issues",
      fullDescription: "Therapies and treatments specifically designed for bone and joint health. This package helps in managing conditions like arthritis, osteoporosis, and other musculoskeletal disorders.",
      image: "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&h=350&q=80"
    },
    {
      id: 11,
      title: "SWASTHA - AYU PRASADANA PACKAGE",
      description: "Aimed to manage non-communicable diseases (NCD)",
      fullDescription: "A specialized program for managing chronic non-communicable diseases through Ayurvedic principles. Includes dietary modifications, lifestyle changes, and therapeutic treatments.",
      image: "https://images.unsplash.com/photo-1559757148-5c350d0d3c56?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&h=350&q=80"
    },
    {
      id: 12,
      title: "SWASTHA SUKAAYU PACKAGE",
      description: "Enhances longevity and overall well-being",
      fullDescription: "Our premium package focused on promoting longevity and enhancing quality of life. Includes specialized rejuvenation therapies, nutritional guidance, and practices for healthy aging.",
      image: "https://images.unsplash.com/photo-1518609878373-06d740f60d8b?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&h=350&q=80"
    }
  ];

  return (
    <div className="ayurveda-page">
      <Nav />
      
      {/* Hero Section */}
      <section className="ayurveda-hero">
        <div className="container">
          <h1>AYUGIRI AYURVEDA WELLNESS RESORT</h1>
          <div className="booking-widget">
            <div className="booking-fields">
              <div className="field-group">
                <label>CHECK-IN</label>
                <input type="text" value="1 SEP 2025" readOnly />
              </div>
              <div className="field-group">
                <label>CHECK-OUT</label>
                <input type="text" value="1 OCT 2025" readOnly />
              </div>
              <div className="field-group">
                <label>NATIONALITY</label>
                <select>
                  <option>Select Nationality</option>
                </select>
              </div>
              <div className="field-group">
                <label>PROMO CODE</label>
                <input type="text" placeholder="Enter code" />
              </div>
              <div className="field-group checkbox-group">
                <input type="checkbox" id="flexible-dates" />
                <label htmlFor="flexible-dates">FLEXIBLE DATES</label>
              </div>
              <button className="book-now-btn">BOOK NOW</button>
            </div>
          </div>
        </div>
      </section>

      {/* Why Book Direct Section */}
      <section className="why-book-direct">
        <div className="container">
          <h2>Why Book Direct?</h2>
          <p>Through personalized consultations, diagnostic assessments, and therapeutic interventions, we identify imbalances and tailor a comprehensive regimen of Ayurvedic treatments, dietary recommendations, herbal supplements, yoga practices and meditation techniques to restore equilibrium and vitality.</p>
          <p>Our Swastha packages extend beyond mere physical healing, nurturing your soul, senses, and mind, fostering a profound sense of well-being that permeates every aspect of your being. Whether you seek prevention, cure, or overall wellness, our Swastha packages offer a transformative journey towards health, happiness, and harmony.</p>
        </div>
      </section>

      {/* Ayurveda Packages Section */}
      <section className="ayurveda-packages">
        <div className="container">
          <h2>ayurveda treatment packages</h2>
          <div className="packages-grid">
            {packageData.map(pkg => (
              <div key={pkg.id} className="package-card">
                <div className="package-image-container">
                  <img 
                    src={pkg.image} 
                    alt={pkg.title}
                    className="package-image"
                  />
                  <div className="package-overlay">
                    <button className="view-details-btn">Quick View</button>
                  </div>
                </div>
                <div className="package-content">
                  <h3>{pkg.title}</h3>
                  <p>{pkg.description}</p>
                  {expandedPackages[pkg.id] ? (
                    <div className="package-details">
                      <p>{pkg.fullDescription}</p>
                      <button 
                        className="view-less-btn"
                        onClick={() => togglePackage(pkg.id)}
                      >
                        View Less
                      </button>
                    </div>
                  ) : (
                    <button 
                      className="view-more-btn"
                      onClick={() => togglePackage(pkg.id)}
                    >
                      View More
                    </button>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Complimentary Experiences Section */}
      <section className="complimentary-experiences">
        <div className="container">
          <h2>complimentary experiences</h2>
          
          <div className="experience-tier">
            <div className="tier-header">
              <span className="tier-icon">@</span>
              <h3>Complimentary experiences and excursions for stays of 7 nights or more</h3>
            </div>
            
            <div className="on-property">
              <h4>on the property once during the stay:</h4>
              <ul>
                <li>
                  <strong>THE DETOX WALK:</strong> ENJOY A GUIDED NATURE WALK THROUGH OUR SERENE PROPERTY, 
                  TEEMING WITH BUTTERFLIES, BIRDS, AND WILDLIFE, FEATURING NATURAL MEDITATION 
                  SPOTS AND TRANQUIL LAKES, FOSTERING A DEEP CONNECTION WITH NATURE.
                </li>
                <li>
                  <strong>CRYSTAL SINGING BOWLS:</strong> EXPERIENCE WELLNESS THROUGH MUSIC THERAPY AND 
                  MINDFULNESS WITH THE SOOTHING VIBRATIONS OF CRYSTAL SINGING BOWLS TO 
                  HARMONISE WITH MIND AND BODY.
                </li>
                <li>
                  <strong>POTTERY BLISS:</strong> CALM YOUR MIND WITH HANDS-ON POTTERY SESSIONS LED BY A 
                  SKILLED MASTER IN OUR ON-SITE STUDIO, IMMERSING YOURSELF IN A RICH CULTURAL 
                  EXPERIENCE.
                </li>
                <li>
                  <strong>HERBAL HIGH TEA DELIGHTS:</strong> ENJOY TREATS MADE FROM WHOLESOME INGREDIENTS 
                  LIKE RICE FLOUR, PUMPKIN, GARLIC AND SESAME, ALONG WITH TRADITIONAL 
                  SWEETMEATS CRAFTED FROM LOCALLY SOURCED NATURAL INGREDIENTS.
                </li>
              </ul>
            </div>
            
            <div className="excursions">
              <h4>excursions:</h4>
              <ul>
                <li>
                  <strong>SPIRITUAL EXCURSIONS:</strong> EXPLORE EXCLUSIVE OFFERINGS LIKE GUIDED MEDITATION AT 
                  KALUDIYA POKUNA, A HIDDEN ARCHAEOLOGICAL MARVEL WITHIN NATURE'S EMBRACE 
                  IMMERSE YOURSELF IN ANCIENT RITUALS OF PIRITH CHANTING AND SHANTHIKARMA 
                  BLESSINGS, CONNECTING TO CENTURIES-OLD TRADITIONS OF HEALING.
                </li>
                <li>
                  <strong>ECHOES OF HISTORY:</strong> EXPLORE THE MAJESTIC SIGIRIYA ROCK, CELEBRATED AS THE 8TH 
                  WONDER OF THE WORLD. DISCOVER THE DAMBULLA CAVE TEMPLE, A SACRED 
                  PILGRIMAGE SITE FOR OVER 22 CENTURIES, BOTH PROVIDING GLIMPSES INTO SRI 
                  LANKA'S CAPTIVATING PAST OF ART AND CULTURE.
                </li>
              </ul>
            </div>
          </div>
          
          <div className="experience-tier">
            <div className="tier-header">
              <span className="tier-icon">@</span>
              <h3>Complimentary experiences and excursions for stays of 14 nights or more</h3>
            </div>
            <p className="coming-soon">Details coming soon</p>
          </div>
          
          <div className="experience-tier">
            <div className="tier-header">
              <span className="tier-icon">四</span>
              <h3>Complimentary experiences and excursions for stays of 21 nights or more</h3>
            </div>
            <p className="coming-soon">Details coming soon</p>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}

export default Ayurveda;