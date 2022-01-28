import Navbar from "./components/Navbar";
import General from "./components/General";
import Education from "./components/Education";

import "./components/components.css";

function App() {
  return (
    <div>
      <Navbar />
      <div className="stuff">
        <General />
        <Education />
      </div>
    </div>
  );
}

export default App;
