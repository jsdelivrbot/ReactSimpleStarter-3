import React, { Component } from 'react';

class SearchBar extends Component {

  constructor(props) {
    super(props);

    this.state = {
      term: ''
    };
  }

  render() {
    return (
      <div>
      <input
      value={this.state.term} // setting value in the input tells us it now a controlled component
      onChange={ event => this.setState({ term: event.target.value })} />
          Value: {this.state.term}
      </div>
    );
  }

}

export default SearchBar;
