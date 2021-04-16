import React from 'react';

class SearchForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      term: ''
    };
    this.handleSearch = this.props.handleSearch.bind(this)
    this.handleChange = this.props.handleChange.bind(this)
  }

  handleChange = (evt) => {
    this.setState({[evt.target.name]: evt.target.value})
  }

  handleSubmit = (evt) => {
    evt.preventDefault();
    console.log(this.state.term)
    this.handleSearch(this.state.term);
    this.setState({ term: ''});
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit}> 
        <label htmlFor="term">Term:</label>
        <input 
          value={this.state.term}
          onChange={this.handleChange}
          name="term"
          id="term"
        />
        <button>Search</button>
      </form>
    )
  }
}

export default SearchForm;