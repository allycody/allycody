import React from 'react';
import {Link} from 'react-router';

/*const hardCodedData = [
  { id: 1, name: 'Cody' },
  { id: 2, name: 'Ben' },
  { id: 3, name: 'Bubba' }
];*/

export default class AllPuppies extends React.Component {


  render () {
    return (
      <div>
        <ul className="list-unstyled">
        {
        this.props.allPuppies.map(puppy => (
          <li key={puppy.id}><Link to={`/puppies/${puppy.id}`} >{puppy.name}</Link></li>
           )
          )
        }
        </ul>
      </div>
    )
  }
}