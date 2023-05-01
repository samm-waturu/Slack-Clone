import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import './App.css';
import Chat from './components/Chat';
import Header from './components/Header';
import Sidebar from './components/Sidebar';
import styled from 'styled-components';
import Slack from './img/slack.png';
import { useAuthState } from 'react-firebase-hooks/auth';
import { auth } from './firebase/firebase';
import Login from './components/Login';
import Spinner from 'react-spinkit';

const AppBody = styled.div`
  display: flex;
  height: 100vh;
`;


function App() {
  const [user, loading] = useAuthState(auth);
  if (loading) {
    return (
      <AppLoading>

        <AppContents>

          <img src={Slack} alt='Slack alt Logo' />

          <Spinner name={'ball-spin-fade-load'} color={'purple'} fadeIn={'none'} />

        </AppContents>

      </AppLoading>
    );
  }
  return (
    <Router>
      {!user ? (
        <Login />
      ) : (
        <div className={'app'}>
          <Header />
          <AppBody>
            <Sidebar />
            <Routes>

              <Route exact path={'/'} element={<Chat />}>

              </Route>


            </Routes>
          </AppBody>
        </div>
      )
      }
    </Router>
  );
}

export default App;

const AppContents = styled.div`
  text-align: center;
  padding-bottom: 100px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;


  > img {
    height: 100px;
    padding: 20px;
    margin-bottom: 40px;
  }`;

const AppLoading = styled.div`
  display: grid;
  place-items: center;
  height: 100vh;
  width: 100%;

`;