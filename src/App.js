import React, {useState} from 'react';
import logo from './logo.svg';
import './App.css';


function App() {

  const [team, setTeam] = useState([
    {
      name: "full name",
      email:'email',
      role:"role"
    }
  ])


const newState = event => {
  setState({...state,[event.target.name]: event.target.value});
};

const submit = event => {
  event.preventDefault();

}

  return (
    <div className="App">
      <header className="App-header"> Team Members</header>
      <form onSubmit={submit}>
        <label>Name
        <input 
        name="name"
        type="text"
        placeholder="enter name"
        onChange={newState}
        /></label>
        <label>Email</label>
        <input 
        name="email"
        type="text"
        placeholder="enter email"
        onChange={newState}
        />
        <label>Role</label>
        <input 
        name="role"
        type="text"
        placeholder="enter role"
        onChange={newState}
        />
        <button type="submit">Add Member</button>

      </form>
    </div>
  );
}

export default App;
