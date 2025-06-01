import React from "react";
import { FaProjectDiagram, FaFan, FaCogs } from "react-icons/fa";
import './ServicesSection.css';

function ServicesSection() {
  return (
    <section className="service-section">
      
      <h2>Nos services</h2>
      <div className="service-background"></div>
      <div className="container service-cards">
        <div className="row justify-content-center">
          <div className="col-md-4 mb-4">
            <div className="service-card">
              <h5>Modelisation</h5>
              <p>Nous réalisons des maquettes numériques détaillées pour tous les lots techniques : CVC, plomberie, électricité, structures...</p>
              <div className="service-icon">
                <FaProjectDiagram className="icon" />
              </div>
            </div>
          </div>
          <div className="col-md-4 mb-4">
            <div className="service-card">
              <h5>CVC et Fluides</h5>
              <p>Nos ingénieurs conçoivent des systèmes CVC et fluides alliant performance énergétique et confort optimal.</p>
              <div className="service-icon">
                <FaFan className="icon" />
              </div>
            </div>
          </div>
          <div className="col-md-4 mb-4">
            <div className="service-card">
              <h5>Synthèse technique</h5>
              <p>Synthèse technique garantissant des réseaux aérauliques, hydrauliques et électriques compatibles.</p>
              <div className="service-icon">
                <FaCogs className="icon" />
              </div>
            </div>
          </div>
        </div>
      </div>
                <div className="divider"></div>

    </section>
  );
}

export default ServicesSection;