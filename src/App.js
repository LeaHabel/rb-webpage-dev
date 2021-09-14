import React, { useState, useEffect } from 'react';

import './App.css';

import Navigationbar from './components/NavBar.js';
import Dropdown from './components/NavBurgerDropdown.js';

import Contact from './components/Contact.js';
import Footer from './components/Footer.js';

import Home from './pages';
import Service from './pages/servicepage';
import Personpage from './pages/personpage';

import Navbar from './components/NavBarTutorial/Navbar';
import Home2 from './components/NavBarTutorial/pages/Home2';
import Services from './components/NavBarTutorial/pages/Services';
import Products from './components/NavBarTutorial/pages/Products';
import ContactUs from './components/NavBarTutorial/pages/ContactUs';
import SignUp from './components/NavBarTutorial/pages/SignUp';
import Marketing from './components/NavBarTutorial/pages/Marketing';
import Consulting from './components/NavBarTutorial/pages/Consulting';

import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
{/*import { Switch, Route } from 'react-router';*/ }
{/* https://www.youtube.com/watch?v=gOQ31Kc8H5E&t=437s&ab_channel=BrianDesign 43:15*/ }



export default function App() {
  const [isOpen, setIsOpen] = useState(false)

  const toggle = () => {
    setIsOpen(!isOpen);
  }

  useEffect(() => {
    const hideMenu = () => {
      if (window.innerWidth > 768 && isOpen) {
        setIsOpen(false)
        console.log('resized')
      }
    }

    window.addEventListener('resize', hideMenu)

    return () => {
      window.removeEventListener('resize', hideMenu);
    }
  })


  return (
    <>
      {/* <Navigationbar toggle={toggle} /> passing in  toggle to the Navbar component*/}
      {/* <Dropdown isOpen={isOpen} toggle={toggle} /> */}
      <Router>
        <Navbar />
        <Switch>
          <Route path='/' exact component={Home2} />
          <Route path='/services' component={Services} />
          <Route path='/products' component={Products} />
          <Route path='/contact-us' component={ContactUs} />
          <Route path='/sign-up' component={SignUp} />
          <Route path='/marketing' component={Marketing} />
          <Route path='/consulting' component={Consulting} />
        </Switch>
      </Router>
      <Switch> {/* switch makes sure that only one Route will be shown*/}
        {/* This will be extra pages for further information. Addition to Onepager.  */}
        <Route path="/" exact component={Home} /> {/*path is the path in the URL name. example: website.com/pathname*/}
        <Route path="/service" component={Service} />
        <Route path="/person" component={Personpage} />
      </Switch>


      <Contact />
      <Footer />

    </>
  );
}



