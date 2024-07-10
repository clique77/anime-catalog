import "./sass/authorization.scss";
import { Link } from "react-router-dom";

const Authorization = () => {
  return (
    <div className="form">
      <div className="wrapper">
        <h1>Registration</h1>
        <input type="text" required placeholder="Enter Your Username" /> <br />
        <input type="password" required placeholder="Enter Your Password" />
        <br />
        <button>Log in</button> <br />
        <Link to="/registration">Dont have an account?</Link>
      </div>
    </div>
  );
};

export default Authorization;
