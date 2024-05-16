import React, { useState } from 'react';
import NavBar from './Components/NavBar';
import Header from './Components/Header';
import Footer from './Components/Footer';
import JsonData from './Components/JsonData';

const App = () => {
    const [cartQuantity, setCartQuantity] = useState([]);
    return (
        <>
           <NavBar cartQuantity={cartQuantity} /> 
           <Header/>
           <JsonData setCartQuantity={setCartQuantity}/>
           <Footer/>
        </>
    );
};

export default App;