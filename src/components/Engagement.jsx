import React from "react";
import './Engagement.css';
import { 
  FaLeaf, 
  FaHardHat, 
  FaLightbulb, 
  FaRecycle, 
  FaBolt 
} from "react-icons/fa";

function Engagement() {
  const items = [
    {
      text: "Transition énergétique durable",
      icon: <FaLeaf className="engagement-icon" />
    },
    {
      text: "Qualité & sécurité sur les chantiers",
      icon: <FaHardHat className="engagement-icon" />
    },
    {
      text: "Innovation & technologie",
      icon: <FaLightbulb className="engagement-icon" />
    },
    {
      text: "Responsabilité environnementale",
      icon: <FaRecycle className="engagement-icon" />
    },
    {
      text: "Efficacité énergétique",
      icon: <FaBolt className="engagement-icon" />
    }
  ];

  return (
    <section className="engagement-section">
      <h2>Nos engagements</h2>
      <div className="container">
        <div className="engagement-grid">
          {items.map((item, i) => (
            <div key={i} className="hex-wrapper">
              <div className="engagement-item">
                {item.icon}
                <p>{item.text}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
                <div className="divider"></div>

    </section>
  );
}

export default Engagement;