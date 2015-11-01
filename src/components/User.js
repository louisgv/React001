'use strict';

import React, {
  Component,
  PropTypes
} from 'react';

require('styles/User.scss');

class UserInput extends Component {

  constructor(...args) {
    super(...args);
    this.state = {};
  }

  handleSubmit(e) {
    e.preventDefault();

    const name = this.refs
      .name
      .value
      .trim();

    if (!name) {
      return
    }

    // console.log(name);
    this.refs.name.value = '';
    return;
  }

  updateValue(e) {
    this.setState({
      name: e.target.value
    });
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <h2>{this.state.name}</h2>
        <input type='text' onChange={this.updateValue.bind(this)} value={this.state.name} placeholder='username' />
        <input type='submit' value='Post'/>
      </form>
    );
  }
}

class UserName extends Component
{
  render() {
    return (
      <div className='username-component'>
        Name :
        {this.props.name}
      </div>
    );
  }
}

class User extends Component
{
  render() {
    return (
      <div className='user-component'>
        <UserInput/>

        <h1>
          <UserName name= { this.props.user.name }/>
          City :
          {this.props.user.city}

        </h1>
      </div>
    );
  }
}

UserName.displayName = 'UserName';
// Uncomment properties you need

UserName.propTypes = {
  name: PropTypes.string.isRequired,
  city: PropTypes.string.isRequired
}

// UserName.defaultProps =
export default User;
