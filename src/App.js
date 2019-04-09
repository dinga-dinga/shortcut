import React from 'react';
import Sections from './Sections.js'
import Header from './Header.js'
import ProjectPage from './ProjectPage'
import './App.css'

class App extends React.Component {

  render() {
    return (
	<div className="Main">
      <Header/>	
      <ProjectPage/>
      
    </div>
    );
  }
}


function a()
{
	return <Sections/>;
}

export default App;