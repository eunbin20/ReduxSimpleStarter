import React, { Component } from "react";
// === const Component = React.Component;


class SearchBar extends Component {
  constructor(props) {
    super(props);

    this.state = { term: '' };
  }
  render() {
    return (
    <div className="search-bar">
      <input 
      value = {this.state.term}
      onChange={event => this.setState({ term: event.target.value })} />
    </div>
    );
  }

}

export default SearchBar;


// 이 어플리케이션 어느 곳에서도 search bar를 참조할 수 있게됨
