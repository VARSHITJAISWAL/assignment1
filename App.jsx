import { BrowserRouter as Router, Routes, Route, useNavigate } from "react-router-dom";
import styles from "./App.module.css";
import ComA from "./ComA.jsx";
import ComB from "./ComB.jsx";
import ComC from "./ComC.jsx";
import ComD from "./ComD.jsx";
import ComE from "./ComE.jsx";
import Signup from "./Signup.jsx";
import Profile from "./Profile.jsx";


function Home() {
  const navigate = useNavigate();

  return (
    <div className={styles.container}>
      <button className={styles.btn} onClick={() => navigate("/comA")}>
        User Section 
      </button>
      <button className={styles.btn} onClick={() => navigate("/comB")}>
        Hospital Section 
      </button>
      <button className={styles.btn} onClick={() => navigate("/comC")}>
        Ambulence <br />(On Prcess)
      </button>
      <button className={styles.btn} onClick={() => navigate("/comD")}>
        Emergency
       <br />(On Prcess)
 
      </button>
      <button className={styles.btn} onClick={() => navigate("/comE")}>
        Civics
      </button>
    </div>
  );
}

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/comA" element={<ComA />} />
        <Route path="/comB" element={<ComB />} />
        <Route path="/comC" element={<ComC />} />
        <Route path="/comD" element={<ComD />} />
        <Route path="/comE" element={<ComE />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/Profile" element={<Profile />} />
      </Routes>
    </Router>
  );
}

export default App;
