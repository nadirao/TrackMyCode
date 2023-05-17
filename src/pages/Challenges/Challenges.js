import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

export default function Challenges(props) {
  const { id } = useParams();
  const url = `https://www.codewars.com/api/v1/code-challenges/${id}`;

  const [challenge, setChallenge] = useState([]);
  const [loading, setLoading] = useState(false);

  const fetchChallenge = async () => {
    try {
      const response = await fetch(url);
      const data = await response.json();
      setChallenge(data);
      setLoading(!loading);
      console.log(data);
    } catch (error) {
      console.log(error);
    }
  };

  console.log("challenge:", challenge);

  useEffect(() => {
    fetchChallenge();
  }, []);

  return (
    <div className="Challenge">
      {loading ? (
        <>
          Name: {challenge.name}
          URL: {challenge.url}
          Description: {challenge.description.split('\n')[0]}
        </>
      ) : (
        <h1>Loading...</h1>
      )}
    </div>
  );
}
