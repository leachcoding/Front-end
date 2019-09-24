
import React, { useState, useEffect } from 'react';

import FormikWeightForm from './components/Journal';
import Header from './components/Header';
import Footer from './components/Footer';

import { Route } from 'react-router-dom';
import { AppContainer } from './styledElements/containers';
import { Home } from './components/Home';
import Register from './components/Register';
import Login from './components/Login';
import TabNav from './components/TabNav.js';
import Header2 from './components/Header2.js';
import ExerciseList from './components/ExerciseList.js';
import UserWorkout from './components/UserWorkout.js';

export default function App() {
  const [user, setUser] = useState('hey');


  return (

    <AppContainer>
      {/* <Header />
      <TabNav />
      <Route exact path='/' component={ExerciseList} /> */}
      {user ? <Route exact path='/' component={ExerciseList} /> : <Route exact path='/' component={Home} />}

     <Route path='/user' component={UserWorkout} />
      <Route path='/login' render={props => <Login {...props} setUser={setUser} /> } />
      <Route path='/register' render={props => <Register {...props} setUser={setUser} /> } />

    </AppContainer>


  );
}
