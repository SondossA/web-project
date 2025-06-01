import React from 'react';
import './Rejoindre.css';
import { FaRegLightbulb, FaUserTie } from 'react-icons/fa';
import { FiMail } from 'react-icons/fi';

const Rejoindre = () => {
  return (
    <div className="join-us-container">
      <h1 className="join-us-title">Nous rejoindre</h1>

      <div className="join-us-content">
        <div className="left-content">
          <div className="section">
            <h2 className="section-title">
              <FaRegLightbulb className="icon" /> Ce que nous offrons:
            </h2>
            <ul className="offer-list">
              <li>Un environnement de travail stimulant et moderne</li>
              <li>Des projets innovants dans le BIM, CVC et énergie</li>
              <li>Une formation continue sur les outils numériques et métiers techniques</li>
              <li>Une équipe passionnée et bienveillante</li>
            </ul>
          </div>

          <div className="divider"></div>

          <div className="section">
            <h2 className="section-title">
              <FaUserTie className="icon" /> Profils recherchés:
            </h2>
            <p className="section-description">
              Nous sommes toujours à la recherche de talents dans les domaines suivants :
            </p>
            <ul className="profile-list">
              <li>Ingénierie CVC et fluides</li>
              <li>Modélisation BIM (Revit, AutoCAD, Navisworks…)</li>
              <li>Gestion de projets techniques</li>
              <li>Énergéticiens et experts en efficacité énergétique</li>
            </ul>
          </div>

          <div className="divider"></div>

          <div className="section">
            <h2 className="section-title">
              <FiMail className="icon" /> Postuler
            </h2>
            <ul className="apply-list">
              <li>
                <strong>Envoyez votre CV et lettre de motivation</strong>
                <div className="contact-info">à :</div>
                <div className="contact-email">vinci-energies.com</div>
              </li>
            </ul>
          </div>
        </div>

        <div className="right-image">
          <img src="src/img/image.webp" alt="Equipe BIM" />
        </div>
      </div>
                <div className="divider"></div>

    </div>
    
  );
};

export default Rejoindre;
