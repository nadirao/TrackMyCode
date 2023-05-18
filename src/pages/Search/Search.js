import { Link } from "react-router-dom";
import { useState } from "react";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Codewars from "../../assets/codewars-logo.jpeg";

export default function Search({ fetchChallenge, challenge, loading, setLoading }) {
  const [newSearch, setSearch] = useState("");

  const handleChange = (e) => {
    setSearch(e.target.value.replace(/\s+/g, "-").toLowerCase());
    // console.log(e.target.value)
  };
  // console.log(newSearch);

  const handleSubmit = async (e) => {
    e.preventDefault();
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
        <input className="search" type="submit" value="Search" />
      </form>
      {loading ? ( 
      <div style={{ margin: "15%" }}>
        <Card sx={{ maxWidth: 500 }}>
          <CardMedia
            component="img"
            height="140"
            image={Codewars}
            alt="Codewars"
          />
          <CardContent>
            <Typography gutterBottom variant="h5" component="div">
              {challenge.name}
            </Typography>
            <Typography variant="body2" color="text.secondary">
              {challenge.description.replace(/`/g, "'").split("\n")[0]}
            </Typography>
          </CardContent>
          <CardActions>
            <Link to={`/challenges/${newSearch}`}>
              <Button size="small" onClick={() => setLoading(!loading)}>Track Progress</Button>
            </Link>
          </CardActions>
        </Card>
      </div>
      ) : (
        <h1>  </h1>
      )}
    </div>
  );
}
