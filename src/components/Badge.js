import React from 'react';
import "./styles/Badge.css"

import confLogo from '../images/badge-header.svg';
import Gravatar from './Gravatar';
class Badge extends React.Component {
  render() {
    // this.props;
  // const firsName="Byron";
  // const lastName="Lopez";

    return (
      <div className="Badge">
        <div className="Badge__header">
          <img  src={confLogo} alt="Logo de la conferencia" />
        </div>

        <div className="Badge__section-name">
          {/* <img  className="Badge__avatar" src={this.props.avatarUrl} alt="Avatar" /> */}
          <Gravatar email={this.props.email} className='Badge__avatar' alt={`${this.props.firstName} ${this.props.lastName}`}/>
          <h1>
            {this.props.firstName} <br /> {this.props.lastName}
          </h1>
        </div>

        <div className="Badge__section-info">
          <h3>{this.props.jobTitle}</h3>
        <div>@{this.props.twitter}</div>
        <div>{this.props.email}</div>
        </div>

        <div className="Badge__footer">#platziconf</div>
      </div>
    );
  }
}

export default Badge;
