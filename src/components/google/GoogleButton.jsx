import GOOGLE_AUTH_URL from 'config/google';
import React from 'react';
import { FcGoogle } from 'react-icons/fc';

const GoogleButton = () => (
  <a href={GOOGLE_AUTH_URL}>
    <FcGoogle size="3em" />
  </a>
);

export default GoogleButton;
