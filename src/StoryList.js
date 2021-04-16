import React from 'react';
import axios from 'axios'
import SearchForm from './SearchForm';
import Story from './Story';

class StoryList extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      stories: [],
    }
    this.handleSearch = this.handleSearch.bind(this)
  }
  // fn to pass to search form
  async handleSearch(term) {
    const resp = await axios.get(`https://hn.algolia.com/api/v1/search?query=${term}`)
    console.log("RESP!", resp)
    this.setState({stories: resp.data.hits})
    console.log(this.state.stories)
  }

  // handleChange(evt) {
  //   this.setState({term: evt.target.value})
  // }

  // async componentDidMount() {
  //   this.handleSearch(this.term)
  // }

  // componentDidUpdate(prevState) {
  //   // if(prev.stories)
  //   if (prevState.stories !== this.state.stories) {
  //     console.log("DIDUPDTE STATE, ", this.state.stories)
  //     console.log('changed! `')
  //   }
  // }

  // async componentDidUpdate(prevProps) {
  //   // if we received a new todo, we need to fetch its data
  //   if (prevProps.todoId !== this.props.todoId) {
  //     const id = this.props.todoId;
  //     const response = await axios
  //       .get(`https://jsonplaceholder.typicode.com/todos/${id}`);
  //     this.setState({ todo: response.data });
  //   }
  // };

  render() {
    return (
      <div>
        <SearchForm 
          handleSearch={this.handleSearch}
          // handleChange={this.handleChange}
        />
        <ul> 
        {this.state.stories.map(story => <Story story={story} /> )}
        </ul>
      </div>
    )
  }
}

export default StoryList; 