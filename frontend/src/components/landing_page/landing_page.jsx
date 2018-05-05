import React, {Component} from 'react';
import { connect } from 'react-redux';
import { fetchUsers } from '../../actions/user_actions';
import { asArray } from '../../reducers/users/selectors';
import './landing_page.css';

const mapStateToProps = state => {
  const users = asArray(state.entities.users);
  return {
    users
  }
}

const mapDispatchToProps = dispatch => {
  return {
    requestUsers: () => dispatch(fetchUsers())
  }
}

class LandingPage extends Component {
  componentDidMount(){
    this.props.requestUsers();
  }
  render(){
    return(
      <ul className='super-team'>
        {
          this.props.users.map(user => {
            return <li key={user.id}>{user.userName}</li>
          })
        }
      </ul>
    )
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(LandingPage);
