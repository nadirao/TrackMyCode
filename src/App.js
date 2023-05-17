import './styles/App.css';
import { Routes, Route } from "react-router-dom";
import Header from './components/Header'
import Search from './pages/Search/Search'
import Home from './pages/Home/Home'
import Challenge from './pages/Challenge/Challenge'
import ChallengeList from './pages/ChallengeList/ChallengeList'
import Footer from './components/Footer'

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/challenges" element={<ChallengeList />}></Route>
        <Route path="/challenges/:id" element={<Challenge />}></Route>
      </Routes>
    </div>
  );
}

export default App;
