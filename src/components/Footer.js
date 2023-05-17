import "../styles/App.css";

export default function (props) {
  return (
    <div className="footer">
      Copyright &copy; All Rights Reserved {new Date().getFullYear()}
    </div>
  );
}
