import "./styles/App.css";
import { Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import Search from "./pages/Search/Search";
import Home from "./pages/Home/Home";
import Challenges from "./pages/Challenges/Challenges";
import ChallengesList from "./pages/ChallengesList/ChallengesList";
import Footer from "./components/Footer";
import { useState } from "react";

function App() {
  const [challenge, setChallenge] = useState([]);
  const [loading, setLoading] = useState(false);

  const url = `https://www.codewars.com/api/v1/code-challenges/`;

  const fetchChallenge = async (slug) => {
    setLoading(false);
    try {
      const response = await fetch(url + slug);
      const data = await response.json();
      setChallenge(data);
      setLoading(!loading);
      // console.log(data);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="App">
      <Header />
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route
          path="/search"
          element={<Search 
          challenge={challenge}
          setChallenge={setChallenge}
          loading={loading}
          setLoading={setLoading}
          fetchChallenge={fetchChallenge}
          url={url} />}
        ></Route>
        <Route path="/challenges" element={<ChallengesList />}></Route>
        <Route
          path="/challenges/:slug"
          element={
            <Challenges
              challenge={challenge}
              setChallenge={setChallenge}
              loading={loading}
              setLoading={setLoading}
              fetchChallenge={fetchChallenge}
              url={url}
            />
          }
        ></Route>
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
