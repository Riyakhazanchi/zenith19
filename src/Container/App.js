import React, { Component } from 'react';
import './App.css';
import 'tachyons';
import Particles from 'react-particles-js';
import Fullpage from './Fullpage.js';
import { Helmet } from 'react-helmet'

const particleOptions={
  "particles": {
                "number": {
                    "value": 50
                },
                "size": {
                    "value": 3
                }
            },
            "interactivity": {
                "events": {
                    "onhover": {
                        "enable": true,
                        "mode": "repulse"
                    }
                }
            }

}

class App extends Component {
  render() {
    return (
      <div className="App" >
        <Helmet>
          <title>Zenith19</title>
        </Helmet>
        <Particles className="particles bg-black" params={{particleOptions}} />
        <Fullpage/>
      </div>
    );
  }
}

export default App;
