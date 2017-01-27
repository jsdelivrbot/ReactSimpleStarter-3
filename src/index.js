import React from 'react';
import ReactDOM from 'react-dom';

import SearchBar from './components/search_bar';

const API_KEY = 'AIzaSyCf3dwRjFAaVUPoDx6MQmIysHGycX4bkjY';

// Create a new component. This component shoulde produce
// some HTML
const App = () => {
  return (
    <div>
    <SearchBar />
    </div>
  );
}

// Take this component's generated HTML and put it
// on the page (in the DOM)

ReactDOM.render(<App />, document.querySelector('.container'));
