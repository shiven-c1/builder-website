import React from 'react';
import Navbar from './components/Navbar';
import ImageSlider from './components/ImageSlider';
import properties from './data/properties';
import ContactUs from './components/ContactUs';
import './styles/main.css';
import './components/PropertyCard.css';

function PropertyCard({ property }) {
  return (
    <div className="property-card">
      <img src={property.image} alt={property.title} />
      <div className="property-title">{property.title}</div>
      <div className="property-price">{property.price}</div>
      <div className="property-details">{property.details}</div>
      <div className="contact-buttons">
        <a className="contact-btn" href={`tel:8652463737`}>Call</a>
        <a
          className="contact-btn whatsapp"
          href={`https://wa.me/918652463737?text=I'm%20interested%20in%20${encodeURIComponent(property.title)}`}
          target="_blank"
          rel="noopener noreferrer"
        >
          WhatsApp
        </a>
      </div>
    </div>
  );
}

function App() {
  return (
    <>
      <Navbar />
      <ImageSlider />
      <div style={{ padding: '32px', background: '#f5f7fa', minHeight: '100vh' }}>
        {/* Remove or edit this section as needed */}
        <section style={{ textAlign: 'center', marginBottom: '32px' }}>
          {/* You can change or remove these lines */}
          <h2 style={{ color: '#1a237e', fontSize: '2.2rem', marginBottom: '8px', fontWeight: 700 }}>
            Find Your Perfect Property in Kamothe
          </h2>
          <p style={{ color: '#4a5568', fontSize: '1.2rem', marginBottom: '0' }}>
            Trusted Real Estate Agency Since 2010
          </p>
        </section>
        <h2 id="properties" style={{ textAlign: 'center', marginBottom: '32px', color: '#3182ce' }}>
          Featured Properties
        </h2>
        <div className="container">
          {properties.map(property => (
            <PropertyCard key={property.id} property={property} />
          ))}
        </div>
        <ContactUs />
        <div id="about" style={{ textAlign: 'center', marginTop: '32px', color: '#4a5568' }}>
          <h3>About Hanuman Real Estate</h3>
          <p>We help you find your dream property in Kamothe and Navi Mumbai. Trusted since 2010.</p>
        </div>
      </div>
    </>
  );
}

export default App;