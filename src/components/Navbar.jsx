import React, { useState } from 'react';
import './Navbar.css';
 import { FaEnvelope, FaLock } from 'react-icons/fa';


const Navbar = () => {
  const [showAuthModal, setShowAuthModal] = useState(false);
  const [isSignIn, setIsSignIn] = useState(true);
  const [showLangDropdown, setShowLangDropdown] = useState(false);

  const handleUserIconClick = () => {
    setShowAuthModal(!showAuthModal);
    setIsSignIn(true);
  };

  const toggleAuthForm = () => {
    setIsSignIn(!isSignIn);
  };

  const handleTranslateClick = () => {
    setShowLangDropdown((prev) => !prev);
  };

  const handleLangSelect = (lang) => {
    //enter the translation 
    setShowLangDropdown(false);
  };

  return (
    <>
      <nav className="vinci-navbar">
        <div className="navbar-content">
          {/* Logo */}
          <div className="logo-container">
            <img 
              src="/src/img/vinci.svg" 
              alt="VINCI Logo" 
              className="logo-image" 
            />
          </div>

          {/* navigation */}
          <div className="nav-links">
            <a href="#engagements" className="nav-link">Nos engagements</a>
            <a href="#activites" className="nav-link">Nos activités</a>
            <a href="#rejoindre" className="nav-link">Nous rejoindre</a>
            <a href="#marques" className="nav-link">Nos marques</a>
          </div>

          {/* icons */}
          <div className="nav-icons" style={{ position: 'relative' }}>
            <img 
              src="/src/img/translate.png" 
              alt="Translation" 
              className="nav-icon" 
              style={{width:'30px',height:'30px', cursor: 'pointer'}}
              onClick={handleTranslateClick}
            />
            {showLangDropdown && (
              <div className="lang-dropdown">
                <div className="lang-option" onClick={() => handleLangSelect('fr')}>Français</div>
                <div className="lang-option" onClick={() => handleLangSelect('en')}>English</div>
              </div>
            )}
            <img 
              src="/src/img/user-icon.png" 
              alt="Account" 
              className="nav-icon user-icon" 
              style={{width:'30px',height:'30px'}}
              onClick={handleUserIconClick}
            />
          </div>
        </div>
      </nav>


{/* sign in/up formal */}
{showAuthModal && (
  <div className="modal-overlay" onClick={() => setShowAuthModal(false)}>
    <div className="auth-modal" onClick={(e) => e.stopPropagation()}>
      {isSignIn ? (
        <form className="auth-form">
          <h2 className="form-title">Sign in</h2>

          <div className="form-group">
            <label>email</label>
            <div className="input-container">
              <input type="email" className="form-input" required />
              <FaEnvelope className="icon-input" />
            </div>
          </div>

          <div className="form-group">
            <label>password</label>
            <div className="input-container">
              <input type="password" className="form-input" required />
              <FaLock className="icon-input" />
            </div>
          </div>

          <div className="form-options">
            <div className="remember-me">
              <input type="checkbox" id="remember" />
              <label htmlFor="remember">Remember me</label>
            </div>
            <a href="#forgot" className="forgot-password">Forget password?</a>
          </div>

          <div className="divider"></div>

          <div className="auth-switch">
            Don't have an account?{' '}
            <button type="button" className="switch-button" onClick={toggleAuthForm}>
              Sign up
            </button>
          </div>

          <button type="submit" className="submit-button">Sign in</button>
        </form>
      ) : (
        <form className="auth-form">
          <h2 className="form-title">Sign up</h2>

          <div className="form-group">
            <label>Name</label>
            <input type="text" className="form-input" required />
          </div>

          <div className="form-group">
            <label>Number</label>
            <input type="tel" className="form-input" required />
          </div>

          <div className="form-group">
            <label>email</label>
            <div className="input-container">
              <input type="email" className="form-input" required />
              <FaEnvelope className="icon-input" />
            </div>
          </div>

          <div className="form-group">
            <label>password</label>
            <div className="input-container">
              <input type="password" className="form-input" required />
              <FaLock className="icon-input" />
            </div>
          </div>

          <div className="divider"></div>

          <div className="auth-switch">
            Already have an account?{' '}
            <button type="button" className="switch-button" onClick={toggleAuthForm}>
              Sign in
            </button>
          </div>

          <button type="submit" className="submit-button">Sign up</button>
        </form>
      )}
    </div>
  </div>
)}

    </>
  );
};

export default Navbar;