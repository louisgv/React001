'use strict';

import React, {
  Component,
  PropTypes
} from 'react';

require('styles//Todo.scss');

var allItems = [];

class TodoList extends Component {
  constructor(props) {
    super(props);
    this.addEvent = this.addEvent
      .bind(this);
    this.state = {
      items: allItems
    };
  }
  render() {
    var item = this.props
      .items
      .map((item) => {
        return (
          <li><TodoItem item={item}/></li>
        );
      });
    return (
      <div>
        <ul>(item)</ul>
        <p><NewTodoItem addEvent={this.addEvent}/></p>
      </div>
    );
  }

  addEvent(item) {
    this.state
      .items
      .push(item.newItem);
    // this.setState(items : );
  }
}

class TodoItem extends Component {
  render() {
    return (
      <div>{this.props.item}</div>
    );
  }
}

class NewTodoItem extends Component {
  constructor(props) {
    super(props);
    this.onSubmit = this.onSubmit
      .bind(this);
  }

  componentDidMount() {
    React.findDOMNode(this.refs.itemName)
      .focus();
  }

  render() {
    return (
      <form onSubmit={this.onSubmit}>
        <input ref='itemName' type='text'/>
      </form>
    )
  }

  onSubmit(e) {
    e.preventDefault();
    var input = React.findDOMNode(this.refs.itemName)
    var newItem = input.value;
    this.props
      .addEvent({newItem});
    input.value = '';
  }
}

TodoList.displayName = 'TodoList';

// Uncomment properties you need
// TodoComponent.propTypes = {};
// TodoComponent.defaultProps = {};

export default TodoList;
