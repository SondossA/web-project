
import React from 'react';
import './Brand.css';

export default function Brand() {
  return (
    
    <div className="brand-showcase-container">
      <h2 className="title">Nos marques</h2>
      <div className="brands-wrapper">
        <div className="brand-row">
          <img src="/src/img/omexom.jpg" alt="Omexom" className="brand-logo" />
          <img src="/src/img/actemium.png" alt="Actemium" className="brand-logo" />
        </div>
        <div className="brand-row">
          <img src="/src/img/axians.png" alt="Axians" className="brand-logo" />
          <img src="/src/img/Vinci-Energies.jpg" alt="Vinci Energies" className="brand-logo" />
        </div>
        <div className="brand-row brand-center">
          <img src="/src/img/cegelec.webp" alt="Cegelec" className="brand-logo" />
        </div>
      </div>
    </div>
  );
}

