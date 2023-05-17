import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import MuiDatePicker from "../../components/MUIDatePicker";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import Button from "@mui/material/Button";
import { Typography } from "@material-ui/core";

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
          <div className="challenge-name">{challenge.name}</div>
          <Card sx={{ maxWidth: 345 }}>
            <CardContent>
              <div className="challenge-description">
                {challenge.description.replace(/`/g, "'").split("\n")[0]}
              </div>
              <hr />
              <div className="challenge-details">
                <div className="username">
                  Assignee
                  {/* add username */}
                </div>
                <div className="status">
                  <label>Status</label>
                  <select>
                    <option value="todo">To Do</option>
                    <option value="ip">In Progress</option>
                    <option value="done">Done</option>
                    <option value="blocked">Blocked</option>
                  </select>
                </div>
                <div className="due-date">
                  Due Date
                  <MuiDatePicker />
                </div>
              </div>
              <hr />
              <div className="notes">Description
              <input type="text" placeholder="Write A Note"></input>
              </div>

            </CardContent>
            <CardActions>
              <Button size="small">Save Challenge</Button>
            </CardActions>
          </Card>
        </>
      ) : (
        <h1>Loading...</h1>
      )}
    </div>
  );
}
