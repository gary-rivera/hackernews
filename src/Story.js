import React from 'react';

class Story extends React.Component {
  render() {
    // maybe try this.stories or this.props.stories
    const { url, title } = this.props.story;
    return (
      <li> 
        <a href={url}> {title}</a>
      </li>
    )
  }
}

export default Story;