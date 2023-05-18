import "../styles/App.css";
import { Routes, Route } from "react-router-dom";
import Header from "./Header";
import SignUpPage from "../pages/SignUpPage/SignUpPage";
import Search from "../pages/Search/Search";
import Home from "../pages/Home/Home";
import Challenges from "../pages/Challenges/Challenges";
import ChallengesList from "../pages/ChallengesList/ChallengesList";
import Footer from "./Footer";
import { useState } from "react";

function App() {
  const [challenge, setChallenge] = useState([]);
  const [loading, setLoading] = useState(false);

  const [user, setUser] = useState(null);

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
      {user ? (
        <>
          <Header />
          <Routes>
            <Route path="/" element={<Home />}></Route>
            <Route
              path="/search"
              element={
                <Search
                  challenge={challenge}
                  fetchChallenge={fetchChallenge}
                  loading={loading}
                  setLoading={setLoading}
                />
              }
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
                  user={user}
                />
              }
            ></Route>
          </Routes>
          <Footer />
        </>
      ) : (
        <SignUpPage setUser={setUser} />
      )}
    </div>
  );
}

export default App;
