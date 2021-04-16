import React from 'react';
import axios from 'axios'
import SearchForm from './SearchForm';
import Story from './Story';

class StoryList extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      stories: [],
      term: ''
    }
  }
  // fn to pass to search form
  async handleSearch(term) {
    const resp = await axios.get(`https://hn.algolia.com/api/v1/search?query=${term}`)
    this.setState({stories: resp.data.hits})
    console.log(this.state.stories)
  }

  handleChange(evt) {
    this.setState({term: evt.target.value})
  }

  setTerm(term) {
    this.setState({term: term})
  }

  async componentDidMount() {
    this.handleSearch(this.term)
  }

  componentDidUpdate(prevStories) {
    // if(prev.stories)
    console.log('changed! `')
  }

  render() {
    return (
      <div>
        <SearchForm 
          handleSearch={this.handleSearch}
          handleChange={this.handleChange}
        />
        <ul> 
        {this.state.stories.map(story => <Story story={story} /> )}
        </ul>
      </div>
    )
  }
}

export default StoryList; 