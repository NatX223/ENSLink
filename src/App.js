import './App.css';
import './styles/Homepage.css';
import {  } from "module";

function App() {
  return (
  
      <body>
        <div className="container">
        <div className="col-xs-12">
          {/* export these styles */}
                <div className="home-text-padding">
                    <h2 className="home-text">ENSLinkTree</h2>
                    <p>
                      Use your ENS name as a link tree to get discovered
                    </p>
                    <p>
                      You can also receive tips and donations to extend your ENS name ownership
                    </p>
                    <a href='./createLink'>
                      <button>
                      Get Started
                      </button>
                    </a>
                </div>
        </div>
        </div>
      </body>
  );
}

export default App;
