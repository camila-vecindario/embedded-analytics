import { useEffect } from "react";
import { importResource, removeResource, removeMultipleResources } from "./helpers/common-functions";
import logo from './logo.svg';
import './App.css';

const CONTACT_REQUEST_EMBEDDED = process.env.REACT_APP_CONTACT_REQUEST_EMBEDDED_URL;

console.log(window.dataLayer, window.dataLayerSuite, "DATA LAYER")
console.log('HOLA ', CONTACT_REQUEST_EMBEDDED, process.env)
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

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
          <div
              id="contactosByVecindario"
              data-project-slug="vecindario-living"
              data-button-style='{"backgroundColor": "aqua", "color": "#000", "shape": "square" }'
          ></div>
      </header>
    </div>
  );
}

export default App;
