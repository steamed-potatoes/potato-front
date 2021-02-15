import React from 'react';
import GOOGLE_OAUTH_URL from 'consts/GoogleAuth';
import googleIcon from 'assets/icons/google.png';

const GoogleButton = () => (
  <a href={GOOGLE_OAUTH_URL}>
    <img src={googleIcon} alt="google" />
  </a>
);

export default GoogleButton;
