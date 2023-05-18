import { Link } from "react-router-dom";
import { useState } from "react";
import Challenges from "../Challenges/Challenges";


export default function Search({ fetchChallenge }) {
  const [newSearch, setSearch] = useState("");

  const handleChange = (e) => {
    setSearch(e.target.value);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    await setSearch(newSearch.replace(/\s+/g, "-").toLowerCase());
    console.log(newSearch);
    fetchChallenge(newSearch);
  };

  return (
    <div>
      <form className="searchform" onSubmit={handleSubmit}>
        <input
          type="text"
          value={newSearch}
          name="newSearch"
          onChange={handleChange}
          placeholder="Challenge Name"
        />
        <input
          className="search"
          type="submit"
          value="Search"
        />
      </form>
      <Link to={`/challenges/${newSearch}`}>
        <div className="show-challenge">
           
        </div>
      </Link>
    </div>
  );
}
