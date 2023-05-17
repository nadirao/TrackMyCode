import './styles/App.css';
import { Routes, Route } from "react-router-dom";
import Header from './components/Header'
import Search from './pages/Search/Search'
import Home from './pages/Home/Home'
import Challenges from './pages/Challenges/Challenges'
import ChallengesList from './pages/ChallengesList/ChallengesList'
import Footer from './components/Footer'


function App() {
  return (
    <div className="App">
      <Header />
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/search" element={<Search />}></Route>
        <Route path="/challenges" element={<ChallengesList />}></Route>
        <Route path="/challenges/:id" element={<Challenges />}></Route>
      </Routes>
    </div>
  );
}

export default App;
