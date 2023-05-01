import React from 'react';
import { LoginHead, LoginInner } from '../components-styles/Login-Style';
import Slack from '../img/slack.png'
import { Button } from '@mui/material';
import { auth, provider } from '../firebase/firebase';

function Login() {
  const signIn = (e) => {
    e.preventDefault();
    auth.signInWithPopup(provider).catch((error) => console.log('Invalid Login details'))
  }
  return (
    <LoginHead>

      <LoginInner>
      <img src={Slack} alt='Slack alternative logo' />
        <h1>
          Sign in to the Slack
        </h1>
        <p>
          Slack.com
        </p>

        <Button onClick={signIn}>
          Sign in with Google
        </Button>

      </LoginInner>
    </LoginHead>
  );
}

export default Login;
