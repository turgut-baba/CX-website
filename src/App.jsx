import './App.css';
import './Animations.css'
import './Components.css'
import logo from './assets/logo.png';
import SearchBar from './Components/SearchBar';  // Import the new SearchBar component

function App() {
    const handleSearchSubmit = (searchQuery) => {
        console.log("User searched for:", searchQuery);

        // This is where you will eventually fetch data from an API
        // or filter through an array of items.
        alert(`Searching for: ${searchQuery}`);
    };
    return (
      <>
          <div className={"gradient-container"}>

              <div className={"header-container"}>
                  <div className={"header"}>
                      <div className={"header-logo"}>
                          <img src={logo} alt="Logo"/>
                          <SearchBar onSearch={handleSearchSubmit} />
                      </div>
                      <ul className={"header-links"}>
                          <li><a href="/">Home</a></li>
                          <li><a href="/">Downloads</a></li>
                          <li><a href="/">Documentation</a></li>
                          <li><a href="/">Contribute</a></li>
                          <li><a href="/">Source</a></li>
                      </ul>
                  </div>
              </div>

              <div className={"content-container"}>
                  <div className={"text-section"}>
                      <h1>
                          C became more powerful and stable with C-X!
                      </h1>
                      <p>
                          Imagine a programming language that gives you more power over the hardware than C and has the
                          same performance as C. This is C-X, memory-safe, GPU compatible and highest performance.
                      </p>
                      <p>
                          Built for flexibilty, stability and performance. Perfect for robotics and systems programming.
                      </p>
                      <p>
                          Explore every ground-breaking feature of C-X now!
                      </p>
                      <div className={"button"} id={"install"}>
                          <a href="/">
                              Install Now
                          </a>
                      </div>
                      <sub>
                          Stable: Alpha 1.0
                      </sub>
                  </div>

                  <div className={"pcb-design"}>
                      {/*                      <svg width="500" height="10" className={"pcb-1 vector-art"}>
                          <rect width="100%" height="100%"/>
                      </svg>

                      <svg width="300" height="10" className={"pcb-2 vector-art"}>
                          <rect width="100%" height="100%"/>
                      </svg>*/}

                      <div className={"solder sd-1 sd-1-p"}>
                          <svg className={"vector-art sd-1"}>
                              <path d="M0,300 L90,0 L240,0 L240,10 L96,10 L10,300 Z" fill="red"/>
                          </svg>

                          <svg width="40" height="40" className={"circle vector-art"}>
                              <circle cx="20" cy="20" r="10" fill="none" stroke="red" stroke-width="7"/>
                          </svg>
                      </div>

                      <div className={"solder sd-2 sd-2-p"}>
                          <svg className={"vector-art sd-2"}>
                              <path d="M0,400 L120,0 L240,0 L240,10 L126,10 L10,400 Z" fill="red"/>
                          </svg>

                          <svg width="40" height="40" className={"circle vector-art"}>
                              <circle cx="20" cy="20" r="10" fill="none" stroke="red" stroke-width="7"/>
                          </svg>
                      </div>

                      <div className={"solder sd-3 sd-3-p"}>
                          <svg className={"vector-art sd-3"}>
                              <path d="M0,240 L66,0 L400,0 L400,10 L72,10 L10,240 Z" fill="red"/>
                          </svg>

                          <svg width="40" height="40" className={"circle vector-art"}>
                              <circle cx="20" cy="20" r="10" fill="none" stroke="red" stroke-width="7"/>
                          </svg>
                      </div>

                      <div className={"solder sd-4 sd-4-p"}>
                          <svg className={"vector-art sd-4"}>
                              <path d="M0,240 L66,0 L400,0 L400,10 L72,10 L10,240 Z" fill="red"/>
                          </svg>

                          <svg width="40" height="40" className={"circle vector-art"}>
                              <circle cx="20" cy="20" r="10" fill="none" stroke="red" stroke-width="7"/>
                          </svg>
                      </div>

                      {/* ----------------------------   TOP ---------------------------- */}

                      <div className={"solder sd-5 sd-5-p"}>
                          <svg className={"vector-art sd-5"}>
                              <path d="M0,0 L66,240 L400,240 L400,230 L72,230 L10,0 Z" fill="red"/>
                          </svg>

                          <svg width="40" height="40" className={"circle-top vector-art"}>
                              <circle cx="20" cy="20" r="10" fill="none" stroke="red" stroke-width="7"/>
                          </svg>
                      </div>
                  </div>
              </div>
          </div>


          <div className={"panel"} id={"start"}>
              <div className={"button"} id={"getting-started"}>
                  <a href="/">
                      Explore
                  </a>
              </div>

              <div className={"info-panel"}>
                  <div className={"info"}>
                      <h2>
                          Overview
                      </h2>
                      <p>
                          C-X is a subset of C that utilizes many modern compiler technologies. It has heavy
                          optimizations
                          and
                          memory safety but gives the programmer full control with its region based programming model.
                          The
                          main feature of C-X is its ability to utilize GPU without a need for installing any drivers!
                      </p>
                  </div>

                  <div className={"info"}>
                      <h2>
                          Features
                      </h2>

                      <ul>
                          <li><h3>GPU support</h3> <p>Supports GPU without any third-party vendors. </p></li>
                          <li><h3>Memory safety</h3> <p> Provides memory safety with the borrow checker </p></li>
                          <li><h3></h3> <p> Provides memory safety with the borrow checker </p></li>
                          <li>Compiler Construction</li>
                      </ul>
                  </div>
              </div>
          </div>


      </>
    )
}

export default App
