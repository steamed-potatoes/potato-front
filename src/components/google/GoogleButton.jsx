import { GOOGLE_AUTH_URL } from 'config';
import React from 'react';
import { FcGoogle } from 'react-icons/fc';

export const GoogleButton = () => (
  <a href={GOOGLE_AUTH_URL}>
    <FcGoogle size="3em" />
  </a>
);
