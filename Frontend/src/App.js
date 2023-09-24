import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import About from './pages/About';
import Home from './pages/Home';
import Login from './pages/Login';
import Signup from './pages/Signup';
import View from './pages/View';
import Chatroom from './pages/Chatroom';
import { createContext, useState } from 'react';

export const SearchText = createContext();


function App() {
  const [searchText, setSearchText] = useState("")
  return (

    <BrowserRouter>
      <SearchText.Provider value={{ searchText, setSearchText }}>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/about' element={<About />} />
          <Route path='login' element={<Login />} />
          <Route path='signup' element={<Signup />} />
          <Route path='view' element={<View />} />
          <Route path='/chatroom' element={<Chatroom />} />
        </Routes>
      </SearchText.Provider>
    </BrowserRouter>
  );
}

export default App;
