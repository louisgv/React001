'use strict';

import React from 'react';

require('styles//HouseListing.scss');

function urlForQueryAndPage(key, value, pageNumber) {
  var data = {
    country: 'uk',
    pretty: '1',
    encoding: 'json',
    listing_type: 'buy',
    action: 'search_listings',
    page: pageNumber
  };

  data[key] = value;

  var querystring = Object.keys(data)
    .map(key => key + '=' + encodeURIComponent(data[key]))
    .join('&');

  return 'http://api.nestoria.co.uk/api?' + querystring;
};

class HouseListingComponent extends React.Component {
  render() {
    return (
      <div className="houselisting-component">
        <h2>
          House Listing
        </h2>
      </div>
    );
  }
}

HouseListingComponent.displayName = 'HouseListingComponent';

// Uncomment properties you need
// HouseListingComponent.propTypes = {};
// HouseListingComponent.defaultProps = {};

export default HouseListingComponent;
