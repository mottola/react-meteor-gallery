// Any JS in here is automatically run when someone visits the page

// Import the React library
import React, { Component } from 'react';
// Import ReactDOM library
import ReactDOM from 'react-dom';
// Import axios for http requests
import axios from 'axios';
// Import necessary components
import ImageList from './components/image_list';


// Create a component
class App extends Component {
  // gives our component access to state
  constructor(props) {
    // calls react parent constructor (built in)
    super(props);

    // initializes our State object
    this.state = { images: [] };
  }
  // catches and loads data before app is rendered to DOM
  componentWillMount() {
    // Test axios request
    axios.get('https://api.imgur.com/3/gallery/hot/viral/0')
      // change of state based on API object keys
      .then(response => this.setState({ images: response.data.data }));
  }

  render() {
    return (
      // Below is JSX, NOT HTML! The JSX is transpiled into
      // JavaScript code
      <div>
        <ImageList images={this.state.images}/>
      </div>
    );
  }
};


// Render this component to the screen

// Meteor startup won't let the code run until Meteor is started
Meteor.startup(() => {
  // render takes 2 arguments :
  // 1) The component to render - wrapped (instance of component)
  // 2) Where to render said component
  ReactDOM.render(<App />, document.querySelector('.container'));
});
