import React from 'react';
import Sections from './Sections.js'
import Header from './Header.js'
import PersonCard from './PersonCard'

const person = 
{
"Employer": "IDF",
"End": "03/2019",
"ID": "937592794",
"IdfID": "5927583",
"Image": "./resources/people/omer.jpg",
"Name": "Omer Chen",
"PhoneNumber": "0501223445",
"RleaseDate": "11/2021",
"Role": "Team Leader",
"Start": "03/2019"
}


class App extends React.Component {

  render() {
    return (
	<React.Fragment>
      <Header/>	
      <PersonCard person={person}/>
      {/* <Sections/> */}
    </React.Fragment>
    );
  }
}
export default App;