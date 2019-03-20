import React from 'react';
import ReactFullpage from '@fullpage/react-fullpage';
import Slide from 'react-reveal/Slide';
import 'tachyons';
import Home from '../Components/Home/Home.js';
import Zenith from '../Components/Zenith/Zenith.js';
import Events from '../Components/Events/Events.js';
import Contact from '../Components/Contact/Contact.js';
import './ScrollingHorizontally.css'




const Fullpage = () => (
  <ReactFullpage
    render={({ state, fullpageApi }) => {
      return (
        <ReactFullpage.Wrapper>
          <Slide left>
            <div className="section">
              <Home/>
            </div>
            <div className="section">
              <Zenith/>
            </div>
            <div className="section">
              <Events/>
            </div>
            <div className="section">
              <Contact/>
            </div>
          </Slide>
          
        </ReactFullpage.Wrapper>
      );
    }}
  />
);


export default Fullpage;