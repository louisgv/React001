'use strict';

require('normalize.css');
require('styles/Main.scss');

import React from 'react';

let mainImg = require('../images/lab.png');

let User = require('./User');

// let HouseListing = require('./HouseListingComponent');

// let UserGistComponent = require('./UserGistComponent');

let Todo = require('./TodoComponent')

class AppComponent extends React.Component {
  render() {
    var user = {
      name: 'Louis',
      city: 'Seattle'
    };

    return (
      <div className='index'>
        <img src={mainImg} alt='Louis'/>

        <User user={user}/>

        <Todo items={[]}/>
      </div>
    );
  }
}

AppComponent.defaultProps = {};

export default AppComponent;
