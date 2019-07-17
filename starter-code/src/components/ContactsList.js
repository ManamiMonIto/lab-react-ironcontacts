import React, { Component } from 'react'

export default class Contacts extends Component {

  render() {
    const element = this.props.ironContacts.map(contact=>{
      return(
        <div>
         <tr>
          <td><img src = {contact.pictureUrl} width="20" height="20"/></td>
          <td>{contact.name}</td>
          <td>{contact.popularity.toFixed(2)}</td>
          <td><button onClick ={()=>this.props.deleteClick(contact.name)}>Delete</button></td>
         </tr>         
        </div>  
      )
    })

    return (      
  <div>
    <tr>
    <th>Picture</th>
    <th>Name</th>
    <th>Popularity</th>
    <th>Action</th>
    </tr>

    {element}

  </div>
     
    );
  }
}
