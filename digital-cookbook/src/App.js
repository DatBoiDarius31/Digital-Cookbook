import React from 'react';
import {BrowserRouter as Router, Routes, Route, Link} from 'react-router-dom'
import Home from './Pages/Home';
import Recipes from './Pages/Recipes';
import Login from './Pages/Login';
import "./index.css";
import { useState } from 'react';
import { signOut } from 'firebase/auth';
import {auth} from './firebaseConfig';



function App() {



const [isAuth, setIsAuth] = useState(false);

const signUserOut = () =>{
  signOut(auth).then(() =>{
    localStorage.clear();
    setIsAuth(false);
    window.location.pathname= "/login";
  })
};

  return (
   <Router>
    <nav className='flex gap-4 w-100 text-2xl text-white justify-end p-3 bg-gradient-to-r from-red-500 to-lime-500'>
      <Link to="/" className='hover:scale-115 hover:translate-y-1 transition ease-in-out delay-100'>Home</Link>
      <Link to="/recipes" className='hover:scale-115 hover:translate-y-1 transition ease-in-out delay-100'>Recipes</Link>
      {!isAuth ? <Link to="/login" className='hover:scale-115 hover:translate-y-1 transition ease-in-out delay-100'>Login</Link>: <button onClick={signUserOut}>Sign Out</button>}
    </nav>
    <Routes>
      <Route path="/" element={<Home/>}/>
      <Route path="/recipes" element={<Recipes/>}/>
      <Route path="/login" element={<Login setIsAuth = {setIsAuth}/>}/>
    </Routes>
   </Router>
  )
}

export default App

