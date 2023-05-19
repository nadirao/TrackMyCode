import { useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import MuiDatePicker from "../../components/MUIDatePicker";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import Button from "@mui/material/Button";

export default function Challenges(props) {
  const { slug } = useParams();

  useEffect(() => {
    props.fetchChallenge(slug);
  }, []);

  const cardStyle = {
    height: "80%",
    maxWidth: "450px",
  };

  return (
    <div className="Challenge">
      {props.loading ? (
        <>
          <div className="challenge-name">{props.challenge.name}</div>
          <Card style={cardStyle}>
            <CardContent>
              <div className="challenge-description">
                {props.challenge.description.replace(/`/g, "'").split("\n")[0]}
                <div className="challenge-url">
                  <Link to={props.challenge.url}>
                    Click here to view '{props.challenge.name}' on codewars
                  </Link>
                </div>
              </div>
              <hr />
              <div className="challenge-details">
                <div className="username">
                  <label>Assigned To:</label>
                  <label>{props.user}</label>
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
                  <label>Due Date</label>
                  <label>
                    <MuiDatePicker />
                  </label>
                </div>
              </div>
              <hr />
              <div className="notes">
                <label>Description</label>
                <label>
                  <input type="text" placeholder="Write A Note"></input>
                </label>
              </div>
            </CardContent>
            <CardActions>
              <Button size="small">Save Challenge</Button>
            </CardActions>
          </Card>
        </>
      ) : (
        <h1></h1>
      )}
    </div>
  );
}
