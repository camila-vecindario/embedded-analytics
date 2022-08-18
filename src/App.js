import { useEffect } from "react";
import { importResource, removeResource, removeMultipleResources } from "./helpers/common-functions";
import logo from './logo.svg';
import './App.css';

const CONTACT_REQUEST_EMBEDDED = process.env.REACT_APP_CONTACT_REQUEST_EMBEDDED_URL;
const SIMULATOR_EMBEDDED = process.env.REACT_APP_SIMULATOR_EMBEDDED_URL;

console.log(window.dataLayer, window.dataLayerSuite, "DATA LAYER")

function App() {
    useEffect(() => {
        setTimeout(() => {
            importResource({
                id: 'contact-embedded-by-suite',
                script: CONTACT_REQUEST_EMBEDDED,
            });
        }, 10);
        window.dataLayer.push({
          event: 'testContainerLoad'
        })
      
        return () => {
            removeResource('#contact-embedded-by-suite');
            removeMultipleResources('.script-contact-request');
            removeMultipleResources('.style-contact-request');
        };
    }, []);

    useEffect(() => {
        setTimeout(() => {
            importResource({
                id: 'simulator-embedded-by-suite',
                script: SIMULATOR_EMBEDDED,
            });
        }, 10);

        return () => {
            removeResource('#simulator-embedded-by-suite');
        };
    }, []);

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
          <div
              id="contactosByVecindario"
              data-project-slug="orion"
              data-button-style='{"backgroundColor": "aqua", "color": "#000", "shape": "square" }'
          ></div>
          {
              /*
           <div
              id="simulatorByVecindario"
              data-textcolor='{"r":196,"g":210,"b":32,"a":1}'
              data-buttoncolor='{"r":41,"g":40,"b":15,"a":0.35}'
              data-buttontext="Simula"
              data-shape="square"
              data-projectslug="costa-azul"
          ></div>

              * */

          }
      </header>
    </div>
  );
}

export default App;
