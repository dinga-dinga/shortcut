import React from 'react';
import Sections from './Sections.js'
import Header from './Header.js'
class App extends React.Component {

  render() {
    return (
	<React.Fragment>
      <Header/>	
      <Sections/>
    </React.Fragment>
    );
  }
}
export default App;