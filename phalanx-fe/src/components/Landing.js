import React from 'react';
import { createMuiTheme } from '@material-ui/core/styles';

const myTheme = createMuiTheme({
    palette: {
      primary: {
        light: '#484848',
        main: '#212121',
        dark: '#000000',
        contrastText: '#fff',
      },
      secondary: {
        light: '#ffc246',
        main: '#ff9100',
        dark: '#c56200',
        contrastText: '#000',
      },
    },
  });

function Landing() {
    return (
        <div className="Landing">
            <div className="LandingTop">
                <img className='mainlogo' src={require("../images/phalanx_logo_withtext.png")}></img>
                <div className="LandingTopText">
                </div>
            </div>
            <div className="LandingBottom">
            </div>
        </div>
    );
  }
  
  export default Landing;