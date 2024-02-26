import React from 'react'

const AddContact = () => {

   const state = {
       name : "",
       email: "", 
    };

    add = (e) => {
        e.preventDefault();
        if(this.state.name === "" && this.state.email === ""){
            alert("All the fields are mandatory!");
            return
        }
        
    }
  return (
    <div className='ui main'>
        <h2>Add Contact</h2>
        <form className="ui form" onSubmit={this.add}>
            <div className="field">
                <label>Name</label>
                <input type='text' name="name" value={this.state.name} placeholder='Name' onChange={ (e) => this.setState({name: e.target.value})}/>
            </div>
            <div className="field">
                <label>Email</label>
                <input type='email' name="email"  value={this.state.email} placeholder='Email' onChange={ (e) => this.setState({email: e.target.value})}/>
            </div>
            <button className='ui button blue'>Add</button>
        </form>
      
    </div>
  )
}

export default AddContact
