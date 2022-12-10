import React, { useEffect } from 'react';
import './App.css';
import { useDispatch, useSelector } from 'react-redux';
import Chat from './components/Chat';
import Sidebar from './components/Sidebar';
import { selectUser } from './features/userSlice';
import Login from './components/Login';

import { login, logout } from './features/userSlice';
import { auth } from './components/firebase';

function App() {
  const dispatch = useDispatch(); //dispatch into data layer
  const user = useSelector(selectUser);


  useEffect(() => {
    auth.onAuthStateChanged((authUser) => {

      if (authUser) {
        dispatch(login({
          uid: authUser.uid,
          photo: authUser.photoURL,
          email: authUser.email,
          displayName: authUser.displayName,
        }));
      } else {
        dispatch(logout());
      }
    });
  }, [dispatch]);

  return (
    <div className="app">
      {user ? (
        <>
          <Sidebar />
          <Chat />
        </>
      ) : (
        <Login />
      )}


    </div>
  );
}

export default App;
