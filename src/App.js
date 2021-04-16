import React from 'react';
import StoryList from './StoryList';

class App extends React.Component{
  render() {
    return (
      <div> 
        <h1> HackerNews </h1>
        <StoryList />
      </div>
    )
  }
}

export default App;