import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import logo from "../assets/img/argentBankLogo.webp";
import { logout } from "../redux/actions/authentificationAction";

const Header = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const isAuthentificated = useSelector((state) => state.isAuthentificated);
  const username = useSelector((state) => state.username);

  //gérer la deconnexion

  const handleLogout = () => {
    dispatch(logout()); //déclenche l'action de déconnexion
    navigate("/LoginPage");
  };

  return (
    <nav className="main-nav">
      <Link className="main-nav-logo" to="/">
        <img
          className="main-nav-logo-image"
          src={logo}
          alt="Argent Bank Logo"
        />
        <h1 className="sr-only">Argent Bank</h1>
      </Link>
      <div>
        {isAuthentificated ? (
          <>
            <Link to="/editPage">
              <i className="fa-solid fa-gear icon-header"></i>
              <i className="fa fa-user-circle icon-header"></i>
              <span className="icon-header username">{username}</span>
            </Link>
            <span className="main-nav-item" onClick={handleLogout}>
              Lougout
            </span>{" "}
          </>
        ) : (
          <Link className="main-nav-item" to="/LoginPage">
            <i className="fa fa-user-circle"></i>
            Sign In
          </Link>
        )}
      </div>
    </nav>
  );
};

export default Header;
