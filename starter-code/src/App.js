import React from 'react';
import './App.css';
import contacts from './contacts.json'
import ContactsList from './components/ContactsList';

class App extends React.Component {
  state = {
    ironContacts : contacts.slice(0,5)

  };

  addRandom = () => {
    let contactsCopy = [...this.state.ironContacts]
    contactsCopy.unshift(contacts[Math.floor(Math.random() * contacts.length)]) 
    this.setState({ironContacts:contactsCopy})
    };

  sortByName = () => {
    let contactsNameCopy = [...this.state.ironContacts]
    contactsNameCopy.sort((a,b)=>{
      if(a.name > b.name) return 1
      if(a.name < b.name) return -1
      else return 0

    })
    this.setState({ironContacts:contactsNameCopy})
      };

  sortByPopularity = () => {
    let contactsRateCopy = [...this.state.ironContacts]
    contactsRateCopy.sort((a,b) =>{
      if(a.popularity > b.popularity) return -1
      if(a.popularity < b.popularity) return 1
       else return 0
    })
    this.setState({ironContacts:contactsRateCopy})
        };

  deleteClick = (name) => {
    let removeContacts = [...this.state.ironContacts]
    removeContacts = removeContacts.filter((el) => el.name !== name)
     
    this.setState({ ironContacts:removeContacts});
         };
       
     
  


  render() {
    console.log(this.state);
    return (
      <div className="App">
       <h1>IronContacts</h1>
      <button onClick ={this.addRandom}>Add Random Contact</button>
      <button onClick ={this.sortByName}>Sort by name</button>
      <button onClick ={this.sortByPopularity}>Sort by popularity</button>

<ContactsList deleteClick = {this.deleteClick} ironContacts ={this.state.ironContacts}/>
//pass info to ContactList
      </div>
      
    );
  }
}

export default App;



