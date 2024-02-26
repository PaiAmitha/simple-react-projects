import './App.css';
import Header from './Header';
import AddContact from './AddContact';
import ContactList from './ContactList';
import { useState } from 'react';

function App() {

  const [contact, setContact] = useState([]);
  return (
    <div className='ui container'>
      <Header/>
      <AddContact/>
      <ContactList/>
    </div>
  );
}

export default App;
