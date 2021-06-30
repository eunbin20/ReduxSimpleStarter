import React from "react";
import ReactDOM from "react-dom";
import SearchBar from "./components/search_bar";

const API_KEY = 'AIzaSyAYxWXKWXXNIiVHxQ9YrrxNQKjSi4KE2qg';

const App = function () {
  return (
    <div>
      <SearchBar />
    </div>
  );
};

const root = document.querySelector(".container");
ReactDOM.render(<App />, root); 