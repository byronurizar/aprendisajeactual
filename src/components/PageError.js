import React from 'react';
import './styles/PageError.css';
import ErrorImage from"../images/error.svg";
import { Link } from"react-router-dom";
const PageError=(props)=>{
return (
    <div className="PageError">
    <img src={ErrorImage}alt="Error"className="img-error" />
    <h1 className="error-text">{props.error.message}</h1>
    <Link to="/"className="btn btn-warning">
      Back home
    </Link>
  </div>
)
}
export default PageError;