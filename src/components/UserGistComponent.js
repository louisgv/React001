'use strict';

import React from 'react';

require('styles//UserGist.scss');
require('whatwg-fetch');

class UserGist extends React.Component {

}

class UserGistComponent extends React.Component {

  constructor(props){
    super(props);
  }

  render() {
    return (
      <div className="usergist-component">
        <UserGist source="https://api.github.com/users/octocat/gists"/>
      </div>
    )
  }
}

UserGistComponent.displayName = 'UserGistComponent';

// Uncomment properties you need
// UserGistComponent.propTypes = {};
// UserGistComponent.defaultProps = {};

export default UserGistComponent;
