import "../styles/App.css";

export default function (props) {
  return (
    <div className="footer">
      Copyright &copy; All Rights Reserved {new Date().getFullYear()} | <a href="https://github.com/nadirao">Github</a> |{" "}
      <a href="https://www.linkedin.com/in/nadiraomar/">LinkedIn</a>
    </div>
  );
}
