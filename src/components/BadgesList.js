import React from 'react';
import './styles/BadgesList.css'
import { Link } from 'react-router-dom';
import Gravatar from './Gravatar';


class BadgesListItem extends React.Component {
  render() {
    return (
      <div className="BadgesListItem">
        {/* <img
            className="BadgesListItem__avatar"
            src={this.props.badge.avatarUrl}
            alt={`${this.props.badge.firstName} ${this.props.badge.lastName}`}
          /> */}
        <Gravatar email={this.props.badge.email} className='Badge__avatar' alt={`${this.props.badge.firstName} ${this.props.badge.lastName}`} />

        <div>
          <strong>
            {this.props.badge.firstName} {this.props.badge.lastName}
          </strong>
          <br />@{this.props.badge.twitter}
          <br />
          {this.props.badge.jobTitle}
        </div>
      </div>
    );
  }
}


const useSearchBadges=(badges)=>{
  const [query, setQuery] = React.useState('');
  const[filteredBadges,setFilteredBadges]=React.useState(badges);
  React.useMemo(() => {
    const result = badges.filter(badge => {
      return `${badge.firstName} ${badge.lastName}`.toLowerCase().includes(query.toLowerCase());
    });
    setFilteredBadges(result);
  },[badges,query]);

  return {setQuery,filteredBadges};
}

//Los hooks solo se pueden utilizar dentro de componentes funcionales por lo de eliminacion la siguiente
// class BadgesList extends React.Component {
const BadgesList = (props) => {
  // render() {
  const badges = props.badges;
  const {query,setQuery,filteredBadges}=useSearchBadges(badges);

  //Se debe de utilizar cuando no se tenga demasiados elementos
  // const filteredBadges = badges.filter(badge => {
  //   return `${badge.firstName} ${badge.lastName}`.toLowerCase().includes(query.toLowerCase());
  // })

  //Use memo recibe dos argumentos el primero es una función y el segundo es una lista



  if (filteredBadges.length === 0) {
    return (
      <div>
        <div className="form-group">
          <label>Filter Badges</label>
          <input type="text" className="form-control"
            value={query}
            onChange={(e) => {
              setQuery(e.target.value);
            }}
          />
        </div>
        <h3>No badges were found</h3>
        <Link className="btn btn-primary" to="/badges/new">Create New Batch</Link>
      </div>
    )
  }
  return (
    <div className="BadgesList">
      <div className="form-group">
        <label>Filter Badges</label>
        <input type="text" className="form-control"
          value={query}
          onChange={(e) => {
            setQuery(e.target.value);
          }}
        />
      </div>
      <ul className="list-unstyled">
        {filteredBadges.map(badge => {
          return (
            <li key={badge.id}>
              <Link className="text-reset text-decoration-none" to={`/badges/${badge.id}`}>
                <BadgesListItem badge={badge} />
              </Link>

            </li>
          );
        })}
      </ul>
    </div>
  );
  // }
}

export default BadgesList;