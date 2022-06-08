import React from "react";
import { Link, useNavigate } from "react-router-dom";
import DownloadIcon from '@mui/icons-material/Download';
import authService from "../Services/auth";

const Navbar = () => {
  const URL = "http://localhost:8080";

  const navigate = useNavigate();
  const handleLogout = () => {
    authService.logout();
    navigate("/");
    window.location.reload();
  };

  const currentUrl = window.location.href;
  let convertedUrl = currentUrl.split("/");
  console.log(currentUrl.split("/")[convertedUrl.length - 1]);

  return (
    <div className="mb-4">
      <nav className="navbar navbar-fixed-top navbar-light bg-success">
        <div className="container-fluid d-flex justify-content-around align-items-center mt-1">
          <a className="text-success">........................................</a>
          <a className="navbar-brand text-light" >
          <h2><DownloadIcon style={{fontSize: 45}}/>
            React Markdown Editor</h2>
          </a>
          <button
            className="btn btn-light mt-3"
            onClick={handleLogout}
            style={
              currentUrl.split("/")[convertedUrl.length - 1] == "signUp" ||
              currentUrl.split("/")[convertedUrl.length - 1] == ""
                ? {
                    marginLeft: 150,
                    marginBottom: 15,
                    
                    visibility: "hidden",
                  }
                : { marginLeft: 150, marginBottom: 15 }
            }
          >
            Logout
          </button>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
