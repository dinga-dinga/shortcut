import React from 'react'
import './PersonCard.css'

const images = require.context('./', true)

const PersonCard = ({person}) => (
    <div className="Card">
        <img src={images(person.Image)} alt="person" width='100%'/>    
        <h1 className="personName">{person.Name}</h1>
        <h2 className="PersonType">{person.Role}</h2>
        <h2 className="">{person.Start} - {person.End}</h2>
    </div>
  );



export default PersonCard;