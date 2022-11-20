import './App.css';
import Nav from "../src/components/Nav"
import Home from './components/Home';
import {BrowserRouter as Router, Route, Link, Routes} from 'react-router-dom';
import Footer from './components/Footer';
function App() {
  return (
    <><Nav /><><Router>
      <div>
        <nav>
         
        </nav>

        {/* 👇️ Wrap your Route components in a Routes component */}
        <Routes>
          <Route path="/about" exact />
          <Route path="/" element={<Home />} />

        </Routes>
      </div>
    </Router><Footer /></></>
  );
}
export default App;
