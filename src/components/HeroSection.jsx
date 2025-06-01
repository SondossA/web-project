import React from 'react';
import { Container, Button } from 'react-bootstrap';
import './HeroSection.css';

const HeroSection = () => {
  return (
    <div className="hero-section d-flex align-items-center text-white">
      <Container className="text-center">
        <h1 className="fw-bold display-5">
          Votre partenaire BIM<br />pour une transition<br />énergétique durable
        </h1>
        <Button variant="light" className="mt-4 px-4 py-2 fw-semibold">
          En savoir plus
        </Button>
      </Container>
    </div>
    
  );
};

export default HeroSection;
