import React from 'react';
import { connect } from 'react-redux';
import '../assets/styles/components/Header.scss';
import logo from '../assets/static/logo-platzi-video-BW2.png';
import userIcon from '../assets/static/user-icon.png';
import { Link } from 'react-router-dom';
import { gravatar } from '../utils/gravatar'
import { logoutRequest } from '../actions';
import PropTypes from 'prop-types';
import classNames from 'classnames';
const Header = (props) => {
  const { user, isLogin, isRegister } = props;
  const hasUser = Object.keys(user).length > 0;

  const handleLogout = () => {
    props.logoutRequest({});
  }

  const headerClass = classNames('header', {
    isLogin,
    isRegister
  });
  
  return (
    <header className={headerClass}>

      <Link to="/">
        <img className="header__img" src={logo} alt="Platzi Video" />
      </Link>
      <div className="header__menu">
        <div className="header__menu--profile">
          {
            hasUser ?
              <img src={gravatar(user.email)} alt={user.email} />
              :
              <img src={userIcon} alt="" />
          }
          <p>Perfil</p>
        </div>
        <ul>
          {
            hasUser ?
              <>
                <li><Link to="/">{user.name}</Link></li>
                <li><a href="#logout" onClick={handleLogout}>Cerrar Sesión</a></li>
              </>
              :
              <li><Link to="/login">Iniciar Sesión</Link></li>
          }
        </ul>
      </div>
    </header>
  );
}

const mapStateToProps = state => {
  return {
    user: state.user
  };
}

const mapDispatchToProps = {
  logoutRequest
}

Header.propType = {
  user: PropTypes.object.isRequired,
  logoutRequest: PropTypes.func.isRequired
}
export default connect(mapStateToProps, mapDispatchToProps)(Header);
