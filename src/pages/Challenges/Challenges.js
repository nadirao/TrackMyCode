import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import MuiDatePicker from "../../components/MUIDatePicker";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import Button from "@mui/material/Button";


export default function Challenges({challenge, setChallenge, loading, setLoading, url, fetchChallenge}) {

  const { slug } = useParams();

  // const fetchChallenge = async () => {
  //   setLoading(false)
  //   try {
  //     const response = await fetch(url+slug);
  //     const data = await response.json();
  //     setChallenge(data);
  //     setLoading(!loading);
  //     // console.log(data);
  //   } catch (error) {
  //     console.log(error);
  //   }
  // };
  

  // console.log("challenge:", challenge);

  useEffect(() => {
    fetchChallenge(slug);
  }, []);

  const cardStyle = {
    height: '80%',
    maxWidth: '450px'
  }

  return (
    <div className="Challenge">
      {loading ? (
        <>
          <div className="challenge-name">{challenge.name}</div>
          <Card style={cardStyle}>
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
