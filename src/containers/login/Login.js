import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faKey,
  faUnlockAlt,
  faEnvelope,
} from '@fortawesome/free-solid-svg-icons';
import './Login.css';

export default function Login() {
  const inputStyle = {
    border: 'none',
  };
  const headerIconStyle = {
    color: 'white',
  };

  return (
    <div className="Login__Container">
      <div className="Login__Item__Header">
        <div className="Item__Logo">
          <FontAwesomeIcon
            size="2x"
            style={headerIconStyle}
            icon={faUnlockAlt}
          />
        </div>
        <span id="header__print">Sign In</span>
      </div>
      <form id="Login__Item__Form">
        <div className="Login__form" id="Item__id">
          <div className="area__email">
            <FontAwesomeIcon size="1.8x" icon={faEnvelope} />
            <input
              type="text"
              id="input__email"
              name="user-Email"
              placeholder="Email"
              style={inputStyle}
            />
          </div>
        </div>
        <div className="Login__form" id="Item__pw">
          <div className="area__pw">
            <FontAwesomeIcon className="Icon__Logo" icon={faKey} />
            <input
              type="password"
              id="input__pw"
              name="user-Pw"
              placeholder="password"
              style={inputStyle}
            />
          </div>
        </div>
        <div className="Login__form">
          <input type="submit" id="Item__submit" value="Sign In" />
        </div>
      </form>
      <div className="Login__Item__Under">
        forget password?
        <br />
        <a href="/Signup">Sign up now</a>
      </div>
    </div>
  );
}
