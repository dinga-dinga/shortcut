import React from 'react';
import Sections from './Sections.js'
import Header from './Header.js'
class App extends React.Component {

  render() {
    return (
	<div>
      <Header/>	
      {a()}
    </div>
    );
  }
}


function a()
{
	return <Sections/>;
}

export default App;