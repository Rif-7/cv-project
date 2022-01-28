import Navbar from "./components/Navbar";
import General from "./components/General";
import Education from "./components/Education";
import Experience from "./components/Experience";

import "./components/components.css";

function App() {
  return (
    <div>
      <Navbar />
      <div className="stuff">
        <General />
        <Education />
        <Experience />
      </div>
    </div>
  );
}

export default App;
