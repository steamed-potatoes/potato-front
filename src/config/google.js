import qs from 'qs';
import config from 'config';

const googleAuthQuery = qs.stringify({
  scope:
    'https://www.googleapis.com/auth/userinfo.email https://www.googleapis.com/auth/userinfo.profile',
  access_type: 'offline',
  include_granted_scopes: 'true',
  redirect_uri: config.google.redirectUri,
  response_type: 'code',
  client_id: config.google.clientId,
  prompt: 'select_account',
  state: 'state_parameter_passthrough_value',
});

const GOOGLE_AUTH_URL = `https://accounts.google.com/o/oauth2/v2/auth?${googleAuthQuery}`;

export default GOOGLE_AUTH_URL;
